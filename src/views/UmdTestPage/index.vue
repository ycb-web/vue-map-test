<template>
  <div class="umd-test-page">
    <h1>UMD 模块测试页面</h1>
    <p class="tip">测试打包后的 UMD 模块是否可以在其他框架中使用</p>

    <div class="test-section">
      <h2>选择要测试的模块</h2>
      <select id="module-select">
        <option value="">-- 请选择模块 --</option>
        <option v-for="mod in modules" :key="mod.name" :value="mod.name">
          {{ mod.label }}
        </option>
      </select>
      <button @click="loadModule" class="load-btn">加载模块</button>
    </div>

    <div id="loading" style="display:none" class="loading">加载中...</div>
    <div id="error" style="display:none" class="error"></div>

    <div id="result" style="display:none" class="module-container">
      <h3 id="module-title"></h3>
      <div id="module-mount-point" class="mount-point"></div>
    </div>

    <div class="info-section">
      <h3>调试信息</h3>
      <p id="debug-info"></p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const modules = [
  { name: 'contour', label: 'Contour (等值线)', file: '/lib/contour/contour.umd.js' },
  { name: 'edit', label: 'Edit (编辑)', file: '/lib/edit/edit.umd.js' },
  { name: 'leader', label: 'Leader (引导线)', file: '/lib/leader/leader.umd.js' },
  { name: 'test', label: 'Test (测试)', file: '/lib/test/test.umd.js' },
  { name: 'typhoon', label: 'Typhoon (台风)', file: '/lib/typhoon/typhoon.umd.js' },
  { name: 'wind', label: 'Wind (风场)', file: '/lib/wind/wind.umd.js' },
  { name: 'wms', label: 'WMS', file: '/lib/wms/wms.umd.js' },
]

const vueLoaded = ref(false)
const subApp = ref(null)

const show = (id, show) => {
  const el = document.getElementById(id)
  if (el) el.style.display = show ? 'block' : 'none'
}

const setText = (id, text) => {
  const el = document.getElementById(id)
  if (el) el.textContent = text
}

// 加载脚本
const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve()
      return
    }
    const script = document.createElement('script')
    script.src = src
    script.onload = resolve
    script.onerror = reject
    document.head.appendChild(script)
  })
}

// 加载所有依赖
const loadDependencies = async () => {
  const deps = [
    // Underscore (Backbone 依赖)
    'https://unpkg.com/underscore@1.13.8/underscore-min.js',
    // Backbone (依赖 Underscore)
    'https://unpkg.com/backbone@1.6.1/backbone-min.js',
    // Vue
    'https://unpkg.com/vue@3/dist/vue.global.prod.js',
    // Leaflet
    'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
    // ECharts
    'https://unpkg.com/echarts@5.5.0/dist/echarts.min.js',
    // Moment
    'https://cdn.jsdelivr.net/npm/moment@2.30.1/moment.min.js',
  ]

  for (const src of deps) {
    console.log('加载:', src)
    await loadScript(src)
    console.log('完成:', src)
  }
}

const loadModule = async () => {
  const select = document.getElementById('module-select')
  const moduleName = select.value

  if (!moduleName) {
    alert('请先选择模块')
    return
  }

  const mod = modules.find(m => m.name === moduleName)
  if (!mod) return

  // 重置
  if (subApp.value) {
    try { subApp.value.unmount() } catch(e) {}
    subApp.value = null
  }
  show('error', false)
  show('result', false)
  show('loading', true)

  const mountPoint = document.getElementById('module-mount-point')
  mountPoint.innerHTML = ''

  console.log('开始加载模块:', moduleName)

  // 清理之前加载的模块脚本（保留依赖脚本）
  const oldLibScripts = document.querySelectorAll('script[data-is-lib="true"]')
  oldLibScripts.forEach(s => s.remove())

  try {
    // 加载所有依赖
    await loadDependencies()
    console.log('所有依赖加载完成')
    console.log('window.Vue:', typeof window.Vue)
    console.log('window.L:', typeof window.L)
    console.log('window.Backbone:', typeof window.Backbone)
    console.log('window.echarts:', typeof window.echarts)

    // 加载 UMD 模块
    await new Promise((resolve, reject) => {
      const script = document.createElement('script')
      script.src = mod.file
      script.setAttribute('data-is-lib', 'true')  // 标记为模块脚本
      script.onload = resolve
      script.onerror = () => reject(new Error('加载脚本失败: ' + mod.file))
      document.head.appendChild(script)
    })

    console.log('模块加载完成')
    console.log('window[moduleName]:', window[moduleName])

    // 等待脚本执行
    await new Promise(r => setTimeout(r, 300))

    // 找组件 - 先从 default 属性找，再从全局变量找
    let Component = window[moduleName]?.default || window[moduleName]
    console.log('=== 组件查找调试 ===')
    console.log('moduleName:', moduleName)
    console.log('window[moduleName]:', window[moduleName])
    console.log('window[moduleName]?.default:', window[moduleName]?.default)
    console.log('Component:', Component)

    // 如果没找到，从所有全局变量中查找带有 render 或 setup 函数的组件
    if (!Component || (!Component.render && !Component.setup)) {
      console.log('从全局变量搜索组件...')
      for (const key in window) {
        const val = window[key]
        if (val && typeof val === 'function' && (val.render || val.setup)) {
          Component = val
          console.log('找到组件 from', key, ':', Component)
          break
        }
        // 也检查 default 属性
        if (val && typeof val === 'object' && val.default && (val.default.render || val.default.setup)) {
          Component = val.default
          console.log('找到组件 from', key + '.default', ':', Component)
          break
        }
      }
    }

    console.log('最终组件:', Component)
    console.log('组件类型:', typeof Component)
    console.log('组件 render:', Component?.render)
    console.log('组件 setup:', Component?.setup)
    console.log('==================')

    if (!Component) {
      // 显示所有可能的全局变量
      const avail = Object.keys(window).filter(k =>
        typeof window[k] === 'function' || (typeof window[k] === 'object' && window[k]?.render)
      )
      setText('debug-info', `未找到组件: ${moduleName}\n可用: ${avail.join(', ')}`)
      console.error('未找到组件:', moduleName, '可用:', avail)
      throw new Error(`未找到组件: ${moduleName}`)
    }

    // 创建 Vue 应用并挂载
    const Vue = window.Vue
    console.log('创建 Vue 应用')

    subApp.value = Vue.createApp(Component)
    subApp.value.mount(mountPoint)
    console.log('挂载完成')
    console.log('挂载点内容:', mountPoint.innerHTML)

    // 修复组件内部元素高度问题 - 给所有子容器设置高度
    setTimeout(() => {
      const containers = mountPoint.querySelectorAll('*')
      containers.forEach(el => {
        const style = window.getComputedStyle(el)
        if (style.height === '0px' || style.height === 'auto') {
          el.style.height = '100%'
          el.style.minHeight = '500px'
        }
      })
      // 特别处理 map-container
      const mapContainer = mountPoint.querySelector('.map-container')
      if (mapContainer) {
        mapContainer.style.height = '100%'
        mapContainer.style.minHeight = '500px'
      }
    }, 500)

    // 隐藏加载中，显示结果
    show('loading', false)
    show('result', true)
  } catch (e) {
    console.error('失败:', e)
    show('loading', false)
    show('error', true)
    document.getElementById('error').textContent = e.message
  }
}

onMounted(() => {
  console.log('测试页面加载完成')
  setText('debug-info', '请选择一个模块然后点击加载按钮。所有依赖将通过 CDN 自动加载。')
})
</script>

<style scoped>
.umd-test-page {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.tip {
  color: #666;
  margin-bottom: 20px;
}

.test-section {
  margin: 20px 0;
  padding: 15px;
  background: #f5f5f5;
  border-radius: 8px;
  display: flex;
  gap: 10px;
  align-items: center;
}

.test-section select {
  padding: 8px 12px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  min-width: 200px;
}

.load-btn {
  padding: 8px 20px;
  font-size: 16px;
  background: #1890ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.load-btn:hover {
  background: #40a9ff;
}

.loading {
  padding: 20px;
  text-align: center;
  color: #666;
}

.error {
  padding: 20px;
  background: #fff2f0;
  border: 1px solid #ffccc7;
  border-radius: 4px;
  color: #ff4d4f;
}

.module-container {
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.mount-point {
  margin-top: 15px;
  height: 600px;
  min-height: 500px;
  background: #fafafa;
  border: 1px dashed #ccc;
}

.mount-point > * {
  height: 100%;
  min-height: 500px;
}

.info-section {
  margin-top: 20px;
  padding: 15px;
  background: #e6f7ff;
  border-radius: 8px;
}
</style>
