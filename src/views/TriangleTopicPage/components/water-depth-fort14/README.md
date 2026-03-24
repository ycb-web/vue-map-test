# fort14

这个目录是 `TriangleTopicPage` 在 `views` 下面的 fort.14 聚合入口。

相关文件路径：

- 页面组件：`src/views/TriangleTopicPage/components/water-depth-fort14/Fort14MeshPane.vue`
- 原始文件：`地图-三角图层/14原数据解析渲染/fort.14`
- 解析脚本：`scripts/triangle-topic/convert-fort14-to-mesh.js`
- 模块数据：`src/views/TriangleTopicPage/components/water-depth-fort14/data/mesh.json`
- 运行时数据：`public/data/triangle-topic/water-depth-fort14/mesh.json`

说明：

- 当前页面实际读取的是 `public/data/triangle-topic/water-depth-fort14/mesh.json`
- 原始文件仍然通过模块目录统一查看，不需要再到别处找
