<template>
  <div class="playback-bar-wrapper">
    <div class="playback-bar">
      <!-- 播放控制按钮 -->
      <div class="playback-controls">
        <div class="control-btn" @click="handleStep(-1)">◀◀</div>
        <div class="control-btn play" @click="togglePlay">
          {{ playing ? "⏸" : "▶" }}
        </div>
        <div class="control-btn" @click="handleStep(1)">▶▶</div>
      </div>

      <!-- 播放轴主体 -->
      <div class="slider-wrapper">
        <!-- 播放轨道 -->
        <div
          class="slider-track"
          ref="trackRef"
          @mousedown="onMouseDown"
          @mousemove="onHover"
          @mouseleave="hoverIndex = -1"
        >
          <!-- 颜色段 -->
          <div class="slider-fill">
            <div
              v-for="(seg, i) in segments"
              :key="i"
              class="segment"
              :style="{ width: segmentWidth + '%', backgroundColor: seg.color }"
            ></div>
          </div>
          <!-- 分割线 -->
          <div
            v-for="(div, i) in trackDividers"
            :key="'div-' + i"
            class="track-divider"
            :style="{ left: div.position + '%' }"
          ></div>
        </div>

        <!-- Hover提示 -->
        <div
          v-if="hoverIndex >= 0 && hoverIndex !== innerProgress"
          class="hover-tooltip"
          :style="{ left: hoverPosition + '%' }"
        >
          {{ hoverTimeLabel }}
        </div>

        <!-- 滑块 -->
        <div
          class="slider-thumb"
          :style="{ left: thumbPosition + '%', backgroundColor: thumbColor }"
        >
          <div class="thumb-tooltip">{{ currentTimeLabel }}</div>
        </div>

        <!-- 时间刻度 -->
        <div class="time-ticks">
          <span
            v-for="(tick, i) in timeTicks"
            :key="i"
            class="tick"
            :style="{ left: tick.position + '%' }"
            >{{ tick.label }}</span
          >
        </div>

        <!-- 日期刻度 -->
        <div class="date-ticks">
          <div
            v-for="(d, i) in dateTicks"
            :key="i"
            class="date-tick"
            :style="{ left: d.left + '%', width: d.width + '%' }"
          >
            {{ d.label }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'

/**
 * PlaybackBar 播放轴组件
 * 时间序列数据的可视化播放控制组件
 */
const props = withDefaults(defineProps<{
  playing?: boolean
  progress?: number
  availableTimes?: string[]
  timeDates?: string[]
  timeColors?: string[]
}>(), {
  playing: false,
  progress: 0,
  availableTimes: () => [],
  timeDates: () => [],
  timeColors: () => [],
})

const emit = defineEmits<{
  (e: 'update:playing', value: boolean): void
  (e: 'update:progress', value: number): void
  (e: 'progress-change', value: number): void
}>()

const trackRef = ref<HTMLElement | null>(null)
const innerProgress = ref(props.progress)
const dragging = ref(false)
const playTimer = ref<ReturnType<typeof setInterval> | null>(null)
const hoverIndex = ref(-1)

// 计算属性
const total = computed(() => props.availableTimes.length || 1)
const segmentWidth = computed(() => 100 / total.value)
const segments = computed(() => {
  return props.availableTimes.map((_, i) => ({
    color: props.timeColors[i] || '#1890ff',
  }))
})
const thumbPosition = computed(() => {
  return ((innerProgress.value + 0.5) / total.value) * 100
})
const thumbColor = computed(() => {
  return props.timeColors[innerProgress.value] || '#1890ff'
})
const currentTimeLabel = computed(() => {
  const time = props.availableTimes[innerProgress.value] || '00:00'
  const date = props.timeDates[innerProgress.value] || ''
  const dayMatch = date.match(/(\d+)日/)
  const day = dayMatch ? dayMatch[1] + '日' : ''
  const hour = time.replace(':00', '时')
  return day + hour
})
const hoverPosition = computed(() => {
  return ((hoverIndex.value + 0.5) / total.value) * 100
})
const hoverTimeLabel = computed(() => {
  if (hoverIndex.value < 0) return ''
  const time = props.availableTimes[hoverIndex.value] || '00:00'
  const date = props.timeDates[hoverIndex.value] || ''
  const dayMatch = date.match(/(\d+)日/)
  const day = dayMatch ? dayMatch[1] + '日' : ''
  const hour = time.replace(':00', '时')
  return day + hour
})
const timeTicks = computed(() => {
  const arr: { label: string; position: number }[] = []
  for (let i = 0; i < total.value; i++) {
    const time = props.availableTimes[i] || ''
    const hour = parseInt(time.split(':')[0], 10)
    if (hour % 6 === 0) {
      arr.push({
        label: String(hour).padStart(2, '0') + '时',
        position: ((i + 0.5) / total.value) * 100,
      })
    }
  }
  return arr
})
const trackDividers = computed(() => {
  const arr: { position: number }[] = []
  for (let i = 0; i < total.value; i++) {
    const time = props.availableTimes[i] || ''
    const hour = parseInt(time.split(':')[0], 10)
    if (hour % 6 === 0 && i > 0) {
      arr.push({
        position: (i / total.value) * 100,
      })
    }
  }
  return arr
})
const dateTicks = computed(() => {
  if (!props.timeDates.length) return []
  const result: { label: string; left: number; width: number }[] = []
  let start = 0
  let current = props.timeDates[0]
  const today = getDateLabel(0)
  const tomorrow = getDateLabel(1)
  const dayAfter = getDateLabel(2)

  for (let i = 1; i <= props.timeDates.length; i++) {
    if (i === props.timeDates.length || props.timeDates[i] !== current) {
      const count = i - start
      let label = current
      if (current === today) label = '今天' + current
      else if (current === tomorrow) label = '明天' + current
      else if (current === dayAfter) label = '后天' + current
      result.push({
        label,
        left: (start / total.value) * 100,
        width: (count / total.value) * 100,
      })
      if (i < props.timeDates.length) {
        start = i
        current = props.timeDates[i]
      }
    }
  }
  return result
})

function getDateLabel(offset: number) {
  const d = new Date(Date.now() + offset * 86400000)
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`
}

function togglePlay() {
  emit('update:playing', !props.playing)
}

function handleStep(dir: number) {
  let next = innerProgress.value + dir
  if (next < 0) next = total.value - 1
  if (next >= total.value) next = 0
  innerProgress.value = next
  emit('update:progress', next)
  emit('progress-change', next)
}

function onMouseDown(e: MouseEvent) {
  dragging.value = true
  updateFromEvent(e)
}

function onMouseMove(e: MouseEvent) {
  if (dragging.value) updateFromEvent(e)
}

function onMouseUp() {
  dragging.value = false
}

function onHover(e: MouseEvent) {
  if (!trackRef.value) return
  const rect = trackRef.value.getBoundingClientRect()
  const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width))
  const idx = Math.min(
    Math.floor((x / rect.width) * total.value),
    total.value - 1,
  )
  hoverIndex.value = idx
}

function updateFromEvent(e: MouseEvent) {
  if (!trackRef.value) return
  const rect = trackRef.value.getBoundingClientRect()
  const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width))
  const idx = Math.min(
    Math.floor((x / rect.width) * total.value),
    total.value - 1,
  )
  if (idx !== innerProgress.value) {
    innerProgress.value = idx
    emit('update:progress', idx)
    emit('progress-change', idx)
  }
}

function startPlay() {
  stopPlay()
  playTimer.value = setInterval(() => handleStep(1), 1500)
}

function stopPlay() {
  if (playTimer.value) {
    clearInterval(playTimer.value)
    playTimer.value = null
  }
}

watch(() => props.progress, (v) => {
  innerProgress.value = v
})

watch(() => props.playing, (v) => {
  v ? startPlay() : stopPlay()
})

onMounted(() => {
  document.addEventListener('mousemove', onMouseMove)
  document.addEventListener('mouseup', onMouseUp)
})

onUnmounted(() => {
  document.removeEventListener('mousemove', onMouseMove)
  document.removeEventListener('mouseup', onMouseUp)
  stopPlay()
})
</script>

<style scoped>
.playback-bar-wrapper {
  width: 100%;
  padding: 10px 20px;
  background: linear-gradient(180deg, #e8f4fc 0%, #d9ebf7 100%);
}

.playback-bar {
  display: flex;
  align-items: center;
  gap: 12px;
}

.playback-controls {
  display: flex;
  align-items: center;
  background: #f5f9fc;
  border-radius: 20px;
  padding: 4px 6px;
  gap: 2px;
  flex-shrink: 0;
}

.control-btn {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 10px;
  color: #1890ff;
  border-radius: 50%;
}

.control-btn:hover {
  background: rgba(24, 144, 255, 0.1);
}

.control-btn.play {
  background: #1890ff;
  color: #fff;
  width: 32px;
  height: 32px;
}

.control-btn.play:hover {
  background: #40a9ff;
}

.slider-wrapper {
  flex: 1;
  min-width: 0;
  position: relative;
  padding-top: 28px;
}

.slider-track {
  position: relative;
  height: 20px;
  background: #ddd;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
}

.slider-fill {
  display: flex;
  height: 100%;
}

.segment {
  height: 100%;
  flex-shrink: 0;
}

.track-divider {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;
  background: rgba(0, 0, 0, 0.3);
  pointer-events: none;
}

.slider-thumb {
  position: absolute;
  top: 28px;
  width: 18px;
  height: 18px;
  border: 3px solid #555;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  margin-top: 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  pointer-events: none;
  z-index: 2;
}

.thumb-tooltip {
  position: absolute;
  bottom: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%);
  background: #333;
  color: #fff;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
}

.thumb-tooltip::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 5px solid transparent;
  border-top-color: #333;
}

.time-ticks {
  position: relative;
  height: 18px;
  margin-top: 2px;
}

.tick {
  position: absolute;
  transform: translateX(-50%);
  font-size: 11px;
  color: #666;
  white-space: nowrap;
}

.date-ticks {
  position: relative;
  height: 20px;
  display: flex;
}

.date-tick {
  position: absolute;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #333;
  border-left: 1px solid #aac;
  box-sizing: border-box;
}

.date-tick:first-child {
  border-left: none;
}

.hover-tooltip {
  position: absolute;
  top: 0;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  z-index: 5;
  pointer-events: none;
}

.hover-tooltip::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 5px solid transparent;
  border-top-color: rgba(0, 0, 0, 0.75);
}
</style>
