<template>
  <div class="dayabay-flow-page">
    <!-- Leaflet 地图容器 -->
    <div id="dayabay-map" class="map-container"></div>

    <!-- 顶部控制条与大亚湾状态 -->
    <div class="top-bar">
      <div class="top-row">
        <div class="title-group">
          <span class="main-title">大亚湾水动力精细流场 (LAYERS:6349 · 10m网格)</span>
          <span class="realtime-badge" title="当前连接实时水动力数值预报服务">
            🟢 实时预报在线
          </span>
          <span class="coord-badge" @click="resetToNuclearPlant" title="点击重新聚焦大亚湾核电站">
            ⚡ 大亚湾核电站
          </span>
          <span class="time-badge" title="当前流场预报时刻">
            🕒 {{ currentDisplayTime }}
          </span>
          <span
            v-if="dataSourceMode === 'adaptive'"
            class="mode-badge"
            :title="'当前自适应分级: ' + adaptiveParamsDesc"
          >
            🎯 {{ adaptiveParamsDesc }}
          </span>
        </div>

        <div class="top-actions">
          <!-- 大亚湾核电站 20m 精细流场 (LAYERS:6349) -->
          <a-button
            size="small"
            :type="dataSourceMode === 'standard' ? 'primary' : 'default'"
            icon="thunderbolt"
            @click="loadStandardFlow"
            :loading="isLoadingFlow && dataSourceMode === 'standard'"
          >
            ⚡ 大亚湾精细流场 (20m网格)
          </a-button>

          <!-- 自适应分级流场 (大亚湾原厂规则) -->
          <a-button
            size="small"
            :type="dataSourceMode === 'adaptive' ? 'primary' : 'default'"
            icon="compass"
            @click="enableAdaptiveMode"
            :loading="isLoadingFlow && dataSourceMode === 'adaptive'"
          >
            🌊 视口自适应分级模式 (大亚湾规则)
          </a-button>

          <!-- 全域测试切片 -->
          <a-button
            size="small"
            :type="dataSourceMode === 'local_test' ? 'primary' : 'default'"
            icon="picture"
            @click="loadDywhdzTestImage"
            :loading="isLoadingFlow && dataSourceMode === 'local_test'"
          >
            dywhdz_test.png 测试切片
          </a-button>


          <!-- 视角与操作按钮 -->
          <a-button size="small" icon="global" @click="resetToMacroSouthChinaSea">
            全图覆盖 (测试切片全域)
          </a-button>


          <a-button size="small" icon="compass" @click="resetToBayCenter">
            海湾全景
          </a-button>

          <a-button size="small" icon="environment" @click="resetToNuclearPlant">
            定位核电站
          </a-button>

          <a-button size="small" icon="sync" @click="reloadCurrent" :loading="isLoadingFlow">
            刷新重载
          </a-button>

          <!-- 本地图片上传测试 -->
          <input
            type="file"
            ref="fileInput"
            accept="image/png"
            multiple
            class="hidden-input"
            @change="handleFilesUpload"
          />
          <a-button size="small" icon="upload" @click="triggerUpload">
            上传本地图片
          </a-button>
        </div>
      </div>
    </div>

    <!-- 悬浮图层与参数控制面板 -->
    <div class="control-panel" :class="{ collapsed: isPanelCollapsed }">
      <div class="panel-header" @click="isPanelCollapsed = !isPanelCollapsed">
        <span class="header-title">⚙️ 图层与渲染控制</span>
        <span class="toggle-arrow">{{ isPanelCollapsed ? "◀" : "▼" }}</span>
      </div>

      <div class="panel-content" v-show="!isPanelCollapsed">
        <!-- 底图图包选择 -->
        <div class="section-title">底图图包 (大亚湾专用)</div>
        <a-radio-group
          v-model="currentBaseLayerType"
          @change="switchBaseLayer"
          class="custom-radio-group"
          style="margin-bottom: 10px;"
        >
          <a-radio value="esri_satellite">
            <b style="color: #52c41a;">🛰️ ESRI 全球遥感卫星底图 (标准 WGS-84 · 零偏移 · 强烈推荐)</b>
          </a-radio>
          <a-radio value="autonavi_satellite">
            <span style="color: #faad14;">🛰️ 高德遥感卫星图 (GCJ-02 火星坐标系 · 偏移约 500 米)</span>
          </a-radio>
          <a-radio value="dayabay_satellite">
            🌊 大亚湾海陆分离图包 (sea海底 + land陆罩)
          </a-radio>
          <a-radio value="dayabay_electronic">🗺️ 大亚湾电子地图 (tianditu)</a-radio>
        </a-radio-group>


        <!-- 网格采样率 -->
        <div class="section-title">采样精度 (物理格点)</div>
        <a-radio-group
          v-model="samplingFactor"
          @change="onSamplingChange"
          class="custom-radio-group"
          style="margin-bottom: 10px;"
        >
          <a-radio :value="1">
            <span style="color: #52c41a; font-weight: 600;">1x 全量原始格点 (零抽稀，强烈推荐)</span>
          </a-radio>
          <a-radio :value="2">2x 隔一取一 (均衡)</a-radio>
          <a-radio :value="4">4x 快速测试</a-radio>
        </a-radio-group>

        <!-- 图层显隐 -->
        <div class="section-title">图层叠加 (原始数据)</div>
        <div class="checkbox-row">
          <label>
            <input type="checkbox" v-model="showCoastline" @change="toggleCoastline" />
            <b style="color: #00e5ff;">🌊 叠加官方防波堤海岸线 (大亚湾标准 WGS-84)</b>
          </label>
        </div>
        <div class="checkbox-row" v-if="currentBaseLayerType === 'dayabay_satellite'">
          <label>
            <input type="checkbox" v-model="showLandMask" @change="toggleLandMask" />
            <b>🏝️ 叠加原厂陆地图包遮罩 (land)</b>
          </label>
        </div>
        <div class="checkbox-row">
          <label>
            <input type="checkbox" v-model="showGrid" @change="toggleRawGridArrow" />
            <b>📐 原始物理网格线 (一格一格)</b>
          </label>
        </div>
        <div class="checkbox-row">
          <label>
            <input type="checkbox" v-model="showArrows" @change="toggleRawGridArrow" />
            <b>➡️ 原始数据矢量箭头 (零抽稀，1:1 格点)</b>
          </label>
        </div>
        <div class="checkbox-row">
          <label>
            <input type="checkbox" v-model="showValues" @change="toggleRawGridArrow" />
            <b style="color: #00e5ff;">🔢 格点流速数值标注 (m/s)</b>
          </label>
        </div>
        <div class="checkbox-row">
          <label>
            <input type="checkbox" v-model="showGridFill" @change="toggleRawGridArrow" />
            🎨 网格单元流速色块填充
          </label>
        </div>
        <div class="checkbox-row">
          <label>
            <input type="checkbox" v-model="showParticles" @change="toggleParticles" />
            🌊 流场粒子动画
          </label>
        </div>
        <div class="checkbox-row">
          <label>
            <input type="checkbox" v-model="showScalar" @change="toggleScalar" />
            🌈 连续流速标量场
          </label>
        </div>
        <div class="checkbox-row">
          <label>
            <input type="checkbox" v-model="showLegend" />
            <b>📊 叠加流速色阶图例 (0 ~ 0.41)</b>
          </label>
        </div>

        <!-- 粒子参数调节 -->
        <div class="section-title" style="margin-top: 10px;">粒子参数</div>
        <div class="slider-row">
          <span>流速系数: {{ velocityScale.toFixed(3) }}</span>
          <input
            type="range"
            min="0.01"
            max="0.8"
            step="0.01"
            v-model.number="velocityScale"
            @input="updateParticleParams"
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
            @input="updateParticleParams"
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
            @input="updateParticleParams"
          />
        </div>

        <!-- 标量场透明度 -->
        <div v-if="showScalar" class="slider-row">
          <span>色场透明度: {{ scalarOpacity.toFixed(2) }}</span>
          <input
            type="range"
            min="0.1"
            max="1.0"
            step="0.05"
            v-model.number="scalarOpacity"
            @input="updateScalarOpacity"
          />
        </div>

        <!-- 原始元数据卡片 -->
        <div class="section-title" style="margin-top: 12px;">图片元数据 (原始无补缺)</div>
        <div class="meta-box" v-if="currentMetaData">
          <div><span>当前图片:</span> {{ currentSourceTitle }}</div>
          <div><span>物理分辨率:</span> <b style="color: #00e5ff;">{{ currentResolutionDesc }}</b></div>
          <div><span>网格规模:</span> {{ currentMetaData.xCount }} × {{ currentMetaData.yCount }} ({{ (currentMetaData.xCount * currentMetaData.yCount).toLocaleString() }} 格点)</div>
          <div><span>有效数据点:</span> {{ validPointCount.toLocaleString() }}</div>
        </div>
        <div class="meta-empty" v-else>
          暂无数据，请点击上方 Tab 方案拉取在线流场
        </div>

        <!-- 在线流场服务参数与链接详情 -->
        <div class="section-title" style="margin-top: 12px;">🌐 水动力在线服务与实时 Token</div>
        <div class="meta-box wms-meta-box">
          <div><span>数据服务:</span> <b style="color: #52c41a;">{{ currentServiceName }}</b></div>
          <div style="margin-top: 4px; font-size: 11px; color: #aaa;">
            <span>服务类型: </span>
            <span :style="{ color: currentToken.startsWith('103_') ? '#1890ff' : '#52c41a' }">
              {{ currentToken.startsWith('103_') ? '深圳预报室专属 (szybs)' : '大亚湾核电厂专属 (dywhdz)' }}
            </span>
          </div>
          <div style="margin-top: 6px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span>鉴权 Token:</span>
              <span style="font-size: 10px; color: #52c41a;">{{ isUsingAutoToken ? '● 自动实时刷新' : '● 手动指定' }}</span>
            </div>
            <div style="display: flex; gap: 6px; margin-top: 4px;">
              <input class="form-input" style="flex: 1;" v-model="tokenInput" placeholder="输入最新 Token (如 2107_xxx 或 103_xxx)" />
              <a-button size="small" type="primary" icon="check" @click="applyNewToken">生效</a-button>
            </div>
            <div style="margin-top: 6px; display: flex; gap: 6px;">
              <a-button size="small" icon="sync" block @click="refreshAutoToken" :loading="isRefreshingToken">
                恢复网关实时 Token
              </a-button>
            </div>
          </div>
          <div v-if="currentWmsUrl" class="wms-url-box">
            <div class="url-label">在线请求 URL (实时最新):</div>
            <div class="url-text" :title="currentWmsUrl">{{ currentWmsUrl }}</div>
            <a-button size="small" type="dashed" icon="copy" block style="margin-top: 6px;" @click="copyWmsUrl">
              复制当前 WMS 请求链接
            </a-button>
          </div>
        </div>

        <!-- 自定义参数表单抽屉/卡片 -->
        <div v-if="showCustomDrawer" class="custom-drawer-card">
          <div class="custom-title">🛠️ 自定义 WMS 参数调试</div>
          <div class="form-item">
            <span class="form-label">bBox (西,南,东,北):</span>
            <input class="form-input" v-model="customForm.bBox" placeholder="114.5044,22.5598,114.6016,22.6502" />
          </div>
          <div class="form-row">
            <div class="form-item half">
              <span class="form-label">X步长 (0.00005≈5m):</span>
              <input class="form-input" type="number" step="0.00001" v-model.number="customForm.xInterval" />
            </div>
            <div class="form-item half">
              <span class="form-label">Y步长 (0.00005≈5m):</span>
              <input class="form-input" type="number" step="0.00001" v-model.number="customForm.yInterval" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-item half">
              <span class="form-label">宽度 (WIDTH):</span>
              <input class="form-input" type="number" v-model.number="customForm.width" />
            </div>
            <div class="form-item half">
              <span class="form-label">高度 (HEIGHT):</span>
              <input class="form-input" type="number" v-model.number="customForm.height" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-item half">
              <span class="form-label">图层 (LAYERS):</span>
              <input class="form-input" v-model="customForm.layers" placeholder="6349" />
            </div>
            <div class="form-item half">
              <span class="form-label">垂向层 (zlayer):</span>
              <input class="form-input" type="number" v-model.number="customForm.zlayer" placeholder="1" />
            </div>
          </div>
          <div class="form-item">
            <span class="form-label">预报时间 (time):</span>
            <input class="form-input" v-model="customForm.time" />
          </div>
          <a-button type="primary" block icon="thunderbolt" :loading="isLoadingFlow" @click="applyCustomWms" style="margin-top: 6px;">
            立即生成并渲染流场
          </a-button>
        </div>
      </div>
    </div>

    <!-- 鼠标悬停格点数据探测器 -->
    <div class="cursor-probe" v-if="hoverInfo">
      <div class="probe-title">📍 原始物理网格探测</div>
      <div>物理网格: <b>[列 {{ hoverInfo.xIndex }}, 行 {{ hoverInfo.yIndex }}]</b></div>
      <div v-if="hoverInfo.u !== null">u分量: {{ hoverInfo.u }} m/s</div>
      <div v-if="hoverInfo.v !== null">v分量: {{ hoverInfo.v }} m/s</div>
      <div v-if="hoverInfo.speed !== null">流速: <b>{{ hoverInfo.speed }}</b> m/s</div>
      <div v-if="hoverInfo.dir !== null">流向: {{ hoverInfo.dir }}°</div>
      <div v-if="hoverInfo.u === null" style="color: #bbb;">(该位置为缺测/陆地格点)</div>
    </div>


    <!-- 8 阶水动力流速标准图例 (深圳预报室水动力标定色阶) -->
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
            <!-- 箭头杆 -->
            <line x1="2" y1="7" x2="21" y2="7" :stroke="item.color" stroke-width="2.5" stroke-linecap="round" />
            <!-- 箭头尖头 -->
            <polygon points="17,3 25,7 17,11" :fill="item.color" />
          </svg>
          <span class="legend-label">{{ item.label }}</span>
        </div>
      </div>
    </div>


    <!-- 全局流场加载遮罩 -->
    <div class="loading-overlay" v-if="isLoadingFlow">
      <a-spin size="large" :tip="loadingTip" />
    </div>

  </div>
</template>

<script>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../../utils/leaflet-vector-scalar.js";
import { imageToNcJson } from "../../utils/ImageDataUtils.js";
import { rawGridArrowLayer, VELOCITY_COLOR_STOPS } from "./RawGridArrowLayer.js";
import {
  getNhhyybToken,
  setNhhyybToken,
  resetToAutoToken,
  resolveServiceName,
  buildWmsFlowUrl,
  STANDARD_FLOW_CONFIG,
  STANDARD_TOKEN,
  ADAPTIVE_FLOW_RULES,
  getFlowParamsByZoom,
  isFineFlowZoom,
  calculateBboxFromCenter,
  buildFineRequestKey,
  buildDayaBayAdaptiveRequest,
} from "../../api/nhhyyb.js";

// 参考项目中的两大核心坐标：
// 1. 大亚湾海湾几何中心 (参考项目地图初始化与全局复位视角，出处: environmental-monitoring.vue: 196)
const BAY_CENTER_COORD = [22.5934, 114.619];
// 2. 大亚湾核电厂陆基/警戒圈圆心 (参考项目核电基站点与1km/2km/3km警戒线圆心，出处: utils.ts: 260, 289)
const NUCLEAR_PLANT_COORD = [22.605, 114.553];
// 3. 深圳预报室 szybs 核心区几何中心
const SZYBS_CENTER_COORD = [22.6008, 114.5675];
// 4. 南海北部 10°×10° 宏观海域几何中心
const MACRO_SCS_COORD = [21.0, 115.0];
const DEFAULT_ZOOM = 13;

// 大亚湾参考工程专用图包服务接口（原项目 public/config/index.js 同款服务）
const DAYABAY_TILE_BASE = "https://www.dyboceansentry.com/bus/api/v1/map/arcgis/tile";

export default {
  name: "DayaBayFlowPage",
  data() {
    return {
      map: null,
      isPanelCollapsed: false,

      // 数据源模式：'standard' (大亚湾精细流场标准请求 20m网格) | 'adaptive' (大亚湾官方自适应分级模式) | 'local_test' (dywhdz_test.png 测试切片)
      dataSourceMode: "standard",
      adaptiveParamsDesc: "高精 20m (核电站核心海域)",
      adaptiveRequestId: 0,
      lastAdaptiveKey: "",
      adaptiveDebounceTimer: null,
      lastZoomWasFine: false,
      standardConfig: STANDARD_FLOW_CONFIG,
      currentToken: STANDARD_TOKEN,
      tokenInput: STANDARD_TOKEN,
      isUsingAutoToken: true,
      isRefreshingToken: false,

      currentWmsUrl: "",
      isLoadingFlow: false,
      loadingTip: "正在拉取大亚湾水动力精细流场 (LAYERS:6349 · 20m网格)...",
      showCustomDrawer: false,

      // 自定义参数表单（以大亚湾精细流场 LAYERS:6349 标准参数为准）
      customForm: {
        bBox: STANDARD_FLOW_CONFIG.bBox,
        xInterval: STANDARD_FLOW_CONFIG.xInterval,
        yInterval: STANDARD_FLOW_CONFIG.yInterval,
        width: STANDARD_FLOW_CONFIG.width,
        height: STANDARD_FLOW_CONFIG.height,
        time: STANDARD_FLOW_CONFIG.time,
        layers: STANDARD_FLOW_CONFIG.layers,
        zlayer: 1,
        shoreInterpolation: false,
      },

      // 当前底图图包类型（默认使用 ESRI 全球遥感卫星底图，标准 WGS-84，零火星坐标系偏差）
      currentBaseLayerType: "esri_satellite",
      showLandMask: true, // 是否启用顶层陆地遮罩
      showCoastline: true, // 叠加官方高精防波堤海岸线 (标准 WGS-84)
      baseLayers: null,
      coastlineLayer: null,

      // 图层显隐开关（还原本真水动力精细流场质感）
      showGrid: false, // 原始物理网格线默认关闭 (避免遮挡精细流场)
      showArrows: false, // 物理矢量箭头默认关闭 (以精细流线粒子为主)
      showValues: false, // 叠加展示格点流速数值默认关闭 (避免满屏数字污染)
      showLegend: true, // 叠加展示 8 阶流速图例
      velocityColorStops: VELOCITY_COLOR_STOPS,
      showGridFill: false, // 网格单元流速填充
      showParticles: true, // 精细流线粒子动画
      showScalar: false, // 标量场默认关闭，避免全矩形灰底盖在山体上

      // 采样率（默认 1: 100% 原始格点，零抽稀）
      samplingFactor: 1,

      // 渲染参数（完全对齐大亚湾原工程高精流场规范）
      velocityScale: 0.15,
      particleDensity: 0.015, // 粒子密度
      particleLineWidth: 2,
      scalarOpacity: 0.65,

      // 图层实例
      velocityLayer: null,
      rawGridArrowLayerInstance: null,
      scalarLayer: null,

      // 图片列表
      selectedImageIndex: 0,
      imageList: [
        {
          name: "dywhdz_test.png (测试切片)",
          url: "./data/dayabay/dywhdz_test.png",
        },
        {
          name: "20260917100000.png (历史对照)",
          url: "./data/dayabay/20260917100000.png",
        },
      ],

      // 当前解码结果 (100% 原始数据，无插值补缺)
      currentNcData: null,
      currentMetaData: null,
      currentHeader: {},
      validPointCount: 0,

      // 鼠标探测点
      hoverInfo: null,
    };
  },
  computed: {
    currentServiceName() {
      return resolveServiceName(this.currentToken);
    },
    currentDisplayTime() {
      if (this.dataSourceMode === "local_test") {
        return "dywhdz_test.png (测试切片)";
      }
      if (this.dataSourceMode === "standard") {
        return this.standardConfig.time || "2026-09-18 15:00";
      }
      return "--";
    },
    currentItemName() {
      if (this.imageList.length > 0 && this.imageList[this.selectedImageIndex]) {
        return this.imageList[this.selectedImageIndex].name;
      }
      return "--";
    },
    currentSourceTitle() {
      if (this.dataSourceMode === "local_test") {
        return "dywhdz_test.png (4050×3060 物理格点)";
      }
      if (this.dataSourceMode === "standard") {
        return this.standardConfig.name;
      }
      if (this.dataSourceMode === "custom") {
        return "自定义 WMS 流场";
      }
      return this.currentItemName;
    },
    currentResolutionDesc() {
      if (this.dataSourceMode === "local_test") {
        return "约 100m 网格 (0.001° × 0.001°)";
      }
      if (this.dataSourceMode === "standard") {
        return this.standardConfig.resolutionMeters;
      }
      if (this.currentMetaData && this.currentMetaData.dx) {
        const mX = (this.currentMetaData.dx * 102450).toFixed(1);
        const mY = (Math.abs(this.currentMetaData.dy) * 111000).toFixed(1);
        return `约 ${mX}m × ${mY}m`;
      }
      return "--";
    },
  },
  async mounted() {
    this.initMap();
    // 默认直接拉取大亚湾核电厂 20m 超精细水动力流场 (LAYERS:6349)
    try {
      await this.loadStandardFlow();
    } catch (e) {
      console.warn("在线拉取精细流场失败，回退到本地高精切片:", e);
      await this.loadFineSliceImage();
    }
  },
  beforeDestroy() {
    clearTimeout(this.adaptiveDebounceTimer);
    this.clearAllLayers();
    if (this.map) {
      this.map.off("mousemove", this.handleMapMouseMove);
      this.map.off("moveend", this.handleMapZoomOrMove);
      this.map.off("zoomend", this.handleMapZoomOrMove);
      this.map.remove();
      this.map = null;
    }
  },
  methods: {
    /**
     * 初始化 Leaflet 地图并聚焦大亚湾
     */
    initMap() {
      // 默认初始化视角聚焦大亚湾深圳预报室 szybs 标准核心海域，zoom 14
      this.map = L.map("dayabay-map", {
        center: [22.6010, 114.5669],
        zoom: 14,
        minZoom: 4,
        maxZoom: 18,
        zoomControl: false,
      });

      L.control.zoom({ position: "bottomright" }).addTo(this.map);

      // 创建大亚湾海陆分离图包专属的 Pane 分层体系：
      // 1. baseBottomPane: 承载底层海面图包 (sea)，位于所有图层最下方 (zIndex: 100)
      const baseBottomPane = this.map.createPane("baseBottomPane");
      baseBottomPane.style.zIndex = "100";

      // 2. baseTopPane: 承载顶层陆地图包 (land) (zIndex: 450)
      const baseTopPane = this.map.createPane("baseTopPane");
      baseTopPane.style.zIndex = "450";
      baseTopPane.style.pointerEvents = "none"; // 鼠标事件直接穿透至下层进行流场格点探测

      // 3. flowTopPane: 承载最顶层网格、矢量箭头与流场 (zIndex: 550)，高于陆地图包 (450)，确保网格和箭头置于最上方，永不被压住
      const flowTopPane = this.map.createPane("flowTopPane");
      flowTopPane.style.zIndex = "550";
      flowTopPane.style.pointerEvents = "none"; // 事件穿透保持底层与地图交互

      // 初始化各套图包实例（高德高清遥感 + 原大亚湾项目同款）
      this.baseLayers = {
        // 高德高清遥感卫星影像 (国内极速稳定秒出，强烈推荐)
        autonavi_satellite: L.layerGroup([
          L.tileLayer(
            "https://webst0{s}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}",
            { subdomains: ["1", "2", "3", "4"], pane: "baseBottomPane", maxZoom: 18 }
          ),
          L.tileLayer(
            "https://webst0{s}.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}",
            { subdomains: ["1", "2", "3", "4"], pane: "baseTopPane", maxZoom: 18, transparent: true }
          ),
        ]),
        // 大亚湾海陆分离图包: 底下海面图包 (sea) + 顶上陆地图包 (land)
        dayabay_sea: L.tileLayer(
          `${DAYABAY_TILE_BASE}?name=sea&x={x}&y={y}&z={z}`,
          { pane: "baseBottomPane", minZoom: 1, maxZoom: 16 }
        ),
        dayabay_land: L.tileLayer(
          `${DAYABAY_TILE_BASE}?name=land&x={x}&y={y}&z={z}`,
          { pane: "baseTopPane", minZoom: 1, maxZoom: 16 }
        ),
        // ESRI 高清遥感卫星图包
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
        // 大亚湾电子地图 (tianditu)
        dayabay_electronic: L.tileLayer(
          `${DAYABAY_TILE_BASE}?name=tianditu&x={x}&y={y}&z={z}`,
          { pane: "baseBottomPane", minZoom: 1, maxZoom: 16 }
        ),
      };


      // 默认挂载当前底图
      this.applyCurrentBaseLayer();

      // 1. 绘制大亚湾原工程同款 1km/2km/3km 警戒线 (红、黄、蓝，圆心为大亚湾核电厂 [22.6050, 114.5530])
      const warningRadii = [
        { r: 1000, color: "red" },
        { r: 2000, color: "yellow" },
        { r: 3000, color: "blue" },
      ];
      warningRadii.forEach((c) => {
        L.circle(NUCLEAR_PLANT_COORD, {
          radius: c.r,
          color: c.color,
          weight: 1.5,
          fillOpacity: 0,
          interactive: false,
        }).addTo(this.map);
      });

      // 2. 大亚湾核电站点位标记（100%复用大亚湾原工程 stationIcon.png，规格 20x28，底部正中锚点）
      const stationIcon = L.icon({
        iconUrl: require("@/assets/images/stationIcon.png"),
        iconSize: [20, 28],
        iconAnchor: [10, 28],
        popupAnchor: [0, -28],
      });

      const nuclearMarker = L.marker(NUCLEAR_PLANT_COORD, {
        icon: stationIcon,
        zIndexOffset: 2000,
        title: "大亚湾核电站",
      }).addTo(this.map);

      nuclearMarker.bindTooltip("大亚湾核电站", {
        direction: "top",
        offset: [0, -28],
      });

      this.map.on("mousemove", this.handleMapMouseMove);
      this.map.on("moveend", this.handleMapZoomOrMove);
      this.map.on("zoomend", this.handleMapZoomOrMove);

      // 加载大亚湾官方防波堤海岸线 (标准 WGS-84)
      this.loadCoastline();
    },


    /**
     * 聚焦至南海北部 10°×10° 宏观海域大视角
     */
    resetToMacroSouthChinaSea() {
      if (this.map) {
        this.map.setView(MACRO_SCS_COORD, 7);
      }
    },

    /**
     * 聚焦至大亚湾海湾中心（原项目默认全局视角）
     */
    resetToBayCenter() {
      if (this.map) {
        this.map.setView(BAY_CENTER_COORD, 12);
      }
    },

    /**
     * 聚焦至大亚湾核电厂陆基站点
     */
    resetToNuclearPlant() {
      if (this.map) {
        this.map.setView(NUCLEAR_PLANT_COORD, 14);
      }
    },

    /**
     * 应用当前底图图包配置
     */
    applyCurrentBaseLayer() {
      if (!this.map || !this.baseLayers) return;

      // 清除当前所有底图图层
      [
        this.baseLayers.autonavi_satellite,
        this.baseLayers.dayabay_sea,
        this.baseLayers.dayabay_land,
        this.baseLayers.esri_satellite,
        this.baseLayers.dayabay_electronic,
      ].forEach((layer) => {
        if (layer && this.map.hasLayer(layer)) {
          this.map.removeLayer(layer);
        }
      });

      if (this.currentBaseLayerType === "autonavi_satellite") {
        if (this.baseLayers.autonavi_satellite) {
          this.baseLayers.autonavi_satellite.addTo(this.map);
        }
      } else if (this.currentBaseLayerType === "dayabay_satellite") {
        // 1. 底下海面底图 (sea)
        this.baseLayers.dayabay_sea.addTo(this.map);
        // 2. 顶上陆地遮罩 (land)
        if (this.showLandMask) {
          this.baseLayers.dayabay_land.addTo(this.map);
        }
      } else if (this.currentBaseLayerType === "esri_satellite") {
        this.baseLayers.esri_satellite.addTo(this.map);
      } else if (this.currentBaseLayerType === "dayabay_electronic") {
        this.baseLayers.dayabay_electronic.addTo(this.map);
      }

    },

    /**
     * 底图图包切换
     */
    switchBaseLayer() {
      this.applyCurrentBaseLayer();
    },

    /**
     * 切换原厂陆地遮罩显隐
     */
    toggleLandMask() {
      if (!this.map || !this.baseLayers) return;
      if (this.currentBaseLayerType === "dayabay_satellite") {
        if (this.showLandMask) {
          if (!this.map.hasLayer(this.baseLayers.dayabay_land)) {
            this.baseLayers.dayabay_land.addTo(this.map);
          }
        } else {
          if (this.map.hasLayer(this.baseLayers.dayabay_land)) {
            this.map.removeLayer(this.baseLayers.dayabay_land);
          }
        }
      }
    },

    /**
     * 加载大亚湾官方防波堤海岸线 (标准 WGS-84)
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
          pane: "flowTopPane",
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
     * 切换官方海岸线显隐
     */
    toggleCoastline() {
      if (!this.coastlineLayer) {
        this.loadCoastline();
        return;
      }
      if (this.showCoastline) {
        this.coastlineLayer.addTo(this.map);
      } else {
        this.map.removeLayer(this.coastlineLayer);
      }
    },

    /**
     * 开启大亚湾原厂自适应分级流场模式
     */
    async enableAdaptiveMode() {
      this.dataSourceMode = "adaptive";
      const currentZoom = this.map ? this.map.getZoom() : 14;
      const nowIsFine = isFineFlowZoom(currentZoom);

      if (nowIsFine) {
        this.lastZoomWasFine = true;
        await this.loadAdaptiveSlice(true);
      } else {
        this.lastZoomWasFine = false;
        this.adaptiveParamsDesc = "宏观底图 (全域自然缩放)";
        await this.loadDywhdzTestImage();
        this.dataSourceMode = "adaptive";
      }
      this.$message.success("已激活【大亚湾原厂视口自适应分级流场】！");
    },

    /**
     * 响应地图缩放与平移的自适应调度器 (300ms防抖 + 防微颤防抖)
     */
    handleMapZoomOrMove() {
      if (this.dataSourceMode !== "adaptive" || !this.map) return;

      const currentZoom = this.map.getZoom();
      const nowIsFine = isFineFlowZoom(currentZoom);

      if (!nowIsFine) {
        this.adaptiveParamsDesc = "宏观底图 (全域自然缩放)";
        if (this.lastZoomWasFine) {
          this.lastZoomWasFine = false;
          // 从高精层级缩小回宏观层级：无缝切回宏观底图
          this.loadDywhdzTestImage().then(() => {
            this.dataSourceMode = "adaptive";
          });
        }
        return;
      }

      // 处于精细模式 (zoom >= 14)：防抖拉取当前中心点高精切片
      this.lastZoomWasFine = true;
      const flowParams = getFlowParamsByZoom(currentZoom);
      this.adaptiveParamsDesc = `${flowParams.label} · ${flowParams.desc}`;

      clearTimeout(this.adaptiveDebounceTimer);
      this.adaptiveDebounceTimer = setTimeout(() => {
        this.loadAdaptiveSlice(false);
      }, 300);
    },

    /**
     * 动态拉取当前视口中心点辐射切片 (完全对齐大亚湾原厂规则)
     */
    async loadAdaptiveSlice(force = false) {
      if (!this.map) return;
      const currentZoom = this.map.getZoom();
      if (!isFineFlowZoom(currentZoom)) return;

      const center = this.map.getCenter();
      const timeStr = this.customForm.time || "2026-09-18T15:00:00";
      const requestKey = buildFineRequestKey(currentZoom, center, timeStr);

      if (!force && requestKey === this.lastAdaptiveKey) {
        return;
      }

      const reqInfo = buildDayaBayAdaptiveRequest({
        center,
        zoom: currentZoom,
        time: timeStr,
        customToken: this.currentToken,
      });

      if (!reqInfo.isFine) return;

      const requestId = ++this.adaptiveRequestId;
      this.isLoadingFlow = true;
      this.loadingTip = `正在根据大亚湾原厂规则加载【${reqInfo.label}】切片 (${reqInfo.desc})...`;

      try {
        const result = await imageToNcJson(reqInfo.url, this.samplingFactor);

        // 防竞态与缩放状态二次检查
        if (requestId !== this.adaptiveRequestId) return;
        if (!this.map || !isFineFlowZoom(this.map.getZoom())) return;

        this.currentWmsUrl = reqInfo.url;
        this.currentNcData = result.ncData;
        this.currentMetaData = result.metaData;

        if (result.ncData && result.ncData[0]) {
          this.currentHeader = result.ncData[0].header;
          const uArr = result.ncData[0].data || [];
          this.validPointCount = uArr.filter((v) => v !== null && v !== -9999).length;
        }

        this.lastAdaptiveKey = requestKey;
        this.adaptiveParamsDesc = `${reqInfo.label} · ${reqInfo.desc}`;
        this.renderLayers();
      } catch (err) {
        console.warn("[大亚湾自适应流场] 请求或解码异常:", err);
      } finally {
        if (requestId === this.adaptiveRequestId) {
          this.isLoadingFlow = false;
        }
      }
    },

    /**
     * 加载大亚湾核电站 20m 超高精流场本地切片 (LAYERS:6349 离线备用)
     */
    async loadFineSliceImage() {
      this.dataSourceMode = "standard";
      this.isLoadingFlow = true;
      this.loadingTip = "正在加载大亚湾核电厂 20m 水动力超高精切片...";

      try {
        const sliceUrl = "./data/dayabay/dayabay_fine_slice.png";
        this.currentWmsUrl = sliceUrl;

        const result = await imageToNcJson(sliceUrl, this.samplingFactor);
        this.currentNcData = result.ncData;
        this.currentMetaData = result.metaData;

        if (result.ncData && result.ncData[0]) {
          this.currentHeader = result.ncData[0].header;
          const uArr = result.ncData[0].data || [];
          this.validPointCount = uArr.filter((v) => v !== null && v !== -9999).length;
        }

        if (this.map) {
          this.map.setView([22.6010, 114.5669], 14);
        }

        this.renderLayers();
        this.$message.success("【大亚湾核电厂 20m 水动力精细流场】加载成功！");
      } catch (err) {
        console.warn("加载本地高精切片失败，切回测试切片:", err);
        await this.loadDywhdzTestImage();
      } finally {
        this.isLoadingFlow = false;
      }
    },

    /**
     * 加载并叠加用户指定的 dywhdz_test.png 测试切片 (4050×3060 格点，大覆盖)
     */
    async loadDywhdzTestImage() {


      this.dataSourceMode = "local_test";
      this.isLoadingFlow = true;
      this.loadingTip = "正在解码并叠加 dywhdz_test.png 测试切片 (4050×3060)...";

      try {
        const testUrl = "./data/dayabay/dywhdz_test.png";
        this.currentWmsUrl = testUrl;

        const result = await imageToNcJson(testUrl, this.samplingFactor);
        this.currentNcData = result.ncData;
        this.currentMetaData = result.metaData;

        if (result.ncData && result.ncData[0]) {
          this.currentHeader = result.ncData[0].header;
          const uArr = result.ncData[0].data || [];
          this.validPointCount = uArr.filter((v) => v !== null && v !== -9999).length;
        }

        // 视口平滑聚焦该流场切片的地理中心 (经度约 113.88°, 纬度约 21.81°)
        if (this.map && this.currentMetaData) {
          const { startLon, startLat, dx, dy, xCount, yCount } = this.currentMetaData;
          const centerLng = startLon + (xCount * dx) / 2;
          const centerLat = startLat + (yCount * dy) / 2;
          this.map.setView([centerLat, centerLng], 9);
        }

        this.renderLayers();
        this.$message.success("【dywhdz_test.png】测试流场已成功叠加！");
      } catch (err) {
        console.error("加载 dywhdz_test.png 失败:", err);
        this.$message.error(`加载测试图片失败: ${err.message || "解码异常"}`);
      } finally {
        this.isLoadingFlow = false;
      }
    },

    /**
     * 加载最新标准精细水动力流场 (LAYERS:6349，约20m网格，全量真实格点)
     */
    async loadStandardFlow() {
      this.dataSourceMode = "standard";
      const config = { ...this.standardConfig };

      this.isLoadingFlow = true;
      this.loadingTip = `正在拉取【${config.name}】实时流场切片 (${config.resolutionMeters})...`;

      try {
        const token = await getNhhyybToken();
        this.currentToken = token;
        if (this.isUsingAutoToken) {
          this.tokenInput = token;
        }

        const wmsUrl = buildWmsFlowUrl(config, token);
        this.currentWmsUrl = wmsUrl;

        // 同步填入自定义调试表单方便随时微调
        this.customForm = {
          bBox: config.bBox,
          xInterval: config.xInterval,
          yInterval: config.yInterval,
          width: config.width,
          height: config.height,
          time: config.time,
          layers: config.layers,
          zlayer: config.zlayer !== undefined ? config.zlayer : 1,
          shoreInterpolation: config.shoreInterpolation !== undefined ? config.shoreInterpolation : false,
        };

        const result = await imageToNcJson(wmsUrl, this.samplingFactor);
        this.currentNcData = result.ncData;
        this.currentMetaData = result.metaData;

        if (result.ncData && result.ncData[0]) {
          this.currentHeader = result.ncData[0].header;
          const uArr = result.ncData[0].data || [];
          this.validPointCount = uArr.filter((v) => v !== null && v !== -9999).length;
        }

        // 视口平滑聚焦核心海域
        if (this.map) {
          const targetCenter = config.center || [22.6010, 114.5669];
          const targetZoom = config.defaultZoom || 14;
          this.map.setView(targetCenter, targetZoom);
        }

        this.renderLayers();
        this.$message.success(`【${config.name}】实时加载成功！分辨率: ${config.resolutionMeters}`);
      } catch (err) {
        console.error("加载流场失败:", err);
        this.$message.error(`流场加载失败: ${err.message || "请求超时或格式错误"}`);
      } finally {
        this.isLoadingFlow = false;
      }
    },

    /**
     * 切换到全域离线历史底图
     */
    selectOfflineSource() {
      this.dataSourceMode = "offline";
      this.initPredefinedSamples();
      if (this.map) {
        this.map.setView(BAY_CENTER_COORD, 12);
      }
      this.$message.info("已切换至全域离线历史底图 (100m 宏观网格)");
    },

    /**
     * 展开/收起自定义参数面板
     */
    toggleCustomParamPanel() {
      this.showCustomDrawer = !this.showCustomDrawer;
      if (this.showCustomDrawer) {
        this.dataSourceMode = "custom";
      }
    },

    /**
     * 提交自定义 WMS 参数并立即渲染
     */
    async applyCustomWms() {
      this.isLoadingFlow = true;
      this.loadingTip = "正在根据自定义参数拉取流场数据...";

      try {
        const token = await getNhhyybToken();
        this.currentToken = token;

        const wmsUrl = buildWmsFlowUrl(this.customForm, token);
        this.currentWmsUrl = wmsUrl;

        const result = await imageToNcJson(wmsUrl, this.samplingFactor);
        this.currentNcData = result.ncData;
        this.currentMetaData = result.metaData;

        if (result.ncData && result.ncData[0]) {
          this.currentHeader = result.ncData[0].header;
          const uArr = result.ncData[0].data || [];
          this.validPointCount = uArr.filter((v) => v !== null && v !== -9999).length;
        }

        // 自动根据 bBox 适配地图视角
        if (this.customForm.bBox && this.map) {
          const parts = this.customForm.bBox.split(",").map(Number);
          if (parts.length === 4 && !parts.some(isNaN)) {
            const [w, s, e, n] = parts;
            const centerLat = (s + n) / 2;
            const centerLng = (w + e) / 2;
            const span = Math.max(Math.abs(e - w), Math.abs(n - s));
            const autoZoom = span > 5 ? 7 : span > 1 ? 10 : span > 0.3 ? 12 : 14;
            this.map.setView([centerLat, centerLng], autoZoom);
          }
        }

        this.renderLayers();
        this.$message.success("自定义流场参数已成功生效并渲染！");
      } catch (err) {
        console.error("自定义流场生成失败:", err);
        this.$message.error(`自定义流场生成失败: ${err.message || "参数错误或服务端返回异常"}`);
      } finally {
        this.isLoadingFlow = false;
      }
    },

    /**
     * 恢复从网关实时获取最新活跃 Token
     */
    async refreshAutoToken() {
      this.isRefreshingToken = true;
      try {
        resetToAutoToken();
        const liveToken = await getNhhyybToken(true);
        this.currentToken = liveToken;
        this.tokenInput = liveToken;
        this.isUsingAutoToken = true;
        this.$message.success(`已成功同步网关实时 Token: ${liveToken}`);
        await this.reloadCurrent();
      } catch (err) {
        this.$message.error(`获取实时 Token 失败: ${err.message}`);
      } finally {
        this.isRefreshingToken = false;
      }
    },

    /**
     * 手动更新鉴权 Token 并立即重新拉取流场数据
     */
    applyNewToken() {
      if (!this.tokenInput || !this.tokenInput.trim()) {
        this.$message.warning("请输入有效的 Token");
        return;
      }
      const token = this.tokenInput.trim();
      setNhhyybToken(token);
      this.currentToken = token;
      this.isUsingAutoToken = false;
      this.$message.success("Token 已手动更新，正在重新拉取流场数据...");
      this.reloadCurrent();
    },

    /**
     * 复制当前请求的完整 URL 到剪贴板
     */
    copyWmsUrl() {
      if (!this.currentWmsUrl) return;
      if (navigator && navigator.clipboard) {
        navigator.clipboard.writeText(this.currentWmsUrl).then(() => {
          this.$message.success("已复制完整 WMS 请求链接至剪贴板！");
        });
      } else {
        const input = document.createElement("input");
        input.value = this.currentWmsUrl;
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);
        this.$message.success("已复制完整 WMS 请求链接至剪贴板！");
      }
    },

    /**
     * 重新拉取或重新解析当前数据
     */
    reloadCurrent() {
      if (this.dataSourceMode === "local_test") {
        this.loadDywhdzTestImage();
      } else if (this.dataSourceMode === "standard") {
        this.loadStandardFlow();
      } else if (this.dataSourceMode === "custom") {
        this.applyCustomWms();
      } else {
        this.loadImage(this.selectedImageIndex);
      }
    },

    /**
     * 初始化预置样本（直接加载放入的 20260917100000.png）
     */
    initPredefinedSamples() {
      this.imageList = [
        { name: "20260917100000.png", url: "./data/dayabay/20260917100000.png" },
      ];
      this.selectedImageIndex = 0;
      this.loadImage(0);
    },

    triggerUpload() {
      this.$refs.fileInput.click();
    },

    async handleFilesUpload(e) {
      const files = Array.from(e.target.files);
      if (!files.length) return;

      const newItems = files.map((file) => ({
        name: file.name,
        url: URL.createObjectURL(file),
        file,
      }));

      this.imageList = [...this.imageList, ...newItems];
      this.selectedImageIndex = this.imageList.length - newItems.length;
      this.loadImage(this.selectedImageIndex);
      this.$message.success(`已加载图片: ${newItems[0].name}`);
      e.target.value = "";
    },

    onImageSelectChange(index) {
      this.loadImage(index);
    },

    /**
     * 加载并解码流场图片（100% 原始数据，不作任何加权补缺）
     */
    async loadImage(index) {
      if (index < 0 || index >= this.imageList.length) return;
      const currentItem = this.imageList[index];

      try {
        let ncData = currentItem.ncData;
        let metaData = currentItem.metaData;

        if (!ncData || currentItem.cachedFactor !== this.samplingFactor) {
          const result = await imageToNcJson(currentItem.url, this.samplingFactor);
          ncData = result.ncData;
          metaData = result.metaData;
          currentItem.ncData = ncData;
          currentItem.metaData = metaData;
          currentItem.cachedFactor = this.samplingFactor;
        }

        this.currentNcData = ncData;
        this.currentMetaData = metaData;

        if (ncData && ncData[0]) {
          this.currentHeader = ncData[0].header;
          const uArr = ncData[0].data || [];
          this.validPointCount = uArr.filter((v) => v !== null && v !== -9999).length;
        }

        this.renderLayers();
      } catch (err) {
        console.error("解析流场图片失败:", err);
        this.$message.error(`解析失败: ${err.message || "图片格式错误"}`);
      }
    },

    renderLayers() {
      if (!this.currentNcData || !this.map) return;

      if (this.showParticles) {
        this.updateParticleLayer();
      } else {
        this.removeParticleLayer();
      }

      // 零抽稀原始物理网格与矢量箭头图层
      this.updateRawGridArrowLayer();

      if (this.showScalar) {
        this.updateScalarLayer();
      } else {
        this.removeScalarLayer();
      }
    },

    updateParticleLayer() {
      if (!this.currentNcData) return;

      const layerData = this.currentNcData.map((item) => ({
        header: item.header,
        data: item.data,
      }));

      if (this.velocityLayer) {
        this.velocityLayer.setData(layerData);
        return;
      }

      this.velocityLayer = new L.velocityLayer({
        pane: "flowTopPane",
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

      this.velocityLayer.onAdd(this.map);
    },

    removeParticleLayer() {
      if (this.velocityLayer) {
        try {
          this.velocityLayer.onRemove(this.map);
        } catch (e) {}
        this.velocityLayer = null;
      }
    },

    /**
     * 更新零抽稀原始物理网格与矢量箭头图层
     */
    updateRawGridArrowLayer() {
      if (!this.currentNcData || !this.map) return;

      if (!this.showGrid && !this.showArrows && !this.showGridFill && !this.showValues) {
        this.removeRawGridArrowLayer();
        return;
      }

      if (this.rawGridArrowLayerInstance) {
        this.rawGridArrowLayerInstance.updateOptions({
          pane: "flowTopPane",
          showGrid: this.showGrid,
          showArrows: this.showArrows,
          showValues: this.showValues,
          showCellFill: this.showGridFill,
        });
        this.rawGridArrowLayerInstance.setData(this.currentNcData, this.currentMetaData);
        return;
      }

      this.rawGridArrowLayerInstance = rawGridArrowLayer({
        pane: "flowTopPane",
        showGrid: this.showGrid,
        showArrows: this.showArrows,
        showValues: this.showValues,
        showCellFill: this.showGridFill,
        gridColor: "rgba(0, 220, 255, 0.45)",
        gridLineWidth: 1,
        useVelocityColor: true,
        maxVelocity: 1.5,
      });

      this.rawGridArrowLayerInstance.addTo(this.map);
      this.rawGridArrowLayerInstance.setData(this.currentNcData, this.currentMetaData);
    },

    removeRawGridArrowLayer() {
      if (this.rawGridArrowLayerInstance && this.map) {
        try {
          this.map.removeLayer(this.rawGridArrowLayerInstance);
        } catch (e) {}
        this.rawGridArrowLayerInstance = null;
      }
    },

    toggleRawGridArrow() {
      this.updateRawGridArrowLayer();
    },

    updateScalarLayer() {
      if (!this.currentNcData || !this.currentNcData[0]) return;

      const uVar = this.currentNcData[0];
      const vVar = this.currentNcData[1];
      const uData = uVar.data || [];
      const vData = vVar ? vVar.data || [] : [];
      const speedData = [];

      for (let i = 0; i < uData.length; i++) {
        const u = uData[i];
        const v = vData[i] || 0;
        if (u === null || u === -9999) {
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
        return;
      }

      if (typeof L.scalarTileLayer === "function") {
        this.scalarLayer = L.scalarTileLayer({
          minValue: 0.01,
          maxValue: 2.0,
          overlayOpacity: this.scalarOpacity,
        });
        this.scalarLayer.addTo(this.map);
        this.scalarLayer.setData(scalarDataset);
      }
    },

    removeScalarLayer() {
      if (this.scalarLayer) {
        this.map.removeLayer(this.scalarLayer);
        this.scalarLayer = null;
      }
    },

    clearAllLayers() {
      this.removeParticleLayer();
      this.removeRawGridArrowLayer();
      this.removeScalarLayer();
    },

    onSamplingChange() {
      this.reloadCurrent();
    },

    toggleParticles() {
      this.renderLayers();
    },

    toggleArrows() {
      this.renderLayers();
    },

    toggleScalar() {
      this.renderLayers();
    },

    updateParticleParams() {
      if (this.velocityLayer) {
        this.removeParticleLayer();
        this.updateParticleLayer();
      }
    },

    updateScalarOpacity() {
      if (this.scalarLayer && typeof this.scalarLayer.setOverlayOpacity === "function") {
        this.scalarLayer.setOverlayOpacity(this.scalarOpacity);
      }
    },

    handleMapMouseMove(e) {
      if (!this.currentNcData || !this.currentNcData[0]) {
        this.hoverInfo = null;
        return;
      }

      const { lat, lng } = e.latlng;
      const header = this.currentHeader;
      if (!header || !header.nx) return;

      const { lo1, la1, dx, dy, nx, ny } = header;
      const xIndex = Math.round((lng - lo1) / dx);
      const yIndex = Math.round(Math.abs(lat - la1) / dy);

      if (xIndex >= 0 && xIndex < nx && yIndex >= 0 && yIndex < ny) {
        const flatIndex = yIndex * nx + xIndex;
        const u = this.currentNcData[0].data[flatIndex];
        const v = this.currentNcData[1] ? this.currentNcData[1].data[flatIndex] : 0;

        if (u !== null && u !== -9999) {
          const speed = Math.sqrt(u * u + v * v).toFixed(2);
          const dir = ((Math.atan2(u, v) * 180) / Math.PI + 360) % 360;
          this.hoverInfo = {
            xIndex,
            yIndex,
            lat,
            lng,
            u: u.toFixed(2),
            v: v.toFixed(2),
            speed,
            dir: dir.toFixed(1),
          };
        } else {
          this.hoverInfo = { xIndex, yIndex, lat, lng, u: null, v: null, speed: null, dir: null };
        }
      } else {
        this.hoverInfo = null;
      }
    },
  },
};
</script>

<style scoped>
.dayabay-flow-page {
  position: relative;
  width: 100%;
  height: calc(100vh - 50px);
  overflow: hidden;
  background: #1a1e24;
}

.map-container {
  width: 100%;
  height: 100%;
  z-index: 1;
}

/* 顶部状态栏与核心 Tab 栏 */
.top-bar {
  position: absolute;
  top: 15px;
  left: 20px;
  right: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 10px;
  pointer-events: none;
}

.top-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}



.preset-tag.offline {
  background: #595959;
  color: #fff;
}

.custom-btn {
  border-style: dashed;
}


.title-group {
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(18, 24, 38, 0.85);
  padding: 8px 16px;
  border-radius: 6px;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  pointer-events: auto;
}

.main-title {
  color: #fff;
  font-size: 15px;
  font-weight: 600;
}

.coord-badge {
  background: rgba(24, 144, 255, 0.2);
  color: #40a9ff;
  border: 1px solid rgba(24, 144, 255, 0.4);
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
}

.coord-badge:hover {
  background: rgba(24, 144, 255, 0.35);
}

.realtime-badge {
  background: rgba(82, 196, 26, 0.15);
  color: #52c41a;
  border: 1px solid rgba(82, 196, 26, 0.4);
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 12px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.time-badge {
  background: rgba(82, 196, 26, 0.2);
  color: #52c41a;
  border: 1px solid rgba(82, 196, 26, 0.4);
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 4px;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  user-select: none;
}

.top-actions {
  display: flex;
  align-items: center;
  gap: 10px;
  pointer-events: auto;
}

.hidden-input {
  display: none;
}

/* 控制面板 */
.control-panel {
  position: absolute;
  top: 105px;
  right: 20px;
  width: 300px;
  background: rgba(18, 24, 38, 0.92);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  backdrop-filter: blur(10px);
  z-index: 1000;
  color: #e6f7ff;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);
  font-size: 13px;
  transition: width 0.2s;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 14px;
  cursor: pointer;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  user-select: none;
}

.header-title {
  font-weight: 600;
  color: #fff;
}

.toggle-arrow {
  color: #8c8c8c;
  font-size: 12px;
}

.panel-content {
  padding: 12px 14px;
  max-height: calc(100vh - 120px);
  overflow-y: auto;
}

.section-title {
  font-size: 12px;
  color: #1890ff;
  font-weight: bold;
  margin-bottom: 6px;
  text-transform: uppercase;
}

.custom-radio-group {
  display: flex !important;
  flex-direction: column !important;
  gap: 6px !important;
}

.custom-radio-group >>> .ant-radio-wrapper {
  color: #d9d9d9 !important;
  font-size: 12px !important;
  display: flex !important;
  align-items: center !important;
  margin-right: 0 !important;
}

.custom-radio-group >>> .ant-radio-inner {
  background-color: transparent !important;
  border-color: #595959 !important;
}

.custom-radio-group >>> .ant-radio-checked .ant-radio-inner {
  border-color: #1890ff !important;
}

.custom-radio-group >>> .ant-radio-checked .ant-radio-inner::after {
  background-color: #1890ff !important;
}

.checkbox-row {
  margin-bottom: 6px;
  display: flex;
  align-items: center;
}

.checkbox-row label {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
}

.slider-row {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-bottom: 8px;
  font-size: 12px;
}

.slider-row input[type="range"] {
  cursor: pointer;
}

.meta-box {
  background: rgba(0, 0, 0, 0.35);
  border-radius: 4px;
  padding: 8px 10px;
  font-size: 12px;
  line-height: 1.6;
  color: #d9d9d9;
}

.meta-box span {
  color: #8c8c8c;
}

.meta-empty {
  font-size: 12px;
  color: #8c8c8c;
  padding: 6px 0;
}

/* 5km WMS 在线参数与复制卡片 */
.wms-meta-box {
  margin-bottom: 10px;
}

.token-tag {
  font-family: monospace;
  font-size: 11px;
  background: rgba(24, 144, 255, 0.2);
  color: #40a9ff;
  padding: 1px 4px;
  border-radius: 3px;
  word-break: break-all;
}

.wms-url-box {
  margin-top: 6px;
  padding-top: 6px;
  border-top: 1px dashed rgba(255, 255, 255, 0.1);
}

.url-label {
  color: #8c8c8c;
  font-size: 11px;
}

.url-text {
  font-family: monospace;
  font-size: 10px;
  color: #91d5ff;
  background: rgba(0, 0, 0, 0.45);
  padding: 4px 6px;
  border-radius: 4px;
  word-break: break-all;
  max-height: 55px;
  overflow-y: auto;
  margin-top: 3px;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

/* 自定义参数抽屉卡片 */
.custom-drawer-card {
  margin-top: 12px;
  padding: 10px;
  background: rgba(0, 0, 0, 0.45);
  border: 1px solid rgba(24, 144, 255, 0.35);
  border-radius: 6px;
}

.custom-title {
  font-size: 12px;
  font-weight: 600;
  color: #40a9ff;
  margin-bottom: 8px;
}

.form-item {
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-bottom: 6px;
}

.form-row {
  display: flex;
  gap: 6px;
}

.form-item.half {
  flex: 1;
}

.form-label {
  font-size: 11px;
  color: #bfbfbf;
}

.form-input {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  color: #fff;
  font-size: 11px;
  padding: 3px 6px;
  outline: none;
  font-family: monospace;
}

.form-input:focus {
  border-color: #1890ff;
  background: rgba(255, 255, 255, 0.12);
}

/* 鼠标探测器 */
.cursor-probe {
  position: absolute;
  top: 105px;
  left: 20px;
  background: rgba(18, 24, 38, 0.92);
  border: 1px solid rgba(24, 144, 255, 0.5);
  border-radius: 6px;
  padding: 8px 12px;
  font-size: 12px;
  line-height: 1.5;
  color: #e6f7ff;
  z-index: 1000;
  pointer-events: none;
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
}

.probe-title {
  color: #40a9ff;
  font-weight: bold;
  margin-bottom: 4px;
}

/* 全局流场加载遮罩 */
.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2000;
  background: rgba(10, 15, 25, 0.75);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading-overlay >>> .ant-spin-text {
  color: #40a9ff !important;
  margin-top: 12px;
  font-size: 14px;
  font-weight: 500;
}

/* ================= 8 阶流速图例卡片 (深圳预报室水动力标定色阶) ================= */
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
  pointer-events: auto;
  user-select: none;
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
  filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.6));
}

.legend-label {
  font-size: 10px;
  color: #d1e2f2;
}

.mode-badge {
  display: inline-flex;
  align-items: center;
  padding: 2px 10px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  background: rgba(0, 229, 255, 0.15);
  color: #00e5ff;
  border: 1px solid rgba(0, 229, 255, 0.4);
}
</style>


<style>
/* 站点 Tooltip 样式优化 */
.leaflet-tooltip.dayabay-station-tooltip {
  background: rgba(18, 24, 38, 0.9);
  border: 1px solid rgba(24, 144, 255, 0.6);
  color: #e6f7ff;
  font-size: 12px;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
}

/* Ant Slider 科技深蓝定制 */
.slider-track-container .ant-slider {
  margin: 10px 6px;
}

.slider-track-container .ant-slider-rail {
  background-color: rgba(255, 255, 255, 0.15) !important;
  height: 4px;
}

.slider-track-container .ant-slider-track {
  background: linear-gradient(90deg, #1890ff 0%, #13c2c2 100%) !important;
  height: 4px;
}

.slider-track-container .ant-slider-handle {
  border: 2px solid #00e5ff !important;
  background-color: #121826 !important;
  box-shadow: 0 0 8px rgba(0, 229, 255, 0.8) !important;
  width: 14px;
  height: 14px;
  margin-top: -5px;
}
</style>
