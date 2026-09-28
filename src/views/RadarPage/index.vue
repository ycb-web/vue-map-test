<template>
  <div class="radar-page">
    <!-- Leaflet 地图容器 -->
    <div id="radar-map" ref="mapContainer" class="map-container"></div>

    <!-- 地图快捷浮动测距小部件 (左上角) -->
    <div class="map-floating-toolbar" @mouseenter="hideCursorTooltip">
      <button
        type="button"
        class="floating-tool-btn"
        :class="{ active: isMeasuringDistance }"
        @click="toggleMeasure"
        :title="isMeasuringDistance ? '退出测距 (双击完成当前线段)' : '开启地图测距 (点击选点，双击结束)'"
      >
        <span class="tool-icon">📏</span>
        <span class="tool-text">{{ isMeasuringDistance ? "正在测距 (双击结束)" : "测距" }}</span>
      </button>
      <button
        v-if="hasMeasureData"
        type="button"
        class="floating-clear-btn"
        @click="clearMeasure"
        title="清除所有测距痕迹"
      >
        清除
      </button>
    </div>

    <!-- 鼠标悬停实时回波胶囊 (Ventusky 1:1 风格) -->
    <div
      v-show="cursorTooltip.visible"
      class="radar-cursor-capsule"
      :style="capsuleStyle"
    >
      <span class="capsule-dbz">{{ cursorTooltip.dbz }} dBZ</span>
      <span
        v-if="cursorTooltip.typeDesc"
        class="capsule-type-tag"
        :class="'type-' + (cursorTooltip.type || 10)"
      >
        {{ cursorTooltip.typeDesc }}
      </span>
      <span
        v-if="debugParams.showExtraInfo && cursorTooltip.desc"
        class="capsule-extra"
      >
        {{ cursorTooltip.desc }} · {{ cursorTooltip.rainRate }} mm/h
      </span>
    </div>

    <!-- 右侧：图层调试参数面板 -->
    <div
      class="radar-debug-panel"
      :class="{ collapsed: panelCollapsed }"
      @mouseenter="hideCursorTooltip"
      @mousemove="hideCursorTooltip"
    >
      <!-- 面板头部 -->
      <div class="panel-header" @click="togglePanel">
        <div class="header-title">
          <span class="panel-icon">⚙️</span>
          <span>图层调试</span>
          <span class="header-time-pill" :title="'当前数据时次: ' + radarTime.localStr">
            {{ radarTime.localTimeOnly }}
          </span>
          <span v-if="panelCollapsed" class="badge-opacity">
            {{ Math.round(debugParams.opacity * 100) }}%
          </span>
        </div>
        <button
          class="toggle-btn"
          type="button"
          :title="panelCollapsed ? '展开面板' : '收起面板'"
        >
          {{ panelCollapsed ? "展开" : "收起" }}
        </button>
      </div>

      <!-- 面板主体内容 -->
      <div v-show="!panelCollapsed" class="panel-body">
        <!-- 调试面板最上方：Ventusky 1小时整点动态数据时次卡片 -->
        <div class="radar-time-card">
          <div class="time-card-top">
            <div class="time-title-group">
              <span class="live-status-dot"></span>
              <span class="time-card-title">数据时次</span>
              <span class="time-interval-tag">1h</span>
            </div>
            <div class="time-btn-group">
              <button
                type="button"
                class="time-action-btn"
                @click="stepRadarTime(-60)"
                title="上一个整点 (-1小时)"
              >
                ◀ -1h
              </button>
              <button
                type="button"
                class="time-action-btn btn-now"
                @click="resetToCurrentTime"
                title="对齐到当前时刻最新整点"
              >
                最新
              </button>
              <button
                type="button"
                class="time-action-btn"
                @click="stepRadarTime(60)"
                title="下一个整点 (+1小时)"
              >
                +1h ▶
              </button>
            </div>
          </div>

          <div class="time-main-box">
            <div class="time-primary-row">
              <span class="time-bold-clock">{{ radarTime.localTimeOnly }}</span>
              <div class="time-tags-col">
                <span class="time-tag-local">北京时间</span>
                <span class="time-tag-utc">UTC {{ radarTime.utcHourMin }}</span>
              </div>
            </div>
            <div class="time-sub-info">
              <span class="time-date-text">{{ radarTime.localDateStr }}</span>
              <span class="time-code-badge" :title="'Ventusky 检索标识: ' + radarTime.timeStr">
                {{ radarTime.timeStr }}
              </span>
            </div>
          </div>
        </div>

        <!-- 覆盖模式与大区导航 (5大核心按钮体系) -->
        <div class="control-group">
          <div class="label-row">
            <span class="control-label">雷达覆盖模式</span>
            <span class="control-value">{{ modeStatusLabel }}</span>
          </div>

          <!-- 主控自适应策略按钮 -->
          <div class="mode-strategy-grid">
            <button
              type="button"
              class="strategy-btn full-width"
              :class="{ active: currentMode === 'auto' }"
              @click="switchMode('auto')"
              title="智能自适应模式：自动根据 Zoom 与视口拉取对应数据 (1-4 全球底图，5+ 6km+2km 协同切片)"
            >
              <div class="strategy-left">
                <span class="strategy-icon">🤖</span>
                <div class="strategy-info">
                  <span class="strategy-title">全域自适应联动</span>
                  <span class="strategy-desc">1-4 全球底图 / 5+ 6km+2km</span>
                </div>
              </div>
              <span class="strategy-tag" :class="{ 'tag-active': currentMode === 'auto' }">
                {{ currentMode === 'auto' ? '运行中' : '恢复自适应' }}
              </span>
            </button>
          </div>

          <!-- 第二排：东亚、欧洲、北美三大精细大区 -->
          <div class="region-grid">
            <button
              v-for="region in regionalList"
              :key="region.id"
              type="button"
              class="region-btn"
              :class="{
                active: isRegionButtonActive(region.id),
                inview: isRegionInViewport(region.id)
              }"
              @click="switchMode(region.id)"
              :title="'切换并飞往 ' + region.name + ' 2km 精细数据'"
            >
              <div class="region-top">
                <span class="region-flag">{{ region.flag }}</span>
                <span class="region-name">{{ region.name }}</span>
              </div>
              <span class="region-tag">
                {{ getRegionButtonTag(region.id) }}
              </span>
            </button>
          </div>
        </div>

        <!-- 多尺度雷达协同监控小盒 -->
        <div class="control-group tile-status-box">
          <div class="label-row">
            <span class="control-label">雷达数据源状态</span>
            <span
              class="tile-badge"
              :class="statusBadgeClass"
            >
              {{ statusBadgeText }}
            </span>
          </div>
          <div class="tile-meta-grid">
            <div class="tile-meta-item">
              <span class="meta-label">运行模式:</span>
              <span class="meta-val highlight">{{ modeNameLabel }}</span>
            </div>
            <div class="tile-meta-item">
              <span class="meta-label">当前层级:</span>
              <span class="meta-val">Z{{ mapZoom }}</span>
            </div>
            <div class="tile-meta-item">
              <span class="meta-label">激活数据源:</span>
              <span class="meta-val highlight">{{ activeSourceLabel }}</span>
            </div>
            <div class="tile-meta-item">
              <span class="meta-label">切片缓存:</span>
              <span class="meta-val highlight">{{ activeTilesSummary }}</span>
            </div>
          </div>
          <!-- 多尺度阶梯指示器 (两级分级体系，当前 Zoom 对应行动态高亮) -->
          <div class="zoom-tier-list">
            <!-- 第 1 行: 1 - 4 全球宏观底图 -->
            <div
              class="zoom-tier-row"
              :class="{ 'is-active': mapZoom < 5 }"
              @click="setZoomLevel(3)"
              title="点击切换至 Z3 全球宏观底图视野"
            >
              <div class="tier-badge">1 - 4</div>
              <div class="tier-info">
                <div class="tier-name">全球宏观底图</div>
                <div class="tier-sub">0 切片开销 · 50KB 全景秒开</div>
              </div>
              <div class="tier-status">
                <span v-if="mapZoom < 5" class="tier-active-badge">
                  <span class="tier-dot"></span>Z{{ mapZoom }} 当前
                </span>
                <span v-else class="tier-jump-badge">缩放</span>
              </div>
            </div>

            <!-- 第 2 行: 5+ 6km + 2km 协同切片 -->
            <div
              class="zoom-tier-row"
              :class="{ 'is-active': mapZoom >= 5 }"
              @click="setZoomLevel(6)"
              title="点击切换至 Z6 6km+2km 协同精细切片视野"
            >
              <div class="tier-badge">5+</div>
              <div class="tier-info">
                <div class="tier-name">6km + 2km 协同切片</div>
                <div class="tier-sub">大区 2km 超清 + 全球 6km 避让托底</div>
              </div>
              <div class="tier-status">
                <span v-if="mapZoom >= 5" class="tier-active-badge">
                  <span class="tier-dot"></span>Z{{ mapZoom }} 当前
                </span>
                <span v-else class="tier-jump-badge">缩放</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 1. 透明度调节 -->
        <div class="control-group">
          <div class="label-row">
            <span class="control-label">图层透明度</span>
            <span class="control-value">{{ Math.round(debugParams.opacity * 100) }}%</span>
          </div>
          <input
            type="range"
            min="0.1"
            max="1.0"
            step="0.05"
            v-model.number="debugParams.opacity"
            class="range-slider"
            @input="onOpacityChange"
          />
          <div class="slider-marks">
            <span>10%</span>
            <span>50%</span>
            <span>100%</span>
          </div>
        </div>

        <!-- 2. 辅助参考图层 -->
        <div class="panel-divider"></div>
        <div class="section-title">辅助参考图层</div>

        <div class="control-group switch-row">
          <div class="control-label-group">
            <span class="control-label">网格与格点数值</span>
            <span class="grid-res-tag" v-if="debugParams.showDataGrid">({{ currentGridTypeLabel }})</span>
          </div>
          <label class="switch-toggle">
            <input
              type="checkbox"
              v-model="debugParams.showDataGrid"
              @change="toggleDataGrid"
            />
            <span class="slider-round"></span>
          </label>
        </div>

        <div class="control-group switch-row">
          <span class="control-label">精细网作用范围框</span>
          <label class="switch-toggle">
            <input
              type="checkbox"
              v-model="debugParams.showBoundaries"
              @change="toggleBoundaries"
            />
            <span class="slider-round"></span>
          </label>
        </div>

        <!-- 3. 空间距离测量 -->
        <div class="panel-divider"></div>
        <div class="section-title">实用工具</div>

        <div class="control-group measure-panel-row">
          <button
            type="button"
            class="panel-measure-btn"
            :class="{ active: isMeasuringDistance }"
            @click="toggleMeasure"
            :title="isMeasuringDistance ? '退出测距 / 双击完成测量' : '开启地图测距 (点击选点，双击结束)'"
          >
            <span class="btn-icon">📏</span>
            <span>{{ isMeasuringDistance ? "正在测距 (双击结束)" : "开启地图测距" }}</span>
          </button>
          <button
            v-if="hasMeasureData"
            type="button"
            class="panel-measure-clear"
            @click="clearMeasure"
            title="清除所有测量线段与标签"
          >
            清除
          </button>
        </div>

        <!-- 重置与操作 -->
        <div class="panel-footer">
          <button class="reset-btn" type="button" @click="resetParams">
            恢复推荐参数
          </button>
        </div>
      </div>
    </div>

    <!-- 左下角：Ventusky 官方 1:1 垂直色标柱与 HUD 面板 -->
    <div
      class="ventusky-legend-container"
      @mouseenter="hideCursorTooltip"
      @mousemove="hideCursorTooltip"
    >
      <!-- 垂直色标柱 (1:1 还原 Ventusky 官网样式) -->
      <div class="ventusky-vertical-scale">
        <div class="scale-header">
          <span class="scale-text">dBZ</span><span class="scale-arrow">›</span>
        </div>
        <div
          v-for="item in legendSwatches"
          :key="item.label"
          class="scale-row"
          :style="{ backgroundColor: item.color, color: item.textColor }"
          :title="item.label + ' dBZ' + (item.desc ? ' · ' + item.desc : '')"
        >
          {{ item.label }}
        </div>
      </div>

      <!-- 地图状态 HUD 胶囊 (经纬度坐标 + 当前缩放 Zoom) -->
      <div class="hud-status-badge">
        <div class="hud-item hud-coord">
          <span class="hud-icon">📍</span>
          <span class="hud-val" v-if="mousePos.lng && mousePos.lat">
            {{ mousePos.lng }}, {{ mousePos.lat }}
          </span>
          <span class="hud-val hud-placeholder" v-else>光标移入拾取坐标</span>
        </div>
        <div class="hud-item hud-zoom">
          <span class="hud-val zoom-highlight" :class="{ 'zoom-regional': mapZoom >= 5 }">
            Zoom: {{ mapZoom }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../../utils/leaflet-radar-tile";
import {
  getRecentRadarTime,
  isPointInHighResRegion,
} from "../../utils/leaflet-radar-tile";
import DrawPlug from "@/utils/DrawPlug";

export default {
  name: "RadarPage",
  data() {
    return {
      map: null,
      radarTime: getRecentRadarTime(), // 1小时整点对齐的动态数据时次 (如 16:38 -> 16:00)
      isAutoTimeSync: true, // 跨越 1 小时整点窗口时是否自动刷新
      radarLayer: null,
      woradLayer: null, // 全球 6km 宏观雷达底图 (负责 Zoom 1-4 全球单张底图，>=5 视口切片与避让)
      regionalLayers: {}, // 区域 2km 精细化切片雷达池 (earad, eurad, usrad)，负责 Zoom >= 5 协同切片与网格调度
      isMeasuringDistance: false, // 是否处于地图测距交互中
      hasMeasureData: false, // 当前地图是否存在已完成的测距线条与标签
      activeRegionsInViewport: [], // 当前视口内相交的精细大区 ID 列表
      regionalStats: {
        worad_hres: { cached: 0, total: 198 },
        earad: { cached: 0, total: 35 },
        eurad: { cached: 0, total: 70 },
        usrad: { cached: 0, total: 66 },
      },
      boundaryLayerGroup: null, // 三大精细雷达作用范围边界图层组
      currentMode: "auto", // 当前雷达工作模式: 'auto'(全域智能联动) | 'global'(纯全球底图) | 'earad'(东亚) | 'eurad'(欧洲) | 'usrad'(北美)
      panelCollapsed: false,
      cursorTooltip: {
        visible: false,
        x: 0,
        y: 0,
        dbz: 0,
        desc: "",
        type: 10,
        typeDesc: "",
        rainRate: 0,
      },
      mousePos: {
        lat: null,
        lng: null,
      },
      mapZoom: 3,
      debugParams: {
        radarMode: "earad", // 默认聚焦区域
        minRegionalZoom: 4, // 1-4 全球底图，>=5 6km+2km 协同切片与网格
        opacity: 0.95,
        minThreshold: 0, // 过滤阈值默认为 0 dBZ，全显降雨回波面场
        rainOnly: false, // 斌哥指示：普通降雨、雷暴强对流、降雪协同全量叠加，杜绝漏块破洞
        enableTooltip: true,
        alwaysShowTooltip: false, // 默认仅在回波区域显示，与 Ventusky 截图一致；开启后全图常驻
        showExtraInfo: false, // 默认与截图一致仅显示纯净 `20 dBZ`，开启后追加等级与 mm/h
        showBoundaries: true, // 默认在地图上清晰框出东亚/欧洲/北美精细化雷达网的作用地理范围
        showDataGrid: false, // 网格与格点数值显隐开关 (6km 全球 / 2km 精细)
      },
      legendSwatches: [
        { label: "60", value: 60, color: "#ffffff", textColor: "#000000", desc: "极端强对流/冰雹" },
        { label: "56", value: 56, color: "#7b163e", textColor: "#ffffff", desc: "特大暴雨" },
        { label: "50", value: 50, color: "#a5295a", textColor: "#ffffff", desc: "大暴雨" },
        { label: "46", value: 46, color: "#c8545e", textColor: "#ffffff", desc: "暴雨" },
        { label: "40", value: 40, color: "#d89b44", textColor: "#000000", desc: "大雨" },
        { label: "36", value: 36, color: "#c8d943", textColor: "#000000", desc: "中到大雨" },
        { label: "30", value: 30, color: "#a0cf48", textColor: "#000000", desc: "中雨" },
        { label: "26", value: 26, color: "#5ec249", textColor: "#000000", desc: "小到中雨" },
        { label: "20", value: 20, color: "#55b764", textColor: "#000000", desc: "小雨" },
        { label: "16", value: 16, color: "#4689a9", textColor: "#ffffff", desc: "细雨" },
        { label: "10", value: 10, color: "#515a95", textColor: "#ffffff", desc: "微量毛毛雨" },
        { label: "6",  value: 6,  color: "#555271", textColor: "#ffffff", desc: "微弱回波" },
        { label: "0",  value: 0,  color: "#575757", textColor: "#ffffff", desc: "晴空/无降水" },
      ],
      regionalList: [
        {
          id: "earad",
          name: "东亚",
          flag: "🇨🇳",
          tag: "2km 超清",
          bounds: { west: 102, east: 147, south: 19, north: 46 },
          center: [31.5, 117.5],
          zoom: 10,
        },
        {
          id: "eurad",
          name: "欧洲",
          flag: "🇪🇺",
          tag: "2km 超清",
          bounds: { west: -23.488, east: 45.012, south: 29.488, north: 70.488 },
          center: [50.0, 10.0],
          zoom: 10,
        },
        {
          id: "usrad",
          name: "北美",
          flag: "🇺🇸",
          tag: "2km 超清",
          bounds: { west: -134.079, east: -60.8811, south: 21.12324, north: 52.60614 },
          center: [38.5, -96.5],
          zoom: 10,
        },
      ],
    };
  },

  computed: {
    currentActiveRegion() {
      if (!this.activeRegionsInViewport || this.activeRegionsInViewport.length === 0) {
        return null;
      }
      return this.regionalList.find((r) => r.id === this.activeRegionsInViewport[0]) || null;
    },

    modeStatusLabel() {
      if (this.currentMode === "auto") {
        return this.mapZoom >= 5 && this.currentActiveRegion
          ? `🤖 自动 (${this.currentActiveRegion.name})`
          : "🤖 全域自动";
      }
      const found = this.regionalList.find((r) => r.id === this.currentMode);
      return found ? `${found.flag} ${found.name} (定向)` : "定向模式";
    },

    modeNameLabel() {
      if (this.currentMode === "auto") return "🤖 全域智能联动";
      const found = this.regionalList.find((r) => r.id === this.currentMode);
      return found ? `${found.flag} ${found.name}` : "定向锁定";
    },

    currentModeRegionName() {
      const found = this.regionalList.find((r) => r.id === this.currentMode);
      return found ? found.name : "精细区域";
    },

    statusBadgeText() {
      if (this.currentMode !== "auto") return "🔥 纯精细切片模式";
      if (this.mapZoom >= 5 && this.currentActiveRegion) return "🔥 2km 超清叠加";
      if (this.mapZoom >= 5) return "🔥 6km 高清切片";
      return "🌍 Z1-4 宏观底图";
    },

    statusBadgeClass() {
      if (this.mapZoom < 5) return "badge-macro";
      return "badge-active";
    },

    currentRegionLabel() {
      if (this.currentMode !== "auto") {
        const found = this.regionalList.find((r) => r.id === this.currentMode);
        return found ? `${found.flag} ${found.name} (纯精细模式)` : "纯精细模式";
      }
      if (this.mapZoom < 5) {
        return "🌍 全球宏观底图 (Z1-4)";
      }
      if (this.currentActiveRegion && this.mapZoom >= 5) {
        return `${this.currentActiveRegion.flag} ${this.currentActiveRegion.name} 2km (已激活)`;
      }
      return "🌍 全球 6km 高清切片网格 (Z5+)";
    },

    activeSourceLabel() {
      if (this.currentMode === "auto") {
        if (this.mapZoom < 5) {
          return "全球宏观底图 (Z1-4)";
        }
        if (this.mapZoom >= 5 && this.currentActiveRegion) {
          return `${this.currentActiveRegion.name} 2km + 全球 6km`;
        }
        return "全球 6km 切片 (Z5+)";
      }
      return `${this.currentModeRegionName} 2km (独占)`;
    },

    currentGridTypeLabel() {
      if (this.currentMode !== "auto") {
        return `${this.currentModeRegionName} 2km`;
      }
      if (this.currentMode === "global") {
        return "全球 6km";
      }
      if (this.mapZoom >= 5 && this.currentActiveRegion) {
        return `${this.currentActiveRegion.name} 2km + 全球 6km`;
      }
      return "全球 6km";
    },

    activeTilesSummary() {
      const targetId =
        this.currentMode === "auto"
          ? (this.currentActiveRegion && this.mapZoom >= 5 ? this.currentActiveRegion.id : null)
          : this.currentMode;

      if (targetId && this.regionalStats[targetId]) {
        const stat = this.regionalStats[targetId];
        return `${stat.cached} / ${stat.total} 块 (2km)`;
      }

      if (this.mapZoom >= 5 && this.regionalStats.worad_hres) {
        const wStat = this.regionalStats.worad_hres;
        return `${wStat.cached} / ${wStat.total} 块 (6km)`;
      }

      return "宏观全景";
    },

    capsuleStyle() {
      return {
        transform: `translate3d(${this.cursorTooltip.x}px, ${this.cursorTooltip.y}px, 0) translate(-50%, 0)`,
      };
    },
  },

  mounted() {
    this.initMap();
    this.loadRadarLayer();
    this.initBoundaryLayers();
    this.initTimeWatcher();
  },

  beforeDestroy() {
    if (this._timeWatcherTimer) {
      clearInterval(this._timeWatcherTimer);
      this._timeWatcherTimer = null;
    }
    if (this.$refs.mapContainer) {
      this.$refs.mapContainer.removeEventListener("mouseleave", this.onMapMouseOut);
    }
    if (this._gridAnimFrame) {
      cancelAnimationFrame(this._gridAnimFrame);
      this._gridAnimFrame = null;
    }
    if (this._gridMapMoveHandler && this.map) {
      this.map.off("move moveend zoom zoomend resize viewreset", this._gridMapMoveHandler);
      this._gridMapMoveHandler = null;
    }
    if (this._gridCanvas && this._gridCanvas.parentNode) {
      this._gridCanvas.parentNode.removeChild(this._gridCanvas);
      this._gridCanvas = null;
    }
    if (this.map) {
      this.map.off("mousemove", this.onMapMouseMove);
      this.map.off("mouseout", this.onMapMouseOut);
      if (this.woradLayer) {
        this.map.removeLayer(this.woradLayer);
        this.woradLayer = null;
      }
      Object.keys(this.regionalLayers).forEach((mode) => {
        if (this.regionalLayers[mode] && this.map) {
          this.map.removeLayer(this.regionalLayers[mode]);
        }
      });
      this.regionalLayers = {};
      if (this.boundaryLayerGroup) {
        this.boundaryLayerGroup.clearLayers();
        if (this.map.hasLayer(this.boundaryLayerGroup)) {
          this.map.removeLayer(this.boundaryLayerGroup);
        }
        this.boundaryLayerGroup = null;
      }
      if (this.drawPlug) {
        this.drawPlug.clearLayer();
        this.drawPlug = null;
      }
      if (this.measureGroup) {
        if (this.map.hasLayer(this.measureGroup)) {
          this.map.removeLayer(this.measureGroup);
        }
        this.measureGroup = null;
      }
      this.map.remove();
      this.map = null;
    }
  },

  methods: {
    /**
     * 初始化 Leaflet 地图
     */
    initMap() {
      // 底图：高德暗色底图 (Style 8: 免 Key、无水印、加载极速)
      const baseLayer = L.tileLayer(
        "https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}",
        {
          subdomains: ["1", "2", "3", "4"],
          attribution: '&copy; 高德地图 (AutoNavi)',
          maxZoom: 18,
        }
      );

      this.map = L.map("radar-map", {
        center: [31.5, 117.5],
        zoom: 3,
        minZoom: 2,
        maxZoom: 18,
        zoomControl: false, // 禁用界面缩放按钮，保持全图视野清爽纯净
        layers: [baseLayer],
      });

      this.map.on("mousemove", this.onMapMouseMove);
      this.map.on("mouseout", this.onMapMouseOut);
      if (this.$refs.mapContainer) {
        this.$refs.mapContainer.addEventListener("mouseleave", this.onMapMouseOut);
      }
      this.map.on("zoom zoomend move moveend", () => {
        if (this.map) {
          this.mapZoom = this.map.getZoom();
          this.updateActiveRegions();
        }
      });
      this.mapZoom = this.map.getZoom();
      this.initGridDataLayer();

      // 初始化通用空间测距工具 (DrawPlug)
      this.measureGroup = L.layerGroup().addTo(this.map);
      this.drawPlug = new DrawPlug(this.map, this.measureGroup);
      this.drawPlug.onFinish = () => {
        this.isMeasuringDistance = false;
        this.hasMeasureData = true;
      };
    },

    /**
     * 开启/退出地图测距交互模式
     */
    toggleMeasure() {
      if (this.isMeasuringDistance) {
        this.clearMeasure();
      } else {
        this.startMeasureDistance();
      }
    },

    /**
     * 开始测量距离（单击添加测量点，双击结束）
     */
    startMeasureDistance() {
      if (!this.drawPlug) return;
      this.isMeasuringDistance = true;
      this.hasMeasureData = true;
      this.cursorTooltip.visible = false;
      this.drawPlug.startDrawLine();
    },

    /**
     * 清除所有测距线段与公里数标签
     */
    clearMeasure() {
      if (!this.drawPlug) return;
      this.isMeasuringDistance = false;
      this.hasMeasureData = false;
      this.drawPlug.clearLayer();
      if (this.map && this.map.getContainer()) {
        this.map.getContainer().style.cursor = "";
      }
    },

    /**
     * 多尺度气象雷达协同初始化：
     * 1. Zoom 1~4: 全球宏观底图 (whole_world)
     * 2. Zoom >= 5: 6km + 2km 协同精细切片雷达 (大区内 2km 超高分辨率切片，大区外 6km 避让托底)
     */
    loadRadarLayer() {
      this.loadWoradLayer();
      this.loadAllRegionalLayers();
      if (this.currentMode !== "auto") {
        this.switchMode(this.currentMode);
      }
    },

    /**
     * 加载全球宏观底图 (负责 Zoom 1 ~ 6，纯全球模式时支持 1~18)
     */
    loadWoradLayer() {
      if (this.woradLayer && this.map) {
        this.map.removeLayer(this.woradLayer);
        this.woradLayer = null;
      }

      const { dateStr, hourStr, timeStr } = this.radarTime;
      const baseUrl = process.env.BASE_URL || "/";
      const cleanBase = baseUrl.endsWith("/") ? baseUrl : baseUrl + "/";
      const fallbackDbzUrl = `${cleanBase}data/radar/worad_hres_srazky_dbz_20260924_0220.png`;
      const fallbackTypeUrl = `${cleanBase}data/radar/worad_hres_srazky_type_dbz_20260924_0220.png`;

      this.woradLayer = L.radarTileLayer(
        {
          mode: "worad_hres",
          dateStr,
          hourStr,
          timeStr,
          proxyPrefix: "/ventusky-api",
          fallbackDbzUrl,
          fallbackTypeUrl,
        },
        {
          opacity: this.debugParams.opacity,
          minDbzThreshold: this.debugParams.minThreshold,
          rainOnly: this.debugParams.rainOnly,
          minRegionalZoom: 4, // Zoom > 4 (5+) 自动激活全球 6km 视口按需切片 (覆盖四川、西藏、新疆等东亚左侧及全球全境)
          maskRegionalBounds: this.currentMode === "auto", // 自动模式下激活大区避让，防止与 2km 区域图层重叠叠加
          highResMaskZoom: 4, // Zoom > 4 (即 5+) 激活避让，交由 2km 超清协同渲染
          minZoom: 1,
          maxZoom: 18,
          zIndex: 400,
        }
      );

      this.woradLayer.on("tile-loaded", (e) => {
        if (this.regionalStats.worad_hres) {
          this.regionalStats.worad_hres.cached = e.cachedCount;
        }
        this.requestRenderGridData();
      });
      this.woradLayer.on("data-loaded", () => {
        this.requestRenderGridData();
      });

      this.woradLayer.on("viewport-status", (status) => {
        if (this.regionalStats.worad_hres) {
          this.regionalStats.worad_hres.cached = status.cachedCount;
          this.regionalStats.worad_hres.total = status.totalTiles;
        }
      });

      this.woradLayer.addTo(this.map);
    },

    /**
     * 同时挂载三大区域精细雷达 (earad, eurad, usrad)
     * 系统根据当前地图视口相交情况，全自动按需拉取对应区域的 2km 切片
     */
    loadAllRegionalLayers() {
      Object.keys(this.regionalLayers).forEach((mode) => {
        if (this.regionalLayers[mode] && this.map) {
          this.map.removeLayer(this.regionalLayers[mode]);
        }
      });
      this.regionalLayers = {};

      const { dateStr, hourStr, timeStr } = this.radarTime;
      const REGION_KEYS = ["earad", "eurad", "usrad"];
      REGION_KEYS.forEach((mode) => {
        const layer = L.radarTileLayer(
          {
            mode,
            dateStr,
            hourStr,
            timeStr,
            proxyPrefix: "/ventusky-api",
          },
          {
            opacity: this.debugParams.opacity,
            minDbzThreshold: this.debugParams.minThreshold,
            rainOnly: this.debugParams.rainOnly,
            minRegionalZoom: 4, // 缩放大于 4 (即 5+) 视口相交时自动拉取 2km 切片
            minZoom: 5, // 允许从 Zoom 5 开始渲染
            maxZoom: 18,
            zIndex: 410,
          }
        );

        layer.on("tile-loaded", (e) => {
          if (this.regionalStats[mode]) {
            this.regionalStats[mode].cached = e.cachedCount;
          }
          this.requestRenderGridData();
        });
        layer.on("data-loaded", () => {
          this.requestRenderGridData();
        });

        layer.on("viewport-status", (status) => {
          if (this.regionalStats[mode]) {
            this.regionalStats[mode].cached = status.cachedCount;
            this.regionalStats[mode].total = status.totalTiles;
          }
        });

        layer.addTo(this.map);
        this.$set(this.regionalLayers, mode, layer);
      });

      this.updateActiveRegions();
    },

    /**
     * 启动 1 小时整点时次自动同步定时器 (每 30 秒检查一次是否跨越了整点小时窗口)
     */
    initTimeWatcher() {
      if (this._timeWatcherTimer) {
        clearInterval(this._timeWatcherTimer);
      }
      this._timeWatcherTimer = setInterval(() => {
        if (!this.isAutoTimeSync) return;
        const latest = getRecentRadarTime();
        if (latest.timeStr !== this.radarTime.timeStr) {
          console.log(
            `[RadarPage] 跨越 1 小时整点时次窗口: ${this.radarTime.timeStr} -> ${latest.timeStr}，自动刷新雷达图层`
          );
          this.radarTime = latest;
          this.loadRadarLayer();
        }
      }, 30000);
    },

    /**
     * 步进时次 (+1 小时 / -1 小时)
     */
    stepRadarTime(minutesDelta) {
      if (!this.radarTime || !this.radarTime.timestamp) return;
      this.isAutoTimeSync = false; // 用户主动手动步进时，暂停自动跟随
      const nextMs = this.radarTime.timestamp + minutesDelta * 60 * 1000;
      this.radarTime = getRecentRadarTime(new Date(nextMs));
      this.loadRadarLayer();
    },

    /**
     * 重置并对齐到当前最新 1 小时整点时次
     */
    resetToCurrentTime() {
      this.isAutoTimeSync = true;
      this.radarTime = getRecentRadarTime(new Date());
      this.loadRadarLayer();
    },

    /**
     * 实时检测当前地图视口相交的精细雷达区域
     */
    updateActiveRegions() {
      if (!this.map) return;
      const bounds = this.map.getBounds();
      const vWest = bounds.getWest();
      const vEast = bounds.getEast();
      const vSouth = bounds.getSouth();
      const vNorth = bounds.getNorth();

      const active = [];
      this.regionalList.forEach((r) => {
        const b = r.bounds;
        let isIntersect = false;
        // 支持经度多周期相交检测 (-360, 0, +360)
        for (const offset of [0, -360, 360]) {
          const curVWest = vWest + offset;
          const curVEast = vEast + offset;
          if (
            Math.max(curVWest, b.west) < Math.min(curVEast, b.east) &&
            Math.max(vSouth, b.south) < Math.min(vNorth, b.north)
          ) {
            isIntersect = true;
            break;
          }
        }
        if (isIntersect) {
          active.push(r.id);
        }
      });
      this.activeRegionsInViewport = active;
    },

    isRegionInViewport(id) {
      return this.activeRegionsInViewport.includes(id);
    },

    isRegionButtonActive(id) {
      if (this.currentMode === id) return true;
      if (this.currentMode === "auto" && this.isRegionInViewport(id) && this.mapZoom >= 5) {
        return true;
      }
      return false;
    },

    getRegionButtonTag(id) {
      if (this.currentMode === id) {
        return "🎯 已锁定";
      }
      if (this.currentMode === "auto") {
        if (this.mapZoom >= 5 && this.isRegionInViewport(id)) {
          return "🟢 2km已激活";
        }
        if (this.isRegionInViewport(id)) {
          return "👀 视口内";
        }
        return "✈️ 飞往";
      }
      return "✈️ 切换";
    },

    /**
     * 核心切换模式：
     * - 'auto': 全域自适应智能联动（所有数据叠加，随视口/Zoom自动按需拉取）
     * - 'global': 纯全球底图模式（全级别 6km 底图覆盖，不请求局域切片）
     * - 'earad' | 'eurad' | 'usrad': 定向大区聚焦
     */
    switchMode(mode) {
      this.currentMode = mode;
      if (mode === "auto") {
        // 自动自适应模式：保持全球底图托底(maxZoom: 18) + 全部区域图层按视口自适应拉取 (开启 2km 区域自动避让，杜绝重影)
        if (this.woradLayer) {
          this.woradLayer.options.maskRegionalBounds = true;
          this.woradLayer.options.maxZoom = 18;
          if (this.map && !this.map.hasLayer(this.woradLayer)) {
            this.woradLayer.addTo(this.map);
          }
          this.woradLayer.redraw();
        }
        // 恢复 2km 区域切片图层的默认层级门槛 (zoom > 4，即 5+ 激活)
        Object.values(this.regionalLayers).forEach((layer) => {
          if (layer) {
            layer.options.minZoom = 5;
            layer.options.minRegionalZoom = 4;
          }
        });
        this.ensureAllRegionalLayersLoaded();
        this.updateActiveRegions();
        this.requestRenderGridData();
      } else if (mode === "global") {
        // 全球模式：底图解开层级限制覆盖全级别 (maxZoom: 18)，暂停局域精细切片 (关闭避让，全境显示 6km)
        if (this.woradLayer) {
          this.woradLayer.options.maskRegionalBounds = false;
          this.woradLayer.options.maxZoom = 18;
          if (this.map && !this.map.hasLayer(this.woradLayer)) {
            this.woradLayer.addTo(this.map);
          }
          this.woradLayer.redraw();
        }
        Object.values(this.regionalLayers).forEach((layer) => {
          if (layer && this.map && this.map.hasLayer(layer)) {
            this.map.removeLayer(layer);
          }
        });
        if (this.map) {
          this.map.flyTo([20, 0], 2.5, {
            duration: 1.2,
            easeLinearity: 0.25,
          });
        }
        this.requestRenderGridData();
      } else {
        // 定向大区模式 (东亚/欧洲/北美)：彻底关闭全球底图，100% 独占呈现目标大区 2km 数据！
        if (this.woradLayer && this.map && this.map.hasLayer(this.woradLayer)) {
          this.map.removeLayer(this.woradLayer);
        }
        Object.keys(this.regionalLayers).forEach((key) => {
          const layer = this.regionalLayers[key];
          if (key === mode) {
            // 解开大区定向模式的层级限制，允许从 zoom 2 到 18 全程查看该大区的 2km 数据
            layer.options.minZoom = 2;
            layer.options.minRegionalZoom = 0;
            if (layer && this.map && !this.map.hasLayer(layer)) {
              layer.addTo(this.map);
            }
            if (layer._updateViewportTiles) {
              layer._updateViewportTiles();
            }
            layer.redraw();
          } else {
            if (layer && this.map && this.map.hasLayer(layer)) {
              this.map.removeLayer(layer);
            }
          }
        });

        const target = this.regionalList.find((r) => r.id === mode);
        if (target && this.map) {
          this.map.flyTo(target.center, target.zoom || 10, {
            duration: 1.2,
            easeLinearity: 0.25,
          });
        }
        this.updateActiveRegions();
        this.requestRenderGridData();
      }
    },

    /**
     * 确保三大区域图层全部挂载在地图上
     */
    ensureAllRegionalLayersLoaded() {
      Object.values(this.regionalLayers).forEach((layer) => {
        if (layer && this.map && !this.map.hasLayer(layer)) {
          layer.addTo(this.map);
        }
      });
    },

    /**
     * 兼容快捷飞往
     */
    flyToRegion(region) {
      if (region && region.id) {
        this.switchMode(region.id);
      }
    },

    /**
     * 鼠标移动事件监听：多区域视口级联与智能探针拾取
     */
    onMapMouseMove(e) {
      if (e && e.latlng) {
        const lat = e.latlng.lat;
        const lng = e.latlng.lng;
        this.mousePos.lat = Math.abs(lat).toFixed(4) + (lat >= 0 ? "°N" : "°S");
        this.mousePos.lng = Math.abs(lng).toFixed(4) + (lng >= 0 ? "°E" : "°W");
      }

      if (this.isMeasuringDistance || !this.debugParams.enableTooltip) {
        this.cursorTooltip.visible = false;
        return;
      }

      const { x, y } = e.containerPoint;
      const container = this.$refs.mapContainer || (this.map && this.map.getContainer());
      const cWidth = container ? container.clientWidth : window.innerWidth;
      const cHeight = container ? container.clientHeight : window.innerHeight;

      const isNearBottom = y + 55 > cHeight;
      const offsetY = isNearBottom ? -44 : 20;

      this.cursorTooltip.x = Math.max(40, Math.min(x, cWidth - 40));
      this.cursorTooltip.y = y + offsetY;

      // 智能空间探针级联拾取：
      let res = null;
      if (this.currentMode === "global") {
        // 纯全球模式：直接从全球底图拾取
        if (this.woradLayer && this.woradLayer._isLoaded) {
          res = this.woradLayer.getValueAt(e.latlng.lat, e.latlng.lng);
        }
      } else if (this.currentMode !== "auto") {
        // 定向大区模式：严格仅从当前选定大区的 2km 矩阵拾取，绝不回退全球底图！
        const currentTargetLayer = this.regionalLayers[this.currentMode];
        if (currentTargetLayer && (currentTargetLayer._isLoaded || currentTargetLayer._rawGrid)) {
          res = currentTargetLayer.getValueAt(e.latlng.lat, e.latlng.lng);
        }
      } else {
        // 全域自动模式 (auto)：根据光标所在大区优先拾取 2km 切片
        if (this.mapZoom >= 5) {
          const lat = e.latlng.lat;
          const lng = e.latlng.lng;
          const normLon = ((((lng + 180) % 360) + 360) % 360) - 180;

          for (const r of this.regionalList) {
            const b = r.bounds;
            if (
              lat >= b.south &&
              lat <= b.north &&
              normLon >= b.west &&
              normLon <= b.east
            ) {
              const layer = this.regionalLayers[r.id];
              if (layer && layer._isLoaded) {
                res = layer.getValueAt(lat, lng);
              }
              break;
            }
          }
        }

        if (!res && this.woradLayer && this.woradLayer._isLoaded) {
          res = this.woradLayer.getValueAt(e.latlng.lat, e.latlng.lng);
        }
      }

      if (!res) {
        if (this.debugParams.alwaysShowTooltip) {
          this.cursorTooltip.dbz = 0;
          this.cursorTooltip.desc = "无降水";
          this.cursorTooltip.type = 10;
          this.cursorTooltip.typeDesc = "";
          this.cursorTooltip.rainRate = 0;
          this.cursorTooltip.visible = true;
        } else {
          this.cursorTooltip.visible = false;
        }
        return;
      }

      const dbz = res.dbz;
      const minThreshold = this.debugParams.minThreshold;

      if (dbz >= minThreshold) {
        this.cursorTooltip.dbz = Math.round(dbz);
        this.cursorTooltip.desc = res.desc;
        this.cursorTooltip.type = res.type;
        this.cursorTooltip.typeDesc = res.typeDesc || "降水";
        this.cursorTooltip.rainRate = res.rainRate;
        this.cursorTooltip.visible = true;
      } else if (this.debugParams.alwaysShowTooltip) {
        this.cursorTooltip.dbz = Math.round(dbz);
        this.cursorTooltip.desc = "无明显降水";
        this.cursorTooltip.type = res.type;
        this.cursorTooltip.typeDesc = res.typeDesc || "";
        this.cursorTooltip.rainRate = 0;
        this.cursorTooltip.visible = true;
      } else {
        this.cursorTooltip.visible = false;
      }
    },

    /**
     * 隐藏鼠标悬停雷达反射率探针胶囊
     */
    hideCursorTooltip() {
      this.cursorTooltip.visible = false;
    },

    /**
     * 鼠标移出地图容器隐藏胶囊，并重置右下角坐标状态
     */
    onMapMouseOut() {
      this.hideCursorTooltip();
      this.mousePos.lat = null;
      this.mousePos.lng = null;
    },

    /**
     * 透明度动态响应 (所有图层同步)
     */
    onOpacityChange() {
      const op = this.debugParams.opacity;
      if (this.woradLayer && typeof this.woradLayer.setOverlayOpacity === "function") {
        this.woradLayer.setOverlayOpacity(op);
      }
      Object.values(this.regionalLayers).forEach((layer) => {
        if (layer && typeof layer.setOverlayOpacity === "function") {
          layer.setOverlayOpacity(op);
        }
      });
    },

    /**
     * 过滤阈值动态响应 (所有图层同步)
     */
    onThresholdChange() {
      const th = this.debugParams.minThreshold;
      if (this.woradLayer && typeof this.woradLayer.setMinDbzThreshold === "function") {
        this.woradLayer.setMinDbzThreshold(th);
      }
      Object.values(this.regionalLayers).forEach((layer) => {
        if (layer && typeof layer.setMinDbzThreshold === "function") {
          layer.setMinDbzThreshold(th);
        }
      });
      this.requestRenderGridData();
    },

    /**
     * 仅雨相态过滤动态响应 (所有图层同步)
     */
    onRainOnlyChange() {
      const ro = this.debugParams.rainOnly;
      if (this.woradLayer && typeof this.woradLayer.setRainOnly === "function") {
        this.woradLayer.setRainOnly(ro);
      }
      Object.values(this.regionalLayers).forEach((layer) => {
        if (layer && typeof layer.setRainOnly === "function") {
          layer.setRainOnly(ro);
        }
      });
    },

    /**
     * 绘制三大精细化雷达网（东亚、欧洲、北美）的地理作用范围框与标识
     */
    initBoundaryLayers() {
      if (this.boundaryLayerGroup) {
        if (this.map && this.map.hasLayer(this.boundaryLayerGroup)) {
          this.map.removeLayer(this.boundaryLayerGroup);
        }
        this.boundaryLayerGroup.clearLayers();
      } else {
        this.boundaryLayerGroup = L.layerGroup();
      }

      this.regionalList.forEach((r) => {
        const b = r.bounds;
        // Leaflet 矩形坐标范围：[[south, west], [north, east]]
        const latLngBounds = [
          [b.south, b.west],
          [b.north, b.east],
        ];

        // 1. 矩形作用范围框 (科技感天青蓝虚线边框 + 极淡微光，绝不遮挡雷达图)
        const rect = L.rectangle(latLngBounds, {
          color: "#38bdf8",
          weight: 2,
          dashArray: "6, 6",
          opacity: 0.9,
          fillColor: "#38bdf8",
          fillOpacity: 0.03,
          interactive: true,
        });

        rect.on("mouseover", function () {
          this.setStyle({
            weight: 3,
            dashArray: "8, 4",
            fillOpacity: 0.08,
            color: "#67e8f9",
          });
        });

        rect.on("mouseout", function () {
          this.setStyle({
            weight: 2,
            dashArray: "6, 6",
            fillOpacity: 0.03,
            color: "#38bdf8",
          });
        });

        this.boundaryLayerGroup.addLayer(rect);

        // 2. 在矩形西北角（左上角）贴边放置精致大区标识徽章
        const badgeIcon = L.divIcon({
          className: "radar-boundary-badge-container",
          html: `
            <div class="radar-boundary-badge">
              <span class="badge-flag">${r.flag}</span>
              <span class="badge-title">${r.name} 2km 精细雷达作用范围</span>
              <span class="badge-coords">${b.west}°~${b.east}°E, ${b.south}°~${b.north}°N</span>
            </div>
          `,
          iconSize: [280, 24],
          iconAnchor: [-8, 28], // 停靠在西北角外侧上方，紧贴边线
        });

        const badgeMarker = L.marker([b.north, b.west], {
          icon: badgeIcon,
          interactive: false,
        });

        this.boundaryLayerGroup.addLayer(badgeMarker);
      });

      if (this.debugParams.showBoundaries && this.map) {
        this.boundaryLayerGroup.addTo(this.map);
      }
    },

    /**
     * 切换精细网边界框显隐
     */
    toggleBoundaries() {
      if (!this.map || !this.boundaryLayerGroup) return;
      if (this.debugParams.showBoundaries) {
        if (!this.map.hasLayer(this.boundaryLayerGroup)) {
          this.boundaryLayerGroup.addTo(this.map);
        }
      } else {
        if (this.map.hasLayer(this.boundaryLayerGroup)) {
          this.map.removeLayer(this.boundaryLayerGroup);
        }
      }
    },

    /**
     * 初始化/挂载网格与格点数值 Canvas 覆盖层
     * 挂载至 Leaflet 内部的 overlayPane 并赋予 leaflet-zoom-animated 类
     * 彻底解决地图拖拽、缩放动画过程中的画布漂移、延迟、撕裂问题
     */
    initGridDataLayer() {
      if (this._gridCanvas || !this.map) return;

      const overlayPane = this.map.getPanes().overlayPane;
      const canvas = document.createElement("canvas");
      canvas.className = "radar-grid-data-overlay leaflet-zoom-animated";
      canvas.style.position = "absolute";
      canvas.style.top = "0";
      canvas.style.left = "0";
      canvas.style.pointerEvents = "none";
      canvas.style.zIndex = "420"; // 高于雷达瓦片图层 (400/410)，低于控制面板 (1000)
      canvas.style.display = this.debugParams.showDataGrid ? "block" : "none";

      overlayPane.appendChild(canvas);
      this._gridCanvas = canvas;

      this._gridMapMoveHandler = () => {
        if (this.debugParams.showDataGrid) {
          this.requestRenderGridData();
        }
      };

      this.map.on("move moveend zoom zoomend resize viewreset", this._gridMapMoveHandler);
    },

    /**
     * 切换网格与格点数值显隐
     */
    toggleDataGrid() {
      if (!this._gridCanvas) {
        this.initGridDataLayer();
      }
      if (this._gridCanvas) {
        if (this.debugParams.showDataGrid) {
          this._gridCanvas.style.display = "block";
          this.requestRenderGridData();
        } else {
          this._gridCanvas.style.display = "none";
          const ctx = this._gridCanvas.getContext("2d");
          if (ctx) {
            ctx.clearRect(0, 0, this._gridCanvas.width, this._gridCanvas.height);
          }
        }
      }
    },

    /**
     * 防抖/帧同步调度渲染
     */
    requestRenderGridData() {
      if (!this.debugParams.showDataGrid || !this._gridCanvas || !this.map) return;
      if (this._gridAnimFrame) return;
      this._gridAnimFrame = requestAnimationFrame(() => {
        this._gridAnimFrame = null;
        this.renderGridData();
      });
    },

    /**
     * 核心渲染：按视口地理范围反查活跃格网 (6km 全球 / 2km 区域) 并批量绘制网格线与真实回波数值
     * 数学对齐规范 (Pixel-Is-Point)：
     * 1. 瓦片像元与数据采样均在原始格点 (lon_i = west + i*dx, lat_j = north - j*dy) 处达到峰值；
     * 2. 回波数值文字严格居中绘制在原始格点 (lon_i, lat_j) 处，与底层雷达彩色像元中心 100% 绝对同轴对齐；
     * 3. 物理网格线向外延展半格 (lon_i ± 0.5*dx, lat_j ± 0.5*dy)，构筑完美包围该像元的单元格框线；
     * 4. 彻底修正了旧逻辑中 +0.5 格点错位及 lonSpan/w 步长缩放漂移。
     */
    renderGridData() {
      if (!this.debugParams.showDataGrid || !this._gridCanvas || !this.map) return;
      const map = this.map;
      const size = map.getSize();
      const width = size.x;
      const height = size.y;
      if (width === 0 || height === 0) return;

      const dpr = window.devicePixelRatio || 1;
      const canvas = this._gridCanvas;

      const targetW = Math.round(width * dpr);
      const targetH = Math.round(height * dpr);
      if (canvas.width !== targetW || canvas.height !== targetH) {
        canvas.width = targetW;
        canvas.height = targetH;
        canvas.style.width = width + "px";
        canvas.style.height = height + "px";
      }

      // 将 Canvas 锚定到当前视口左上角在 overlayPane 内部的真实坐标，让 Canvas 随 Leaflet Pane 硬件加速位移
      const topLeft = map.containerPointToLayerPoint([0, 0]);
      L.DomUtil.setPosition(canvas, topLeft);

      const ctx = canvas.getContext("2d");
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, targetW, targetH);
      ctx.scale(dpr, dpr);

      const zoom = map.getZoom();
      const bounds = map.getBounds();
      const vWest = bounds.getWest();
      const vEast = bounds.getEast();
      const vSouth = bounds.getSouth();
      const vNorth = bounds.getNorth();

      // 收集当前视口需要绘制的目标网格
      // 核心物理准则：数据是 6km 就是 6km 网格，数据是 2km 就是 2km 网格，100% 数据驱动，步长与物理像元绝对一致！
      const tasks = [];
      const isAuto = this.currentMode === "auto";
      const isRegionalMode = ["earad", "eurad", "usrad"].includes(this.currentMode);
      const active2kmTasks = [];

      // 1. 判定 2km 大区网格任务：
      // - 若处于定向大区模式 (earad/eurad/usrad)：目标大区锁定激活（全层级使用 2km 数据与 2km 网格）
      // - 若处于自动自适应模式 (auto)：缩放层级 zoom >= 5 且视口与 2km 区域相交时激活
      if (isRegionalMode) {
        const r = this.regionalList.find((item) => item.id === this.currentMode);
        if (r) {
          const b = r.bounds;
          if (vWest < b.east && vEast > b.west && vSouth < b.north && vNorth > b.south) {
            const layer = this.regionalLayers[r.id];
            if (layer && layer._rawGrid && layer._gridWidth > 0) {
              const dx = (b.east - b.west) / (layer._gridWidth - 1);
              const dy = (b.north - b.south) / (layer._gridHeight - 1);
              const taskObj = {
                id: r.id,
                name: r.name,
                is2km: true,
                bounds: b,
                w: layer._gridWidth,
                h: layer._gridHeight,
                dx,
                dy,
                rawGrid: layer._rawGrid,
              };
              tasks.push(taskObj);
              active2kmTasks.push(taskObj);
            }
          }
        }
      } else if (isAuto && zoom >= 5) {
        for (const r of this.regionalList) {
          const b = r.bounds;
          if (vWest < b.east && vEast > b.west && vSouth < b.north && vNorth > b.south) {
            const layer = this.regionalLayers[r.id];
            if (layer && layer._rawGrid && layer._gridWidth > 0) {
              const dx = (b.east - b.west) / (layer._gridWidth - 1);
              const dy = (b.north - b.south) / (layer._gridHeight - 1);
              const taskObj = {
                id: r.id,
                name: r.name,
                is2km: true,
                bounds: b,
                w: layer._gridWidth,
                h: layer._gridHeight,
                dx,
                dy,
                rawGrid: layer._rawGrid,
              };
              tasks.push(taskObj);
              active2kmTasks.push(taskObj);
            }
          }
        }
      }

      // 2. 判定全球 6km 底图网格任务 (worad_hres)：
      // - 若处于定向大区模式：底图被移除，绝不画 6km 网格！
      // - 若处于纯全球模式或自动自适应模式：只要 woradLayer 就绪即推入 6km 任务
      //   (在自动模式 zoom >= 5 存在 2km 区域时，通过 Canvas 裁剪自动避让 2km 区域，实现 2km 区域画 2km 网格，外围全画 6km 网格)
      if (!isRegionalMode && this.woradLayer && this.woradLayer._rawGrid && this.woradLayer._gridWidth > 0) {
        const b = { west: -180, east: 180, south: -90, north: 90 };
        const w = this.woradLayer._gridWidth;
        const h = this.woradLayer._gridHeight;
        const dx = 360 / (w - 1);
        const dy = 180 / (h - 1);
        tasks.push({
          id: "worad_hres",
          name: "全球",
          is2km: false,
          bounds: b,
          w,
          h,
          dx,
          dy,
          rawGrid: this.woradLayer._rawGrid,
          cutoutRegions: active2kmTasks, // 传入需要剔除/避让的 2km 区域
        });
      }

      if (tasks.length === 0) return;

      for (const task of tasks) {
        const { bounds: gBounds, w, h, dx, dy, rawGrid, is2km, cutoutRegions } = task;

        // 计算屏幕上单格像素宽高
        const centerLat = Math.max(-80, Math.min(80, bounds.getCenter().lat));
        const centerLng = Math.max(gBounds.west, Math.min(gBounds.east, bounds.getCenter().lng));
        const p0 = map.latLngToContainerPoint([centerLat, centerLng]);
        const p1 = map.latLngToContainerPoint([centerLat, centerLng + dx]);
        const p2 = map.latLngToContainerPoint([centerLat + dy, centerLng]);
        const cellPixelW = Math.abs(p1.x - p0.x);
        const cellPixelH = Math.abs(p2.y - p0.y);

        // 计算视口相交的原始格点索引区间 [minI, maxI], [minJ, maxJ]（100% 原始点阵，绝不伸缩或聚合抽稀）
        const minI = Math.max(0, Math.floor((vWest - gBounds.west) / dx));
        const maxI = Math.min(w - 1, Math.ceil((vEast - gBounds.west) / dx));
        const minJ = Math.max(0, Math.floor((gBounds.north - vNorth) / dy));
        const maxJ = Math.min(h - 1, Math.ceil((gBounds.north - vSouth) / dy));

        if (minI > maxI || minJ > maxJ) continue;

        // 预计算视口内各经线及格点中心的 X 屏幕坐标 (墨卡托投影中 X 坐标与纬度完全独立，单次预查性能提升 100 倍)
        const colCount = maxI - minI + 1;
        const xCols = new Float32Array(colCount);
        const xLines = new Float32Array(colCount + 1);

        for (let i = minI; i <= maxI; i++) {
          const lonCenter = gBounds.west + i * dx;
          xCols[i - minI] = map.latLngToContainerPoint([centerLat, lonCenter]).x;
          const lonLine = gBounds.west + (i - 0.5) * dx;
          xLines[i - minI] = map.latLngToContainerPoint([centerLat, lonLine]).x;
        }
        xLines[colCount] = map.latLngToContainerPoint([centerLat, gBounds.west + (maxI + 0.5) * dx]).x;

        // 若需要剔除 2km 区域（6km 底图避让 2km 大区），利用 Canvas evenodd 裁剪
        const hasCutout = !is2km && cutoutRegions && cutoutRegions.length > 0;
        if (hasCutout) {
          ctx.save();
          ctx.beginPath();
          ctx.rect(0, 0, width, height);
          for (const cr of cutoutRegions) {
            const pNW = map.latLngToContainerPoint([
              cr.bounds.north + 0.5 * cr.dy,
              cr.bounds.west - 0.5 * cr.dx,
            ]);
            const pSE = map.latLngToContainerPoint([
              cr.bounds.south - 0.5 * cr.dy,
              cr.bounds.east + 0.5 * cr.dx,
            ]);
            const rx = Math.min(pNW.x, pSE.x);
            const ry = Math.min(pNW.y, pSE.y);
            const rw = Math.abs(pSE.x - pNW.x);
            const rh = Math.abs(pSE.y - pNW.y);
            ctx.rect(rx, ry, rw, rh);
          }
          ctx.clip("evenodd");
        }

        // 1. 批量绘制物理网格线 (逐格连续绘制，无论缩放多小，忠实展现真实密集原始物理线框)
        ctx.beginPath();
        ctx.lineWidth = is2km ? 1.0 : 0.75;
        // 极小缩放时适当调整线条透明度，保证极密集网格下底层地图仍有穿透性
        if (cellPixelW < 4) {
          ctx.strokeStyle = is2km ? "rgba(56, 189, 248, 0.2)" : "rgba(148, 163, 184, 0.15)";
        } else if (cellPixelW < 12) {
          ctx.strokeStyle = is2km ? "rgba(56, 189, 248, 0.35)" : "rgba(148, 163, 184, 0.25)";
        } else {
          ctx.strokeStyle = is2km ? "rgba(56, 189, 248, 0.45)" : "rgba(148, 163, 184, 0.35)";
        }

        // 水平纬线的左右绘制端点 (限制在地理有效边界内并延展半格)
        const xStart = Math.max(-10, Math.min(width + 10, map.latLngToContainerPoint([centerLat, gBounds.west - 0.5 * dx]).x));
        const xEnd = Math.max(-10, Math.min(width + 10, map.latLngToContainerPoint([centerLat, gBounds.east + 0.5 * dx]).x));

        for (let j = minJ; j <= maxJ + 1; j++) {
          const lat = gBounds.north - (j - 0.5) * dy;
          if (lat > 85 || lat < -85) continue;
          const y = Math.round(map.latLngToContainerPoint([lat, centerLng]).y) + 0.5;
          if (y >= -10 && y <= height + 10) {
            ctx.moveTo(xStart, y);
            ctx.lineTo(xEnd, y);
          }
        }

        // 垂直经线的上下绘制端点
        const safeNorth = Math.min(85, gBounds.north + 0.5 * dy);
        const safeSouth = Math.max(-85, gBounds.south - 0.5 * dy);
        const yTop = Math.max(-10, Math.min(height + 10, map.latLngToContainerPoint([safeNorth, centerLng]).y));
        const yBottom = Math.max(-10, Math.min(height + 10, map.latLngToContainerPoint([safeSouth, centerLng]).y));

        for (let idx = 0; idx <= colCount; idx++) {
          const x = Math.round(xLines[idx]) + 0.5;
          if (x >= -10 && x <= width + 10) {
            ctx.moveTo(x, yTop);
            ctx.lineTo(x, yBottom);
          }
        }
        ctx.stroke();

        // 2. 绘制格点回波数值 (严格按原始像元逐点直出，绝不聚合、绝不跳格抽稀)
        let fontSize = 10;
        if (cellPixelW >= 36) {
          fontSize = 12;
        } else if (cellPixelW >= 22) {
          fontSize = 10;
        } else if (cellPixelW >= 14) {
          fontSize = 9;
        } else {
          fontSize = 8;
        }
        ctx.font = `bold ${fontSize}px "JetBrains Mono", Consolas, monospace`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        const minThreshold = this.debugParams.minThreshold || 0;
        const useStroke = cellPixelW >= 12;
        if (useStroke) {
          ctx.strokeStyle = "rgba(0, 0, 0, 0.9)";
          ctx.lineWidth = cellPixelW >= 20 ? 2.5 : 1.5;
        }

        for (let j = minJ; j <= maxJ; j++) {
          const latCenter = gBounds.north - j * dy;
          if (latCenter > 85 || latCenter < -85) continue;
          const yCenter = Math.round(map.latLngToContainerPoint([latCenter, centerLng]).y);
          if (yCenter < -15 || yCenter > height + 15) continue;

          const rowOffset = j * w;

          for (let i = minI; i <= maxI; i++) {
            // 若启用了 2km 裁剪避让，快速跳过落在 2km 区域内的点
            if (hasCutout) {
              const lonCenter = gBounds.west + i * dx;
              if (isPointInHighResRegion(latCenter, lonCenter)) {
                continue;
              }
            }

            const val = rawGrid[rowOffset + i];
            if (val > 0 && val >= minThreshold) {
              const xCenter = Math.round(xCols[i - minI]);
              if (xCenter < -15 || xCenter > width + 15) continue;

              // 高对比度描边仅在像元空间充裕时启用，防止密集体素下被描边糊满
              if (useStroke) {
                ctx.strokeText(String(val), xCenter, yCenter);
              }

              if (val >= 46) {
                ctx.fillStyle = "#fca5a5"; // 暴雨浅粉红
              } else if (val >= 30) {
                ctx.fillStyle = "#fef08a"; // 中大雨嫩黄
              } else if (val >= 16) {
                ctx.fillStyle = "#86efac"; // 小雨嫩绿
              } else {
                ctx.fillStyle = "#e0e7ff"; // 细雨/降雪亮白紫
              }
              ctx.fillText(String(val), xCenter, yCenter);
            }
          }
        }

        if (hasCutout) {
          ctx.restore();
        }
      }
    },

    /**
     * 重置为官方推荐参数
     */
    resetParams() {
      this.debugParams.opacity = 0.95;
      this.debugParams.minThreshold = 0;
      this.debugParams.rainOnly = false;
      this.debugParams.enableTooltip = true;
      this.debugParams.alwaysShowTooltip = false;
      this.debugParams.showExtraInfo = false;
      this.debugParams.showBoundaries = true;
      this.debugParams.showDataGrid = false;

      this.switchMode("auto");
      this.loadRadarLayer();
      this.toggleBoundaries();
      this.toggleDataGrid();
    },

    /**
     * 切换面板折叠状态
     */
    togglePanel() {
      this.panelCollapsed = !this.panelCollapsed;
    },

    /**
     * 一键放大到精细切片层级 (Z10)
     */
    zoomToRegional() {
      if (this.map) {
        this.map.setZoom(10);
      }
    },

    /**
     * 一键缩小到全球宏观层级 (Z2)
     */
    zoomToMacro() {
      if (this.map) {
        this.map.setZoom(2);
      }
    },

    /**
     * 快捷缩放到任意指定层级
     */
    setZoomLevel(zoom) {
      if (this.map) {
        this.map.setZoom(zoom);
      }
    },
  },
};
</script>

<style scoped>
.radar-page {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #0f172a;
}

.map-container {
  width: 100%;
  height: 100%;
  background: #1b234b; /* Ventusky 原生海洋暗蓝 */
}

/* ===================================================
   Ventusky 1:1 风格鼠标悬停 dBZ 胶囊 (Cursor Tooltip)
   =================================================== */
.radar-cursor-capsule {
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none; /* 穿透鼠标交互，绝不阻挡地图拖拽缩放 */
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border-radius: 9999px;
  padding: 4px 14px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.15);
  user-select: none;
  white-space: nowrap;
  will-change: transform;
  transition: opacity 0.08s ease-out;
}

.capsule-dbz {
  font-size: 15px;
  font-weight: 700;
  color: #0f172a;
  letter-spacing: -0.2px;
}

.capsule-extra {
  margin-left: 8px;
  font-size: 12px;
  font-weight: 500;
  color: #64748b;
  padding-left: 8px;
  border-left: 1px solid #e2e8f0;
}

.capsule-type-tag {
  margin-left: 6px;
  font-size: 11px;
  font-weight: 700;
  padding: 1px 7px;
  border-radius: 9999px;
  background: rgba(14, 165, 233, 0.12);
  color: #0284c7;
  border: 1px solid rgba(14, 165, 233, 0.28);
  display: inline-flex;
  align-items: center;
  line-height: 1.4;
}

.capsule-type-tag.type-30 {
  background: rgba(239, 68, 68, 0.14);
  color: #dc2626;
  border-color: rgba(239, 68, 68, 0.35);
}

.capsule-type-tag.type-40 {
  background: rgba(99, 102, 241, 0.14);
  color: #4f46e5;
  border-color: rgba(99, 102, 241, 0.35);
}

.capsule-type-tag.type-50 {
  background: rgba(217, 70, 239, 0.14);
  color: #c026d3;
  border-color: rgba(217, 70, 239, 0.35);
}


/* ===================================================
   右上角图层调试面板 (Layer Debug Panel)
   =================================================== */
.radar-debug-panel {
  position: absolute;
  top: 6px;
  bottom: 6px;
  right: 6px;
  z-index: 1000;
  width: 340px;
  height: calc(100% - 12px);
  display: flex;
  flex-direction: column;
  background: rgba(15, 23, 42, 0.88);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  color: #f8fafc;
  overflow: hidden;
  transition: width 0.25s cubic-bezier(0.16, 1, 0.3, 1), height 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.radar-debug-panel.collapsed {
  height: auto;
  bottom: auto;
  width: auto;
  border-radius: 20px;
}

.panel-header {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  background: rgba(30, 41, 59, 0.6);
  cursor: pointer;
  user-select: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.radar-debug-panel.collapsed .panel-header {
  border-bottom: none;
  background: transparent;
  padding: 8px 14px;
}

.header-title {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 700;
  color: #f1f5f9;
}

.panel-icon {
  font-size: 14px;
}

.badge-opacity {
  margin-left: 4px;
  font-size: 11px;
  font-weight: 600;
  background: #38bdf8;
  color: #0f172a;
  padding: 1px 6px;
  border-radius: 10px;
}

.toggle-btn {
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: #94a3b8;
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
}

.toggle-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  color: #f8fafc;
}

.header-time-pill {
  font-size: 11px;
  font-family: "JetBrains Mono", Consolas, monospace;
  font-weight: 700;
  color: #38bdf8;
  background: rgba(56, 189, 248, 0.15);
  border: 1px solid rgba(56, 189, 248, 0.35);
  padding: 1px 6px;
  border-radius: 10px;
  margin-left: 2px;
}

/* ===================================================
   Ventusky 1小时整点动态数据时次卡片 (最上方展示)
   =================================================== */
.radar-time-card {
  background: rgba(30, 41, 59, 0.75);
  border: 1px solid rgba(56, 189, 248, 0.28);
  border-radius: 6px;
  padding: 6px 8px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
}

.time-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.time-title-group {
  display: flex;
  align-items: center;
  gap: 5px;
}

.live-status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #10b981;
  box-shadow: 0 0 6px #10b981;
  animation: pulse-dot 2s infinite ease-in-out;
}

@keyframes pulse-dot {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.45;
    transform: scale(0.85);
  }
}

.time-card-title {
  font-size: 11px;
  font-weight: 700;
  color: #e2e8f0;
  letter-spacing: 0.3px;
}

.time-interval-tag {
  font-size: 9px;
  background: rgba(56, 189, 248, 0.15);
  color: #38bdf8;
  border: 1px solid rgba(56, 189, 248, 0.3);
  padding: 0 4px;
  border-radius: 4px;
  font-weight: 600;
}

.time-btn-group {
  display: flex;
  align-items: center;
  gap: 3px;
}

.time-action-btn {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #cbd5e1;
  font-size: 10px;
  padding: 1px 5px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.15s ease;
}

.time-action-btn:hover {
  background: rgba(56, 189, 248, 0.2);
  color: #38bdf8;
  border-color: #38bdf8;
}

.time-action-btn.btn-now {
  background: rgba(16, 185, 129, 0.2);
  color: #34d399;
  border-color: rgba(16, 185, 129, 0.45);
  font-weight: 700;
}

.time-action-btn.btn-now:hover {
  background: rgba(16, 185, 129, 0.35);
  color: #ffffff;
}

.time-main-box {
  display: flex;
  flex-direction: column;
  gap: 3px;
  background: rgba(15, 23, 42, 0.6);
  border-radius: 5px;
  padding: 5px 7px;
}

.time-primary-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}

.time-bold-clock {
  font-size: 19px;
  font-weight: 800;
  font-family: "JetBrains Mono", Consolas, monospace;
  color: #ffffff;
  letter-spacing: 0.5px;
  line-height: 1.1;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
}

.time-tags-col {
  display: flex;
  align-items: center;
  gap: 4px;
}

.time-tag-local {
  font-size: 10px;
  color: #94a3b8;
}

.time-tag-utc {
  font-size: 9px;
  font-family: monospace;
  color: #38bdf8;
  background: rgba(56, 189, 248, 0.12);
  padding: 1px 4px;
  border-radius: 3px;
}

.time-sub-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 10px;
  color: #94a3b8;
  border-top: 1px dashed rgba(255, 255, 255, 0.08);
  padding-top: 3px;
}

.time-date-text {
  font-size: 10px;
  color: #cbd5e1;
}

.time-code-badge {
  font-family: monospace;
  font-size: 9px;
  color: #93c5fd;
  background: rgba(255, 255, 255, 0.06);
  padding: 1px 4px;
  border-radius: 3px;
}

.panel-body {
  flex: 1;
  min-height: 0;
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
}

.panel-body::-webkit-scrollbar {
  width: 4px;
}

.panel-body::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
}

.control-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.label-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.control-label {
  font-size: 12px;
  color: #cbd5e1;
  font-weight: 500;
}

.control-value {
  font-size: 12px;
  color: #38bdf8;
  font-weight: 700;
  font-family: monospace;
}

.mode-strategy-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 6px;
  margin-top: 4px;
}

.strategy-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 8px;
  background: rgba(0, 0, 0, 0.42);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 7px;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  text-align: left;
}

.strategy-btn:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.25);
  transform: translateY(-1px);
}

.strategy-btn.active {
  background: rgba(56, 189, 248, 0.16);
  border-color: #38bdf8;
  box-shadow: 0 0 10px rgba(56, 189, 248, 0.25);
}

.strategy-left {
  display: flex;
  align-items: center;
  gap: 6px;
}

.strategy-icon {
  font-size: 15px;
  line-height: 1;
}

.strategy-info {
  display: flex;
  flex-direction: column;
}

.strategy-title {
  font-size: 11px;
  font-weight: 700;
  color: #f1f5f9;
}

.strategy-btn.active .strategy-title {
  color: #38bdf8;
}

.strategy-desc {
  font-size: 9px;
  color: #94a3b8;
  margin-top: 1px;
  font-family: monospace;
}

.strategy-tag {
  font-size: 9px;
  padding: 1px 4px;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.08);
  color: #94a3b8;
}

.strategy-tag.tag-active {
  background: #38bdf8;
  color: #0f172a;
  font-weight: 700;
}

.region-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
  margin-top: 4px;
}

.region-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6px 4px;
  background: rgba(0, 0, 0, 0.42);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 7px;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  text-align: center;
}

.region-btn:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.25);
  transform: translateY(-1px);
}

.region-btn.inview {
  border-color: rgba(56, 189, 248, 0.45);
  background: rgba(56, 189, 248, 0.08);
}

.region-btn.active {
  background: rgba(34, 197, 94, 0.18);
  border-color: #22c55e;
  box-shadow: 0 0 10px rgba(34, 197, 94, 0.3);
}

.region-top {
  display: flex;
  align-items: center;
  gap: 4px;
}

.region-flag {
  font-size: 13px;
  line-height: 1;
}

.region-name {
  font-size: 11px;
  font-weight: 700;
  color: #f1f5f9;
}

.region-btn.inview .region-name {
  color: #38bdf8;
}

.region-btn.active .region-name {
  color: #4ade80;
}

.region-tag {
  font-size: 9.5px;
  color: #94a3b8;
  margin-top: 2px;
  font-family: monospace;
  white-space: nowrap;
}

.region-btn.inview .region-tag {
  color: #7dd3fc;
}

.region-btn.active .region-tag {
  color: #86efac;
  font-weight: 600;
}

/* 视口按需切片状态监控小盒 */
.tile-status-box {
  background: rgba(0, 0, 0, 0.35);
  border: 1px dashed rgba(56, 189, 248, 0.35);
  border-radius: 8px;
  padding: 10px 12px;
  margin-top: 4px;
  box-sizing: border-box;
}

.tile-status-box .control-label {
  font-size: 13.5px;
  font-weight: 700;
  color: #f1f5f9;
}

.tile-badge {
  font-size: 11.5px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 4px;
}

.tile-badge.badge-active {
  background: rgba(34, 197, 94, 0.2);
  color: #4ade80;
  border: 1px solid rgba(34, 197, 94, 0.4);
}

.tile-badge.badge-macro {
  background: rgba(56, 189, 248, 0.15);
  color: #38bdf8;
  border: 1px solid rgba(56, 189, 248, 0.35);
}

.tile-badge.badge-inactive {
  background: rgba(245, 158, 11, 0.15);
  color: #fbbf24;
  border: 1px solid rgba(245, 158, 11, 0.3);
}

.tile-meta-grid {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 8px;
}

.tile-meta-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  font-size: 12px;
  padding: 1px 0;
}

.meta-label {
  color: #94a3b8;
  font-size: 12px;
  white-space: nowrap;
  flex-shrink: 0;
}

.meta-val {
  color: #f1f5f9;
  font-size: 12px;
  font-family: 'JetBrains Mono', Consolas, Monaco, monospace;
  font-weight: 600;
  text-align: right;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.meta-val.highlight {
  color: #38bdf8;
  font-weight: 700;
}

/* ===================================================
   三行多尺度阶梯指示器 (3-Row Tier Ladder)
   =================================================== */
.zoom-tier-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 10px;
}

.zoom-tier-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 7px 10px;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  opacity: 0.65;
}

.zoom-tier-row:hover {
  opacity: 0.95;
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.22);
  transform: translateX(1px);
}

.zoom-tier-row.is-active {
  opacity: 1;
  background: rgba(56, 189, 248, 0.14);
  border-color: #38bdf8;
  box-shadow: 0 0 12px rgba(56, 189, 248, 0.25);
}

.tier-badge {
  font-family: "JetBrains Mono", Consolas, monospace;
  font-size: 12px;
  font-weight: 800;
  padding: 3px 6px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.08);
  color: #94a3b8;
  min-width: 42px;
  text-align: center;
  flex-shrink: 0;
}

.zoom-tier-row.is-active .tier-badge {
  background: #38bdf8;
  color: #0f172a;
  font-weight: 800;
  box-shadow: 0 0 8px rgba(56, 189, 248, 0.5);
}

.tier-info {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  flex: 1;
  min-width: 0;
}

.tier-name {
  font-size: 13px;
  font-weight: 600;
  color: #cbd5e1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.zoom-tier-row.is-active .tier-name {
  color: #ffffff;
  font-weight: 700;
}

.tier-sub {
  font-size: 11px;
  color: #64748b;
  margin-top: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.zoom-tier-row.is-active .tier-sub {
  color: #7dd3fc;
}

.tier-status {
  display: flex;
  align-items: center;
  margin-left: 8px;
  flex-shrink: 0;
}

.tier-active-badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 11px;
  font-weight: 700;
  font-family: monospace;
  color: #38bdf8;
  background: rgba(56, 189, 248, 0.16);
  border: 1px solid rgba(56, 189, 248, 0.35);
  padding: 2px 7px;
  border-radius: 4px;
  white-space: nowrap;
}

.tier-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #38bdf8;
  box-shadow: 0 0 6px #38bdf8;
  animation: pulse-dot 1.4s ease-in-out infinite alternate;
}

@keyframes pulse-dot {
  0% { transform: scale(0.8); opacity: 0.5; }
  100% { transform: scale(1.3); opacity: 1; }
}

.tier-jump-badge {
  font-size: 11px;
  color: #94a3b8;
  padding: 2px 6px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  transition: all 0.15s ease;
  white-space: nowrap;
}

.zoom-tier-row:hover .tier-jump-badge {
  color: #38bdf8;
  border-color: rgba(56, 189, 248, 0.4);
  background: rgba(56, 189, 248, 0.1);
}

.range-slider {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 5px;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.15);
  outline: none;
  cursor: pointer;
}

.range-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #38bdf8;
  cursor: pointer;
  box-shadow: 0 0 8px rgba(56, 189, 248, 0.6);
  transition: transform 0.1s ease;
}

.range-slider::-webkit-slider-thumb:hover {
  transform: scale(1.2);
}

.slider-marks {
  display: flex;
  justify-content: space-between;
  font-size: 9px;
  color: #64748b;
  margin-top: 1px;
}

.slider-hint {
  font-size: 10px;
  color: #64748b;
  line-height: 1.3;
}

.control-label-group {
  display: flex;
  align-items: center;
  gap: 6px;
}

.grid-res-tag {
  font-size: 11px;
  color: #38bdf8;
  font-weight: 600;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.switch-row {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.switch-toggle {
  position: relative;
  display: inline-block;
  width: 36px;
  height: 20px;
}

.switch-toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider-round {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.2);
  transition: 0.2s;
  border-radius: 20px;
}

.slider-round:before {
  position: absolute;
  content: "";
  height: 14px;
  width: 14px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: 0.2s;
  border-radius: 50%;
}

input:checked + .slider-round {
  background-color: #38bdf8;
}

input:checked + .slider-round:before {
  transform: translateX(16px);
}

.panel-divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 2px 0;
}

.section-title {
  font-size: 11px;
  font-weight: 700;
  color: #94a3b8;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.panel-footer {
  margin-top: auto;
  padding-top: 6px;
  flex-shrink: 0;
}

.reset-btn {
  width: 100%;
  padding: 6px 0;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #e2e8f0;
  font-size: 11px;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
}

.reset-btn:hover {
  background: rgba(56, 189, 248, 0.2);
  border-color: #38bdf8;
  color: #38bdf8;
}

/* ===================================================
   Ventusky 官方 1:1 垂直柱状色阶图例 (按官网吸色精准还原)
   =================================================== */
.ventusky-legend-container {
  position: absolute;
  bottom: 12px;
  left: 12px;
  z-index: 1000;
  display: flex;
  align-items: flex-end;
  gap: 8px;
  pointer-events: auto;
}

.ventusky-vertical-scale {
  width: 40px;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.45);
  user-select: none;
  border: 1px solid rgba(0, 0, 0, 0.25);
  flex-shrink: 0;
}

.scale-header {
  background: #ffffff;
  color: #111827;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-weight: 800;
  font-size: 11px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1px;
  letter-spacing: -0.2px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.scale-arrow {
  font-size: 13px;
  line-height: 1;
  color: #374151;
  margin-top: -1px;
}

.scale-row {
  height: 21px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 13px;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.3px;
  cursor: default;
  transition: filter 0.15s ease;
}

.scale-row:hover {
  filter: brightness(1.12);
}

/* 一体化 HUD 状态胶囊 (经纬度 + Zoom) */
.hud-status-badge {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(15, 23, 42, 0.88);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 8px;
  padding: 6px 12px;
  font-size: 11px;
  color: #f1f5f9;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.35);
  white-space: nowrap;
}

.hud-item {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.hud-icon {
  font-size: 11px;
  opacity: 0.85;
}

.hud-val {
  color: #f1f5f9;
  font-weight: 600;
  font-family: 'JetBrains Mono', Consolas, Menlo, Monaco, monospace;
  font-size: 11px;
}

.hud-placeholder {
  color: #64748b;
  font-weight: 400;
  font-size: 10.5px;
}

.zoom-highlight {
  color: #38bdf8;
  font-weight: 700;
  font-size: 10.5px;
  font-family: 'JetBrains Mono', Consolas, Monaco, monospace;
  background: rgba(56, 189, 248, 0.15);
  padding: 1px 6px;
  border-radius: 4px;
  border: 1px solid rgba(56, 189, 248, 0.35);
  white-space: nowrap;
}

.zoom-highlight.zoom-regional {
  color: #4ade80;
  background: rgba(34, 197, 94, 0.2);
  border-color: rgba(34, 197, 94, 0.45);
}

/* ===================================================
   精细化雷达大区作用范围边界框徽章 (Boundary Badge)
   =================================================== */
::v-deep .radar-boundary-badge-container {
  background: transparent;
  border: none;
  pointer-events: none; /* 穿透鼠标交互，绝不阻挡地图拖拽与探针拾取 */
}

::v-deep .radar-boundary-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(15, 23, 42, 0.88);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(56, 189, 248, 0.5);
  border-radius: 4px;
  padding: 3px 8px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.5), 0 0 10px rgba(56, 189, 248, 0.2);
  user-select: none;
  white-space: nowrap;
}

::v-deep .radar-boundary-badge .badge-flag {
  font-size: 13px;
  line-height: 1;
}

::v-deep .radar-boundary-badge .badge-title {
  font-size: 11px;
  font-weight: 700;
  color: #38bdf8;
  letter-spacing: 0.2px;
}

::v-deep .radar-boundary-badge .badge-coords {
  font-size: 9.5px;
  font-family: 'JetBrains Mono', Consolas, Monaco, monospace;
  color: #94a3b8;
  padding-left: 6px;
  border-left: 1px solid rgba(255, 255, 255, 0.15);
}

/* ===================================================
   空间距离测量小部件 (Floating Toolbar & Panel Button)
   =================================================== */
.map-floating-toolbar {
  position: absolute;
  top: 14px;
  left: 14px;
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(15, 23, 42, 0.88);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(56, 189, 248, 0.35);
  border-radius: 8px;
  padding: 4px 6px;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.45);
}

.floating-tool-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 11px;
  background: rgba(30, 41, 59, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 6px;
  color: #e2e8f0;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
}

.floating-tool-btn:hover {
  background: rgba(56, 189, 248, 0.2);
  border-color: #38bdf8;
  color: #38bdf8;
}

.floating-tool-btn.active {
  background: rgba(239, 68, 68, 0.28);
  border-color: #ef4444;
  color: #fca5a5;
  box-shadow: 0 0 12px rgba(239, 68, 68, 0.45);
  animation: measure-pulse 1.8s infinite;
}

@keyframes measure-pulse {
  0%, 100% { border-color: #ef4444; }
  50% { border-color: rgba(239, 68, 68, 0.4); }
}

.floating-clear-btn {
  padding: 5px 9px;
  background: rgba(51, 65, 85, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 6px;
  color: #cbd5e1;
  font-size: 11px;
  cursor: pointer;
  transition: all 0.2s;
}

.floating-clear-btn:hover {
  background: rgba(239, 68, 68, 0.25);
  border-color: #ef4444;
  color: #fca5a5;
}

/* 控制面板内部测距行 */
.measure-panel-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.panel-measure-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 7px 12px;
  background: rgba(30, 41, 59, 0.85);
  border: 1px solid rgba(56, 189, 248, 0.35);
  border-radius: 6px;
  color: #38bdf8;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.panel-measure-btn:hover {
  background: rgba(56, 189, 248, 0.22);
  border-color: #38bdf8;
}

.panel-measure-btn.active {
  background: rgba(239, 68, 68, 0.25);
  border-color: #ef4444;
  color: #fca5a5;
  box-shadow: 0 0 12px rgba(239, 68, 68, 0.35);
}

.panel-measure-clear {
  padding: 7px 12px;
  background: rgba(51, 65, 85, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 6px;
  color: #94a3b8;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s;
}

.panel-measure-clear:hover {
  background: rgba(239, 68, 68, 0.2);
  border-color: #ef4444;
  color: #fca5a5;
}

/* ===================================================
   DrawPlug 测距标签样式 (DivIcon 挂载在 overlayPane)
   =================================================== */
::v-deep .measure-label-wrapper {
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
}

::v-deep .measure-label {
  color: #ffffff;
  padding: 3px 8px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 700;
  font-family: 'JetBrains Mono', Consolas, Monaco, monospace;
  white-space: nowrap;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.6);
  transform: translate(-50%, -50%);
  position: absolute;
  pointer-events: none;
  border: 1px solid rgba(255, 255, 255, 0.3);
  letter-spacing: 0.3px;
}
</style>
