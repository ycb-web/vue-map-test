# 地图要素编辑功能实现指南

## 功能概述

实现地图上点、线、面要素的编辑功能，包括：
- 要素拖拽移动（点、线、面整体拖拽）
- 线、面顶点编辑（拖拽顶点、添加新顶点）
- 要素绑制与删除
- 导入 GeoJSON 文件

## 技术方案

使用 `leaflet-draw` 插件实现，该插件提供了完整的绑定和编辑功能。

## 实现步骤

### 1. 安装依赖

```bash
npm install leaflet-draw --save
```

### 2. 创建编辑页面组件

文件路径：`src/views/EditPage.vue`

#### 2.1 引入依赖

```javascript
import L from "leaflet";
import "leaflet-draw";
import "leaflet-draw/dist/leaflet.draw.css";
```

#### 2.2 初始化地图和要素图层

```javascript
// 创建要素图层组
this.drawnItems = new L.FeatureGroup();
this.map.addLayer(this.drawnItems);
```

#### 2.3 绑制功能实现

使用 `L.Draw` 的各种 Handler 实现绑制：

```javascript
// 绑制点
new L.Draw.Marker(this.map).enable();

// 绑制线
new L.Draw.Polyline(this.map, { shapeOptions: style }).enable();

// 绑制面
new L.Draw.Polygon(this.map, { shapeOptions: style }).enable();
```

监听绑制完成事件：

```javascript
this.map.on(L.Draw.Event.CREATED, (e) => {
  const layer = e.layer;
  this.drawnItems.addLayer(layer);
});
```

#### 2.4 编辑功能实现

**启用要素编辑（拖拽顶点、添加顶点）：**

```javascript
// 线、面要素
if (layer.editing) {
  layer.editing.enable();
}

// 点要素拖拽
if (layer instanceof L.Marker) {
  layer.dragging.enable();
}
```

#### 2.5 导入 GeoJSON 文件

```javascript
// 触发文件选择
triggerImport() {
  this.$refs.fileInput.click();
},

// 处理文件导入
handleFileImport(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    const geojson = JSON.parse(e.target.result);
    this.importGeoJSON(geojson);
  };
  reader.readAsText(file);
},

// 导入 GeoJSON 数据
importGeoJSON(geojson) {
  const defaultStyle = {
    color: "#3388ff",
    weight: 3,
    fillColor: "#3388ff",
    fillOpacity: 0.3,
  };

  L.geoJSON(geojson, {
    style: () => defaultStyle,
    pointToLayer: (feature, latlng) => L.marker(latlng),
    onEachFeature: (feature, layer) => {
      // 添加到图层组
      this.drawnItems.addLayer(layer);
      
      // 绑定事件和编辑功能
      // ...
    },
  });

  // 缩放到数据范围
  this.map.fitBounds(this.drawnItems.getBounds());
}
```

### 3. 配置路由

在 `src/router/index.js` 中添加：

```javascript
import EditPage from "../views/EditPage.vue";

// routes 数组中添加
{
  path: "/edit",
  name: "Edit",
  component: EditPage,
}
```

## 核心 API 说明

### L.Draw.Event

| 事件 | 说明 |
|------|------|
| `CREATED` | 绑制完成 |
| `EDITED` | 编辑完成 |
| `DELETED` | 删除完成 |

### layer.editing

线、面要素的编辑控制器，提供：
- `enable()` - 启用顶点编辑
- `disable()` - 禁用顶点编辑

启用后：
- 可拖拽现有顶点
- 线段中点出现半透明顶点，拖拽可添加新顶点

### layer.dragging (Marker)

点要素的拖拽控制器：
- `enable()` - 启用拖拽
- `disable()` - 禁用拖拽

### L.geoJSON

用于导入 GeoJSON 数据：

```javascript
L.geoJSON(geojson, {
  style: () => styleOptions,           // 线/面样式
  pointToLayer: (f, latlng) => layer,  // 点要素转换
  onEachFeature: (f, layer) => {},     // 每个要素的回调
});
```

### 整体拖拽实现

`leaflet-draw` 默认不支持线/面的整体拖拽，需要手动实现：

```javascript
layer.on("mousedown", (e) => {
  if (!editEnabled) return;
  map.dragging.disable();
  
  map.on("mousemove", (moveEvent) => {
    const dx = moveEvent.latlng.lat - startLat;
    const dy = moveEvent.latlng.lng - startLng;
    layer.setLatLngs(offsetLatLngs(layer.getLatLngs(), dx, dy));
  });
  
  map.on("mouseup", () => {
    map.dragging.enable();
    // 重新创建图层以刷新编辑顶点
    recreateLayer(layer);
  });
});
```

### 自定义顶点大小

通过 CSS 覆盖默认样式：

```css
.leaflet-editing-icon {
  width: 8px !important;
  height: 8px !important;
  margin-left: -4px !important;
  margin-top: -4px !important;
  background-color: #fff;
  border: 2px solid #3388ff;
  border-radius: 2px;
}
```

## 使用方式

1. 启动项目：`npm run serve`
2. 访问：`http://localhost:8080/#/edit`
3. 使用绑制工具创建点、线、面，或导入 GeoJSON 文件
4. 勾选"启用编辑"开启编辑模式
5. 拖拽要素整体移动，或拖拽顶点调整形状
6. 在线段中点拖拽可添加新顶点

## 支持的 GeoJSON 类型

- Point / MultiPoint
- LineString / MultiLineString
- Polygon / MultiPolygon
- FeatureCollection

## 文件结构

```
src/
├── views/
│   └── EditPage.vue      # 编辑页面组件
└── router/
    └── index.js          # 路由配置
```

## 注意事项

1. `leaflet-draw` 的 CSS 必须引入，否则编辑顶点不显示
2. 编辑模式下，线/面的中点会显示半透明圆点，拖拽即可添加新顶点
3. Marker 使用 `dragging` 而非 `editing` 来控制拖拽
4. 整体拖拽后需要重新创建图层才能正确更新编辑顶点位置
