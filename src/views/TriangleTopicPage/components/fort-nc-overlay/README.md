# fort-nc-overlay

这个目录用于承接第四个 tab `fort+nc叠加模块`。

说明：

- 组件目录单独拆分，避免继续放在 `new-fort14` 下面混在一起
- 不单独复制运行时数据
- 直接复用前两个 tab 已有的数据文件：
  - 网格数据：`public/data/triangle-topic/new-fort14/mesh.json`
  - 时序值数据：`public/data/triangle-topic/wave-points/metadata.json`
  - 帧数据：`public/data/triangle-topic/wave-points/frames/*.json`

当前职责：

- 使用 `new-fort14` 的三角网格作为几何骨架
- 使用 `20260311.nc` 解析出的 `hs` 作为节点值
- 按索引将 nc 点位值叠加到 fort 网格上
