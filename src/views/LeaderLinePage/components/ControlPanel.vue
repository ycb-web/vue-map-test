<template>
  <div class="control-panel" :class="{ collapsed }">
    <div class="control-header">
      <span>面板控制</span>
      <div class="header-actions">
        <a-button size="small" type="primary" @click="onScreenshot" :loading="screenshotLoading">
          📷 截图
        </a-button>
      </div>
    </div>

    <div class="control-body">
      <!-- 自动布局开关 -->
      <div class="auto-layout-switch">
        <span>拖拽后自动布局</span>
        <a-switch
          :checked="autoLayout"
          @change="onAutoLayoutChange"
          size="small"
        />
      </div>

      <!-- 全选控制 -->
      <div class="select-all">
        <a-checkbox
          :checked="isAllSelected"
          :indeterminate="isIndeterminate"
          @change="onSelectAllChange"
        >
          全选 ({{ visibleCount }}/{{ panels.length }})
        </a-checkbox>
      </div>

      <!-- 面板列表 -->
      <div class="panel-list">
        <div
          v-for="panel in panels"
          :key="panel.id"
          class="panel-item"
        >
          <a-checkbox
            :checked="panel.visible !== false"
            @change="(e: any) => onPanelCheckChange(panel.id, e.target.checked)"
          >
            <span class="panel-label">
              <span class="panel-color" :style="{ background: panel.color || '#e74c3c' }"></span>
              {{ panel.title || panel.id }}
            </span>
          </a-checkbox>
        </div>
      </div>
    </div>

    <!-- 折叠按钮 -->
    <div class="collapse-btn" @click="toggleCollapse">
      {{ collapsed ? '◀' : '▶' }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  panels: any[]
  autoLayout: boolean
}>()

const emit = defineEmits<{
  (e: 'togglePanel', panelId: string, visible: boolean): void
  (e: 'toggleAll', visible: boolean): void
  (e: 'autoLayoutChange', enabled: boolean): void
  (e: 'screenshot'): void
}>()

const collapsed = ref(false)
const screenshotLoading = ref(false)

const visibleCount = computed(() => {
  return props.panels.filter((p) => p.visible !== false).length
})

const isAllSelected = computed(() => {
  return props.panels.length > 0 && visibleCount.value === props.panels.length
})

const isIndeterminate = computed(() => {
  return visibleCount.value > 0 && visibleCount.value < props.panels.length
})

// 切换折叠
const toggleCollapse = () => {
  collapsed.value = !collapsed.value
}

// 全选变化
const onSelectAllChange = (e: any) => {
  emit('toggleAll', e.target.checked)
}

// 单个面板选中变化
const onPanelCheckChange = (panelId: string, checked: boolean) => {
  emit('togglePanel', panelId, checked)
}

// 自动布局开关变化
const onAutoLayoutChange = (checked: boolean) => {
  emit('autoLayoutChange', checked)
}

// 截图
const onScreenshot = async () => {
  screenshotLoading.value = true
  try {
    await emit('screenshot')
  } finally {
    // 延迟关闭loading，让截图完成
    setTimeout(() => {
      screenshotLoading.value = false
    }, 500)
  }
}
</script>

<style scoped>
.control-panel {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 260px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
  z-index: 1001;
  transition: transform 0.3s ease;
}

.control-panel.collapsed {
  transform: translateX(calc(100% - 24px));
}

.control-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: #2c3e50;
  color: #fff;
  border-radius: 8px 8px 0 0;
  font-weight: bold;
}

.header-actions {
  display: flex;
  gap: 8px;
}

.control-body {
  padding: 12px 16px;
  max-height: 400px;
  overflow-y: auto;
}

.select-all {
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
  margin-bottom: 10px;
}

.auto-layout-switch {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
  margin-bottom: 10px;
  font-size: 13px;
}

.panel-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.panel-item {
  padding: 4px 0;
}

.panel-label {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.panel-color {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 2px;
}

.collapse-btn {
  position: absolute;
  left: -24px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 48px;
  background: #2c3e50;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 4px 0 0 4px;
  font-size: 12px;
}

.collapse-btn:hover {
  background: #34495e;
}
</style>
