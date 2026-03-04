<template>
  <div class="map-status">
    <!-- 位置信息：经纬度 + 层级 -->
    <span class="position-info"
      >位置: {{ latStr }}, {{ lngStr }}, {{ zoom }}</span
    >
    <!-- 比例尺 -->
    <span class="scale-bar">
      <span class="scale-line" :style="{ width: scaleWidth + 'px' }"></span>
      <span class="scale-text">{{ scaleText }}</span>
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'

/**
 * MapStatus 地图状态组件
 *
 * 功能：
 * 1. 实时显示鼠标所在位置的经纬度
 * 2. 显示当前地图层级
 * 3. 显示动态比例尺
 *
 * 使用方式：
 * <MapStatus :map="map" />
 */
const props = defineProps<{
  /**
   * Leaflet 地图实例
   */
  map: any
}>()

const lat = ref(0) // 当前鼠标纬度
const lng = ref(0) // 当前鼠标经度
const zoom = ref(0) // 当前地图层级
const scaleText = ref("0 km") // 比例尺文字
const scaleWidth = ref(50) // 比例尺宽度（像素）

/**
 * 格式化纬度显示
 * 正数显示 N（北纬），负数显示 S（南纬）
 */
const latStr = computed(() => {
  const direction = lat.value >= 0 ? "N" : "S";
  return Math.abs(lat.value).toFixed(4) + "°" + direction;
})

/**
 * 格式化经度显示
 * 正数显示 E（东经），负数显示 W（西经）
 */
const lngStr = computed(() => {
  const direction = lng.value >= 0 ? "E" : "W";
  return Math.abs(lng.value).toFixed(4) + "°" + direction;
})

/**
 * 绑定地图事件
 */
const bindEvents = () => {
  if (!props.map) return
  props.map.on("mousemove", onMouseMove)
  props.map.on("zoomend", onZoomEnd)
  zoom.value = props.map.getZoom()
  updateScale()
}

/**
 * 鼠标移动事件处理
 * 更新当前鼠标位置的经纬度
 */
const onMouseMove = (e: any) => {
  lat.value = e.latlng.lat
  lng.value = e.latlng.lng
}

/**
 * 缩放结束事件处理
 * 更新层级和比例尺
 */
const onZoomEnd = () => {
  if (!props.map) return
  zoom.value = props.map.getZoom()
  updateScale()
}

/**
 * 更新比例尺
 * 根据当前层级计算合适的比例尺距离和宽度
 */
const updateScale = () => {
  if (!props.map) return
  const center = props.map.getCenter()
  const latVal = center.lat
  // 计算每像素代表的米数（考虑纬度影响）
  const metersPerPixel =
    (40075016.686 * Math.cos((latVal * Math.PI) / 180)) /
    Math.pow(2, zoom.value + 8)

  // 目标宽度范围 50-100px
  const maxWidth = 100
  const maxMeters = metersPerPixel * maxWidth

  // 预设的比例尺刻度值
  const scales = [
    1, 2, 5, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000, 20000,
    50000, 100000, 200000, 500000, 1000000, 2000000, 5000000,
  ]
  let bestScale = scales[0]

  // 选择不超过最大距离的最大刻度值
  for (let i = 0; i < scales.length; i++) {
    if (scales[i] <= maxMeters) {
      bestScale = scales[i]
    }
  }

  // 计算对应的像素宽度
  scaleWidth.value = Math.round(bestScale / metersPerPixel)

  // 格式化显示文字
  if (bestScale >= 1000) {
    scaleText.value = bestScale / 1000 + " km"
  } else {
    scaleText.value = bestScale + " m"
  }
}

// 监听 map 变化，绑定事件
watch(() => props.map, (newMap) => {
  if (newMap) {
    bindEvents()
  }
}, { immediate: true })

onMounted(() => {
  if (props.map) {
    bindEvents()
  }
})

onUnmounted(() => {
  // 组件销毁时移除事件监听
  if (props.map) {
    props.map.off("mousemove", onMouseMove)
    props.map.off("zoomend", onZoomEnd)
  }
})
</script>

<style scoped>
.map-status {
  font-size: 12px;
  color: #000;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 12px;
}

.scale-bar {
  display: flex;
  align-items: center;
  gap: 4px;
}

.scale-line {
  height: 0;
  border-bottom: 2px solid #000;
  border-left: 2px solid #000;
  border-right: 2px solid #000;
  padding-bottom: 4px;
}

.scale-text {
  font-size: 12px;
  color: #000;
  font-weight: 500;
}
</style>
