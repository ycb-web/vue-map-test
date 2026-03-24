<template>
  <div class="pane">
    <div class="tab-meta">
      <div class="tab-title">新水深fort14</div>
      <div class="tab-desc">
        数据来源是 `fort.14 -> mesh.json`。页面直接在 Vue 组件里做 Canvas + GridLayer
        渲染，并保留点击查询网格深度的能力。
      </div>
    </div>

    <div class="memory-card">
      <div class="memory-title">这份 fort.14 是什么数据</div>
      <div class="memory-desc">
        它是 ADCIRC 的二维水深地形网格数据。
        每个节点记录 <b>经度</b>、<b>纬度</b> 和 <b>深度</b>，三角形单元只负责描述网格拓扑连接关系。
      </div>
      <div class="memory-grid">
        <div class="memory-item">
          <div class="memory-label">原始文件</div>
          <div class="memory-value">fort.14</div>
          <div class="memory-sub">约 26.62 MB，424,573 个三角形、232,740 个节点</div>
        </div>
        <div class="memory-item">
          <div class="memory-label">解析脚本</div>
          <div class="memory-value">convert-fort14-to-mesh.js</div>
          <div class="memory-sub">把节点和单元索引转成前端直接可读的 mesh.json</div>
        </div>
        <div class="memory-item">
          <div class="memory-label">运行时产物</div>
          <div class="memory-value">mesh.json</div>
          <div class="memory-sub">字段为 title / numNodes / numElements / valueRange / nodes / elements</div>
        </div>
      </div>
      <div class="memory-list">
        <div class="memory-list-title">如何理解字段</div>
        <div class="memory-list-line">`nodes`: 扁平数组，每 3 个值为一组，顺序是 `lon, lat, depth`。</div>
        <div class="memory-list-line">`elements`: 扁平数组，每 3 个值为一组三角形顶点索引，指回 `nodes`。</div>
        <div class="memory-list-line">页面上的颜色就是按顶点深度平均值着色，点击地图会插值查询当前位置深度。</div>
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

      <div class="panel status-panel">
        <div class="panel-title">新水深fort14</div>
        <div class="panel-line">{{ statusText }}</div>
        <div v-if="meshSummary" class="panel-sub">
          节点 {{ meshSummary.numNodes.toLocaleString() }} / 三角形
          {{ meshSummary.numElements.toLocaleString() }}
        </div>
        <div v-if="meshSummary" class="panel-sub">
          深度 {{ meshSummary.valueMin.toFixed(2) }} ~ {{ meshSummary.valueMax.toFixed(2) }}
        </div>
        <div class="panel-metric">
          首屏渲染耗时:
          <span>{{ firstScreenRenderText }}</span>
        </div>
      </div>

      <div class="legend">
        <div class="legend-title">深度 (m)</div>
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

function valueToColor(value, min, max) {
  const t = Math.max(0, Math.min(1, (value - min) / (max - min || 1)));
  const start = { r: 0, g: 255, b: 255 };
  const end = { r: 6, g: 3, b: 255 };
  const r = Math.round(start.r + t * (end.r - start.r));
  const g = Math.round(start.g + t * (end.g - start.g));
  const b = Math.round(start.b + t * (end.b - start.b));
  return `rgb(${r},${g},${b})`;
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
  const steps = 5;
  for (let i = 0; i <= steps; i++) {
    const value = max - ((max - min) / steps) * i;
    labels.push(value.toFixed(2));
  }
  return labels;
}

const MeshTileLayer = L.GridLayer.extend({
  initialize(data, options) {
    this._data = data;
    L.setOptions(this, options);
  },
  createTile(coords) {
    const tile = document.createElement("canvas");
    const size = this.getTileSize();
    tile.width = size.x;
    tile.height = size.y;

    const ctx = tile.getContext("2d");
    const { nodes, elements, numElements, valueRange } = this._data;

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

      const p1 = this._map.project([lat1, lon1], coords.z).subtract(nwPoint);
      const p2 = this._map.project([lat2, lon2], coords.z).subtract(nwPoint);
      const p3 = this._map.project([lat3, lon3], coords.z).subtract(nwPoint);
      const avgValue =
        (nodes[n1 * 3 + 2] + nodes[n2 * 3 + 2] + nodes[n3 * 3 + 2]) / 3;

      triangles.push({
        x1: p1.x,
        y1: p1.y,
        x2: p2.x,
        y2: p2.y,
        x3: p3.x,
        y3: p3.y,
        color: valueToColor(avgValue, valueRange.min, valueRange.max),
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
  name: "NewFort14MeshPane",
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
      initialCenter: [20.8, 114.6],
      initialZoom: 8,
      meshLayer: null,
      meshData: null,
      meshSummary: null,
      statusText: "等待地图初始化...",
      firstScreenRenderMs: null,
      legendLabels: [],
    };
  },
  computed: {
    firstScreenRenderText() {
      if (this.firstScreenRenderMs === null) {
        return "--";
      }
      return `${this.firstScreenRenderMs.toFixed(1)} ms`;
    },
  },
  beforeDestroy() {
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
      this.statusText = "正在加载 mesh.json ...";
      this.map.on("click", this.handleMapClick);
      this.$nextTick(() => {
        this.map.invalidateSize();
      });
      await this.loadMesh();
    },
    async loadMesh() {
      try {
        const response = await fetch("/data/triangle-topic/new-fort14/mesh.json");
        const data = await response.json();
        const nodes = new Float64Array(data.nodes);
        const elements = new Uint32Array(data.elements);

        let minLat = Infinity;
        let maxLat = -Infinity;
        let minLon = Infinity;
        let maxLon = -Infinity;
        let valueMin = Infinity;
        let valueMax = -Infinity;

        for (let i = 0; i < data.numNodes; i++) {
          const lon = nodes[i * 3];
          const lat = nodes[i * 3 + 1];
          const value = nodes[i * 3 + 2];
          minLat = Math.min(minLat, lat);
          maxLat = Math.max(maxLat, lat);
          minLon = Math.min(minLon, lon);
          maxLon = Math.max(maxLon, lon);
          valueMin = Math.min(valueMin, value);
          valueMax = Math.max(valueMax, value);
        }

        this.meshData = {
          nodes,
          elements,
          numNodes: data.numNodes,
          numElements: data.numElements,
          valueRange: {
            min: data.valueRange ? data.valueRange.min : valueMin,
            max: data.valueRange ? data.valueRange.max : valueMax,
          },
        };
        this.meshSummary = {
          numNodes: data.numNodes,
          numElements: data.numElements,
          valueMin: this.meshData.valueRange.min,
          valueMax: this.meshData.valueRange.max,
        };
        this.legendLabels = buildLegendLabels(
          this.meshData.valueRange.min,
          this.meshData.valueRange.max
        );

        this.initialCenter = [(minLat + maxLat) / 2, (minLon + maxLon) / 2];
        this.initialZoom = 8;
        this.firstScreenRenderMs = null;

        this.map.fitBounds(
          [
            [minLat, minLon],
            [maxLat, maxLon],
          ],
          { animate: false }
        );

        const renderStart = performance.now();
        this.meshLayer = new MeshTileLayer(this.meshData, { tileSize: 256 });
        this.meshLayer.once("load", () => {
          this.firstScreenRenderMs = performance.now() - renderStart;
          this.statusText = "mesh.json 已加载，可点击网格查询深度";
        });
        this.meshLayer.addTo(this.map);
        this.statusText = "mesh.json 已加载，正在计算首屏渲染耗时...";
      } catch (error) {
        console.error(error);
        this.statusText = `加载失败: ${error.message}`;
      }
    },
    handleMapClick(event) {
      if (!this.meshData) return;

      const { lat, lng } = event.latlng;
      const { nodes, elements, numElements } = this.meshData;
      let result = null;

      for (let i = 0; i < numElements; i++) {
        const n1 = elements[i * 3];
        const n2 = elements[i * 3 + 1];
        const n3 = elements[i * 3 + 2];
        const lon1 = nodes[n1 * 3];
        const lat1 = nodes[n1 * 3 + 1];
        const v1 = nodes[n1 * 3 + 2];
        const lon2 = nodes[n2 * 3];
        const lat2 = nodes[n2 * 3 + 1];
        const v2 = nodes[n2 * 3 + 2];
        const lon3 = nodes[n3 * 3];
        const lat3 = nodes[n3 * 3 + 1];
        const v3 = nodes[n3 * 3 + 2];

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
            <b>深度:</b> ${result.value.toFixed(2)} m<br>
            <b>三角形:</b> #${result.triIndex}
          </div>`
        : `<div class="mesh-popup">
            <b>经度:</b> ${lng.toFixed(6)}<br>
            <b>纬度:</b> ${lat.toFixed(6)}<br>
            <i>不在网格范围内</i>
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

.status-panel {
  top: 16px;
  right: 16px;
  padding: 14px 16px;
  min-width: 260px;
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

.panel-sub {
  margin-top: 8px;
  font-size: 12px;
  color: #38566f;
}

.panel-metric {
  margin-top: 8px;
  font-size: 12px;
  color: #38566f;
}

.panel-metric span {
  font-weight: 600;
  color: #153048;
}

.legend {
  position: absolute;
  right: 16px;
  bottom: 16px;
  z-index: 1001;
  padding: 10px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.94);
  box-shadow: 0 12px 28px rgba(20, 49, 78, 0.14);
  border: 1px solid rgba(16, 50, 74, 0.08);
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
  background: linear-gradient(to bottom, #0603ff, #00ffff);
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

  .preview-shell {
    height: 640px;
  }

  .status-panel,
  .legend {
    right: 12px;
  }
}
</style>
