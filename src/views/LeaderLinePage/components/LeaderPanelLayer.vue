<template>
  <div class="leader-panel-layer" ref="panelLayer">
    <!-- 所有引线统一绘制在底层 -->
    <svg class="leader-lines-svg">
      <g v-for="panel in visiblePanels" :key="'line-' + panel.id">
        <line
          v-if="panel.visible !== false"
          :x1="getLineStart(panel).x"
          :y1="getLineStart(panel).y"
          :x2="getAnchor(panel).x"
          :y2="getAnchor(panel).y"
          stroke="#e74c3c"
          stroke-width="2"
        />
        <circle
          v-if="panel.visible !== false"
          :cx="getAnchor(panel).x"
          :cy="getAnchor(panel).y"
          r="5"
          fill="#e74c3c"
        />
      </g>
    </svg>
    <!-- 线引面板 -->
    <LeaderPanel
      v-for="panel in visiblePanels"
      :key="panel.id"
      :panel="panel"
      :map="map"
      :showLine="false"
      @dragEnd="onPanelDragEnd"
      @positionUpdate="onPanelPositionUpdate"
    />
  </div>
</template>

<script>
import LeaderPanel from "./LeaderPanel.vue";
import { calculateNonOverlappingPositions, getLineStartPoint } from "../utils/collision";

export default {
  name: "LeaderPanelLayer",
  components: {
    LeaderPanel,
  },
  props: {
    map: {
      type: Object,
      required: true,
    },
    panels: {
      type: Array,
      default: () => [],
    },
    autoLayout: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      processedPanels: [],
      panelPositions: {}, // 存储各面板的实时位置
      panelSizes: {}, // 存储各面板的尺寸
      mapUpdateKey: 0, // 用于触发地图移动时的重新渲染
    };
  },
  computed: {
    // 只返回锚点在可视区域内的面板
    visiblePanels() {
      // 引用 mapUpdateKey 触发响应式更新
      void this.mapUpdateKey;
      if (!this.map) return [];
      
      const container = this.map.getContainer();
      const bounds = {
        width: container.clientWidth,
        height: container.clientHeight,
      };
      const padding = 50; // 边缘容差
      
      return this.processedPanels.filter((panel) => {
        if (panel.visible === false) return false;
        const anchor = this.getAnchor(panel);
        return (
          anchor.x >= -padding &&
          anchor.x <= bounds.width + padding &&
          anchor.y >= -padding &&
          anchor.y <= bounds.height + padding
        );
      });
    },
  },
  watch: {
    panels: {
      handler(newPanels, oldPanels) {
        // 检查是否只是 visible 属性变化
        if (this.isOnlyVisibilityChange(newPanels, oldPanels)) {
          // 只同步 visible 状态，不重新布局
          this.syncVisibility(newPanels);
        } else {
          // 面板数据有实质变化，重新计算布局
          this.recalculatePositions(newPanels);
        }
      },
      immediate: true,
      deep: true,
    },
  },
  mounted() {
    // 监听地图移动和缩放，更新锚点位置
    if (this.map) {
      this.map.on("move", this.onMapMove);
      this.map.on("moveend", this.onMapMoveEnd);
      this.map.on("zoomend", this.onMapZoomEnd);
    }
  },
  beforeDestroy() {
    if (this.map) {
      this.map.off("move", this.onMapMove);
      this.map.off("moveend", this.onMapMoveEnd);
      this.map.off("zoomend", this.onMapZoomEnd);
    }
  },
  methods: {
    // 检查是否只是 visible 属性变化
    isOnlyVisibilityChange(newPanels, oldPanels) {
      if (!oldPanels || !this.processedPanels.length) return false;
      if (newPanels.length !== oldPanels.length) return false;
      
      for (let i = 0; i < newPanels.length; i++) {
        const newP = newPanels[i];
        const oldP = oldPanels[i];
        // 检查除 visible 外的核心属性是否变化
        if (
          newP.id !== oldP.id ||
          newP.lat !== oldP.lat ||
          newP.lng !== oldP.lng ||
          newP.title !== oldP.title
        ) {
          return false;
        }
      }
      return true;
    },

    // 只同步 visible 状态
    syncVisibility(newPanels) {
      newPanels.forEach((panel) => {
        const processed = this.processedPanels.find((p) => p.id === panel.id);
        if (processed) {
          this.$set(processed, "visible", panel.visible);
        }
      });
    },

    // 重新计算所有面板位置
    recalculatePositions(panels) {
      if (!this.map || !panels.length) {
        this.processedPanels = [];
        return;
      }

      // 使用碰撞检测计算初始位置
      this.processedPanels = calculateNonOverlappingPositions(
        panels.map((p) => ({ ...p })),
        this.map
      );
    },

    // 地图移动时触发重新渲染（实时更新引线）
    onMapMove() {
      this.mapUpdateKey++;
    },

    // 地图拖拽结束时重新计算面板布局
    onMapMoveEnd() {
      if (!this.autoLayout) return;
      
      // 清除之前的位置缓存
      this.panelPositions = {};
      this.panelSizes = {};
      
      // 重新计算所有面板位置
      this.recalculatePositions(this.panels);
    },

    // 地图缩放结束时重新计算可见面板的布局
    onMapZoomEnd() {
      if (!this.autoLayout) return;
      
      // 清除之前的位置缓存
      this.panelPositions = {};
      this.panelSizes = {};
      
      // 重新计算所有面板位置
      this.recalculatePositions(this.panels);
    },

    // 面板拖拽结束
    onPanelDragEnd(panelId, position) {
      const index = this.processedPanels.findIndex((p) => p.id === panelId);
      if (index !== -1) {
        this.$set(this.processedPanels[index], "position", position);
      }
      this.$emit("panelMoved", panelId, position);
    },

    // 面板位置实时更新（用于引线跟随）
    onPanelPositionUpdate(panelId, position, size) {
      this.$set(this.panelPositions, panelId, position);
      if (size) {
        this.$set(this.panelSizes, panelId, size);
      }
    },

    // 获取面板锚点位置
    getAnchor(panel) {
      // 引用 mapUpdateKey 以触发响应式更新
      void this.mapUpdateKey;
      if (panel.lat && panel.lng && this.map) {
        const point = this.map.latLngToContainerPoint([panel.lat, panel.lng]);
        return { x: point.x, y: point.y };
      }
      return panel.anchor || { x: 0, y: 0 };
    },

    // 获取引线起点（面板边缘）
    getLineStart(panel) {
      const position = this.panelPositions[panel.id] || panel.position || { x: 0, y: 0 };
      const size = this.panelSizes[panel.id] || panel.size || { width: 180, height: 100 };
      const anchor = this.getAnchor(panel);
      
      const rect = {
        x: position.x,
        y: position.y,
        width: size.width,
        height: size.height,
      };
      return getLineStartPoint(rect, anchor);
    },

    // 获取图层DOM元素（用于截图）
    getLayerElement() {
      return this.$refs.panelLayer;
    },
  },
};
</script>

<style scoped>
.leader-panel-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
}

.leader-lines-svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  pointer-events: none;
  z-index: 0; /* 引线在最底层 */
}
</style>
