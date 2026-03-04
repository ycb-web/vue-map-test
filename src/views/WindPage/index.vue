<template>
  <div class="wind-page">
    <!-- 地图容器 -->
    <div id="wind-map" class="map-container"></div>

    <!-- 地图工具栏 -->
    <MapToolbar class="toolbar" :map="map" @reset-view="resetView" />

    <!-- ECharts图表容器 -->
    <div v-if="showChart" class="chart-container" id="chart"></div>

    <!-- 图层控制面板 - 可折叠 -->
    <div class="controls" :class="{ collapsed: panelCollapsed }">
      <div class="panel-header" @click="panelCollapsed = !panelCollapsed">
        <span class="panel-title">图层控制</span>
        <span class="toggle-icon">{{ panelCollapsed ? "▼" : "▲" }}</span>
      </div>

      <div class="panel-body" v-show="!panelCollapsed">
        <!-- 数据类型选择（风/浪单选） -->
        <div class="control-section data-type-section">
          <div class="section-title">数据类型</div>
          <div class="radio-group">
            <label class="radio-item" :class="{ active: dataType === 'wind' }">
              <input
                type="radio"
                name="dataType"
                value="wind"
                v-model="dataType"
                @change="switchDataType"
              />
              <span class="radio-label">风场</span>
            </label>
            <label class="radio-item" :class="{ active: dataType === 'wave' }">
              <input
                type="radio"
                name="dataType"
                value="wave"
                v-model="dataType"
                @change="switchDataType"
              />
              <span class="radio-label">浪场</span>
            </label>
          </div>
        </div>

        <!-- 风场图层控制（仅当选择风场时显示） -->
        <template v-if="dataType === 'wind'">
          <!-- 颜色图层 -->
          <div class="control-section">
            <div class="control-item">
              <label>
                <input
                  type="checkbox"
                  v-model="showScalar"
                  @change="toggleScalar"
                />
                颜色图层
              </label>
            </div>
            <div v-if="showScalar" class="sub-controls">
              <div class="slider-item">
                <span>透明度: {{ scalarOpacity.toFixed(2) }}</span>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  v-model.number="scalarOpacity"
                  @input="updateScalarOpacity"
                />
              </div>
              <div class="slider-item">
                <span>色阶上限: {{ scalarMaxValue }} m/s</span>
                <input
                  type="range"
                  min="10"
                  max="50"
                  step="5"
                  v-model.number="scalarMaxValue"
                  @input="updateScalarMaxValue"
                />
                <div class="hint">风速≥此值显示最深色</div>
              </div>
            </div>
          </div>

          <!-- 粒子图层 -->
          <div class="control-section">
            <div class="control-item">
              <label>
                <input
                  type="checkbox"
                  v-model="showVector"
                  @change="toggleVector"
                />
                粒子图层
              </label>
            </div>
          </div>

          <!-- 箭头图层 -->
          <div class="control-section">
            <div class="control-item">
              <label>
                <input
                  type="checkbox"
                  v-model="showArrow"
                  @change="toggleArrow"
                />
                箭头图层
              </label>
            </div>
            <div v-if="showArrow" class="sub-controls">
              <div class="control-item">
                <label
                  ><input
                    type="checkbox"
                    v-model="arrowDynamicColor"
                    @change="updateArrowLayer"
                  />
                  动态颜色</label
                >
              </div>
              <div class="control-item">
                <label
                  ><input
                    type="checkbox"
                    v-model="arrowDynamicSize"
                    @change="updateArrowLayer"
                  />
                  动态大小</label
                >
              </div>
              <div class="control-item">
                <label
                  ><input
                    type="checkbox"
                    v-model="arrowAlignToGrid"
                    @change="updateArrowLayer"
                  />
                  网格对齐</label
                >
              </div>
              <div class="slider-item">
                <span>间距: {{ arrowGridSize }}px</span>
                <input
                  type="range"
                  min="20"
                  max="80"
                  step="5"
                  v-model.number="arrowGridSize"
                  @input="updateArrowLayer"
                />
              </div>
            </div>
          </div>

          <!-- 风杆图层 -->
          <div class="control-section">
            <div class="control-item">
              <label>
                <input type="checkbox" v-model="showBarb" @change="toggleBarb" />
                风杆图层
              </label>
            </div>
          </div>
        </template>

        <!-- 浪场图层控制（仅当选择浪场时显示） -->
        <template v-if="dataType === 'wave'">
          <!-- 浪场颜色图层 -->
          <div class="control-section">
            <div class="control-item">
              <label>
                <input type="checkbox" v-model="showWaveScalar" @change="toggleWaveScalar" />
                颜色图层
              </label>
            </div>
            <div v-if="showWaveScalar" class="sub-controls">
              <div class="slider-item">
                <span>透明度: {{ waveScalarOpacity.toFixed(2) }}</span>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  v-model.number="waveScalarOpacity"
                  @input="updateWaveScalarOpacity"
                />
              </div>
            </div>
          </div>

          <!-- 浪效果粒子图层 -->
          <div class="control-section">
            <div class="control-item">
              <label>
                <input type="checkbox" v-model="showWave" @change="toggleWave" />
                粒子图层
              </label>
            </div>
            <div v-if="showWave" class="sub-controls">
              <div class="slider-item">
                <span>速度: {{ waveSpeed.toFixed(3) }}</span>
                <input
                  type="range"
                  min="0.001"
                  max="0.05"
                  step="0.001"
                  v-model.number="waveSpeed"
                  @input="updateWaveLayer"
                />
                <div class="hint">粒子移动速度</div>
              </div>
            </div>
          </div>
        </template>

        <!-- 单点过程线 -->
        <div class="control-section">
          <div class="control-item">
            <label>
              <input
                type="checkbox"
                v-model="showChart"
                @change="toggleChart"
              />
              单点过程线
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import L from "leaflet";
import "@/utils/leaflet-vector-scalar";
import chartData from "@/assets/chartData.json";
import * as echarts from "echarts";
import { getProcessLineOption } from "@/utils/getProcessLineOption";
import MapToolbar from "@/components/MapToolbar/index.vue";
import waveData from "@/assets/wave.json";

// 风场数据文件路径（放在 public 目录，通过 HTTP 请求加载）
const WIND_DATA_FILES = [
  "/data/winJson/wind_parsed_20260122000000.json",
  "/data/winJson/wind_parsed_20260123000000.json",
  "/data/winJson/wind_parsed_20260124000000.json",
  "/data/winJson/wind_parsed_20260125000000.json",
  "/data/winJson/wind_parsed_20260126000000.json",
];

// ========== 地图相关 ==========
const map = ref<L.Map | null>(null)

// ========== 图层显示状态 ==========
const dataType = ref('wind')
const showScalar = ref(true)
const showVector = ref(true)
const showArrow = ref(false)
const showWave = ref(true)
const showWaveScalar = ref(true)
const showBarb = ref(false)
const showChart = ref(false)

// ========== 图层实例 ==========
const chart = ref<echarts.ECharts | null>(null)
const scalarLayer = ref<any>(null)
const velocityLayer = ref<any>(null)
const arrowLayer = ref<any>(null)
const waveLayer = ref<any>(null)
const waveScalarLayer = ref<any>(null)
const barbLayer = ref<any>(null)
const tileScalarLayer = ref<any>(null)

// ========== UI状态 ==========
const panelCollapsed = ref(false)

// ========== 颜色图层参数 ==========
const scalarOpacity = ref(0.4)
const scalarMaxValue = ref(30)

// ========== 箭头图层参数 ==========
const arrowDynamicColor = ref(true)
const arrowDynamicSize = ref(true)
const arrowAlignToGrid = ref(false)
const arrowGridSize = ref(40)

// ========== 浪效果图层参数 ==========
const waveSpeed = ref(0.020)
const waveScalarOpacity = ref(0.4)

// ========== 风场数据 ==========
const windDataList = ref<(any | null)[]>([null, null, null, null, null])
const currentWindData = ref<any>(null)
const dataLoading = ref(false)

// ========== 播放轴相关 ==========
const playing = ref(false)
const playbackProgress = ref(0)

const availableTimes = ref(generateTestTimes())
const timeColors = ref(generateTestColors())
const timeDates = ref(generateTestDates())

function generateTestTimes() {
  const times = [];
  for (let d = 0; d < 5; d++) {
    for (let h = 0; h < 24; h++) {
      times.push(`${String(h).padStart(2, "0")}:00`);
    }
  }
  return times;
}

function generateTestColors() {
  const colors = [];
  // 5天的颜色配置：第1-2天橙色，第3-4天绿色，第5天蓝色
  const colorMap = ["#f5a623", "#f5a623", "#7ed321", "#7ed321", "#4a90d9"];
  for (let d = 0; d < 5; d++) {
    for (let h = 0; h < 24; h++) {
      colors.push(colorMap[d]);
    }
  }
  return colors;
}

function generateTestDates() {
  const dates = [];
  const today = new Date();
  for (let d = 0; d < 5; d++) {
    const date = new Date(today.getTime() + d * 86400000);
    const dateStr = `${date.getFullYear()}年${
      date.getMonth() + 1
    }月${date.getDate()}日`;
    // 每天24小时，每小时一个相同的日期
    for (let h = 0; h < 24; h++) {
      dates.push(dateStr);
    }
  }
  return dates;
}

// ==========================================
// 数据类型切换
// ==========================================

const switchDataType = () => {
  if (dataType.value === 'wind') {
    // 切换到风场：隐藏浪图层，显示风图层
    hideWaveLayers();
    showWindLayers();
  } else {
    // 切换到浪场：隐藏风图层，显示浪图层
    hideWindLayers();
    showWaveLayers();
  }
};

const hideWindLayers = () => {
  if (!map.value) return;
  if (tileScalarLayer.value) {
    map.value.removeLayer(tileScalarLayer.value);
    tileScalarLayer.value = null;
  }
  if (velocityLayer.value) {
    try {
      velocityLayer.value.onRemove(map.value);
    } catch (e) {}
    velocityLayer.value = null;
  }
  if (arrowLayer.value) {
    map.value.removeLayer(arrowLayer.value);
    arrowLayer.value = null;
  }
  if (barbLayer.value) {
    map.value.removeLayer(barbLayer.value);
    barbLayer.value = null;
  }
};

const showWindLayers = () => {
  if (showScalar.value && !tileScalarLayer.value) {
    addScalarLayer();
  }
  if (showVector.value && !velocityLayer.value) {
    addVectorLayer();
  }
  if (showArrow.value && !arrowLayer.value) {
    addArrowLayer();
  }
  if (showBarb.value && !barbLayer.value) {
    addBarbLayer();
  }
};

const hideWaveLayers = () => {
  if (!map.value) return;
  if (waveLayer.value) {
    map.value.removeLayer(waveLayer.value);
    waveLayer.value = null;
  }
  if (waveScalarLayer.value) {
    map.value.removeLayer(waveScalarLayer.value);
    waveScalarLayer.value = null;
  }
};

const showWaveLayers = () => {
  if (showWaveScalar.value && !waveScalarLayer.value) {
    addWaveScalarLayer();
  }
  if (showWave.value && !waveLayer.value) {
    addWaveLayer();
  }
};

// ==========================================
// 播放轴事件处理
// ==========================================

async function loadWindData(dayIndex: number) {
  // 如果已经加载过，直接使用缓存
  if (windDataList.value[dayIndex]) {
    currentWindData.value = windDataList.value[dayIndex];
    updateWindLayers();
    return;
  }

  dataLoading.value = true;
  try {
    const response = await fetch(WIND_DATA_FILES[dayIndex]);
    const data = await response.json();
    windDataList.value[dayIndex] = data;
    currentWindData.value = data;
    updateWindLayers();
    console.log("加载风场数据成功: 第", dayIndex + 1, "天");
  } catch (error) {
    console.error("加载风场数据失败:", error);
  } finally {
    dataLoading.value = false;
  }
}

const handleProgressChange = (progress: number) => {
  // 计算当前是第几天 (0-4)
  const dayIndex = Math.floor(progress / 24);
  const cachedData = windDataList.value[dayIndex];

  // 只有当天数变化时才更新风场数据
  if (cachedData !== currentWindData.value) {
    loadWindData(dayIndex);
  }
};

const updateWindLayers = () => {
  if (!currentWindData.value || !map.value) return;
  // 只有当前是风场模式才更新风场图层
  if (dataType.value !== 'wind') return;

  // 更新或创建颜色图层
  if (showScalar.value) {
    if (tileScalarLayer.value) {
      tileScalarLayer.value.setData(currentWindData.value);
    } else {
      addScalarLayer();
    }
  }
  // 更新或创建粒子图层
  if (showVector.value) {
    if (velocityLayer.value) {
      velocityLayer.value.setData(currentWindData.value);
    } else {
      addVectorLayer();
    }
  }
  // 更新箭头图层
  if (arrowLayer.value) {
    arrowLayer.value.setData(currentWindData.value);
  }
  // 更新风杆图层
  if (barbLayer.value) {
    barbLayer.value.setData(currentWindData.value);
  }
};

// ==========================================
// 地图和图表相关方法
// ==========================================

const getTodayDate = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const initChart = () => {
  chart.value = echarts.init(document.getElementById("chart") as HTMLElement);
  const option = getProcessLineOption(chartData);
  chart.value.setOption(option);
  window.addEventListener("resize", handleResize);
};

const handleResize = () => {
  chart.value && chart.value.resize();
};

const initMap = () => {
  map.value = L.map("wind-map", {
    maxZoom: 16,
    zoomControl: false,
    zoomAnimation: true,
  });

  // 图层在数据加载完成后由 updateWindLayers 初始化
};

const addScalarLayer = () => {
  if (!map.value || !currentWindData.value) return;
  const config = {
    minValue: 0.01,
    maxValue: scalarMaxValue.value,
    overlayOpacity: scalarOpacity.value,
  };
  tileScalarLayer.value = L.scalarTileLayer(config);
  tileScalarLayer.value.addTo(map.value);
  tileScalarLayer.value.setData(currentWindData.value);
};

const updateScalarOpacity = () => {
  if (tileScalarLayer.value) {
    tileScalarLayer.value.setOverlayOpacity(scalarOpacity.value);
  }
};

const updateScalarMaxValue = () => {
  if (tileScalarLayer.value) {
    tileScalarLayer.value.setMaxValue(scalarMaxValue.value);
  }
};

const addVectorLayer = () => {
  if (!map.value || !currentWindData.value) return;
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
  velocityLayer.value = new L.velocityLayer({
    displayValues: false,
    displayOptions: {
      velocityType: "",
      displayPosition: "",
      displayEmptyString: "",
    },
    ...options,
  });
  velocityLayer.value.setData(currentWindData.value);
  velocityLayer.value.onAdd(map.value);
};

const addArrowLayer = () => {
  if (!map.value || !currentWindData.value) return;
  // 动态颜色回调 - 根据风速返回不同颜色
  const getColor = arrowDynamicColor.value
    ? (speed: number) => {
        if (speed < 5) return "#00ff00";
        if (speed < 10) return "#ffff00";
        if (speed < 15) return "#ff9900";
        if (speed < 20) return "#ff0000";
        return "#ff00ff";
      }
    : null;

  // 动态大小回调 - 根据风速返回不同大小
  const getSize = arrowDynamicSize.value
    ? (speed: number) => Math.min(35, 12 + speed * 1.2)
    : null;

  arrowLayer.value = L.vectorArrowLayer({
    color: arrowDynamicColor.value ? "#ffffff" : "white",
    arrowSize: 20,
    gridSize: arrowGridSize.value,
    getColor: getColor,
    getSize: getSize,
    alignToGrid: arrowAlignToGrid.value,
  });
  arrowLayer.value.addTo(map.value);
  arrowLayer.value.setData(currentWindData.value);
};

const updateArrowLayer = () => {
  if (!map.value) return;
  if (arrowLayer.value) {
    map.value.removeLayer(arrowLayer.value);
    arrowLayer.value = null;
  }
  if (showArrow.value) {
    addArrowLayer();
  }
};

const addBarbLayer = () => {
  if (!map.value || !currentWindData.value) return;
  barbLayer.value = L.vectorBarbLayer({
    color: "#333333",
    barbSize: 30,
    gridSize: 60,
  });
  barbLayer.value.addTo(map.value);
  barbLayer.value.setData(currentWindData.value);
};

const toggleScalar = () => {
  if (!map.value) return;
  if (showScalar.value) {
    addScalarLayer();
  } else if (tileScalarLayer.value) {
    map.value.removeLayer(tileScalarLayer.value);
    tileScalarLayer.value = null;
  }
};

const toggleVector = () => {
  if (!map.value) return;
  if (showVector.value) {
    try {
      addVectorLayer();
    } catch (error) {
      console.error("粒子图层加载失败，数据格式可能不兼容:", error);
      showVector.value = false;
      alert("粒子图层暂不支持当前数据格式");
    }
  } else if (velocityLayer.value) {
    try {
      velocityLayer.value.onRemove(map.value);
      velocityLayer.value = null;
    } catch (error) {
      console.error("粒子图层移除失败:", error);
    }
  }
};

const toggleArrow = () => {
  if (!map.value) return;
  if (showArrow.value) {
    addArrowLayer();
  } else if (arrowLayer.value) {
    map.value.removeLayer(arrowLayer.value);
    arrowLayer.value = null;
  }
};

const addWaveScalarLayer = () => {
  if (!map.value) return;
  const config = {
    minValue: 0.01,
    maxValue: 10,
    overlayOpacity: waveScalarOpacity.value,
  };
  waveScalarLayer.value = L.scalarTileLayer(config);
  waveScalarLayer.value.addTo(map.value);
  waveScalarLayer.value.setData(waveData);
};

const toggleWaveScalar = () => {
  if (!map.value) return;
  if (showWaveScalar.value) {
    addWaveScalarLayer();
  } else if (waveScalarLayer.value) {
    map.value.removeLayer(waveScalarLayer.value);
    waveScalarLayer.value = null;
  }
};

const updateWaveScalarOpacity = () => {
  if (waveScalarLayer.value) {
    waveScalarLayer.value.setOverlayOpacity(waveScalarOpacity.value);
  }
};

const addWaveLayer = () => {
  if (!map.value) return;
  // 浪粒子图层（白色短横线沿浪向推进）
  waveLayer.value = L.waveParticleLayer({
    color: 'rgba(255, 255, 255, 0.9)',
    lineWidth: 2,
    lineLength: 6,
    particleMultiplier: 1 / 500,
    particleAge: 35,
    frameRate: 20,
    opacity: 0.8,
    velocityScale: waveSpeed.value,
  });
  waveLayer.value.addTo(map.value);
  waveLayer.value.setData(waveData);
};

const toggleWave = () => {
  if (!map.value) return;
  if (showWave.value) {
    addWaveLayer();
  } else if (waveLayer.value) {
    map.value.removeLayer(waveLayer.value);
    waveLayer.value = null;
  }
};

const updateWaveLayer = () => {
  if (!map.value) return;
  if (waveLayer.value) {
    map.value.removeLayer(waveLayer.value);
    waveLayer.value = null;
  }
  if (showWave.value) {
    addWaveLayer();
  }
};

const toggleBarb = () => {
  if (!map.value) return;
  if (showBarb.value) {
    addBarbLayer();
  } else if (barbLayer.value) {
    map.value.removeLayer(barbLayer.value);
    barbLayer.value = null;
  }
};

const toggleChart = () => {
  if (!map.value) return;
  if (showChart.value) {
    nextTick(() => {
      initChart();
    });
  } else if (chart.value) {
    chart.value.dispose();
    chart.value = null;
  }
};

const resetView = () => {
  if (map.value) {
    map.value.setView([24.5, 118], 8.4);
  }
};

onMounted(() => {
  initMap();
  // 加载第一天的风场数据
  loadWindData(0);
  // 图表默认关闭，不自动初始化
});

onUnmounted(() => {
  if (map.value) {
    map.value.remove();
    map.value = null;
  }
  if (chart.value) {
    chart.value.dispose();
    chart.value = null;
  }
});
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
  bottom: 90px;
  left: 20px;
  right: 280px;
  height: 200px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 8px;
  z-index: 999;
}
.playback-bar {
  position: absolute;
  left: 20px;
  right: 280px;
  bottom: 20px;
  z-index: 1000;
}
.controls {
  position: absolute;
  top: 20px;
  right: 20px;
  bottom: 20px;
  width: 240px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.controls.collapsed {
  bottom: auto;
  height: auto;
}
.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 15px;
  background: #f5f5f5;
  cursor: pointer;
  user-select: none;
  border-bottom: 1px solid #eee;
}
.panel-header:hover {
  background: #ebebeb;
}
.panel-title {
  font-size: 14px;
  font-weight: bold;
  color: #333;
}
.toggle-icon {
  font-size: 10px;
  color: #999;
}
.panel-body {
  flex: 1;
  overflow-y: auto;
  padding: 12px 15px;
}
.control-section {
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid #f0f0f0;
}
.control-section:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}
.control-item {
  margin-bottom: 6px;
}
.control-item:last-child {
  margin-bottom: 0;
}
label {
  cursor: pointer;
  font-size: 13px;
  display: flex;
  align-items: center;
  color: #333;
}
label.disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
input[type="checkbox"] {
  margin-right: 8px;
}
input[type="checkbox"]:disabled {
  cursor: not-allowed;
}
.sub-controls {
  margin-top: 8px;
  margin-left: 8px;
  padding: 8px 10px;
  background: #f8f9fa;
  border-radius: 4px;
  border-left: 2px solid #1890ff;
}
.sub-controls .control-item {
  margin-bottom: 4px;
}
.sub-controls label {
  font-size: 12px;
  color: #666;
}
.slider-item {
  margin-bottom: 6px;
}
.slider-item:last-child {
  margin-bottom: 0;
}
.slider-item span {
  display: block;
  font-size: 11px;
  color: #666;
  margin-bottom: 2px;
}
.slider-item input[type="range"] {
  width: 100%;
  height: 4px;
  cursor: pointer;
}
.slider-item .hint {
  font-size: 10px;
  color: #999;
  margin-top: 2px;
}
/* 数据类型单选样式 */
.data-type-section {
  background: #f0f7ff;
  margin: -12px -15px 12px;
  padding: 12px 15px;
  border-bottom: 2px solid #1890ff;
}
.section-title {
  font-size: 12px;
  color: #666;
  margin-bottom: 8px;
}
.radio-group {
  display: flex;
  gap: 12px;
}
.radio-item {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  background: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
}
.radio-item:hover {
  border-color: #1890ff;
}
.radio-item.active {
  background: #e6f7ff;
  border-color: #1890ff;
  color: #1890ff;
}
.radio-item input[type="radio"] {
  margin-right: 6px;
}
.radio-label {
  font-size: 13px;
  font-weight: 500;
}
</style>
