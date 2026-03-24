# 三角网格专题文档

这个目录收口三角网格专题相关的说明文档，来源包括：

- 原始子目录 `地图-三角图层` 中已有的说明文件
- 当前父项目 `vue-map-test` 内对三角网格专题的接入说明

## 文档清单

### 1. fort.14 网格渲染说明

文件：`fort14-mesh-visualization-notes.md`

内容：

- `fort.14` 文件格式
- 大规模三角网格的 Canvas 渲染思路
- `L.GridLayer` 方案为什么比手动管理 Canvas 更稳

### 2. 父项目集成说明

文件：`triangle-topic-integration.md`

内容：

- 三角网格专题页在父项目里的路由位置
- `mesh.json`、`wave-points` 在 `public/data` 下的落点
- 原始源文件与父项目运行时文件的对应关系

## 当前父项目中的关键路径

- 页面入口：`src/views/TriangleTopicPage`
- 网格数据：`public/data/triangle-topic/water-depth-fort14/mesh.json`
- 点位时序数据：`public/data/triangle-topic/wave-points`
- 原始资料：`地图-三角图层`

## 备注

原始子目录里的文档仍然保留，没有删除；这里是父项目内的归档副本，方便后续统一维护。
