<template>
  <div class="wms-page">
    <BaseMap
      ref="baseMap"
      basemap="osm"
      :options="mapOptions"
      :show-annotation="false"
      @map-ready="onMapReady"
    />
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
      <div class="control-item">
        <label>底图切换</label>
        <select v-model="currentBasemap" @change="changeBasemap">
          <option value="osm">OpenStreetMap</option>
          <option value="tianditu_img">天地图影像</option>
          <option value="tianditu_vec">天地图矢量</option>
          <option value="dark">暗色底图</option>
          <option value="gaode_vec">高德矢量</option>
        </select>
      </div>
      <div class="wms-info">
        <p>服务地址: {{ wmsUrl }}</p>
        <p>图层: {{ layers }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import L from "leaflet";
import BaseMap from "@/components/BaseMap.vue";

const baseMap = ref<any>(null)
const map = ref<L.Map | null>(null)
const wmsLayer = ref<L.TileLayer.WMS | null>(null)
const showWms = ref(true)
const opacity = ref(0.8)
const currentStyle = ref("population")
const currentBasemap = ref("osm")
const wmsUrl = ref("http://localhost:8080/geoserver/wms")
const layers = ref("ne:my_points")
const layerBounds = ref<[number, number][]>([
  [24, -130],
  [50, -66],
])
const mapOptions = ref({
  center: [37, -98],
  zoom: 4,
  maxZoom: 18,
  minZoom: 2,
})

const onMapReady = (mapInstance: L.Map) => {
  map.value = mapInstance;
  if (showWms.value) {
    addWmsLayer();
  }
};

const addWmsLayer = () => {
  if (!map.value) return;

  if (wmsLayer.value) {
    map.value.removeLayer(wmsLayer.value);
  }

  wmsLayer.value = L.tileLayer.wms(wmsUrl.value, {
    layers: layers.value,
    styles: currentStyle.value,
    format: "image/png",
    transparent: true,
    version: "1.1.1",
    opacity: opacity.value,
    attribution: "GeoServer Demo",
  });

  wmsLayer.value.addTo(map.value);
};

const toggleWms = () => {
  if (showWms.value) {
    addWmsLayer();
  } else if (wmsLayer.value && map.value) {
    map.value.removeLayer(wmsLayer.value);
    wmsLayer.value = null;
  }
};

const updateOpacity = () => {
  if (wmsLayer.value) {
    wmsLayer.value.setOpacity(opacity.value);
  }
};

const changeStyle = () => {
  if (wmsLayer.value) {
    addWmsLayer();
  }
};

const changeBasemap = () => {
  if (baseMap.value) {
    baseMap.value.setBasemap(currentBasemap.value);
  }
};

const zoomToLayer = () => {
  if (map.value) {
    map.value.fitBounds(layerBounds.value);
  }
};

const refreshLayer = () => {
  if (wmsLayer.value) {
    addWmsLayer();
  }
};
</script>

<style scoped>
.wms-page {
  width: 100%;
  height: 100%;
  position: relative;
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
