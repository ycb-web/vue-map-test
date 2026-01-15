# Mac 安装 QGIS

## 1. 下载 QGIS

访问官网下载页面：https://qgis.org/download/

选择 macOS 版本，推荐下载 **LTR（长期支持版）**，稳定性更好。

直接下载链接：https://qgis.org/downloads/macos/qgis-macos-ltr.dmg

## 2. 安装

1. 双击下载的 `.dmg` 文件
2. 将 QGIS 图标拖到 Applications 文件夹
3. 首次打开时，右键点击 QGIS → 选择"打开"（绕过 macOS 安全限制）

## 3. 安装常用插件

打开 QGIS 后，菜单栏选择：**插件 → 管理和安装插件**

推荐安装：

| 插件名            | 用途                                       |
| ----------------- | ------------------------------------------ |
| QuickMapServices  | 快速加载在线底图（天地图、OSM、Google 等） |
| QTiles            | 将地图导出为离线瓦片                       |
| OpenLayers Plugin | 加载 Google、Bing 等底图                   |

### 安装 QuickMapServices

1. 搜索 `QuickMapServices` 并安装
2. 安装后：**Web → QuickMapServices → Settings → More services → Get contributed pack**
3. 这样就能加载更多地图源（包括天地图）

## 4. 加载在线地图

菜单：**Web → QuickMapServices → 选择地图源**

常用地图源：

- OSM → OSM Standard（OpenStreetMap）
- Google → Google Satellite（谷歌卫星图）
- 天地图（需要在 contributed pack 里）

## 5. 导出离线瓦片

### 方法一：使用 QTiles 插件

1. 加载好底图后
2. **插件 → QTiles → QTiles**
3. 设置输出路径、瓦片格式（PNG/JPG）、缩放级别
4. 点击 Run 开始下载

### 方法二：使用 Generate XYZ tiles

1. **处理 → 工具箱 → 搜索 "Generate XYZ tiles"**
2. 设置范围、缩放级别、输出目录
3. 运行即可生成标准 XYZ 瓦片结构

## 6. 瓦片使用

导出的瓦片可以：

- 直接用 Nginx 静态托管
- 导入 GeoServer 发布 WMTS 服务
- 前端 Leaflet 直接加载：

```javascript
L.tileLayer("file:///path/to/tiles/{z}/{x}/{y}.png", {
  maxZoom: 18,
}).addTo(map);
```

## 注意事项

- 下载大范围高层级瓦片非常耗时，建议先小范围测试
- 商用地图（高德、百度、谷歌）有版权限制
- OpenStreetMap 可免费商用，需注明来源
