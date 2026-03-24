# 三角网格专题脚本

这个目录收口原来散落在 `地图-三角图层` 子目录里的脚本，统一为父项目可直接执行的入口。

## 脚本清单

### `convert-fort14-to-mesh.js`

用途：

- 将 `fort.14` 转成父项目运行时使用的 `public/data/triangle-topic/water-depth-fort14/mesh.json`

默认输入：

- `地图-三角图层/14原数据解析渲染/fort.14`

默认输出：

- `public/data/triangle-topic/water-depth-fort14/mesh.json`

命令：

```bash
npm run triangle:mesh
```

### `nc_to_wave_points.py`

用途：

- 将 `points + time` 结构的 NC 文件转为父项目点位时序预览数据
- 默认只抽样输出首帧 / 中间帧 / 末帧三份 JSON，减少静态测试数据体积

默认输入：

- `地图-三角图层/nc原数据解析渲染/20260311.nc`

默认输出：

- `public/data/triangle-topic/wave-points`

命令：

```bash
npm run triangle:nc:wave-points
```

## 依赖说明

### Node 脚本

- 依赖 Node.js
- 不额外依赖 npm 包

### Python 脚本

需要：

```bash
pip install netCDF4 xarray numpy
```

## 备注

- 这些脚本是父项目内的正式入口，后续优先维护这里
- `地图-三角图层` 下的同名脚本保留为历史来源，不建议继续直接调用
