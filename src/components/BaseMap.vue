<template>
  <div class="base-map-wrapper">
    <div :id="mapId" class="map-container"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import L from "leaflet";
import "@geoman-io/leaflet-geoman-free";
import "@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css";

// 内置底图枚举
const BASEMAP_PRESETS: Record<string, any> = {
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

const props = withDefaults(defineProps<{
  options?: Record<string, any>
  basemap?: string
  tiandituToken?: string
  showAnnotation?: boolean
}>(), {
  options: () => ({}),
  basemap: "tianditu_img",
  tiandituToken: "93724b915d1898d946ca7dc7b765dda5",
  showAnnotation: true,
})

const emit = defineEmits<{
  (e: 'map-ready', map: L.Map): void
}>()

const mapId = ref(`base-map-${++mapIdCounter}`)
const map = ref<L.Map | null>(null)
const basemapLayer = ref<L.TileLayer | null>(null)
const annotationLayer = ref<L.TileLayer | null>(null)

/**
 * 初始化地图
 */
const initMap = () => {
  const defaultOptions = {
    center: [35, 110],
    zoom: 4,
    maxZoom: 18,
    minZoom: 2,
    zoomControl: true,
  };

  const mapOptions = { ...defaultOptions, ...props.options };
  const { center, ...restOptions } = mapOptions;

  map.value = L.map(mapId.value, restOptions).setView(
    center,
    mapOptions.zoom
  );

  // 添加底图
  setBasemap(props.basemap);

  // 触发地图初始化完成事件
  emit("map-ready", map.value);
};

/**
 * 获取地图实例
 */
const getMap = () => {
  return map.value;
};

/**
 * 设置底图（使用预设）
 */
const setBasemap = (type: string) => {
  if (!map.value) return;

  // 移除现有底图
  removeBasemap();

  const preset = BASEMAP_PRESETS[type];
  if (!preset) return;

  // 处理 URL 中的 token
  let url = preset.url;
  if (url.includes("{tk}")) {
    url = url.replace(/{tk}/g, props.tiandituToken);
  }

  basemapLayer.value = L.tileLayer(url, preset.options);
  basemapLayer.value.addTo(map.value);

  // 添加注记图层
  if (props.showAnnotation && preset.annotation) {
    let annotationUrl = preset.annotation.url;
    if (annotationUrl.includes("{tk}")) {
      annotationUrl = annotationUrl.replace(/{tk}/g, props.tiandituToken);
    }
    annotationLayer.value = L.tileLayer(
      annotationUrl,
      preset.annotation.options
    );
    annotationLayer.value.addTo(map.value);
  }
};

/**
 * 自定义底图
 */
const setCustomBasemap = (url: string, options: Record<string, any> = {}) => {
  if (!map.value) return;
  removeBasemap();
  basemapLayer.value = L.tileLayer(url, options);
  basemapLayer.value.addTo(map.value);
};

/**
 * 自定义注记图层
 */
const setCustomAnnotation = (url: string, options: Record<string, any> = {}) => {
  if (!map.value) return;
  removeAnnotation();
  annotationLayer.value = L.tileLayer(url, {
    transparent: true,
    zIndex: 3,
    ...options,
  });
  annotationLayer.value.addTo(map.value);
};

/**
 * 移除底图
 */
const removeBasemap = () => {
  if (!map.value) return;
  if (basemapLayer.value) {
    map.value.removeLayer(basemapLayer.value);
    basemapLayer.value = null;
  }
  removeAnnotation();
};

/**
 * 移除注记
 */
const removeAnnotation = () => {
  if (!map.value) return;
  if (annotationLayer.value) {
    map.value.removeLayer(annotationLayer.value);
    annotationLayer.value = null;
  }
};

/**
 * 切换注记显示
 */
const toggleAnnotation = (show: boolean) => {
  if (!map.value) return;
  if (show && !annotationLayer.value) {
    const preset = BASEMAP_PRESETS[props.basemap];
    if (preset && preset.annotation) {
      let url = preset.annotation.url.replace(/{tk}/g, props.tiandituToken);
      annotationLayer.value = L.tileLayer(url, preset.annotation.options);
      annotationLayer.value.addTo(map.value);
    }
  } else if (!show && annotationLayer.value) {
    removeAnnotation();
  }
};

/**
 * 设置地图中心和缩放
 */
const setView = (center: [number, number], zoom: number) => {
  map.value?.setView(center, zoom);
};

/**
 * 适应边界
 */
const fitBounds = (bounds: L.LatLngBounds, options: Record<string, any> = {}) => {
  map.value?.fitBounds(bounds, { padding: [50, 50], ...options });
};

/**
 * 销毁地图
 */
const destroy = () => {
  if (map.value) {
    map.value.remove();
    map.value = null;
  }
};

/**
 * 获取可用的底图预设列表
 */
const getBasemapPresets = () => {
  return Object.keys(BASEMAP_PRESETS);
};

onMounted(() => {
  initMap();
});

onUnmounted(() => {
  destroy();
});

// 暴露方法给父组件
defineExpose({
  getMap,
  setBasemap,
  setCustomBasemap,
  setCustomAnnotation,
  removeBasemap,
  removeAnnotation,
  toggleAnnotation,
  setView,
  fitBounds,
  destroy,
  getBasemapPresets,
});
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
