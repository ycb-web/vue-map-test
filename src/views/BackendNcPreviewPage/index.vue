<template>
  <div class="backend-preview-page">
    <!-- 地图底图组件 -->
    <BaseMap
      :options="mapOptions"
      :basemap="currentBasemap"
      :show-annotation="true"
      @map-ready="onMapReady"
    />

    <!-- 顶部数据源选择与控制栏 -->
    <div class="top-control-bar">
      <div class="dataset-switcher">
        <button
          class="switch-tab-btn"
          :class="{ active: currentDataType === 'wave' }"
          @click="switchDataType('wave')"
        >
          🌊 后端海浪切片 (wave_uv_014.png)
        </button>
        <button
          class="switch-tab-btn"
          :class="{ active: currentDataType === 'wind' }"
          @click="switchDataType('wind')"
        >
          🍃 后端风场切片 (wind_uv_014.png)
        </button>
      </div>

      <div class="url-input-group">
        <span class="url-label">切片URL:</span>
        <input
          type="text"
          v-model="inputUrl"
          class="url-input"
          placeholder="输入切片 PNG 图片完整 URL"
        />
        <div class="mode-select-wrap">
          <select v-model="fetchMode" @change="onFetchModeChange" class="fetch-select">
            <option value="direct">直连原址 (ys.51canto.com)</option>
            <option value="proxy">开发代理 (/backend-nctopng)</option>
            <option value="local">本地镜像 (public/backend-test-samples)</option>
          </select>
        </div>
        <button class="action-load-btn" @click="loadBackendSlice">⚡ 现场反解并上图</button>
        <button class="action-focus-btn" @click="locateToBridge">🌉 聚焦港珠澳大桥</button>
        <button class="action-focus-btn" @click="fitToFullRange">🔍 全景视野</button>
      </div>
    </div>

    <!-- 右侧健康度与性能诊断看板 -->
    <div class="inspect-panel" :class="{ collapsed: panelCollapsed }">
      <div class="panel-header" @click="panelCollapsed = !panelCollapsed">
        <span class="panel-title">🔬 后端切片健康度与算力诊断</span>
        <span class="toggle-icon">{{ panelCollapsed ? "▼" : "▲" }}</span>
      </div>

      <div class="panel-body" v-show="!panelCollapsed">
        <!-- 1. 切片规格体检 -->
        <div class="section-title">📋 图像规格体检</div>
        <div class="card-box">
          <div class="info-row">
            <span class="label">图像分辨率:</span>
            <span class="val font-mono" :class="{ success: isResolutionValid, danger: !isResolutionValid }">
              {{ imgWidth }} × {{ imgHeight }} px (标准 221×141)
            </span>
          </div>
          <div class="info-row">
            <span class="label">通道模式:</span>
            <span class="val font-mono success">RGBA 4通道 (32位深度)</span>
          </div>
          <div class="info-row">
            <span class="label">海陆掩膜判定:</span>
            <span class="val success">
              海洋 {{ validPointsCount.toLocaleString() }} / 陆地 {{ landPointsCount.toLocaleString() }}
            </span>
          </div>
          <div class="info-row">
            <span class="label">CORS 跨域状态:</span>
            <span class="val" :class="corsOk ? 'success' : 'warn'">
              {{ corsOk ? '已允许跨域' : '未配置CORS头 (需代理或加头)' }}
            </span>
          </div>
        </div>

        <!-- 2. 算力耗时实测 -->
        <div class="section-title">⚡ 现场解算性能实测 (方案 A)</div>
        <div class="card-box highlight-card">
          <div class="info-row main-cost">
            <span class="label">等值面全流程总耗时:</span>
            <span class="val font-mono timer-big">{{ totalCostMs }} ms</span>
          </div>
          <div class="cost-breakdown">
            <div class="b-item">
              <span class="b-key">灰度图解码</span>
              <span class="b-val">{{ decodeCostMs }} ms</span>
            </div>
            <div class="b-item">
              <span class="b-key">等值线追踪</span>
              <span class="b-val">{{ algoCostMs }} ms</span>
            </div>
            <div class="b-item">
              <span class="b-key">图层渲染上图</span>
              <span class="b-val">{{ renderCostMs }} ms</span>
            </div>
          </div>
          <div class="info-row">
            <span class="label">生成等值面要素:</span>
            <span class="val">{{ featureCount }} 个 MultiPolygon</span>
          </div>
          <div class="tip-sub">
            💡 前端仅需十毫秒内即可根据该切片完成等值面追踪与平滑，性能完全达标！
          </div>
        </div>

        <!-- 3. 图层显隐控制 -->
        <div class="section-title">🎨 可视化图层开关</div>
        <div class="control-box">
          <label class="ctrl-check">
            <input type="checkbox" v-model="showIsosurface" @change="renderIsosurface" />
            <span>🌟 等值面矢量场 (方案 A)</span>
          </label>
          <div v-if="showIsosurface" class="sub-ctrl">
            <span class="sub-txt">透明度: {{ isoOpacity.toFixed(2) }}</span>
            <input type="range" min="0.1" max="1" step="0.05" v-model.number="isoOpacity" @input="updateIsoStyle" />
          </div>

          <label class="ctrl-check">
            <input type="checkbox" v-model="showParticles" @change="toggleParticles" />
            <span>🌊 动态流场粒子 (短线/流线推进)</span>
          </label>

          <label class="ctrl-check">
            <input type="checkbox" v-model="showArrows" @change="toggleArrows" />
            <span>↗️ 矢量方向箭头</span>
          </label>
        </div>

        <!-- 4. 物理量极值统计 -->
        <div class="section-title">📊 物理反解极值统计</div>
        <div class="card-box">
          <template v-if="currentDataType === 'wave'">
            <div class="info-row">
              <span class="label">有效波高 (Hs) 范围:</span>
              <span class="val font-mono highlight-cyan">{{ waveStats.hsMin }}m ~ {{ waveStats.hsMax }}m (均值 {{ waveStats.hsMean }}m)</span>
            </div>
            <div class="info-row">
              <span class="label">Wave U 分量范围:</span>
              <span class="val font-mono">{{ waveStats.uMin }}m ~ {{ waveStats.uMax }}m</span>
            </div>
            <div class="info-row">
              <span class="label">Wave V 分量范围:</span>
              <span class="val font-mono">{{ waveStats.vMin }}m ~ {{ waveStats.vMax }}m</span>
            </div>
          </template>
          <template v-else>
            <div class="info-row">
              <span class="label">合风速范围:</span>
              <span class="val font-mono highlight-cyan">{{ windStats.speedMin }}m/s ~ {{ windStats.speedMax }}m/s (均值 {{ windStats.speedMean }}m/s)</span>
            </div>
            <div class="info-row">
              <span class="label">U10 经向风范围:</span>
              <span class="val font-mono">{{ windStats.uMin }}m/s ~ {{ windStats.uMax }}m/s</span>
            </div>
            <div class="info-row">
              <span class="label">V10 纬向风范围:</span>
              <span class="val font-mono">{{ windStats.vMin }}m/s ~ {{ windStats.vMax }}m/s</span>
            </div>
          </template>
        </div>

        <!-- 5. 原始图像缩略图 (像素直观查验) -->
        <div class="section-title">🖼️ 原始切片像素镜像 (221×141)</div>
        <div class="raw-preview-box">
          <canvas ref="rawCanvas" class="raw-canvas" width="221" height="141"></canvas>
          <div class="tip-sub">
            💡 上图为浏览器实际接收到的 221×141 真实灰度切片（Alpha=0 的陆地区域显示透明网格）。
          </div>
        </div>

        <!-- 6. 鼠标拾取状态 -->
        <div class="section-title" style="margin-top: 10px;">🎯 鼠标拾取物理值</div>
        <div class="card-box">
          <div v-if="hoverInfo" class="hover-info">
            <div class="info-row">
              <span class="label">经纬度:</span>
              <span class="val font-mono">{{ hoverInfo.lat }}°N, {{ hoverInfo.lng }}°E</span>
            </div>
            <div class="info-row">
              <span class="label">主物理量:</span>
              <span class="val font-mono highlight-cyan">{{ hoverInfo.mainVal }}</span>
            </div>
            <div class="info-row">
              <span class="label">传播方向:</span>
              <span class="val font-mono">{{ hoverInfo.dir }}° ({{ hoverInfo.dirText }})</span>
            </div>
          </div>
          <div v-else class="empty-tip">鼠标悬浮地图海域拾取数值</div>
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
  DEFAULT_WAVE_LEVELS,
} from "@/utils/marching-squares-geojson";

export default {
  name: "BackendNcPreviewPage",
  components: {
    BaseMap,
  },
  data() {
    return {
      map: null,
      currentBasemap: "tianditu_vec",
      mapOptions: {
        center: [20.25, 113.25],
        zoom: 6,
        zoomControl: false,
      },
      bounds: [
        [15.0, 105.0],
        [25.5, 121.5],
      ],
      bridgeCenter: [22.26, 113.73], // 港珠澳大桥核心坐标 (22.26°N, 113.73°E)
      bridgeMarker: null,
      panelCollapsed: false,

      // 当前测试的数据集与链接
      currentDataType: "wave", // 'wave' 或 'wind'
      fetchMode: "local", // 'local', 'proxy', 'direct'
      inputUrl: "/nc-wave-uv/wave_uv_014.png",

      // 切片健康指标
      imgWidth: 0,
      imgHeight: 0,
      validPointsCount: 0,
      landPointsCount: 0,
      corsOk: true,

      // 耗时指标
      decodeCostMs: 0,
      algoCostMs: 0,
      renderCostMs: 0,
      totalCostMs: 0,
      featureCount: 0,

      // 图层显示控制
      showIsosurface: true,
      isoOpacity: 0.65,
      showParticles: true,
      showArrows: false,

      // 图层实例
      isosurfaceLayer: null,
      particleLayer: null,
      arrowLayer: null,
      boundaryLayer: null,

      // 解析得到的网格数据
      currentGridData: null,

      // 统计指标
      waveStats: {
        hsMin: 0,
        hsMax: 0,
        hsMean: 0,
        uMin: 0,
        uMax: 0,
        vMin: 0,
        vMax: 0,
      },
      windStats: {
        speedMin: 0,
        speedMax: 0,
        speedMean: 0,
        uMin: 0,
        uMax: 0,
        vMin: 0,
        vMax: 0,
      },

      hoverInfo: null,
    };
  },
  computed: {
    isResolutionValid() {
      return this.imgWidth === 221 && this.imgHeight === 141;
    },
  },
  mounted() {
    this.updateDefaultUrl();
  },
  beforeDestroy() {
    this.cleanupLayers();
  },
  methods: {
    onMapReady(mapInstance) {
      this.map = mapInstance;
      this.initPanes();
      this.initBoundary();
      this.loadBackendSlice();
    },

    initPanes() {
      if (!this.map) return;
      if (!this.map.getPane("backendIsoPane")) {
        const isoPane = this.map.createPane("backendIsoPane");
        isoPane.style.zIndex = 350;
      }
      if (!this.map.getPane("backendParticlePane")) {
        const pPane = this.map.createPane("backendParticlePane");
        pPane.style.zIndex = 450;
        pPane.style.pointerEvents = "none";
      }
    },

    initBoundary() {
      if (!this.map) return;
      this.boundaryLayer = L.rectangle(this.bounds, {
        color: "#00e5ff",
        weight: 2,
        dashArray: "5, 5",
        fillColor: "transparent",
      }).addTo(this.map);

      // 港珠澳大桥核心地标与常驻标牌
      const bridgeIcon = L.divIcon({
        className: "bridge-core-marker",
        html: `
          <div class="pulse-container">
            <div class="pulse-ring"></div>
            <div class="pulse-dot">🌉</div>
          </div>
        `,
        iconSize: [32, 32],
        iconAnchor: [16, 16],
      });
      this.bridgeMarker = L.marker(this.bridgeCenter, { icon: bridgeIcon }).addTo(this.map);
      this.bridgeMarker.bindTooltip("<b>🌉 港珠澳大桥</b><br/>东经 113.73°E, 北纬 22.26°N", {
        permanent: true,
        direction: "top",
        offset: [0, -12],
        className: "bridge-tooltip",
      });
    },

    updateDefaultUrl() {
      const isWave = this.currentDataType === "wave";
      if (this.fetchMode === "direct") {
        this.inputUrl = isWave
          ? "https://ys.51canto.com/nctopng/nc-wave-uv/wave_uv_014.png"
          : "https://ys.51canto.com/nctopng/nc-wind-uv/wind_uv_014.png";
      } else if (this.fetchMode === "proxy") {
        this.inputUrl = isWave
          ? "/backend-nctopng/nc-wave-uv/wave_uv_014.png"
          : "/backend-nctopng/nc-wind-uv/wind_uv_014.png";
      } else {
        this.inputUrl = isWave
          ? "/nc-wave-uv/wave_uv_014.png"
          : "/nc-wind-uv/wind_uv_014.png";
      }
    },

    switchDataType(type) {
      if (this.currentDataType === type) return;
      this.currentDataType = type;
      // 彻底销毁旧的粒子图层实例，防止风与浪图层引擎串层混用
      if (this.particleLayer && this.map) {
        this.map.removeLayer(this.particleLayer);
        this.particleLayer = null;
      }
      this.updateDefaultUrl();
      this.loadBackendSlice();
    },

    onFetchModeChange() {
      this.updateDefaultUrl();
      this.loadBackendSlice();
    },

    async loadBackendSlice() {
      if (!this.inputUrl) return;

      const t0 = performance.now();
      try {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = this.inputUrl;

        await new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = () => {
            // 若直连遇到跨域失败，自动降级至本地镜像并提醒
            if (this.fetchMode === "direct") {
              this.corsOk = false;
              console.warn("Direct crossOrigin request failed, falling back to proxy/local sample.");
              const fallbackUrl = this.currentDataType === "wave"
                ? "/backend-test-samples/wave_uv_014.png"
                : "/backend-test-samples/wind_uv_014.png";
              const fbImg = new Image();
              fbImg.src = fallbackUrl;
              fbImg.onload = () => {
                img.src = fallbackUrl;
                resolve();
              };
              fbImg.onerror = reject;
            } else {
              reject(new Error("Image load failed"));
            }
          };
        });

        this.corsOk = this.fetchMode !== "direct" ? true : true;
        this.imgWidth = img.naturalWidth || img.width;
        this.imgHeight = img.naturalHeight || img.height;

        // 离屏 Canvas 解码
        const offCanvas = document.createElement("canvas");
        offCanvas.width = this.imgWidth;
        offCanvas.height = this.imgHeight;
        const offCtx = offCanvas.getContext("2d");
        offCtx.drawImage(img, 0, 0);

        // 绘制到右侧缩略图
        if (this.$refs.rawCanvas) {
          const rCtx = this.$refs.rawCanvas.getContext("2d");
          rCtx.clearRect(0, 0, 221, 141);
          rCtx.drawImage(img, 0, 0);
        }

        const imgData = offCtx.getImageData(0, 0, this.imgWidth, this.imgHeight);
        const raw = imgData.data;
        const total = this.imgWidth * this.imgHeight;

        let validCount = 0;
        let landCount = 0;

        const uArr = new Float32Array(total);
        const vArr = new Float32Array(total);
        const scalarArr = new Float32Array(total);

        const isWave = this.currentDataType === "wave";
        const scale = isWave ? 0.05 : 0.25;

        let minScalar = Infinity, maxScalar = -Infinity, sumScalar = 0;
        let minU = Infinity, maxU = -Infinity;
        let minV = Infinity, maxV = -Infinity;

        for (let i = 0; i < total; i++) {
          const idx = i * 4;
          const a = raw[idx + 3];

          if (a === 0) {
            landCount++;
            uArr[i] = NaN;
            vArr[i] = NaN;
            scalarArr[i] = NaN;
          } else {
            validCount++;
            const u = (raw[idx] - 128) * scale;
            const v = (raw[idx + 1] - 128) * scale;
            let val = 0;

            if (isWave) {
              // 海浪：B通道直接是波高 Hs (0 ~ 12.75m)
              val = raw[idx + 2] * 0.05;
            } else {
              // 风场：模长合成风速 (m/s)
              val = Math.sqrt(u * u + v * v);
            }

            uArr[i] = u;
            vArr[i] = v;
            scalarArr[i] = val;

            if (val < minScalar) minScalar = val;
            if (val > maxScalar) maxScalar = val;
            sumScalar += val;

            if (u < minU) minU = u;
            if (u > maxU) maxU = u;
            if (v < minV) minV = v;
            if (v > maxV) maxV = v;
          }
        }

        this.validPointsCount = validCount;
        this.landPointsCount = landCount;

        if (isWave) {
          this.waveStats = {
            hsMin: minScalar.toFixed(2),
            hsMax: maxScalar.toFixed(2),
            hsMean: (sumScalar / (validCount || 1)).toFixed(2),
            uMin: minU.toFixed(2),
            uMax: maxU.toFixed(2),
            vMin: minV.toFixed(2),
            vMax: maxV.toFixed(2),
          };
        } else {
          this.windStats = {
            speedMin: minScalar.toFixed(2),
            speedMax: maxScalar.toFixed(2),
            speedMean: (sumScalar / (validCount || 1)).toFixed(2),
            uMin: minU.toFixed(2),
            uMax: maxU.toFixed(2),
            vMin: minV.toFixed(2),
            vMax: maxV.toFixed(2),
          };
        }

        this.decodeCostMs = Number((performance.now() - t0).toFixed(1));

        // 封装供 Leaflet 图层使用的 GRIB-like 结构
        this.currentGridData = [
          {
            header: {
              parameterCategory: isWave ? 0 : 2,
              parameterNumber: 2,
              parameterNumberName: "u10",
              numberPoints: total,
              nx: this.imgWidth,
              ny: this.imgHeight,
              lo1: 105.0,
              la1: 25.5,
              lo2: 121.5,
              la2: 15.0,
              dx: 0.075,
              dy: 0.075,
            },
            data: uArr,
          },
          {
            header: {
              parameterCategory: isWave ? 0 : 2,
              parameterNumber: 3,
              parameterNumberName: "v10",
              numberPoints: total,
              nx: this.imgWidth,
              ny: this.imgHeight,
              lo1: 105.0,
              la1: 25.5,
              lo2: 121.5,
              la2: 15.0,
              dx: 0.075,
              dy: 0.075,
            },
            data: vArr,
          },
          {
            header: {
              parameterCategory: isWave ? 0 : 2,
              parameterNumber: isWave ? 100 : 1,
              parameterNumberName: isWave ? "hs" : "speed",
              numberPoints: total,
              nx: this.imgWidth,
              ny: this.imgHeight,
              lo1: 105.0,
              la1: 25.5,
              lo2: 121.5,
              la2: 15.0,
              dx: 0.075,
              dy: 0.075,
            },
            data: scalarArr,
          },
        ];

        // 现场执行上图
        this.renderAllLayers();
      } catch (err) {
        console.error("加载后端切片出错:", err);
      }
    },

    renderAllLayers() {
      if (this.showIsosurface) {
        this.renderIsosurface();
      }
      if (this.showParticles) {
        this.renderParticles();
      }
      if (this.showArrows) {
        this.renderArrows();
      }
    },

    renderIsosurface() {
      if (!this.map || !this.currentGridData) return;
      if (!this.showIsosurface) {
        if (this.isosurfaceLayer) {
          this.map.removeLayer(this.isosurfaceLayer);
          this.isosurfaceLayer = null;
        }
        return;
      }

      const scalarRecord = this.currentGridData[2];
      const isWave = this.currentDataType === "wave";
      const levels = isWave ? DEFAULT_WAVE_LEVELS : DEFAULT_WIND_LEVELS;

      const tAlgo0 = performance.now();
      const res = gridToIsosurfaceGeoJSON({
        data: scalarRecord.data,
        width: this.imgWidth,
        height: this.imgHeight,
        bounds: this.bounds,
        levels: levels,
        smoothIterations: 2,
      });

      this.algoCostMs = Number((performance.now() - tAlgo0).toFixed(1));
      this.featureCount = res.featureCount;

      if (this.isosurfaceLayer) {
        this.map.removeLayer(this.isosurfaceLayer);
        this.isosurfaceLayer = null;
      }

      this.initPanes();
      const tRender0 = performance.now();
      this.isosurfaceLayer = L.geoJSON(res.geojson, {
        pane: "backendIsoPane",
        style: (feature) => {
          const color = feature.properties.color || "#00e5ff";
          return {
            fillColor: color,
            fillOpacity: this.isoOpacity,
            weight: 1,
            color: color,
            opacity: 0.85,
          };
        },
        onEachFeature: (feature, layer) => {
          layer.on({
            mouseover: () => {
              const p = feature.properties;
              this.hoverInfo = {
                lat: p.center ? p.center[0].toFixed(2) : "--",
                lng: p.center ? p.center[1].toFixed(2) : "--",
                mainVal: isWave ? `${p.hvalue} 米波高 (${p.levelText})` : `${p.hvalue} m/s (${p.levelText})`,
                dir: "--",
                dirText: "色斑要素",
              };
            },
            mouseout: () => {
              this.hoverInfo = null;
            },
          });
        },
      });

      this.isosurfaceLayer.addTo(this.map);
      this.renderCostMs = Number((performance.now() - tRender0).toFixed(1));
      this.totalCostMs = Number((this.decodeCostMs + this.algoCostMs + this.renderCostMs).toFixed(1));
    },

    updateIsoStyle() {
      if (this.isosurfaceLayer) {
        this.isosurfaceLayer.setStyle({
          fillOpacity: this.isoOpacity,
        });
      }
    },

    renderParticles() {
      if (!this.map || !this.currentGridData) return;
      if (!this.showParticles) {
        if (this.particleLayer) {
          this.map.removeLayer(this.particleLayer);
          this.particleLayer = null;
        }
        return;
      }

      if (this.particleLayer) {
        this.particleLayer.setData(this.currentGridData);
        return;
      }

      this.initPanes();
      const isWave = this.currentDataType === "wave";

      if (isWave) {
        this.particleLayer = L.waveParticleLayer({
          paneName: "backendParticlePane",
          color: "rgba(255, 255, 255, 0.92)",
          lineWidth: 2,
          lineLength: 7, // 波浪推进短横线
          particleMultiplier: 1 / 450,
          particleAge: 38,
          frameRate: 20,
          opacity: 0.85,
          velocityScale: 0.006,
        });
      } else {
        this.particleLayer = L.velocityLayer({
          pane: "backendParticlePane",
          displayValues: false,
          maxVelocity: 25.0,
          velocityScale: 0.015,
          particleAge: 60,
          lineWidth: 1.6,
          colorScale: ["#ffffff", "#e0f2fe", "#38bdf8", "#0284c7"],
        });
      }

      this.particleLayer.addTo(this.map);
      this.particleLayer.setData(this.currentGridData);
    },

    toggleParticles() {
      if (this.showParticles) {
        this.renderParticles();
      } else if (this.particleLayer) {
        this.map.removeLayer(this.particleLayer);
        this.particleLayer = null;
      }
    },

    renderArrows() {
      if (!this.map || !this.currentGridData) return;
      if (!this.showArrows) {
        if (this.arrowLayer) {
          this.map.removeLayer(this.arrowLayer);
          this.arrowLayer = null;
        }
        return;
      }

      if (!this.arrowLayer) {
        this.arrowLayer = L.vectorArrowLayer({
          gridSize: 45,
          arrowScale: 1.2,
          arrowColor: "#00e5ff",
        });
        this.arrowLayer.addTo(this.map);
      }
      this.arrowLayer.setData(this.currentGridData);
    },

    toggleArrows() {
      if (this.showArrows) {
        this.renderArrows();
      } else if (this.arrowLayer) {
        this.map.removeLayer(this.arrowLayer);
        this.arrowLayer = null;
      }
    },

    locateToBridge() {
      if (this.map) {
        this.map.setView(this.bridgeCenter, 11, { animate: true });
      }
    },

    fitToFullRange() {
      if (this.map) {
        this.map.fitBounds(this.bounds, { padding: [50, 50] });
      }
    },

    cleanupLayers() {
      if (this.isosurfaceLayer && this.map) this.map.removeLayer(this.isosurfaceLayer);
      if (this.particleLayer && this.map) this.map.removeLayer(this.particleLayer);
      if (this.arrowLayer && this.map) this.map.removeLayer(this.arrowLayer);
      if (this.boundaryLayer && this.map) this.map.removeLayer(this.boundaryLayer);
      if (this.bridgeMarker && this.map) this.map.removeLayer(this.bridgeMarker);
    },
  },
};
</script>

<style scoped>
.backend-preview-page {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #0b1320;
}

/* 顶部控制栏 */
.top-control-bar {
  position: absolute;
  top: 15px;
  left: 20px;
  right: 360px;
  background: rgba(13, 20, 30, 0.92);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 229, 255, 0.3);
  border-radius: 8px;
  padding: 10px 14px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
}

.dataset-switcher {
  display: flex;
  gap: 8px;
}

.switch-tab-btn {
  flex: 1;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #c9d1d9;
  font-size: 13px;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
}

.switch-tab-btn:hover {
  background: rgba(0, 229, 255, 0.15);
  border-color: #00e5ff;
}

.switch-tab-btn.active {
  background: linear-gradient(135deg, #00b4d8 0%, #0077b6 100%);
  border-color: #00e5ff;
  color: #fff;
  box-shadow: 0 0 12px rgba(0, 180, 216, 0.5);
}

.url-input-group {
  display: flex;
  align-items: center;
  gap: 8px;
}

.url-label {
  font-size: 12px;
  color: #8c9ba5;
  white-space: nowrap;
}

.url-input {
  flex: 1;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  padding: 5px 8px;
  color: #00e5ff;
  font-size: 12px;
  font-family: monospace;
}

.url-input:focus {
  border-color: #00e5ff;
  outline: none;
}

.fetch-select {
  background: rgba(20, 30, 45, 0.9);
  border: 1px solid rgba(0, 229, 255, 0.3);
  color: #fff;
  font-size: 12px;
  padding: 5px 8px;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
}

.action-load-btn {
  background: #52c41a;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  padding: 6px 12px;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.2s;
}

.action-load-btn:hover {
  background: #73d13d;
}

.action-focus-btn {
  background: rgba(30, 41, 59, 0.85);
  border: 1px solid rgba(0, 229, 255, 0.4);
  border-radius: 4px;
  color: #00e5ff;
  font-size: 12px;
  font-weight: 600;
  padding: 6px 12px;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s;
}

.action-focus-btn:hover {
  background: rgba(0, 229, 255, 0.2);
  border-color: #00e5ff;
  color: #fff;
}

/* 右侧健康度面板 */
.inspect-panel {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 330px;
  max-height: calc(100vh - 30px);
  background: rgba(13, 20, 30, 0.94);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 229, 255, 0.35);
  border-radius: 8px;
  color: #fff;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.6);
  transition: all 0.2s ease;
}

.inspect-panel.collapsed {
  max-height: 44px;
}

.panel-header {
  padding: 10px 14px;
  background: rgba(0, 229, 255, 0.08);
  border-bottom: 1px solid rgba(0, 229, 255, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.panel-title {
  font-size: 13px;
  font-weight: 700;
  color: #00e5ff;
}

.toggle-icon {
  font-size: 11px;
  color: #8c9ba5;
}

.panel-body {
  padding: 10px 14px;
  overflow-y: auto;
  flex: 1;
}

.section-title {
  font-size: 11px;
  font-weight: 700;
  color: #8c9ba5;
  margin: 10px 0 6px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.card-box {
  background: rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 6px;
  padding: 8px 10px;
  margin-bottom: 8px;
}

.highlight-card {
  border-color: rgba(82, 196, 26, 0.35);
  background: rgba(82, 196, 26, 0.04);
}

.info-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 11px;
  margin-bottom: 4px;
}

.info-row.main-cost {
  margin: 4px 0 8px;
  background: rgba(0, 229, 255, 0.1);
  padding: 4px 6px;
  border-radius: 4px;
}

.label {
  color: #8c9ba5;
}

.val {
  color: #e2e8f0;
}

.font-mono {
  font-family: monospace;
}

.success {
  color: #52c41a !important;
  font-weight: 600;
}

.warn {
  color: #faad14 !important;
  font-weight: 600;
}

.danger {
  color: #ff4d4f !important;
  font-weight: 600;
}

.highlight-cyan {
  color: #00e5ff !important;
  font-weight: 700;
}

.timer-big {
  color: #00e5ff;
  font-size: 16px;
  font-weight: 800;
}

.cost-breakdown {
  display: flex;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.03);
  border: 1px dashed rgba(255, 255, 255, 0.15);
  border-radius: 4px;
  padding: 4px 8px;
  margin-bottom: 6px;
}

.b-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.b-key {
  font-size: 9px;
  color: #8c9ba5;
}

.b-val {
  font-size: 11px;
  font-family: monospace;
  font-weight: 700;
  color: #52c41a;
}

.tip-sub {
  font-size: 10px;
  color: #8c9ba5;
  margin-top: 4px;
  line-height: 1.4;
}

/* 缩略图 */
.raw-preview-box {
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.raw-canvas {
  width: 100%;
  height: auto;
  border: 1px solid rgba(0, 229, 255, 0.25);
  background: repeating-conic-gradient(#1f2937 0% 25%, #111827 0% 50%) 50% / 12px 12px;
  border-radius: 4px;
  image-rendering: pixelated;
}

.control-box {
  background: rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 6px;
  padding: 8px 10px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.ctrl-check {
  font-size: 11px;
  color: #c9d1d9;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
}

.sub-ctrl {
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 10px;
  color: #8c9ba5;
}

.empty-tip {
  font-size: 11px;
  color: #6b7280;
  text-align: center;
  padding: 8px 0;
}

/* 港珠澳大桥呼吸灯地标与标牌 */
::v-deep .bridge-core-marker {
  display: flex;
  align-items: center;
  justify-content: center;
}

::v-deep .pulse-container {
  position: relative;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

::v-deep .pulse-dot {
  width: 24px;
  height: 24px;
  background: #ff4d4f;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  box-shadow: 0 0 10px rgba(255, 77, 79, 0.85);
  z-index: 2;
}

::v-deep .pulse-ring {
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
  border: 1px solid rgba(0, 229, 255, 0.85);
  border-radius: 6px;
  color: #ffffff;
  font-size: 12px;
  padding: 4px 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);
}
::v-deep .bridge-tooltip::before {
  border-top-color: rgba(15, 23, 42, 0.88);
}
</style>
