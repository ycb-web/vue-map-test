<template>
  <div class="lab-page">
    <!-- 地图容器（底图背景随主题动态切换，不垫天地图底图） -->
    <div id="lab-map" class="map-container" :style="{ background: mapBgColor }"></div>

    <!-- 地图通用工具栏（设 show-basemap 为 false，完全去除底层天地图与底图切换） -->
    <MapToolbar
      class="toolbar"
      :map="map"
      :initial-center="[15, 0]"
      :initial-zoom="2"
      :show-basemap="false"
      @reset="resetView"
      @reset-view="resetView"
    />

    <!-- 地图状态控件（鼠标经纬度、层级、比例尺） -->
    <MapStatus v-if="map" class="map-status" :map="map" />

    <!-- 实验测试悬浮面板 -->
    <div class="lab-panel" :class="{ collapsed: isCollapsed }">
      <div class="panel-header" @click="isCollapsed = !isCollapsed">
        <div class="panel-title">
          <span class="icon">🌊</span>
          <span>海浪与掩膜图层测试台</span>
        </div>
        <span class="toggle-btn">{{ isCollapsed ? "展开 ▼" : "收起 ▲" }}</span>
      </div>

      <div class="panel-body" v-show="!isCollapsed">
        <!-- 核心对比亮点：HiFleet 陆地掩膜图层 -->
        <div class="highlight-section">
          <div class="section-header-highlight">
            <span class="shield-icon">🛡️</span>
            <span>HiFleet 陆地掩膜遮罩</span>
            <span class="tag-hifleet">实时在线</span>
          </div>
          <div class="control-row" style="margin-top: 6px">
            <label class="checkbox-label">
              <input type="checkbox" v-model="showLandMask" @change="toggleLandMask" />
              <b style="color: #0369a1">开启陆地切除遮罩</b>
            </label>
          </div>
          <div v-if="showLandMask" class="mask-options">
            <div class="theme-switch">
              <label class="radio-label">
                <input
                  type="radio"
                  value="hlandmap"
                  v-model="maskTheme"
                  @change="changeMaskTheme"
                />
                <span>亮色灰 (#D2D2D2)</span>
              </label>
              <label class="radio-label">
                <input
                  type="radio"
                  value="darklandmap"
                  v-model="maskTheme"
                  @change="changeMaskTheme"
                />
                <span>深黑暗夜</span>
              </label>
            </div>
            <div class="slider-item" style="margin-top: 8px">
              <div class="slider-header">
                <span>遮罩不透明度</span>
                <span class="val">{{ landMaskOpacity.toFixed(2) }}</span>
              </div>
              <input
                type="range"
                min="0.2"
                max="1"
                step="0.05"
                v-model.number="landMaskOpacity"
                @input="updateMaskOpacity"
              />
            </div>
          </div>
          <div class="tip-sub">
            💡 开启后可将等值面溢出到陆地/岛屿内部的多余色块瞬间切除遮挡，呈现纯净海洋视角。
          </div>
        </div>

        <!-- 海浪等值面控制区块 -->
        <div class="section-title" style="margin-top: 10px">海浪等值面图层</div>
        <div class="control-row">
          <label class="checkbox-label">
            <input type="checkbox" v-model="showWaveLayer" @change="toggleWaveLayer" />
            <span>显示海浪等值面</span>
          </label>
          <span class="badge">{{ featureCount }} 个面要素</span>
        </div>

        <div v-if="showWaveLayer" class="sub-controls">
          <div class="slider-item">
            <div class="slider-header">
              <span>面填充透明度</span>
              <span class="val">{{ fillOpacity.toFixed(2) }}</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="1"
              step="0.05"
              v-model.number="fillOpacity"
              @input="updateLayerStyle"
            />
          </div>

          <div class="control-row" style="margin-top: 6px">
            <label class="checkbox-label">
              <input type="checkbox" v-model="showBorder" @change="updateLayerStyle" />
              <span>显示面边界细线</span>
            </label>
          </div>

          <div class="control-row" style="margin-top: 6px">
            <label class="checkbox-label">
              <input
                type="checkbox"
                v-model="smoothCurves"
                @change="toggleSmoothCurves"
              />
              <b style="color: #0284c7">圆滑拐角平滑 (样条流线)</b>
            </label>
          </div>
        </div>

        <!-- 快捷操作按钮 -->
        <div class="section-title" style="margin-top: 8px">快捷海区视图</div>
        <div class="btn-grid">
          <button class="action-btn" @click="fitWaveBounds">🌏 全球海浪全域</button>
          <button class="action-btn" @click="locatePacific">🌊 西北太平洋/南海</button>
        </div>

        <!-- 当前悬浮/选中点波高信息 -->
        <div class="section-title" style="margin-top: 8px">选中要素属性</div>
        <div class="status-box">
          <div v-if="hoveredFeature">
            <div>
              <b>有效波高 (Hs):</b>
              <span class="highlight-val">{{ hoveredFeature.hvalue }} 米</span>
            </div>
            <div style="display: flex; align-items: center; gap: 6px; margin-top: 4px">
              <b>标示颜色:</b>
              <span
                class="color-indicator"
                :style="{ background: hoveredFeature.color }"
              ></span>
              <code>{{ hoveredFeature.color }}</code>
            </div>
            <div
              v-if="hoveredFeature.coordStr"
              style="margin-top: 4px; font-size: 12px; color: #4b5563"
            >
              <b>坐标:</b>
              <code style="margin-left: 4px">{{ hoveredFeature.coordStr }}</code>
            </div>
          </div>
          <div v-else class="empty-tip">点击或悬浮在地图海浪多边形上查看数值</div>
        </div>

        <!-- 波高图例 -->
        <div class="section-title" style="margin-top: 8px">波高等级图例 (m)</div>
        <div class="legend-grid">
          <div
            v-for="item in legendList"
            :key="item.hvalue"
            class="legend-chip"
            :style="{ background: item.color, color: getTextColor(item.hvalue) }"
          >
            {{ item.hvalue }}m
          </div>
        </div>

        <!-- 自定义 GeoJSON 数据上传 -->
        <div class="section-title" style="margin-top: 10px">自定义等值面数据</div>
        <div class="upload-container">
          <input
            type="file"
            ref="geoJsonFileInput"
            accept=".json,.geojson,.txt"
            style="display: none"
            @change="handleFileUpload"
          />
          <button class="upload-action-btn" @click="triggerFileUpload">
            📁 上传 GeoJSON / JSON 文件
          </button>
          <div v-if="uploadedFileName" class="upload-file-status">
            <span class="file-name" :title="uploadedFileName">📄 {{ uploadedFileName }}</span>
            <button class="restore-btn" @click="restoreDefaultData" title="还原为初始数据">
              还原初始
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import L from "leaflet";
import MapToolbar from "@/components/MapToolbar";
import MapStatus from "@/components/MapStatus";
import waveIsoData from "@/assets/data/getWavelsosurface3583.json";

export default {
  name: "LabPage",
  components: {
    MapToolbar,
    MapStatus,
  },
  data() {
    return {
      map: null,
      isCollapsed: false,
      // 海浪等值面数据源与上传控制
      currentWaveData: waveIsoData,
      defaultWaveData: waveIsoData,
      uploadedFileName: "",
      featureCount: (waveIsoData && waveIsoData.features && waveIsoData.features.length) || 0,

      // 海浪等值面控制
      showWaveLayer: true,
      showBorder: false,
      fillOpacity: 0.75,
      smoothCurves: true, // 默认开启圆滑平滑处理
      smoothIterations: 2, // 2 次 Chaikin 迭代，平滑消除折线尖角且保持拓扑稳定
      cachedSmoothedData: null, // 缓存平滑处理后的 GeoJSON 数据，避免重复计算
      cachedRawData: null, // 缓存原始 GeoJSON
      waveGeoJsonLayer: null,
      hoveredFeature: null,

      // HiFleet 陆地掩膜瓦片控制
      showLandMask: true,
      maskTheme: "hlandmap", // 'hlandmap' 或 'darklandmap'
      landMaskOpacity: 1.0,
      landMaskLayer: null,

      legendList: [
        { hvalue: 1.15, color: "#E2EBF5" },
        { hvalue: 1.25, color: "#a7c2e0" },
        { hvalue: 2.0, color: "#6c99d2" },
        { hvalue: 3.0, color: "#34cc99" },
        { hvalue: 4.0, color: "#6bff6b" },
        { hvalue: 5.0, color: "#fee600" },
        { hvalue: 6.0, color: "#ff9600" },
        { hvalue: 8.0, color: "#fa3c3c" },
        { hvalue: 10.0, color: "#c80000" },
      ],
    };
  },
  computed: {
    // 纯数据底色：根据掩膜主题动态适应，不加载任何外部第三方底图瓦片
    mapBgColor() {
      return this.maskTheme === "darklandmap" ? "#0f172a" : "#cad2d3";
    },
  },
  mounted() {
    this.initMap();
    this.renderWaveIsoLayer();
    this.initLandMaskLayer();
    this.fitWaveBounds();
  },
  beforeDestroy() {
    if (this.map) {
      if (this.waveGeoJsonLayer) {
        if (this.waveGeoJsonLayer._worker) {
          try {
            this.waveGeoJsonLayer._worker.terminate();
          } catch (e) {
            // ignore
          }
          this.waveGeoJsonLayer._worker = null;
        }
        this.map.removeLayer(this.waveGeoJsonLayer);
        this.waveGeoJsonLayer = null;
      }
      if (this.landMaskLayer) {
        this.map.removeLayer(this.landMaskLayer);
        this.landMaskLayer = null;
      }
      this.map.remove();
      this.map = null;
    }
  },
  methods: {
    initMap() {
      // 初始化地图（对齐 HiFleet 参数配置）
      this.map = L.map("lab-map", {
        center: [15, 0],
        zoom: 2,
        minZoom: 2,
        maxZoom: 18,
        zoomControl: false,
        zoomAnimation: true,
        wheelDebounceTime: 60, // 对齐 HiFleet：防抖滚轮平滑缩放
        zoomSnap: 1,
        zoomDelta: 1,
      });

      // 1. 创建图层分层 Pane（确保三明治夹心层级关系绝对正确）
      // 叠加层: 等值面矢量切片 (wavePane, zIndex 400)
      if (!this.map.getPane("wavePane")) {
        const wavePane = this.map.createPane("wavePane");
        wavePane.style.zIndex = "400";
      }

      // 遮罩层: 陆地掩膜 (landMaskPane, zIndex 450, 浮在等值面上切除陆地溢出色块)
      if (!this.map.getPane("landMaskPane")) {
        const maskPane = this.map.createPane("landMaskPane");
        maskPane.style.zIndex = "450";
        maskPane.style.pointerEvents = "none";
      }

      // 顶层标注 pane: 地名标注 (zIndex 500, 浮在掩膜之上，文字不会被遮盖)
      if (!this.map.getPane("labelsPane")) {
        const labelsPane = this.map.createPane("labelsPane");
        labelsPane.style.zIndex = "500";
        labelsPane.style.pointerEvents = "none";
      }

      // 2. 底图与注记由 MapToolbar 组件统一托管与切换
      // MapToolbar 会检测 labelsPane，自动将注记图层挂载至 zIndex 500 的顶层

      // 3. 注册地图层级的点击交互事件（完全对标 HiFleet：在地图层拾取，避开切片库内部 Bug）
      this.initMapEvents();
    },

    // 空间几何碰撞检测（判断经纬度点是否落在环内部）
    pointInRing(x, y, ring) {
      let inside = false;
      for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
        const xi = ring[i][0];
        const yi = ring[i][1];
        const xj = ring[j][0];
        const yj = ring[j][1];
        const intersect =
          yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
        if (intersect) inside = !inside;
      }
      return inside;
    },

    // 查找指定经纬度所在的海浪要素（自动处理经度环绕与多层嵌套孔洞）
    queryWaveFeature(latlng) {
      if (!this.currentWaveData || !this.currentWaveData.features) return null;
      const wrapped = latlng && latlng.wrap ? latlng.wrap() : latlng;
      const lng = wrapped.lng;
      const lat = wrapped.lat;

      // 从高波高往低波高匹配（保证优先拾取顶层高波高面）
      const features = this.currentWaveData.features;
      for (let i = features.length - 1; i >= 0; i--) {
        const f = features[i];
        const geom = f.geometry;
        if (!geom) continue;

        if (geom.type === "Polygon") {
          if (this.pointInRing(lng, lat, geom.coordinates[0])) {
            let inHole = false;
            for (let h = 1; h < geom.coordinates.length; h++) {
              if (this.pointInRing(lng, lat, geom.coordinates[h])) {
                inHole = true;
                break;
              }
            }
            if (!inHole) return f;
          }
        } else if (geom.type === "MultiPolygon") {
          for (let p = 0; p < geom.coordinates.length; p++) {
            const poly = geom.coordinates[p];
            if (this.pointInRing(lng, lat, poly[0])) {
              let inHole = false;
              for (let h = 1; h < poly.length; h++) {
                if (this.pointInRing(lng, lat, poly[h])) {
                  inHole = true;
                  break;
                }
              }
              if (!inHole) return f;
            }
          }
        }
      }
      return null;
    },

    initMapEvents() {
      if (!this.map) return;
      const self = this;

      // 地图点击拾取
      this.map.on("click", (e) => {
        if (!self.showWaveLayer) return;
        const feature = self.queryWaveFeature(e.latlng);
        if (!feature) return;

        const props = feature.properties || {};
        const hvalue = props.hvalue || 0;
        const color = props.color || "#ffffff";
        const latlng = e.latlng && e.latlng.wrap ? e.latlng.wrap() : e.latlng;
        const latDir = latlng.lat >= 0 ? "N" : "S";
        const lngDir = latlng.lng >= 0 ? "E" : "W";
        const latStr = Math.abs(latlng.lat).toFixed(4) + "°" + latDir;
        const lngStr = Math.abs(latlng.lng).toFixed(4) + "°" + lngDir;
        const coordStr = `${latStr}, ${lngStr}`;
        const coordNumStr = `${latlng.lat.toFixed(4)}, ${latlng.lng.toFixed(4)}`;

        self.hoveredFeature = { hvalue, color, coordStr, coordNumStr };
        const popupContent = `
          <div style="font-size: 13px; line-height: 1.6; min-width: 175px;">
            <div style="font-weight: 600; font-size: 14px; border-bottom: 1px solid #e5e7eb; padding-bottom: 4px; margin-bottom: 6px;">
              🌊 海浪等值面要素 (Canvas 切片)
            </div>
            <div>有效波高 (Hs): <b style="color: #2563eb; font-size: 15px;">${hvalue} m</b></div>
            <div style="display: flex; align-items: center; gap: 6px; margin-top: 3px;">
              标示色彩: <span style="display:inline-block;width:14px;height:14px;background:${color};border-radius:3px;border:1px solid #ddd;"></span>
              <span>${color}</span>
            </div>
            <div style="margin-top: 5px; padding-top: 5px; border-top: 1px dashed #e5e7eb; color: #374151;">
              <div>点击位置: <b style="color: #111827; font-family: monospace;">${coordStr}</b></div>
              <div style="font-size: 11px; color: #6b7280; margin-top: 1px;">经纬数值: [${coordNumStr}]</div>
            </div>
          </div>
        `;
        L.popup().setLatLng(e.latlng).setContent(popupContent).openOn(self.map);
      });

      // 鼠标移动悬浮拾取（带节流）
      let moveTimer = null;
      this.map.on("mousemove", (e) => {
        if (!self.showWaveLayer) return;
        if (moveTimer) return;
        moveTimer = setTimeout(() => {
          moveTimer = null;
          const feature = self.queryWaveFeature(e.latlng);
          if (feature) {
            const props = feature.properties || {};
            const hvalue = props.hvalue || 0;
            const color = props.color || "#ffffff";
            const latlng = e.latlng && e.latlng.wrap ? e.latlng.wrap() : e.latlng;
            const latDir = latlng.lat >= 0 ? "N" : "S";
            const lngDir = latlng.lng >= 0 ? "E" : "W";
            const coordStr = `${Math.abs(latlng.lat).toFixed(4)}°${latDir}, ${Math.abs(latlng.lng).toFixed(4)}°${lngDir}`;
            const coordNumStr = `${latlng.lat.toFixed(4)}, ${latlng.lng.toFixed(4)}`;
            self.hoveredFeature = { hvalue, color, coordStr, coordNumStr };
          }
        }, 30);
      });
    },

    // 初始化/挂载 HiFleet 陆地掩膜图层
    initLandMaskLayer() {
      if (!this.map) return;
      if (this.landMaskLayer) {
        this.map.removeLayer(this.landMaskLayer);
        this.landMaskLayer = null;
      }

      const maskUrl = `https://static.hifleet.com/hfWeatherWaveApi/${this.maskTheme}/{z}/{x}/{y}.png`;
      this.landMaskLayer = L.tileLayer(maskUrl, {
        pane: "landMaskPane",
        opacity: this.landMaskOpacity,
        maxZoom: 10,
        minZoom: 1,
      });

      if (this.showLandMask) {
        this.landMaskLayer.addTo(this.map);
      }
    },

    toggleLandMask() {
      if (!this.map || !this.landMaskLayer) return;
      if (this.showLandMask) {
        this.map.addLayer(this.landMaskLayer);
      } else {
        this.map.removeLayer(this.landMaskLayer);
      }
    },

    changeMaskTheme() {
      this.initLandMaskLayer();
    },

    updateMaskOpacity() {
      if (this.landMaskLayer) {
        this.landMaskLayer.setOpacity(this.landMaskOpacity);
      }
    },

    /**
     * 柴金拐角割角平滑算法 (Chaikin's Corner Cutting Algorithm)
     * 对折线/多边形闭合环的每个尖锐拐角进行割角细分，消除锯齿折角，生成圆滑流线
     */
    chaikinRing(ring, iterations = 2) {
      if (!ring || ring.length < 4) return ring;
      let current = ring;
      for (let it = 0; it < iterations; it++) {
        const isClosed =
          current[0][0] === current[current.length - 1][0] &&
          current[0][1] === current[current.length - 1][1];
        const pts = isClosed ? current.slice(0, -1) : current;
        if (pts.length < 3) return ring;
        const next = [];
        const len = pts.length;
        for (let i = 0; i < len; i++) {
          const p0 = pts[i];
          const p1 = pts[(i + 1) % len];
          next.push([
            Math.round((0.75 * p0[0] + 0.25 * p1[0]) * 10000) / 10000,
            Math.round((0.75 * p0[1] + 0.25 * p1[1]) * 10000) / 10000,
          ]);
          next.push([
            Math.round((0.25 * p0[0] + 0.75 * p1[0]) * 10000) / 10000,
            Math.round((0.25 * p0[1] + 0.75 * p1[1]) * 10000) / 10000,
          ]);
        }
        if (isClosed) {
          next.push([next[0][0], next[0][1]]);
        }
        current = next;
      }
      return current;
    },

    /**
     * 对 GeoJSON 多边形集合进行拐角平滑处理
     */
    smoothFeatureCollection(source, iterations = 2) {
      if (!source || !Array.isArray(source.features)) return source;
      const self = this;
      return {
        type: "FeatureCollection",
        features: source.features.map((f) => {
          let coords = f.geometry.coordinates;
          if (f.geometry.type === "Polygon") {
            coords = coords.map((ring) => self.chaikinRing(ring, iterations));
          } else if (f.geometry.type === "MultiPolygon") {
            coords = coords.map((poly) =>
              poly.map((ring) => self.chaikinRing(ring, iterations))
            );
          }
          return {
            type: "Feature",
            properties: f.properties,
            geometry: {
              type: f.geometry.type,
              coordinates: coords,
            },
          };
        }),
      };
    },

    // 生成跨世界连续平铺的 GeoJSON 数据（覆盖左中右多屏视野）
    buildMultiWorldGeoJson(source, offsets = [-720, -360, 0, 360, 720]) {
      if (!source || !Array.isArray(source.features)) return source;

      if (this.smoothCurves && this.cachedSmoothedData) {
        return this.cachedSmoothedData;
      }
      if (!this.smoothCurves && this.cachedRawData) {
        return this.cachedRawData;
      }

      // 若启用曲线平滑，先对几何多边形执行拐角割角平滑
      const dataToRender = this.smoothCurves
        ? this.smoothFeatureCollection(source, this.smoothIterations)
        : source;

      const shiftCoords = (coords, offset) => {
        if (typeof coords[0] === "number") {
          return [coords[0] + offset, coords[1]];
        }
        return coords.map((sub) => shiftCoords(sub, offset));
      };

      const multiFeatures = [];
      offsets.forEach((offset) => {
        dataToRender.features.forEach((f) => {
          multiFeatures.push({
            type: "Feature",
            properties: f.properties,
            geometry: {
              type: f.geometry.type,
              coordinates:
                offset === 0
                  ? f.geometry.coordinates
                  : shiftCoords(f.geometry.coordinates, offset),
            },
          });
        });
      });

      const res = {
        type: "FeatureCollection",
        features: multiFeatures,
      };

      if (this.smoothCurves) {
        this.cachedSmoothedData = res;
      } else {
        this.cachedRawData = res;
      }

      return res;
    },

    // 渲染海浪等值面矢量切片图层（对标 HiFleet：L.vectorGrid.slicer + Canvas 瓦片引擎）
    renderWaveIsoLayer() {
      if (!this.map || !this.currentWaveData) return;

      if (this.waveGeoJsonLayer) {
        if (this.waveGeoJsonLayer._worker) {
          try {
            this.waveGeoJsonLayer._worker.terminate();
          } catch (e) {
            // ignore
          }
          this.waveGeoJsonLayer._worker = null;
        }
        this.map.removeLayer(this.waveGeoJsonLayer);
        this.waveGeoJsonLayer = null;
      }

      // 测试对标 HiFleet 的 VectorGrid.Slicer 单世界数据
      const dataToRender = this.smoothCurves
        ? this.smoothFeatureCollection(this.currentWaveData, this.smoothIterations)
        : this.currentWaveData;

      const self = this;
      if (L.vectorGrid && L.vectorGrid.slicer) {
        this.waveGeoJsonLayer = L.vectorGrid.slicer(dataToRender, {
          rendererFactory: L.canvas.tile,
          pane: "wavePane",
          interactive: false, // 对齐 HiFleet，不开启 VectorGrid 内部事件
          maxZoom: 18,
          indexMaxZoom: 5,
          tolerance: 0,
          vectorTileLayerStyles: {
            sliced: (properties) => {
              const color = (properties && properties.color) || "#3388ff";
              return {
                fillColor: color,
                fillOpacity: self.fillOpacity,
                stroke: self.showBorder,
                fill: true,
                color: "black",
                weight: self.showBorder ? 0.8 : 0,
              };
            },
          },
        });
        this.waveGeoJsonLayer.addTo(this.map);
        return;
      }

      const multiWorldData = this.buildMultiWorldGeoJson(this.currentWaveData);
      // 回退方案：原生 L.geoJSON
      this.waveGeoJsonLayer = L.geoJSON(multiWorldData, {
        smoothFactor: 0,
        pane: "wavePane",
        style: (feature) => {
          const color = (feature.properties && feature.properties.color) || "#3388ff";
          return {
            smoothFactor: 0,
            fillColor: color,
            fillOpacity: self.fillOpacity,
            weight: self.showBorder ? 0.8 : 0,
            opacity: self.showBorder ? 0.7 : 0,
            color: color,
            lineCap: "round",
            lineJoin: "round",
          };
        },
      });
      if (this.showWaveLayer) {
        this.waveGeoJsonLayer.addTo(this.map);
      }
    },

    updateLayerStyle() {
      if (!this.waveGeoJsonLayer) return;
      if (this.waveGeoJsonLayer.setStyle) {
        const self = this;
        this.waveGeoJsonLayer.setStyle((feature) => {
          const color = (feature.properties && feature.properties.color) || "#3388ff";
          return {
            smoothFactor: 0,
            fillColor: color,
            fillOpacity: self.fillOpacity,
            weight: self.showBorder ? 0.8 : 0,
            opacity: self.showBorder ? 0.7 : 0,
            color: color,
            lineCap: "round",
            lineJoin: "round",
          };
        });
      } else {
        // VectorGrid 切片图层：直接热重绘
        this.renderWaveIsoLayer();
      }
    },

    toggleSmoothCurves() {
      if (!this.map) return;
      if (this.waveGeoJsonLayer) {
        this.map.removeLayer(this.waveGeoJsonLayer);
        this.waveGeoJsonLayer = null;
      }
      this.renderWaveIsoLayer();
    },

    toggleWaveLayer() {
      if (!this.map || !this.waveGeoJsonLayer) return;
      if (this.showWaveLayer) {
        this.map.addLayer(this.waveGeoJsonLayer);
      } else {
        this.map.removeLayer(this.waveGeoJsonLayer);
      }
    },

    fitWaveBounds() {
      // 默认全球视角：严格固定为 zoom 2，居中于 [15, 0]
      if (this.map) {
        this.map.setView([15, 0], 2);
      }
    },

    locatePacific() {
      if (this.map) {
        this.map.setView([18.0, 128.0], 4);
      }
    },

    resetView() {
      this.fitWaveBounds();
    },

    getTextColor(hval) {
      return hval >= 5.0 ? "#111827" : "#1f2937";
    },

    triggerFileUpload() {
      if (this.$refs.geoJsonFileInput) {
        this.$refs.geoJsonFileInput.click();
      }
    },

    handleFileUpload(event) {
      const file = event.target && event.target.files && event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const content = e.target.result;
          const parsed = JSON.parse(content);

          if (!parsed || parsed.type !== "FeatureCollection" || !Array.isArray(parsed.features)) {
            this.$message.error("文件格式不正确：请上传包含 features 数组的标准 GeoJSON (FeatureCollection)！");
            return;
          }

          // 更新当前等值面数据源
          this.currentWaveData = parsed;
          this.featureCount = parsed.features.length;
          this.uploadedFileName = file.name;

          // 清空平滑及多世界缓存
          this.cachedSmoothedData = null;
          this.cachedRawData = null;

          // 重新渲染矢量切片图层
          this.renderWaveIsoLayer();

          // 自动定位到新数据集视野
          try {
            const tempLayer = L.geoJSON(parsed);
            const b = tempLayer.getBounds();
            if (b.isValid()) {
              this.map.fitBounds(b, { padding: [30, 30] });
            }
          } catch (boundErr) {
            // fallback: keep view
          }

          this.$message.success(`成功加载 ${file.name}，共 ${parsed.features.length} 个要素`);
        } catch (err) {
          console.error("解析 GeoJSON 失败:", err);
          this.$message.error("解析文件失败: " + (err.message || "未知错误"));
        } finally {
          // 清空 input 允许重复上传相同文件名
          if (this.$refs.geoJsonFileInput) {
            this.$refs.geoJsonFileInput.value = "";
          }
        }
      };
      reader.readAsText(file);
    },

    restoreDefaultData() {
      this.currentWaveData = this.defaultWaveData;
      this.featureCount = (this.defaultWaveData && this.defaultWaveData.features && this.defaultWaveData.features.length) || 0;
      this.uploadedFileName = "";
      this.cachedSmoothedData = null;
      this.cachedRawData = null;
      this.renderWaveIsoLayer();
      this.fitWaveBounds();
      this.$message.info("已恢复初始海浪数据");
    },
  },
};
</script>

<style scoped>
.lab-page {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.map-container {
  width: 100%;
  height: 100%;
  background: #cad2d3;
  transition: background 0.3s ease;
}

:deep(.leaflet-container) {
  background-color: transparent !important;
}

.toolbar {
  position: absolute;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
}

.map-status {
  position: absolute;
  bottom: 16px;
  left: 16px;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.9);
  padding: 6px 14px;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);
  backdrop-filter: blur(6px);
}

/* 悬浮面板样式 */
.lab-panel {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 320px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.18);
  z-index: 1000;
  overflow: hidden;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 14px;
  background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
  color: #fff;
  cursor: pointer;
  user-select: none;
}

.panel-title {
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  font-size: 14px;
}

.toggle-btn {
  font-size: 12px;
  opacity: 0.9;
}

.panel-body {
  padding: 12px;
  max-height: calc(100vh - 80px);
  overflow-y: auto;
}

/* 亮点功能区块：陆地掩膜遮罩 */
.highlight-section {
  background: #f0f9ff;
  border: 1px solid #bae6fd;
  border-radius: 6px;
  padding: 10px;
}

.section-header-highlight {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 700;
  color: #0369a1;
}

.tag-hifleet {
  font-size: 10px;
  color: #fff;
  background: #0284c7;
  padding: 1px 5px;
  border-radius: 4px;
  font-weight: normal;
  margin-left: auto;
}

.mask-options {
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px dashed #bae6fd;
}

.theme-switch {
  display: flex;
  gap: 12px;
  font-size: 12px;
  color: #334155;
}

.radio-label {
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
}

.tip-sub {
  font-size: 11px;
  color: #0284c7;
  line-height: 1.35;
  margin-top: 6px;
  background: rgba(255, 255, 255, 0.6);
  padding: 4px 6px;
  border-radius: 4px;
}

.section-title {
  font-size: 12px;
  font-weight: 600;
  color: #374151;
  margin-bottom: 6px;
}

.control-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #1f2937;
  cursor: pointer;
}

.badge {
  font-size: 11px;
  color: #0369a1;
  background: #e0f2fe;
  padding: 2px 6px;
  border-radius: 10px;
}

.sub-controls {
  margin-top: 6px;
  padding: 6px 8px;
  background: #f8fafc;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
}

.slider-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.slider-header {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #64748b;
}

.slider-header .val {
  font-weight: 600;
  color: #0284c7;
}

input[type="range"] {
  width: 100%;
  accent-color: #0284c7;
  cursor: pointer;
}

.btn-grid {
  display: flex;
  gap: 8px;
}

.action-btn {
  flex: 1;
  padding: 6px 8px;
  border: 1px solid #cbd5e1;
  background: #ffffff;
  color: #334155;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  text-align: center;
}

.action-btn:hover {
  background: #f0f9ff;
  border-color: #0284c7;
  color: #0284c7;
}

.status-box {
  font-size: 12px;
  color: #475569;
  background: #f8fafc;
  padding: 6px 8px;
  border-radius: 6px;
  border: 1px dashed #cbd5e1;
  min-height: 38px;
}

.highlight-val {
  font-size: 14px;
  font-weight: 700;
  color: #0284c7;
  margin-left: 4px;
}

.color-indicator {
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.15);
}

.empty-tip {
  color: #94a3b8;
  font-style: italic;
}

/* 图例网格 */
.legend-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
}

.legend-chip {
  padding: 4px 6px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 600;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

/* 自定义 GeoJSON 上传控制 */
.upload-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: #f8fafc;
  border: 1px dashed #cbd5e1;
  border-radius: 6px;
  padding: 8px;
}

.upload-action-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 100%;
  padding: 8px 12px;
  background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
  color: #ffffff;
  border: none;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(2, 132, 199, 0.25);
  transition: all 0.2s ease;
}

.upload-action-btn:hover {
  background: linear-gradient(135deg, #0369a1 0%, #075985 100%);
  box-shadow: 0 3px 8px rgba(2, 132, 199, 0.35);
  transform: translateY(-1px);
}

.upload-action-btn:active {
  transform: translateY(0);
}

.upload-file-status {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  padding: 6px 10px;
  font-size: 12px;
}

.file-name {
  color: #0f172a;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 180px;
}

.restore-btn {
  background: #f1f5f9;
  border: 1px solid #cbd5e1;
  color: #475569;
  border-radius: 4px;
  padding: 2px 8px;
  font-size: 11px;
  cursor: pointer;
  transition: all 0.15s;
}

.restore-btn:hover {
  background: #fee2e2;
  border-color: #fca5a5;
  color: #ef4444;
}
</style>
