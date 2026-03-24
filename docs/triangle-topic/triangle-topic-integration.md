# 三角网格专题集成说明

本文档说明三角网格专题在父项目 `vue-map-test` 中的接入方式。

## 路由入口

三角网格专题页新增在：

- 路由：`/triangle-topic`
- 页面目录：`src/views/TriangleTopicPage`

当前专题页包含两个页签：

1. `fort.14` 网格预览
2. `20260311.nc` 点位时序预览

## 页面组件

### fort.14 网格预览

组件：

- `src/views/TriangleTopicPage/components/water-depth-fort14/Fort14MeshPane.vue`

职责：

- 拉取 `mesh.json`
- 将 `nodes`、`elements` 转为 TypedArray
- 使用 `L.GridLayer` 做瓦片化 Canvas 三角面渲染
- 支持点击插值查询深度

### 20260311.nc 点位时序预览

组件：

- `src/views/TriangleTopicPage/components/wave-points/WavePointsPane.vue`

职责：

- 拉取 `metadata.json`
- 分帧拉取 `frames/000.json` 这类时间步文件
- 使用单 Canvas 覆盖层批量绘制点位
- 支持时间轴播放和缩放时重绘

## 运行时数据目录

父项目实际运行时读取的数据统一放在：

```text
public/data/triangle-topic/
```

当前包括：

```text
public/data/triangle-topic/
  ├── water-depth-fort14/
  │   └── mesh.json
  └── wave-points/
      ├── metadata.json
      └── frames/
```

## 父项目脚本入口

为了避免继续直接使用 `地图-三角图层` 里的历史脚本，父项目已经新增统一入口：

```text
scripts/triangle-topic/
  ├── convert-fort14-to-mesh.js
  ├── nc_to_wave_points.py
  └── README.md
```

对应命令：

- `npm run triangle:mesh`
- `npm run triangle:nc:wave-points`

## 源数据与运行时文件映射

### fort.14 网格

源文件：

- `地图-三角图层/14原数据解析渲染/fort.14`
- `地图-三角图层/14原数据解析渲染/convert.js`

生成关系：

```text
fort.14
  ↓ node convert.js
mesh.json
  ↓ 复制到父项目 public
public/data/triangle-topic/water-depth-fort14/mesh.json
```

### 20260311.nc 点位时序

源文件：

- `地图-三角图层/nc原数据解析渲染/20260311.nc`
- `地图-三角图层/nc原数据解析渲染/nc_to_wave_points.py`

生成关系：

```text
20260311.nc
  ↓ python nc_to_wave_points.py
wave_points_20260311/
  ↓ 复制到父项目 public/data
public/data/triangle-topic/wave-points/
```

## 当前约束

### 1. `mesh.json` 是预处理产物

前端不直接解析 `fort.14`，而是读取预先转换好的 `mesh.json`。

### 2. `20260311.nc` 不是三角面数据

这份 NC 只有点位和时间序列值，没有 `element` 拓扑关系，因此当前只能按点位场渲染，不能直接套 ADCIRC 三角面逻辑。

### 3. 数据体量较大

- `mesh.json` 约 13.7 MB
- `wave-points/metadata.json` 约 5 MB
- 每一帧 JSON 约 1.68 到 1.69 MB

如果后续继续扩变量或扩时间范围，建议考虑：

- 二进制格式
- 懒加载
- 帧缓存上限控制
- 更明确的数据预处理脚本入口
