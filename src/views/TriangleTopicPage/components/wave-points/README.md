# wave-points

这个目录是 `TriangleTopicPage` 在 `views` 下面的 wave-points 聚合入口。

相关文件路径：

- 页面组件：`src/views/TriangleTopicPage/components/wave-points/WavePointsPane.vue`
- 原始文件：`地图-三角图层/nc原数据解析渲染/20260311.nc`
- 解析脚本：`scripts/triangle-topic/nc_to_wave_points.py`
- 模块数据目录：`src/views/TriangleTopicPage/components/wave-points/data/runtime-data`
- 运行时数据目录：`public/data/triangle-topic/wave-points`

说明：

- 当前页面实际读取的是 `public/data/triangle-topic/wave-points`
- 当前调试数据只保留首帧 / 中间帧 / 末帧三份 JSON
- 原始 NC 文件和转换结果都可以在当前模块目录下直接查看
