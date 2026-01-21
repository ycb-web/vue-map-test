<!--
  WindPage 风场可视化页面
  ========================
  
  功能概述：
  - 基于Leaflet的风场数据可视化
  - 支持多种图层：颜色图层、粒子图层、箭头图层、风杆图层
  - 集成PlaybackBar播放轴组件，用于时间序列数据播放
  - 集成ECharts图表展示
  
  页面布局：
  - 全屏地图容器
  - 顶部居中：MapToolbar工具栏
  - 右侧：图层控制面板（可折叠）
  - 底部：ECharts图表 + PlaybackBar播放轴
-->
<template>
  <div class="wind-page">
    <!-- 地图容器 -->
    <div id="wind-map" class="map-container"></div>

    <!-- 地图工具栏 -->
    <MapToolbar class="toolbar" :map="map" @reset-view="resetView" />

    <!-- ECharts图表容器 -->
    <div class="chart-container" id="chart"></div>

    <!-- 
      播放轴组件
      Props说明：
      - playing: 播放状态（双向绑定）
      - progress: 当前进度索引（双向绑定）
      - available-times: 时间点数组，格式如['00:00', '01:00', ...]
      - time-colors: 每个时间点的颜色，用于播放轴分段着色
      - time-dates: 每个时间点的日期，用于日期刻度显示
    -->
    <PlaybackBar
      class="playback-bar"
      :playing.sync="playing"
      :progress.sync="playbackProgress"
      :available-times="availableTimes"
      :time-colors="timeColors"
      :time-dates="timeDates"
      @progress-change="handleProgressChange"
    />

    <!-- 图层控制面板 - 可折叠 -->
    <div class="controls" :class="{ collapsed: panelCollapsed }">
      <div class="panel-header" @click="panelCollapsed = !panelCollapsed">
        <span class="panel-title">图层控制</span>
        <span class="toggle-icon">{{ panelCollapsed ? "▼" : "▲" }}</span>
      </div>

      <div class="panel-body" v-show="!panelCollapsed">
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
      </div>
    </div>
  </div>
</template>

<script>
import L from "leaflet";
import "@/utils/leaflet-vector-scalar";
import windData from "@/assets/wind.json";
import chartData from "@/assets/chartData.json";
import * as echarts from "echarts";
import { getProcessLineOption } from "@/utils/getProcessLineOption";
import MapToolbar from "@/components/MapToolbar";
import PlaybackBar from "./components/PlaybackBar.vue";

/**
 * WindPage 风场可视化页面组件
 *
 * @description 展示风场数据的地图可视化页面，集成多种图层和播放控制功能
 */
export default {
  name: "WindPage",
  components: {
    MapToolbar,
    PlaybackBar,
  },

  /**
   * 组件数据
   */
  data() {
    return {
      // ========== 地图相关 ==========
      /** Leaflet地图实例 */
      map: null,

      // ========== 图层显示状态 ==========
      /** 是否显示颜色图层（标量场） */
      showScalar: true,
      /** 是否显示粒子图层（矢量场动画） */
      showVector: true,
      /** 是否显示箭头图层 */
      showArrow: false,
      /** 是否显示风杆图层 */
      showBarb: false,

      // ========== 图层实例 ==========
      /** ECharts图表实例 */
      chart: null,
      /** 标量图层实例 */
      scalarLayer: null,
      /** 粒子图层实例 */
      velocityLayer: null,
      /** 箭头图层实例 */
      arrowLayer: null,
      /** 风杆图层实例 */
      barbLayer: null,
      /** 瓦片标量图层实例 */
      tileScalarLayer: null,

      // ========== UI状态 ==========
      /** 控制面板折叠状态 */
      panelCollapsed: false,

      // ========== 颜色图层参数 ==========
      /** 颜色图层透明度 (0-1) */
      scalarOpacity: 0.4,
      /** 颜色图层最大值（风速≥此值显示最深色） */
      scalarMaxValue: 30,

      // ========== 箭头图层参数 ==========
      /** 箭头是否使用动态颜色（根据风速变化） */
      arrowDynamicColor: true,
      /** 箭头是否使用动态大小（根据风速变化） */
      arrowDynamicSize: true,
      /** 箭头是否对齐网格 */
      arrowAlignToGrid: false,
      /** 箭头网格间距（像素） */
      arrowGridSize: 40,

      // ========== 播放轴相关 ==========
      /** 播放状态 */
      playing: false,
      /** 当前播放进度（时间点索引） */
      playbackProgress: 0,

      /**
       * 测试数据：可用时间点数组
       * 格式：['00:00', '01:00', ..., '23:00'] × 5天 = 120个时间点
       * @see generateTestTimes
       */
      availableTimes: this.generateTestTimes(),

      /**
       * 测试数据：每个时间点的颜色
       * 用于播放轴分段着色和滑块颜色
       * 5天分别使用：橙、橙、绿、绿、蓝
       * @see generateTestColors
       */
      timeColors: this.generateTestColors(),

      /**
       * 测试数据：每个时间点的日期
       * 格式：'2026年1月21日'
       * @see generateTestDates
       */
      timeDates: this.generateTestDates(),
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
    // ==========================================
    // 测试数据生成方法
    // 用于PlaybackBar组件的演示和测试
    // ==========================================

    /**
     * 生成5天的时间数据
     * 每天24小时，共120个时间点
     * @returns {Array<String>} 时间数组，格式如['00:00', '01:00', ...]
     */
    generateTestTimes() {
      const times = [];
      for (let d = 0; d < 5; d++) {
        for (let h = 0; h < 24; h++) {
          times.push(`${String(h).padStart(2, "0")}:00`);
        }
      }
      return times;
    },

    /**
     * 生成对应的颜色数据
     * 5天分别使用不同颜色：橙、橙、绿、绿、蓝
     * 用于播放轴的分段着色
     * @returns {Array<String>} 颜色数组，每个时间点一个颜色
     */
    generateTestColors() {
      const colors = [];
      // 5天的颜色配置：第1-2天橙色，第3-4天绿色，第5天蓝色
      const colorMap = ["#f5a623", "#f5a623", "#7ed321", "#7ed321", "#4a90d9"];
      for (let d = 0; d < 5; d++) {
        for (let h = 0; h < 24; h++) {
          colors.push(colorMap[d]);
        }
      }
      return colors;
    },

    /**
     * 生成对应的日期数据
     * 从今天开始连续5天
     * @returns {Array<String>} 日期数组，格式如['2026年1月21日', ...]
     */
    generateTestDates() {
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
    },

    // ==========================================
    // 播放轴事件处理
    // ==========================================

    /**
     * 播放进度变化处理
     * 当用户拖拽滑块或自动播放时触发
     * @param {Number} progress - 当前时间点索引
     */
    handleProgressChange(progress) {
      console.log(
        "时间进度变化:",
        progress,
        "当前时间:",
        this.availableTimes[progress],
      );
      // TODO: 在这里可以根据时间点加载对应的风场数据
    },

    // ==========================================
    // 以下为地图和图表相关方法
    // ==========================================

    /**
     * 获取今天的日期字符串
     * @returns {String} 格式如'2026-01-21'
     */
    getTodayDate() {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const day = String(now.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    },

    /**
     * 初始化ECharts图表
     */
    initChart() {
      this.chart = echarts.init(document.getElementById("chart"));
      const option = getProcessLineOption(chartData);
      this.chart.setOption(option);
      window.addEventListener("resize", this.handleResize);
    },

    /**
     * 窗口大小变化时重绘图表
     */
    handleResize() {
      this.chart && this.chart.resize();
    },

    /**
     * 初始化Leaflet地图
     */
    initMap() {
      this.map = L.map("wind-map", {
        maxZoom: 16,
        zoomControl: false,
        zoomAnimation: true,
      });

      if (this.showScalar) this.addScalarLayer();
      if (this.showVector) this.addVectorLayer();
    },

    /**
     * 添加颜色图层（标量场可视化）
     */
    addScalarLayer() {
      const config = {
        minValue: 0.01,
        maxValue: this.scalarMaxValue,
        overlayOpacity: this.scalarOpacity,
      };
      this.tileScalarLayer = L.scalarTileLayer(config);
      this.tileScalarLayer.addTo(this.map);
      this.tileScalarLayer.setData(windData);
    },

    /**
     * 更新颜色图层透明度
     */
    updateScalarOpacity() {
      if (this.tileScalarLayer) {
        this.tileScalarLayer.setOverlayOpacity(this.scalarOpacity);
      }
    },

    /**
     * 更新颜色图层最大值
     */
    updateScalarMaxValue() {
      if (this.tileScalarLayer) {
        this.tileScalarLayer.setMaxValue(this.scalarMaxValue);
      }
    },

    /**
     * 添加粒子图层（矢量场动画）
     */
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

    /**
     * 添加箭头图层
     */
    addArrowLayer() {
      // 动态颜色回调 - 根据风速返回不同颜色
      const getColor = this.arrowDynamicColor
        ? (speed) => {
            if (speed < 5) return "#00ff00";
            if (speed < 10) return "#ffff00";
            if (speed < 15) return "#ff9900";
            if (speed < 20) return "#ff0000";
            return "#ff00ff";
          }
        : null;

      // 动态大小回调 - 根据风速返回不同大小
      const getSize = this.arrowDynamicSize
        ? (speed) => Math.min(35, 12 + speed * 1.2)
        : null;

      this.arrowLayer = L.vectorArrowLayer({
        color: this.arrowDynamicColor ? "#ffffff" : "white",
        arrowSize: 20,
        gridSize: this.arrowGridSize,
        getColor: getColor,
        getSize: getSize,
        alignToGrid: this.arrowAlignToGrid,
      });
      this.arrowLayer.addTo(this.map);
      this.arrowLayer.setData(windData);
    },

    /**
     * 更新箭头图层（重新创建）
     */
    updateArrowLayer() {
      if (this.arrowLayer) {
        this.map.removeLayer(this.arrowLayer);
        this.arrowLayer = null;
      }
      if (this.showArrow) {
        this.addArrowLayer();
      }
    },

    /**
     * 添加风杆图层
     */
    addBarbLayer() {
      this.barbLayer = L.vectorBarbLayer({
        color: "#333333",
        barbSize: 30,
        gridSize: 60,
      });
      this.barbLayer.addTo(this.map);
      this.barbLayer.setData(windData);
    },

    /**
     * 切换颜色图层显示
     */
    toggleScalar() {
      if (this.showScalar) {
        this.addScalarLayer();
      } else if (this.tileScalarLayer) {
        this.map.removeLayer(this.tileScalarLayer);
        this.tileScalarLayer = null;
      }
    },

    /**
     * 切换粒子图层显示
     */
    toggleVector() {
      if (this.showVector) {
        this.addVectorLayer();
      } else if (this.velocityLayer) {
        this.velocityLayer.onRemove(this.map);
        this.velocityLayer = null;
      }
    },

    /**
     * 切换箭头图层显示
     */
    toggleArrow() {
      if (this.showArrow) {
        this.addArrowLayer();
      } else if (this.arrowLayer) {
        this.map.removeLayer(this.arrowLayer);
        this.arrowLayer = null;
      }
    },

    /**
     * 切换风杆图层显示
     */
    toggleBarb() {
      if (this.showBarb) {
        this.addBarbLayer();
      } else if (this.barbLayer) {
        this.map.removeLayer(this.barbLayer);
        this.barbLayer = null;
      }
    },

    /**
     * 重置地图视图
     */
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
input[type="checkbox"] {
  margin-right: 8px;
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
</style>
