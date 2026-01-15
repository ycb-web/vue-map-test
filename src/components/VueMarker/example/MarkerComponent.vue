<!--
  Vue 组件叠点 - Marker 组件示例
  
  功能：
  - 显示带数值的圆形标记
  - 鼠标悬停显示详细信息 tooltip
  - 支持响应式数据更新（通过 Vuex）
  - 支持根据 zoom 层级显示/隐藏标签
-->
<template>
  <div class="marker-wrapper" :style="wrapperStyle">
    <!-- 圆形标记 -->
    <div class="marker-circle" :style="circleStyle">
      <span class="marker-value">{{ pointData.value }}</span>
    </div>

    <!-- 简略标签（zoom >= 10 时显示） -->
    <div v-show="labelVisible" class="marker-label">
      {{ pointData.name }}
    </div>

    <!-- 完整 tooltip（鼠标悬停时显示） -->
    <div class="marker-tooltip">
      <div class="tooltip-row">
        <span class="label">名称：</span>{{ pointData.name }}
      </div>
      <div class="tooltip-row">
        <span class="label">数值：</span>{{ pointData.value }}
      </div>
      <div class="tooltip-row">
        <span class="label">坐标：</span>{{ pointData.lat }},
        {{ pointData.lng }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MarkerComponent",

  props: {
    // 站点 ID，用于从 Vuex 获取数据
    id: {
      type: [Number, String],
      required: true,
    },
    // 圆形标记大小（像素）
    size: {
      type: Number,
      default: 30,
    },
    // 背景颜色
    bgColor: {
      type: String,
      default: "#1890ff",
    },
    // 文字颜色
    textColor: {
      type: String,
      default: "#fff",
    },
  },

  computed: {
    /**
     * 从 Vuex Store 获取当前站点数据
     * 数据变化时组件会自动更新
     */
    pointData: function () {
      return this.$store.getters.getPointById(this.id);
    },

    /**
     * 从 Vuex Store 获取标签显示状态
     * 由页面根据 zoom 层级控制
     */
    labelVisible: function () {
      return this.$store.getters.showLabel;
    },

    // 容器样式
    wrapperStyle: function () {
      return {
        width: this.size + "px",
        height: this.size + "px",
      };
    },

    // 圆形标记样式
    circleStyle: function () {
      return {
        width: this.size + "px",
        height: this.size + "px",
        backgroundColor: this.bgColor,
        color: this.textColor,
        fontSize: Math.max(10, this.size * 0.4) + "px",
      };
    },
  },
};
</script>

<style scoped>
/* 容器 */
.marker-wrapper {
  position: relative;
}

/* 圆形标记 */
.marker-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}

.marker-value {
  line-height: 1;
}

/* 简略标签 */
.marker-label {
  position: absolute;
  left: 50%;
  bottom: 100%;
  transform: translateX(-50%);
  margin-bottom: 4px;
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 12px;
  white-space: nowrap;
  z-index: 9998;
}

/* 完整 tooltip */
.marker-tooltip {
  display: none;
  position: absolute;
  left: 50%;
  bottom: 100%;
  transform: translateX(-50%);
  margin-bottom: 8px;
  background: rgba(0, 0, 0, 0.85);
  color: #fff;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  z-index: 9999;
}

/* tooltip 箭头 */
.marker-tooltip::before {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -6px;
  transform: translateX(-50%);
  border: 6px solid transparent;
  border-top-color: rgba(0, 0, 0, 0.85);
  border-bottom: none;
}

/* 鼠标悬停显示 tooltip，隐藏标签 */
.marker-wrapper:hover .marker-tooltip {
  display: block;
}
.marker-wrapper:hover .marker-label {
  display: none !important;
}

/* tooltip 内容行 */
.tooltip-row {
  line-height: 1.6;
}
.tooltip-row .label {
  color: #aaa;
}
</style>
