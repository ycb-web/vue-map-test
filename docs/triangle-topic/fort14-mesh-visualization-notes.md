# ADCIRC 网格可视化开发笔记

## 背景

将 ADCIRC 的 `fort.14` 网格文件在 Leaflet 地图上可视化，包含 35 万节点和 18 万三角形单元。

## fort.14 文件格式

```text
OceanMesh2D                          ← 网格名称
353326 189136                        ← 三角形数量  节点数量
1   122.134596   16.249166   2.867   ← 节点ID  经度  纬度  深度
2   122.133695   16.254557   1.637
...
1   3   81487   81200   81202        ← 单元ID  节点数(3)  节点1  节点2  节点3
2   3   148094  147731  147747
...
```

- 节点：存储坐标和深度值
- 三角形：引用三个节点 ID，本身不存值

## 遇到的问题及解决方案

### 问题 1：SVG 渲染卡顿

**现象**：18 万个三角形用 Leaflet 的 `L.polygon()` 渲染，每个都是独立 DOM 元素，拖动、缩放时非常卡。

**解决**：改用 Canvas 渲染，所有三角形画在一张画布上。

```javascript
// 之前：每个三角形一个 DOM 元素
L.polygon(coords, { ... }).addTo(map);

// 之后：Canvas 批量绘制
ctx.beginPath();
for (const t of triangles) {
  ctx.moveTo(t.x1, t.y1);
  ctx.lineTo(t.x2, t.y2);
  ctx.lineTo(t.x3, t.y3);
}
ctx.stroke();
```

### 问题 2：深度着色

**需求**：根据深度值用色阶（绿 → 青 → 蓝）填充三角形。

**解决**：取三个顶点深度的平均值，映射到颜色。

```javascript
function depthToColor(depth, minDepth, maxDepth) {
  const t = (depth - minDepth) / (maxDepth - minDepth);
  if (t < 0.5) {
    return `rgb(0, 255, ${Math.round(255 * t * 2)})`;
  }
  return `rgb(0, ${Math.round(255 * (1 - (t - 0.5) * 2))}, 255)`;
}
```

### 问题 3：网格线覆盖在填充色之上

**需求**：先画填充色，再画网格线条。

**解决**：分两遍绘制。

```javascript
// 第一遍：填充
for (const t of triangles) {
  ctx.beginPath();
  ctx.moveTo(t.x1, t.y1);
  ctx.lineTo(t.x2, t.y2);
  ctx.lineTo(t.x3, t.y3);
  ctx.closePath();
  ctx.fillStyle = t.color;
  ctx.fill();
}

// 第二遍：描边
ctx.strokeStyle = "rgba(80, 80, 80, 0.4)";
ctx.lineWidth = 0.5;
ctx.beginPath();
for (const t of triangles) {
  ctx.moveTo(t.x1, t.y1);
  ctx.lineTo(t.x2, t.y2);
  ctx.lineTo(t.x3, t.y3);
  ctx.lineTo(t.x1, t.y1);
}
ctx.stroke();
```

### 问题 4：缩放、拖动时 Canvas 位置偏移

**现象**：自己管理 Canvas 位置时，缩放过程中网格会偏移，等重绘完成后才跳回正确位置。

**原因**：手动监听 `move`、`zoom` 事件计算位置，与 Leaflet 内部变换不完全同步。

**解决**：改用 `L.GridLayer`（瓦片系统），让 Leaflet 自己管理位置。

```javascript
const MeshTileLayer = L.GridLayer.extend({
  createTile: function (coords) {
    const tile = document.createElement("canvas");
    tile.width = 256;
    tile.height = 256;

    const nwPoint = coords.scaleBy(this.getTileSize());
    const nw = this._map.unproject(nwPoint, coords.z);
    const se = this._map.unproject(nwPoint.add(this.getTileSize()), coords.z);

    // 只绘制落在这个瓦片范围内的三角形
    return tile;
  },
});
```

**为什么有效**：

- Leaflet 的瓦片系统已经处理好了位置同步、缩放动画
- 只需要实现 `createTile()` 并返回绘制好的 canvas
- 瓦片可自动缓存、回收，性能更稳

## 最终架构

```text
fort.14 文件
    ↓ 解析
mesh.json
    ↓ TypedArray 存储节点和单元
MeshTileLayer (L.GridLayer)
    ↓ 瓦片式渲染
Leaflet 地图
```

## 关键点总结

1. 大量几何体用 Canvas 而非 SVG
2. 用 TypedArray 存储数据，比普通对象更紧凑
3. 利用 Leaflet 的瓦片系统处理位置同步
4. 只渲染可见区域，通过边界检查跳过不相交的三角形
