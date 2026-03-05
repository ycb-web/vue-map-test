(function() { try { var style = document.createElement("style"); style.textContent = "\n.contour-label {\n  background: transparent !important;\n  border: none !important;\n}\n\n.contour-page[data-v-e8eb5f06] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.map-container[data-v-e8eb5f06] {\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n.controls[data-v-e8eb5f06] {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  background: white;\n  padding: 15px;\n  border-radius: 8px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);\n  z-index: 1000;\n  min-width: 220px;\n}\n.controls h3[data-v-e8eb5f06] {\n  margin: 0 0 15px 0;\n  font-size: 16px;\n  border-bottom: 1px solid #eee;\n  padding-bottom: 10px;\n}\n.control-item[data-v-e8eb5f06] {\n  margin-bottom: 12px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.control-item label[data-v-e8eb5f06] {\n  cursor: pointer;\n  font-size: 14px;\n  min-width: 90px;\n}\n.control-item input[type=\"range\"][data-v-e8eb5f06] {\n  flex: 1;\n}\n.legend[data-v-e8eb5f06] {\n  margin-top: 15px;\n  padding-top: 10px;\n  border-top: 1px solid #eee;\n}\n.legend-title[data-v-e8eb5f06] {\n  font-size: 12px;\n  color: #666;\n  margin-bottom: 8px;\n}\n.legend-gradient[data-v-e8eb5f06] {\n  height: 12px;\n  background: linear-gradient(to right,\n    rgb(180,180,180),\n    rgb(255,255,255),\n    rgb(0,255,174),\n    rgb(12,255,0),\n    rgb(128,255,0),\n    rgb(199,255,0),\n    rgb(255,144,0),\n    rgb(255,0,0)\n  );\n  border-radius: 2px;\n}\n.legend-labels[data-v-e8eb5f06] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 11px;\n  color: #666;\n  margin-top: 4px;\n}\n.loading[data-v-e8eb5f06] {\n  margin-top: 10px;\n  color: #1890ff;\n  font-size: 13px;\n}\n"; document.head.appendChild(style); } catch(e) { console.error("CSS inject error:", e); } })();

import { defineComponent as te, ref as T, onMounted as ae, onUnmounted as oe, openBlock as $, createElementBlock as X, createElementVNode as h, withDirectives as E, vModelCheckbox as H, createTextVNode as Y, vModelText as Q, toDisplayString as q, createCommentVNode as re } from "vue";
import K from "leaflet";
let f, j;
const C = {
  scalarLayer: null,
  velocityLayer: null,
  arrowLayer: null,
  barbLayer: null,
  vectorAnimateSwitch: !0,
  init(t) {
  },
  addLayer(t) {
    t && t.viewer && this.switchMap({
      type: 2,
      viewer: t.viewer
    }), t && t.vectorLayer == !0 && this.addVectorLayer(t.type, t.data), this.addScalarLayer(t.type, t.data);
  },
  switchMap(t) {
    t && t.type == 2 ? (t.viewer.scene.canvas.style.display = "none", j = t.viewer, this.destory2DMap(), this.init2DMap()) : (this.destory2DMap(), t.viewer ? t.viewer.scene.canvas.style.display = "block" : j && (j.scene.canvas.style.display = "block"));
  },
  destory2DMap() {
    f && (f.remove(), f = null);
  },
  // 加载强度图
  addScalarLayer(t, e) {
    let a = {};
    switch (t) {
      case "pressure":
        a = { ...a, minValue: 99e3, maxValue: 105e3 };
        break;
      case "salt":
        a = { ...a, minValue: 20, maxValue: 35 };
        break;
      case "wind":
        a = { ...a, minValue: 0.01, maxValue: 30 };
        break;
      case "wave":
        a = {
          ...a,
          minValue: 0.01,
          maxValue: 9,
          colorScale: [
            /*[0.5, [56, 171, 216]],
                    [1, [47, 130, 214]],
                    [1.5, [47, 102, 204]],
                    [2, [108, 47, 214]],
                    [6, [146,45,75]],
                    [9, [192,99,88]], */
            /*[0.5, [56, 171, 216]],
                    [1, [47, 130, 214]],
                    [1.5, [47, 102, 204]],
                    [2, [108, 47, 214]],
                    [6, [146,45,75]],
                    [9, [192,99,88]],*/
            /*                     [0.5, [50, 158, 186]],
                    [1, [48, 128, 164]],
                    [1.5, [56, 104, 192]],
                    [2, [57, 61, 143]],
                    [4, [134, 48, 49]],
                    [6,[52, 101, 166]],
                    [9, [192, 162, 157]],  */
            [0.5, [50, 158, 186]],
            [0.6, [48, 128, 164]],
            [0.8, [48, 99, 142]],
            [0.9, [52, 101, 166]],
            [1, [56, 104, 192]],
            [1.5, [56, 83, 169]],
            [2, [57, 61, 143]],
            [4, [134, 48, 49]],
            [5, [194, 76, 91]],
            [7, [192, 162, 157]]
          ]
        };
        break;
      case "current":
        a = { ...a, minValue: 1e-3, maxValue: 2 };
        break;
      case "seaTemp":
        a = { ...a, minValue: 270, maxValue: 300 };
        break;
      default:
        a = { ...a, minValue: -30, maxValue: 40 };
        break;
    }
    this.showScalarTiled(e, a);
  },
  // 加载风场 洋流图层 海浪图层 矢量
  addVectorLayer(t, e) {
    let a = {
      colorScale: [
        "rgb(222,255,253)",
        "rgb(234,234,234)",
        "rgb(255,255,255)",
        "rgb(156,156,156)",
        "rgb(255,106,43)"
      ],
      opacity: this.vectorAnimateSwitch ? 0.7 : 0
    };
    t == "wind" ? a = {
      ...a,
      maxVelocity: 35,
      lineWidth: 1,
      particleMultiplier: 1 / 500,
      frameRate: 20
    } : t == "wave" ? a = {
      ...a,
      maxVelocity: 10,
      lineWidth: 6,
      velocityScale: 3e-3,
      particleMultiplier: 1 / 500,
      frameRate: 30
    } : a = {
      ...a,
      maxVelocity: 5,
      lineWidth: 1,
      velocityScale: 0.1,
      particleMultiplier: 1 / 500,
      frameRate: 20
    }, this.velocityLayer = new L.velocityLayer({
      displayValues: !1,
      displayOptions: {
        velocityType: "",
        displayPosition: "",
        displayEmptyString: ""
      },
      ...a
    }), this.velocityLayer.setData(e), this.velocityLayer.onAdd(f);
  },
  // 添加箭头图层
  addArrowLayer(t, e) {
    this.arrowLayer && this.removeArrowLayer(), this.arrowLayer = L.vectorArrowLayer({
      color: "white",
      arrowSize: 20,
      gridSize: 40
    }), this.arrowLayer.addTo(f), this.arrowLayer.setData(e);
  },
  removeArrowLayer() {
    this.arrowLayer && (f.removeLayer(this.arrowLayer), this.arrowLayer = null);
  },
  // 添加风杆图层
  addBarbLayer(t, e) {
    this.barbLayer && this.removeBarbLayer(), this.barbLayer = L.vectorBarbLayer({
      color: "#333333",
      // Dark color for visibility
      barbSize: 30,
      gridSize: 60
    }), this.barbLayer.addTo(f), this.barbLayer.setData(e);
  },
  removeBarbLayer() {
    this.barbLayer && (f.removeLayer(this.barbLayer), this.barbLayer = null);
  },
  // 添加多边形图层
  addPolygonLayer() {
    this.polygonLayer && f.removeLayer(this.polygonLayer), setTimeout(() => {
      const t = {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            id: 6057,
            properties: {
              _draw_type: "rect",
              _draw_prop_from: "119.26974298,23.05999394",
              _draw_prop_to: "117.4314538787,24.8064517431"
            },
            geometry: {
              type: "Polygon",
              coordinates: [
                [
                  [119.26974298, 23.05999394],
                  [117.43145387869998, 23.05999394],
                  [117.43145387869998, 24.806451743099995],
                  [119.26974298, 24.806451743099995],
                  [119.26974298, 23.05999394]
                ]
              ]
            },
            bbox: [
              117.43145387869998,
              23.05999394,
              119.26974298,
              24.806451743099995
            ]
          }
        ]
      };
      this.polygonLayer = L.geoJSON(t, {
        style: function(e) {
          return {
            color: "#F52530",
            weight: 2,
            fillColor: "#F52530",
            fillOpacity: 0.4
          };
        }
      }).addTo(f);
    }, 100);
  },
  removeScalarLayer() {
    this.scalarLayer && (this.scalarLayer.onRemove(), this.scalarLayer = null);
  },
  init2DMap() {
    f = L.map("map", {
      //center: [39.912565, 116.408509],
      //crs: L.CRS.EPSG4326,
      zoom: 5,
      maxZoom: 16,
      zoomControl: !0,
      zoomAnimation: !0
    }).setView([24.5, 118], 8.4), L.tileLayer(
      "https://t0.tianditu.gov.cn/img_w/wmts?tk=93724b915d1898d946ca7dc7b765dda5&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}",
      //'http://172.26.55.130:10100/tiles/vct/{z}/{x}/{y}.png',
      // `${window.location.pathname}tdtserver/tiles/img/{z}/{x}/{y}.png`,
      //`${window.location.pathname}tdtserver/img_fj/wmts`,
      {
        maxZoom: 16,
        zoom: 5,
        detectRetina: !0
        // subdomains: [0, 1, 2, 3, 4, 5, 6, 7]
      }
    ).addTo(f), L.tileLayer(
      //`${window.location.pathname}tdtserver/cia_fj/wmts`,
      "https://t0.tianditu.gov.cn/cia_w/wmts?tk=93724b915d1898d946ca7dc7b765dda5&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cia&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}",
      // `${window.location.pathname}tdtserver/tiles/ann/{z}/{x}/{y}.png`,
      //'http://172.26.55.130:10100/tiles/ann/{z}/{x}/{y}.png',
      {
        //subdomains: [0, 1, 2, 3, 4, 5, 6, 7],
        transparent: !0,
        zIndex: 3
      }
    ).addTo(f);
  },
  showScalarTiled(t, e = {}) {
    if (this.clearScalarLayer(), !t || t.length === 0) {
      console.error("数据为空或无效:", t);
      return;
    }
    try {
      this.tileScalarLayer = L.scalarTileLayer(e), this.tileScalarLayer.addTo(f), this.tileScalarLayer.setData(t);
    } catch (a) {
      console.error("创建或添加图层时出错:", a);
    }
  },
  removeVectorLayer() {
    this.velocityLayer && (this.velocityLayer.onRemove(f), this.velocityLayer = null);
  },
  clearScalarLayer() {
    this.tileScalarLayer && (f.removeLayer(this.tileScalarLayer), this.tileScalarLayer = null);
  },
  // 添加 GeoServer WMS 图层
  addWmsLayer(t, e = {}) {
    const o = { ...{
      url: "http://localhost:8080/geoserver/wms",
      layers: "ne:my_points",
      styles: "population",
      format: "image/png",
      transparent: !0,
      version: "1.1.1",
      opacity: 0.8
    }, ...e }, { url: i, opacity: s, ...u } = o, v = t || f;
    return v ? (this.wmsLayer && this.removeWmsLayer(v), this.wmsLayer = L.tileLayer.wms(i, {
      layers: u.layers,
      styles: u.styles,
      format: u.format,
      transparent: u.transparent,
      version: u.version,
      attribution: "GeoServer",
      opacity: s
    }), this.wmsLayer.addTo(v), this.wmsLayer) : (console.error("地图实例不存在"), null);
  },
  // 移除 WMS 图层
  removeWmsLayer(t) {
    const e = t || f;
    this.wmsLayer && e && (e.removeLayer(this.wmsLayer), this.wmsLayer = null);
  },
  // 设置 WMS 图层透明度
  setWmsOpacity(t) {
    this.wmsLayer && this.wmsLayer.setOpacity(t);
  },
  // 更新 WMS 图层参数（如切换样式）
  updateWmsParams(t, e) {
    this.wmsLayer && this.wmsLayer.setParams(e);
  },
  // 获取地图实例
  getMap() {
    return f;
  },
  // ==================== 颜色场图层 (Scalar Field) ====================
  scalarFieldLayer: null,
  scalarFieldOptions: {},
  /**
   * 添加颜色场图层（基于 PNG 图片的标量场可视化）
   * @param {Object} map - Leaflet 地图实例
   * @param {Object} config - 数据配置
   * @param {string} config.imageUrl - PNG 图片 URL
   * @param {Object} config.header - 数据头信息（包含网格参数）
   * @param {Object} options - 显示选项
   */
  addScalarFieldLayer(t, e, a = {}) {
    const o = t || f;
    if (!o)
      return console.error("地图实例不存在"), null;
    const i = e.header;
    this.scalarFieldOptions = {
      opacity: 0.7,
      // 颜色映射：气压值 -> RGB 颜色
      colorScale: a.colorScale || [
        [960, [180, 180, 180]],
        // 灰色 - 极低压
        [980, [255, 255, 255]],
        // 白色
        [990, [0, 255, 174]],
        // 青绿色
        [1005, [12, 255, 0]],
        // 绿色
        [1015, [128, 255, 0]],
        // 黄绿色
        [1025, [199, 255, 0]],
        // 黄色
        [1035, [255, 144, 0]],
        // 橙色
        [1040, [255, 0, 0]]
        // 红色 - 高压
      ],
      ...a
    }, this.removeScalarFieldLayer(o);
    const s = this, u = this._buildColorLUT(this.scalarFieldOptions.colorScale, 960, 1050), v = L.GridLayer.extend({
      initialize: function(c, y, m) {
        this._imageUrl = c, this._header = y, this._imageData = null, this._imageLoaded = !1, this._dataArray = null, L.setOptions(this, m), this._loadImage();
      },
      _loadImage: function() {
        const c = new Image();
        c.crossOrigin = "anonymous", c.onload = () => {
          const y = document.createElement("canvas");
          y.width = c.width, y.height = c.height;
          const m = y.getContext("2d");
          m.drawImage(c, 0, 0), this._imageData = m.getImageData(0, 0, c.width, c.height), this._imageLoaded = !0, this._imgWidth = c.width, this._imgHeight = c.height, this._preDecodeData(), this.redraw();
        }, c.onerror = (y) => console.error("图片加载失败:", y), c.src = this._imageUrl;
      },
      // 预解码数据 - 避免渲染时重复解码
      _preDecodeData: function() {
        const c = this._header, y = this._imageData.data, m = this._imgWidth, g = this._imgHeight;
        this._dataArray = new Float32Array(m * g);
        for (let r = 0; r < m * g; r++) {
          const n = r * 4;
          if (y[n + 3] === 0)
            this._dataArray[r] = NaN;
          else {
            const b = y[n], p = y[n + 1];
            this._dataArray[r] = (b + p / 100 - c.addVal) / c.scaleVal;
          }
        }
      },
      createTile: function(c, y) {
        const m = document.createElement("canvas");
        if (m.width = m.height = 256, !this._imageLoaded)
          return setTimeout(() => y && y(null, m), 0), m;
        const g = () => {
          this._renderTileOptimized(m, c), y && y(null, m);
        };
        return window.requestIdleCallback ? requestIdleCallback(g, { timeout: 100 }) : setTimeout(g, 0), m;
      },
      _renderTileOptimized: function(c, y) {
        const m = c.getContext("2d"), g = m.createImageData(256, 256), r = g.data, n = this._header, d = Math.floor(s.scalarFieldOptions.opacity * 255), b = this._dataArray, p = this._imgWidth, _ = this._imgHeight, S = Math.pow(2, y.z), l = 256;
        for (let w = 0; w < l; w++)
          for (let M = 0; M < l; M++) {
            const P = (y.x + M / l) / S * 360 - 180, G = Math.atan(Math.sinh(Math.PI * (1 - 2 * (y.y + w / l) / S))) * 57.29577951308232;
            let ee = P < 0 ? P + 360 : P;
            if (G > n.la1 || G < n.la2) continue;
            const F = (ee - n.lo1) / (n.lo2 - n.lo1 + n.dx) * p, I = (n.la1 - G) / (n.la1 - n.la2) * _;
            if (F < 0 || F >= p || I < 0 || I >= _) continue;
            const R = F | 0, k = I | 0, B = Math.min(R + 1, p - 1), Z = Math.min(k + 1, _ - 1), O = b[k * p + R], N = b[k * p + B], V = b[Z * p + R], z = b[Z * p + B];
            if (isNaN(O) && isNaN(N) && isNaN(V) && isNaN(z)) continue;
            let A;
            if (!isNaN(O) && !isNaN(N) && !isNaN(V) && !isNaN(z)) {
              const D = F - R, U = I - k;
              A = O * (1 - D) * (1 - U) + N * D * (1 - U) + V * (1 - D) * U + z * D * U;
            } else if (A = isNaN(O) ? isNaN(N) ? isNaN(V) ? z : V : N : O, isNaN(A)) continue;
            const J = Math.max(0, Math.min(255, (A - 960) / 90 * 255 | 0)) * 3, W = (w * l + M) * 4;
            r[W] = u[J], r[W + 1] = u[J + 1], r[W + 2] = u[J + 2], r[W + 3] = d;
          }
        m.putImageData(g, 0, 0);
      }
    }), x = e.imageUrl || e.imgUrl;
    return this.scalarFieldLayer = new v(x, i, {
      opacity: this.scalarFieldOptions.opacity,
      updateWhenZooming: !1,
      updateWhenIdle: !0,
      keepBuffer: 2
    }), this.scalarFieldLayer.addTo(o), this.scalarFieldLayer;
  },
  /**
   * 构建颜色查找表 (LUT) - 预计算 256 级颜色
   */
  _buildColorLUT(t, e, a) {
    const o = new Uint8Array(768), i = a - e;
    for (let s = 0; s < 256; s++) {
      const u = e + s / 255 * i, v = this._valueToColorByScale(u, t);
      o[s * 3] = v[0], o[s * 3 + 1] = v[1], o[s * 3 + 2] = v[2];
    }
    return o;
  },
  /**
   * 根据颜色映射表将数值转换为颜色
   * colorScale 格式: [[value1, [r,g,b]], [value2, [r,g,b]], ...]
   */
  _valueToColorByScale(t, e) {
    if (t <= e[0][0])
      return e[0][1];
    if (t >= e[e.length - 1][0])
      return e[e.length - 1][1];
    for (let a = 0; a < e.length - 1; a++) {
      const o = e[a], i = e[a + 1];
      if (t >= o[0] && t <= i[0]) {
        const s = (t - o[0]) / (i[0] - o[0]);
        return [
          Math.round(o[1][0] + s * (i[1][0] - o[1][0])),
          Math.round(o[1][1] + s * (i[1][1] - o[1][1])),
          Math.round(o[1][2] + s * (i[1][2] - o[1][2]))
        ];
      }
    }
    return [128, 128, 128];
  },
  /**
   * 移除颜色场图层
   */
  removeScalarFieldLayer(t) {
    const e = t || f;
    this.scalarFieldLayer && e && (e.removeLayer(this.scalarFieldLayer), this.scalarFieldLayer = null);
  },
  /**
   * 设置颜色场透明度
   */
  setScalarFieldOpacity(t) {
    this.scalarFieldOptions.opacity = t, this.scalarFieldLayer && this.scalarFieldLayer.redraw();
  },
  // ==================== 等值线图层 ====================
  contourLayer: null,
  labelLayer: null,
  contourLabels: [],
  contourOptions: {},
  /**
   * 添加等值线图层
   * @param {Object} map - Leaflet 地图实例
   * @param {Object} geojsonData - GeoJSON 等值线数据
   * @param {Object} options - 配置选项
   */
  addContourLayer(t, e, a = {}) {
    const o = t || f;
    if (!o)
      return console.error("地图实例不存在"), null;
    this.contourOptions = {
      lineWidth: 1.5,
      opacity: 0.9,
      lineColor: "white",
      showLabels: !0,
      labelFontSize: 11,
      minLabelSpacing: 80,
      ...a
    }, this.removeContourLayer(o);
    const i = this._normalizeGeoJSON(e);
    this.contourLayer = L.layerGroup();
    const s = L.geoJSON(i, {
      style: () => ({
        color: this.contourOptions.lineColor,
        weight: this.contourOptions.lineWidth,
        opacity: this.contourOptions.opacity
      })
    });
    this.contourLayer.addLayer(s);
    const u = L.geoJSON(this._offsetGeoJSON(i, -360), {
      style: () => ({
        color: this.contourOptions.lineColor,
        weight: this.contourOptions.lineWidth,
        opacity: this.contourOptions.opacity
      })
    });
    this.contourLayer.addLayer(u);
    const v = L.geoJSON(this._offsetGeoJSON(i, 360), {
      style: () => ({
        color: this.contourOptions.lineColor,
        weight: this.contourOptions.lineWidth,
        opacity: this.contourOptions.opacity
      })
    });
    return this.contourLayer.addLayer(v), this.contourLayer.addTo(o), this._prepareContourLabels(i), this.contourOptions.showLabels && this._updateContourLabels(o), this._bindMapEvents(o), this.contourLayer;
  },
  /**
   * 将 GeoJSON 经度从 0~360 转换为 -180~180
   * 同时处理跨越 180° 经线的线段分割
   */
  _normalizeGeoJSON(t) {
    return {
      ...t,
      features: t.features.map((e) => ({
        ...e,
        geometry: {
          ...e.geometry,
          coordinates: e.geometry.coordinates.flatMap(
            (a) => this._splitLineAt180(a.map((o) => {
              let i = o[0];
              return i > 180 && (i -= 360), [i, o[1]];
            }))
          )
        }
      }))
    };
  },
  /**
   * 在跨越 180°/-180° 经线处分割线段
   * 避免出现横跨整个地图的异常直线
   */
  _splitLineAt180(t) {
    const e = [];
    let a = [];
    for (let o = 0; o < t.length; o++) {
      const i = t[o];
      if (a.length === 0) {
        a.push(i);
        continue;
      }
      const s = a[a.length - 1];
      Math.abs(i[0] - s[0]) > 180 ? (a.length >= 2 && e.push(a), a = [i]) : a.push(i);
    }
    return a.length >= 2 && e.push(a), e.length > 0 ? e : [t];
  },
  /**
   * 将 GeoJSON 经度偏移指定度数（用于创建平铺副本）
   */
  _offsetGeoJSON(t, e) {
    return {
      ...t,
      features: t.features.map((a) => ({
        ...a,
        geometry: {
          ...a.geometry,
          coordinates: a.geometry.coordinates.map(
            (o) => o.map((i) => [i[0] + e, i[1]])
          )
        }
      }))
    };
  },
  /**
   * 绑定地图事件
   */
  _bindMapEvents(t) {
    t.off("zoomend", this._onMapChange), t.off("moveend", this._onMapChange), this._onMapChange = () => this._updateContourLabels(t), t.on("zoomend", this._onMapChange), t.on("moveend", this._onMapChange);
  },
  /**
   * 预处理等值线标注数据
   * 从每条等值线中提取多个候选标注点，同时为左右平铺副本生成标注
   */
  _prepareContourLabels(t) {
    this.contourLabels = [], t.features.forEach((e, a) => {
      const o = e.properties.value, i = e.geometry.coordinates;
      i && i.length > 0 && i.forEach((s, u) => {
        if (s.length < 3) return;
        [-360, 0, 360].forEach((x, c) => {
          const y = `${a}-${u}-${c}`, m = Math.max(3, Math.floor(s.length / 8)), g = Math.floor(s.length / m);
          for (let r = g; r < s.length - g; r += g) {
            const n = s[r][0] + x, d = s[r][1];
            d >= -85 && d <= 85 && n >= -540 && n <= 540 && this.contourLabels.push({
              lat: d,
              lng: n,
              value: o,
              lineId: y,
              priority: r === Math.floor(s.length / 2) ? 1 : 0
            });
          }
        });
      });
    });
  },
  /**
   * 基于碰撞检测更新可见标注
   * 优化策略：按等值线分组，确保每条线至少显示一个标注
   */
  _updateContourLabels(t) {
    if (!this.contourOptions.showLabels) return;
    const e = t || f;
    if (!e) return;
    this.labelLayer && e.removeLayer(this.labelLayer), this.labelLayer = L.layerGroup();
    const a = e.getBounds(), o = this.contourOptions.labelFontSize, i = o * 3.2, s = o * 1.3, u = 2, v = [], x = /* @__PURE__ */ new Set(), c = (r) => {
      for (const n of v)
        if (r.left < n.right && r.right > n.left && r.top < n.bottom && r.bottom > n.top)
          return !0;
      return !1;
    }, y = (r) => {
      let n = 0;
      for (const d of v)
        r.left < d.right && r.right > d.left && r.top < d.bottom && r.bottom > d.top && n++;
      return n;
    }, m = (r, n = 1) => {
      const d = o * n, b = i * n, p = s * n;
      return L.marker([r.lat, r.lng], {
        icon: L.divIcon({
          className: "contour-label",
          html: `<span style="
            color: white;
            font-size: ${d}px;
            font-weight: bold;
            text-shadow: 1px 1px 1px black, -1px -1px 1px black, 1px -1px 1px black, -1px 1px 1px black;
            white-space: nowrap;
          ">${r.value}</span>`,
          iconSize: [b, p],
          iconAnchor: [b / 2, p / 2]
        })
      });
    }, g = /* @__PURE__ */ new Map();
    for (const r of this.contourLabels)
      a.contains([r.lat, r.lng]) && (g.has(r.lineId) || g.set(r.lineId, []), g.get(r.lineId).push(r));
    for (const [r, n] of g) {
      n.sort((d, b) => b.priority - d.priority);
      for (const d of n) {
        const b = e.latLngToContainerPoint([d.lat, d.lng]), p = {
          left: b.x - i / 2 - u,
          right: b.x + i / 2 + u,
          top: b.y - s / 2 - u,
          bottom: b.y + s / 2 + u
        };
        if (!c(p)) {
          v.push(p), x.add(r), this.labelLayer.addLayer(m(d));
          break;
        }
      }
    }
    for (const [r, n] of g) {
      if (x.has(r)) continue;
      let d = null, b = 1 / 0;
      for (const p of n) {
        const _ = e.latLngToContainerPoint([p.lat, p.lng]), S = i * 0.75, l = s * 0.75, w = {
          left: _.x - S / 2,
          right: _.x + S / 2,
          top: _.y - l / 2,
          bottom: _.y + l / 2
        }, M = y(w);
        M < b && (b = M, d = p);
      }
      if (d) {
        const p = e.latLngToContainerPoint([d.lat, d.lng]), _ = i * 0.75, S = s * 0.75;
        v.push({
          left: p.x - _ / 2,
          right: p.x + _ / 2,
          top: p.y - S / 2,
          bottom: p.y + S / 2
        }), this.labelLayer.addLayer(m(d, 0.85));
      }
    }
    this.labelLayer.addTo(e);
  },
  /**
   * 移除等值线图层
   */
  removeContourLayer(t) {
    const e = t || f;
    e && (this.contourLayer && (e.removeLayer(this.contourLayer), this.contourLayer = null), this.labelLayer && (e.removeLayer(this.labelLayer), this.labelLayer = null), this._onMapChange && (e.off("zoomend", this._onMapChange), e.off("moveend", this._onMapChange), this._onMapChange = null));
  },
  /**
   * 切换标注显示
   */
  toggleContourLabels(t, e) {
    this.contourOptions.showLabels = e;
    const a = t || f;
    e ? this._updateContourLabels(a) : this.labelLayer && (a.removeLayer(this.labelLayer), this.labelLayer = null);
  },
  /**
   * 更新等值线样式
   */
  updateContourStyle(t, e) {
    Object.assign(this.contourOptions, e), this.contourLayer && this.contourLayer.setStyle(() => ({
      color: this.contourOptions.lineColor,
      weight: this.contourOptions.lineWidth,
      opacity: this.contourOptions.opacity
    }));
  }
}, ie = { class: "contour-page" }, le = { class: "controls" }, se = { class: "control-item" }, ne = { class: "control-item" }, ce = { class: "control-item" }, ue = { class: "control-item" }, de = { class: "control-item" }, he = {
  key: 0,
  class: "loading"
}, ye = /* @__PURE__ */ te({
  __name: "ContourPage",
  setup(t) {
    const e = T(null), a = T(!0), o = T(!0), i = T(!0), s = T(0.6), u = T(1.5), v = T(!1), x = T(null), c = T(null), y = () => {
      e.value = K.map("contour-map", {
        zoom: 4,
        maxZoom: 10,
        minZoom: 2,
        zoomControl: !0
      }).setView([35, 120], 4), K.tileLayer(
        "https://t0.tianditu.gov.cn/img_w/wmts?tk=93724b915d1898d946ca7dc7b765dda5&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}",
        { maxZoom: 18 }
      ).addTo(e.value);
    }, m = async () => {
      v.value = !0;
      try {
        const [S, l] = await Promise.all([
          fetch("./data/pres.json"),
          fetch("./data/pres-contour.json")
        ]);
        x.value = await S.json(), c.value = await l.json(), a.value && g(), o.value && r();
      } catch (S) {
        console.error("数据加载失败:", S);
      } finally {
        v.value = !1;
      }
    }, g = () => {
      if (!x.value || !e.value) return;
      const S = x.value[0].header;
      C.addScalarFieldLayer(e.value, {
        header: S,
        imageUrl: "./data/pres_u.png"
      }, {
        opacity: s.value
      });
    }, r = () => {
      !c.value || !e.value || C.addContourLayer(e.value, c.value, {
        lineWidth: u.value,
        opacity: 0.9,
        showLabels: i.value
      });
    }, n = () => {
      a.value ? (g(), o.value && c.value && e.value && (C.removeContourLayer(e.value), r())) : e.value && C.removeScalarFieldLayer(e.value);
    }, d = () => {
      o.value ? r() : e.value && C.removeContourLayer(e.value);
    }, b = () => {
      e.value && C.toggleContourLabels(e.value, i.value);
    }, p = () => {
      a.value && x.value && e.value && (C.removeScalarFieldLayer(e.value), g(), o.value && c.value && (C.removeContourLayer(e.value), r()));
    }, _ = () => {
      e.value && C.updateContourStyle(e.value, {
        lineWidth: u.value
      });
    };
    return ae(() => {
      y(), m();
    }), oe(() => {
      e.value && (C.removeScalarFieldLayer(e.value), C.removeContourLayer(e.value), e.value.remove(), e.value = null);
    }), (S, l) => ($(), X("div", ie, [
      l[12] || (l[12] = h("div", {
        id: "contour-map",
        class: "map-container"
      }, null, -1)),
      h("div", le, [
        l[10] || (l[10] = h("h3", null, "气压场控制", -1)),
        h("div", se, [
          h("label", null, [
            E(h("input", {
              type: "checkbox",
              "onUpdate:modelValue": l[0] || (l[0] = (w) => a.value = w),
              onChange: n
            }, null, 544), [
              [H, a.value]
            ]),
            l[5] || (l[5] = Y(" 显示颜色场 ", -1))
          ])
        ]),
        h("div", ne, [
          h("label", null, [
            E(h("input", {
              type: "checkbox",
              "onUpdate:modelValue": l[1] || (l[1] = (w) => o.value = w),
              onChange: d
            }, null, 544), [
              [H, o.value]
            ]),
            l[6] || (l[6] = Y(" 显示等值线 ", -1))
          ])
        ]),
        h("div", ce, [
          h("label", null, [
            E(h("input", {
              type: "checkbox",
              "onUpdate:modelValue": l[2] || (l[2] = (w) => i.value = w),
              onChange: b
            }, null, 544), [
              [H, i.value]
            ]),
            l[7] || (l[7] = Y(" 显示数值标注 ", -1))
          ])
        ]),
        h("div", ue, [
          l[8] || (l[8] = h("label", null, "颜色场透明度", -1)),
          E(h("input", {
            type: "range",
            "onUpdate:modelValue": l[3] || (l[3] = (w) => s.value = w),
            min: "0.1",
            max: "1",
            step: "0.1",
            onInput: p
          }, null, 544), [
            [
              Q,
              s.value,
              void 0,
              { number: !0 }
            ]
          ]),
          h("span", null, q(s.value), 1)
        ]),
        h("div", de, [
          l[9] || (l[9] = h("label", null, "线条宽度", -1)),
          E(h("input", {
            type: "range",
            "onUpdate:modelValue": l[4] || (l[4] = (w) => u.value = w),
            min: "1",
            max: "5",
            step: "0.5",
            onInput: _
          }, null, 544), [
            [
              Q,
              u.value,
              void 0,
              { number: !0 }
            ]
          ]),
          h("span", null, q(u.value) + "px", 1)
        ]),
        l[11] || (l[11] = h("div", { class: "legend" }, [
          h("div", { class: "legend-title" }, "气压值 (hPa)"),
          h("div", { class: "legend-gradient" }),
          h("div", { class: "legend-labels" }, [
            h("span", null, "960"),
            h("span", null, "1000"),
            h("span", null, "1040")
          ])
        ], -1)),
        v.value ? ($(), X("div", he, "加载中...")) : re("", !0)
      ])
    ]));
  }
}), pe = (t, e) => {
  const a = t.__vccOpts || t;
  for (const [o, i] of e)
    a[o] = i;
  return a;
}, ge = /* @__PURE__ */ pe(ye, [["__scopeId", "data-v-e8eb5f06"]]);
export {
  ge as default
};
