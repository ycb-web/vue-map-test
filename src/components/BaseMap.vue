<template>
  <div class="base-map-wrapper">
    <div :id="mapId" class="map-container"></div>
  </div>
</template>

<script>
import L from "leaflet";

// 内置底图枚举
const BASEMAP_PRESETS = {
  // 天地图影像
  tianditu_img: {
    url: "https://t{s}.tianditu.gov.cn/img_w/wmts?tk={tk}&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}",
    options: {
      subdomains: ["0", "1", "2", "3", "4", "5", "6", "7"],
      maxZoom: 18,
    },
    annotation: {
      url: "https://t{s}.tianditu.gov.cn/cia_w/wmts?tk={tk}&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cia&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}",
      options: {
        subdomains: ["0", "1", "2", "3", "4", "5", "6", "7"],
        transparent: true,
        zIndex: 3,
      },
    },
  },
  // 天地图矢量
  tianditu_vec: {
    url: "https://t{s}.tianditu.gov.cn/vec_w/wmts?tk={tk}&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}",
    options: {
      subdomains: ["0", "1", "2", "3", "4", "5", "6", "7"],
      maxZoom: 18,
    },
    annotation: {
      url: "https://t{s}.tianditu.gov.cn/cva_w/wmts?tk={tk}&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}",
      options: {
        subdomains: ["0", "1", "2", "3", "4", "5", "6", "7"],
        transparent: true,
        zIndex: 3,
      },
    },
  },
  // 天地图地形
  tianditu_ter: {
    url: "https://t{s}.tianditu.gov.cn/ter_w/wmts?tk={tk}&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=ter&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}",
    options: {
      subdomains: ["0", "1", "2", "3", "4", "5", "6", "7"],
      maxZoom: 18,
    },
    annotation: {
      url: "https://t{s}.tianditu.gov.cn/cta_w/wmts?tk={tk}&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cta&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}",
      options: {
        subdomains: ["0", "1", "2", "3", "4", "5", "6", "7"],
        transparent: true,
        zIndex: 3,
      },
    },
  },
  // OpenStreetMap
  osm: {
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    options: {
      maxZoom: 19,
      attribution: "© OpenStreetMap contributors",
    },
  },
  // 高德地图
  gaode_vec: {
    url: "https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}",
    options: {
      subdomains: ["1", "2", "3", "4"],
      maxZoom: 18,
    },
  },
  gaode_img: {
    url: "https://webst0{s}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}",
    options: {
      subdomains: ["1", "2", "3", "4"],
      maxZoom: 18,
    },
  },
  // 暗色底图
  dark: {
    url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
    options: {
      maxZoom: 19,
      attribution: "© CARTO",
    },
  },
  // 无底图
  none: null,
};

let mapIdCounter = 0;

export default {
  name: "BaseMap",
  props: {
    // 地图配置
    options: {
      type: Object,
      default: () => ({}),
    },
    // 底图类型（使用预设）
    basemap: {
      type: String,
      default: "tianditu_img",
    },
    // 天地图 token
    tiandituToken: {
      type: String,
      default: "93724b915d1898d946ca7dc7b765dda5",
    },
    // 是否显示注记
    showAnnotation: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      map: null,
      mapId: `base-map-${++mapIdCounter}`,
      basemapLayer: null,
      annotationLayer: null,
    };
  },
  mounted() {
    this.initMap();
  },
  beforeDestroy() {
    this.destroy();
  },
  methods: {
    /**
     * 初始化地图
     */
    initMap() {
      const defaultOptions = {
        center: [35, 110],
        zoom: 4,
        maxZoom: 18,
        minZoom: 2,
        zoomControl: true,
      };

      const mapOptions = { ...defaultOptions, ...this.options };
      const { center, ...restOptions } = mapOptions;

      this.map = L.map(this.mapId, restOptions).setView(
        center,
        mapOptions.zoom
      );

      // 添加底图
      this.setBasemap(this.basemap);

      // 触发地图初始化完成事件
      this.$emit("map-ready", this.map);
    },

    /**
     * 获取地图实例
     */
    getMap() {
      return this.map;
    },

    /**
     * 设置底图（使用预设）
     * @param {string} type - 底图类型
     */
    setBasemap(type) {
      // 移除现有底图
      this.removeBasemap();

      const preset = BASEMAP_PRESETS[type];
      if (!preset) return;

      // 处理 URL 中的 token
      let url = preset.url;
      if (url.includes("{tk}")) {
        url = url.replace(/{tk}/g, this.tiandituToken);
      }

      this.basemapLayer = L.tileLayer(url, preset.options);
      this.basemapLayer.addTo(this.map);

      // 添加注记图层
      if (this.showAnnotation && preset.annotation) {
        let annotationUrl = preset.annotation.url;
        if (annotationUrl.includes("{tk}")) {
          annotationUrl = annotationUrl.replace(/{tk}/g, this.tiandituToken);
        }
        this.annotationLayer = L.tileLayer(
          annotationUrl,
          preset.annotation.options
        );
        this.annotationLayer.addTo(this.map);
      }
    },

    /**
     * 自定义底图
     * @param {string} url - 瓦片 URL
     * @param {Object} options - 图层配置
     */
    setCustomBasemap(url, options = {}) {
      this.removeBasemap();
      this.basemapLayer = L.tileLayer(url, options);
      this.basemapLayer.addTo(this.map);
    },

    /**
     * 添加自定义注记图层
     * @param {string} url - 瓦片 URL
     * @param {Object} options - 图层配置
     */
    setCustomAnnotation(url, options = {}) {
      this.removeAnnotation();
      this.annotationLayer = L.tileLayer(url, {
        transparent: true,
        zIndex: 3,
        ...options,
      });
      this.annotationLayer.addTo(this.map);
    },

    /**
     * 移除底图
     */
    removeBasemap() {
      if (this.basemapLayer) {
        this.map.removeLayer(this.basemapLayer);
        this.basemapLayer = null;
      }
      this.removeAnnotation();
    },

    /**
     * 移除注记
     */
    removeAnnotation() {
      if (this.annotationLayer) {
        this.map.removeLayer(this.annotationLayer);
        this.annotationLayer = null;
      }
    },

    /**
     * 切换注记显示
     * @param {boolean} show
     */
    toggleAnnotation(show) {
      if (show && !this.annotationLayer) {
        const preset = BASEMAP_PRESETS[this.basemap];
        if (preset && preset.annotation) {
          let url = preset.annotation.url.replace(/{tk}/g, this.tiandituToken);
          this.annotationLayer = L.tileLayer(url, preset.annotation.options);
          this.annotationLayer.addTo(this.map);
        }
      } else if (!show && this.annotationLayer) {
        this.removeAnnotation();
      }
    },

    /**
     * 设置地图中心和缩放
     * @param {Array} center - [lat, lng]
     * @param {number} zoom
     */
    setView(center, zoom) {
      this.map.setView(center, zoom);
    },

    /**
     * 适应边界
     * @param {L.LatLngBounds} bounds
     * @param {Object} options
     */
    fitBounds(bounds, options = {}) {
      this.map.fitBounds(bounds, { padding: [50, 50], ...options });
    },

    /**
     * 销毁地图
     */
    destroy() {
      if (this.map) {
        this.map.remove();
        this.map = null;
      }
    },

    /**
     * 获取可用的底图预设列表
     */
    getBasemapPresets() {
      return Object.keys(BASEMAP_PRESETS);
    },
  },
};
</script>

<style scoped>
.base-map-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
}

.map-container {
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>
