<template>
  <div class="test-page">
    <div id="test-map" class="map-container"></div>
    <MapToolbar class="toolbar" :map="map" />

    <!-- 自动刷新开关 -->
    <div class="auto-refresh-switch">
      <span>自动刷新</span>
      <a-switch v-model="autoRefresh" @change="onAutoRefreshChange" />
    </div>

    <!-- 地图状态（经纬度、层级） -->
    <MapStatus class="map-status" :map="map" />

    <!-- 站点详情弹窗 -->
    <a-modal
      v-model="modalVisible"
      :title="currentPoint ? currentPoint.name : ''"
      :footer="null"
      width="500px"
    >
      <div v-if="currentPoint">
        <!-- 这里放具体内容 -->
        <p>站点名称：{{ currentPoint.name }}</p>
        <p>站点等级：{{ currentPoint.level }}</p>
        <p>观测时间：{{ currentPoint.time }}</p>
        <p>数值：{{ currentPoint.value }}</p>
        <p>坐标：{{ currentPoint.lat }}, {{ currentPoint.lng }}</p>
      </div>
    </a-modal>
  </div>
</template>

<script>
import Vue from "vue";
import L from "leaflet";
import MapToolbar from "@/components/MapToolbar";
import MapStatus from "@/components/MapStatus";
import CircleMarker from "./components/marker.vue";
import store from "@/store/testPage.js";

export default {
  name: "TestPage",
  components: {
    MapToolbar,
    MapStatus,
  },
  data() {
    return {
      map: null,
      // 20个测试点数据（福建沿海气象站点）
      points: [
        {
          id: 1,
          lat: 26.08,
          lng: 119.3,
          value: 1,
          name: "福州站",
          level: "国家站",
          time: "2026-01-15 08:00",
          direction: 45,
        },
        {
          id: 2,
          lat: 24.48,
          lng: 118.08,
          value: 2,
          name: "厦门站",
          level: "国家站",
          time: "2026-01-15 08:00",
          direction: 90,
        },
        {
          id: 3,
          lat: 24.87,
          lng: 118.67,
          value: 3,
          name: "泉州站",
          level: "国家站",
          time: "2026-01-15 08:00",
          direction: 135,
        },
        {
          id: 4,
          lat: 25.43,
          lng: 119.0,
          value: 4,
          name: "莆田站",
          level: "国家站",
          time: "2026-01-15 08:00",
          direction: 180,
        },
        {
          id: 5,
          lat: 24.52,
          lng: 117.65,
          value: 5,
          name: "漳州站",
          level: "国家站",
          time: "2026-01-15 08:00",
          direction: 225,
        },
        {
          id: 6,
          lat: 26.65,
          lng: 118.18,
          value: 6,
          name: "南平站",
          level: "国家站",
          time: "2026-01-15 08:00",
          direction: 270,
        },
        {
          id: 7,
          lat: 25.05,
          lng: 117.02,
          value: 7,
          name: "龙岩站",
          level: "国家站",
          time: "2026-01-15 08:00",
          direction: 315,
        },
        {
          id: 8,
          lat: 26.64,
          lng: 117.65,
          value: 8,
          name: "三明站",
          level: "国家站",
          time: "2026-01-15 08:00",
          direction: 0,
        },
        {
          id: 9,
          lat: 27.33,
          lng: 120.13,
          value: 9,
          name: "宁德站",
          level: "国家站",
          time: "2026-01-15 08:00",
          direction: 60,
        },
        {
          id: 10,
          lat: 25.77,
          lng: 119.53,
          value: 10,
          name: "平潭站",
          level: "区域站",
          time: "2026-01-15 08:00",
          direction: 120,
        },
        {
          id: 11,
          lat: 24.44,
          lng: 118.34,
          value: 11,
          name: "同安站",
          level: "区域站",
          time: "2026-01-15 08:00",
          direction: 150,
        },
        {
          id: 12,
          lat: 24.95,
          lng: 118.38,
          value: 12,
          name: "晋江站",
          level: "区域站",
          time: "2026-01-15 08:00",
          direction: 200,
        },
        {
          id: 13,
          lat: 25.12,
          lng: 118.95,
          value: 13,
          name: "惠安站",
          level: "区域站",
          time: "2026-01-15 08:00",
          direction: 250,
        },
        {
          id: 14,
          lat: 24.36,
          lng: 117.32,
          value: 14,
          name: "南靖站",
          level: "区域站",
          time: "2026-01-15 08:00",
          direction: 300,
        },
        {
          id: 15,
          lat: 26.48,
          lng: 119.65,
          value: 15,
          name: "连江站",
          level: "区域站",
          time: "2026-01-15 08:00",
          direction: 30,
        },
        {
          id: 16,
          lat: 25.3,
          lng: 119.1,
          value: 16,
          name: "仙游站",
          level: "区域站",
          time: "2026-01-15 08:00",
          direction: 75,
        },
        {
          id: 17,
          lat: 27.1,
          lng: 119.52,
          value: 17,
          name: "福安站",
          level: "区域站",
          time: "2026-01-15 08:00",
          direction: 110,
        },
        {
          id: 18,
          lat: 26.9,
          lng: 120.27,
          value: 18,
          name: "霞浦站",
          level: "区域站",
          time: "2026-01-15 08:00",
          direction: 165,
        },
        {
          id: 19,
          lat: 24.73,
          lng: 118.58,
          value: 19,
          name: "石狮站",
          level: "区域站",
          time: "2026-01-15 08:00",
          direction: 210,
        },
        {
          id: 20,
          lat: 24.62,
          lng: 117.85,
          value: 20,
          name: "长泰站",
          level: "区域站",
          time: "2026-01-15 08:00",
          direction: 285,
        },
      ],
      markers: [],
      markerInstances: [], // 存储 Vue 组件实例
      modalVisible: false, // 弹窗显示状态
      currentPoint: null, // 当前选中的站点
      autoRefresh: false, // 自动刷新开关
      refreshTimer: null, // 刷新定时器
    };
  },
  mounted() {
    this.initMap();
  },
  beforeDestroy() {
    // 清除定时器
    if (this.refreshTimer) {
      clearInterval(this.refreshTimer);
      this.refreshTimer = null;
    }
    // 销毁所有 Vue 组件实例
    this.markerInstances.forEach((instance) => {
      instance.$destroy();
    });
    if (this.map) {
      this.map.off("zoomend");
      this.map.remove();
      this.map = null;
    }
  },
  methods: {
    initMap() {
      this.map = L.map("test-map", {
        maxZoom: 18,
        zoomControl: false,
        zoomAnimation: true,
        attributionControl: false,
      });

      // 监听 zoom 变化
      this.map.on("zoomend", this.onZoomChange);

      // 等底图加载后添加点
      this.$nextTick(() => {
        setTimeout(() => {
          this.addPoints();
        }, 100);
      });
    },
    // zoom 变化时更新标签显示状态
    onZoomChange() {
      var zoom = this.map.getZoom();
      var newShowLabel = zoom >= 10;
      // 通过 store 更新标签显示状态
      store.dispatch("setShowLabel", newShowLabel);
    },
    addPoints() {
      var self = this;
      // 先把数据存入 Vuex store
      store.dispatch("setPoints", this.points);

      this.points.forEach(function (point) {
        var arrowLength = 50;

        // 先创建空的 marker
        var marker = L.marker([point.lat, point.lng], {
          icon: L.divIcon({
            className: "vue-marker",
            html: "",
            iconSize: [arrowLength, arrowLength],
            iconAnchor: [arrowLength / 2, arrowLength / 2],
          }),
        });

        // 绑定 Leaflet marker 点击事件
        marker.on("click", function () {
          self.handleMarkerClick(point);
        });

        marker.addTo(self.map);

        // marker 添加到地图后，获取其 DOM 容器，再挂载 Vue 组件
        var iconEl = marker.getElement();
        if (iconEl) {
          var MarkerClass = Vue.extend(CircleMarker);
          var markerInstance = new MarkerClass({
            propsData: {
              id: point.id,
              size: 24,
              arrowLength: arrowLength,
              bgColor: "#1890ff",
            },
          });
          // 挂载到 marker 的 DOM 容器
          markerInstance.$mount();
          iconEl.appendChild(markerInstance.$el);
          self.markerInstances.push(markerInstance);
        }

        self.markers.push(marker);
      });
    },
    handleMarkerClick(point) {
      this.currentPoint = point;
      this.modalVisible = true;
    },
    // 自动刷新开关变化
    onAutoRefreshChange(checked) {
      var self = this;
      if (checked) {
        // 开启自动刷新，每5秒更新一次
        this.refreshTimer = setInterval(function () {
          self.refreshData();
        }, 5000);
      } else {
        // 关闭自动刷新
        if (this.refreshTimer) {
          clearInterval(this.refreshTimer);
          this.refreshTimer = null;
        }
      }
    },
    // 刷新数据（随机更新风力等级和风向）
    refreshData() {
      var self = this;
      // 更新 Vuex store 中的数据，Vue 响应式会自动更新组件
      this.points.forEach(function (point) {
        store.dispatch("updatePoint", {
          id: point.id,
          data: {
            direction: Math.floor(Math.random() * 360),
            value: Math.floor(Math.random() * 12) + 1,
          },
        });
      });
    },
  },
};
</script>

<style scoped>
.test-page {
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
.auto-refresh-switch {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 1000;
  background: #fff;
  padding: 8px 12px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
}
.map-status {
  position: absolute;
  bottom: 20px;
  left: 20px;
  z-index: 1000;
}
</style>

<style>
.vue-marker {
  background: transparent !important;
  border: none !important;
}
</style>
