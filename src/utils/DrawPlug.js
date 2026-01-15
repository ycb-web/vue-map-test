/**
 * DrawPlug - 测距测面绘制工具类
 * 基于 Leaflet 实现的地图测量功能
 *
 * 功能：
 * - 测距：点击添加测量点，双击结束，显示每段距离和总距离
 * - 测面：点击添加多边形顶点，双击结束，显示每边距离和总面积
 * - 清除：清除所有测量结果
 *
 * 使用方式：
 * const measureGroup = L.layerGroup().addTo(map);
 * const drawPlug = new DrawPlug(map, measureGroup);
 * drawPlug.startDrawLine();    // 开始测距
 * drawPlug.startDrawPolygon(); // 开始测面
 * drawPlug.clearLayer();       // 清除测量
 */
import L from "leaflet";
import "leaflet-draw";

class DrawPlug {
  /**
   * 构造函数
   * @param {L.Map} map - Leaflet 地图实例
   * @param {L.LayerGroup} measureGroup - 用于存放测量图层的图层组
   */
  constructor(map, measureGroup) {
    // 绘制状态
    this.DRAWING = false; // 是否正在绘制
    this.ISMEASURE = true; // 是否处于测量模式
    this.MEASURERESULT = 0; // 当前测量结果（累计距离）

    // 图层存储
    this.DRAWLAYERS = []; // 所有绘制图层
    this.BarDRAWLAYERS = []; // 已完成的绘制图层

    // 测距相关
    this.DRAWPOLYLINE = null; // 当前绘制的折线
    this.DRAWMOVEPOLYLINE = null; // 鼠标移动时的临时折线
    this.DRAWPOLYLINEPOINTS = []; // 折线的节点坐标集合

    // 测面相关
    this.DRAWPOLYGON = null; // 当前绘制的多边形
    this.DRAWMOVEPOLYGON = null; // 鼠标移动时的临时多边形
    this.DRAWPOLYGONPOINTS = []; // 多边形的节点坐标集合

    // 提示框（预留）
    this.MEASURETOOLTIP = null; // 测距提示
    this.MEASUREAREATOOLTIP = null; // 测面提示

    // 地图和图层组引用
    this.map = map;
    this.measureGroup = measureGroup;
  }

  /**
   * 创建测量结果标签
   * @param {string} text - 标签文本内容
   * @param {string} type - 标签类型：'segment'(分段距离), 'total'(总距离), 'area'(面积)
   * @returns {L.DivIcon} Leaflet DivIcon 实例
   */
  _createLabel(text, type) {
    // 根据类型设置不同的背景色
    var bgColor = "#ff4d4f"; // 默认红色（分段距离）
    if (type === "total") bgColor = "#1890ff"; // 蓝色（总距离）
    if (type === "area") bgColor = "#52c41a"; // 绿色（面积）

    return L.divIcon({
      className: "measure-label-wrapper",
      html:
        '<div class="measure-label" style="background:' +
        bgColor +
        '">' +
        text +
        "</div>",
      iconSize: [0, 0],
      iconAnchor: [0, 0],
    });
  }

  /**
   * 开始测距
   * 用户点击地图添加测量点，双击结束测量
   * 会显示每段距离（红色标签）和总距离（蓝色标签）
   */
  startDrawLine() {
    var that = this;

    // 重置测量状态
    that.MEASURERESULT = 0;
    that.ISMEASURE = true;
    that.map.getContainer().style.cursor = "crosshair";

    // 折线样式配置
    var shapeOptions = {
      color: "#ff4d4f",
      weight: 3,
      opacity: 0.8,
      fill: false,
      clickable: true,
    };

    // 创建折线图层
    that.DRAWPOLYLINE = new L.Polyline([], shapeOptions);
    that.measureGroup.addLayer(that.DRAWPOLYLINE);

    /**
     * 鼠标点击事件 - 添加测量点
     */
    function onClick(e) {
      that.DRAWING = true;
      that.DRAWPOLYLINEPOINTS.push(e.latlng);

      // 计算累计距离
      if (that.DRAWPOLYLINEPOINTS.length > 1 && that.ISMEASURE) {
        that.MEASURERESULT += e.latlng.distanceTo(
          that.DRAWPOLYLINEPOINTS[that.DRAWPOLYLINEPOINTS.length - 2]
        );
      }

      // 添加点到折线
      that.DRAWPOLYLINE.addLatLng(e.latlng);
      that.map.on("mousemove", onMove);
    }

    /**
     * 鼠标移动事件 - 绘制临时线段
     */
    function onMove(e) {
      if (that.DRAWING) {
        // 移除旧的临时线段
        if (that.DRAWMOVEPOLYLINE != null) {
          that.measureGroup.removeLayer(that.DRAWMOVEPOLYLINE);
        }
        // 绘制新的临时线段（从最后一个点到鼠标位置）
        var prevPoint =
          that.DRAWPOLYLINEPOINTS[that.DRAWPOLYLINEPOINTS.length - 1];
        that.DRAWMOVEPOLYLINE = new L.Polyline(
          [prevPoint, e.latlng],
          shapeOptions
        );
        that.measureGroup.addLayer(that.DRAWMOVEPOLYLINE);
      }
    }

    /**
     * 双击事件 - 结束测量并显示结果
     */
    function onDoubleClick(e) {
      that.map.getContainer().style.cursor = "";

      // 计算总距离
      var distance =
        that.MEASURERESULT +
        e.latlng.distanceTo(
          that.DRAWPOLYLINEPOINTS[that.DRAWPOLYLINEPOINTS.length - 1]
        );

      // 显示每段距离标签
      for (var i = 0; i < that.DRAWPOLYLINEPOINTS.length - 1; i++) {
        var segmentDist = that.DRAWPOLYLINEPOINTS[i].distanceTo(
          that.DRAWPOLYLINEPOINTS[i + 1]
        );
        // 创建透明线段用于获取中心点
        var segmentLine = L.polyline(
          [that.DRAWPOLYLINEPOINTS[i], that.DRAWPOLYLINEPOINTS[i + 1]],
          { color: "rgba(0,0,0,0)" }
        ).addTo(that.measureGroup);
        var segmentCenter = segmentLine.getCenter();
        // 在线段中心添加距离标签
        var segmentMarker = new L.Marker(segmentCenter, {
          draggable: false,
          icon: that._createLabel(that._formatDistance(segmentDist), "segment"),
        });
        that.measureGroup.addLayer(segmentMarker);
      }

      // 在终点显示总距离标签
      var totalMarker = new L.Marker(e.latlng, {
        draggable: false,
        icon: that._createLabel(that._formatDistance(distance), "total"),
      });
      that.measureGroup.addLayer(totalMarker);

      // 清理绘制状态
      if (that.DRAWING) {
        if (that.DRAWMOVEPOLYLINE != null) {
          that.map.removeLayer(that.DRAWMOVEPOLYLINE);
          that.DRAWMOVEPOLYLINE = null;
        }
        that.BarDRAWLAYERS.push(that.DRAWPOLYLINE);
        that.DRAWPOLYLINEPOINTS = [];
        that.DRAWING = false;
        that.ISMEASURE = false;
        // 移除事件监听
        that.map.off("mousedown", onClick);
        that.map.off("mousemove", onMove);
        that.map.off("dblclick", onDoubleClick);
      }
    }

    // 绑定事件
    that.map.on("mousedown", onClick);
    that.map.on("dblclick", onDoubleClick);
  }

  /**
   * 开始测面
   * 用户点击地图添加多边形顶点，双击结束测量
   * 会显示每边距离（红色标签）和总面积（绿色标签）
   */
  startDrawPolygon() {
    var that = this;

    // 重置测量状态
    that.MEASURERESULT = 0;
    that.ISMEASURE = true;
    that.map.getContainer().style.cursor = "crosshair";

    // 多边形样式配置
    var shapeOptions = {
      color: "#ff4d4f",
      weight: 3,
      opacity: 0.8,
      fill: true,
      fillColor: "#ff4d4f",
      fillOpacity: 0.2,
      clickable: true,
    };

    // 创建多边形图层
    that.DRAWPOLYGON = new L.Polygon([], shapeOptions);
    that.measureGroup.addLayer(that.DRAWPOLYGON);

    /**
     * 鼠标点击事件 - 添加多边形顶点
     */
    function onClick(e) {
      that.DRAWING = true;
      that.DRAWPOLYGONPOINTS.push(e.latlng);
      that.DRAWPOLYGON.addLatLng(e.latlng);
    }

    /**
     * 鼠标移动事件 - 绘制临时多边形
     */
    function onMove(e) {
      if (that.DRAWING) {
        // 移除旧的临时多边形
        if (that.DRAWMOVEPOLYGON != null) {
          that.map.removeLayer(that.DRAWMOVEPOLYGON);
        }
        // 绘制新的临时多边形（首点 -> 最后一点 -> 鼠标位置）
        var prevPoint =
          that.DRAWPOLYGONPOINTS[that.DRAWPOLYGONPOINTS.length - 1];
        var firstPoint = that.DRAWPOLYGONPOINTS[0];
        that.DRAWMOVEPOLYGON = new L.Polygon(
          [firstPoint, prevPoint, e.latlng],
          shapeOptions
        );
        that.measureGroup.addLayer(that.DRAWMOVEPOLYGON);
      }
    }

    /**
     * 双击事件 - 结束测量并显示结果
     */
    function onDoubleClick(e) {
      that.map.getContainer().style.cursor = "";

      var tempPoints = that.DRAWPOLYGONPOINTS.slice();

      // 获取多边形顶点并闭合
      var polygonPoints = that.DRAWPOLYGON.getLatLngs()[0];
      if (polygonPoints && polygonPoints.length > 0) {
        polygonPoints = polygonPoints.slice();
        if (polygonPoints.length > 1) {
          polygonPoints.pop(); // 移除重复的最后一点
        }
        var firstPt = polygonPoints[0];
        polygonPoints.push(firstPt); // 闭合多边形

        // 显示每边距离标签
        for (var i = 0; i < polygonPoints.length - 1; i++) {
          var segmentDist = polygonPoints[i].distanceTo(polygonPoints[i + 1]);
          // 创建透明线段用于获取中心点
          var segmentLine = L.polyline(
            [polygonPoints[i], polygonPoints[i + 1]],
            { color: "rgba(0,0,0,0)" }
          ).addTo(that.measureGroup);
          var segmentCenter = segmentLine.getCenter();
          // 在边的中心添加距离标签
          var segmentMarker = new L.Marker(segmentCenter, {
            draggable: false,
            icon: that._createLabel(
              that._formatDistance(segmentDist),
              "segment"
            ),
          });
          that.measureGroup.addLayer(segmentMarker);
        }
      }

      // 计算面积
      tempPoints.push(e.latlng);
      var center = that.DRAWPOLYGON.getCenter();
      var area = that._calcArea(tempPoints);

      // 在多边形中心显示面积标签
      var areaMarker = new L.Marker(center, {
        draggable: false,
        icon: that._createLabel(that._formatArea(area), "area"),
      });
      that.measureGroup.addLayer(areaMarker);

      // 清理绘制状态
      if (that.DRAWING) {
        if (that.DRAWMOVEPOLYGON != null) {
          that.map.removeLayer(that.DRAWMOVEPOLYGON);
          that.DRAWMOVEPOLYGON = null;
        }
        that.BarDRAWLAYERS.push(that.DRAWPOLYGON);
        that.DRAWPOLYGONPOINTS = [];
        that.DRAWING = false;
        that.ISMEASURE = false;
        // 移除事件监听
        that.map.off("mousedown", onClick);
        that.map.off("mousemove", onMove);
        that.map.off("dblclick", onDoubleClick);
      }
    }

    // 绑定事件
    that.map.on("mousedown", onClick);
    that.map.on("mousemove", onMove);
    that.map.on("dblclick", onDoubleClick);
  }

  /**
   * 清除所有测量图层和状态
   */
  clearLayer() {
    // 清除图层组中的所有图层
    this.measureGroup.clearLayers();

    // 重置状态
    this.DRAWPOLYLINEPOINTS = [];
    this.DRAWPOLYGONPOINTS = [];
    this.DRAWING = false;
    this.MEASURERESULT = 0;
    this.map.getContainer().style.cursor = "";

    // 移除所有事件监听
    this.map.off("mousedown");
    this.map.off("mousemove");
    this.map.off("dblclick");
  }

  /**
   * 格式化距离显示
   * @param {number} meters - 距离（米）
   * @returns {string} 格式化后的距离字符串
   */
  _formatDistance(meters) {
    if (meters >= 1000) {
      return (meters / 1000).toFixed(2) + " km";
    }
    return meters.toFixed(1) + " m";
  }

  /**
   * 格式化面积显示
   * @param {number} sqMeters - 面积（平方米）
   * @returns {string} 格式化后的面积字符串
   */
  _formatArea(sqMeters) {
    if (sqMeters >= 1000000) {
      return (sqMeters / 1000000).toFixed(3) + " km²";
    }
    return sqMeters.toFixed(1) + " m²";
  }

  /**
   * 计算多边形面积（球面面积算法）
   * @param {Array<L.LatLng>} latLngs - 多边形顶点坐标数组
   * @returns {number} 面积（平方米）
   */
  _calcArea(latLngs) {
    var pointsCount = latLngs.length;
    var area = 0.0;
    var d2r = Math.PI / 180; // 角度转弧度
    var p1, p2;

    if (pointsCount > 2) {
      for (var i = 0; i < pointsCount; i++) {
        p1 = latLngs[i];
        p2 = latLngs[(i + 1) % pointsCount];
        // 球面多边形面积计算公式
        area +=
          (p2.lng - p1.lng) *
          d2r *
          (2 + Math.sin(p1.lat * d2r) + Math.sin(p2.lat * d2r));
      }
      // 地球半径 6378137 米
      area = (area * 6378137.0 * 6378137.0) / 2.0;
    }
    return Math.abs(area);
  }
}

export default DrawPlug;
