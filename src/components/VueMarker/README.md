# Vue 组件叠点方案

在 Leaflet 地图上使用 Vue 组件作为自定义 Marker，实现复杂的交互和响应式数据更新。

## 方案优势

- ✅ **完整的 Vue 生命周期** - 组件可以使用 computed、watch、methods 等
- ✅ **响应式数据** - 配合 Vuex 实现数据驱动视图更新
- ✅ **复杂交互** - 支持 hover、click 等事件，可显示 tooltip
- ✅ **样式灵活** - 使用 CSS 控制样式，支持动画效果
- ✅ **性能优化** - 数据更新时无需重建 DOM，只更新变化的部分

## 核心原理

1. 使用 `L.divIcon` 创建空的 Marker 容器
2. 获取 Marker 的 DOM 元素
3. 使用 `Vue.extend()` 创建组件类
4. 实例化组件并挂载到 Marker 的 DOM 容器中
5. 通过 Vuex Store 管理数据，实现响应式更新

## 目录结构

```
src/
├── components/
│   └── VueMarker/
│       ├── README.md          # 本文档
│       └── example/           # 示例代码
│           ├── MarkerComponent.vue  # Marker 组件
│           └── store.js       # Vuex Store
```

## 基础用法

### 1. 创建 Marker 组件

```vue
<!-- MarkerComponent.vue -->
<template>
  <div class="custom-marker">
    <div class="marker-circle" :style="{ backgroundColor: color }">
      {{ data.value }}
    </div>
    <div class="marker-tooltip">
      <p>名称：{{ data.name }}</p>
      <p>数值：{{ data.value }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MarkerComponent",
  props: {
    id: { type: [Number, String], required: true },
    color: { type: String, default: "#1890ff" },
  },
  computed: {
    // 从 Vuex 获取数据
    data() {
      return this.$store.getters.getPointById(this.id);
    },
  },
};
</script>

<style scoped>
.custom-marker {
  position: relative;
}
.marker-circle {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
}
.marker-tooltip {
  display: none;
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 8px;
  border-radius: 4px;
  white-space: nowrap;
}
.custom-marker:hover .marker-tooltip {
  display: block;
}
</style>
```

### 2. 创建 Vuex Store

```js
// store.js
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    points: {}, // 以 id 为 key 存储点数据
  },
  mutations: {
    // 批量设置点数据
    SET_POINTS(state, points) {
      var data = {};
      points.forEach(function (point) {
        data[point.id] = point;
      });
      state.points = data;
    },
    // 更新单个点数据
    UPDATE_POINT(state, { id, data }) {
      if (state.points[id]) {
        Object.keys(data).forEach(function (key) {
          Vue.set(state.points[id], key, data[key]);
        });
      }
    },
  },
  actions: {
    setPoints({ commit }, points) {
      commit("SET_POINTS", points);
    },
    updatePoint({ commit }, payload) {
      commit("UPDATE_POINT", payload);
    },
  },
  getters: {
    getPointById: (state) => (id) => {
      return state.points[id] || {};
    },
  },
});
```

### 3. 在地图页面中使用

```vue
<template>
  <div class="map-page">
    <div id="map" class="map-container"></div>
  </div>
</template>

<script>
import Vue from "vue";
import L from "leaflet";
import MarkerComponent from "./MarkerComponent.vue";
import store from "./store.js";

export default {
  data() {
    return {
      map: null,
      markers: [],
      markerInstances: [],
      points: [
        { id: 1, lat: 24.5, lng: 118.0, value: 10, name: "站点A" },
        { id: 2, lat: 24.6, lng: 118.1, value: 20, name: "站点B" },
        { id: 3, lat: 24.4, lng: 117.9, value: 30, name: "站点C" },
      ],
    };
  },
  mounted() {
    this.initMap();
    this.addMarkers();
  },
  beforeDestroy() {
    // 销毁所有 Vue 组件实例
    this.markerInstances.forEach((instance) => instance.$destroy());
    if (this.map) this.map.remove();
  },
  methods: {
    initMap() {
      this.map = L.map("map").setView([24.5, 118], 10);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
        this.map
      );
    },
    addMarkers() {
      var self = this;
      var markerSize = 40;

      // 先把数据存入 Vuex
      store.dispatch("setPoints", this.points);

      this.points.forEach(function (point) {
        // 1. 创建 Leaflet Marker（使用空的 divIcon）
        var marker = L.marker([point.lat, point.lng], {
          icon: L.divIcon({
            className: "vue-marker-container",
            html: "",
            iconSize: [markerSize, markerSize],
            iconAnchor: [markerSize / 2, markerSize / 2],
          }),
        });
        marker.addTo(self.map);

        // 2. 获取 Marker 的 DOM 元素
        var iconEl = marker.getElement();

        // 3. 创建并挂载 Vue 组件
        if (iconEl) {
          var MarkerClass = Vue.extend(MarkerComponent);
          var instance = new MarkerClass({
            store: store, // 注入 Vuex store
            propsData: {
              id: point.id,
              color: "#1890ff",
            },
          });
          instance.$mount();
          iconEl.appendChild(instance.$el);
          self.markerInstances.push(instance);
        }

        self.markers.push(marker);
      });
    },
    // 更新数据示例
    updateData() {
      store.dispatch("updatePoint", {
        id: 1,
        data: { value: Math.floor(Math.random() * 100) },
      });
    },
  },
};
</script>

<style>
.vue-marker-container {
  background: transparent !important;
  border: none !important;
}
</style>
```

## 进阶功能

### 响应式数据更新

通过 Vuex 更新数据，组件会自动响应变化，无需操作 DOM：

```js
// 更新单个点的数据
store.dispatch("updatePoint", {
  id: 1,
  data: {
    value: 99,
    name: "新名称",
  },
});
```

### 根据 Zoom 层级显示/隐藏标签

```js
// store.js 中添加
state: {
  showLabel: false
},
mutations: {
  SET_SHOW_LABEL(state, show) {
    state.showLabel = show;
  }
},
getters: {
  showLabel: state => state.showLabel
}

// 页面中监听 zoom 变化
this.map.on('zoomend', () => {
  var zoom = this.map.getZoom();
  store.dispatch('setShowLabel', zoom >= 10);
});

// 组件中使用
computed: {
  labelVisible() {
    return this.$store.getters.showLabel;
  }
}
```

### 定时刷新数据

```js
data() {
  return {
    refreshTimer: null
  }
},
methods: {
  startAutoRefresh() {
    this.refreshTimer = setInterval(() => {
      this.points.forEach(point => {
        store.dispatch('updatePoint', {
          id: point.id,
          data: {
            value: Math.floor(Math.random() * 100)
          }
        });
      });
    }, 5000);
  },
  stopAutoRefresh() {
    if (this.refreshTimer) {
      clearInterval(this.refreshTimer);
      this.refreshTimer = null;
    }
  }
},
beforeDestroy() {
  this.stopAutoRefresh();
}
```

### Marker 点击事件

```js
// 在 Leaflet Marker 上绑定点击事件
marker.on('click', function() {
  self.handleMarkerClick(point);
});

// 处理点击
handleMarkerClick(point) {
  this.currentPoint = point;
  this.modalVisible = true;
}
```

## 注意事项

1. **组件销毁**：页面销毁时必须调用 `instance.$destroy()` 销毁所有 Vue 组件实例，避免内存泄漏

2. **Store 注入**：创建组件实例时需要注入 Vuex store：

   ```js
   new MarkerClass({
     store: store,
     propsData: { ... }
   });
   ```

3. **样式穿透**：divIcon 容器的样式需要在全局样式中设置：

   ```css
   .vue-marker-container {
     background: transparent !important;
     border: none !important;
   }
   ```

4. **iconAnchor**：设置正确的锚点位置，使 Marker 居中显示：

   ```js
   iconAnchor: [markerSize / 2, markerSize / 2];
   ```

5. **z-index**：tooltip 需要设置较高的 z-index 以显示在其他元素上方

## 完整示例

参考 `src/views/TestPage/` 目录下的实现：

- `index.vue` - 页面主文件，包含地图初始化和 Marker 添加逻辑
- `components/marker.vue` - Marker 组件，包含圆点、风向箭头、tooltip
- `assets/img/` - 图片资源（如风向箭头）

Store 文件位于 `src/store/testPage.js`，管理站点数据和显示状态。
