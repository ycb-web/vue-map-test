<template>
  <div class="wind-page">
    <div id="wind-map" class="map-container"></div>
    <MapToolbar class="toolbar" :map="map" @reset-view="resetView" />
    <div class="chart-container" id="chart"></div>
    <div class="controls">
      <div class="control-item">
        <label>
          <input type="checkbox" v-model="showScalar" @change="toggleScalar" />
          颜色图层 (Scalar)
        </label>
      </div>
      <div class="control-item">
        <label>
          <input type="checkbox" v-model="showVector" @change="toggleVector" />
          粒子图层 (Vector)
        </label>
      </div>
      <div class="control-item">
        <label>
          <input type="checkbox" v-model="showArrow" @change="toggleArrow" />
          箭头图层 (Arrow)
        </label>
      </div>
      <div class="control-item">
        <label>
          <input type="checkbox" v-model="showBarb" @change="toggleBarb" />
          风杆图层 (Barb)
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import L from "leaflet";
import "../utils/leaflet-vector-scalar";
import windData from "../assets/wind.json";
import chartData from "../assets/chartData.json";
import * as echarts from "echarts";
import { getProcessLineOption } from "../utils/getProcessLineOption";
import MapToolbar from "../components/MapToolbar";

export default {
  name: "WindPage",
  components: {
    MapToolbar,
  },
  data() {
    return {
      map: null,
      showScalar: true,
      showVector: true,
      showArrow: false,
      showBarb: false,
      chart: null,
      scalarLayer: null,
      velocityLayer: null,
      arrowLayer: null,
      barbLayer: null,
      tileScalarLayer: null,
    };
  },
  mounted() {
    this.initMap();
    this.initChart();
  },
  beforeDestroy() {
    if (this.map) {
      this.map.remove();
      this.map = null;
    }
    if (this.chart) {
      this.chart.dispose();
      this.chart = null;
    }
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById("chart"));
      const option = getProcessLineOption(chartData);
      this.chart.setOption(option);
      window.addEventListener("resize", this.handleResize);
    },
    handleResize() {
      this.chart && this.chart.resize();
    },
    initMap() {
      // 创建地图，初始视图由 MapToolbar 组件设置
      this.map = L.map("wind-map", {
        maxZoom: 16,
        zoomControl: false,
        zoomAnimation: true,
      });

      // 底图由 MapToolbar 组件管理

      if (this.showScalar) this.addScalarLayer();
      if (this.showVector) this.addVectorLayer();
    },
    addScalarLayer() {
      const config = { minValue: 0.01, maxValue: 30 };
      this.tileScalarLayer = L.scalarTileLayer(config);
      this.tileScalarLayer.addTo(this.map);
      this.tileScalarLayer.setData(windData);
    },
    addVectorLayer() {
      const options = {
        colorScale: [
          "rgb(222,255,253)",
          "rgb(234,234,234)",
          "rgb(255,255,255)",
          "rgb(156,156,156)",
          "rgb(255,106,43)",
        ],
        opacity: 0.7,
        maxVelocity: 35,
        lineWidth: 1,
        particleMultiplier: 1 / 500,
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
      this.velocityLayer.setData(windData);
      this.velocityLayer.onAdd(this.map);
    },
    addArrowLayer() {
      this.arrowLayer = L.vectorArrowLayer({
        color: "white",
        arrowSize: 20,
        gridSize: 40,
      });
      this.arrowLayer.addTo(this.map);
      this.arrowLayer.setData(windData);
    },
    addBarbLayer() {
      this.barbLayer = L.vectorBarbLayer({
        color: "#333333",
        barbSize: 30,
        gridSize: 60,
      });
      this.barbLayer.addTo(this.map);
      this.barbLayer.setData(windData);
    },
    toggleScalar() {
      if (this.showScalar) {
        this.addScalarLayer();
      } else if (this.tileScalarLayer) {
        this.map.removeLayer(this.tileScalarLayer);
        this.tileScalarLayer = null;
      }
    },
    toggleVector() {
      if (this.showVector) {
        this.addVectorLayer();
      } else if (this.velocityLayer) {
        this.velocityLayer.onRemove(this.map);
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
    toggleBarb() {
      if (this.showBarb) {
        this.addBarbLayer();
      } else if (this.barbLayer) {
        this.map.removeLayer(this.barbLayer);
        this.barbLayer = null;
      }
    },
    resetView() {
      if (this.map) {
        this.map.setView([24.5, 118], 8.4);
      }
    },
  },
};
</script>

<style scoped>
.wind-page {
  width: 100%;
  height: 100%;
  position: relative;
}
.map-container {
  width: 100%;
  height: 100%;
  z-index: 1;
}
.toolbar {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
}
.chart-container {
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  height: 300px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 8px;
  z-index: 999;
}
.controls {
  position: absolute;
  top: 20px;
  right: 20px;
  background: white;
  padding: 15px;
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  text-align: left;
}
.control-item {
  margin-bottom: 10px;
}
.control-item:last-child {
  margin-bottom: 0;
}
label {
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
}
input[type="checkbox"] {
  margin-right: 8px;
}
</style>
