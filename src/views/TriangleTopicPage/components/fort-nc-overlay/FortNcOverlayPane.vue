<template>
  <div class="pane">
    <div class="tab-meta">
      <div class="tab-title">浪网格叠加模块</div>
      <div class="tab-desc">
        使用 `new-fort14` 提供三角网格拓扑，使用 `20260311.nc` 的 `hs` 提供节点值。
        当前数据没有单独暴露 `id` 字段，但节点数和点位数同为 232,740，且经纬度逐点几乎一致，因此这里按索引直接匹配。
      </div>
    </div>

    <div class="memory-card">
      <div class="memory-title">当前叠加规则</div>
      <div class="memory-list">
        <div class="memory-list-line">`fort.14`: 提供 `lon / lat / elements`，也就是网格骨架。</div>
        <div class="memory-list-line">`nc hs`: 提供每个点位在当前时间步的波高值，单位是米 `m`。</div>
        <div class="memory-list-line">当前判断结果是“按索引匹配”可行，不是前端里另有一列显式 `id`。</div>
        <div class="memory-list-line">匹配依据：节点数 = 点位数 = 232,740，经纬度逐点误差只有百万分之一量级。</div>
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
        <div class="panel-title">fort 网格 + nc 波高</div>
        <div class="panel-line">{{ statusText }}</div>
        <div class="panel-sub">匹配方式: {{ matchSummary }}</div>
        <div class="time-display">{{ currentTimeText }}</div>
        <div class="slider-line">
          <span>时间步 {{ currentIndex }}</span>
          <span>{{ totalSteps }}</span>
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
  if (value === null || Number.isNaN(value)) return "rgba(120,120,120,0.18)";
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

function pointInTriangle(px, py, x1, y1, x2, y2, x3, y3) {
  const d1 = (px - x2) * (y1 - y2) - (x1 - x2) * (py - y2);
  const d2 = (px - x3) * (y2 - y3) - (x2 - x3) * (py - y3);
  const d3 = (px - x1) * (y3 - y1) - (x3 - x1) * (py - y1);
  const hasNeg = d1 < 0 || d2 < 0 || d3 < 0;
  const hasPos = d1 > 0 || d2 > 0 || d3 > 0;
  return !(hasNeg && hasPos);
}

function interpolateValue(px, py, x1, y1, v1, x2, y2, v2, x3, y3, v3) {
  const denom = (y2 - y3) * (x1 - x3) + (x3 - x2) * (y1 - y3);
  const w1 = ((y2 - y3) * (px - x3) + (x3 - x2) * (py - y3)) / denom;
  const w2 = ((y3 - y1) * (px - x3) + (x1 - x3) * (py - y3)) / denom;
  const w3 = 1 - w1 - w2;
  return w1 * v1 + w2 * v2 + w3 * v3;
}

function buildLegendLabels(min, max) {
  const labels = [];
  const steps = 6;
  for (let i = 0; i <= steps; i++) {
    const value = max - ((max - min) / steps) * i;
    labels.push(`${value.toFixed(2)} m`);
  }
  return labels;
}

const MeshValueTileLayer = L.GridLayer.extend({
  initialize(data, options) {
    this._data = data;
    this._frameValues = null;
    L.setOptions(this, options);
  },
  setFrameValues(values) {
    this._frameValues = values;
    this.redraw();
  },
  createTile(coords) {
    const tile = document.createElement("canvas");
    const size = this.getTileSize();
    tile.width = size.x;
    tile.height = size.y;

    const ctx = tile.getContext("2d");
    const { nodes, elements, numElements, valueRange } = this._data;
    const frameValues = this._frameValues;

    if (!frameValues) {
      return tile;
    }

    const nwPoint = coords.scaleBy(size);
    const nw = this._map.unproject(nwPoint, coords.z);
    const se = this._map.unproject(nwPoint.add(size), coords.z);
    const tileBounds = {
      minLat: se.lat,
      maxLat: nw.lat,
      minLon: nw.lng,
      maxLon: se.lng,
    };

    const triangles = [];
    for (let i = 0; i < numElements; i++) {
      const n1 = elements[i * 3];
      const n2 = elements[i * 3 + 1];
      const n3 = elements[i * 3 + 2];
      const lat1 = nodes[n1 * 3 + 1];
      const lon1 = nodes[n1 * 3];
      const lat2 = nodes[n2 * 3 + 1];
      const lon2 = nodes[n2 * 3];
      const lat3 = nodes[n3 * 3 + 1];
      const lon3 = nodes[n3 * 3];

      const triMinLat = Math.min(lat1, lat2, lat3);
      const triMaxLat = Math.max(lat1, lat2, lat3);
      const triMinLon = Math.min(lon1, lon2, lon3);
      const triMaxLon = Math.max(lon1, lon2, lon3);

      if (
        triMaxLat < tileBounds.minLat ||
        triMinLat > tileBounds.maxLat ||
        triMaxLon < tileBounds.minLon ||
        triMinLon > tileBounds.maxLon
      ) {
        continue;
      }

      const v1 = frameValues[n1];
      const v2 = frameValues[n2];
      const v3 = frameValues[n3];
      const validValues = [v1, v2, v3].filter((value) => value !== null);
      const avgValue = validValues.length
        ? validValues.reduce((sum, value) => sum + value, 0) / validValues.length
        : null;

      const p1 = this._map.project([lat1, lon1], coords.z).subtract(nwPoint);
      const p2 = this._map.project([lat2, lon2], coords.z).subtract(nwPoint);
      const p3 = this._map.project([lat3, lon3], coords.z).subtract(nwPoint);

      triangles.push({
        x1: p1.x,
        y1: p1.y,
        x2: p2.x,
        y2: p2.y,
        x3: p3.x,
        y3: p3.y,
        color: colorForValue(avgValue, valueRange.min, valueRange.max),
      });
    }

    for (const triangle of triangles) {
      ctx.beginPath();
      ctx.moveTo(triangle.x1, triangle.y1);
      ctx.lineTo(triangle.x2, triangle.y2);
      ctx.lineTo(triangle.x3, triangle.y3);
      ctx.closePath();
      ctx.fillStyle = triangle.color;
      ctx.fill();
    }

    ctx.strokeStyle = "rgba(60, 60, 60, 0.18)";
    ctx.lineWidth = 0.35;
    for (const triangle of triangles) {
      ctx.beginPath();
      ctx.moveTo(triangle.x1, triangle.y1);
      ctx.lineTo(triangle.x2, triangle.y2);
      ctx.lineTo(triangle.x3, triangle.y3);
      ctx.closePath();
      ctx.stroke();
    }

    return tile;
  },
});

export default {
  name: "NewFortNcOverlayPane",
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
      meshData: null,
      metadata: null,
      meshLayer: null,
      frameCache: {},
      currentFrameValues: null,
      currentIndex: 0,
      currentTimeText: "--",
      statusText: "等待地图初始化...",
      playbackDelay: 700,
      playbackTimer: null,
      legendLabels: [],
      matchSummary: "待校验",
    };
  },
  computed: {
    totalSteps() {
      return this.metadata ? this.metadata.timeCount - 1 : 0;
    },
  },
  beforeDestroy() {
    this.pausePlayback();
    if (this.map) {
      this.map.off("click", this.handleMapClick);
    }
    if (this.meshLayer) {
      this.meshLayer.remove();
    }
  },
  methods: {
    async handleMapReady(map) {
      this.map = map;
      this.map.on("click", this.handleMapClick);
      this.$nextTick(() => {
        this.map.invalidateSize();
      });
      await this.loadMeshAndMetadata();
      await this.showFrame(0);
    },
    async loadMeshAndMetadata() {
      this.statusText = "正在加载 fort 网格和 nc metadata ...";
      const [meshResponse, metadataResponse] = await Promise.all([
        fetch("/data/triangle-topic/new-fort14/mesh.json"),
        fetch("/data/triangle-topic/wave-points/metadata.json"),
      ]);
      const meshJson = await meshResponse.json();
      const metadata = await metadataResponse.json();
      const nodes = new Float64Array(meshJson.nodes);
      const elements = new Uint32Array(meshJson.elements);

      let minLat = Infinity;
      let maxLat = -Infinity;
      let minLon = Infinity;
      let maxLon = -Infinity;
      let maxDeltaLon = 0;
      let maxDeltaLat = 0;
      for (let i = 0; i < meshJson.numNodes; i++) {
        const lon = nodes[i * 3];
        const lat = nodes[i * 3 + 1];
        minLat = Math.min(minLat, lat);
        maxLat = Math.max(maxLat, lat);
        minLon = Math.min(minLon, lon);
        maxLon = Math.max(maxLon, lon);

        const deltaLon = Math.abs(lon - metadata.lon[i]);
        const deltaLat = Math.abs(lat - metadata.lat[i]);
        maxDeltaLon = Math.max(maxDeltaLon, deltaLon);
        maxDeltaLat = Math.max(maxDeltaLat, deltaLat);
      }

      this.meshData = {
        nodes,
        elements,
        numNodes: meshJson.numNodes,
        numElements: meshJson.numElements,
        valueRange: metadata.valueRange,
      };
      this.metadata = metadata;
      this.legendLabels = buildLegendLabels(
        metadata.valueRange.min,
        metadata.valueRange.max
      );
      this.matchSummary = `同索引匹配，最大经度差 ${maxDeltaLon.toExponential(
        2
      )}，最大纬度差 ${maxDeltaLat.toExponential(2)}`;

      this.initialCenter = [(minLat + maxLat) / 2, (minLon + maxLon) / 2];
      this.map.fitBounds(
        [
          [minLat, minLon],
          [maxLat, maxLon],
        ],
        { animate: false }
      );

      this.meshLayer = new MeshValueTileLayer(this.meshData, { tileSize: 256 });
      this.meshLayer.addTo(this.map);
      this.statusText = "网格和 metadata 已加载";
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
      if (!this.meshLayer || !this.metadata) return;
      this.currentIndex = index;
      this.statusText = `正在加载第 ${index} 帧 nc 波高...`;
      const frame = await this.loadFrame(index);
      this.currentTimeText = frame.time;
      this.currentFrameValues = frame.values;
      this.meshLayer.setFrameValues(frame.values);
      this.statusText = `已将 ${frame.time} 的 hs 波高叠加到 fort 网格`;
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
    handleMapClick(event) {
      if (!this.meshData || !this.currentFrameValues) return;

      const { lat, lng } = event.latlng;
      const { nodes, elements, numElements } = this.meshData;
      let result = null;

      for (let i = 0; i < numElements; i++) {
        const n1 = elements[i * 3];
        const n2 = elements[i * 3 + 1];
        const n3 = elements[i * 3 + 2];
        const lon1 = nodes[n1 * 3];
        const lat1 = nodes[n1 * 3 + 1];
        const lon2 = nodes[n2 * 3];
        const lat2 = nodes[n2 * 3 + 1];
        const lon3 = nodes[n3 * 3];
        const lat3 = nodes[n3 * 3 + 1];
        const v1 = this.currentFrameValues[n1];
        const v2 = this.currentFrameValues[n2];
        const v3 = this.currentFrameValues[n3];

        if (v1 === null || v2 === null || v3 === null) {
          continue;
        }

        if (pointInTriangle(lng, lat, lon1, lat1, lon2, lat2, lon3, lat3)) {
          result = {
            value: interpolateValue(
              lng,
              lat,
              lon1,
              lat1,
              v1,
              lon2,
              lat2,
              v2,
              lon3,
              lat3,
              v3
            ),
            triIndex: i + 1,
          };
          break;
        }
      }

      const content = result
        ? `<div class="mesh-popup">
            <b>经度:</b> ${lng.toFixed(6)}<br>
            <b>纬度:</b> ${lat.toFixed(6)}<br>
            <b>hs:</b> ${result.value.toFixed(3)} m<br>
            <b>时间:</b> ${this.currentTimeText}<br>
            <b>三角形:</b> #${result.triIndex}
          </div>`
        : `<div class="mesh-popup">
            <b>经度:</b> ${lng.toFixed(6)}<br>
            <b>纬度:</b> ${lat.toFixed(6)}<br>
            <i>当前位置无可用 hs 值或不在网格范围内</i>
          </div>`;

      L.popup().setLatLng(event.latlng).setContent(content).openOn(this.map);
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
  width: 340px;
  padding: 14px 16px;
}

.panel-title {
  font-size: 14px;
  font-weight: 600;
  color: #153048;
  margin-bottom: 6px;
}

.panel-line,
.panel-sub {
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
</style>
