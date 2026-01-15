# MapStatus 地图状态组件

实时显示地图状态信息，包括鼠标位置经纬度、当前层级和动态比例尺。

## 功能

- 实时显示鼠标所在位置的经纬度（自动判断东西经、南北纬）
- 显示当前地图缩放层级
- 动态比例尺（根据层级自动调整宽度和距离）

## 使用方式

```vue
<template>
  <div class="page">
    <div id="map"></div>
    <MapStatus class="map-status" :map="map" />
  </div>
</template>

<script>
import L from "leaflet";
import MapStatus from "@/components/MapStatus";

export default {
  components: {
    MapStatus,
  },
  data() {
    return {
      map: null,
    };
  },
  mounted() {
    this.map = L.map("map").setView([24.5, 118], 8);
  },
};
</script>

<style scoped>
.map-status {
  position: absolute;
  bottom: 20px;
  left: 20px;
  z-index: 1000;
}
</style>
```

## Props

| 参数 | 说明             | 类型   | 必填 | 默认值 |
| ---- | ---------------- | ------ | ---- | ------ |
| map  | Leaflet 地图实例 | Object | 是   | null   |

## 显示格式

```
位置: 24.5000°N, 118.0000°E, 8  └─ 50 km ─┘
```

- 纬度：正数显示 N（北纬），负数显示 S（南纬）
- 经度：正数显示 E（东经），负数显示 W（西经）
- 比例尺：根据层级动态调整，显示整数距离（如 100m、500m、1km、5km 等）
