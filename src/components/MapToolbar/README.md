# MapToolbar 地图工具条组件

基于 Vue 2 + Leaflet + Ant Design Vue 的地图工具条组件，提供常用的地图操作功能。

## 功能特性

- 🎯 **复位** - 一键回到初始视图（中心点 + 缩放层级）
- 🖥️ **全屏** - 切换浏览器全屏，图标自动切换
- 🔍 **缩放** - 放大/缩小地图
- 🗺️ **底图切换** - 支持多底图切换（电子地图、地形图、遥感地图）
- 🧰 **工具箱** - 预留扩展入口

## 安装依赖

```bash
pnpm add leaflet ant-design-vue@1.7.8
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
      zoomControl: false, // 关闭默认缩放控件，使用工具条的
    }).setView([24.5, 118], 8);
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

| 事件名         | 参数               | 说明                 |
| -------------- | ------------------ | -------------------- |
| reset          | -                  | 点击复位按钮时触发   |
| fullscreen     | -                  | 点击全屏按钮时触发   |
| zoom-in        | -                  | 点击放大按钮时触发   |
| zoom-out       | -                  | 点击缩小按钮时触发   |
| tools          | -                  | 点击工具箱按钮时触发 |
| basemap-change | { index, basemap } | 切换底图时触发       |

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
          initSelect: true, // 默认选中
          baseUrl:
            "https://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}",
          // labelUrl: "", // 无标注图层可不填
          // thumbnail: "/img/gaode.png", // 可选，缩略图
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

### 底图配置项说明

| 字段       | 类型    | 必填 | 说明                                  |
| ---------- | ------- | ---- | ------------------------------------- |
| name       | String  | ✅   | 底图名称，显示在选择面板              |
| baseUrl    | String  | ✅   | 底图瓦片 URL，支持 {x}/{y}/{z} 占位符 |
| labelUrl   | String  | ❌   | 标注图层 URL，叠加在底图上方          |
| thumbnail  | String  | ❌   | 缩略图 URL，显示在选择面板            |
| initSelect | Boolean | ❌   | 是否默认选中，只能有一个为 true       |

## 自定义初始视图

```vue
<MapToolbar :map="map" :initial-center="[39.9, 116.4]" :initial-zoom="10" />
```

## 监听事件

```vue
<template>
  <MapToolbar
    :map="map"
    @reset="onReset"
    @basemap-change="onBasemapChange"
    @tools="openToolPanel"
  />
</template>

<script>
export default {
  methods: {
    onReset() {
      console.log("地图已复位");
    },
    onBasemapChange({ index, basemap }) {
      console.log(`切换到底图: ${basemap.name}`);
    },
    openToolPanel() {
      this.showToolPanel = true;
    },
  },
};
</script>
```

## 完整示例

```vue
<template>
  <div class="demo-page">
    <div id="demo-map" class="map-container"></div>

    <MapToolbar
      class="toolbar"
      :map="map"
      :initial-center="[30.5, 114.3]"
      :initial-zoom="10"
      :basemaps="basemaps"
      @reset="handleReset"
      @basemap-change="handleBasemapChange"
      @tools="showTools = true"
    />

    <!-- 工具面板（示例） -->
    <a-drawer title="工具箱" :visible="showTools" @close="showTools = false">
      <p>测距工具</p>
      <p>测面工具</p>
      <p>标注工具</p>
    </a-drawer>
  </div>
</template>

<script>
import L from "leaflet";
import MapToolbar from "@/components/MapToolbar";

export default {
  components: { MapToolbar },
  data() {
    const tk = "93724b915d1898d946ca7dc7b765dda5";
    return {
      map: null,
      showTools: false,
      basemaps: [
        {
          name: "电子地图",
          initSelect: true,
          baseUrl: `https://t0.tianditu.gov.cn/vec_w/wmts?tk=${tk}&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}`,
          labelUrl: `https://t0.tianditu.gov.cn/cva_w/wmts?tk=${tk}&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}`,
        },
        {
          name: "遥感地图",
          baseUrl: `https://t0.tianditu.gov.cn/img_w/wmts?tk=${tk}&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}`,
          labelUrl: `https://t0.tianditu.gov.cn/cia_w/wmts?tk=${tk}&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cia&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}`,
        },
      ],
    };
  },
  mounted() {
    this.initMap();
  },
  beforeDestroy() {
    if (this.map) {
      this.map.remove();
    }
  },
  methods: {
    initMap() {
      this.map = L.map("demo-map", {
        zoomControl: false,
        maxZoom: 18,
      }).setView([30.5, 114.3], 10);
    },
    handleReset() {
      this.$message.info("地图已复位");
    },
    handleBasemapChange({ basemap }) {
      this.$message.success(`已切换到: ${basemap.name}`);
    },
  },
};
</script>

<style scoped>
.demo-page {
  width: 100%;
  height: 100vh;
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

## 注意事项

1. **底图管理**：使用此组件后，不要在页面中手动添加底图图层，底图由组件统一管理
2. **zoomControl**：建议关闭 Leaflet 默认的缩放控件 `zoomControl: false`
3. **z-index**：工具条需要设置较高的 z-index 以显示在地图上方
4. **天地图 TK**：默认使用的天地图 TK 仅供测试，生产环境请替换为自己申请的 TK
