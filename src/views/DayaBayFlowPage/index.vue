<template>
  <div class="dayabay-flow-page">
    <!-- Leaflet 地图容器 -->
    <div id="dayabay-map" class="map-container"></div>

    <!-- 顶部控制条与大亚湾状态 -->
    <div class="top-bar">
      <div class="title-group">
        <span class="main-title">大亚湾海流场对比 (无补缺原始数据)</span>
        <span class="coord-badge" @click="resetToDayaBay" title="点击重新聚焦大亚湾核电站">
          ⚡ 大亚湾核电站 [22.6050°N, 114.5530°E]
        </span>
      </div>

      <div class="top-actions">
        <!-- 若有多张图片时提供简洁的切图下拉，无需播放轴 -->
        <a-select
          v-if="imageList.length > 1"
          v-model="selectedImageIndex"
          style="width: 180px;"
          size="small"
          @change="onImageSelectChange"
        >
          <a-select-option
            v-for="(item, idx) in imageList"
            :key="idx"
            :value="idx"
          >
            {{ item.name }}
          </a-select-option>
        </a-select>

        <!-- 本地图片上传测试 -->
        <input
          type="file"
          ref="fileInput"
          accept="image/png"
          multiple
          class="hidden-input"
          @change="handleFilesUpload"
        />
        <a-button type="primary" size="small" icon="upload" @click="triggerUpload">
          上传流场图片 (.png)
        </a-button>

        <a-button size="small" icon="compass" @click="resetToBayCenter">
          复位视角
        </a-button>

        <a-button size="small" icon="environment" @click="resetToNuclearPlant">
          定位核电站
        </a-button>

        <a-button size="small" icon="sync" @click="reloadCurrent">
          重新解析
        </a-button>
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
          <a-radio value="dayabay_satellite">
            <b>🌊 大亚湾海陆分离图包 (sea海底 + land陆罩)</b>
          </a-radio>
          <a-radio value="esri_satellite">🛰️ ESRI 全球遥感卫星底图</a-radio>
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
          <div><span>当前图片:</span> {{ currentItemName }}</div>
          <div><span>分辨率:</span> dx={{ currentMetaData.dx }}, dy={{ currentMetaData.dy }}</div>
          <div><span>网格规模:</span> {{ currentMetaData.xCount }} × {{ currentMetaData.yCount }} ({{ (currentMetaData.xCount * currentMetaData.yCount).toLocaleString() }} 格点)</div>
          <div><span>有效数据点:</span> {{ validPointCount.toLocaleString() }}</div>
        </div>
        <div class="meta-empty" v-else>
          暂无数据，请上传或在 public/data/dayabay/ 放置图片
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


  </div>
</template>

<script>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../../utils/leaflet-vector-scalar.js";
import { imageToNcJson } from "../../utils/ImageDataUtils.js";
import { rawGridArrowLayer } from "./RawGridArrowLayer.js";

// 参考项目中的两大核心坐标：
// 1. 大亚湾海湾几何中心 (参考项目地图初始化与全局复位视角，出处: environmental-monitoring.vue: 196)
const BAY_CENTER_COORD = [22.5934, 114.619];
// 2. 大亚湾核电厂陆基/警戒圈圆心 (参考项目核电基站点与1km/2km/3km警戒线圆心，出处: utils.ts: 260, 289)
const NUCLEAR_PLANT_COORD = [22.605, 114.553];
const DEFAULT_ZOOM = 12;

// 大亚湾参考工程专用图包服务接口（原项目 public/config/index.js 同款服务）
const DAYABAY_TILE_BASE = "https://www.dyboceansentry.com/bus/api/v1/map/arcgis/tile";

export default {
  name: "DayaBayFlowPage",
  data() {
    return {
      map: null,
      isPanelCollapsed: false,

      // 当前底图图包类型（默认使用大亚湾海陆分离图包: sea海底 + land陆罩）
      currentBaseLayerType: "dayabay_satellite",
      showLandMask: true, // 是否启用顶层陆地遮罩
      baseLayers: null,

      // 图层显隐开关
      showGrid: true, // 原始物理网格线 (一格一格)
      showArrows: true, // 原始数据矢量箭头 (零抽稀，1:1格点)
      showGridFill: false, // 网格单元流速填充
      showParticles: true, // 流场粒子
      showScalar: false, // 标量场

      // 采样率（默认 1: 100% 原始格点，零抽稀）
      samplingFactor: 1,

      // 渲染参数
      velocityScale: 0.15,
      particleDensity: 0.003,
      particleLineWidth: 2,
      scalarOpacity: 0.7,

      // 图层实例
      velocityLayer: null,
      rawGridArrowLayerInstance: null,
      scalarLayer: null,

      // 图片列表
      selectedImageIndex: 0,
      imageList: [],

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
    currentItemName() {
      if (this.imageList.length > 0 && this.imageList[this.selectedImageIndex]) {
        return this.imageList[this.selectedImageIndex].name;
      }
      return "--";
    },
  },
  mounted() {
    this.initMap();
    this.initPredefinedSamples();
  },
  beforeDestroy() {
    this.clearAllLayers();
    if (this.map) {
      this.map.remove();
      this.map = null;
    }
  },
  methods: {
    /**
     * 初始化 Leaflet 地图并聚焦大亚湾
     */
    initMap() {
      // 默认初始化视角完全对齐原大亚湾项目全局中心 [22.5934, 114.6190]，zoom 12
      this.map = L.map("dayabay-map", {
        center: BAY_CENTER_COORD,
        zoom: DEFAULT_ZOOM,
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

      // 初始化各套图包实例（原大亚湾项目同款）
      this.baseLayers = {
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
        this.baseLayers.dayabay_sea,
        this.baseLayers.dayabay_land,
        this.baseLayers.esri_satellite,
        this.baseLayers.dayabay_electronic,
      ].forEach((layer) => {
        if (layer && this.map.hasLayer(layer)) {
          this.map.removeLayer(layer);
        }
      });

      if (this.currentBaseLayerType === "dayabay_satellite") {
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
        maxVelocity: 3.0,
        lineWidth: this.particleLineWidth,
        velocityScale: this.velocityScale,
        particleMultiplier: this.particleDensity,
        frameRate: 25,
        colorScale: [
          "rgb(180, 240, 255)",
          "rgb(100, 210, 255)",
          "rgb(0, 255, 128)",
          "rgb(255, 240, 0)",
          "rgb(255, 90, 0)",
          "rgb(255, 0, 0)",
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

      if (!this.showGrid && !this.showArrows && !this.showGridFill) {
        this.removeRawGridArrowLayer();
        return;
      }

      if (this.rawGridArrowLayerInstance) {
        this.rawGridArrowLayerInstance.updateOptions({
          pane: "flowTopPane",
          showGrid: this.showGrid,
          showArrows: this.showArrows,
          showCellFill: this.showGridFill,
        });
        this.rawGridArrowLayerInstance.setData(this.currentNcData, this.currentMetaData);
        return;
      }

      this.rawGridArrowLayerInstance = rawGridArrowLayer({
        pane: "flowTopPane",
        showGrid: this.showGrid,
        showArrows: this.showArrows,
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

    reloadCurrent() {
      if (this.imageList[this.selectedImageIndex]) {
        this.imageList[this.selectedImageIndex].ncData = null;
        this.loadImage(this.selectedImageIndex);
      }
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

/* 顶部状态栏 */
.top-bar {
  position: absolute;
  top: 15px;
  left: 20px;
  right: 20px;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  pointer-events: none;
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
  top: 70px;
  right: 20px;
  width: 290px;
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

/* 鼠标探测器 */
.cursor-probe {
  position: absolute;
  top: 70px;
  left: 20px;
  background: rgba(18, 24, 38, 0.88);
  border: 1px solid rgba(24, 144, 255, 0.4);
  border-radius: 6px;
  padding: 8px 12px;
  font-size: 12px;
  line-height: 1.5;
  color: #e6f7ff;
  z-index: 1000;
  pointer-events: none;
  backdrop-filter: blur(6px);
}

.probe-title {
  color: #40a9ff;
  font-weight: bold;
  margin-bottom: 4px;
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
</style>
