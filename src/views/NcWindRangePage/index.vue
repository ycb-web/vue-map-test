<template>
  <div class="nc-range-page">
    <!-- 地图底图组件 -->
    <BaseMap
      :options="mapOptions"
      :basemap="showBaseMapTiles ? currentBasemap : 'none'"
      :ocean-background="oceanBgColor"
      :show-annotation="showBaseMapTiles"
      @map-ready="onMapReady"
    />

    <!-- 右上角控制器与参数看板 (采用与「风场」一致的图层控制选项) -->
    <div class="info-panel" :class="{ collapsed: panelCollapsed }">
      <div class="panel-header" @click="panelCollapsed = !panelCollapsed">
        <span class="panel-title">🌊 NC风浪叠加 (同「风场」引擎)</span>
        <span class="toggle-icon">{{ panelCollapsed ? "▼" : "▲" }}</span>
      </div>

      <div class="panel-body" v-show="!panelCollapsed">
        <!-- 风场图层控制（与「风场」页面完全一致的 4 大图层） -->
        <div class="section-title">🎨 风场叠加图层</div>

        <!-- 1. 等值面矢量场 (方案 A: 纯前端现场 Marching Squares 追踪，置于最底层) -->
        <div class="control-item">
          <label>
            <input type="checkbox" v-model="showIsosurface" @change="toggleIsosurface" />
            <span class="highlight-label">🌟 等值面矢量场 (前端现场计算)</span>
          </label>
        </div>
        <div v-if="showIsosurface" class="sub-controls">
          <div class="slider-row">
            <span>填充透明度: {{ isosurfaceOpacity.toFixed(2) }}</span>
            <input
              type="range"
              min="0.1"
              max="1"
              step="0.05"
              v-model.number="isosurfaceOpacity"
              @input="updateIsosurfaceStyle"
            />
          </div>
          <div class="control-row inline-row">
            <label class="sub-checkbox">
              <input type="checkbox" v-model="showBorder" @change="updateIsosurfaceStyle" />
              <span>显示面边界线</span>
            </label>
          </div>
          <div class="control-row smooth-row">
            <span class="sub-label">圆滑割角平滑:</span>
            <div class="iter-btn-group">
              <button
                v-for="n in [0, 1, 2, 3]"
                :key="n"
                class="iter-btn"
                :class="{ active: smoothIterations === n }"
                @click="setSmoothIterations(n)"
              >
                {{ n === 0 ? '原始' : `${n}次` }}
              </button>
            </div>
          </div>
        </div>

        <!-- 2. 粒子图层 (Windy 动态流场，浮在等值面上方) -->
        <div class="control-item">
          <label>
            <input type="checkbox" v-model="showVector" @change="toggleVector" />
            <span>粒子图层 (动态流场动画)</span>
          </label>
        </div>

        <!-- 3. 箭头图层 -->
        <div class="control-item">
          <label>
            <input type="checkbox" v-model="showArrow" @change="toggleArrow" />
            <span>箭头图层 (矢量箭头)</span>
          </label>
        </div>
        <div v-if="showArrow" class="sub-controls">
          <div class="slider-row">
            <span>箭头间距: {{ arrowGridSize }}px</span>
            <input
              type="range"
              min="20"
              max="80"
              step="5"
              v-model.number="arrowGridSize"
              @input="updateArrowLayer"
            />
          </div>
        </div>

        <!-- 4. 风杆图层 -->
        <div class="control-item">
          <label>
            <input type="checkbox" v-model="showBarb" @change="toggleBarb" />
            <span>风杆图层 (专业气象风向标)</span>
          </label>
        </div>

        <!-- 5. 图包显示隐藏与背景色调试 -->
        <div class="control-item">
          <label>
            <input type="checkbox" v-model="showBaseMapTiles" />
            <span class="highlight-label">🗺️ 天地图图包显示</span>
          </label>
        </div>
        <div class="sub-controls">
          <div class="control-row inline-row">
            <span class="sub-label">底色调试:</span>
            <div class="iter-btn-group">
              <button
                class="iter-btn"
                :class="{ active: oceanBgColor === '#aac6ee' }"
                @click="oceanBgColor = '#aac6ee'"
              >
                🌊 默认海蓝
              </button>
              <button
                class="iter-btn"
                :class="{ active: oceanBgColor === '#ff0000' }"
                @click="oceanBgColor = '#ff0000'"
                style="color: #ff4d4f; border-color: #ff4d4f;"
              >
                🔴 调试红
              </button>
            </div>
          </div>
        </div>

        <div class="divider"></div>

        <!-- ⚡ 方案 A 性能实时监控看板 (现场转换效率验证) -->
        <div class="section-title benchmark-title">⚡ 灰度图转等值面耗时实测 (方案 A)</div>
        <div class="benchmark-card">
          <div class="info-row">
            <span class="label">切片体积:</span>
            <span class="val success">19.2 KB (节省 90% 带宽)</span>
          </div>
          <div class="info-row main-cost-row">
            <span class="label">等值面全流程总耗时:</span>
            <span class="val highlight-timer large-timer">{{ totalCostMs }} ms</span>
          </div>
          <div class="cost-breakdown">
            <div class="breakdown-item">
              <span class="b-label">灰度图解码:</span>
              <span class="b-val">{{ decodeCostMs }} ms</span>
            </div>
            <div class="breakdown-item">
              <span class="b-label">等值线追踪:</span>
              <span class="b-val">{{ algoCostMs }} ms</span>
            </div>
            <div class="breakdown-item">
              <span class="b-label">图层渲染上图:</span>
              <span class="b-val">{{ renderCostMs }} ms</span>
            </div>
          </div>
          <div class="info-row">
            <span class="label">生成等值面要素:</span>
            <span class="val">{{ isosurfaceFeatureCount }} 个 MultiPolygon</span>
          </div>
          <div class="info-row">
            <span class="label">当前计算时效:</span>
            <span class="val font-mono">{{ currentForecastTimeStr }} (+{{ pad3(currentHour) }}h)</span>
          </div>
          <div class="tip-sub">
            💡 灰度图现场解算，远快于向后端网络拉取 200KB GeoJSON（80~200ms），底图完全透出！
          </div>
        </div>

        <!-- 选中要素属性 (鼠标悬浮拾取) -->
        <div class="section-title" style="margin-top: 8px">🎯 选中海区风速属性</div>
        <div class="status-box">
          <div v-if="hoveredFeature">
            <div class="prop-line">
              <b>风速阈值:</b>
              <span class="highlight-val">{{ hoveredFeature.hvalue }} m/s</span>
            </div>
            <div class="prop-line">
              <b>风力等级:</b>
              <span class="level-badge" :style="{ background: hoveredFeature.color }">
                {{ hoveredFeature.levelText }}
              </span>
            </div>
          </div>
          <div v-else class="empty-tip">鼠标悬浮在风场多边形上查看数值</div>
        </div>

        <!-- 蒲福风级图例条 -->
        <div class="section-title" style="margin-top: 6px">📊 蒲福风级图例 (m/s)</div>
        <div class="legend-bar">
          <div
            v-for="item in windLevels"
            :key="item.threshold"
            class="legend-segment"
            :style="{ background: item.color }"
            :title="item.text"
          >
            {{ item.threshold }}
          </div>
        </div>

        <div class="divider"></div>

        <!-- 当前时效与数据源信息 -->
        <div class="section-title">⏱️ 当前预报时效</div>
        <div class="info-row">
          <span class="label">预报时刻：</span>
          <span class="val highlight">{{ currentForecastTimeStr }}</span>
        </div>
        <div class="info-row">
          <span class="label">数据源载体：</span>
          <span class="val font-mono">wind_uv_{{ pad3(currentHour) }}.png (19KB)</span>
        </div>
        <div class="info-row">
          <span class="label">解算状态：</span>
          <span class="val success">本地内存极速解码 (221×141)</span>
        </div>

        <div class="divider"></div>

        <!-- 底图切换 -->
        <div class="section-title">🗺️ 底图切换</div>
        <div class="btn-group">
          <button
            v-for="b in basemaps"
            :key="b.key"
            :class="['btn-chip', { active: currentBasemap === b.key }]"
            @click="switchBasemap(b.key)"
          >
            {{ b.label }}
          </button>
        </div>

        <!-- 快捷视野 -->
        <div class="action-btns">
          <button class="action-btn primary" @click="fitToFullRange">🔍 全网格视野</button>
          <button class="action-btn success" @click="locateToPearlRiver">🌉 聚焦港珠澳大桥</button>
        </div>
      </div>
    </div>

    <!-- 底部 5-Day 时间播放轴 (Timeline Player Dock) -->
    <div class="timeline-player-dock">
      <!-- 顶部时间卡片与快速选天 -->
      <div class="dock-header">
        <div class="current-time-badge">
          <span class="live-dot"></span>
          <span class="forecast-clock">{{ currentForecastTimeStr }}</span>
          <span class="hour-counter">时效: +{{ currentHour }}h / 120h</span>
        </div>

        <!-- 灰度图计算等值面实时耗时看板 -->
        <div class="compute-cost-badge" title="灰度图转等值面全流程耗时">
          <span class="cost-icon">⚡ 等值面计算:</span>
          <span class="cost-num">{{ totalCostMs }} ms</span>
          <span class="cost-detail">(解码 {{ decodeCostMs }}ms · 算法 {{ algoCostMs }}ms · 渲染 {{ renderCostMs }}ms)</span>
        </div>

        <!-- 5天快捷跳跃按钮 -->
        <div class="day-tabs">
          <button
            v-for="(day, dIdx) in dayList"
            :key="dIdx"
            :class="['day-tab-btn', { active: currentDayIndex === dIdx }]"
            @click="jumpToDay(dIdx)"
          >
            {{ day.label }}
          </button>
        </div>

        <!-- 播放倍速 -->
        <div class="speed-toggle">
          <button
            v-for="s in [1, 2, 4]"
            :key="s"
            :class="['speed-btn', { active: playSpeed === s }]"
            @click="playSpeed = s"
          >
            {{ s }}x
          </button>
        </div>
      </div>

      <!-- 播放控制器与进度滑块 -->
      <div class="dock-body">
        <div class="playback-controls">
          <button class="ctrl-btn" title="后退1小时" @click="stepHour(-1)">⏮</button>
          <button
            class="ctrl-btn play-btn"
            :class="{ playing: isPlaying }"
            :title="isPlaying ? '暂停' : '自动播放'"
            @click="togglePlay"
          >
            {{ isPlaying ? "⏸" : "▶" }}
          </button>
          <button class="ctrl-btn" title="前进1小时" @click="stepHour(1)">⏭</button>
        </div>

        <!-- 进度条轨道 -->
        <div class="slider-wrapper">
          <input
            type="range"
            min="0"
            max="119"
            step="1"
            v-model.number="currentHour"
            @input="onSliderInput"
            class="timeline-slider"
          />
          <!-- 5天刻度标记线 -->
          <div class="timeline-ticks">
            <div
              v-for="(day, dIdx) in dayList"
              :key="dIdx"
              class="tick-mark"
              :style="{ left: (dIdx * 24 / 119 * 100) + '%' }"
            >
              <div class="tick-line"></div>
              <span class="tick-text">{{ day.shortDate }}</span>
            </div>
            <div class="tick-mark end-tick" style="left: 100%;">
              <div class="tick-line"></div>
              <span class="tick-text">结束 (5天)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import L from "leaflet";
import "@/utils/leaflet-vector-scalar";
import BaseMap from "@/components/BaseMap.vue";
import {
  gridToIsosurfaceGeoJSON,
  DEFAULT_WIND_LEVELS,
} from "@/utils/marching-squares-geojson";

export default {
  name: "NcWindRangePage",
  components: {
    BaseMap,
  },
  data() {
    return {
      map: null,
      showBaseMapTiles: true, // 天地图底图显示隐藏
      oceanBgColor: "#aac6ee", // 海面垫底背景色 (#aac6ee / #ff0000)
      currentBasemap: "tianditu_vec_transparent", // 默认启用天地图透明海(海陆分离)
      basemaps: [
        { key: "tianditu_vec_transparent", label: "天地图(透明海/海陆分离)" },
        { key: "tianditu_vec", label: "天地图电子地图(原始)" },
        { key: "tianditu_img", label: "天地图影像" },
        { key: "tianditu_ter", label: "天地图地形" },
        { key: "gaode_vec", label: "高德地图" },
        { key: "dark", label: "暗色底图" },
      ],
      mapOptions: {
        center: [20.25, 113.25],
        zoom: 6,
        zoomControl: false,
      },
      bounds: [
        [15.0, 105.0],
        [25.5, 121.5],
      ],
      zhuhaiCenter: [22.26, 113.73], // 港珠澳大桥主跨核心坐标 (22.26°N, 113.73°E)
      rectLayer: null,
      cornerMarkers: [],
      zhuhaiMarker: null,

      // ========== 等值面 GeoJSON 图层控制 (方案 A 纯前端实时转换，置于最底层) ==========
      showIsosurface: true, // 默认开启等值面矢量场 (底层)
      isosurfaceOpacity: 0.65, // 面填充透明度
      showBorder: true, // 是否显示面边界线
      smoothIterations: 2, // Chaikin 平滑轮次 (0, 1, 2, 3)
      isosurfaceLayer: null, // L.geoJSON 图层实例
      windLevels: DEFAULT_WIND_LEVELS, // 蒲福风级与配色标准

      // 实时转换性能监控指标
      totalCostMs: 0, // 全流程总耗时 (ms)
      decodeCostMs: 0, // 灰度图加载与反解耗时 (ms)
      algoCostMs: 0, // Marching Squares 追踪算法耗时 (ms)
      renderCostMs: 0, // 图层渲染上图耗时 (ms)
      contourCostMs: 0, // 算法计算耗时兼容字段 (ms)
      isosurfaceFeatureCount: 0, // 生成的多边形要素数
      hoveredFeature: null, // 鼠标悬浮拾取的风速要素属性

      // ========== 粒子与矢量图层显示状态 ==========
      showVector: false, // 粒子图层 (默认不显示，可手动勾选开启)
      showArrow: false, // 箭头图层
      showBarb: false, // 风杆图层
      panelCollapsed: false,

      // 鼠标点击弹出卡片 (Popup)
      clickPopup: null,
      clickPointLayer: null, // 点击位置叠加的小圆点标记
      lastClickedLatLng: null,

      // 图层参数配置
      arrowGridSize: 40,

      // 图层实例
      velocityLayer: null,
      arrowLayer: null,
      barbLayer: null,

      // 数据与缓存
      currentWindData: null,
      dataCache: new Map(), // hour -> windData GRIB 结构

      // 5-Day 时间播放轴数据 (120小时)
      baseTime: new Date("2026-10-09T13:00:00+08:00"),
      currentHour: 0,
      isPlaying: false,
      playSpeed: 1, // 1x, 2x, 4x
      timer: null,

      dayList: [
        { label: "Day 1 (10-09)", shortDate: "10-09", startHour: 0 },
        { label: "Day 2 (10-10)", shortDate: "10-10", startHour: 24 },
        { label: "Day 3 (10-11)", shortDate: "10-11", startHour: 48 },
        { label: "Day 4 (10-12)", shortDate: "10-12", startHour: 72 },
        { label: "Day 5 (10-13)", shortDate: "10-13", startHour: 96 },
      ],
    };
  },
  computed: {
    currentForecastTime() {
      return new Date(this.baseTime.getTime() + this.currentHour * 3600 * 1000);
    },
    currentForecastTimeStr() {
      const d = this.currentForecastTime;
      const pad = (n) => String(n).padStart(2, "0");
      const month = pad(d.getMonth() + 1);
      const day = pad(d.getDate());
      const hours = pad(d.getHours());
      return `${d.getFullYear()}-${month}-${day} ${hours}:00`;
    },
    currentDayIndex() {
      return Math.min(4, Math.floor(this.currentHour / 24));
    },
  },
  watch: {
    currentHour(newHour) {
      this.loadAndApplyHourData(newHour);
    },
    playSpeed() {
      if (this.isPlaying) {
        this.stopPlay();
        this.startPlay();
      }
    },
  },
  mounted() {},
  beforeDestroy() {
    this.stopPlay();
    this.removeWindLayers();
    if (this.map) {
      this.map.off("click", this.handleMapClick);
    }
    if (this.clickPopup) {
      this.map.removeLayer(this.clickPopup);
      this.clickPopup = null;
    }
    if (this.clickPointLayer) {
      this.map.removeLayer(this.clickPointLayer);
      this.clickPointLayer = null;
    }
    delete window.closeMarinePopup;
  },
  methods: {
    pad3(n) {
      return String(n).padStart(3, "0");
    },

    onMapReady(mapInstance) {
      this.map = mapInstance;
      this.initNcRangeBoundary();
      this.initPanes();
      this.map.on("click", this.handleMapClick);
      window.closeMarinePopup = () => {
        if (this.clickPopup && this.map) {
          this.map.closePopup(this.clickPopup);
        }
        if (this.clickPointLayer && this.map) {
          this.map.removeLayer(this.clickPointLayer);
          this.clickPointLayer = null;
        }
      };
      this.loadAndApplyHourData(this.currentHour);
      this.fitToFullRange();
    },

    initPanes() {
      if (!this.map) return;
      // 1. 等值面专属 Pane: 严格沉底在最下方 (zIndex 350)，高于瓦片(200)，低于一切上层元素
      if (!this.map.getPane("isosurfacePane")) {
        const isoPane = this.map.createPane("isosurfacePane");
        isoPane.style.zIndex = 350;
      }
      // 2. 粒子流场专属 Pane: 浮在最上方 (zIndex 450)，高于 overlayPane(400)，且事件穿透
      if (!this.map.getPane("particlePane")) {
        const pPane = this.map.createPane("particlePane");
        pPane.style.zIndex = 450;
        pPane.style.pointerEvents = "none";
      }
    },

    initNcRangeBoundary() {
      if (!this.map) return;

      // 绘制范围矩形边界
      this.rectLayer = L.rectangle(this.bounds, {
        color: "#1890ff",
        weight: 2,
        dashArray: "6, 6",
        fillColor: "transparent",
      }).addTo(this.map);

      // 港珠澳大桥核心地标与常驻标牌
      const zhuhaiIcon = L.divIcon({
        className: "zhuhai-core-marker",
        html: `
          <div class="pulse-container">
            <div class="pulse-ring"></div>
            <div class="pulse-dot">🌉</div>
          </div>
        `,
        iconSize: [32, 32],
        iconAnchor: [16, 16],
      });
      this.zhuhaiMarker = L.marker(this.zhuhaiCenter, { icon: zhuhaiIcon }).addTo(this.map);
      this.zhuhaiMarker.bindTooltip("<b>🌉 港珠澳大桥</b><br/>东经 113.73°E, 北纬 22.26°N", {
        permanent: true,
        direction: "top",
        offset: [0, -12],
        className: "bridge-tooltip",
      });
    },

    // 核心：读取 RGBA 纹理图片并在内存中反解出 GRIB 网格数据对象
    async loadAndApplyHourData(hour) {
      if (this.dataCache.has(hour)) {
        this.decodeCostMs = 0.2; // 内存缓存秒级命中
        this.currentWindData = this.dataCache.get(hour);
        this.updateWindLayers();
        return;
      }

      const tDecode0 = performance.now();
      const windData = await this.decodePngToWindData(hour);
      if (windData) {
        this.decodeCostMs = Number((performance.now() - tDecode0).toFixed(1));
        this.dataCache.set(hour, windData);
        this.currentWindData = windData;
        this.updateWindLayers();

        // 预加载接下来 3 帧
        for (let i = 1; i <= 3; i++) {
          const next = (hour + i) % 120;
          if (!this.dataCache.has(next)) {
            this.decodePngToWindData(next).then((res) => {
              if (res) this.dataCache.set(next, res);
            });
          }
        }
      }
    },

    decodePngToWindData(hour) {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = `/nc-wind-uv/wind_uv_${this.pad3(hour)}.png`;
        img.onload = () => {
          const offCanvas = document.createElement("canvas");
          offCanvas.width = 221;
          offCanvas.height = 141;
          const offCtx = offCanvas.getContext("2d");
          offCtx.drawImage(img, 0, 0);
          const imgData = offCtx.getImageData(0, 0, 221, 141);
          const raw = imgData.data;

          const totalPoints = 221 * 141;
          const uArray = new Array(totalPoints);
          const vArray = new Array(totalPoints);
          const speedArray = new Array(totalPoints);

          for (let i = 0; i < totalPoints; i++) {
            const idx = i * 4;
            const a = raw[idx + 3];
            if (a === 0) {
              // 陆地区域 / 缺测点，设为 null（保持天地图底图完全透明，不产生伪等值线）
              uArray[i] = null;
              vArray[i] = null;
              speedArray[i] = null;
            } else {
              // 解码物理 U / V 分量 (m/s)
              const u = (raw[idx] - 128) * 0.25;
              const v = (raw[idx + 1] - 128) * 0.25;
              uArray[i] = u;
              vArray[i] = v;
              speedArray[i] = Math.sqrt(u * u + v * v);
            }
          }

          const timeStr = this.currentForecastTimeStr;
          const result = [
            {
              header: {
                parameterCategory: 2,
                parameterCategoryName: "nc",
                parameterNumber: 2,
                parameterNumberName: "u10",
                numberPoints: totalPoints,
                nx: 221,
                ny: 141,
                lo1: 105.0,
                la1: 25.5,
                lo2: 121.5,
                la2: 15.0,
                dx: 0.075,
                dy: 0.075,
                refTime: timeStr,
              },
              data: uArray,
            },
            {
              header: {
                parameterCategory: 2,
                parameterCategoryName: "nc",
                parameterNumber: 3,
                parameterNumberName: "v10",
                numberPoints: totalPoints,
                nx: 221,
                ny: 141,
                lo1: 105.0,
                la1: 25.5,
                lo2: 121.5,
                la2: 15.0,
                dx: 0.075,
                dy: 0.075,
                refTime: timeStr,
              },
              data: vArray,
            },
            {
              header: {
                parameterCategory: 2,
                parameterCategoryName: "nc",
                parameterNumber: 1,
                parameterNumberName: "speed",
                parameterUnit: "m/s",
                numberPoints: totalPoints,
                nx: 221,
                ny: 141,
                lo1: 105.0,
                la1: 25.5,
                lo2: 121.5,
                la2: 15.0,
                dx: 0.075,
                dy: 0.075,
                refTime: timeStr,
              },
              data: speedArray,
            },
          ];

          resolve(result);
        };
        img.onerror = () => resolve(null);
      });
    },

    // 更新各图层数据 (等值面在底层，粒子在顶层)
    updateWindLayers() {
      if (!this.currentWindData || !this.map) return;

      // 1. 等值面矢量场 (方案 A 纯前端实时转换，严格置于最底层的 isosurfacePane)
      if (this.showIsosurface) {
        this.renderIsosurfaceLayer();
      }

      // 2. 粒子图层 (Windy 动态流场，浮在顶层 particlePane)
      if (this.showVector) {
        if (this.velocityLayer) {
          this.velocityLayer.setData(this.currentWindData);
        } else {
          this.addVectorLayer();
        }
      }

      // 3. 箭头图层
      if (this.arrowLayer) {
        this.arrowLayer.setData(this.currentWindData);
      }

      // 4. 风杆图层
      if (this.barbLayer) {
        this.barbLayer.setData(this.currentWindData);
      }

      // 5. 若当前打开了点击卡片，随时间更新联动刷新卡片数值
      if (this.clickPopup && this.clickPopup.isOpen() && this.lastClickedLatLng) {
        this.showPointPopup(this.lastClickedLatLng);
      }
    },

    /**
     * 核心：现场执行 Marching Squares 等值面追踪并挂载 GeoJSON 图层
     * 严格沉底在 isosurfacePane (zIndex 350)
     */
    renderIsosurfaceLayer() {
      if (!this.map) return;
      if (!this.showIsosurface || !this.currentWindData) {
        if (this.isosurfaceLayer) {
          this.map.removeLayer(this.isosurfaceLayer);
          this.isosurfaceLayer = null;
        }
        return;
      }

      // 提取风速矩阵数据
      const speedRecord = this.currentWindData.find(
        (r) => r.header && r.header.parameterNumberName === "speed"
      );
      if (!speedRecord || !speedRecord.data) return;

      // 纯前端极速运行 Marching Squares + 坐标投影 + Chaikin 割角平滑
      const tAlgo0 = performance.now();
      const res = gridToIsosurfaceGeoJSON({
        data: speedRecord.data,
        width: 221,
        height: 141,
        bounds: this.bounds,
        levels: this.windLevels,
        smoothIterations: this.smoothIterations,
      });
      this.algoCostMs = Number((performance.now() - tAlgo0).toFixed(1));
      this.contourCostMs = this.algoCostMs;
      this.isosurfaceFeatureCount = res.featureCount;

      // 移除旧图层并重建
      if (this.isosurfaceLayer) {
        this.map.removeLayer(this.isosurfaceLayer);
        this.isosurfaceLayer = null;
      }

      // 确保等值面图层严格沉底在最下方 (zIndex 350)
      this.initPanes();

      const tRender0 = performance.now();
      this.isosurfaceLayer = L.geoJSON(res.geojson, {
        pane: "isosurfacePane",
        style: (feature) => {
          const color = feature.properties.color || "#00e5ff";
          return {
            fillColor: color,
            fillOpacity: this.isosurfaceOpacity,
            weight: this.showBorder ? 1 : 0,
            color: color,
            opacity: 0.85,
          };
        },
        onEachFeature: (feature, layer) => {
          layer.on({
            click: (e) => {
              L.DomEvent.stopPropagation(e);
              this.showPointPopup(e.latlng);
            },
            mouseover: (e) => {
              this.hoveredFeature = feature.properties;
              e.target.setStyle({
                weight: 2,
                color: "#ffffff",
                fillOpacity: Math.min(1, this.isosurfaceOpacity + 0.2),
              });
            },
            mouseout: (e) => {
              this.hoveredFeature = null;
              if (this.isosurfaceLayer) {
                this.isosurfaceLayer.resetStyle(e.target);
              }
            },
          });
        },
      });

      this.isosurfaceLayer.addTo(this.map);
      this.renderCostMs = Number((performance.now() - tRender0).toFixed(1));
      this.totalCostMs = Number(
        (this.decodeCostMs + this.algoCostMs + this.renderCostMs).toFixed(1)
      );
    },

    handleMapClick(e) {
      this.showPointPopup(e.latlng);
    },

    /**
     * 根据经纬度在当前网格中精准采样物理风速与气象风向
     */
    sampleWindAtLatLng(latlng) {
      if (!this.currentWindData) return null;
      const uRec = this.currentWindData.find(
        (r) => r.header && (r.header.parameterNumber === 2 || r.header.parameterNumberName === "u10")
      );
      const vRec = this.currentWindData.find(
        (r) => r.header && (r.header.parameterNumber === 3 || r.header.parameterNumberName === "v10")
      );
      if (!uRec || !vRec) return null;

      const header = uRec.header;
      const nx = header.nx; // 221
      const ny = header.ny; // 141
      const lo1 = header.lo1; // 105.0
      const la1 = header.la1; // 25.5
      const dx = 0.075;
      const dy = 0.075; // 北往南步长

      const lng = latlng.lng;
      const lat = latlng.lat;

      if (lng < lo1 || lng > 121.5 || lat > la1 || lat < 15.0) {
        return { isOutOfRange: true };
      }

      const fi = (lng - lo1) / dx;
      const fj = (la1 - lat) / dy;

      const i0 = Math.floor(fi);
      const j0 = Math.floor(fj);

      if (i0 < 0 || i0 >= nx - 1 || j0 < 0 || j0 >= ny - 1) {
        return { isOutOfRange: true };
      }

      const i1 = i0 + 1;
      const j1 = j0 + 1;
      const fx = fi - i0;
      const fy = fj - j0;

      const uData = uRec.data;
      const vData = vRec.data;

      const idx00 = j0 * nx + i0;
      const idx10 = j0 * nx + i1;
      const idx01 = j1 * nx + i0;
      const idx11 = j1 * nx + i1;

      const u00 = uData[idx00], u10 = uData[idx10], u01 = uData[idx01], u11 = uData[idx11];
      const v00 = vData[idx00], v10 = vData[idx10], v01 = vData[idx01], v11 = vData[idx11];

      // 陆地掩膜校验
      if (u00 === null || u10 === null || u01 === null || u11 === null) {
        const nearestIdx = (fx < 0.5 ? i0 : i1) + (fy < 0.5 ? j0 : j1) * nx;
        if (uData[nearestIdx] === null) {
          return { isLand: true };
        }
      }

      // 双线性插值真实物理量
      const uSafe00 = u00 || 0, uSafe10 = u10 || 0, uSafe01 = u01 || 0, uSafe11 = u11 || 0;
      const vSafe00 = v00 || 0, vSafe10 = v10 || 0, vSafe01 = v01 || 0, vSafe11 = v11 || 0;

      const u = uSafe00 * (1 - fx) * (1 - fy) + uSafe10 * fx * (1 - fy) + uSafe01 * (1 - fx) * fy + uSafe11 * fx * fy;
      const v = vSafe00 * (1 - fx) * (1 - fy) + vSafe10 * fx * (1 - fy) + vSafe01 * (1 - fx) * fy + vSafe11 * fx * fy;

      const speed = Math.sqrt(u * u + v * v);
      // 气象风向（来向）：以正北为0度，顺时针
      const direction = Math.round((Math.atan2(-u, -v) * 180 / Math.PI + 360) % 360);

      const directions = ["北", "东北", "东", "东南", "南", "西南", "西", "西北"];
      const dirText = directions[Math.round(direction / 45) % 8];

      return {
        speed: parseFloat(speed.toFixed(1)),
        direction,
        dirText,
        levelInfo: this.getBeaufortLevelInfo(speed),
      };
    },

    getBeaufortLevelInfo(speed) {
      if (speed < 0.3) return { level: 0, text: "0级", color: "#e0f2fe", textColor: "#0369a1" };
      if (speed < 1.6) return { level: 1, text: "1级", color: "#bae6fd", textColor: "#0284c7" };
      if (speed < 3.4) return { level: 2, text: "2级", color: "#7dd3fc", textColor: "#0369a1" };
      if (speed < 5.5) return { level: 3, text: "3级", color: "#bbf7d0", textColor: "#15803d" };
      if (speed < 8.0) return { level: 4, text: "4级", color: "#86efac", textColor: "#166534" };
      if (speed < 10.8) return { level: 5, text: "5级", color: "#7cd4b2", textColor: "#064e3b" };
      if (speed < 13.9) return { level: 6, text: "6级", color: "#fde047", textColor: "#854d0e" };
      if (speed < 17.2) return { level: 7, text: "7级", color: "#fed7aa", textColor: "#9a3412" };
      if (speed < 20.8) return { level: 8, text: "8级", color: "#fdba74", textColor: "#9a3412" };
      if (speed < 24.5) return { level: 9, text: "9级", color: "#fca5a5", textColor: "#991b1b" };
      if (speed < 28.5) return { level: 10, text: "10级", color: "#f87171", textColor: "#7f1d1d" };
      if (speed < 32.7) return { level: 11, text: "11级", color: "#ef4444", textColor: "#ffffff" };
      return { level: 12, text: "12级", color: "#dc2626", textColor: "#ffffff" };
    },

    showPointPopup(latlng) {
      if (!this.map) return;
      this.lastClickedLatLng = latlng;

      // 1. 在地图点击精确位置叠加一个小圆点标记
      if (this.clickPointLayer) {
        this.map.removeLayer(this.clickPointLayer);
      }
      this.clickPointLayer = L.circleMarker(latlng, {
        radius: 4.5,
        color: "#0284c7", // 蔚蓝外圈
        weight: 2,
        fillColor: "#ffffff", // 白芯
        fillOpacity: 1,
        pane: "markerPane",
        className: "wave-click-circle-marker",
      }).addTo(this.map);

      const sample = this.sampleWindAtLatLng(latlng);
      if (!sample) return;

      const lngStr = (latlng.lng >= 0 ? "E:" : "W:") + Math.abs(latlng.lng).toFixed(4) + "°";
      const latStr = (latlng.lat >= 0 ? "N:" : "S:") + Math.abs(latlng.lat).toFixed(4) + "°";

      let bodyHtml = "";
      if (sample.isOutOfRange) {
        bodyHtml = '<div class="marine-popup-tip">预报网格范围外</div>';
      } else if (sample.isLand) {
        bodyHtml = '<div class="marine-popup-tip">🏝️ 陆地区域 (无海面数据)</div>';
      } else {
        bodyHtml = `
          <div class="marine-popup-left">
            <div class="data-row"><span class="k">风速:</span> <span class="v">${sample.speed}m/s</span></div>
            <div class="data-row"><span class="k">风向:</span> <span class="v">${sample.direction}°</span></div>
          </div>
          <div class="marine-popup-right">
            <div class="level-capsule" style="background:${sample.levelInfo.color}; color:${sample.levelInfo.textColor};">
              <span class="cap-lvl">${sample.levelInfo.text}</span>
              <span class="cap-arrow" style="transform: rotate(${sample.direction}deg);">▲</span>
              <span class="cap-dir">${sample.dirText}</span>
            </div>
          </div>
        `;
      }

      const html = `
        <div class="marine-popup-card">
          <div class="marine-popup-header">
            <span class="coord-label">${lngStr}&nbsp;&nbsp;${latStr}</span>
            <span class="close-icon" onclick="window.closeMarinePopup && window.closeMarinePopup()">✕</span>
          </div>
          <div class="marine-popup-body">
            ${bodyHtml}
          </div>
        </div>
      `;

      if (!this.clickPopup) {
        this.clickPopup = L.popup({
          className: "marine-data-popup",
          closeButton: false,
          autoPan: true,
          offset: [0, -2], // 精准贴合小圆点正上方尖角
          minWidth: 195,
        });

        // 当 popup 被关闭时同步移除小圆点
        this.clickPopup.on("remove", () => {
          if (this.clickPointLayer && this.map) {
            this.map.removeLayer(this.clickPointLayer);
            this.clickPointLayer = null;
          }
        });
      }

      this.clickPopup.setLatLng(latlng).setContent(html).openOn(this.map);
    },

    toggleIsosurface() {
      if (this.showIsosurface) {
        this.renderIsosurfaceLayer();
      } else if (this.isosurfaceLayer) {
        this.map.removeLayer(this.isosurfaceLayer);
        this.isosurfaceLayer = null;
      }
    },

    updateIsosurfaceStyle() {
      if (this.isosurfaceLayer) {
        this.isosurfaceLayer.setStyle((feature) => {
          const color = feature.properties.color || "#00e5ff";
          return {
            fillColor: color,
            fillOpacity: this.isosurfaceOpacity,
            weight: this.showBorder ? 1 : 0,
            color: color,
            opacity: 0.85,
          };
        });
      }
    },

    setSmoothIterations(n) {
      this.smoothIterations = n;
      this.renderIsosurfaceLayer();
    },

    addVectorLayer() {
      if (this.velocityLayer) return;
      this.initPanes();
      const options = {
        paneName: "particlePane", // 挂载在粒子专属顶层 Pane (zIndex 450)
        colorScale: [
          "rgb(222,255,253)",
          "rgb(234,234,234)",
          "rgb(255,255,255)",
          "rgb(156,156,156)",
          "rgb(255,106,43)",
        ],
        opacity: 0.85,
        maxVelocity: 30,
        lineWidth: 1.2,
        particleMultiplier: 1 / 400,
        frameRate: 20,
      };
      this.velocityLayer = new L.velocityLayer({
        displayValues: false,
        displayOptions: {
          velocityType: "",
          displayPosition: "",
          displayEmptyString: "",
        },
        ...options,
      });
      if (this.currentWindData) {
        this.velocityLayer.setData(this.currentWindData);
      }
      this.velocityLayer.onAdd(this.map);
    },

    addArrowLayer() {
      if (this.arrowLayer) return;
      const getColor = (speed) => {
        if (speed < 5) return "#00ff00";
        if (speed < 10) return "#ffff00";
        if (speed < 15) return "#ff9900";
        if (speed < 20) return "#ff0000";
        return "#ff00ff";
      };

      const getSize = (speed) => Math.min(32, 12 + speed * 1.1);

      this.arrowLayer = L.vectorArrowLayer({
        color: "#ffffff",
        arrowSize: 20,
        gridSize: this.arrowGridSize,
        getColor: getColor,
        getSize: getSize,
        alignToGrid: false,
      });
      this.arrowLayer.addTo(this.map);
      if (this.currentWindData) {
        this.arrowLayer.setData(this.currentWindData);
      }
    },

    addBarbLayer() {
      if (this.barbLayer) return;
      this.barbLayer = L.vectorBarbLayer({
        color: "#ffffff",
        barbSize: 28,
        gridSize: 55,
      });
      this.barbLayer.addTo(this.map);
      if (this.currentWindData) {
        this.barbLayer.setData(this.currentWindData);
      }
    },

    toggleVector() {
      if (this.showVector) {
        this.addVectorLayer();
      } else if (this.velocityLayer) {
        try {
          this.velocityLayer.onRemove(this.map);
        } catch (e) {}
        this.velocityLayer = null;
      }
    },

    toggleArrow() {
      if (this.showArrow) {
        this.addArrowLayer();
      } else if (this.arrowLayer) {
        this.map.removeLayer(this.arrowLayer);
        this.arrowLayer = null;
      }
    },

    updateArrowLayer() {
      if (this.arrowLayer) {
        this.map.removeLayer(this.arrowLayer);
        this.arrowLayer = null;
      }
      if (this.showArrow) {
        this.addArrowLayer();
      }
    },

    toggleBarb() {
      if (this.showBarb) {
        this.addBarbLayer();
      } else if (this.barbLayer) {
        this.map.removeLayer(this.barbLayer);
        this.barbLayer = null;
      }
    },

    removeWindLayers() {
      if (this.isosurfaceLayer) {
        this.map.removeLayer(this.isosurfaceLayer);
        this.isosurfaceLayer = null;
      }
      if (this.velocityLayer) {
        try {
          this.velocityLayer.onRemove(this.map);
        } catch (e) {}
        this.velocityLayer = null;
      }
      if (this.arrowLayer) {
        this.map.removeLayer(this.arrowLayer);
        this.arrowLayer = null;
      }
      if (this.barbLayer) {
        this.map.removeLayer(this.barbLayer);
        this.barbLayer = null;
      }
    },

    // ========== 播放轴交互 ==========
    togglePlay() {
      if (this.isPlaying) {
        this.stopPlay();
      } else {
        this.startPlay();
      }
    },

    startPlay() {
      this.isPlaying = true;
      const intervalMs = Math.round(3000 / this.playSpeed);
      this.timer = setInterval(() => {
        if (this.currentHour >= 119) {
          this.currentHour = 0;
        } else {
          this.currentHour += 1;
        }
      }, intervalMs);
    },

    stopPlay() {
      this.isPlaying = false;
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    },

    stepHour(delta) {
      this.stopPlay();
      let next = this.currentHour + delta;
      if (next < 0) next = 119;
      if (next > 119) next = 0;
      this.currentHour = next;
    },

    jumpToDay(dayIdx) {
      this.stopPlay();
      this.currentHour = dayIdx * 24;
    },

    onSliderInput() {
      this.stopPlay();
    },

    fitToFullRange() {
      if (this.map) {
        this.map.fitBounds(this.bounds, { padding: [60, 60] });
      }
    },

    locateToPearlRiver() {
      if (this.map) {
        this.map.setView(this.zhuhaiCenter, 11, { animate: true });
      }
    },

    switchBasemap(key) {
      this.currentBasemap = key;
    },
  },
};
</script>

<style scoped>
.nc-range-page {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #f5f7fa;
}

/* 右上角控制看板 (风格与「风场」控制面板保持统一) */
.info-panel {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 310px;
  background: rgba(18, 26, 38, 0.94);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 229, 255, 0.4);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);
  border-radius: 8px;
  color: #e6f7ff;
  z-index: 1000;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", sans-serif;
  transition: all 0.25s;
}

.panel-header {
  padding: 10px 14px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  user-select: none;
}

.panel-title {
  font-size: 13px;
  font-weight: 600;
  color: #00e5ff;
}

.toggle-icon {
  font-size: 11px;
  color: #8c9ba5;
}

.panel-body {
  padding: 12px 14px;
  font-size: 12px;
  max-height: 80vh;
  overflow-y: auto;
}

.section-title {
  font-size: 12px;
  font-weight: 600;
  color: #00e5ff;
  margin-bottom: 8px;
}

.control-item {
  margin-bottom: 6px;
}

.control-item label {
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  color: #d9d9d9;
}

.sub-controls {
  padding: 6px 10px;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 4px;
  margin-bottom: 8px;
}

.slider-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 11px;
  color: #8c9ba5;
  margin-bottom: 4px;
}

.slider-row input[type="range"] {
  width: 130px;
  cursor: pointer;
}

.divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.08);
  margin: 10px 0;
}

.info-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
}

.label {
  color: #8c9ba5;
}

.val {
  color: #fff;
}

.val.highlight {
  color: #00e5ff;
  font-weight: 600;
}

.val.success {
  color: #52c41a;
  font-weight: 500;
}

.font-mono {
  font-family: monospace;
}

.btn-group {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
  margin-bottom: 10px;
}

.btn-chip {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #d9d9d9;
  border-radius: 4px;
  padding: 4px 0;
  font-size: 11px;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-chip.active {
  background: #1890ff;
  border-color: #1890ff;
  color: #fff;
  font-weight: 600;
}

.action-btns {
  display: flex;
  gap: 8px;
}

.action-btn {
  flex: 1;
  padding: 6px 0;
  border: none;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  font-weight: 500;
}

.action-btn.primary {
  background: #1890ff;
  color: #fff;
}

.action-btn.success {
  background: #52c41a;
  color: #fff;
}

/* 底部 5-Day 时间播放轴 (Timeline Scrubber) */
.timeline-player-dock {
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  width: 780px;
  max-width: 92%;
  background: rgba(18, 26, 38, 0.94);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(0, 229, 255, 0.4);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
  border-radius: 12px;
  padding: 12px 20px;
  z-index: 1000;
  color: #fff;
}

.dock-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.current-time-badge {
  display: flex;
  align-items: center;
  gap: 8px;
}

.live-dot {
  width: 8px;
  height: 8px;
  background: #52c41a;
  border-radius: 50%;
  box-shadow: 0 0 8px #52c41a;
}

.forecast-clock {
  font-size: 15px;
  font-weight: 700;
  color: #00e5ff;
  font-family: monospace;
}

.hour-counter {
  font-size: 12px;
  color: #8c9ba5;
  background: rgba(255, 255, 255, 0.08);
  padding: 2px 6px;
  border-radius: 4px;
}

.day-tabs {
  display: flex;
  gap: 4px;
}

.day-tab-btn {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #a0aec0;
  font-size: 11px;
  padding: 3px 8px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
}

.day-tab-btn.active {
  background: #00e5ff;
  border-color: #00e5ff;
  color: #0d141e;
  font-weight: 700;
}

.speed-toggle {
  display: flex;
  gap: 2px;
  background: rgba(0, 0, 0, 0.3);
  padding: 2px;
  border-radius: 4px;
}

.speed-btn {
  background: transparent;
  border: none;
  color: #8c9ba5;
  font-size: 11px;
  padding: 2px 6px;
  cursor: pointer;
  border-radius: 3px;
}

.speed-btn.active {
  background: #1890ff;
  color: #fff;
  font-weight: 600;
}

.dock-body {
  display: flex;
  align-items: center;
  gap: 16px;
}

.playback-controls {
  display: flex;
  align-items: center;
  gap: 6px;
}

.ctrl-btn {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 13px;
  transition: all 0.2s;
}

.ctrl-btn:hover {
  background: rgba(0, 229, 255, 0.25);
  border-color: #00e5ff;
  color: #00e5ff;
}

.play-btn {
  width: 38px;
  height: 38px;
  background: #00e5ff;
  color: #0d141e;
  border: none;
  font-size: 16px;
  font-weight: bold;
}

.play-btn.playing {
  background: #ff4d4f;
  color: #fff;
}

.play-btn:hover {
  transform: scale(1.05);
}

.slider-wrapper {
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
}

.timeline-slider {
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.15);
  outline: none;
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
}

.timeline-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #00e5ff;
  box-shadow: 0 0 10px #00e5ff;
  cursor: pointer;
  transition: transform 0.1s;
}

.timeline-slider::-webkit-slider-thumb:hover {
  transform: scale(1.2);
}

.timeline-ticks {
  position: relative;
  width: 100%;
  height: 18px;
  margin-top: 6px;
}

.tick-mark {
  position: absolute;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tick-mark.end-tick {
  transform: translateX(-100%);
}

.tick-line {
  width: 1px;
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  margin-bottom: 2px;
}

/* 性能监控与等值面专属样式 (方案 A) */
.highlight-label {
  color: #00e5ff;
  font-weight: 600;
}

.sub-checkbox {
  font-size: 11px;
  color: #8c9ba5;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
}

.inline-row {
  margin-top: 4px;
}

.smooth-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 6px;
  font-size: 11px;
  color: #8c9ba5;
}

.iter-btn-group {
  display: flex;
  gap: 3px;
}

.iter-btn {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #d9d9d9;
  font-size: 10px;
  padding: 2px 5px;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.2s;
}

.iter-btn:hover {
  background: rgba(0, 229, 255, 0.2);
}

.iter-btn.active {
  background: #00e5ff;
  border-color: #00e5ff;
  color: #0d141e;
  font-weight: 700;
}

.benchmark-title {
  color: #52c41a !important;
}

.benchmark-card {
  background: rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(82, 196, 26, 0.3);
  border-radius: 6px;
  padding: 8px 10px;
  margin-bottom: 8px;
}

.highlight-timer {
  color: #52c41a;
  font-weight: 700;
  font-family: monospace;
  font-size: 13px;
}

.highlight-timer.large-timer {
  font-size: 16px;
  color: #00e5ff;
  text-shadow: 0 0 8px rgba(0, 229, 255, 0.4);
}

.main-cost-row {
  background: rgba(0, 229, 255, 0.08);
  padding: 4px 6px;
  border-radius: 4px;
  margin: 4px 0;
}

.cost-breakdown {
  display: flex;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.03);
  border: 1px dashed rgba(255, 255, 255, 0.15);
  border-radius: 4px;
  padding: 4px 6px;
  margin-bottom: 6px;
}

.breakdown-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 10px;
}

.breakdown-item .b-label {
  color: #8c9ba5;
}

.breakdown-item .b-val {
  color: #52c41a;
  font-family: monospace;
  font-weight: 600;
  margin-top: 1px;
}

.compute-cost-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(0, 229, 255, 0.12);
  border: 1px solid rgba(0, 229, 255, 0.35);
  padding: 3px 10px;
  border-radius: 14px;
  font-size: 11px;
}

.compute-cost-badge .cost-icon {
  color: #00e5ff;
  font-weight: 600;
}

.compute-cost-badge .cost-num {
  color: #52c41a;
  font-weight: 800;
  font-family: monospace;
  font-size: 13px;
}

.compute-cost-badge .cost-detail {
  color: #a0aec0;
  font-size: 10px;
}

.tip-sub {
  font-size: 10px;
  color: #8c9ba5;
  margin-top: 4px;
  line-height: 1.4;
}

.status-box {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  padding: 8px 10px;
  margin-bottom: 8px;
  min-height: 50px;
}

.empty-tip {
  font-size: 11px;
  color: #6b7280;
  line-height: 34px;
  text-align: center;
}

.prop-line {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
  font-size: 11px;
}

.highlight-val {
  color: #00e5ff;
  font-weight: 600;
  font-family: monospace;
}

.level-badge {
  padding: 1px 6px;
  border-radius: 3px;
  color: #000;
  font-weight: 600;
  font-size: 10px;
}

.legend-bar {
  display: flex;
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  margin-top: 4px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
}

.legend-segment {
  flex: 1;
  text-align: center;
  font-size: 9px;
  font-weight: 700;
  color: #000;
  padding: 2px 0;
  cursor: default;
}

/* 专属层级 Pane 绝对保障：等值面 350 在底层，陆地遮罩 380 压住陆地浪，粒子 450 在顶层 */
::v-deep .leaflet-isosurfacePane-pane,
::v-deep .leaflet-isosurface-pane {
  z-index: 350 !important;
}
::v-deep .leaflet-landMask-pane {
  z-index: 380 !important;
  pointer-events: none !important;
}
::v-deep .leaflet-labels-pane {
  z-index: 400 !important;
  pointer-events: none !important;
}
::v-deep .leaflet-particlePane-pane,
::v-deep .leaflet-particle-pane {
  z-index: 450 !important;
  pointer-events: none !important;
}

/* 自定义海洋气象点击 Popup (1:1 像素级还原) */
::v-deep .marine-data-popup .leaflet-popup-content-wrapper {
  background: #ffffff;
  color: #1f2937;
  border-radius: 6px;
  padding: 0;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.2);
  border: 1px solid #e5e7eb;
}

::v-deep .marine-data-popup .leaflet-popup-content {
  margin: 0;
  line-height: 1.4;
}

::v-deep .marine-data-popup .leaflet-popup-tip {
  background: #ffffff;
}

::v-deep .marine-popup-card {
  padding: 8px 12px 10px 12px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", sans-serif;
  user-select: none;
}

::v-deep .marine-popup-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 5px;
  margin-bottom: 8px;
}

::v-deep .coord-label {
  font-size: 11px;
  color: #4b5563;
  font-family: monospace;
  font-weight: 500;
}

::v-deep .close-icon {
  font-size: 12px;
  color: #9ca3af;
  cursor: pointer;
  line-height: 1;
  padding: 2px;
  transition: color 0.15s;
}

::v-deep .close-icon:hover {
  color: #111827;
}

::v-deep .marine-popup-body {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

::v-deep .marine-popup-left {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

::v-deep .data-row {
  font-size: 12px;
  color: #1f2937;
  display: flex;
  align-items: center;
}

::v-deep .data-row .k {
  color: #374151;
  font-weight: 500;
  margin-right: 4px;
}

::v-deep .data-row .v {
  font-weight: 600;
  font-family: monospace;
}

::v-deep .marine-popup-right {
  display: flex;
  align-items: center;
}

::v-deep .level-capsule {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 600;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

::v-deep .cap-lvl {
  font-size: 11px;
}

::v-deep .cap-arrow {
  display: inline-block;
  font-size: 9px;
  line-height: 1;
}

::v-deep .cap-dir {
  font-size: 11px;
}

::v-deep .marine-popup-tip {
  font-size: 11px;
  color: #6b7280;
  padding: 4px 0;
  text-align: center;
  width: 100%;
}
</style>

<style>
/* 核心标记呼吸点样式 */
.zhuhai-core-marker {
  display: flex;
  align-items: center;
  justify-content: center;
}

.pulse-container {
  position: relative;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pulse-dot {
  width: 22px;
  height: 22px;
  background: #ff4d4f;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  box-shadow: 0 0 10px rgba(255, 77, 79, 0.8);
  z-index: 2;
}

.pulse-ring {
  position: absolute;
  width: 32px;
  height: 32px;
  border: 2px solid #ff4d4f;
  border-radius: 50%;
  animation: marker-pulse 1.8s infinite ease-out;
  z-index: 1;
}

@keyframes marker-pulse {
  0% { transform: scale(0.6); opacity: 1; }
  100% { transform: scale(1.6); opacity: 0; }
}

::v-deep .bridge-tooltip {
  background: rgba(15, 23, 42, 0.88);
  border: 1px solid rgba(255, 77, 79, 0.8);
  border-radius: 6px;
  color: #ffffff;
  font-size: 12px;
  padding: 4px 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);
}
::v-deep .bridge-tooltip::before {
  border-top-color: rgba(15, 23, 42, 0.88);
}

::v-deep .wave-click-circle-marker {
  filter: drop-shadow(0 0 4px rgba(2, 132, 199, 0.85));
  pointer-events: none;
}
</style>
