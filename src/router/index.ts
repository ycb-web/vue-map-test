import { createRouter, createWebHistory } from 'vue-router'
import TestPage from '../views/TestPage/index.vue'
import WindPage from '../views/WindPage/index.vue'
import TyphoonPage from '../views/TyphoonPage.vue'
import WmsPage from '../views/WmsPage.vue'
import ContourPage from '../views/ContourPage.vue'
import EditPage from '../views/EditPage.vue'
import PlaygroundPage from '../views/PlaygroundPage/index.vue'
import LeaderLinePage from '../views/LeaderLinePage/index.vue'

// 扩展 RouteMeta 接口
declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    description?: string
  }
}

const routes = [
  {
    path: '/',
    redirect: '/test',
  },
  {
    path: '/playground',
    name: 'Playground',
    component: PlaygroundPage,
    meta: {
      title: '代码演练场 - Vue地图可视化工具',
      description: '在线代码演练场，可实时编写和预览Vue地图组件代码'
    },
  },
  {
    path: '/test',
    name: 'Test',
    component: TestPage,
    meta: {
      title: '地图示例 - Vue地图可视化工具',
      description: 'Vue Leaflet地图示例，展示多种标记点、弹窗等功能'
    },
  },
  {
    path: '/wind',
    name: 'Wind',
    component: WindPage,
    meta: {
      title: '风场可视化 - Vue地图可视化工具',
      description: '风力场可视化展示，动态渲染风向风速粒子效果'
    },
  },
  {
    path: '/typhoon',
    name: 'Typhoon',
    component: TyphoonPage,
    meta: {
      title: '台风路径 - Vue地图可视化工具',
      description: '多地图视野同步展示，台风路径可视化追踪'
    },
  },
  {
    path: '/wms',
    name: 'Wms',
    component: WmsPage,
    meta: {
      title: 'WMS图层 - Vue地图可视化工具',
      description: 'WMS地图服务图层加载与管理'
    },
  },
  {
    path: '/contour',
    name: 'Contour',
    component: ContourPage,
    meta: {
      title: '等值线图 - Vue地图可视化工具',
      description: '等值线图层管理与可视化展示'
    },
  },
  {
    path: '/edit',
    name: 'Edit',
    component: EditPage,
    meta: {
      title: '地图编辑 - Vue地图可视化工具',
      description: '地图编辑工具，支持绘制、编辑地理要素'
    },
  },
  {
    path: '/leader',
    name: 'LeaderLine',
    component: LeaderLinePage,
    meta: {
      title: '引导线 - Vue地图可视化工具',
      description: '引导线可视化组件，支持地图标注引导'
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// 路由守卫：动态更新页面标题和 meta 标签
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title

    // 更新 meta 描述
    const descMeta = document.querySelector('meta[name="description"]')
    if (to.meta.description && descMeta) {
      descMeta.setAttribute('content', to.meta.description)
    }
  }
  next()
})

export default router
