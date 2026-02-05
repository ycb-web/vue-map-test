<template>
  <div class="leader-panel-wrapper" v-show="panel.visible !== false">
    <!-- 线引线 (SVG) - 仅在 showLine 为 true 时显示 -->
    <svg class="leader-line-svg" v-if="showLine">
      <line
        :x1="lineStart.x"
        :y1="lineStart.y"
        :x2="anchor.x"
        :y2="anchor.y"
        stroke="#e74c3c"
        stroke-width="2"
      />
      <!-- 锚点标记 -->
      <circle
        :cx="anchor.x"
        :cy="anchor.y"
        r="5"
        fill="#e74c3c"
      />
    </svg>

    <!-- 面板内容 -->
    <div
      class="panel-content"
      :style="panelStyle"
      @mousedown="onMouseDown"
      ref="panelContent"
    >
      <div class="panel-header">
        <span class="panel-title">{{ panel.title }}</span>
      </div>
      <div class="panel-body">
        <!-- 表格数据 -->
        <table class="panel-table" v-if="panel.tableData && panel.tableData.length">
          <tr v-for="(row, index) in panel.tableData" :key="index">
            <td
              v-for="(cell, cellIndex) in row"
              :key="cellIndex"
              :class="{ 'cell-label': cellIndex === 0 }"
            >
              {{ cell }}
            </td>
          </tr>
        </table>
        <!-- 文本内容 -->
        <div v-else-if="panel.content" class="panel-text">
          {{ panel.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getLineStartPoint } from "../utils/collision";

export default {
  name: "LeaderPanel",
  props: {
    panel: {
      type: Object,
      required: true,
    },
    map: {
      type: Object,
      required: true,
    },
    showLine: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isDragging: false,
      dragOffset: { x: 0, y: 0 },
      currentPosition: { x: 0, y: 0 },
      currentAnchor: { x: 0, y: 0 },
    };
  },
  computed: {
    panelStyle() {
      return {
        left: `${this.currentPosition.x}px`,
        top: `${this.currentPosition.y}px`,
        width: this.panel.size ? `${this.panel.size.width}px` : "auto",
      };
    },
    anchor() {
      return this.currentAnchor;
    },
    lineStart() {
      if (!this.$refs.panelContent) {
        return { x: this.currentPosition.x, y: this.currentPosition.y };
      }
      const rect = {
        x: this.currentPosition.x,
        y: this.currentPosition.y,
        width: this.$refs.panelContent.offsetWidth || 180,
        height: this.$refs.panelContent.offsetHeight || 100,
      };
      return getLineStartPoint(rect, this.currentAnchor);
    },
  },
  watch: {
    "panel.position": {
      handler(newPos) {
        if (newPos) {
          this.currentPosition = { ...newPos };
          this.$nextTick(() => this.emitPositionUpdate());
        }
      },
      immediate: true,
      deep: true,
    },
    "panel.anchor": {
      handler(newAnchor) {
        if (newAnchor) {
          this.currentAnchor = { ...newAnchor };
        }
      },
      immediate: true,
      deep: true,
    },
  },
  mounted() {
    this.bindMapEvents();
    // 初始化时发送位置信息
    this.$nextTick(() => this.emitPositionUpdate());
  },
  beforeDestroy() {
    this.unbindMapEvents();
    this.unbindDragEvents();
  },
  methods: {
    // 绑定地图事件
    bindMapEvents() {
      if (this.map) {
        this.map.on("move", this.updateAnchorPosition);
        this.map.on("zoom", this.updateAnchorPosition);
      }
    },

    // 解绑地图事件
    unbindMapEvents() {
      if (this.map) {
        this.map.off("move", this.updateAnchorPosition);
        this.map.off("zoom", this.updateAnchorPosition);
      }
    },

    // 更新锚点位置（地图移动/缩放时）
    updateAnchorPosition() {
      if (this.panel.lat && this.panel.lng) {
        const point = this.map.latLngToContainerPoint([
          this.panel.lat,
          this.panel.lng,
        ]);
        this.currentAnchor = { x: point.x, y: point.y };
      }
    },

    // 鼠标按下开始拖拽
    onMouseDown(e) {
      if (e.button !== 0) return; // 只响应左键
      e.preventDefault();
      e.stopPropagation();

      this.isDragging = true;
      this.dragOffset = {
        x: e.clientX - this.currentPosition.x,
        y: e.clientY - this.currentPosition.y,
      };

      document.addEventListener("mousemove", this.onMouseMove);
      document.addEventListener("mouseup", this.onMouseUp);
    },

    // 鼠标移动
    onMouseMove(e) {
      if (!this.isDragging) return;

      this.currentPosition = {
        x: e.clientX - this.dragOffset.x,
        y: e.clientY - this.dragOffset.y,
      };
      
      // 通知父组件位置更新（用于引线跟随）
      this.emitPositionUpdate();
    },

    // 鼠标释放结束拖拽
    onMouseUp() {
      if (!this.isDragging) return;

      this.isDragging = false;
      this.unbindDragEvents();
      this.$emit("dragEnd", this.panel.id, { ...this.currentPosition });
    },

    // 发送位置更新事件
    emitPositionUpdate() {
      const size = this.$refs.panelContent
        ? {
            width: this.$refs.panelContent.offsetWidth,
            height: this.$refs.panelContent.offsetHeight,
          }
        : null;
      this.$emit("positionUpdate", this.panel.id, { ...this.currentPosition }, size);
    },

    // 解绑拖拽事件
    unbindDragEvents() {
      document.removeEventListener("mousemove", this.onMouseMove);
      document.removeEventListener("mouseup", this.onMouseUp);
    },
  },
};
</script>

<style scoped>
.leader-panel-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.leader-line-svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  pointer-events: none;
}

.panel-content {
  position: absolute;
  background: rgba(255, 255, 255, 0.98);
  border: 2px solid #e74c3c;
  border-radius: 4px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
  min-width: 150px;
  cursor: move;
  pointer-events: auto;
  user-select: none;
}

.panel-header {
  background: #e74c3c;
  color: #fff;
  padding: 6px 10px;
  font-weight: bold;
  font-size: 12px;
}

.panel-body {
  padding: 8px;
  font-size: 12px;
}

.panel-table {
  width: 100%;
  border-collapse: collapse;
}

.panel-table td {
  padding: 3px 6px;
  border: 1px solid #ddd;
  white-space: nowrap;
}

.panel-table .cell-label {
  background: #f5f5f5;
  font-weight: 500;
}

.panel-text {
  line-height: 1.5;
}
</style>
