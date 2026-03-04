<template>
  <div class="contour-page">
    <div id="contour-map" class="map-container"></div>
    <div class="controls">
      <h3>气压场控制</h3>
      <div class="control-item">
        <label>
          <input type="checkbox" v-model="showScalarField" @change="toggleScalarField" />
          显示颜色场
        </label>
      </div>
      <div class="control-item">
        <label>
          <input type="checkbox" v-model="showContour" @change="toggleContour" />
          显示等值线
        </label>
      </div>
      <div class="control-item">
        <label>
          <input type="checkbox" v-model="showLabels" @change="toggleLabels" />
          显示数值标注
        </label>
      </div>
      <div class="control-item">
        <label>颜色场透明度</label>
        <input
          type="range"
          v-model.number="scalarOpacity"
          min="0.1"
          max="1"
          step="0.1"
          @input="updateScalarOpacity"
        />
        <span>{{ scalarOpacity }}</span>
      </div>
      <div class="control-item">
        <label>线条宽度</label>
        <input
          type="range"
          v-model.number="lineWidth"
          min="1"
          max="5"
          step="0.5"
          @input="updateStyle"
        />
        <span>{{ lineWidth }}px</span>
      </div>
      <div class="legend">
        <div class="legend-title">气压值 (hPa)</div>
        <div class="legend-gradient"></div>
        <div class="legend-labels">
          <span>960</span>
          <span>1000</span>
          <span>1040</span>
        </div>
      </div>
      <div v-if="loading" class="loading">加载中...</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import L from "leaflet";
import mapUtils from "../utils/map.js";

const map = ref<L.Map | null>(null)
const showScalarField = ref(true)
const showContour = ref(true)
const showLabels = ref(true)
const scalarOpacity = ref(0.6)
const lineWidth = ref(1.5)
const loading = ref(false)
const presData = ref<any>(null)
const contourData = ref<any>(null)

const initMap = () => {
  map.value = L.map("contour-map", {
    zoom: 4,
    maxZoom: 10,
    minZoom: 2,
    zoomControl: true,
  }).setView([35, 120], 4);

  L.tileLayer(
    "https://t0.tianditu.gov.cn/img_w/wmts?tk=93724b915d1898d946ca7dc7b765dda5&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}",
    { maxZoom: 18 }
  ).addTo(map.value);
};

const loadData = async () => {
  loading.value = true;
  try {
    // 并行加载两个数据文件
    const [presRes, contourRes] = await Promise.all([
      fetch("./data/pres.json"),
      fetch("./data/pres-contour.json"),
    ]);

    presData.value = await presRes.json();
    contourData.value = await contourRes.json();

    // 数据加载完成后添加图层
    if (showScalarField.value) {
      addScalarField();
    }
    if (showContour.value) {
      addContour();
    }
  } catch (error) {
    console.error("数据加载失败:", error);
  } finally {
    loading.value = false;
  }
};

const addScalarField = () => {
  if (!presData.value || !map.value) return;

  const header = presData.value[0].header;
  // 从 JSON 中获取图片路径，或使用本地路径
  const imageUrl = "./data/pres_u.png";

  mapUtils.addScalarFieldLayer(map.value, {
    header: header,
    imageUrl: imageUrl,
  }, {
    opacity: scalarOpacity.value,
  });
};

const addContour = () => {
  if (!contourData.value || !map.value) return;

  mapUtils.addContourLayer(map.value, contourData.value, {
    lineWidth: lineWidth.value,
    opacity: 0.9,
    showLabels: showLabels.value,
  });
};

const toggleScalarField = () => {
  if (showScalarField.value) {
    addScalarField();
    // 确保等值线在上层
    if (showContour.value && contourData.value && map.value) {
      mapUtils.removeContourLayer(map.value);
      addContour();
    }
  } else if (map.value) {
    mapUtils.removeScalarFieldLayer(map.value);
  }
};

const toggleContour = () => {
  if (showContour.value) {
    addContour();
  } else if (map.value) {
    mapUtils.removeContourLayer(map.value);
  }
};

const toggleLabels = () => {
  if (map.value) {
    mapUtils.toggleContourLabels(map.value, showLabels.value);
  }
};

const updateScalarOpacity = () => {
  if (showScalarField.value && presData.value && map.value) {
    mapUtils.removeScalarFieldLayer(map.value);
    addScalarField();
    // 重新添加等值线保持在上层
    if (showContour.value && contourData.value) {
      mapUtils.removeContourLayer(map.value);
      addContour();
    }
  }
};

const updateStyle = () => {
  if (map.value) {
    mapUtils.updateContourStyle(map.value, {
      lineWidth: lineWidth.value,
    });
  }
};

onMounted(() => {
  initMap();
  loadData();
});

onUnmounted(() => {
  if (map.value) {
    mapUtils.removeScalarFieldLayer(map.value);
    mapUtils.removeContourLayer(map.value);
    map.value.remove();
    map.value = null;
  }
});
</script>

<style scoped>
.contour-page {
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
  min-width: 220px;
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
  min-width: 90px;
}
.control-item input[type="range"] {
  flex: 1;
}
.legend {
  margin-top: 15px;
  padding-top: 10px;
  border-top: 1px solid #eee;
}
.legend-title {
  font-size: 12px;
  color: #666;
  margin-bottom: 8px;
}
.legend-gradient {
  height: 12px;
  background: linear-gradient(to right,
    rgb(180,180,180),
    rgb(255,255,255),
    rgb(0,255,174),
    rgb(12,255,0),
    rgb(128,255,0),
    rgb(199,255,0),
    rgb(255,144,0),
    rgb(255,0,0)
  );
  border-radius: 2px;
}
.legend-labels {
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  color: #666;
  margin-top: 4px;
}
.loading {
  margin-top: 10px;
  color: #1890ff;
  font-size: 13px;
}
</style>

<style>
.contour-label {
  background: transparent !important;
  border: none !important;
}
</style>
