<template>
  <div class="wms-page">
    <div id="wms-map" class="map-container"></div>
    <div class="controls">
      <h3>WMS 图层控制</h3>
      <div class="control-item">
        <label>
          <input type="checkbox" v-model="showWms" @change="toggleWms" />
          WMS 图层 (topp:states)
        </label>
      </div>
      <div class="control-item">
        <label>透明度</label>
        <input
          type="range"
          v-model.number="opacity"
          min="0"
          max="1"
          step="0.1"
          @input="updateOpacity"
          :disabled="!showWms"
        />
        <span>{{ opacity }}</span>
      </div>
      <div class="control-item">
        <label>图层样式</label>
        <select v-model="currentStyle" @change="changeStyle" :disabled="!showWms">
          <option value="population">population</option>
          <option value="pophatch">pophatch</option>
          <option value="polygon">polygon</option>
        </select>
      </div>
      <div class="control-item">
        <button @click="zoomToLayer" :disabled="!showWms">定位到图层</button>
        <button @click="refreshLayer" :disabled="!showWms">刷新图层</button>
      </div>
      <div class="wms-info">
        <p>服务地址: {{ wmsUrl }}</p>
        <p>图层: {{ layers }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import L from "leaflet";

export default {
  name: "WmsPage",
  data() {
    return {
      map: null,
      wmsLayer: null,
      showWms: true,
      opacity: 0.8,
      currentStyle: "population",
      wmsUrl: "http://localhost:8080/geoserver/wms",
      layers: "ne:my_points",
      // 美国本土范围
      layerBounds: [
        [24, -130],
        [50, -66],
      ],
    };
  },
  mounted() {
    this.initMap();
  },
  beforeDestroy() {
    if (this.map) {
      this.map.remove();
      this.map = null;
    }
  },
  methods: {
    initMap() {
      // 初始化地图，中心设置为美国
      this.map = L.map("wms-map", {
        zoom: 4,
        maxZoom: 18,
        minZoom: 2,
        zoomControl: true,
      }).setView([37, -98], 4);

      // 添加底图
      L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
          maxZoom: 18,
          attribution: '© OpenStreetMap contributors',
        }
      ).addTo(this.map);

      // 默认加载 WMS 图层
      if (this.showWms) {
        this.addWmsLayer();
      }
    },
    addWmsLayer() {
      if (this.wmsLayer) {
        this.map.removeLayer(this.wmsLayer);
      }

      this.wmsLayer = L.tileLayer.wms(this.wmsUrl, {
        layers: this.layers,
        styles: this.currentStyle,
        format: "image/png",
        transparent: true,
        version: "1.1.1",
        opacity: this.opacity,
        attribution: "GeoServer Demo",
      });

      this.wmsLayer.addTo(this.map);
    },
    toggleWms() {
      if (this.showWms) {
        this.addWmsLayer();
      } else if (this.wmsLayer) {
        this.map.removeLayer(this.wmsLayer);
        this.wmsLayer = null;
      }
    },
    updateOpacity() {
      if (this.wmsLayer) {
        this.wmsLayer.setOpacity(this.opacity);
      }
    },
    changeStyle() {
      if (this.wmsLayer) {
        this.addWmsLayer();
      }
    },
    zoomToLayer() {
      this.map.fitBounds(this.layerBounds);
    },
    refreshLayer() {
      if (this.wmsLayer) {
        // 通过重新添加图层来刷新
        this.addWmsLayer();
      }
    },
  },
};
</script>

<style scoped>
.wms-page {
  width: 100%;
  height: 100%;
  position: relative;
}
.map-container {
  width: 100%;
  height: 100%;
  z-index: 1;
}
.controls {
  position: absolute;
  top: 20px;
  right: 20px;
  background: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  min-width: 280px;
}
.controls h3 {
  margin: 0 0 15px 0;
  font-size: 16px;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}
.control-item {
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.control-item label {
  cursor: pointer;
  font-size: 14px;
  min-width: 70px;
}
.control-item input[type="checkbox"] {
  margin-right: 8px;
}
.control-item input[type="range"] {
  flex: 1;
}
.control-item select {
  flex: 1;
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid #ddd;
}
.control-item button {
  padding: 6px 12px;
  border: none;
  background: #1890ff;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;
}
.control-item button:hover:not(:disabled) {
  background: #40a9ff;
}
.control-item button:disabled {
  background: #d9d9d9;
  cursor: not-allowed;
}
.wms-info {
  margin-top: 15px;
  padding-top: 10px;
  border-top: 1px solid #eee;
  font-size: 12px;
  color: #666;
}
.wms-info p {
  margin: 5px 0;
  word-break: break-all;
}
</style>
