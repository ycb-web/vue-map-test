<template>
  <div class="adaptive-flow-page">
    <!-- Leaflet 地图容器 -->
    <div id="adaptive-flow-map" class="map-container"></div>

    <!-- 顶部状态栏与尺度自适应指示 -->
    <div class="top-bar">
      <div class="top-row">
        <!-- 标题与状态指示 -->
        <div class="title-group">
          <span class="main-title">🌊 多尺度自适应水动力流场</span>
          
          <!-- 当前激活状态徽章 -->
          <span
            class="badge model-badge"
            :class="currentZoom >= 15 ? 'badge-fine' : 'badge-macro'"
          >
            {{ currentZoom >= 15 ? "🔬 超高精流场叠加中 (中心辐射8km · 10m精细度)" : "🌏 宏观流场底图 (1km精细度)" }}
          </span>

          <!-- 分辨率与缩放级别 -->
          <span class="badge res-badge" title="当前空间步长与分辨率">
            📐 {{ currentZoom >= 15 ? "10 米高精 (步长 0.0001°)" : "1 公里宏观 (步长 0.009°)" }} (Zoom: {{ currentZoom }})
          </span>

          <!-- 预报时刻 -->
          <span class="badge time-badge" title="当前流场预报时刻">
            🕒 {{ currentTimelineLabel || "--" }}
          </span>

          <!-- 状态指示 -->
          <span class="badge status-badge" :class="{ 'status-loading': isLoadingMacro || isLoadingFine }">
            {{ (isLoadingMacro || isLoadingFine) ? "⏳ 数据拉取解码中..." : "🟢 在线预报实时渲染" }}
          </span>
        </div>

        <!-- 右侧操作栏（已彻底移除调试模式） -->
        <div class="top-actions">
          <!-- 快速定位视角 -->
          <a-button size="small" icon="global" @click="flyToSouthChinaSea">
            南海全域 (Zoom 7)
          </a-button>

          <a-button size="small" icon="compass" @click="flyToBayArea">
            大湾区 (Zoom 9)
          </a-button>

          <a-button size="small" icon="environment" @click="flyToDayaBayBay">
            大亚湾全湾 (Zoom 11)
          </a-button>

          <a-button size="small" type="primary" icon="aim" @click="flyToDayaBayCore">
            核电站高精 (Zoom 15)
          </a-button>

          <!-- 刷新按钮 -->
          <a-button size="small" icon="sync" :loading="isLoadingMacro || isLoadingFine" @click="refreshAllFlow">
            刷新
          </a-button>
        </div>
      </div>
    </div>

    <!-- 右侧可折叠悬浮控制与诊断面板 -->
    <div class="control-panel" :class="{ collapsed: isPanelCollapsed }">
      <div class="panel-header" @click="isPanelCollapsed = !isPanelCollapsed">
        <span class="header-title">⚙️ 流场调度与参数控制</span>
        <span class="toggle-arrow">{{ isPanelCollapsed ? "◀" : "▼" }}</span>
      </div>

      <div class="panel-content" v-show="!isPanelCollapsed">
        <!-- 调度与请求监控信息 -->
        <div class="section-title">📡 双图层架构监控</div>
        <div class="info-card">
          <div class="info-row">
            <span class="label">宏观底图:</span>
            <span class="val highlight">1km 精细度 (有效格点: {{ macroPointCount > 0 ? macroPointCount.toLocaleString() + ' 点' : '--' }})</span>
          </div>
          <div class="info-row">
            <span class="label">高精图层:</span>
            <span class="val" :class="{ highlight: currentZoom >= 15 }">
              {{ currentZoom >= 15 ? `中心辐射 8km 已叠加 (10m 网格, ${finePointCount > 0 ? finePointCount.toLocaleString() + ' 点' : '--'})` : "Zoom < 15 (未激活)" }}
            </span>
          </div>
          <div class="info-row" v-if="currentZoom >= 15">
            <span class="label">辐射中心:</span>
            <span class="val code-font">{{ currentFineCenterDesc || "--" }}</span>
          </div>
          <div class="info-row">
            <span class="label">当前缩放:</span>
            <span class="val">Zoom: {{ currentZoom }}</span>
          </div>
          <div class="info-row" style="align-items: flex-start;">
            <span class="label">高精BBOX:</span>
            <span class="val code-font" :title="fineBBox">{{ fineBBox || (currentZoom < 15 ? "缩放至 Zoom>=15 触发" : "--") }}</span>
          </div>
          <div class="btn-action-row" style="margin-top: 8px;">
            <a-button size="small" icon="copy" block @click="copyCurrentWmsUrl">
              复制当前 WMS 请求链接
            </a-button>
          </div>
        </div>

        <!-- 鉴权 Token 设置 -->
        <div class="section-title" style="margin-top: 12px;">🔑 鉴权 Token</div>
        <div class="token-setting-box">
          <div class="token-input-row">
            <a-input
              size="small"
              v-model="tokenInput"
              placeholder="输入 WMS 访问 Token"
              style="flex: 1; margin-right: 6px;"
            />
            <a-button size="small" type="primary" @click="applyCustomToken">
              应用
            </a-button>
          </div>
          <div class="token-status-row">
            <span class="token-tip">
              {{ isUsingAutoToken ? "当前使用网关自动 Token" : "已切换为手动覆盖 Token" }}
            </span>
            <a-button
              size="small"
              type="link"
              style="padding: 0; font-size: 12px;"
              :loading="isRefreshingToken"
              @click="syncGatewayToken"
            >
              🔄 重新拉取网关
            </a-button>
          </div>
        </div>

        <!-- 底图切换 -->
        <div class="section-title" style="margin-top: 12px;">🗺️ 底图图层</div>
        <a-radio-group
          v-model="baseLayerType"
          size="small"
          @change="switchBaseLayer"
          class="custom-radio-group"
        >
          <a-radio value="esri_satellite">🛰️ ESRI 高清卫星影像</a-radio>
          <a-radio value="dayabay_satellite">🌊 大亚湾海陆分离图包 (sea+land)</a-radio>
          <a-radio value="tianditu_electronic">🗺️ 天地图电子地图</a-radio>
        </a-radio-group>

        <!-- 渲染图层显隐 -->
        <div class="section-title" style="margin-top: 12px;">🎨 图层显隐与物理格点</div>
        <div class="checkbox-row">
          <label>
            <input type="checkbox" v-model="showParticles" @change="renderLayers" />
            <b>🌊 流场粒子动态流线</b>
          </label>
        </div>
        <div class="checkbox-row">
          <label>
            <input type="checkbox" v-model="showArrows" @change="renderLayers" />
            <b>➡️ 原始物理格点矢量箭头 (零抽稀)</b>
          </label>
        </div>
        <div class="checkbox-row">
          <label>
            <input type="checkbox" v-model="showGrid" @change="renderLayers" />
            <b>📐 物理网格单元线 (海陆全覆盖)</b>
          </label>
        </div>
        <div class="checkbox-row">
          <label>
            <input type="checkbox" v-model="showValues" @change="renderLayers" />
            <b style="color: #00e5ff;">🔢 格点流速数值标注 (m/s)</b>
          </label>
        </div>
        <div class="checkbox-row">
          <label>
            <input type="checkbox" v-model="showCellFill" @change="renderLayers" />
            🎨 单元格流速色块填充
          </label>
        </div>
        <div class="checkbox-row">
          <label>
            <input type="checkbox" v-model="showScalar" @change="renderLayers" />
            🌈 连续流速标量热力图
          </label>
        </div>
        <div class="checkbox-row">
          <label>
            <input type="checkbox" v-model="showLegend" />
            <b>📊 叠加流速色阶图例 (0 ~ 0.41)</b>
          </label>
        </div>

        <!-- 粒子控制滑块 (完全对齐大亚湾流场 DayaBayFlowPage) -->
        <div v-show="showParticles" style="margin-top: 8px; border-top: 1px dashed rgba(255,255,255,0.15); padding-top: 8px;">
          <div class="slider-row">
            <span>流速系数: {{ velocityScale.toFixed(3) }}</span>
            <input
              type="range"
              min="0.01"
              max="0.8"
              step="0.01"
              v-model.number="velocityScale"
              @input="onParticleParamChange"
            />
          </div>
          <div class="slider-row">
            <span>粒子密度: {{ particleDensity.toFixed(4) }}</span>
            <input
              type="range"
              min="0.0005"
              max="0.01"
              step="0.0005"
              v-model.number="particleDensity"
              @input="onParticleParamChange"
            />
          </div>
          <div class="slider-row">
            <span>粒子线宽: {{ particleLineWidth }}px</span>
            <input
              type="range"
              min="1"
              max="5"
              step="1"
              v-model.number="particleLineWidth"
              @input="onParticleParamChange"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- 左下角实时鼠标坐标与流速探针 -->
    <div class="mouse-probe-card" v-if="hoverInfo.active">
      <div class="probe-title">🎯 实时格点流速探测</div>
      <div class="probe-content">
        <span>经度: {{ hoverInfo.lng.toFixed(4) }}°</span>
        <span>纬度: {{ hoverInfo.lat.toFixed(4) }}°</span>
        <span class="probe-speed">流速: {{ hoverInfo.speed !== null ? hoverInfo.speed.toFixed(3) + ' m/s' : '无数据/陆地' }}</span>
        <span v-if="hoverInfo.direction !== null">流向: {{ hoverInfo.direction.toFixed(1) }}°</span>
      </div>
    </div>

    <!-- 底部流速色阶图例 (0 ~ 0.41 m/s) -->
    <div class="legend-card" v-if="showLegend">
      <div class="legend-header">
        <span class="legend-title">流速图例 (m/s)</span>
        <span class="legend-subtitle">深圳预报室水动力标定色阶</span>
      </div>
      <div class="legend-scale-row">
        <div
          v-for="(item, idx) in velocityColorStops"
          :key="idx"
          class="legend-item"
        >
          <svg class="legend-arrow-icon" viewBox="0 0 28 14">
            <line x1="2" y1="7" x2="21" y2="7" :stroke="item.color" stroke-width="2.5" stroke-linecap="round" />
            <polygon points="17,3 25,7 17,11" :fill="item.color" />
          </svg>
          <span class="legend-label">{{ item.label }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../../utils/leaflet-vector-scalar.js";
import { imageToNcJson } from "../../utils/ImageDataUtils.js";
import { rawGridArrowLayer, VELOCITY_COLOR_STOPS } from "../DayaBayFlowPage/RawGridArrowLayer.js";
import {
  getNhhyybToken,
  setNhhyybToken,
  resetToAutoToken,
  buildMacro1kmFlowRequest,
  buildFine8kmRadiationRequest,
  calcBBoxFromCenterRadius,
  MACRO_FLOW_CONFIG,
  FINE_FLOW_CONFIG,
  getLatestAvailableForecastTime,
  FALLBACK_TOKEN,
  isFineFlowZoom,
  getFlowParamsByZoom,
  buildDayaBayAdaptiveRequest,
  buildFineRequestKey,
} from "../../api/nhhyyb.js";


// 大亚湾图包服务基地址
const DAYABAY_TILE_BASE = "https://www.dyboceansentry.com/bus/api/v1/map/arcgis/tile";

export default {
  name: "AdaptiveFlowPage",
  data() {
    const initialTime = getLatestAvailableForecastTime();

    return {
      map: null,
      isPanelCollapsed: false,

      // 缩放级别与状态
      currentZoom: 9,
      currentWmsUrl: "",

      // 鉴权 Token
      currentToken: MACRO_FLOW_CONFIG.token || FALLBACK_TOKEN,
      tokenInput: MACRO_FLOW_CONFIG.token || FALLBACK_TOKEN,
      isUsingAutoToken: true,
      isRefreshingToken: false,

      // 图层 1：宏观 1km 流场底图 (Zoom < 15)
      macroVelocityLayer: null,
      macroNcData: null,
      macroMetaData: null,
      macroHeader: null,
      macroPointCount: 0,
      isLoadingMacro: false,
      macroRequestId: 0,
      macroBBox: "",

      // 图层 2：微观 10m 超高精流场 (Zoom >= 15 从中心向外辐射 8km 叠加)
      fineVelocityLayer: null,
      fineNcData: null,
      fineMetaData: null,
      fineHeader: null,
      finePointCount: 0,
      isLoadingFine: false,
      fineRequestId: 0,
      fineBBox: "",
      currentFineCenterDesc: "",
      lastFineCenter: null,

      // 图层显隐
      baseLayerType: "esri_satellite",
      showCoastline: true,
      coastlineLayer: null,
      showParticles: true,
      showArrows: false,
      showGrid: false,
      showValues: false,
      showCellFill: false,
      showScalar: false,
      showLegend: true,

      // 粒子参数 (完全对齐大亚湾原工程高精流场规范)
      velocityScale: 0.25,
      particleDensity: 0.025,
      particleLineWidth: 2,


      // 图例配置
      velocityColorStops: VELOCITY_COLOR_STOPS,

      // 预报时间
      currentTime: initialTime,

      // 鼠标探针
      hoverInfo: {
        active: false,
        lat: 0,
        lng: 0,
        speed: null,
        direction: null,
      },

      // 防抖定时器 (350ms 防抖)
      moveDebounceTimer: null,

      // 底图与附加图层
      baseLayers: {},
      rawGridLayer: null,
      scalarLayer: null,
    };
  },

  computed: {
    currentTimelineLabel() {
      if (!this.currentTime) return "--";
      return this.currentTime.length >= 16 ? this.currentTime.slice(5, 16).replace("T", " ") : this.currentTime;
    },
  },

  mounted() {
    this.$nextTick(() => {
      window._adaptiveFlowVm = this;
      this.initMap();
      this.initTokenAndFlow();
    });
  },

  beforeDestroy() {
    if (this.moveDebounceTimer) {
      clearTimeout(this.moveDebounceTimer);
    }
    if (this.map) {
      this.map.remove();
      this.map = null;
    }
  },

  methods: {
    /**
     * 初始化 Leaflet 地图与分层 Panes
     */
    initMap() {
      // 默认聚焦大湾区海域 (Zoom: 9)
      this.map = L.map("adaptive-flow-map", {
        center: [22.4, 114.5],
        zoom: 9,
        minZoom: 4,
        maxZoom: 18,
        zoomControl: false,
      });

      L.control.zoom({ position: "bottomright" }).addTo(this.map);
      L.control.scale({ imperial: false, position: "bottomleft" }).addTo(this.map);

      // 创建分层 Pane 体系
      const baseBottomPane = this.map.createPane("baseBottomPane");
      baseBottomPane.style.zIndex = "100";

      const baseTopPane = this.map.createPane("baseTopPane");
      baseTopPane.style.zIndex = "450";
      baseTopPane.style.pointerEvents = "none";

      // 宏观流场 Pane (zIndex: 520)
      const flowMacroPane = this.map.createPane("flowMacroPane");
      flowMacroPane.style.zIndex = "520";
      flowMacroPane.style.pointerEvents = "none";

      // 微观高精叠加 Pane (zIndex: 550，叠在宏观流场之上)
      const flowFinePane = this.map.createPane("flowFinePane");
      flowFinePane.style.zIndex = "550";
      flowFinePane.style.pointerEvents = "none";

      // 预置底图
      this.baseLayers = {
        esri_satellite: L.layerGroup([
          L.tileLayer(
            "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
            { pane: "baseBottomPane", maxZoom: 18, attribution: "Esri Satellite" }
          ),
          L.tileLayer(
            "https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}",
            { pane: "baseTopPane", maxZoom: 18, transparent: true }
          ),
        ]),
        dayabay_satellite: L.layerGroup([
          L.tileLayer(`${DAYABAY_TILE_BASE}?name=sea&x={x}&y={y}&z={z}`, {
            pane: "baseBottomPane",
            minZoom: 1,
            maxZoom: 16,
          }),
          L.tileLayer(`${DAYABAY_TILE_BASE}?name=land&x={x}&y={y}&z={z}`, {
            pane: "baseTopPane",
            minZoom: 1,
            maxZoom: 16,
          }),
        ]),
        tianditu_electronic: L.layerGroup([
          L.tileLayer(
            "https://t{s}.tianditu.gov.cn/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=989182379d7221cf3e0964177ec0ec2e",
            { subdomains: ["0", "1", "2", "3", "4", "5", "6", "7"], pane: "baseBottomPane", maxZoom: 18 }
          ),
          L.tileLayer(
            "https://t{s}.tianditu.gov.cn/cva_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=989182379d7221cf3e0964177ec0ec2e",
            { subdomains: ["0", "1", "2", "3", "4", "5", "6", "7"], pane: "baseTopPane", maxZoom: 18, transparent: true }
          ),
        ]),
      };

      this.baseLayers[this.baseLayerType].addTo(this.map);

      // 监听地图拖拽或缩放（moveend 涵盖拖拽结束与缩放结束）
      setTimeout(() => {
        if (this.map) {
          this.map.on("moveend", this.onMapMoveEnd);
        }
      }, 500);

      this.map.on("mousemove", this.onMapMouseMove);
      this.map.on("mouseout", () => {
        this.hoverInfo.active = false;
      });

      this.currentZoom = this.map.getZoom();

      // 加载大亚湾官方海岸线与防波堤
      this.loadCoastline();
    },

    /**
     * 加载大亚湾官方海岸线与防波堤 (标准 WGS-84)
     */
    async loadCoastline() {
      if (this.coastlineLayer) {
        if (this.showCoastline) {
          this.coastlineLayer.addTo(this.map);
        } else {
          this.map.removeLayer(this.coastlineLayer);
        }
        return;
      }
      try {
        const res = await fetch("/data/dayabay/dayabay_coastline.json");
        const geojson = await res.json();
        this.coastlineLayer = L.geoJSON(geojson, {
          pane: "flowFinePane",
          style: {
            color: "#00e5ff",
            weight: 2.2,
            opacity: 0.9,
          },
        });
        if (this.showCoastline && this.map) {
          this.coastlineLayer.addTo(this.map);
        }
      } catch (err) {
        console.warn("加载大亚湾海岸线失败:", err);
      }
    },

    /**
     * 切换底图
     */
    switchBaseLayer() {
      Object.keys(this.baseLayers).forEach((key) => {
        if (this.map.hasLayer(this.baseLayers[key])) {
          this.map.removeLayer(this.baseLayers[key]);
        }
      });
      if (this.baseLayers[this.baseLayerType]) {
        this.baseLayers[this.baseLayerType].addTo(this.map);
      }
    },

    /**
     * 初始化 Token 并执行首次流场加载
     */
    async initTokenAndFlow() {
      try {
        const liveToken = await getNhhyybToken();
        if (liveToken) {
          this.currentToken = liveToken;
          this.tokenInput = liveToken;
        }
      } catch (e) {
        console.warn("[AdaptiveFlow] 获取网关 Token 失败，使用备用 Token");
      }
      this.refreshAllFlow();
    },

    /**
     * 地图拖拽或缩放结束后触发自适应调度 (防抖 350ms)
     */
    onMapMoveEnd() {
      if (!this.map) return;
      this.currentZoom = this.map.getZoom();

      if (this.moveDebounceTimer) {
        clearTimeout(this.moveDebounceTimer);
      }

      // 防抖 350ms
      this.moveDebounceTimer = setTimeout(() => {
        if (!this.map) return;
        const zoom = this.map.getZoom();
        this.currentZoom = zoom;

        if (!isFineFlowZoom(zoom)) {
          // 【图层 1】：当 zoom < 14 时，移除微观高精叠加层，只使用 1km 宏观底图
          if (this.fineVelocityLayer || this.fineNcData) {
            this.removeFineVelocityLayer();
            this.fineNcData = null;
            this.finePointCount = 0;
            this.fineBBox = "";
            this.currentFineCenterDesc = "";
            this.lastFineCenter = null;
          }
          // 视口平移后更新宏观底图
          this.fetchMacroFlowData();
        } else {
          // 【图层 2】：当 zoom >= 14 时，按大亚湾原厂阶梯规则动态辐射高精切片
          this.fetchFineRadiationFlowData();
        }
      }, 350);
    },

    /**
     * 刷新所有流场数据
     */
    async refreshAllFlow() {
      if (!this.map) return;
      const zoom = this.map.getZoom();
      this.currentZoom = zoom;

      await this.fetchMacroFlowData();
      if (isFineFlowZoom(zoom)) {
        await this.fetchFineRadiationFlowData();
      }
    },

    /**
     * 图层 1：拉取宏观 1km 流场底图 (dywhdz:test, layers: 1761, 步长 0.009°)
     */
    async fetchMacroFlowData() {
      if (!this.map) return;

      const bounds = this.map.getBounds();
      const reqConfig = buildMacro1kmFlowRequest({
        bounds,
        time: this.currentTime,
        customToken: this.currentToken,
      });

      this.macroBBox = reqConfig.bBox;
      this.currentWmsUrl = reqConfig.url;
      const thisReqId = ++this.macroRequestId;
      this.isLoadingMacro = true;

      try {
        const result = await imageToNcJson(reqConfig.url, 1);
        if (thisReqId !== this.macroRequestId) {
          console.log(`[AdaptiveFlow] 丢弃过时宏观请求 #${thisReqId}`);
          return;
        }

        this.macroNcData = result.ncData;
        this.macroMetaData = result.metaData;
        if (result.ncData && result.ncData[0]) {
          this.macroHeader = result.ncData[0].header;
          const uArr = result.ncData[0].data || [];
          this.macroPointCount = uArr.filter((v) => v !== null && v !== -9999).length;
        }

        this.renderMacroLayer();
        this.renderAuxiliaryLayers();
      } catch (err) {
        if (thisReqId === this.macroRequestId) {
          console.error("[AdaptiveFlow] 宏观底图拉取失败:", err);
          this.$message.error(`宏观底图加载异常: ${err.message || "服务无响应"}`);
        }
      } finally {
        if (thisReqId === this.macroRequestId) {
          this.isLoadingMacro = false;
        }
      }
    },

    /**
     * 图层 2：拉取微观高精流场 (完全对齐大亚湾原工程阶梯自适应规则)
     */
    async fetchFineRadiationFlowData() {
      if (!this.map) return;

      const currentZoom = this.map.getZoom();
      if (!isFineFlowZoom(currentZoom)) return;

      const center = this.map.getCenter();
      this.currentFineCenterDesc = `${center.lat.toFixed(4)}°N, ${center.lng.toFixed(4)}°E`;

      const reqConfig = buildDayaBayAdaptiveRequest({
        center,
        zoom: currentZoom,
        time: this.currentTime,
        customToken: this.currentToken,
      });

      if (!reqConfig.isFine) return;

      this.fineBBox = reqConfig.bboxStr;
      this.currentWmsUrl = reqConfig.url;
      const thisReqId = ++this.fineRequestId;
      this.isLoadingFine = true;

      try {
        const result = await imageToNcJson(reqConfig.url, 1);
        if (thisReqId !== this.fineRequestId) {
          console.log(`[AdaptiveFlow] 丢弃过时高精请求 #${thisReqId}`);
          return;
        }

        this.fineNcData = result.ncData;
        this.fineMetaData = result.metaData;
        if (result.ncData && result.ncData[0]) {
          this.fineHeader = result.ncData[0].header;
          const uArr = result.ncData[0].data || [];
          this.finePointCount = uArr.filter((v) => v !== null && v !== -9999).length;
        }

        this.lastFineCenter = { lat: center.lat, lng: center.lng };
        this.renderFineLayer();
        this.renderAuxiliaryLayers();
        this.$message.success(`【${reqConfig.label}】${reqConfig.desc} 高精流场已叠加上去！(有效格点: ${this.finePointCount.toLocaleString()})`);
      } catch (err) {
        if (thisReqId === this.fineRequestId) {

          console.error("[AdaptiveFlow] 高精流场叠加失败:", err);
          this.$message.error(`高精流场叠加异常: ${err.message || "服务无响应"}`);
        }
      } finally {
        if (thisReqId === this.fineRequestId) {
          this.isLoadingFine = false;
        }
      }
    },

    /**
     * 创建通用 VelocityLayer 实例 (粒子动画参数全面对齐大亚湾流场 DayaBayFlowPage)
     */
    createVelocityLayerInstance(ncData, pane = "flowTopPane") {
      const layerData = ncData.map((item) => ({
        header: item.header,
        data: item.data,
      }));

      return new L.velocityLayer({
        pane,
        displayValues: false,
        displayOptions: {
          velocityType: "Current",
          displayPosition: "bottomleft",
          displayEmptyString: "无流速数据",
        },
        data: layerData,
        maxVelocity: 0.45,
        lineWidth: this.particleLineWidth,
        velocityScale: this.velocityScale,
        particleMultiplier: this.particleDensity,
        frameRate: 25,
        colorScale: [
          "rgb(32, 34, 139)",
          "rgb(35, 56, 241)",
          "rgb(38, 181, 245)",
          "rgb(71, 241, 202)",
          "rgb(199, 245, 82)",
          "rgb(243, 171, 39)",
          "rgb(242, 49, 41)",
          "rgb(138, 34, 33)",
        ],
      });
    },

    /**
     * 渲染图层 1：宏观流场底图
     */
    renderMacroLayer() {
      if (!this.showParticles || !this.macroNcData || !this.map) {
        this.removeMacroVelocityLayer();
        return;
      }

      const layerData = this.macroNcData.map((item) => ({
        header: item.header,
        data: item.data,
      }));

      if (this.macroVelocityLayer) {
        this.macroVelocityLayer.setData(layerData);
      } else {
        this.macroVelocityLayer = this.createVelocityLayerInstance(this.macroNcData, "flowMacroPane");
        this.macroVelocityLayer.onAdd(this.map);
      }
    },

    removeMacroVelocityLayer() {
      if (this.macroVelocityLayer) {
        try {
          this.macroVelocityLayer.onRemove(this.map);
        } catch (e) {}
        this.macroVelocityLayer = null;
      }
    },

    /**
     * 渲染图层 2：微观 10m 高精辐射叠加层
     */
    renderFineLayer() {
      if (!this.showParticles || !this.fineNcData || !this.map || this.currentZoom < 15) {
        this.removeFineVelocityLayer();
        return;
      }

      const layerData = this.fineNcData.map((item) => ({
        header: item.header,
        data: item.data,
      }));

      if (this.fineVelocityLayer) {
        this.fineVelocityLayer.setData(layerData);
      } else {
        this.fineVelocityLayer = this.createVelocityLayerInstance(this.fineNcData, "flowFinePane");
        this.fineVelocityLayer.onAdd(this.map);
      }
    },

    removeFineVelocityLayer() {
      if (this.fineVelocityLayer) {
        try {
          this.fineVelocityLayer.onRemove(this.map);
        } catch (e) {}
        this.fineVelocityLayer = null;
      }
    },

    /**
     * 粒子参数控制响应 (双图层联动更新)
     */
    onParticleParamChange() {
      if (this.macroVelocityLayer) {
        this.macroVelocityLayer.options.velocityScale = this.velocityScale;
        this.macroVelocityLayer.options.particleMultiplier = this.particleDensity;
        this.macroVelocityLayer.options.lineWidth = this.particleLineWidth;
        if (this.macroNcData) {
          this.renderMacroLayer();
        }
      }

      if (this.fineVelocityLayer) {
        this.fineVelocityLayer.options.velocityScale = this.velocityScale;
        this.fineVelocityLayer.options.particleMultiplier = this.particleDensity;
        this.fineVelocityLayer.options.lineWidth = this.particleLineWidth;
        if (this.fineNcData) {
          this.renderFineLayer();
        }
      }
    },

    /**
     * 渲染所有图层总调度
     */
    renderLayers() {
      if (!this.map) return;

      if (this.showParticles) {
        this.renderMacroLayer();
        if (this.currentZoom >= 15) {
          this.renderFineLayer();
        }
      } else {
        this.removeMacroVelocityLayer();
        this.removeFineVelocityLayer();
      }

      this.renderAuxiliaryLayers();
    },

    /**
     * 渲染辅助图层 (原始物理网格、矢量箭头、标量面场)
     */
    renderAuxiliaryLayers() {
      // 优先使用高精数据，若无高精则使用宏观底图数据
      const activeNcData = (this.currentZoom >= 15 && this.fineNcData) ? this.fineNcData : this.macroNcData;
      const activeMetaData = (this.currentZoom >= 15 && this.fineMetaData) ? this.fineMetaData : this.macroMetaData;

      if (!activeNcData || !this.map) return;

      // 1. 原始网格与矢量箭头图层
      const anyFeatureEnabled = this.showGrid || this.showArrows || this.showValues || this.showCellFill;
      if (!anyFeatureEnabled) {
        if (this.rawGridLayer) {
          this.map.removeLayer(this.rawGridLayer);
          this.rawGridLayer = null;
        }
      } else {
        const layerOptions = {
          showGrid: this.showGrid,
          showArrows: this.showArrows,
          showValues: this.showValues,
          showCellFill: this.showCellFill,
          arrowBaseLength: 16,
          arrowHeadSize: 5,
          arrowWidth: 1.8,
          fixedLengthArrow: false,
        };

        if (this.rawGridLayer) {
          L.setOptions(this.rawGridLayer, layerOptions);
          this.rawGridLayer.setData(activeNcData, activeMetaData);
        } else {
          this.rawGridLayer = rawGridArrowLayer(activeNcData, activeMetaData, layerOptions);
          this.rawGridLayer.addTo(this.map);
        }
      }

      // 2. 连续流速标量面场
      if (!this.showScalar) {
        if (this.scalarLayer) {
          try {
            this.map.removeLayer(this.scalarLayer);
          } catch (e) {}
          this.scalarLayer = null;
        }
      } else {
        const uVar = activeNcData[0];
        const vVar = activeNcData[1];
        if (uVar) {
          const uArr = uVar.data || [];
          const vArr = vVar ? vVar.data || [] : [];
          const speedData = [];

          for (let i = 0; i < uArr.length; i++) {
            const u = uArr[i];
            const v = vArr[i];
            if (u === null || u === undefined || u === -9999 || isNaN(u)) {
              speedData.push(null);
            } else {
              speedData.push(Math.sqrt(u * u + v * v));
            }
          }

          const scalarDataset = [
            {
              header: uVar.header,
              data: speedData,
            },
          ];

          if (this.scalarLayer) {
            this.scalarLayer.setData(scalarDataset);
          } else if (typeof L.scalarTileLayer === "function") {
            this.scalarLayer = L.scalarTileLayer({
              minValue: 0.01,
              maxValue: 1.5,
              overlayOpacity: 0.75,
            });
            this.scalarLayer.addTo(this.map);
            this.scalarLayer.setData(scalarDataset);
          }
        }
      }
    },

    /**
     * 鼠标移动实时探针：优先从高精图层探测，超出则回退宏观底图
     */
    onMapMouseMove(e) {
      const { lat, lng } = e.latlng;

      // 优先从 fineHeader 探取
      if (this.currentZoom >= 15 && this.fineHeader && this.fineNcData && this.fineNcData[0]) {
        const h = this.fineHeader;
        const col = Math.round((lng - h.lo1) / h.dx);
        const row = Math.round((h.la1 - lat) / Math.abs(h.dy));

        if (col >= 0 && col < h.nx && row >= 0 && row < h.ny) {
          const idx = row * h.nx + col;
          const u = this.fineNcData[0].data ? this.fineNcData[0].data[idx] : null;
          const v = this.fineNcData[1] && this.fineNcData[1].data ? this.fineNcData[1].data[idx] : null;

          if (u !== null && u !== undefined && u !== -9999 && !isNaN(u)) {
            const speed = Math.sqrt(u * u + (v || 0) * (v || 0));
            let dir = (Math.atan2(v || 0, u) * 180) / Math.PI;
            dir = (90 - dir + 360) % 360;
            this.hoverInfo = { active: true, lat, lng, speed, direction: dir };
            return;
          }
        }
      }

      // 回退从 macroHeader 探取
      if (this.macroHeader && this.macroNcData && this.macroNcData[0]) {
        const h = this.macroHeader;
        const col = Math.round((lng - h.lo1) / h.dx);
        const row = Math.round((h.la1 - lat) / Math.abs(h.dy));

        if (col >= 0 && col < h.nx && row >= 0 && row < h.ny) {
          const idx = row * h.nx + col;
          const u = this.macroNcData[0].data ? this.macroNcData[0].data[idx] : null;
          const v = this.macroNcData[1] && this.macroNcData[1].data ? this.macroNcData[1].data[idx] : null;

          if (u !== null && u !== undefined && u !== -9999 && !isNaN(u)) {
            const speed = Math.sqrt(u * u + (v || 0) * (v || 0));
            let dir = (Math.atan2(v || 0, u) * 180) / Math.PI;
            dir = (90 - dir + 360) % 360;
            this.hoverInfo = { active: true, lat, lng, speed, direction: dir };
            return;
          }
        }
      }

      this.hoverInfo = {
        active: true,
        lat,
        lng,
        speed: null,
        direction: null,
      };
    },

    /**
     * 快速视角定位
     */
    flyToSouthChinaSea() {
      if (this.map) {
        this.map.flyTo(MACRO_FLOW_CONFIG.defaultCenter, MACRO_FLOW_CONFIG.defaultZoom, { duration: 1.2 });
      }
    },

    flyToBayArea() {
      if (this.map) {
        this.map.flyTo([22.3, 114.2], 9, { duration: 1.2 });
      }
    },

    flyToDayaBayBay() {
      if (this.map) {
        this.map.flyTo([22.56, 114.58], 11, { duration: 1.2 });
      }
    },

    flyToDayaBayCore() {
      if (this.map) {
        // 直接飞到核电站核心区并缩放至 Zoom 15，自动触发中心辐射 8km 的 10m 高精流场叠加
        this.map.flyTo([22.598, 114.545], 15, { duration: 1.2 });
      }
    },

    /**
     * 鉴权 Token 操作
     */
    applyCustomToken() {
      if (!this.tokenInput || !this.tokenInput.trim()) {
        this.$message.warning("请输入有效 Token");
        return;
      }
      const tok = this.tokenInput.trim();
      setNhhyybToken(tok);
      this.currentToken = tok;
      this.isUsingAutoToken = false;
      this.$message.success("Token 已成功更新");
      this.refreshAllFlow();
    },

    async syncGatewayToken() {
      this.isRefreshingToken = true;
      try {
        resetToAutoToken();
        const liveToken = await getNhhyybToken(true);
        this.currentToken = liveToken;
        this.tokenInput = liveToken;
        this.isUsingAutoToken = true;
        this.$message.success(`已同步最新网关 Token: ${liveToken}`);
        this.refreshAllFlow();
      } catch (err) {
        this.$message.error(`同步网关 Token 失败: ${err.message}`);
      } finally {
        this.isRefreshingToken = false;
      }
    },

    /**
     * 复制当前请求完整 URL
     */
    copyCurrentWmsUrl() {
      if (!this.currentWmsUrl) return;
      if (navigator && navigator.clipboard) {
        navigator.clipboard.writeText(this.currentWmsUrl).then(() => {
          this.$message.success("已复制完整 WMS 请求链接至剪贴板！");
        });
      } else {
        this.$message.info(`当前 URL: ${this.currentWmsUrl}`);
      }
    },
  },
};
</script>

<style scoped>
.adaptive-flow-page {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #0b132b;
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

.map-container {
  width: 100%;
  height: 100%;
  z-index: 1;
}

/* 顶部状态与控制栏 */
.top-bar {
  position: absolute;
  top: 12px;
  left: 12px;
  right: 12px;
  z-index: 1000;
  background: rgba(13, 27, 42, 0.88);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 229, 255, 0.35);
  border-radius: 8px;
  padding: 8px 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
}

.top-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}

.title-group {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}

.main-title {
  font-size: 15px;
  font-weight: 700;
  color: #00e5ff;
  letter-spacing: 0.5px;
}

.badge {
  display: inline-flex;
  align-items: center;
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 4px;
  font-weight: 500;
}

.model-badge {
  transition: all 0.3s ease;
}

.badge-fine {
  background: rgba(82, 196, 26, 0.2);
  color: #52c41a;
  border: 1px solid rgba(82, 196, 26, 0.5);
}

.badge-macro {
  background: rgba(24, 144, 255, 0.2);
  color: #1890ff;
  border: 1px solid rgba(24, 144, 255, 0.5);
}

.res-badge {
  background: rgba(255, 255, 255, 0.08);
  color: #e6f7ff;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.time-badge {
  background: rgba(250, 140, 22, 0.15);
  color: #fa8c16;
  border: 1px solid rgba(250, 140, 22, 0.4);
}

.status-badge {
  background: rgba(0, 229, 255, 0.12);
  color: #00e5ff;
  border: 1px solid rgba(0, 229, 255, 0.3);
}

.status-loading {
  background: rgba(250, 173, 20, 0.2);
  color: #faad14;
  border-color: #faad14;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% { opacity: 0.6; }
  50% { opacity: 1; }
  100% { opacity: 0.6; }
}

.top-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}


/* 悬浮控制面板 */
.control-panel {
  position: absolute;
  top: 70px;
  right: 12px;
  width: 320px;
  max-height: calc(100vh - 180px);
  background: rgba(13, 27, 42, 0.92);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(0, 229, 255, 0.25);
  border-radius: 8px;
  z-index: 1000;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease;
  overflow: hidden;
}

.control-panel.collapsed {
  width: 42px;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 14px;
  background: rgba(0, 229, 255, 0.1);
  border-bottom: 1px solid rgba(0, 229, 255, 0.2);
  cursor: pointer;
  user-select: none;
}

.header-title {
  font-size: 13px;
  font-weight: 600;
  color: #00e5ff;
  white-space: nowrap;
}

.toggle-arrow {
  font-size: 12px;
  color: #00e5ff;
}

.panel-content {
  padding: 12px 14px;
  overflow-y: auto;
  font-size: 12px;
}

.section-title {
  font-size: 12px;
  font-weight: 600;
  color: #70c4ff;
  margin-bottom: 6px;
  border-left: 3px solid #00e5ff;
  padding-left: 6px;
}

.info-card {
  background: rgba(0, 0, 0, 0.35);
  border-radius: 6px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.info-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
  font-size: 11px;
}

.info-row .label {
  color: #8fa0b5;
}

.info-row .val {
  color: #e6f7ff;
  font-weight: 500;
}

.info-row .val.highlight {
  color: #52c41a;
  font-weight: 600;
}

.info-row .val.code-font {
  font-family: monospace;
  font-size: 10px;
  max-width: 190px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.token-setting-box {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  padding: 8px;
}

.token-input-row {
  display: flex;
  align-items: center;
}

.token-status-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4px;
}

.token-tip {
  font-size: 10px;
  color: #8fa0b5;
}

.custom-radio-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.checkbox-row {
  margin-bottom: 6px;
  font-size: 11px;
  color: #d1e2f2;
}

.checkbox-row label {
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
}

.slider-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
  font-size: 11px;
  color: #8fa0b5;
}

.slider-row input[type="range"] {
  width: 140px;
}

/* 鼠标实时探测探针 */
.mouse-probe-card {
  position: absolute;
  bottom: 18px;
  left: 14px;
  z-index: 1000;
  background: rgba(13, 27, 42, 0.88);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 229, 255, 0.35);
  border-radius: 6px;
  padding: 6px 12px;
  font-size: 11px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
}

.probe-title {
  color: #00e5ff;
  font-weight: 600;
  margin-bottom: 2px;
}

.probe-content {
  display: flex;
  gap: 12px;
  color: #e6f7ff;
}

.probe-speed {
  color: #52c41a;
  font-weight: 600;
}

/* 流速图例 */
.legend-card {
  position: absolute;
  bottom: 18px;
  right: 14px;
  z-index: 1000;
  background: rgba(13, 27, 42, 0.9);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 229, 255, 0.35);
  border-radius: 8px;
  padding: 8px 14px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5);
}

.legend-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 6px;
}

.legend-title {
  font-size: 12px;
  font-weight: 600;
  color: #00e5ff;
}

.legend-subtitle {
  font-size: 10px;
  color: #8fa0b5;
}

.legend-scale-row {
  display: flex;
  align-items: center;
  gap: 6px;
}

.legend-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}

.legend-arrow-icon {
  width: 24px;
  height: 12px;
}

.legend-label {
  font-size: 10px;
  color: #d1e2f2;
}

/* 加载遮罩 */
.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(11, 19, 43, 0.4);
  backdrop-filter: blur(3px);
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
