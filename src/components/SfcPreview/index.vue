<template>
  <div class="sfc-preview">
    <div class="preview-header">
      <span>实时预览</span>
      <a-button size="small" @click="refresh">
          <a-icon type="reload" />
        </a-button>
    </div>
    <div class="preview-content">
      <div v-if="error" class="error-message">
        <a-icon type="warning" />
        <pre>{{ error }}</pre>
      </div>
      <div v-else-if="!hasCode" class="empty-preview">
        <a-icon type="code" />
        <span>等待代码...</span>
      </div>
      <div v-else ref="renderTarget" class="render-target"></div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import L from 'leaflet'
import MapToolbar from '@/components/MapToolbar'
import MapStatus from '@/components/MapStatus'
import BaseMap from '@/components/BaseMap.vue'

// 预注册的模块映射 - 可以在 import 中使用
const moduleMap = {
  'leaflet': L,
  'vue': Vue,
  '@/components/MapToolbar': MapToolbar,
  '@/components/MapStatus': MapStatus,
  '@/components/BaseMap': BaseMap,
  '@/components/BaseMap.vue': BaseMap
}

export default {
  name: 'SfcPreview',
  props: {
    code: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      error: null,
      instance: null,
      hasCode: false
    }
  },
  methods: {
    refresh() {
      this.compileAndRender(this.code)
    },
    runCode(code) {
      this.compileAndRender(code)
    },
    destroyInstance() {
      if (this.instance) {
        this.instance.$destroy()
        if (this.instance.$el && this.instance.$el.parentNode) {
          this.instance.$el.parentNode.removeChild(this.instance.$el)
        }
        this.instance = null
      }
    },
    compileAndRender(code) {
      this.destroyInstance()
      this.error = null

      if (!code) {
        this.hasCode = false
        return
      }
      this.hasCode = true

      this.$nextTick(() => {
        if (!this.$refs.renderTarget) return

        try {
          // 解析 SFC
          const templateMatch = code.match(/<template>([\s\S]*?)<\/template>/)
          const scriptMatch = code.match(/<script>([\s\S]*?)<\/script>/)
          const styleMatch = code.match(/<style[^>]*>([\s\S]*?)<\/style>/)

          if (!templateMatch) {
            this.error = '缺少 <template> 标签'
            return
          }

          const template = templateMatch[1].trim()
          let componentOptions = { data: () => ({}) }

          if (scriptMatch) {
            let scriptContent = scriptMatch[1].trim()
            
            // 解析 import 语句并注入模块
            const imports = {}
            const importRegex = /import\s+(?:(\w+)|{([^}]+)}|\*\s+as\s+(\w+))\s+from\s+['"]([^'"]+)['"]\s*;?/g
            let match
            
            while ((match = importRegex.exec(scriptContent)) !== null) {
              const defaultImport = match[1]
              const namedImports = match[2]
              const namespaceImport = match[3]
              const moduleName = match[4]
              
              const moduleExports = moduleMap[moduleName]
              if (moduleExports) {
                if (defaultImport) {
                  imports[defaultImport] = moduleExports
                }
                if (namespaceImport) {
                  imports[namespaceImport] = moduleExports
                }
                if (namedImports) {
                  namedImports.split(',').forEach(item => {
                    const [name, alias] = item.trim().split(/\s+as\s+/)
                    const key = (alias || name).trim()
                    imports[key] = moduleExports[name.trim()] || moduleExports
                  })
                }
              }
            }
            
            // 移除 import 语句
            scriptContent = scriptContent.replace(/import\s+[\s\S]*?from\s+['"][^'"]*['"]\s*;?/g, '')
            // 替换 export default
            scriptContent = scriptContent.replace(/export\s+default\s*/, 'componentOptions = ')
            
            try {
              // 创建带有导入模块的执行环境
              const importKeys = Object.keys(imports)
              const importValues = Object.values(imports)
              const fn = new Function(...importKeys, 'componentOptions', scriptContent + '\nreturn componentOptions;')
              componentOptions = fn(...importValues, componentOptions)
            } catch (e) {
              this.error = `Script 解析错误: ${e.message}`
              return
            }
          }

          // 处理样式
          if (styleMatch) {
            this.injectStyles(styleMatch[1])
          }

          // 清空渲染目标
          this.$refs.renderTarget.innerHTML = ''

          // 创建挂载点
          const mountEl = document.createElement('div')
          mountEl.className = 'preview-mount'
          this.$refs.renderTarget.appendChild(mountEl)

          // 创建组件
          const ComponentDef = Vue.extend({
            ...componentOptions,
            template: `<div class="preview-wrapper">${template}</div>`
          })

          // 挂载组件
          this.instance = new ComponentDef().$mount(mountEl)
          this.error = null

        } catch (e) {
          this.error = `编译错误: ${e.message}`
        }
      })
    },
    injectStyles(css) {
      const styleId = 'preview-dynamic-style'
      let styleEl = document.getElementById(styleId)
      
      if (!styleEl) {
        styleEl = document.createElement('style')
        styleEl.id = styleId
        document.head.appendChild(styleEl)
      }
      
      styleEl.textContent = css
    }
  },
  beforeDestroy() {
    this.destroyInstance()
    const styleEl = document.getElementById('preview-dynamic-style')
    if (styleEl) {
      styleEl.remove()
    }
  }
}
</script>

<style scoped>
.sfc-preview {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #fff;
}

.preview-header {
  height: 40px;
  background: #fafafa;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  border-bottom: 1px solid #e8e8e8;
  font-weight: 500;
  color: #333;
  flex-shrink: 0;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.preview-content {
  flex: 1;
  overflow: hidden;
  position: relative;
  height: 0; /* 配合 flex: 1 确保高度正确 */
}

.render-target {
  width: 100%;
  height: 100%;
}

/* 动态组件的包裹容器需要撑满高度 */
.render-target >>> .preview-wrapper {
  width: 100%;
  height: 100%;
}

.render-target >>> .preview-mount {
  width: 100%;
  height: 100%;
}

.error-message {
  padding: 20px;
  color: #f5222d;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.error-message pre {
  background: #fff1f0;
  padding: 12px;
  border-radius: 4px;
  font-size: 12px;
  max-width: 100%;
  overflow: auto;
  white-space: pre-wrap;
  word-break: break-all;
}

.empty-preview {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #bfbfbf;
  gap: 8px;
}

.empty-preview .anticon {
  font-size: 48px;
}
</style>
