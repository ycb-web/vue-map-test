# MapToolbar 地图工具条组件

基于 Vue 2 + Leaflet + Ant Design Vue 的地图工具条组件，提供常用的地图操作功能。

## 功能特性

- 🎯 **复位** - 一键回到初始视图（中心点 + 缩放层级）
- 🖥️ **全屏** - 切换浏览器全屏，图标自动切换
- 🔍 **缩放** - 放大/缩小地图
- 🗺️ **底图切换** - 支持多底图切换（电子地图、地形图、遥感地图）
- 📏 **测距** - 点击添加测量点，双击结束，显示每段距离和总距离
- 📐 **测面** - 点击添加多边形顶点，双击结束，显示每边距离和总面积

## 安装依赖

```bash
pnpm add leaflet ant-design-vue@1.7.8 leaflet-draw
```

## 引入组件

```js
// main.js
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
Vue.use(Antd);
```

## 基础用法

```vue
<template>
  <div class="page">
    <div id="map" class="map-container"></div>
    <MapToolbar class="toolbar" :map="map" />
  </div>
</template>

<script>
import L from "leaflet";
import MapToolbar from "@/components/MapToolbar";

export default {
  components: { MapToolbar },
  data() {
    return {
      map: null,
    };
  },
  mounted() {
    this.map = L.map("map", {
      zoomControl: false,
    });
    // 底图由 MapToolbar 自动管理，无需手动添加
  },
};
</script>

<style scoped>
.page {
  width: 100%;
  height: 100%;
  position: relative;
}
.map-container {
  width: 100%;
  height: 100%;
}
.toolbar {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
}
</style>
```

## Props 属性

| 属性          | 类型   | 默认值         | 说明                     |
| ------------- | ------ | -------------- | ------------------------ |
| map           | Object | null           | Leaflet 地图实例（必传） |
| initialCenter | Array  | [24.5, 118]    | 初始中心点 [纬度, 经度]  |
| initialZoom   | Number | 8              | 初始缩放层级             |
| basemaps      | Array  | 天地图三种底图 | 底图配置列表             |

## Events 事件

| 事件名         | 参数               | 说明               |
| -------------- | ------------------ | ------------------ |
| reset          | -                  | 点击复位按钮时触发 |
| fullscreen     | -                  | 点击全屏按钮时触发 |
| zoom-in        | -                  | 点击放大按钮时触发 |
| zoom-out       | -                  | 点击缩小按钮时触发 |
| basemap-change | { index, basemap } | 切换底图时触发     |

## 测量工具使用说明

工具箱中包含测距和测面两个功能，基于自定义的 `DrawPlug` 工具类实现。

### 测距

1. 点击工具箱中的"测距"按钮
2. 在地图上单击添加测量点
3. 双击结束测量
4. 显示结果：
   - 红色标签：每段距离
   - 蓝色标签：总距离
5. 单位自动切换：< 1km 显示米，≥ 1km 显示公里

### 测面

1. 点击工具箱中的"测面"按钮
2. 在地图上单击添加多边形顶点（至少 3 个点）
3. 双击结束测量
4. 显示结果：
   - 红色标签：每边距离
   - 绿色标签：总面积
5. 单位自动切换：< 1km² 显示平方米，≥ 1km² 显示平方公里

### 清除测量

点击"清除"按钮可清除所有测量结果。

## 自定义底图

```vue
<template>
  <MapToolbar :map="map" :basemaps="customBasemaps" />
</template>

<script>
export default {
  data() {
    return {
      customBasemaps: [
        {
          name: "高德地图",
          initSelect: true,
          baseUrl:
            "https://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}",
        },
        {
          name: "天地图影像",
          baseUrl: "https://t0.tianditu.gov.cn/img_w/wmts?tk=YOUR_TK&...",
          labelUrl: "https://t0.tianditu.gov.cn/cia_w/wmts?tk=YOUR_TK&...",
        },
      ],
    };
  },
};
</script>
```

### 底图配置项

| 字段       | 类型    | 必填 | 说明                                  |
| ---------- | ------- | ---- | ------------------------------------- |
| name       | String  | ✅   | 底图名称                              |
| baseUrl    | String  | ✅   | 底图瓦片 URL，支持 {x}/{y}/{z} 占位符 |
| labelUrl   | String  | ❌   | 标注图层 URL                          |
| thumbnail  | String  | ❌   | 缩略图 URL                            |
| initSelect | Boolean | ❌   | 是否默认选中                          |

## 注意事项

1. **底图管理**：底图由组件统一管理，无需在页面中手动添加
2. **zoomControl**：建议关闭 Leaflet 默认缩放控件
3. **双击缩放**：组件会自动禁用地图双击缩放，以避免与测量双击结束冲突
4. **天地图 TK**：默认 TK 仅供测试，生产环境请替换

## 相关文件

- `src/components/MapToolbar/index.vue` - 工具条组件
- `src/utils/DrawPlug.js` - 测距测面工具类
