# new-fort14

这个目录用于承接新加入的 `fort.14` 三角网格模块。

相关文件路径：

- 页面组件：`src/views/TriangleTopicPage/components/new-fort14/NewFort14MeshPane.vue`
- 原始文件：`src/views/TriangleTopicPage/components/new-fort14/source/fort.14`
- 解析脚本：`src/views/TriangleTopicPage/components/new-fort14/scripts/convert-fort14-to-mesh.js`
- 运行时数据：`public/data/triangle-topic/new-fort14/mesh.json`

说明：

- 当前先按“节点标量值 + 三角网格拓扑”方式渲染
- 节点第 4 列数值会作为颜色和点击查询的目标值
- 如果后续确认它是浪高、浪向或别的物理量，只需要再改文案和图例名称

## fort + nc 匹配分析

当前第四个 tab `fort+nc叠加模块` 的目标是：

- `fort.14` 提供三角网格拓扑
- `20260311.nc` 提供每个节点在各时间步上的 `hs` 波高值

### 结论

当前项目里，这两份数据**可以直接匹配**，但不是依赖一个双方都显式导出的 `id` 字段，而是依赖**一致的点顺序/索引顺序**。

更准确地说：

- `fort.14` 原始文件里有显式节点编号
- `20260311.nc` 原始文件里没有单独的 `point_id` / `node_id` 变量
- 但 `nc` 的第 `i` 个点，和 `fort.14` 的第 `i` 个节点，实际上是同一个位置

### 核对依据

#### 1. 新 fort.14 原始文件有节点 id

`src/views/TriangleTopicPage/components/new-fort14/source/fort.14`

前几行格式如下：

```text
OceanMesh2D
424573 232740
1 122.1307128731 16.2579701904 2.4507822990e+00
2 122.1253943305 16.2588575176 -3.8913028240e+00
3 122.1336855868 16.2545547991 -3.8685708046e+00
```

含义：

- 第 1 列：`nodeId`
- 第 2 列：经度 `lon`
- 第 3 列：纬度 `lat`
- 第 4 列：当前 fort 文件自带的节点值

三角形单元格式如下：

```text
1 3 11396 10752 11395
2 3 117799 117798 118706
```

含义：

- 第 1 列：`elementId`
- 第 2 列：节点数，当前都是 `3`
- 第 3~5 列：组成这个三角形的 3 个 `nodeId`

也就是说，`fort.14` 这边是有真实节点编号体系的。

#### 2. nc 原始文件没有显式 id 字段

`地图-三角图层/nc原数据解析渲染/20260311.nc`

原始结构检查结果：

- 维度：`points: 232740, time: 121`
- 坐标：只有 `time`
- 变量：
  - `longitude(points)`
  - `latitude(points)`
  - `hs(time, points)`
  - `theta0(time, points)`
  - `thetap(time, points)`
  - `tps(time, points)`
  - `hswe(time, points)`
  - `tm01(time, points)`
  - `tm02(time, points)`

这里没有看到：

- `point_id`
- `node_id`
- `mesh_node_id`

所以 `nc` 这边并没有一个显式导出的 id 可直接 join。

#### 3. 两边可以按索引一一对应

实际比对结果：

- `new-fort14/mesh.json` 的 `numNodes = 232740`
- `wave-points/metadata.json` 的 `pointCount = 232740`

逐点对比经纬度：

- 最大经度差约 `4.31e-06`
- 最大纬度差约 `1.45e-06`

这个误差量级非常小，基本可以判断是：

- 一边保留了更多小数位
- 另一边经过了浮点截断/四舍五入

而不是两套不同的点集。

因此当前可采用的匹配规则是：

- `fort` 第 `i` 个节点
- 对应 `nc` 第 `i` 个点位

即：

- `fort nodeId = i + 1`
- `nc pointIndex = i`

### 当前第四个 tab 的实现方式

`fort+nc叠加模块` 现在按下面方式工作：

1. 读取 `new-fort14/mesh.json`
2. 使用其中的 `lon / lat / elements` 作为三角网格骨架
3. 再读取 `wave-points/frames/*.json`
4. 将 `frame.values[i]` 作为第 `i` 个 fort 节点的 `hs` 值
5. 用三角形三个顶点的 `hs` 平均值着色
6. 点击地图时，对三角形内的 `hs` 做插值查询

### 建议

虽然当前按索引匹配已经足够可用，但为了后续维护更稳，建议后面把预处理脚本再补一层显式字段：

- 在 `mesh.json` 中保留 `nodeIds`
- 在 `metadata.json` 中写出 `pointIndex` 或映射后的 `nodeId`

这样后续再看这套数据时，就不会停留在“推断它们能对上”，而是能直接看到“数据里明写它们怎么对上”。
