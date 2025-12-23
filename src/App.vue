<template>
  <div id="app">
    <div id="map"></div>
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
import "./utils/leaflet-vector-scalar";
import mapUtils from "./utils/map";
import windData from "./assets/wind.json";
import chartData from "./assets/chartData.json";
import * as echarts from "echarts";
import { getProcessLineOption } from "./utils/getProcessLineOption";

export default {
  name: "App",
  data() {
    return {
      showScalar: true,
      showVector: true,
      showArrow: false,
      showBarb: false,
      chart: null,
    };
  },
  mounted() {
    this.initMap();
    this.initChart();
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById("chart"));
      const option = getProcessLineOption(chartData);
      this.chart.setOption(option);

      window.addEventListener("resize", () => {
        this.chart && this.chart.resize();
      });
    },
    initMap() {
      // Initialize map
      mapUtils.init2DMap();

      console.log("Loading wind data...", windData);

      // Initial load based on state
      if (this.showScalar) {
        mapUtils.addScalarLayer("wind", windData);
      }
      if (this.showVector) {
        mapUtils.addVectorLayer("wind", windData);
      }
      if (this.showArrow) {
        mapUtils.addArrowLayer("wind", windData);
      }
      if (this.showBarb) {
        mapUtils.addBarbLayer("wind", windData);
      }
    },
    toggleScalar() {
      if (this.showScalar) {
        mapUtils.addScalarLayer("wind", windData);
      } else {
        mapUtils.clearScalarLayer();
      }
    },
    toggleVector() {
      if (this.showVector) {
        mapUtils.addVectorLayer("wind", windData);
      } else {
        mapUtils.removeVectorLayer();
      }
    },
    toggleArrow() {
      if (this.showArrow) {
        mapUtils.addArrowLayer("wind", windData);
      } else {
        mapUtils.removeArrowLayer();
      }
    },
    toggleBarb() {
      if (this.showBarb) {
        mapUtils.addBarbLayer("wind", windData);
      } else {
        mapUtils.removeBarbLayer();
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
  position: relative;
}

#map {
  width: 100%;
  height: 100%;
  z-index: 1;
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
  pointer-events: auto;
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
