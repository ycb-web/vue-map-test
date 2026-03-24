<template>
  <div class="pane">
    <div class="tab-meta">
      <div class="tab-title">20260311.nc 点位时序专题</div>
      <div class="tab-desc">
        这里直接把 `wave_points.html` 的核心逻辑改成 Vue 组件。当前接入变量是 `hs`，
        数据结构是固定经纬度点位 + 3 个采样时间步的波高值。
      </div>
    </div>

    <div class="memory-card">
      <div class="memory-title">这份 NC 在描述什么</div>
      <div class="memory-desc">
        当前这个 tab 展示的不是风场，而是 `20260311.nc` 里的 <b>`hs` 波高</b> 点位时序。
        也就是说，每个固定经纬度点位会随着时间变化给出一个波高值，适合按点播放，不带三角网格连接关系。
      </div>
      <div class="memory-grid">
        <div class="memory-item">
          <div class="memory-label">原始文件</div>
          <div class="memory-value">20260311.nc</div>
          <div class="memory-sub">约 377.78 MB，232,740 个点，原始数据 121 个时间步，这里保留首/中/尾 3 个采样步</div>
        </div>
        <div class="memory-item">
          <div class="memory-label">解析脚本</div>
          <div class="memory-value">nc_to_wave_points.py</div>
          <div class="memory-sub">默认提取 `longitude` / `latitude` / `hs` / `time`</div>
        </div>
        <div class="memory-item">
          <div class="memory-label">运行时产物</div>
          <div class="memory-value">metadata + 3 份 frame JSON</div>
          <div class="memory-sub">
            metadata 仍保存完整点位经纬度、范围和值域，但时间轴只保留首帧 / 中间帧 / 末帧；
            frames 目录只保留 3 份单时间步 values 数据，方便本地调试和提交代码。
          </div>
        </div>
      </div>
      <div class="memory-list">
        <div class="memory-list-title">如何理解转换结果</div>
        <div class="memory-list-line">`metadata.json`: 记录 `sourceFile`、`variable`、`pointCount`、`timeCount`、`timeList`、整份 `lon/lat` 数组、范围边界和值域。</div>
        <div class="memory-list-line">`frames/000.json ~ 002.json`: 分别对应第一帧、中间帧、最后一帧，字段是 `index`、`time`、`values`。</div>
        <div class="memory-list-line">`values` 数组长度和点位数一致，这份数据里是 232,740；数组下标和 `metadata` 里的经纬度数组一一对应。</div>
        <div class="memory-list-line">当前保留的 3 个时间步分别是 2026-03-09 12:00:00、2026-03-12 00:00:00、2026-03-14 12:00:00，`hs` 值域约 0.0 到 6.296 m。</div>
      </div>
    </div>

    <div class="preview-shell">
      <BaseMap
        basemap="none"
        :options="mapOptions"
        @map-ready="handleMapReady"
      />
      <MapToolbar
        v-if="map"
        class="toolbar"
        :map="map"
        :initial-center="initialCenter"
        :initial-zoom="initialZoom"
      />
      <MapStatus v-if="map" class="map-status" :map="map" />

      <div class="control-panel panel">
        <div class="panel-title">波高nc数据模块</div>
        <div class="panel-line">{{ statusText }}</div>
        <div class="time-display">{{ currentTimeText }}</div>
        <div class="slider-line">
          <span>时间步 {{ currentIndex }}</span>
          <span>{{ totalSteps }}</span>
        </div>
        <div class="slider-tip">
          原始共 {{ sourceTotalSteps }} 份时间步，当前测试保留首帧 / 中间帧 / 末帧 3 份
        </div>
        <input
          class="time-slider"
          type="range"
          min="0"
          :max="totalSteps"
          :value="currentIndex"
          @input="handleSliderChange"
        />
        <div class="play-controls">
          <button class="btn-play" @click="startPlayback">播放</button>
          <button class="btn-pause" @click="pausePlayback">暂停</button>
          <button class="btn-stop" @click="stopPlayback">停止</button>
        </div>
        <div class="speed-section">
          <label for="speed-select">播放速度</label>
          <select id="speed-select" v-model="playbackDelay">
            <option :value="1200">慢</option>
            <option :value="700">中</option>
            <option :value="300">快</option>
            <option :value="120">极快</option>
          </select>
        </div>
      </div>

      <div class="legend panel">
        <div class="legend-title">波高 hs (m)</div>
        <div class="legend-content">
          <div class="legend-bar"></div>
          <div class="legend-labels">
            <div v-for="label in legendLabels" :key="label">{{ label }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import L from "leaflet";
import BaseMap from "@/components/BaseMap.vue";
import MapToolbar from "@/components/MapToolbar";
import MapStatus from "@/components/MapStatus";

function colorForValue(value, min, max) {
  if (value === null || Number.isNaN(value)) return "rgba(120,120,120,0.25)";
  const t = Math.max(0, Math.min(1, (value - min) / (max - min || 1)));
  const stops = [
    { t: 0.0, r: 13, g: 27, b: 111 },
    { t: 0.2, r: 21, g: 101, b: 192 },
    { t: 0.4, r: 0, g: 188, b: 212 },
    { t: 0.55, r: 76, g: 175, b: 80 },
    { t: 0.75, r: 255, g: 214, b: 0 },
    { t: 0.9, r: 255, g: 61, b: 0 },
    { t: 1.0, r: 127, g: 0, b: 0 },
  ];

  for (let i = 0; i < stops.length - 1; i++) {
    const start = stops[i];
    const end = stops[i + 1];
    if (t >= start.t && t <= end.t) {
      const localT = (t - start.t) / (end.t - start.t);
      const r = Math.round(start.r + (end.r - start.r) * localT);
      const g = Math.round(start.g + (end.g - start.g) * localT);
      const b = Math.round(start.b + (end.b - start.b) * localT);
      return `rgb(${r},${g},${b})`;
    }
  }

  return "rgb(127,0,0)";
}

function radiusForZoom(zoom) {
  if (zoom <= 6) return 1;
  if (zoom <= 8) return 1.8;
  if (zoom <= 10) return 2.4;
  return 3.2;
}

const PointCanvasLayer = L.Layer.extend({
  initialize(getState) {
    this._getState = getState;
    this._frame = null;
  },
  onAdd(map) {
    this._map = map;
    this._canvas = L.DomUtil.create("canvas", "leaflet-zoom-animated");
    this._ctx = this._canvas.getContext("2d");
    this._resize();
    map.getPanes().overlayPane.appendChild(this._canvas);
    map.on("moveend zoomend resize", this._reset, this);
    this._reset();
  },
  onRemove(map) {
    map.off("moveend zoomend resize", this._reset, this);
    L.DomUtil.remove(this._canvas);
  },
  setFrame(frame) {
    this._frame = frame;
    this._redraw();
  },
  _resize() {
    const size = this._map.getSize();
    this._canvas.width = size.x;
    this._canvas.height = size.y;
  },
  _reset() {
    if (!this._map) return;
    this._resize();
    const topLeft = this._map.containerPointToLayerPoint([0, 0]);
    L.DomUtil.setPosition(this._canvas, topLeft);
    this._redraw();
  },
  _redraw() {
    const state = this._getState();
    if (!this._map || !state.metadata || !this._frame) return;

    const { metadata } = state;
    const ctx = this._ctx;
    const size = this._map.getSize();
    const pixelBounds = this._map.getPixelBounds();
    const radius = radiusForZoom(this._map.getZoom());

    ctx.clearRect(0, 0, size.x, size.y);

    for (let i = 0; i < metadata.pointCount; i++) {
      const value = this._frame.values[i];
      if (value === null) continue;

      const projected = this._map.project(
        [metadata.lat[i], metadata.lon[i]],
        this._map.getZoom()
      );
      if (
        projected.x < pixelBounds.min.x - 2 ||
        projected.x > pixelBounds.max.x + 2 ||
        projected.y < pixelBounds.min.y - 2 ||
        projected.y > pixelBounds.max.y + 2
      ) {
        continue;
      }

      const x = projected.x - pixelBounds.min.x;
      const y = projected.y - pixelBounds.min.y;

      ctx.fillStyle = colorForValue(
        value,
        metadata.valueRange.min,
        metadata.valueRange.max
      );
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }
  },
});

export default {
  name: "WavePointsPane",
  components: {
    BaseMap,
    MapToolbar,
    MapStatus,
  },
  data() {
    return {
      map: null,
      mapOptions: {
        zoomControl: false,
      },
      initialCenter: [20.3, 114.6],
      initialZoom: 7,
      metadata: null,
      pointLayer: null,
      currentIndex: 0,
      currentTimeText: "--",
      statusText: "等待地图初始化...",
      playbackDelay: 700,
      playbackTimer: null,
      frameCache: {},
      legendLabels: [],
    };
  },
  computed: {
    totalSteps() {
      return this.metadata ? this.metadata.timeCount - 1 : 0;
    },
    sourceTotalSteps() {
      if (!this.metadata) return 0;
      return this.metadata.sourceTimeCount || this.metadata.timeCount;
    },
  },
  beforeDestroy() {
    this.pausePlayback();
    if (this.pointLayer) {
      this.pointLayer.remove();
    }
  },
  methods: {
    async handleMapReady(map) {
      this.map = map;
      this.statusText = "正在加载点位 metadata ...";
      this.$nextTick(() => {
        this.map.invalidateSize();
      });
      await this.loadMetadata();
      await this.showFrame(0);
    },
    async loadMetadata() {
      const response = await fetch("/data/triangle-topic/wave-points/metadata.json");
      const metadata = await response.json();
      this.metadata = metadata;
      this.legendLabels = this.buildLegendLabels(
        metadata.valueRange.min,
        metadata.valueRange.max
      );
      this.initialCenter = [
        (metadata.bounds.minLat + metadata.bounds.maxLat) / 2,
        (metadata.bounds.minLon + metadata.bounds.maxLon) / 2,
      ];

      this.map.fitBounds([
        [metadata.bounds.minLat, metadata.bounds.minLon],
        [metadata.bounds.maxLat, metadata.bounds.maxLon],
      ]);

      this.pointLayer = new PointCanvasLayer(() => ({
        metadata: this.metadata,
      }));
      this.pointLayer.addTo(this.map);
        this.statusText = `已加载 ${metadata.sourceFile}，变量 ${metadata.variable}，共 ${metadata.timeCount} 个采样时间步`;
    },
    buildLegendLabels(min, max) {
      const labels = [];
      const steps = 6;
      for (let i = 0; i <= steps; i++) {
        const value = max - ((max - min) / steps) * i;
        labels.push(`${value.toFixed(2)} m`);
      }
      return labels;
    },
    async loadFrame(index) {
      if (this.frameCache[index]) {
        return this.frameCache[index];
      }

      const response = await fetch(
        `/data/triangle-topic/wave-points/frames/${String(index).padStart(
          3,
          "0"
        )}.json`
      );
      const frame = await response.json();
      this.$set(this.frameCache, index, frame);
      return frame;
    },
    async showFrame(index) {
      if (!this.metadata || !this.pointLayer) return;
      this.currentIndex = index;
      this.statusText = `正在加载第 ${index} 帧...`;
      const frame = await this.loadFrame(index);
      this.pointLayer.setFrame(frame);
      this.currentTimeText = frame.time;
      this.statusText = `已加载 ${this.metadata.pointCount.toLocaleString()} 个点`;
    },
    handleSliderChange(event) {
      this.pausePlayback();
      this.showFrame(Number(event.target.value));
    },
    startPlayback() {
      if (!this.metadata) return;
      this.pausePlayback();
      this.playbackTimer = setInterval(async () => {
        const nextIndex =
          this.currentIndex >= this.totalSteps ? 0 : this.currentIndex + 1;
        await this.showFrame(nextIndex);
      }, Number(this.playbackDelay));
    },
    pausePlayback() {
      if (this.playbackTimer) {
        clearInterval(this.playbackTimer);
        this.playbackTimer = null;
      }
    },
    stopPlayback() {
      this.pausePlayback();
      this.showFrame(0);
    },
  },
};
</script>

<style scoped>
.pane {
  display: flex;
  flex-direction: column;
}

.tab-meta {
  padding: 0 4px 12px;
}

.tab-title {
  font-size: 18px;
  font-weight: 600;
  color: #19364d;
  margin-bottom: 6px;
}

.tab-desc {
  font-size: 13px;
  line-height: 1.7;
  color: #5e6f7c;
}

.memory-card {
  margin: 0 4px 14px;
  padding: 16px 18px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.88);
  border: 1px solid rgba(16, 50, 74, 0.08);
  box-shadow: 0 10px 30px rgba(31, 60, 95, 0.08);
}

.memory-title {
  font-size: 16px;
  font-weight: 600;
  color: #19364d;
  margin-bottom: 8px;
}

.memory-desc {
  font-size: 13px;
  line-height: 1.7;
  color: #566c7f;
}

.memory-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-top: 14px;
}

.memory-item {
  padding: 12px 14px;
  border-radius: 12px;
  background: #f7fafc;
  border: 1px solid rgba(16, 50, 74, 0.08);
}

.memory-label {
  font-size: 12px;
  color: #688094;
  margin-bottom: 6px;
}

.memory-value {
  font-size: 15px;
  font-weight: 600;
  color: #153048;
  margin-bottom: 6px;
}

.memory-sub {
  font-size: 12px;
  line-height: 1.6;
  color: #546676;
}

.memory-list {
  margin-top: 14px;
  padding-top: 12px;
  border-top: 1px solid rgba(16, 50, 74, 0.08);
}

.memory-list-title {
  font-size: 13px;
  font-weight: 600;
  color: #153048;
  margin-bottom: 6px;
}

.memory-list-line {
  font-size: 12px;
  line-height: 1.7;
  color: #5b6e7f;
}

.preview-shell {
  position: relative;
  height: max(640px, calc(100vh - 280px));
  border-radius: 18px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 14px 40px rgba(29, 56, 93, 0.12);
  border: 1px solid rgba(16, 50, 74, 0.08);
}

.toolbar {
  position: absolute;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1001;
}

.map-status {
  position: absolute;
  left: 16px;
  bottom: 16px;
  z-index: 1001;
}

.panel {
  position: absolute;
  z-index: 1001;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.94);
  box-shadow: 0 12px 28px rgba(20, 49, 78, 0.14);
  border: 1px solid rgba(16, 50, 74, 0.08);
}

.control-panel {
  top: 16px;
  right: 16px;
  width: 320px;
  padding: 14px 16px;
}

.panel-title {
  font-size: 14px;
  font-weight: 600;
  color: #153048;
  margin-bottom: 6px;
}

.panel-line {
  font-size: 12px;
  line-height: 1.6;
  color: #607284;
}

.time-display {
  margin: 12px 0 8px;
  font-size: 16px;
  font-weight: 600;
  color: #1f5d85;
  text-align: center;
}

.slider-line {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #5c6d7a;
}

.slider-tip {
  margin-top: 6px;
  font-size: 12px;
  line-height: 1.6;
  color: #6a7d8d;
}

.time-slider {
  width: 100%;
  margin: 8px 0 12px;
}

.play-controls {
  display: flex;
  gap: 8px;
}

.play-controls button {
  flex: 1;
  border: none;
  color: #fff;
  padding: 8px 0;
  border-radius: 8px;
  cursor: pointer;
}

.btn-play {
  background: #237a37;
}

.btn-pause {
  background: #d97706;
}

.btn-stop {
  background: #c0392b;
}

.speed-section {
  margin-top: 12px;
}

.speed-section label {
  display: block;
  font-size: 12px;
  color: #5e6f7c;
  margin-bottom: 6px;
}

.speed-section select {
  width: 100%;
  padding: 8px 10px;
  border-radius: 8px;
  border: 1px solid #d5dde5;
  background: #fff;
}

.legend {
  right: 16px;
  bottom: 16px;
  padding: 10px;
}

.legend-title {
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 8px;
  text-align: center;
}

.legend-content {
  display: flex;
}

.legend-bar {
  width: 28px;
  height: 190px;
  border: 1px solid #d6dbe2;
  background: linear-gradient(
    to bottom,
    #7f0000,
    #ff3d00,
    #ffd600,
    #4caf50,
    #00bcd4,
    #1565c0,
    #0d1b6f
  );
}

.legend-labels {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 190px;
  margin-left: 8px;
  font-size: 11px;
  color: #556573;
}

@media (max-width: 960px) {
  .memory-grid {
    grid-template-columns: 1fr;
  }
}
</style>
