<template>
  <div class="playground-page">
    <div class="playground-header">
      <div class="logo">
        <a-icon type="code" />
        <span>代码演练场</span>
      </div>
      <a-button type="link" @click="goBack">
        <a-icon type="arrow-left" /> 返回首页
      </a-button>
    </div>
    <div class="playground-body">
      <!-- 左侧导航 -->
      <div class="sidebar">
        <div class="nav-section">
          <div class="nav-title">BASE</div>
          <div
            v-for="route in baseRoutes"
            :key="route.name"
            class="nav-item"
            :class="{ active: currentRouteName === route.name }"
            @click="selectRoute(route)"
          >
            {{ route.label }}
          </div>
        </div>
        <div class="nav-section">
          <div class="nav-title">GUIDE BOOK</div>
          <div
            v-for="route in guideRoutes"
            :key="route.name"
            class="nav-item"
            :class="{ active: currentRouteName === route.name }"
            @click="selectRoute(route)"
          >
            {{ route.label }}
          </div>
        </div>
      </div>

      <!-- 中间代码编辑器 -->
      <div class="editor-panel" :style="{ width: editorWidth + 'px' }">
        <code-editor
          :current-route="currentRouteName"
          :initial-code="currentCode"
          @code-change="onCodeChange"
          @run-code="onRunCode"
          @reset-code="onResetCode"
        />
        <div class="resize-handle" @mousedown="startResize"></div>
      </div>

      <!-- 右侧预览区 -->
      <div class="preview-panel">
        <sfc-preview ref="sfcPreview" :code="editingCode" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import CodeEditor from '@/components/CodeEditor/index.vue'
import SfcPreview from '@/components/SfcPreview/index.vue'
import { pageTemplates } from './templates'

const router = useRouter()

const sfcPreview = ref<any>(null)
const editorWidth = ref(450)
const isResizing = ref(false)
const currentCode = ref('')
const editingCode = ref('')
const currentRouteName = ref('Test')
const baseRoutes = ref([
  { name: 'Test', label: '第一个地图' },
  { name: 'Wind', label: '风场' },
  { name: 'Typhoon', label: '多地图视野同步' },
  { name: 'Wms', label: '图层服务' },
  { name: 'Contour', label: '图层管理' },
  { name: 'Edit', label: '实例管理' }
])
const guideRoutes = ref([
  { name: 'bindbing', label: '地图锁定' },
  { name: 'bindbing2', label: '经纬度网格' },
  { name: 'bindbing3', label: '全球等值线' }
])

const goBack = () => {
  router.push('/')
}

const selectRoute = (route: { name: string; label: string }) => {
  currentRouteName.value = route.name
  currentCode.value = pageTemplates[route.name] || pageTemplates.Test
  editingCode.value = currentCode.value
  nextTick(() => {
    if (sfcPreview.value) {
      sfcPreview.value.runCode(editingCode.value)
    }
  })
}

const onCodeChange = (code: string) => {
  editingCode.value = code
}

const onRunCode = (code: string) => {
  editingCode.value = code
  if (sfcPreview.value) {
    sfcPreview.value.runCode(code)
  }
}

const onResetCode = () => {
  editingCode.value = currentCode.value
  if (sfcPreview.value) {
    sfcPreview.value.runCode(currentCode.value)
  }
}

const startResize = () => {
  isResizing.value = true
  document.addEventListener('mousemove', doResize)
  document.addEventListener('mouseup', stopResize)
}

const doResize = (e: MouseEvent) => {
  if (!isResizing.value) return
  const sidebar = 200
  const minWidth = 300
  const maxWidth = window.innerWidth - sidebar - 400
  editorWidth.value = Math.min(maxWidth, Math.max(minWidth, e.clientX - sidebar))
}

const stopResize = () => {
  isResizing.value = false
  document.removeEventListener('mousemove', doResize)
  document.removeEventListener('mouseup', stopResize)
}

onMounted(() => {
  currentCode.value = pageTemplates[currentRouteName.value] || pageTemplates.Test
  editingCode.value = currentCode.value
  nextTick(() => {
    if (sfcPreview.value) {
      sfcPreview.value.runCode(editingCode.value)
    }
  })
})
</script>

<style scoped>
.playground-page {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.playground-header {
  height: 50px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  flex-shrink: 0;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
}

.logo .anticon { font-size: 24px; }

.playground-header .ant-btn-link { color: #fff; }

.playground-body {
  flex: 1;
  display: flex;
  overflow: hidden;
}

.sidebar {
  width: 200px;
  background: #f7f8fa;
  border-right: 1px solid #e8e8e8;
  overflow-y: auto;
  flex-shrink: 0;
}

.nav-section { padding: 16px 0; }

.nav-title {
  padding: 8px 20px;
  font-size: 12px;
  color: #8c8c8c;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.nav-item {
  display: block;
  padding: 10px 20px;
  color: #595959;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  border-left: 3px solid transparent;
}

.nav-item:hover { background: #e6f7ff; color: #1890ff; }
.nav-item.active { background: #e6f7ff; color: #1890ff; border-left-color: #1890ff; }

.editor-panel {
  position: relative;
  flex-shrink: 0;
  border-right: 1px solid #37474f;
}

.resize-handle {
  position: absolute;
  right: 0;
  top: 0;
  width: 4px;
  height: 100%;
  cursor: col-resize;
  background: transparent;
  transition: background 0.2s;
  z-index: 10;
}

.resize-handle:hover { background: #1890ff; }

.preview-panel {
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
</style>
