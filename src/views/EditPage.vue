<template>
  <div class="edit-page">
    <BaseMap
      ref="baseMap"
      basemap="tianditu_img"
      :options="mapOptions"
      @map-ready="onMapReady"
    />
    <div class="controls">
      <h3>要素编辑</h3>

      <div class="control-section">
        <div class="section-title">绘制工具</div>
        <div class="btn-group">
          <button :class="{ active: drawMode === 'marker' }" @click="startDraw('marker')">
            📍 点
          </button>
          <button :class="{ active: drawMode === 'polyline' }" @click="startDraw('polyline')">
            📏 线
          </button>
          <button :class="{ active: drawMode === 'polygon' }" @click="startDraw('polygon')">
            ⬡ 面
          </button>
        </div>
      </div>

      <div class="control-section">
        <div class="section-title">导入数据</div>
        <div class="btn-group">
          <button @click="triggerImport">📂 导入 GeoJSON</button>
          <input
            type="file"
            ref="fileInput"
            accept=".json,.geojson"
            style="display: none"
            @change="handleFileImport"
          />
        </div>
      </div>

      <div class="control-section">
        <div class="section-title">编辑模式</div>
        <div class="control-item">
          <label>
            <input type="checkbox" v-model="editEnabled" @change="toggleEdit" />
            启用编辑（拖拽/顶点编辑）
          </label>
        </div>
      </div>

      <div class="control-section">
        <div class="section-title">操作</div>
        <div class="btn-group">
          <button @click="deleteSelected" :disabled="!selectedLayer">🗑️ 删除选中</button>
          <button @click="clearAll">🧹 清空全部</button>
        </div>
      </div>

      <div class="control-section">
        <div class="section-title">要素列表</div>
        <div class="feature-list">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="feature-item"
            :class="{ selected: feature.layer === selectedLayer }"
            @click="selectFeature(feature)"
          >
            <span class="feature-icon">{{ getFeatureIcon(feature.type) }}</span>
            <span class="feature-name">{{ feature.type }} #{{ index + 1 }}</span>
          </div>
          <div v-if="features.length === 0" class="empty-tip">暂无要素，请绘制或导入</div>
        </div>
      </div>

      <div class="tips">
        <div class="tips-title">操作提示</div>
        <ul>
          <li>点击绘制按钮后在地图上绘制</li>
          <li>支持导入 GeoJSON 文件</li>
          <li>启用编辑后可拖拽要素</li>
          <li>线/面可拖拽顶点或添加新顶点</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import L from "leaflet";
import BaseMap from "@/components/BaseMap.vue";

const baseMap = ref<any>(null)
const fileInput = ref<HTMLInputElement | null>(null)
const map = ref<L.Map | null>(null)
const drawnItems = ref<L.FeatureGroup | null>(null)
const drawControl = ref<any>(null)
const drawMode = ref<string | null>(null)
const editEnabled = ref(false)
const selectedLayer = ref<L.Layer | null>(null)
const features = ref<{ type: string; layer: L.Layer }[]>([])
const currentDrawHandler = ref<any>(null)
const isDragging = ref(false)
const dragStartLatLng = ref<L.LatLng | null>(null)
const mapOptions = ref({
  center: [24.5, 118],
  zoom: 8,
  maxZoom: 18,
  minZoom: 3,
})

const onMapReady = (mapInstance: L.Map) => {
  map.value = mapInstance;

  // 配置 Geoman（延迟确保插件加载完成）
  setTimeout(() => {
    if (map.value?.pm) {
      map.value.pm.addControls({
        drawMarker: false,
        drawPolyline: false,
        drawPolygon: false,
        editMode: false,
        removalMode: false,
      });
    }
  }, 100);

  initDrawLayer();
};

const initDrawLayer = () => {
  if (!map.value) return;
  // 创建要素图层组
  drawnItems.value = new L.FeatureGroup();
  map.value.addLayer(drawnItems.value);

  // 监听绑定
  bindEvents();
};

const bindEvents = () => {
  if (!map.value) return;

  // Geoman 绘制完成事件
  map.value.on('pm:create', (e: any) => {
    const layer = e.layer;
    const type = e.shape || (e.layer instanceof L.Marker ? 'marker' : 'polyline');

    if (drawnItems.value) {
      drawnItems.value.addLayer(layer);
    }
    features.value.push({ type, layer });

    // 绑定点击选中
    layer.on("click", (evt: any) => {
      L.DomEvent.stopPropagation(evt);
      onLayerClick(layer);
    });

    // 为线/面绑定整体拖拽
    if (type !== "marker") {
      bindDragEvents(layer);
    }

    // 如果编辑模式开启，为新要素启用编辑
    if (editEnabled.value) {
      enableLayerEdit(layer);
    }

    drawMode.value = null;

    // 禁用绘制模式
    map.value.pm.disableDraw();
  });
};

// 为线/面绑定整体拖拽事件
const bindDragEvents = (layer: L.Layer) => {
  layer.on("mousedown", (e: any) => {
    if (!editEnabled.value) return;
    // 检查是否点击在顶点上，如果是则不启动整体拖拽
    if (e.originalEvent.target.classList.contains("leaflet-editing-icon")) {
      return;
    }
    handleStartDrag(layer, e);
  });
};

const handleStartDrag = (layer: L.Layer, e: any) => {
  isDragging.value = true;
  dragStartLatLng.value = e.latlng;
  if (map.value) {
    map.value.dragging.disable();
  }

  // 拖拽前先禁用编辑模式
  if ((layer as any).editing && (layer as any).editing.enabled()) {
    (layer as any).editing.disable();
  }

  const onMove = (moveEvent: any) => {
    if (!isDragging.value || !dragStartLatLng.value) return;
    const dx = moveEvent.latlng.lat - dragStartLatLng.value.lat;
    const dy = moveEvent.latlng.lng - dragStartLatLng.value.lng;

    // 移动所有顶点
    const latlngs = (layer as any).getLatLngs();
    const newLatLngs = offsetLatLngs(latlngs, dx, dy);
    (layer as any).setLatLngs(newLatLngs);

    dragStartLatLng.value = moveEvent.latlng;
  };

  const onUp = () => {
    isDragging.value = false;
    if (map.value) {
      map.value.dragging.enable();
      map.value.off("mousemove", onMove);
      map.value.off("mouseup", onUp);
    }

    // 重新启用编辑 - 需要重新创建 layer 才能刷新顶点
    if (editEnabled.value) {
      recreateLayer(layer);
    }
  };

  if (map.value) {
    map.value.on("mousemove", onMove);
    map.value.on("mouseup", onUp);
  }
};

// 重新创建图层以刷新编辑顶点
const recreateLayer = (oldLayer: L.Layer) => {
  const feature = features.value.find(f => f.layer === oldLayer);
  if (!feature) return;

  const latlngs = (oldLayer as any).getLatLngs();
  const style = {
    color: (oldLayer as any).options.color || "#3388ff",
    weight: (oldLayer as any).options.weight || 3,
    fillColor: (oldLayer as any).options.fillColor || "#3388ff",
    fillOpacity: (oldLayer as any).options.fillOpacity || 0.3,
  };

  // 创建新图层
  let newLayer: L.Polygon | L.Polyline | null = null;
  if (feature.type === "polygon") {
    newLayer = L.polygon(latlngs as any, style);
  } else if (feature.type === "polyline") {
    newLayer = L.polyline(latlngs as any, style);
  }

  if (!newLayer || !drawnItems.value) return;

  // 移除旧图层
  drawnItems.value.removeLayer(oldLayer);

  // 添加新图层
  drawnItems.value.addLayer(newLayer);

  // 更新 features 引用
  feature.layer = newLayer;

  // 更新选中状态
  if (selectedLayer.value === oldLayer) {
    selectedLayer.value = newLayer;
  }

  // 绑定事件
  newLayer.on("click", (evt: any) => {
    L.DomEvent.stopPropagation(evt);
    onLayerClick(newLayer!);
  });
  bindDragEvents(newLayer);

  // 启用编辑
  if (newLayer.editing) {
    newLayer.editing.enable();
  }
};

// 递归偏移坐标（支持多环多边形）
const offsetLatLngs = (latlngs: any, dx: number, dy: number) => {
  if (Array.isArray(latlngs[0])) {
    return latlngs.map((ring: any) => offsetLatLngs(ring, dx, dy));
  }
  return latlngs.map((ll: any) => L.latLng(ll.lat + dx, ll.lng + dy));
};

const startDraw = (type: string) => {
  if (!map.value) return;

  // 延迟确保 Geoman 准备就绪
  setTimeout(() => {
    if (!map.value?.pm) {
      return;
    }

    // 取消当前绘制模式
    map.value.pm.disableDraw();

    drawMode.value = type;

    // 使用 Geoman 进行绘制
    switch (type) {
      case "marker":
        map.value.pm.enableDraw('Marker', {
          markerStyle: {
            opacity: 0.8
          }
        });
        break;
      case "polyline":
        // Geoman 使用 Line 而非 Polyline
        map.value.pm.enableDraw('Line', {
          pathOptions: {
            color: "#3388ff",
            weight: 3
          }
        });
        break;
      case "polygon":
        map.value.pm.enableDraw('Polygon', {
          pathOptions: {
            color: "#3388ff",
            weight: 3,
            fillColor: "#3388ff",
            fillOpacity: 0.3
          }
        });
        break;
    }
  }, 300);
};

const toggleEdit = () => {
  if (!drawnItems.value) return;
  drawnItems.value.eachLayer((layer) => {
    if (editEnabled.value) {
      enableLayerEdit(layer);
    } else {
      disableLayerEdit(layer);
    }
  });
};

const enableLayerEdit = (layer: L.Layer) => {
  // 使用 Geoman 启用编辑
  if (layer.pm) {
    layer.pm.enable();
  }
  // 点要素启用拖拽
  if (layer instanceof L.Marker) {
    layer.dragging?.enable();
  }
};

const disableLayerEdit = (layer: L.Layer) => {
  // 使用 Geoman 禁用编辑
  if (layer.pm) {
    layer.pm.disable();
  }
  if (layer instanceof L.Marker) {
    layer.dragging?.disable();
  }
};

const onLayerClick = (layer: L.Layer) => {
  // 取消之前选中的高亮
  if (selectedLayer.value && selectedLayer.value !== layer) {
    resetLayerStyle(selectedLayer.value);
  }

  selectedLayer.value = layer;
  highlightLayer(layer);
};

const highlightLayer = (layer: L.Layer) => {
  if (layer instanceof L.Marker) {
    // Marker 高亮可以通过改变图标实现
    layer.setOpacity(0.7);
  } else {
    (layer as any).setStyle({ color: "#ff4444", weight: 4 });
  }
};

const resetLayerStyle = (layer: L.Layer) => {
  if (layer instanceof L.Marker) {
    layer.setOpacity(1);
  } else {
    (layer as any).setStyle({ color: "#3388ff", weight: 3 });
  }
};

const selectFeature = (feature: { type: string; layer: L.Layer }) => {
  onLayerClick(feature.layer);
  // 定位到要素
  if (feature.layer.getBounds) {
    map.value?.fitBounds(feature.layer.getBounds(), { padding: [50, 50] });
  } else if (feature.layer.getLatLng) {
    map.value?.setView(feature.layer.getLatLng(), map.value.getZoom());
  }
};

const deleteSelected = () => {
  if (!selectedLayer.value || !drawnItems.value) return;

  drawnItems.value.removeLayer(selectedLayer.value);
  features.value = features.value.filter((f) => f.layer !== selectedLayer.value);
  selectedLayer.value = null;
};

const clearAll = () => {
  if (!drawnItems.value) return;
  drawnItems.value.clearLayers();
  features.value = [];
  selectedLayer.value = null;
};

const getFeatureIcon = (type: string) => {
  const icons: Record<string, string> = {
    marker: "📍",
    polyline: "📏",
    polygon: "⬡",
  };
  return icons[type] || "📌";
};

// 触发文件选择
const triggerImport = () => {
  fileInput.value?.click();
};

// 处理文件导入
const handleFileImport = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const geojson = JSON.parse(e.target?.result as string);
      importGeoJSON(geojson);
    } catch (err) {
      alert("GeoJSON 解析失败: " + (err as Error).message);
    }
  };
  reader.readAsText(file);

  // 清空 input 以便重复选择同一文件
  target.value = "";
};

// 导入 GeoJSON 数据
const importGeoJSON = (geojson: any) => {
  if (!map.value || !drawnItems.value) return;

  const defaultStyle = {
    color: "#3388ff",
    weight: 3,
    fillColor: "#3388ff",
    fillOpacity: 0.3,
  };

  L.geoJSON(geojson, {
    style: function() { return defaultStyle; },
    pointToLayer: function(f: any, latlng: L.LatLng) {
      return L.marker(latlng);
    },
    onEachFeature: (f: any, layer: L.Layer) => {
      // 确定要素类型
      let type = "polygon";
      if (layer instanceof L.Marker) {
        type = "marker";
      } else if (layer instanceof L.Polyline && !(layer instanceof L.Polygon)) {
        type = "polyline";
      }

      // 添加到图层组
      drawnItems.value!.addLayer(layer);
      features.value.push({ type, layer });

      // 绑定点击事件
      layer.on("click", (evt: any) => {
        L.DomEvent.stopPropagation(evt);
        onLayerClick(layer);
      });

      // 为线/面绑定拖拽
      if (type !== "marker") {
        bindDragEvents(layer);
      }

      // 如果编辑模式开启，启用编辑
      if (editEnabled.value) {
        enableLayerEdit(layer);
      }
    },
  });

  // 缩放到导入的数据范围
  if (features.value.length > 0 && map.value) {
    const bounds = drawnItems.value.getBounds();
    if (bounds.isValid()) {
      map.value.fitBounds(bounds, { padding: [50, 50] });
    }
  }
};

onMounted(() => {
});
</script>

<style scoped>
.edit-page {
  width: 100%;
  height: 100%;
  position: relative;
}

.controls {
  position: absolute;
  top: 20px;
  right: 20px;
  background: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  min-width: 240px;
  max-height: calc(100vh - 60px);
  overflow-y: auto;
}

.controls h3 {
  margin: 0 0 15px 0;
  font-size: 16px;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}

.control-section {
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #f0f0f0;
}

.section-title {
  font-size: 13px;
  color: #666;
  margin-bottom: 10px;
  font-weight: 500;
}

.btn-group {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.btn-group button {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #fff;
  cursor: pointer;
  font-size: 13px;
  transition: all 0.2s;
}

.btn-group button:hover {
  background: #f5f5f5;
  border-color: #1890ff;
}

.btn-group button.active {
  background: #1890ff;
  color: white;
  border-color: #1890ff;
}

.btn-group button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.control-item {
  margin-bottom: 10px;
}

.control-item label {
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.feature-list {
  max-height: 150px;
  overflow-y: auto;
  border: 1px solid #eee;
  border-radius: 4px;
}

.feature-item {
  padding: 8px 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid #f5f5f5;
  transition: background 0.2s;
}

.feature-item:last-child {
  border-bottom: none;
}

.feature-item:hover {
  background: #f5f5f5;
}

.feature-item.selected {
  background: #e6f7ff;
}

.feature-icon {
  font-size: 14px;
}

.feature-name {
  font-size: 13px;
}

.empty-tip {
  padding: 15px;
  text-align: center;
  color: #999;
  font-size: 13px;
}

.tips {
  margin-top: 10px;
}

.tips-title {
  font-size: 12px;
  color: #999;
  margin-bottom: 8px;
}

.tips ul {
  margin: 0;
  padding-left: 18px;
  font-size: 12px;
  color: #666;
  line-height: 1.8;
}
</style>

<style>
/* 自定义编辑顶点样式 - 更小的尺寸 */
.leaflet-edit-vertex-small {
  width: 8px !important;
  height: 8px !important;
  margin-left: -4px !important;
  margin-top: -4px !important;
  background-color: #fff;
  border: 2px solid #3388ff;
  border-radius: 2px;
  box-sizing: border-box;
}

/* 中点样式（用于添加新顶点） */
.leaflet-edit-midpoint-small {
  width: 6px !important;
  height: 6px !important;
  margin-left: -3px !important;
  margin-top: -3px !important;
  background-color: rgba(51, 136, 255, 0.5);
  border: 1px solid #3388ff;
  border-radius: 50%;
  box-sizing: border-box;
}

/* 覆盖默认的编辑顶点样式 */
.leaflet-editing-icon {
  width: 8px !important;
  height: 8px !important;
  margin-left: -4px !important;
  margin-top: -4px !important;
  background-color: #fff;
  border: 2px solid #3388ff;
  border-radius: 2px;
  box-sizing: border-box;
}

/* 中点（半透明，用于添加新顶点） */
.leaflet-marker-icon.leaflet-editing-icon:not(:first-child) {
  opacity: 0.6;
}
</style>
