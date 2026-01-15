<template>
  <div class="marker-wrapper" :style="wrapperStyle">
    <!-- 风向箭头（图片） -->
    <img class="wind-arrow" :style="arrowStyle" :src="arrowImg" alt="" />
    <!-- 实心圆点 -->
    <div class="circle-marker" :style="circleStyle">
      <span class="marker-value">{{ pointData.value }}</span>
    </div>
    <!-- 简略标签 -->
    <div v-show="labelVisible" class="marker-label">
      {{ pointData.name }}
    </div>
    <!-- 完整 tooltip -->
    <div class="marker-tooltip">
      <div class="tooltip-row">
        <span class="label">站点：</span>{{ pointData.name }}
      </div>
      <div class="tooltip-row">
        <span class="label">时间：</span>{{ pointData.time }}
      </div>
      <div class="tooltip-row">
        <span class="label">站点等级：</span>{{ pointData.level }}
      </div>
      <div class="tooltip-row">
        <span class="label">风力等级：</span>{{ pointData.value }}级
      </div>
      <div class="tooltip-row">
        <span class="label">风向：</span>{{ pointData.direction }}°
      </div>
      <div class="tooltip-row">
        <span class="label">坐标：</span>{{ pointData.lat }},
        {{ pointData.lng }}
      </div>
    </div>
  </div>
</template>

<script>
import arrowImg from "../assets/img/长箭头.png";
import store from "@/store/testPage.js";

export default {
  name: "CircleMarker",
  store: store,
  data: function () {
    return {
      arrowImg: arrowImg,
    };
  },
  props: {
    id: { type: [Number, String], required: true },
    size: { type: Number, default: 30 },
    arrowLength: { type: Number, default: 50 },
    bgColor: { type: String, default: "#1890ff" },
    textColor: { type: String, default: "#fff" },
  },
  computed: {
    // 从 Vuex store 获取当前站点数据
    pointData: function () {
      return this.$store.getters.getPointById(this.id);
    },
    // 从 store 获取标签显示状态
    labelVisible: function () {
      return this.$store.getters.showLabel;
    },
    wrapperStyle: function () {
      return {
        width: this.arrowLength + "px",
        height: this.arrowLength + "px",
      };
    },
    circleStyle: function () {
      return {
        width: this.size + "px",
        height: this.size + "px",
        backgroundColor: this.bgColor,
        color: this.textColor,
        fontSize: Math.max(10, this.size * 0.4) + "px",
      };
    },
    arrowStyle: function () {
      var direction = this.pointData.direction || 0;
      return {
        width: this.arrowLength + "px",
        height: this.arrowLength + "px",
        transform: "rotate(" + direction + "deg)",
      };
    },
  },
  methods: {
    handleClick: function () {
      this.$emit("click", this.pointData);
    },
  },
};
</script>

<style scoped>
.marker-wrapper {
  position: relative;
}

.wind-arrow {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  transform-origin: center center;
}

.circle-marker {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
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

.marker-tooltip {
  display: none;
  position: absolute;
  left: 50%;
  bottom: 100%;
  transform: translateX(-50%);
  margin-bottom: 8px;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  z-index: 9999;
}

.marker-tooltip::before {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -6px;
  transform: translateX(-50%);
  border: 6px solid transparent;
  border-top-color: rgba(0, 0, 0, 0.8);
  border-bottom: none;
}

.marker-wrapper:hover .marker-tooltip {
  display: block;
}

.marker-wrapper:hover .marker-label {
  display: none !important;
}

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

.tooltip-row {
  line-height: 1.6;
}

.tooltip-row .label {
  color: #aaa;
}
</style>
