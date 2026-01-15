<template>
  <div class="map-status">
    <!-- 位置信息：经纬度 + 层级 -->
    <span class="position-info"
      >位置: {{ latStr }}, {{ lngStr }}, {{ zoom }}</span
    >
    <!-- 比例尺 -->
    <span class="scale-bar">
      <span class="scale-line" :style="{ width: scaleWidth + 'px' }"></span>
      <span class="scale-text">{{ scaleText }}</span>
    </span>
  </div>
</template>

<script>
/**
 * MapStatus 地图状态组件
 *
 * 功能：
 * 1. 实时显示鼠标所在位置的经纬度
 * 2. 显示当前地图层级
 * 3. 显示动态比例尺
 *
 * 使用方式：
 * <MapStatus :map="map" />
 */
export default {
  name: "MapStatus",
  props: {
    /**
     * Leaflet 地图实例
     * @type {Object}
     * @required
     */
    map: {
      type: Object,
      default: null,
    },
  },
  data: function () {
    return {
      lat: 0, // 当前鼠标纬度
      lng: 0, // 当前鼠标经度
      zoom: 0, // 当前地图层级
      scaleText: "0 km", // 比例尺文字
      scaleWidth: 50, // 比例尺宽度（像素）
    };
  },
  computed: {
    /**
     * 格式化纬度显示
     * 正数显示 N（北纬），负数显示 S（南纬）
     */
    latStr: function () {
      var dir = this.lat >= 0 ? "N" : "S";
      return Math.abs(this.lat).toFixed(4) + "°" + dir;
    },
    /**
     * 格式化经度显示
     * 正数显示 E（东经），负数显示 W（西经）
     */
    lngStr: function () {
      var dir = this.lng >= 0 ? "E" : "W";
      return Math.abs(this.lng).toFixed(4) + "°" + dir;
    },
  },
  watch: {
    // 监听 map 变化，绑定事件
    map: function (newMap) {
      if (newMap) {
        this.bindEvents();
      }
    },
  },
  mounted: function () {
    if (this.map) {
      this.bindEvents();
    }
  },
  beforeDestroy: function () {
    // 组件销毁时移除事件监听
    if (this.map) {
      this.map.off("mousemove", this.onMouseMove);
      this.map.off("zoomend", this.onZoomEnd);
    }
  },
  methods: {
    /**
     * 绑定地图事件
     */
    bindEvents: function () {
      this.map.on("mousemove", this.onMouseMove);
      this.map.on("zoomend", this.onZoomEnd);
      this.zoom = this.map.getZoom();
      this.updateScale();
    },
    /**
     * 鼠标移动事件处理
     * 更新当前鼠标位置的经纬度
     */
    onMouseMove: function (e) {
      this.lat = e.latlng.lat;
      this.lng = e.latlng.lng;
    },
    /**
     * 缩放结束事件处理
     * 更新层级和比例尺
     */
    onZoomEnd: function () {
      this.zoom = this.map.getZoom();
      this.updateScale();
    },
    /**
     * 更新比例尺
     * 根据当前层级计算合适的比例尺距离和宽度
     */
    updateScale: function () {
      var center = this.map.getCenter();
      var lat = center.lat;
      // 计算每像素代表的米数（考虑纬度影响）
      var metersPerPixel =
        (40075016.686 * Math.cos((lat * Math.PI) / 180)) /
        Math.pow(2, this.zoom + 8);

      // 目标宽度范围 50-100px
      var maxWidth = 100;
      var maxMeters = metersPerPixel * maxWidth;

      // 预设的比例尺刻度值
      var scales = [
        1, 2, 5, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000, 20000,
        50000, 100000, 200000, 500000, 1000000, 2000000, 5000000,
      ];
      var bestScale = scales[0];

      // 选择不超过最大距离的最大刻度值
      for (var i = 0; i < scales.length; i++) {
        if (scales[i] <= maxMeters) {
          bestScale = scales[i];
        }
      }

      // 计算对应的像素宽度
      this.scaleWidth = Math.round(bestScale / metersPerPixel);

      // 格式化显示文字
      if (bestScale >= 1000) {
        this.scaleText = bestScale / 1000 + " km";
      } else {
        this.scaleText = bestScale + " m";
      }
    },
  },
};
</script>

<style scoped>
.map-status {
  font-size: 12px;
  color: #000;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 12px;
}

.scale-bar {
  display: flex;
  align-items: center;
  gap: 4px;
}

.scale-line {
  height: 0;
  border-bottom: 2px solid #000;
  border-left: 2px solid #000;
  border-right: 2px solid #000;
  padding-bottom: 4px;
}

.scale-text {
  font-size: 12px;
  color: #000;
  font-weight: 500;
}
</style>
