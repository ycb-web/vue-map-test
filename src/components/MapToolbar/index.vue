<template>
  <div class="map-toolbar">
    <!-- 复位按钮：点击后地图回到初始中心点和层级 -->
    <div class="tool-item" title="复位" @click="handleLocate">
      <svg viewBox="0 0 24 24" width="20" height="20">
        <circle cx="12" cy="12" r="3" fill="currentColor" />
        <path
          d="M12 2v3M12 19v3M2 12h3M19 12h3"
          stroke="currentColor"
          stroke-width="2"
        />
        <circle
          cx="12"
          cy="12"
          r="8"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        />
      </svg>
    </div>

    <div class="divider"></div>

    <!-- 全屏按钮：切换全屏/退出全屏，图标会根据状态变化 -->
    <div
      class="tool-item"
      :title="isFullscreen ? '退出全屏' : '全屏'"
      @click="handleFullscreen"
    >
      <!-- 非全屏状态：向外扩展的图标 -->
      <svg v-if="!isFullscreen" viewBox="0 0 24 24" width="20" height="20">
        <path
          d="M3 3h6v2H5v4H3V3zM15 3h6v6h-2V5h-4V3zM3 15h2v4h4v2H3v-6zM19 19v-4h2v6h-6v-2h4z"
          fill="currentColor"
        />
      </svg>
      <!-- 全屏状态：向内收缩的图标 -->
      <svg v-else viewBox="0 0 24 24" width="20" height="20">
        <path
          d="M9 3v2H5v4H3V5a2 2 0 012-2h4zM15 3h4a2 2 0 012 2v4h-2V5h-4V3zM3 15h2v4h4v2H5a2 2 0 01-2-2v-4zM19 15h2v4a2 2 0 01-2 2h-4v-2h4v-4z"
          fill="currentColor"
        />
        <path
          d="M9 9H3V7h4V3h2v6zM21 9h-6V3h2v4h4v2zM9 21v-6H3v-2h8v8H9zM15 21v-8h8v2h-6v6h-2z"
          fill="currentColor"
        />
      </svg>
    </div>

    <div class="divider"></div>

    <!-- 放大按钮：地图放大一级 -->
    <div class="tool-item" title="放大" @click="handleZoomIn">
      <svg viewBox="0 0 24 24" width="20" height="20">
        <circle
          cx="10"
          cy="10"
          r="7"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        />
        <path
          d="M15 15l5 5M7 10h6M10 7v6"
          stroke="currentColor"
          stroke-width="2"
        />
      </svg>
    </div>

    <div class="divider"></div>

    <!-- 缩小按钮：地图缩小一级 -->
    <div class="tool-item" title="缩小" @click="handleZoomOut">
      <svg viewBox="0 0 24 24" width="20" height="20">
        <circle
          cx="10"
          cy="10"
          r="7"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        />
        <path d="M15 15l5 5M7 10h6" stroke="currentColor" stroke-width="2" />
      </svg>
    </div>

    <div class="divider"></div>

    <!-- 底图切换：点击弹出底图选择面板 -->
    <a-popover
      trigger="click"
      placement="bottom"
      v-model="basemapPopoverVisible"
    >
      <template slot="content">
        <div class="basemap-list">
          <!-- 遍历底图列表，显示缩略图或占位符 -->
          <div
            v-for="(item, index) in basemaps"
            :key="index"
            class="basemap-item"
            :class="{ active: currentBasemapIndex === index }"
            @click="switchBasemap(index)"
          >
            <!-- 有缩略图则显示图片 -->
            <img v-if="item.thumbnail" :src="item.thumbnail" :alt="item.name" />
            <!-- 无缩略图则显示文字占位符 -->
            <div v-else class="basemap-placeholder">{{ item.name }}</div>
            <span>{{ item.name }}</span>
          </div>
        </div>
      </template>
      <div class="tool-item" title="底图切换">
        <svg viewBox="0 0 24 24" width="20" height="20">
          <path
            d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          />
        </svg>
      </div>
    </a-popover>

    <!-- 工具箱按钮：点击弹出测量工具选择面板 -->
    <a-popover trigger="click" placement="bottom" v-model="toolsPopoverVisible">
      <template slot="content">
        <div class="tools-list">
          <div
            class="tools-item"
            :class="{ active: currentTool === 'distance' }"
            @click="startMeasureDistance"
          >
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path
                d="M3 21L21 3M3 21l4-1-3-3 1-4M21 3l-4 1 3 3-1 4"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
              />
            </svg>
            <span>测距</span>
          </div>
          <div
            class="tools-item"
            :class="{ active: currentTool === 'area' }"
            @click="startMeasureArea"
          >
            <svg viewBox="0 0 24 24" width="20" height="20">
              <polygon
                points="4,4 20,4 20,20 4,20"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
              />
              <circle cx="4" cy="4" r="2" fill="currentColor" />
              <circle cx="20" cy="4" r="2" fill="currentColor" />
              <circle cx="20" cy="20" r="2" fill="currentColor" />
              <circle cx="4" cy="20" r="2" fill="currentColor" />
            </svg>
            <span>测面</span>
          </div>
          <div class="tools-item" v-if="currentTool" @click="clearMeasure">
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="currentColor"
                stroke-width="2"
              />
            </svg>
            <span>清除</span>
          </div>
        </div>
      </template>
      <div class="tool-item tool-text" title="工具箱">
        <svg viewBox="0 0 24 24" width="18" height="18">
          <rect
            x="2"
            y="7"
            width="20"
            height="14"
            rx="2"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          />
          <path
            d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          />
        </svg>
        <span>工具</span>
      </div>
    </a-popover>
  </div>
</template>

<script>
import L from "leaflet";
import DrawPlug from "@/utils/DrawPlug";

export default {
  name: "MapToolbar",

  props: {
    /**
     * Leaflet 地图实例
     * 由父组件传入，用于控制地图操作
     */
    map: {
      type: Object,
      default: null,
    },

    /**
     * 初始中心点坐标 [纬度, 经度]
     * 点击复位按钮时地图会回到这个位置
     */
    initialCenter: {
      type: Array,
      default: function () {
        return [24.5, 118];
      },
    },

    /**
     * 初始缩放层级
     * 点击复位按钮时地图会回到这个层级
     */
    initialZoom: {
      type: Number,
      default: 8,
    },

    /**
     * 底图列表配置
     * 每个底图对象包含：
     * - name: 底图名称（必填）
     * - baseUrl: 底图瓦片地址（必填）
     * - labelUrl: 标注图层瓦片地址（可选）
     * - thumbnail: 缩略图地址（可选）
     * - initSelect: 是否默认选中（可选，只有一个为 true）
     */
    basemaps: {
      type: Array,
      default: function () {
        const tk = "93724b915d1898d946ca7dc7b765dda5";
        return [
          {
            name: "电子地图",
            initSelect: true, // 默认选中
            baseUrl: `https://t0.tianditu.gov.cn/vec_w/wmts?tk=${tk}&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}`,
            labelUrl: `https://t0.tianditu.gov.cn/cva_w/wmts?tk=${tk}&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}`,
          },
          {
            name: "地形图",
            baseUrl: `https://t0.tianditu.gov.cn/ter_w/wmts?tk=${tk}&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=ter&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}`,
            labelUrl: `https://t0.tianditu.gov.cn/cta_w/wmts?tk=${tk}&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cta&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}`,
          },
          {
            name: "遥感地图",
            baseUrl: `https://t0.tianditu.gov.cn/img_w/wmts?tk=${tk}&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}`,
            labelUrl: `https://t0.tianditu.gov.cn/cia_w/wmts?tk=${tk}&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cia&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}`,
          },
        ];
      },
    },
  },

  data() {
    return {
      // 当前是否处于全屏状态
      isFullscreen: false,
      // 当前选中的底图索引
      currentBasemapIndex: 0,
      // 当前底图图层实例
      baseLayer: null,
      // 当前标注图层实例
      labelLayer: null,
      // 是否已初始化底图（防止重复初始化）
      hasInitialized: false,
      // 底图选择弹窗是否可见
      basemapPopoverVisible: false,
      // 工具箱弹窗是否可见
      toolsPopoverVisible: false,
      // 当前激活的测量工具：'distance' | 'area' | null
      currentTool: null,
      // 测量图层组
      measureGroup: null,
      // 测量工具实例
      drawPlug: null,
    };
  },

  mounted() {
    // 监听全屏状态变化事件
    document.addEventListener("fullscreenchange", this.onFullscreenChange);
    document.addEventListener(
      "webkitfullscreenchange",
      this.onFullscreenChange
    );
  },

  watch: {
    /**
     * 监听 map 属性变化
     * 当地图实例传入且未初始化时，自动加载默认底图
     */
    map: {
      handler(newMap) {
        if (newMap && !this.hasInitialized) {
          this.initBasemap();
        }
      },
      immediate: true,
    },
  },

  beforeDestroy() {
    // 移除全屏状态监听
    document.removeEventListener("fullscreenchange", this.onFullscreenChange);
    document.removeEventListener(
      "webkitfullscreenchange",
      this.onFullscreenChange
    );
  },

  methods: {
    /**
     * 全屏状态变化回调
     * 更新 isFullscreen 状态以切换按钮图标
     */
    onFullscreenChange() {
      this.isFullscreen =
        !!document.fullscreenElement || !!document.webkitFullscreenElement;
    },

    /**
     * 初始化底图
     * 根据 initSelect 属性找到默认底图并加载
     * 如果没有设置 initSelect，则使用第一个底图
     * 同时设置地图初始视图
     */
    initBasemap() {
      if (!this.map || this.hasInitialized) return;

      // 设置初始视图
      this.map.setView(this.initialCenter, this.initialZoom);

      // 找到 initSelect: true 的底图索引，没有则用第一个
      var defaultIndex = this.basemaps.findIndex(function (item) {
        return item.initSelect;
      });
      if (defaultIndex === -1) defaultIndex = 0;

      var basemap = this.basemaps[defaultIndex];
      if (!basemap) return;

      // 添加底图瓦片图层
      this.baseLayer = L.tileLayer(basemap.baseUrl, {
        maxZoom: 18,
        detectRetina: true,
      });
      this.baseLayer.addTo(this.map);
      this.baseLayer.setZIndex(0);

      // 添加标注图层（如果有）
      if (basemap.labelUrl) {
        this.labelLayer = L.tileLayer(basemap.labelUrl, {
          transparent: true,
          maxZoom: 18,
        });
        this.labelLayer.addTo(this.map);
        this.labelLayer.setZIndex(1);
      }

      this.currentBasemapIndex = defaultIndex;
      this.hasInitialized = true;

      // 禁用双击缩放（避免与测量双击结束冲突）
      this.map.doubleClickZoom.disable();

      // 初始化测量图层组和工具
      this.measureGroup = L.layerGroup().addTo(this.map);
      this.drawPlug = new DrawPlug(this.map, this.measureGroup);
    },

    /**
     * 复位按钮点击处理
     * 将地图视图重置到初始中心点和层级
     */
    handleLocate() {
      this.$emit("reset");
      if (this.map) {
        this.map.setView(this.initialCenter, this.initialZoom);
      }
    },

    /**
     * 全屏按钮点击处理
     * 切换浏览器全屏状态
     */
    handleFullscreen() {
      this.$emit("fullscreen");
      var el = document.documentElement;
      if (!document.fullscreenElement) {
        // 进入全屏
        if (el.requestFullscreen) {
          el.requestFullscreen();
        } else if (el.webkitRequestFullscreen) {
          el.webkitRequestFullscreen();
        }
      } else {
        // 退出全屏
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        }
      }
    },

    /**
     * 放大按钮点击处理
     */
    handleZoomIn() {
      this.$emit("zoom-in");
      if (this.map) {
        this.map.zoomIn();
      }
    },

    /**
     * 缩小按钮点击处理
     */
    handleZoomOut() {
      this.$emit("zoom-out");
      if (this.map) {
        this.map.zoomOut();
      }
    },

    /**
     * 图层按钮点击处理（预留）
     */
    handleLayers() {
      this.$emit("layers");
    },

    /**
     * 工具箱按钮点击处理
     */
    handleTools() {
      this.$emit("tools");
    },

    /**
     * 切换底图
     * @param {number} index - 要切换到的底图索引
     */
    switchBasemap(index) {
      // 如果点击的是当前底图，不做处理
      if (!this.map || index === this.currentBasemapIndex) return;

      var basemap = this.basemaps[index];
      if (!basemap) return;

      // 移除旧的底图图层
      if (this.baseLayer) {
        this.map.removeLayer(this.baseLayer);
      }
      // 移除旧的标注图层
      if (this.labelLayer) {
        this.map.removeLayer(this.labelLayer);
      }

      // 添加新的底图图层
      this.baseLayer = L.tileLayer(basemap.baseUrl, {
        maxZoom: 18,
        detectRetina: true,
      });
      this.baseLayer.addTo(this.map);
      this.baseLayer.setZIndex(0);

      // 添加新的标注图层（如果有）
      if (basemap.labelUrl) {
        this.labelLayer = L.tileLayer(basemap.labelUrl, {
          transparent: true,
          maxZoom: 18,
        });
        this.labelLayer.addTo(this.map);
        this.labelLayer.setZIndex(1);
      }

      // 更新当前底图索引
      this.currentBasemapIndex = index;
      // 关闭弹窗
      this.basemapPopoverVisible = false;
      // 触发事件通知父组件
      this.$emit("basemap-change", { index: index, basemap: basemap });
    },

    /**
     * 开始测距
     */
    startMeasureDistance() {
      this.toolsPopoverVisible = false;
      this.currentTool = "distance";
      if (this.drawPlug) {
        this.drawPlug.startDrawLine();
      }
    },

    /**
     * 开始测面
     */
    startMeasureArea() {
      this.toolsPopoverVisible = false;
      this.currentTool = "area";
      if (this.drawPlug) {
        this.drawPlug.startDrawPolygon();
      }
    },

    /**
     * 清除测量结果
     */
    clearMeasure() {
      this.currentTool = null;
      if (this.drawPlug) {
        this.drawPlug.clearLayer();
      }
    },
  },
};
</script>

<style scoped>
/* 工具条容器 */
.map-toolbar {
  display: flex;
  align-items: center;
  background: rgba(200, 210, 220, 0.9);
  border-radius: 4px;
  padding: 4px 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  user-select: none;
}

/* 工具按钮通用样式 */
.tool-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  cursor: pointer;
  color: #333;
  border-radius: 4px;
  transition: background 0.2s;
}

/* 工具按钮悬停效果 */
.tool-item:hover {
  background: rgba(255, 255, 255, 0.5);
}

/* 工具按钮点击效果 */
.tool-item:active {
  background: rgba(0, 0, 0, 0.1);
}

/* 带文字的工具按钮（如工具箱） */
.tool-text {
  gap: 4px;
  padding: 6px 10px;
}

.tool-text span {
  font-size: 14px;
  font-weight: 500;
}

/* 分隔线 */
.divider {
  width: 1px;
  height: 20px;
  background: rgba(0, 0, 0, 0.3);
  margin: 0 4px;
}

/* 底图选择列表容器 */
.basemap-list {
  display: flex;
  gap: 10px;
}

/* 底图选项 */
.basemap-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 6px;
  border-radius: 4px;
  border: 2px solid transparent;
  transition: all 0.2s;
}

/* 底图选项悬停效果 */
.basemap-item:hover {
  background: #f0f0f0;
}

/* 当前选中的底图高亮边框 */
.basemap-item.active {
  border-color: #1890ff;
}

/* 底图缩略图 */
.basemap-item img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 4px;
}

/* 无缩略图时的占位符 */
.basemap-placeholder {
  width: 60px;
  height: 60px;
  background: #e0e0e0;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #666;
}

/* 底图名称 */
.basemap-item span {
  margin-top: 4px;
  font-size: 12px;
  color: #333;
}

/* 工具列表 */
.tools-list {
  display: flex;
  gap: 10px;
}

/* 工具选项 */
.tools-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 4px;
  border: 2px solid transparent;
  transition: all 0.2s;
  min-width: 60px;
}

.tools-item:hover {
  background: #f0f0f0;
}

.tools-item.active {
  border-color: #ff4d4f;
  background: #fff1f0;
}

.tools-item span {
  margin-top: 4px;
  font-size: 12px;
  color: #333;
}
</style>

<style>
/* 测量标签样式 */
.measure-label-wrapper {
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
}

.measure-label {
  color: #fff;
  padding: 3px 8px;
  border-radius: 3px;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  transform: translate(-50%, -50%);
  position: absolute;
}
</style>
