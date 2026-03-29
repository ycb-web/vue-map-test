<template>
  <div class="cesium-pane">
    <div class="hero-card">
      <div>
        <div class="hero-eyebrow">Cesium Demo</div>
        <h2 class="hero-title">Cesium + 桥梁模型水淹演示</h2>
        <p class="hero-desc">
          这个版本用 Cesium 加载同一个本地 `GLB` 桥梁模型，并用一个可调高度的半透明水体盒子演示水淹效果。
        </p>
      </div>
      <div class="hero-metrics">
        <div class="metric">
          <div class="metric-label">当前水位</div>
          <div class="metric-value">{{ waterLevelText }}</div>
        </div>
        <div class="metric">
          <div class="metric-label">模型状态</div>
          <div class="metric-value">{{ modelReady ? "已接入" : "加载中" }}</div>
        </div>
      </div>
    </div>

    <div class="control-card">
      <div class="control-main">
        <label class="slider-label" for="cesium-water-level-range">水位滑杆</label>
        <input
          id="cesium-water-level-range"
          class="slider"
          type="range"
          :min="waterLevelMin"
          :max="waterLevelMax"
          :step="0.1"
          :value="waterLevel"
          @input="handleWaterLevelInput"
        >
        <div class="slider-scale">
          <span>{{ waterLevelMin.toFixed(1) }} m</span>
          <span>{{ waterLevelMax.toFixed(1) }} m</span>
        </div>
      </div>
      <div class="control-actions">
        <button type="button" class="action-btn" @click="flyToOverview">
          查看地图
        </button>
        <button type="button" class="action-btn" @click="locateModel()">
          定位模型
        </button>
        <button type="button" class="action-btn primary" @click="toggleAutoPlay">
          {{ autoPlay ? "暂停上涨" : "继续上涨" }}
        </button>
        <button type="button" class="action-btn" @click="resetWaterLevel">重置水位</button>
      </div>
    </div>

    <div class="demo-grid">
      <div class="viewport-card">
        <div ref="viewerContainer" class="viewer"></div>
      </div>
      <div class="info-card">
        <div class="section-title">说明</div>
        <div class="info-line">模型文件: `jaaninoja_bridge_in_turku_kurala_finland.glb`</div>
        <div class="info-line">水淹层: Cesium 里的半透明水体盒子</div>
        <div class="info-line">底图: {{ baseMapLabel }}</div>
        <div class="info-line">流程: 先出地图，再标站点，再挂模型，再把相机飞到模型位置。</div>
        <div class="info-line">用途: 给你一个和 Three.js 并列的 Cesium 版本参考</div>
      </div>
    </div>
  </div>
</template>

<script>
window.CESIUM_BASE_URL = "/cesium/";

const MODEL_URI = "/data/building-flood/jaaninoja_bridge_in_turku_kurala_finland.glb";
const MODEL_POSITION = {
  lon: 121.4934,
  lat: 31.2337,
  height: 0,
};
const MODEL_HEADING = 90;

function ensureCesiumCss() {
  const id = "cesium-widgets-css";
  if (document.getElementById(id)) {
    return;
  }
  const link = document.createElement("link");
  link.id = id;
  link.rel = "stylesheet";
  link.href = "/cesium/Widgets/widgets.css";
  document.head.appendChild(link);
}

function loadCesiumScript() {
  if (window.Cesium) {
    return Promise.resolve(window.Cesium);
  }
  return new Promise((resolve, reject) => {
    const existing = document.getElementById("cesium-runtime-script");
    if (existing) {
      existing.addEventListener("load", () => resolve(window.Cesium), { once: true });
      existing.addEventListener("error", reject, { once: true });
      return;
    }

    const script = document.createElement("script");
    script.id = "cesium-runtime-script";
    script.src = "/cesium/Cesium.js";
    script.async = true;
    script.onload = () => resolve(window.Cesium);
    script.onerror = reject;
    document.body.appendChild(script);
  });
}

export default {
  name: "CesiumFloodPane",
  data() {
    return {
      viewer: null,
      modelEntity: null,
      waterEntity: null,
      anchorEntity: null,
      siteLabelEntity: null,
      autoPlay: true,
      waterLevel: 0.2,
      waterLevelMin: 0,
      waterLevelMax: 8,
      animationId: 0,
      lastTickTime: 0,
      modelReady: false,
      baseMapLabel: "加载中",
    };
  },
  computed: {
    waterLevelText() {
      return `${this.waterLevel.toFixed(1)} m`;
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.initCesium();
    });
  },
  beforeDestroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    if (this.viewer && !this.viewer.isDestroyed()) {
      this.viewer.destroy();
    }
  },
  methods: {
    async initCesium() {
      const container = this.$refs.viewerContainer;
      if (!container) {
        return;
      }

      ensureCesiumCss();
      const Cesium = await loadCesiumScript();

      const imageryProvider = await this.createFallbackImageryProvider(Cesium);

      this.viewer = new Cesium.Viewer(container, {
        animation: false,
        baseLayerPicker: false,
        fullscreenButton: false,
        geocoder: false,
        homeButton: false,
        infoBox: false,
        navigationHelpButton: false,
        sceneModePicker: false,
        selectionIndicator: false,
        timeline: false,
        terrainProvider: new Cesium.EllipsoidTerrainProvider(),
        imageryProvider,
      });

      this.viewer.scene.globe.depthTestAgainstTerrain = false;
      this.viewer.scene.globe.baseColor = Cesium.Color.fromCssColorString("#d7e6f2");
      this.viewer.scene.skyAtmosphere.show = true;
      this.viewer.scene.fog.enabled = true;
      this.viewer.scene.backgroundColor = Cesium.Color.fromCssColorString("#dbe8f2");
      this.viewer.scene.debugShowFramesPerSecond = false;
      this.viewer.scene.moon.show = false;
      this.viewer.scene.sun.show = false;

      this.replaceWithOnlineBaseMap();
      this.addSiteAnchor();
      this.addBridgeModel();
      this.addWaterEntity();
      this.locateModel(0);
      this.startAnimation();
    },
    async createFallbackImageryProvider(Cesium) {
      this.baseMapLabel = "本地 Natural Earth";
      return Cesium.TileMapServiceImageryProvider.fromUrl(
        Cesium.buildModuleUrl("Assets/Textures/NaturalEarthII")
      );
    },
    replaceWithOnlineBaseMap() {
      const Cesium = window.Cesium;
      try {
        const fallbackLayer = this.viewer.imageryLayers.get(0);
        const osmProvider = new Cesium.UrlTemplateImageryProvider({
          url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
          credit: "OpenStreetMap",
          maximumLevel: 19,
        });
        this.viewer.imageryLayers.addImageryProvider(osmProvider, 0);
        if (fallbackLayer) {
          this.viewer.imageryLayers.remove(fallbackLayer, false);
        }
        this.baseMapLabel = "OpenStreetMap 在线底图";
      } catch (error) {
        this.baseMapLabel = "本地 Natural Earth";
      }
    },
    addSiteAnchor() {
      const Cesium = window.Cesium;
      const position = Cesium.Cartesian3.fromDegrees(
        MODEL_POSITION.lon,
        MODEL_POSITION.lat,
        MODEL_POSITION.height + 4
      );

      this.anchorEntity = this.viewer.entities.add({
        position,
        ellipse: {
          semiMajorAxis: 280,
          semiMinorAxis: 280,
          material: Cesium.Color.fromCssColorString("#ffd84b").withAlpha(0.12),
          outline: true,
          outlineColor: Cesium.Color.fromCssColorString("#ffd84b").withAlpha(0.85),
          outlineWidth: 2,
          height: MODEL_POSITION.height,
        },
        point: {
          pixelSize: 14,
          color: Cesium.Color.YELLOW,
          outlineColor: Cesium.Color.BLACK,
          outlineWidth: 2,
          disableDepthTestDistance: Number.POSITIVE_INFINITY,
        },
      });

      this.siteLabelEntity = this.viewer.entities.add({
        position,
        label: {
          text: "Bridge Site",
          font: "16px sans-serif",
          fillColor: Cesium.Color.WHITE,
          outlineColor: Cesium.Color.BLACK,
          outlineWidth: 4,
          style: Cesium.LabelStyle.FILL_AND_OUTLINE,
          pixelOffset: new Cesium.Cartesian2(0, -24),
          disableDepthTestDistance: Number.POSITIVE_INFINITY,
        },
      });
    },
    addBridgeModel() {
      const Cesium = window.Cesium;
      const position = Cesium.Cartesian3.fromDegrees(
        MODEL_POSITION.lon,
        MODEL_POSITION.lat,
        MODEL_POSITION.height + 4
      );

      const heading = Cesium.Math.toRadians(90);
      const pitch = 0;
      const roll = 0;
      const orientation = Cesium.Transforms.headingPitchRollQuaternion(
        position,
        new Cesium.HeadingPitchRoll(heading, pitch, roll)
      );

      this.modelEntity = this.viewer.entities.add({
        position,
        orientation,
        model: {
          uri: MODEL_URI,
          scale: 1.4,
          minimumPixelSize: 140,
          maximumScale: 48,
        },
      });
      this.modelReady = true;
    },
    addWaterEntity() {
      const Cesium = window.Cesium;
      const position = Cesium.Cartesian3.fromDegrees(
        MODEL_POSITION.lon,
        MODEL_POSITION.lat,
        this.waterLevel
      );

      this.waterEntity = this.viewer.entities.add({
        position,
        box: {
          dimensions: new Cesium.Cartesian3(42, 22, 0.6),
          material: Cesium.Color.fromCssColorString("#2d9bf0").withAlpha(0.32),
          outline: true,
          outlineColor: Cesium.Color.fromCssColorString("#73c4ff").withAlpha(0.72),
        },
      });
    },
    updateWaterEntity() {
      if (!this.waterEntity) {
        return;
      }
      const Cesium = window.Cesium;
      this.waterEntity.position = Cesium.Cartesian3.fromDegrees(
        MODEL_POSITION.lon,
        MODEL_POSITION.lat,
        this.waterLevel
      );
    },
    flyToScene() {
      this.locateModel();
    },
    flyToOverview() {
      const Cesium = window.Cesium;
      this.viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(
          MODEL_POSITION.lon,
          MODEL_POSITION.lat,
          18000
        ),
        orientation: {
          heading: Cesium.Math.toRadians(8),
          pitch: Cesium.Math.toRadians(-68),
          roll: 0,
        },
        duration: 0,
      });
    },
    locateModel(duration = 1.6) {
      const Cesium = window.Cesium;
      if (!this.viewer) {
        return;
      }

      const focusPoint = Cesium.Cartesian3.fromDegrees(
        MODEL_POSITION.lon,
        MODEL_POSITION.lat,
        MODEL_POSITION.height + 6
      );
      const sphere = new Cesium.BoundingSphere(focusPoint, 120);

      this.viewer.camera.flyToBoundingSphere(sphere, {
        offset: new Cesium.HeadingPitchRange(
          Cesium.Math.toRadians(12),
          Cesium.Math.toRadians(-16),
          320
        ),
        duration,
      });
    },
    startAnimation() {
      const tick = (timestamp) => {
        if (!this.lastTickTime) {
          this.lastTickTime = timestamp;
        }
        const delta = (timestamp - this.lastTickTime) / 1000;
        this.lastTickTime = timestamp;

        if (this.autoPlay) {
          const nextLevel = this.waterLevel + delta * 0.7;
          this.waterLevel =
            nextLevel > this.waterLevelMax ? this.waterLevelMin : nextLevel;
          this.updateWaterEntity();
        }
        this.animationId = requestAnimationFrame(tick);
      };
      this.animationId = requestAnimationFrame(tick);
    },
    handleWaterLevelInput(event) {
      this.autoPlay = false;
      this.waterLevel = Number(event.target.value);
      this.updateWaterEntity();
    },
    toggleAutoPlay() {
      this.autoPlay = !this.autoPlay;
    },
    resetWaterLevel() {
      this.autoPlay = false;
      this.waterLevel = this.waterLevelMin;
      this.updateWaterEntity();
    },
  },
};
</script>

<style scoped>
.cesium-pane {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.hero-card,
.control-card,
.viewport-card,
.info-card {
  border-radius: 20px;
  border: 1px solid rgba(19, 48, 72, 0.08);
  box-shadow: 0 16px 34px rgba(23, 53, 84, 0.1);
}

.hero-card {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(260px, 0.8fr);
  gap: 18px;
  padding: 22px 24px;
  background:
    radial-gradient(circle at top right, rgba(36, 143, 255, 0.16), transparent 34%),
    linear-gradient(135deg, #fcfeff 0%, #eef5fb 100%);
}

.hero-eyebrow {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #2a79bf;
}

.hero-title {
  margin: 8px 0 10px;
  font-size: 28px;
  line-height: 1.2;
  color: #16334a;
}

.hero-desc {
  margin: 0;
  font-size: 14px;
  line-height: 1.8;
  color: #567086;
}

.hero-metrics {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
}

.metric {
  padding: 14px 15px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.84);
  border: 1px solid rgba(19, 48, 72, 0.08);
}

.metric-label {
  font-size: 12px;
  color: #6d8395;
  margin-bottom: 8px;
}

.metric-value {
  font-size: 22px;
  font-weight: 700;
  color: #143249;
}

.control-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 18px;
  background: rgba(255, 255, 255, 0.88);
}

.control-main {
  flex: 1;
  min-width: 0;
}

.slider-label {
  display: block;
  margin-bottom: 8px;
  font-size: 13px;
  font-weight: 600;
  color: #17354d;
}

.slider {
  width: 100%;
}

.slider-scale {
  display: flex;
  justify-content: space-between;
  margin-top: 6px;
  font-size: 12px;
  color: #688094;
}

.control-actions {
  display: flex;
  gap: 10px;
}

.action-btn {
  appearance: none;
  border: 1px solid rgba(19, 48, 72, 0.12);
  border-radius: 999px;
  background: #fff;
  color: #17354d;
  font-size: 13px;
  font-weight: 600;
  padding: 10px 16px;
  cursor: pointer;
}

.action-btn.primary {
  background: linear-gradient(135deg, #0f89ff 0%, #22a7ff 100%);
  border-color: transparent;
  color: #fff;
}

.demo-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.6fr) minmax(320px, 0.8fr);
  gap: 14px;
}

.viewport-card {
  position: relative;
  overflow: hidden;
  min-height: 640px;
  background: #dce8f2;
}

.viewer {
  width: 100%;
  height: 640px;
}

.info-card {
  padding: 20px 18px;
  background: rgba(255, 255, 255, 0.9);
}

.section-title {
  font-size: 15px;
  font-weight: 700;
  color: #17354d;
  margin-bottom: 10px;
}

.info-line {
  font-size: 13px;
  line-height: 1.75;
  color: #587084;
}

@media (max-width: 1120px) {
  .hero-card,
  .demo-grid {
    grid-template-columns: 1fr;
  }
}
</style>
