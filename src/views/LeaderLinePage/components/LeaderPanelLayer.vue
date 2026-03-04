<template>
  <div class="leader-panel-layer" ref="panelLayer">
    <!-- 所有引线统一绘制在底层 -->
    <svg class="leader-lines-svg">
      <g v-for="panel in visiblePanels" :key="'line-' + panel.id">
        <line
          v-if="panel.visible !== false"
          :x1="getLineStart(panel).x"
          :y1="getLineStart(panel).y"
          :x2="getAnchor(panel).x"
          :y2="getAnchor(panel).y"
          stroke="#e74c3c"
          stroke-width="2"
        />
        <circle
          v-if="panel.visible !== false"
          :cx="getAnchor(panel).x"
          :cy="getAnchor(panel).y"
          r="5"
          fill="#e74c3c"
        />
      </g>
    </svg>
    <!-- 线引面板 -->
    <LeaderPanel
      v-for="panel in visiblePanels"
      :key="panel.id"
      :panel="panel"
      :map="map"
      :showLine="false"
      @dragEnd="onPanelDragEnd"
      @positionUpdate="onPanelPositionUpdate"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import LeaderPanel from "./LeaderPanel.vue";
import { calculateNonOverlappingPositions, getLineStartPoint } from "../utils/collision";

const props = defineProps<{
  map: any
  panels: any[]
  autoLayout: boolean
}>()

const emit = defineEmits<{
  (e: 'panelMoved', panelId: string, position: { x: number; y: number }): void
}>()

const processedPanels = ref<any[]>([])
const panelPositions = ref<Record<string, { x: number; y: number }>>({})
const panelSizes = ref<Record<string, { width: number; height: number }>>({})
const mapUpdateKey = ref(0)

// 只返回锚点在可视区域内的面板
const visiblePanels = computed(() => {
  // 引用 mapUpdateKey 触发响应式更新
  void mapUpdateKey.value
  if (!props.map) return []

  const container = props.map.getContainer()
  const bounds = {
    width: container.clientWidth,
    height: container.clientHeight,
  }
  const padding = 50 // 边缘容差

  return processedPanels.value.filter((panel) => {
    if (panel.visible === false) return false
    const anchor = getAnchor(panel)
    return (
      anchor.x >= -padding &&
      anchor.x <= bounds.width + padding &&
      anchor.y >= -padding &&
      anchor.y <= bounds.height + padding
    )
  })
})

// 检查是否只是 visible 属性变化
const isOnlyVisibilityChange = (newPanels: any[], oldPanels: any[]) => {
  if (!oldPanels || !processedPanels.value.length) return false
  if (newPanels.length !== oldPanels.length) return false

  for (let i = 0; i < newPanels.length; i++) {
    const newP = newPanels[i]
    const oldP = oldPanels[i]
    // 检查除 visible 外的核心属性是否变化
    if (
      newP.id !== oldP.id ||
      newP.lat !== oldP.lat ||
      newP.lng !== oldP.lng ||
      newP.title !== oldP.title
    ) {
      return false
    }
  }
  return true
}

// 只同步 visible 状态
const syncVisibility = (newPanels: any[]) => {
  newPanels.forEach((panel) => {
    const processed = processedPanels.value.find((p) => p.id === panel.id)
    if (processed) {
      processed.visible = panel.visible
    }
  })
}

// 重新计算所有面板位置
const recalculatePositions = (panels: any[]) => {
  if (!props.map || !panels.length) {
    processedPanels.value = []
    return
  }

  // 使用碰撞检测计算初始位置
  processedPanels.value = calculateNonOverlappingPositions(
    panels.map((p) => ({ ...p })),
    props.map
  )
}

// 地图移动时触发重新渲染（实时更新引线）
const onMapMove = () => {
  mapUpdateKey.value++
}

// 地图拖拽结束时重新计算面板布局
const onMapMoveEnd = () => {
  if (!props.autoLayout) return

  // 清除之前的位置缓存
  panelPositions.value = {}
  panelSizes.value = {}

  // 重新计算所有面板位置
  recalculatePositions(props.panels)
}

// 地图缩放结束时重新计算可见面板的布局
const onMapZoomEnd = () => {
  if (!props.autoLayout) return

  // 清除之前的位置缓存
  panelPositions.value = {}
  panelSizes.value = {}

  // 重新计算所有面板位置
  recalculatePositions(props.panels)
}

// 面板拖拽结束
const onPanelDragEnd = (panelId: string, position: { x: number; y: number }) => {
  const index = processedPanels.value.findIndex((p) => p.id === panelId)
  if (index !== -1) {
    processedPanels.value[index].position = position
  }
  emit('panelMoved', panelId, position)
}

// 面板位置实时更新（用于引线跟随）
const onPanelPositionUpdate = (panelId: string, position: { x: number; y: number }, size?: { width: number; height: number }) => {
  panelPositions.value[panelId] = position
  if (size) {
    panelSizes.value[panelId] = size
  }
}

// 获取面板锚点位置
const getAnchor = (panel: any) => {
  // 引用 mapUpdateKey 以触发响应式更新
  void mapUpdateKey.value
  if (panel.lat && panel.lng && props.map) {
    const point = props.map.latLngToContainerPoint([panel.lat, panel.lng])
    return { x: point.x, y: point.y }
  }
  return panel.anchor || { x: 0, y: 0 }
}

// 获取引线起点（面板边缘）
const getLineStart = (panel: any) => {
  const position = panelPositions.value[panel.id] || panel.position || { x: 0, y: 0 }
  const size = panelSizes.value[panel.id] || panel.size || { width: 180, height: 100 }
  const anchor = getAnchor(panel)

  const rect = {
    x: position.x,
    y: position.y,
    width: size.width,
    height: size.height,
  }
  return getLineStartPoint(rect, anchor)
}

// 获取图层DOM元素（用于截图）
const getLayerElement = () => {
  return panelLayer.value
}

const panelLayer = ref<HTMLElement | null>(null)

watch(() => props.panels, (newPanels, oldPanels) => {
  // 检查是否只是 visible 属性变化
  if (isOnlyVisibilityChange(newPanels, oldPanels)) {
    // 只同步 visible 状态，不重新布局
    syncVisibility(newPanels)
  } else {
    // 面板数据有实质变化，重新计算布局
    recalculatePositions(newPanels)
  }
}, { immediate: true, deep: true })

onMounted(() => {
  // 监听地图移动和缩放，更新锚点位置
  if (props.map) {
    props.map.on("move", onMapMove)
    props.map.on("moveend", onMapMoveEnd)
    props.map.on("zoomend", onMapZoomEnd)
  }
})

onUnmounted(() => {
  if (props.map) {
    props.map.off("move", onMapMove)
    props.map.off("moveend", onMapMoveEnd)
    props.map.off("zoomend", onMapZoomEnd)
  }
})
</script>

<style scoped>
.leader-panel-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
}

.leader-lines-svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  pointer-events: none;
  z-index: 0; /* 引线在最底层 */
}
</style>
