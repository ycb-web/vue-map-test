<template>
  <div class="leader-panel-wrapper" v-show="panel.visible !== false">
    <!-- 线引线 (SVG) - 仅在 showLine 为 true 时显示 -->
    <svg class="leader-line-svg" v-if="showLine">
      <line
        :x1="lineStart.x"
        :y1="lineStart.y"
        :x2="anchor.x"
        :y2="anchor.y"
        stroke="#e74c3c"
        stroke-width="2"
      />
      <!-- 锚点标记 -->
      <circle
        :cx="anchor.x"
        :cy="anchor.y"
        r="5"
        fill="#e74c3c"
      />
    </svg>

    <!-- 面板内容 -->
    <div
      class="panel-content"
      :style="panelStyle"
      @mousedown="onMouseDown"
      ref="panelContent"
    >
      <div class="panel-header">
        <span class="panel-title">{{ panel.title }}</span>
      </div>
      <div class="panel-body">
        <!-- 表格数据 -->
        <table class="panel-table" v-if="panel.tableData && panel.tableData.length">
          <tr v-for="(row, index) in panel.tableData" :key="index">
            <td
              v-for="(cell, cellIndex) in row"
              :key="cellIndex"
              :class="{ 'cell-label': cellIndex === 0 }"
            >
              {{ cell }}
            </td>
          </tr>
        </table>
        <!-- 文本内容 -->
        <div v-else-if="panel.content" class="panel-text">
          {{ panel.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue'
import { getLineStartPoint } from "../utils/collision";

const props = defineProps<{
  panel: {
    type: Object,
    required: true
  }
  map: {
    type: Object,
    required: true
  }
  showLine?: boolean
}>()

const emit = defineEmits<{
  (e: 'dragEnd', panelId: string, position: { x: number; y: number }): void
  (e: 'positionUpdate', panelId: string, position: { x: number; y: number }, size?: { width: number; height: number }): void
}>()

const isDragging = ref(false)
const dragOffset = ref({ x: 0, y: 0 })
const currentPosition = ref({ x: 0, y: 0 })
const currentAnchor = ref({ x: 0, y: 0 })
const panelContent = ref<HTMLElement | null>(null)

const panelStyle = computed(() => {
  return {
    left: `${currentPosition.value.x}px`,
    top: `${currentPosition.value.y}px`,
    width: props.panel.size ? `${props.panel.size.width}px` : "auto",
  };
})

const anchor = computed(() => currentAnchor.value)

const lineStart = computed(() => {
  if (!panelContent.value) {
    return { x: currentPosition.value.x, y: currentPosition.value.y }
  }
  const rect = {
    x: currentPosition.value.x,
    y: currentPosition.value.y,
    width: panelContent.value.offsetWidth || 180,
    height: panelContent.value.offsetHeight || 100,
  }
  return getLineStartPoint(rect, currentAnchor.value)
})

watch(() => props.panel.position, (newPos) => {
  if (newPos) {
    currentPosition.value = { ...newPos }
    nextTick(() => emitPositionUpdate())
  }
}, { immediate: true, deep: true })

watch(() => props.panel.anchor, (newAnchor) => {
  if (newAnchor) {
    currentAnchor.value = { ...newAnchor }
  }
}, { immediate: true, deep: true })

// 绑定地图事件
const bindMapEvents = () => {
  if (props.map) {
    props.map.on("move", updateAnchorPosition)
    props.map.on("zoom", updateAnchorPosition)
  }
}

// 解绑地图事件
const unbindMapEvents = () => {
  if (props.map) {
    props.map.off("move", updateAnchorPosition)
    props.map.off("zoom", updateAnchorPosition)
  }
}

// 更新锚点位置（地图移动/缩放时）
const updateAnchorPosition = () => {
  if (props.panel.lat && props.panel.lng && props.map) {
    const point = props.map.latLngToContainerPoint([
      props.panel.lat,
      props.panel.lng,
    ])
    currentAnchor.value = { x: point.x, y: point.y }
  }
}

// 鼠标按下开始拖拽
const onMouseDown = (e: MouseEvent) => {
  if (e.button !== 0) return // 只响应左键
  e.preventDefault()
  e.stopPropagation()

  isDragging.value = true
  dragOffset.value = {
    x: e.clientX - currentPosition.value.x,
    y: e.clientY - currentPosition.value.y,
  }

  document.addEventListener("mousemove", onMouseMove)
  document.addEventListener("mouseup", onMouseUp)
}

// 鼠标移动
const onMouseMove = (e: MouseEvent) => {
  if (!isDragging.value) return

  currentPosition.value = {
    x: e.clientX - dragOffset.value.x,
    y: e.clientY - dragOffset.value.y,
  }

  // 通知父组件位置更新（用于引线跟随）
  emitPositionUpdate()
}

// 鼠标释放结束拖拽
const onMouseUp = () => {
  if (!isDragging.value) return

  isDragging.value = false
  unbindDragEvents()
  emit('dragEnd', props.panel.id, { ...currentPosition.value })
}

// 发送位置更新事件
const emitPositionUpdate = () => {
  const size = panelContent.value
    ? {
        width: panelContent.value.offsetWidth,
        height: panelContent.value.offsetHeight,
      }
    : null
  emit('positionUpdate', props.panel.id, { ...currentPosition.value }, size)
}

// 解绑拖拽事件
const unbindDragEvents = () => {
  document.removeEventListener("mousemove", onMouseMove)
  document.removeEventListener("mouseup", onMouseUp)
}

onMounted(() => {
  bindMapEvents()
  // 初始化时发送位置信息
  nextTick(() => emitPositionUpdate())
})

onUnmounted(() => {
  unbindMapEvents()
  unbindDragEvents()
})
</script>

<style scoped>
.leader-panel-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.leader-line-svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  pointer-events: none;
}

.panel-content {
  position: absolute;
  background: rgba(255, 255, 255, 0.98);
  border: 2px solid #e74c3c;
  border-radius: 4px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
  min-width: 150px;
  cursor: move;
  pointer-events: auto;
  user-select: none;
}

.panel-header {
  background: #e74c3c;
  color: #fff;
  padding: 6px 10px;
  font-weight: bold;
  font-size: 12px;
}

.panel-body {
  padding: 8px;
  font-size: 12px;
}

.panel-table {
  width: 100%;
  border-collapse: collapse;
}

.panel-table td {
  padding: 3px 6px;
  border: 1px solid #ddd;
  white-space: nowrap;
}

.panel-table .cell-label {
  background: #f5f5f5;
  font-weight: 500;
}

.panel-text {
  line-height: 1.5;
}
</style>
