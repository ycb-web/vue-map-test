# 线引模块实现指南

## 概述

线引模块用于在地图上显示带有引线的信息面板，常用于海堤风险图、监测站点标注等场景。面板通过引线连接到地图上的锚点（经纬度位置），支持拖拽、自动布局、显隐控制等功能。

## 核心组件结构

```
LeaderLinePage/
├── index.vue              # 主页面，管理数据和状态
├── components/
│   ├── LeaderPanelLayer.vue  # 面板图层，管理所有面板和引线
│   ├── LeaderPanel.vue       # 单个面板组件
│   └── ControlPanel.vue      # 控制面板（显隐、截图等）
└── utils/
    ├── collision.js          # 碰撞检测和布局算法
    └── screenshot.js         # 截图功能
```

## 关键实现要点

### 1. 引线不遮挡面板

**问题**：每个面板各自绘制引线时，引线会覆盖在其他面板上方。

**解决方案**：将所有引线统一绘制在一个底层 SVG 中。

```vue
<!-- LeaderPanelLayer.vue -->
<template>
  <div class="leader-panel-layer">
    <!-- 所有引线统一绘制在底层 -->
    <svg class="leader-lines-svg">
      <g v-for="panel in visiblePanels" :key="'line-' + panel.id">
        <line :x1="..." :y1="..." :x2="..." :y2="..." />
        <circle :cx="..." :cy="..." r="5" />  <!-- 锚点 -->
      </g>
    </svg>
    <!-- 面板在引线上方 -->
    <LeaderPanel v-for="panel in visiblePanels" ... />
  </div>
</template>

<style>
.leader-lines-svg {
  z-index: 0; /* 引线在最底层 */
}
</style>
```

### 2. 地图拖拽时锚点跟随

**问题**：Vue 模板不会在地图移动时自动重新渲染，导致锚点位置不更新。

**解决方案**：使用响应式变量触发更新。

```javascript
data() {
  return {
    mapUpdateKey: 0, // 用于触发重新渲染
  };
},
mounted() {
  this.map.on("move", () => {
    this.mapUpdateKey++; // 地图移动时递增
  });
},
methods: {
  getAnchor(panel) {
    void this.mapUpdateKey; // 引用以触发响应式更新
    const point = this.map.latLngToContainerPoint([panel.lat, panel.lng]);
    return { x: point.x, y: point.y };
  },
}
```

### 3. 只显示可视区域内的面板

**原理**：根据锚点的屏幕坐标判断是否在可视区域内。

```javascript
computed: {
  visiblePanels() {
    void this.mapUpdateKey;
    const bounds = {
      width: container.clientWidth,
      height: container.clientHeight,
    };
    const padding = 50;
    
    return this.processedPanels.filter((panel) => {
      const anchor = this.getAnchor(panel);
      return (
        anchor.x >= -padding &&
        anchor.x <= bounds.width + padding &&
        anchor.y >= -padding &&
        anchor.y <= bounds.height + padding
      );
    });
  },
}
```

### 4. 智能布局算法（螺旋搜索 + 评分机制）

**核心思路**：
1. 从锚点出发，按螺旋方向搜索空位
2. 对每个候选位置评分（可见性 + 距离）
3. 选择得分最高的位置

```javascript
function spiralSearch(anchor, panelSize, occupiedRects, bounds) {
  const directions = [
    { dx: 0, dy: -1 },   // 上（优先）
    { dx: 1, dy: -1 },   // 右上
    { dx: 1, dy: 0 },    // 右
    // ...
  ];

  let bestPosition = null;
  let bestScore = -Infinity;

  for (let radius = step; radius <= maxRadius; radius += step) {
    for (const dir of directions) {
      const testX = anchor.x + dir.dx * radius - panelSize.width / 2;
      const testY = anchor.y + dir.dy * radius - panelSize.height / 2;
      
      // 检查是否与已有面板重叠
      if (hasOverlap) continue;
      
      // 计算得分：完全在屏幕内得高分，距离近加分
      const score = calculatePositionScore(testRect, bounds, anchor, radius);
      if (score > bestScore) {
        bestScore = score;
        bestPosition = { x: testX, y: testY };
      }
    }
  }
  return bestPosition;
}
```

### 5. 拖拽后自动布局（可开关）

**实现**：监听地图的 `moveend` 和 `zoomend` 事件，根据开关决定是否重新布局。

```javascript
mounted() {
  this.map.on("move", this.onMapMove);      // 实时更新引线
  this.map.on("moveend", this.onMapMoveEnd); // 拖拽结束重新布局
  this.map.on("zoomend", this.onMapZoomEnd); // 缩放结束重新布局
},
methods: {
  onMapMoveEnd() {
    if (!this.autoLayout) return; // 开关控制
    this.recalculatePositions(this.panels);
  },
}
```

### 6. 显隐切换不影响已调整的位置

**问题**：watch 的 `deep: true` 会在 visible 变化时触发重新布局。

**解决方案**：区分"显隐变化"和"数据变化"。

```javascript
watch: {
  panels: {
    handler(newPanels, oldPanels) {
      if (this.isOnlyVisibilityChange(newPanels, oldPanels)) {
        // 只同步 visible 状态，不重新布局
        this.syncVisibility(newPanels);
      } else {
        // 数据有实质变化，重新计算布局
        this.recalculatePositions(newPanels);
      }
    },
    deep: true,
  },
},
methods: {
  isOnlyVisibilityChange(newPanels, oldPanels) {
    // 检查除 visible 外的核心属性是否变化
    for (let i = 0; i < newPanels.length; i++) {
      if (newP.id !== oldP.id || newP.lat !== oldP.lat || ...) {
        return false;
      }
    }
    return true;
  },
}
```

### 7. 引线连接点计算

**原理**：根据锚点相对于面板中心的方向，选择面板边缘的最佳连接点。

```javascript
function getLineStartPoint(panelRect, anchor) {
  const centerX = panelRect.x + panelRect.width / 2;
  const centerY = panelRect.y + panelRect.height / 2;
  const dx = anchor.x - centerX;
  const dy = anchor.y - centerY;

  if (Math.abs(dx) > Math.abs(dy)) {
    // 水平方向为主
    return dx > 0
      ? { x: panelRect.x + panelRect.width, y: centerY }  // 右边
      : { x: panelRect.x, y: centerY };                    // 左边
  } else {
    // 垂直方向为主
    return dy > 0
      ? { x: centerX, y: panelRect.y + panelRect.height }  // 下边
      : { x: centerX, y: panelRect.y };                     // 上边
  }
}
```

## 面板数据结构

```javascript
{
  id: "panel-1",           // 唯一标识
  title: "潮位站A",         // 标题
  lat: 22.55,              // 纬度
  lng: 113.95,             // 经度
  visible: true,           // 是否显示
  tableData: [             // 表格数据
    ["站点名称", "潮位站A"],
    ["最高潮位", "2.85m"],
  ],
  // 以下由系统计算
  position: { x, y },      // 面板屏幕位置
  anchor: { x, y },        // 锚点屏幕位置
  size: { width, height }, // 面板尺寸
}
```

## 性能优化建议

1. **节流地图移动事件**：高频的 move 事件可以用 `requestAnimationFrame` 节流
2. **虚拟化大量面板**：面板数量很多时，只渲染可视区域内的面板
3. **缓存位置计算**：用户手动拖拽的位置应该缓存，避免重复计算
