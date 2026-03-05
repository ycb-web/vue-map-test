(function() { try { var style = document.createElement("style"); style.textContent = "\n.vue-marker {\n  background: transparent !important;\n  border: none !important;\n}\n\n.test-page[data-v-800a91a7] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.map-container[data-v-800a91a7] {\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n.toolbar[data-v-800a91a7] {\n  position: absolute;\n  top: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 1000;\n}\n.auto-refresh-switch[data-v-800a91a7] {\n  position: absolute;\n  top: 20px;\n  left: 20px;\n  z-index: 1000;\n  background: #fff;\n  padding: 8px 12px;\n  border-radius: 4px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n}\n.map-status[data-v-800a91a7] {\n  position: absolute;\n  bottom: 20px;\n  left: 20px;\n  z-index: 1000;\n}\n\n.marker-wrapper[data-v-be23a647] {\n  position: relative;\n}\n.wind-arrow[data-v-be23a647] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  transform-origin: center center;\n}\n.circle-marker[data-v-be23a647] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 2;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);\n  cursor: pointer;\n}\n.marker-value[data-v-be23a647] {\n  line-height: 1;\n}\n.marker-tooltip[data-v-be23a647] {\n  display: none;\n  position: absolute;\n  left: 50%;\n  bottom: 100%;\n  transform: translateX(-50%);\n  margin-bottom: 8px;\n  background: rgba(0, 0, 0, 0.8);\n  color: #fff;\n  padding: 8px 12px;\n  border-radius: 4px;\n  font-size: 12px;\n  white-space: nowrap;\n  z-index: 9999;\n}\n.marker-tooltip[data-v-be23a647]::before {\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  bottom: -6px;\n  transform: translateX(-50%);\n  border: 6px solid transparent;\n  border-top-color: rgba(0, 0, 0, 0.8);\n  border-bottom: none;\n}\n.marker-wrapper:hover .marker-tooltip[data-v-be23a647] {\n  display: block;\n}\n.marker-wrapper:hover .marker-label[data-v-be23a647] {\n  display: none !important;\n}\n.marker-label[data-v-be23a647] {\n  position: absolute;\n  left: 50%;\n  bottom: 100%;\n  transform: translateX(-50%);\n  margin-bottom: 4px;\n  background: rgba(0, 0, 0, 0.75);\n  color: #fff;\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-size: 12px;\n  white-space: nowrap;\n  z-index: 9998;\n}\n.tooltip-row[data-v-be23a647] {\n  line-height: 1.6;\n}\n.tooltip-row .label[data-v-be23a647] {\n  color: #aaa;\n}\n\n.map-status[data-v-cbc741a4] {\n  font-size: 12px;\n  color: #000;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.scale-bar[data-v-cbc741a4] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.scale-line[data-v-cbc741a4] {\n  height: 0;\n  border-bottom: 2px solid #000;\n  border-left: 2px solid #000;\n  border-right: 2px solid #000;\n  padding-bottom: 4px;\n}\n.scale-text[data-v-cbc741a4] {\n  font-size: 12px;\n  color: #000;\n  font-weight: 500;\n}\n\n/* 测量标签样式 */\n.measure-label-wrapper {\n  background: transparent !important;\n  border: none !important;\n  box-shadow: none !important;\n}\n.measure-label {\n  color: #fff;\n  padding: 3px 8px;\n  border-radius: 3px;\n  font-size: 12px;\n  font-weight: 500;\n  white-space: nowrap;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n  transform: translate(-50%, -50%);\n  position: absolute;\n}\n\n/* 工具条容器 */\n.map-toolbar[data-v-ed0e48a4] {\n  display: flex;\n  align-items: center;\n  background: rgba(200, 210, 220, 0.9);\n  border-radius: 4px;\n  padding: 4px 8px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);\n  user-select: none;\n}\n\n/* 工具按钮通用样式 */\n.tool-item[data-v-ed0e48a4] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 6px;\n  cursor: pointer;\n  color: #333;\n  border-radius: 4px;\n  transition: background 0.2s;\n}\n\n/* 工具按钮悬停效果 */\n.tool-item[data-v-ed0e48a4]:hover {\n  background: rgba(255, 255, 255, 0.5);\n}\n\n/* 工具按钮点击效果 */\n.tool-item[data-v-ed0e48a4]:active {\n  background: rgba(0, 0, 0, 0.1);\n}\n\n/* 带文字的工具按钮（如工具箱） */\n.tool-text[data-v-ed0e48a4] {\n  gap: 4px;\n  padding: 6px 10px;\n}\n.tool-text span[data-v-ed0e48a4] {\n  font-size: 14px;\n  font-weight: 500;\n}\n\n/* 分隔线 */\n.divider[data-v-ed0e48a4] {\n  width: 1px;\n  height: 20px;\n  background: rgba(0, 0, 0, 0.3);\n  margin: 0 4px;\n}\n\n/* 底图选择列表容器 */\n.basemap-list[data-v-ed0e48a4] {\n  display: flex;\n  gap: 10px;\n}\n\n/* 底图选项 */\n.basemap-item[data-v-ed0e48a4] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  cursor: pointer;\n  padding: 6px;\n  border-radius: 4px;\n  border: 2px solid transparent;\n  transition: all 0.2s;\n}\n\n/* 底图选项悬停效果 */\n.basemap-item[data-v-ed0e48a4]:hover {\n  background: #f0f0f0;\n}\n\n/* 当前选中的底图高亮边框 */\n.basemap-item.active[data-v-ed0e48a4] {\n  border-color: #1890ff;\n}\n\n/* 底图缩略图 */\n.basemap-item img[data-v-ed0e48a4] {\n  width: 60px;\n  height: 60px;\n  object-fit: cover;\n  border-radius: 4px;\n}\n\n/* 无缩略图时的占位符 */\n.basemap-placeholder[data-v-ed0e48a4] {\n  width: 60px;\n  height: 60px;\n  background: #e0e0e0;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  color: #666;\n}\n\n/* 底图名称 */\n.basemap-item span[data-v-ed0e48a4] {\n  margin-top: 4px;\n  font-size: 12px;\n  color: #333;\n}\n\n/* 工具列表 */\n.tools-list[data-v-ed0e48a4] {\n  display: flex;\n  gap: 10px;\n}\n\n/* 工具选项 */\n.tools-item[data-v-ed0e48a4] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  cursor: pointer;\n  padding: 8px 12px;\n  border-radius: 4px;\n  border: 2px solid transparent;\n  transition: all 0.2s;\n  min-width: 60px;\n}\n.tools-item[data-v-ed0e48a4]:hover {\n  background: #f0f0f0;\n}\n.tools-item.active[data-v-ed0e48a4] {\n  border-color: #ff4d4f;\n  background: #fff1f0;\n}\n.tools-item span[data-v-ed0e48a4] {\n  margin-top: 4px;\n  font-size: 12px;\n  color: #333;\n}\n"; document.head.appendChild(style); } catch(e) { console.error("CSS inject error:", e); } })();

import { defineComponent as Y, ref as d, watch as _, onMounted as U, onUnmounted as z, resolveComponent as V, openBlock as S, createElementBlock as k, createElementVNode as t, createVNode as D, withCtx as y, Fragment as K, renderList as q, normalizeClass as B, toDisplayString as v, createCommentVNode as Z, computed as N, normalizeStyle as x, unref as X, withDirectives as $, vShow as j, createTextVNode as b, nextTick as ee, createApp as te } from "vue";
import f from "leaflet";
import { defineStore as le } from "pinia";
class ae {
  /**
   * 构造函数
   * @param {L.Map} map - Leaflet 地图实例
   * @param {L.LayerGroup} measureGroup - 用于存放测量图层的图层组
   */
  constructor(e, l) {
    this.DRAWING = !1, this.ISMEASURE = !0, this.MEASURERESULT = 0, this.BarDRAWLAYERS = [], this.DRAWPOLYLINE = null, this.DRAWMOVEPOLYLINE = null, this.DRAWPOLYLINEPOINTS = [], this.DRAWPOLYGON = null, this.DRAWMOVEPOLYGON = null, this.DRAWPOLYGONPOINTS = [], this.map = e, this.measureGroup = l;
  }
  /**
   * 创建测量结果标签
   * @param {string} text - 标签文本内容
   * @param {string} type - 标签类型：'segment'(分段距离), 'total'(总距离), 'area'(面积)
   * @returns {L.DivIcon} Leaflet DivIcon 实例
   */
  _createLabel(e, l) {
    let a = "#ff4d4f";
    return l === "total" && (a = "#1890ff"), l === "area" && (a = "#52c41a"), f.divIcon({
      className: "measure-label-wrapper",
      html: '<div class="measure-label" style="background:' + a + '">' + e + "</div>",
      iconSize: [0, 0],
      iconAnchor: [0, 0]
    });
  }
  /**
   * 格式化距离显示
   * @param {number} meters - 距离（米）
   * @returns {string} 格式化后的距离字符串
   */
  _formatDistance(e) {
    return e >= 1e3 ? (e / 1e3).toFixed(2) + " km" : e.toFixed(1) + " m";
  }
  /**
   * 格式化面积显示
   * @param {number} sqMeters - 面积（平方米）
   * @returns {string} 格式化后的面积字符串
   */
  _formatArea(e) {
    return e >= 1e6 ? (e / 1e6).toFixed(3) + " km²" : e.toFixed(1) + " m²";
  }
  /**
   * 计算多边形面积（球面面积算法）
   * @param {Array<L.LatLng>} latLngs - 多边形顶点坐标数组
   * @returns {number} 面积（平方米）
   */
  _calcArea(e) {
    let l = e.length, a = 0;
    const u = Math.PI / 180;
    let m, n;
    if (l > 2) {
      for (let s = 0; s < l; s++)
        m = e[s], n = e[(s + 1) % l], a += (n.lng - m.lng) * u * (2 + Math.sin(m.lat * u) + Math.sin(n.lat * u));
      a = a * 6378137 * 6378137 / 2;
    }
    return Math.abs(a);
  }
  /**
   * 开始测距
   * 用户点击地图添加测量点，双击结束测量
   * 会显示每段距离（红色标签）和总距离（蓝色标签）
   */
  startDrawLine() {
    const e = this;
    this.clearLayer(), e.MEASURERESULT = 0, e.ISMEASURE = !0, e.map.getContainer().style.cursor = "crosshair";
    const l = {
      color: "#ff4d4f",
      weight: 3,
      opacity: 0.8,
      fill: !1,
      clickable: !0
    };
    e.DRAWPOLYLINE = new f.Polyline([], l), e.measureGroup.addLayer(e.DRAWPOLYLINE);
    function a(n) {
      e.DRAWING = !0, e.DRAWPOLYLINEPOINTS.push(n.latlng), e.DRAWPOLYLINEPOINTS.length > 1 && e.ISMEASURE && (e.MEASURERESULT += n.latlng.distanceTo(
        e.DRAWPOLYLINEPOINTS[e.DRAWPOLYLINEPOINTS.length - 2]
      )), e.DRAWPOLYLINE.addLatLng(n.latlng), e.map.on("mousemove", u);
    }
    function u(n) {
      if (e.DRAWING) {
        e.DRAWMOVEPOLYLINE != null && e.measureGroup.removeLayer(e.DRAWMOVEPOLYLINE);
        const s = e.DRAWPOLYLINEPOINTS[e.DRAWPOLYLINEPOINTS.length - 1];
        e.DRAWMOVEPOLYLINE = new f.Polyline(
          [s, n.latlng],
          l
        ), e.measureGroup.addLayer(e.DRAWMOVEPOLYLINE);
      }
    }
    function m(n) {
      e.map.getContainer().style.cursor = "";
      const s = e.MEASURERESULT + n.latlng.distanceTo(
        e.DRAWPOLYLINEPOINTS[e.DRAWPOLYLINEPOINTS.length - 1]
      );
      for (let i = 0; i < e.DRAWPOLYLINEPOINTS.length - 1; i++) {
        const w = e.DRAWPOLYLINEPOINTS[i].distanceTo(
          e.DRAWPOLYLINEPOINTS[i + 1]
        ), g = f.polyline(
          [e.DRAWPOLYLINEPOINTS[i], e.DRAWPOLYLINEPOINTS[i + 1]],
          { color: "rgba(0,0,0,0)" }
        ).addTo(e.measureGroup).getCenter(), c = new f.Marker(g, {
          draggable: !1,
          icon: e._createLabel(e._formatDistance(w), "segment")
        });
        e.measureGroup.addLayer(c);
      }
      const p = new f.Marker(n.latlng, {
        draggable: !1,
        icon: e._createLabel(e._formatDistance(s), "total")
      });
      e.measureGroup.addLayer(p), e.DRAWING && (e.DRAWMOVEPOLYLINE != null && (e.measureGroup.removeLayer(e.DRAWMOVEPOLYLINE), e.DRAWMOVEPOLYLINE = null), e.BarDRAWLAYERS.push(e.DRAWPOLYLINE), e.DRAWPOLYLINEPOINTS = [], e.DRAWING = !1, e.ISMEASURE = !1, e.map.off("mousedown", a), e.map.off("mousemove", u), e.map.off("dblclick", m));
    }
    e.map.on("mousedown", a), e.map.on("dblclick", m);
  }
  /**
   * 开始测面
   * 用户点击地图添加多边形顶点，双击结束测量
   * 会显示每边距离（红色标签）和总面积（绿色标签）
   */
  startDrawPolygon() {
    const e = this;
    this.clearLayer(), e.MEASURERESULT = 0, e.ISMEASURE = !0, e.map.getContainer().style.cursor = "crosshair";
    const l = {
      color: "#ff4d4f",
      weight: 3,
      opacity: 0.8,
      fill: !0,
      fillColor: "#ff4d4f",
      fillOpacity: 0.2,
      clickable: !0
    };
    e.DRAWPOLYGON = new f.Polygon([], l), e.measureGroup.addLayer(e.DRAWPOLYGON);
    function a(n) {
      e.DRAWING = !0, e.DRAWPOLYGONPOINTS.push(n.latlng), e.DRAWPOLYGON.addLatLng(n.latlng);
    }
    function u(n) {
      if (e.DRAWING) {
        e.DRAWMOVEPOLYGON != null && e.measureGroup.removeLayer(e.DRAWMOVEPOLYGON);
        const s = e.DRAWPOLYGONPOINTS[e.DRAWPOLYGONPOINTS.length - 1], p = e.DRAWPOLYGONPOINTS[0];
        e.DRAWMOVEPOLYGON = new f.Polygon(
          [p, s, n.latlng],
          l
        ), e.measureGroup.addLayer(e.DRAWMOVEPOLYGON);
      }
    }
    function m(n) {
      e.map.getContainer().style.cursor = "";
      const s = e.DRAWPOLYGONPOINTS.slice(), p = e.DRAWPOLYGON.getLatLngs()[0];
      if (p && p.length > 0) {
        const g = p.slice();
        g.length > 1 && g.pop();
        const c = g[0];
        g.push(c);
        for (let E = 0; E < g.length - 1; E++) {
          const T = g[E].distanceTo(g[E + 1]), A = f.polyline(
            [g[E], g[E + 1]],
            { color: "rgba(0,0,0,0)" }
          ).addTo(e.measureGroup).getCenter(), L = new f.Marker(A, {
            draggable: !1,
            icon: e._createLabel(
              e._formatDistance(T),
              "segment"
            )
          });
          e.measureGroup.addLayer(L);
        }
      }
      s.push(n.latlng);
      const i = e.DRAWPOLYGON.getCenter(), w = e._calcArea(s), C = new f.Marker(i, {
        draggable: !1,
        icon: e._createLabel(e._formatArea(w), "area")
      });
      e.measureGroup.addLayer(C), e.DRAWING && (e.DRAWMOVEPOLYGON != null && (e.measureGroup.removeLayer(e.DRAWMOVEPOLYGON), e.DRAWMOVEPOLYGON = null), e.BarDRAWLAYERS.push(e.DRAWPOLYGON), e.DRAWPOLYGONPOINTS = [], e.DRAWING = !1, e.ISMEASURE = !1, e.map.off("mousedown", a), e.map.off("mousemove", u), e.map.off("dblclick", m));
    }
    e.map.on("mousedown", a), e.map.on("mousemove", u), e.map.on("dblclick", m);
  }
  /**
   * 清除所有测量图层和状态
   */
  clearLayer() {
    this.measureGroup.clearLayers(), this.DRAWPOLYLINEPOINTS = [], this.DRAWPOLYGONPOINTS = [], this.DRAWING = !1, this.MEASURERESULT = 0, this.map.getContainer().style.cursor = "", this.map.off("mousedown"), this.map.off("mousemove"), this.map.off("dblclick");
  }
}
const oe = { class: "map-toolbar" }, ne = ["title"], se = {
  key: 0,
  viewBox: "0 0 24 24",
  width: "20",
  height: "20"
}, ie = {
  key: 1,
  viewBox: "0 0 24 24",
  width: "20",
  height: "20"
}, re = { class: "basemap-list" }, ue = ["onClick"], ce = ["src", "alt"], me = {
  key: 1,
  class: "basemap-placeholder"
}, de = { class: "tools-list" }, ve = /* @__PURE__ */ Y({
  __name: "index",
  props: {
    map: { default: null },
    initialCenter: { default: () => [24.5, 118] },
    initialZoom: { default: 8 },
    basemaps: { default: () => {
      const r = "93724b915d1898d946ca7dc7b765dda5";
      return [
        {
          name: "电子地图",
          initSelect: !0,
          // 默认选中
          baseUrl: `https://t0.tianditu.gov.cn/vec_w/wmts?tk=${r}&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}`,
          labelUrl: `https://t0.tianditu.gov.cn/cva_w/wmts?tk=${r}&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}`
        },
        {
          name: "地形图",
          baseUrl: `https://t0.tianditu.gov.cn/ter_w/wmts?tk=${r}&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=ter&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}`,
          labelUrl: `https://t0.tianditu.gov.cn/cta_w/wmts?tk=${r}&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cta&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}`
        },
        {
          name: "遥感地图",
          baseUrl: `https://t0.tianditu.gov.cn/img_w/wmts?tk=${r}&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}`,
          labelUrl: `https://t0.tianditu.gov.cn/cia_w/wmts?tk=${r}&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cia&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}`
        }
      ];
    } }
  },
  emits: ["reset", "fullscreen", "zoom-in", "zoom-out", "layers", "tools", "basemap-change"],
  setup(r, { emit: e }) {
    const l = r, a = e, u = d(!1), m = d(0), n = d(null), s = d(null), p = d(!1), i = d(!1), w = d(!1), C = d(null), g = d(null), c = d(null), E = () => {
      u.value = !!document.fullscreenElement || !!document.webkitFullscreenElement;
    }, T = () => {
      if (!l.map || p.value) return;
      l.map.setView(l.initialCenter, l.initialZoom);
      const I = l.basemaps.findIndex((M) => M.initSelect), o = I === -1 ? 0 : I, P = l.basemaps[o];
      P && (n.value = f.tileLayer(P.baseUrl, {
        maxZoom: 18,
        detectRetina: !0
      }), n.value.addTo(l.map), n.value.setZIndex(0), P.labelUrl && (s.value = f.tileLayer(P.labelUrl, {
        transparent: !0,
        maxZoom: 18
      }), s.value.addTo(l.map), s.value.setZIndex(1)), m.value = o, p.value = !0, l.map.doubleClickZoom.disable(), g.value = f.layerGroup().addTo(l.map), c.value = new ae(l.map, g.value));
    }, h = () => {
      a("reset"), l.map && l.map.setView(l.initialCenter, l.initialZoom);
    }, A = () => {
      a("fullscreen");
      const I = document.documentElement;
      document.fullscreenElement ? document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen() : I.requestFullscreen ? I.requestFullscreen() : I.webkitRequestFullscreen && I.webkitRequestFullscreen();
    }, L = () => {
      a("zoom-in"), l.map && l.map.zoomIn();
    }, R = () => {
      a("zoom-out"), l.map && l.map.zoomOut();
    }, O = (I) => {
      if (!l.map || I === m.value) return;
      const o = l.basemaps[I];
      o && (n.value && l.map.removeLayer(n.value), s.value && l.map.removeLayer(s.value), n.value = f.tileLayer(o.baseUrl, {
        maxZoom: 18,
        detectRetina: !0
      }), n.value.addTo(l.map), n.value.setZIndex(0), o.labelUrl && (s.value = f.tileLayer(o.labelUrl, {
        transparent: !0,
        maxZoom: 18
      }), s.value.addTo(l.map), s.value.setZIndex(1)), m.value = I, i.value = !1, a("basemap-change", { index: I, basemap: o }));
    }, Q = () => {
      w.value = !1, C.value = "distance", c.value && c.value.startDrawLine();
    }, F = () => {
      w.value = !1, C.value = "area", c.value && c.value.startDrawPolygon();
    }, H = () => {
      C.value = null, c.value && c.value.clearLayer();
    };
    return _(() => l.map, (I) => {
      I && !p.value && T();
    }, { immediate: !0 }), U(() => {
      document.addEventListener("fullscreenchange", E), document.addEventListener(
        "webkitfullscreenchange",
        E
      );
    }), z(() => {
      document.removeEventListener("fullscreenchange", E), document.removeEventListener(
        "webkitfullscreenchange",
        E
      );
    }), (I, o) => {
      const P = V("a-popover");
      return S(), k("div", oe, [
        t("div", {
          class: "tool-item",
          title: "复位",
          onClick: h
        }, [...o[2] || (o[2] = [
          t("svg", {
            viewBox: "0 0 24 24",
            width: "20",
            height: "20"
          }, [
            t("circle", {
              cx: "12",
              cy: "12",
              r: "3",
              fill: "currentColor"
            }),
            t("path", {
              d: "M12 2v3M12 19v3M2 12h3M19 12h3",
              stroke: "currentColor",
              "stroke-width": "2"
            }),
            t("circle", {
              cx: "12",
              cy: "12",
              r: "8",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2"
            })
          ], -1)
        ])]),
        o[12] || (o[12] = t("div", { class: "divider" }, null, -1)),
        t("div", {
          class: "tool-item",
          title: u.value ? "退出全屏" : "全屏",
          onClick: A
        }, [
          u.value ? (S(), k("svg", ie, [...o[4] || (o[4] = [
            t("path", {
              d: "M9 3v2H5v4H3V5a2 2 0 012-2h4zM15 3h4a2 2 0 012 2v4h-2V5h-4V3zM3 15h2v4h4v2H5a2 2 0 01-2-2v-4zM19 15h2v4a2 2 0 01-2 2h-4v-2h4v-4z",
              fill: "currentColor"
            }, null, -1),
            t("path", {
              d: "M9 9H3V7h4V3h2v6zM21 9h-6V3h2v4h4v2zM9 21v-6H3v-2h8v8H9zM15 21v-8h8v2h-6v6h-2z",
              fill: "currentColor"
            }, null, -1)
          ])])) : (S(), k("svg", se, [...o[3] || (o[3] = [
            t("path", {
              d: "M3 3h6v2H5v4H3V3zM15 3h6v6h-2V5h-4V3zM3 15h2v4h4v2H3v-6zM19 19v-4h2v6h-6v-2h4z",
              fill: "currentColor"
            }, null, -1)
          ])]))
        ], 8, ne),
        o[13] || (o[13] = t("div", { class: "divider" }, null, -1)),
        t("div", {
          class: "tool-item",
          title: "放大",
          onClick: L
        }, [...o[5] || (o[5] = [
          t("svg", {
            viewBox: "0 0 24 24",
            width: "20",
            height: "20"
          }, [
            t("circle", {
              cx: "10",
              cy: "10",
              r: "7",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2"
            }),
            t("path", {
              d: "M15 15l5 5M7 10h6M10 7v6",
              stroke: "currentColor",
              "stroke-width": "2"
            })
          ], -1)
        ])]),
        o[14] || (o[14] = t("div", { class: "divider" }, null, -1)),
        t("div", {
          class: "tool-item",
          title: "缩小",
          onClick: R
        }, [...o[6] || (o[6] = [
          t("svg", {
            viewBox: "0 0 24 24",
            width: "20",
            height: "20"
          }, [
            t("circle", {
              cx: "10",
              cy: "10",
              r: "7",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2"
            }),
            t("path", {
              d: "M15 15l5 5M7 10h6",
              stroke: "currentColor",
              "stroke-width": "2"
            })
          ], -1)
        ])]),
        o[15] || (o[15] = t("div", { class: "divider" }, null, -1)),
        D(P, {
          trigger: "click",
          placement: "bottom",
          visible: i.value,
          "onUpdate:visible": o[0] || (o[0] = (M) => i.value = M)
        }, {
          content: y(() => [
            t("div", re, [
              (S(!0), k(K, null, q(r.basemaps, (M, W) => (S(), k("div", {
                key: W,
                class: B(["basemap-item", { active: m.value === W }]),
                onClick: (Ye) => O(W)
              }, [
                M.thumbnail ? (S(), k("img", {
                  key: 0,
                  src: M.thumbnail,
                  alt: M.name
                }, null, 8, ce)) : (S(), k("div", me, v(M.name), 1)),
                t("span", null, v(M.name), 1)
              ], 10, ue))), 128))
            ])
          ]),
          default: y(() => [
            o[7] || (o[7] = t("div", {
              class: "tool-item",
              title: "底图切换"
            }, [
              t("svg", {
                viewBox: "0 0 24 24",
                width: "20",
                height: "20"
              }, [
                t("path", {
                  d: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2"
                })
              ])
            ], -1))
          ]),
          _: 1
        }, 8, ["visible"]),
        D(P, {
          trigger: "click",
          placement: "bottom",
          visible: w.value,
          "onUpdate:visible": o[1] || (o[1] = (M) => w.value = M)
        }, {
          content: y(() => [
            t("div", de, [
              t("div", {
                class: B(["tools-item", { active: C.value === "distance" }]),
                onClick: Q
              }, [...o[8] || (o[8] = [
                t("svg", {
                  viewBox: "0 0 24 24",
                  width: "20",
                  height: "20"
                }, [
                  t("path", {
                    d: "M3 21L21 3M3 21l4-1-3-3 1-4M21 3l-4 1 3 3-1 4",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    fill: "none"
                  })
                ], -1),
                t("span", null, "测距", -1)
              ])], 2),
              t("div", {
                class: B(["tools-item", { active: C.value === "area" }]),
                onClick: F
              }, [...o[9] || (o[9] = [
                t("svg", {
                  viewBox: "0 0 24 24",
                  width: "20",
                  height: "20"
                }, [
                  t("polygon", {
                    points: "4,4 20,4 20,20 4,20",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    fill: "none"
                  }),
                  t("circle", {
                    cx: "4",
                    cy: "4",
                    r: "2",
                    fill: "currentColor"
                  }),
                  t("circle", {
                    cx: "20",
                    cy: "4",
                    r: "2",
                    fill: "currentColor"
                  }),
                  t("circle", {
                    cx: "20",
                    cy: "20",
                    r: "2",
                    fill: "currentColor"
                  }),
                  t("circle", {
                    cx: "4",
                    cy: "20",
                    r: "2",
                    fill: "currentColor"
                  })
                ], -1),
                t("span", null, "测面", -1)
              ])], 2),
              C.value ? (S(), k("div", {
                key: 0,
                class: "tools-item",
                onClick: H
              }, [...o[10] || (o[10] = [
                t("svg", {
                  viewBox: "0 0 24 24",
                  width: "20",
                  height: "20"
                }, [
                  t("path", {
                    d: "M18 6L6 18M6 6l12 12",
                    stroke: "currentColor",
                    "stroke-width": "2"
                  })
                ], -1),
                t("span", null, "清除", -1)
              ])])) : Z("", !0)
            ])
          ]),
          default: y(() => [
            o[11] || (o[11] = t("div", {
              class: "tool-item tool-text",
              title: "工具箱"
            }, [
              t("svg", {
                viewBox: "0 0 24 24",
                width: "18",
                height: "18"
              }, [
                t("rect", {
                  x: "2",
                  y: "7",
                  width: "20",
                  height: "14",
                  rx: "2",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2"
                }),
                t("path", {
                  d: "M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2"
                })
              ]),
              t("span", null, "工具")
            ], -1))
          ]),
          _: 1
        }, 8, ["visible"])
      ]);
    };
  }
}), G = (r, e) => {
  const l = r.__vccOpts || r;
  for (const [a, u] of e)
    l[a] = u;
  return l;
}, pe = /* @__PURE__ */ G(ve, [["__scopeId", "data-v-ed0e48a4"]]), ge = { class: "map-status" }, he = { class: "position-info" }, fe = { class: "scale-bar" }, Ee = { class: "scale-text" }, Ae = /* @__PURE__ */ Y({
  __name: "index",
  props: {
    map: {}
  },
  setup(r) {
    const e = r, l = d(0), a = d(0), u = d(0), m = d("0 km"), n = d(50), s = N(() => {
      const c = l.value >= 0 ? "N" : "S";
      return Math.abs(l.value).toFixed(4) + "°" + c;
    }), p = N(() => {
      const c = a.value >= 0 ? "E" : "W";
      return Math.abs(a.value).toFixed(4) + "°" + c;
    }), i = () => {
      e.map && (e.map.on("mousemove", w), e.map.on("zoomend", C), u.value = e.map.getZoom(), g());
    }, w = (c) => {
      l.value = c.latlng.lat, a.value = c.latlng.lng;
    }, C = () => {
      e.map && (u.value = e.map.getZoom(), g());
    }, g = () => {
      if (!e.map) return;
      const E = e.map.getCenter().lat, T = 40075016686e-3 * Math.cos(E * Math.PI / 180) / Math.pow(2, u.value + 8), A = T * 100, L = [
        1,
        2,
        5,
        10,
        20,
        50,
        100,
        200,
        500,
        1e3,
        2e3,
        5e3,
        1e4,
        2e4,
        5e4,
        1e5,
        2e5,
        5e5,
        1e6,
        2e6,
        5e6
      ];
      let R = L[0];
      for (let O = 0; O < L.length; O++)
        L[O] <= A && (R = L[O]);
      n.value = Math.round(R / T), R >= 1e3 ? m.value = R / 1e3 + " km" : m.value = R + " m";
    };
    return _(() => e.map, (c) => {
      c && i();
    }, { immediate: !0 }), U(() => {
      e.map && i();
    }), z(() => {
      e.map && (e.map.off("mousemove", w), e.map.off("zoomend", C));
    }), (c, E) => (S(), k("div", ge, [
      t("span", he, "位置: " + v(s.value) + ", " + v(p.value) + ", " + v(u.value), 1),
      t("span", fe, [
        t("span", {
          class: "scale-line",
          style: x({ width: n.value + "px" })
        }, null, 4),
        t("span", Ee, v(m.value), 1)
      ])
    ]));
  }
}), Le = /* @__PURE__ */ G(Ae, [["__scopeId", "data-v-cbc741a4"]]), Ie = "data:image/png;base64,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", J = le("testPage", {
  state: () => ({
    points: {},
    showLabel: !1
  }),
  getters: {
    getPointById: (r) => (e) => r.points[e] || {},
    showLabel: (r) => r.showLabel
  },
  actions: {
    setPoints(r) {
      const e = {};
      r.forEach((l) => {
        e[l.id] = l;
      }), this.points = e;
    },
    updatePoint(r) {
      const { id: e, data: l } = r;
      this.points[e] && (this.points[e] = { ...this.points[e], ...l });
    },
    setShowLabel(r) {
      this.showLabel = r;
    }
  }
}), Ce = ["src"], we = { class: "marker-value" }, Re = { class: "marker-tooltip" }, Se = { class: "tooltip-row" }, ke = { class: "tooltip-row" }, Oe = { class: "tooltip-row" }, Me = { class: "tooltip-row" }, Te = { class: "tooltip-row" }, Pe = { class: "tooltip-row" }, Ne = /* @__PURE__ */ Y({
  __name: "marker",
  props: {
    id: { type: [Number, String], required: !0 },
    size: { type: Number, default: 30 },
    arrowLength: { type: Number, default: 50 },
    bgColor: { type: String, default: "#1890ff" },
    textColor: { type: String, default: "#fff" }
  },
  setup(r) {
    const e = r, l = J(), a = N(() => l.getPointById(e.id)), u = N(() => l.showLabel), m = N(() => ({
      width: e.arrowLength + "px",
      height: e.arrowLength + "px"
    })), n = N(() => ({
      width: e.size + "px",
      height: e.size + "px",
      backgroundColor: e.bgColor,
      color: e.textColor,
      fontSize: Math.max(10, e.size * 0.4) + "px"
    })), s = N(() => {
      const p = a.value.direction || 0;
      return {
        width: e.arrowLength + "px",
        height: e.arrowLength + "px",
        transform: "rotate(" + p + "deg)"
      };
    });
    return (p, i) => (S(), k("div", {
      class: "marker-wrapper",
      style: x(m.value)
    }, [
      t("img", {
        class: "wind-arrow",
        style: x(s.value),
        src: X(Ie),
        alt: ""
      }, null, 12, Ce),
      t("div", {
        class: "circle-marker",
        style: x(n.value)
      }, [
        t("span", we, v(a.value.value), 1)
      ], 4),
      $(t("div", { class: "marker-label" }, v(a.value.name), 513), [
        [j, u.value]
      ]),
      t("div", Re, [
        t("div", Se, [
          i[0] || (i[0] = t("span", { class: "label" }, "站点：", -1)),
          b(v(a.value.name), 1)
        ]),
        t("div", ke, [
          i[1] || (i[1] = t("span", { class: "label" }, "时间：", -1)),
          b(v(a.value.time), 1)
        ]),
        t("div", Oe, [
          i[2] || (i[2] = t("span", { class: "label" }, "站点等级：", -1)),
          b(v(a.value.level), 1)
        ]),
        t("div", Me, [
          i[3] || (i[3] = t("span", { class: "label" }, "风力等级：", -1)),
          b(v(a.value.value) + "级 ", 1)
        ]),
        t("div", Te, [
          i[4] || (i[4] = t("span", { class: "label" }, "风向：", -1)),
          b(v(a.value.direction) + "° ", 1)
        ]),
        t("div", Pe, [
          i[5] || (i[5] = t("span", { class: "label" }, "坐标：", -1)),
          b(v(a.value.lat) + ", " + v(a.value.lng), 1)
        ])
      ])
    ], 4));
  }
}), be = /* @__PURE__ */ G(Ne, [["__scopeId", "data-v-be23a647"]]), De = { class: "test-page" }, ye = { class: "auto-refresh-switch" }, Qe = { key: 0 }, xe = /* @__PURE__ */ Y({
  __name: "index",
  setup(r) {
    const e = d(null), l = J(), a = d([
      {
        id: 1,
        lat: 26.08,
        lng: 119.3,
        value: 1,
        name: "福州站",
        level: "国家站",
        time: "2026-01-15 08:00",
        direction: 45
      },
      {
        id: 2,
        lat: 24.48,
        lng: 118.08,
        value: 2,
        name: "厦门站",
        level: "国家站",
        time: "2026-01-15 08:00",
        direction: 90
      },
      {
        id: 3,
        lat: 24.87,
        lng: 118.67,
        value: 3,
        name: "泉州站",
        level: "国家站",
        time: "2026-01-15 08:00",
        direction: 135
      },
      {
        id: 4,
        lat: 25.43,
        lng: 119,
        value: 4,
        name: "莆田站",
        level: "国家站",
        time: "2026-01-15 08:00",
        direction: 180
      },
      {
        id: 5,
        lat: 24.52,
        lng: 117.65,
        value: 5,
        name: "漳州站",
        level: "国家站",
        time: "2026-01-15 08:00",
        direction: 225
      },
      {
        id: 6,
        lat: 26.65,
        lng: 118.18,
        value: 6,
        name: "南平站",
        level: "国家站",
        time: "2026-01-15 08:00",
        direction: 270
      },
      {
        id: 7,
        lat: 25.05,
        lng: 117.02,
        value: 7,
        name: "龙岩站",
        level: "国家站",
        time: "2026-01-15 08:00",
        direction: 315
      },
      {
        id: 8,
        lat: 26.64,
        lng: 117.65,
        value: 8,
        name: "三明站",
        level: "国家站",
        time: "2026-01-15 08:00",
        direction: 0
      },
      {
        id: 9,
        lat: 27.33,
        lng: 120.13,
        value: 9,
        name: "宁德站",
        level: "国家站",
        time: "2026-01-15 08:00",
        direction: 60
      },
      {
        id: 10,
        lat: 25.77,
        lng: 119.53,
        value: 10,
        name: "平潭站",
        level: "区域站",
        time: "2026-01-15 08:00",
        direction: 120
      },
      {
        id: 11,
        lat: 24.44,
        lng: 118.34,
        value: 11,
        name: "同安站",
        level: "区域站",
        time: "2026-01-15 08:00",
        direction: 150
      },
      {
        id: 12,
        lat: 24.95,
        lng: 118.38,
        value: 12,
        name: "晋江站",
        level: "区域站",
        time: "2026-01-15 08:00",
        direction: 200
      },
      {
        id: 13,
        lat: 25.12,
        lng: 118.95,
        value: 13,
        name: "惠安站",
        level: "区域站",
        time: "2026-01-15 08:00",
        direction: 250
      },
      {
        id: 14,
        lat: 24.36,
        lng: 117.32,
        value: 14,
        name: "南靖站",
        level: "区域站",
        time: "2026-01-15 08:00",
        direction: 300
      },
      {
        id: 15,
        lat: 26.48,
        lng: 119.65,
        value: 15,
        name: "连江站",
        level: "区域站",
        time: "2026-01-15 08:00",
        direction: 30
      },
      {
        id: 16,
        lat: 25.3,
        lng: 119.1,
        value: 16,
        name: "仙游站",
        level: "区域站",
        time: "2026-01-15 08:00",
        direction: 75
      },
      {
        id: 17,
        lat: 27.1,
        lng: 119.52,
        value: 17,
        name: "福安站",
        level: "区域站",
        time: "2026-01-15 08:00",
        direction: 110
      },
      {
        id: 18,
        lat: 26.9,
        lng: 120.27,
        value: 18,
        name: "霞浦站",
        level: "区域站",
        time: "2026-01-15 08:00",
        direction: 165
      },
      {
        id: 19,
        lat: 24.73,
        lng: 118.58,
        value: 19,
        name: "石狮站",
        level: "区域站",
        time: "2026-01-15 08:00",
        direction: 210
      },
      {
        id: 20,
        lat: 24.62,
        lng: 117.85,
        value: 20,
        name: "长泰站",
        level: "区域站",
        time: "2026-01-15 08:00",
        direction: 285
      }
    ]), u = d([]), m = d([]), n = d(!1), s = d(null), p = d(!1), i = d(null), w = () => {
      e.value = f.map("test-map", {
        maxZoom: 18,
        zoomControl: !1,
        zoomAnimation: !0,
        attributionControl: !1
      }), e.value.on("zoomend", C), ee(() => {
        setTimeout(() => {
          g();
        }, 100);
      });
    }, C = () => {
      const A = e.value.getZoom() >= 10;
      l.setShowLabel(A);
    }, g = () => {
      l.setPoints(a.value), a.value.forEach((h) => {
        const L = f.marker([h.lat, h.lng], {
          icon: f.divIcon({
            className: "vue-marker",
            html: "",
            iconSize: [50, 50],
            iconAnchor: [25, 25]
          })
        });
        L.on("click", () => {
          c(h);
        }), L.addTo(e.value);
        const R = L.getElement();
        if (R) {
          const O = document.createElement("div"), Q = te(be, {
            id: h.id,
            size: 24,
            arrowLength: 50,
            bgColor: "#1890ff"
          });
          Q.mount(O), R.appendChild(O), m.value.push(Q);
        }
        u.value.push(L);
      });
    }, c = (h) => {
      s.value = h, n.value = !0;
    }, E = (h) => {
      p.value = h, h ? i.value = setInterval(() => {
        T();
      }, 5e3) : i.value && (clearInterval(i.value), i.value = null);
    }, T = () => {
      a.value.forEach((h) => {
        l.updatePoint({
          id: h.id,
          data: {
            direction: Math.floor(Math.random() * 360),
            value: Math.floor(Math.random() * 12) + 1
          }
        });
      });
    };
    return U(() => {
      w();
    }), z(() => {
      i.value && (clearInterval(i.value), i.value = null), m.value.forEach((h) => {
        h.unmount();
      }), e.value && (e.value.off("zoomend"), e.value.remove(), e.value = null);
    }), (h, A) => {
      const L = V("a-switch"), R = V("a-modal");
      return S(), k("div", De, [
        A[2] || (A[2] = t("div", {
          id: "test-map",
          class: "map-container"
        }, null, -1)),
        D(pe, {
          class: "toolbar",
          map: e.value
        }, null, 8, ["map"]),
        t("div", ye, [
          A[1] || (A[1] = t("span", null, "自动刷新", -1)),
          D(L, {
            checked: p.value,
            onChange: E
          }, null, 8, ["checked"])
        ]),
        D(Le, {
          class: "map-status",
          map: e.value
        }, null, 8, ["map"]),
        D(R, {
          open: n.value,
          "onUpdate:open": A[0] || (A[0] = (O) => n.value = O),
          title: s.value ? s.value.name : "",
          footer: null,
          width: "500px"
        }, {
          default: y(() => [
            s.value ? (S(), k("div", Qe, [
              t("p", null, "站点名称：" + v(s.value.name), 1),
              t("p", null, "站点等级：" + v(s.value.level), 1),
              t("p", null, "观测时间：" + v(s.value.time), 1),
              t("p", null, "数值：" + v(s.value.value), 1),
              t("p", null, "坐标：" + v(s.value.lat) + ", " + v(s.value.lng), 1)
            ])) : Z("", !0)
          ]),
          _: 1
        }, 8, ["open", "title"])
      ]);
    };
  }
}), Ve = /* @__PURE__ */ G(xe, [["__scopeId", "data-v-800a91a7"]]);
export {
  Ve as default
};
