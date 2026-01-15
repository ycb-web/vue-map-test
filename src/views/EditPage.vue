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

<script>
import L from "leaflet";
import "leaflet-draw";
import "leaflet-draw/dist/leaflet.draw.css";
import BaseMap from "@/components/BaseMap.vue";

// 标记是否已初始化自定义图标
let iconInitialized = false;

function initCustomIcons() {
  if (iconInitialized || !L.Edit || !L.Edit.PolyVerticesEdit) return;
  
  // 自定义更小的顶点图标
  const smallVertexIcon = L.divIcon({
    className: "leaflet-editing-icon leaflet-edit-vertex-small",
    iconSize: [8, 8],
    iconAnchor: [4, 4],
  });

  // 覆盖默认的顶点图标
  L.Edit.PolyVerticesEdit = L.Edit.PolyVerticesEdit.extend({
    options: {
      icon: smallVertexIcon,
      touchIcon: smallVertexIcon,
    },
  });
  
  iconInitialized = true;
}

export default {
  name: "EditPage",
  components: { BaseMap },
  data() {
    return {
      map: null,
      drawnItems: null,
      drawControl: null,
      drawMode: null,
      editEnabled: false,
      selectedLayer: null,
      features: [],
      currentDrawHandler: null,
      isDragging: false,
      dragStartLatLng: null,
      mapOptions: {
        center: [24.5, 118],
        zoom: 8,
        maxZoom: 18,
        minZoom: 3,
      },
    };
  },
  mounted() {
    initCustomIcons();
  },
  methods: {
    onMapReady(map) {
      this.map = map;
      this.initDrawLayer();
    },

    initDrawLayer() {
      // 创建要素图层组
      this.drawnItems = new L.FeatureGroup();
      this.map.addLayer(this.drawnItems);

      // 监听绑定
      this.bindEvents();
    },

    bindEvents() {
      // 绘制完成事件 (使用字符串避免 L.Draw.Event 未定义的问题)
      this.map.on("draw:created", (e) => {
        const layer = e.layer;
        const type = e.layerType;
        
        this.drawnItems.addLayer(layer);
        this.features.push({ type, layer });
        
        // 绑定点击选中
        layer.on("click", (evt) => {
          L.DomEvent.stopPropagation(evt);
          this.onLayerClick(layer);
        });
        
        // 为线/面绑定整体拖拽
        if (type !== "marker") {
          this.bindDragEvents(layer);
        }
        
        // 如果编辑模式开启，为新要素启用编辑
        if (this.editEnabled) {
          this.enableLayerEdit(layer);
        }
        
        this.drawMode = null;
      });
    },

    // 为线/面绑定整体拖拽事件
    bindDragEvents(layer) {
      layer.on("mousedown", (e) => {
        if (!this.editEnabled) return;
        // 检查是否点击在顶点上，如果是则不启动整体拖拽
        if (e.originalEvent.target.classList.contains("leaflet-editing-icon")) {
          return;
        }
        this.handleStartDrag(layer, e);
      });
    },

    handleStartDrag(layer, e) {
      this.isDragging = true;
      this.dragStartLatLng = e.latlng;
      this.map.dragging.disable();
      
      // 拖拽前先禁用编辑模式
      if (layer.editing && layer.editing.enabled()) {
        layer.editing.disable();
      }
      
      const onMove = (moveEvent) => {
        if (!this.isDragging) return;
        const dx = moveEvent.latlng.lat - this.dragStartLatLng.lat;
        const dy = moveEvent.latlng.lng - this.dragStartLatLng.lng;
        
        // 移动所有顶点
        const latlngs = layer.getLatLngs();
        const newLatLngs = this.offsetLatLngs(latlngs, dx, dy);
        layer.setLatLngs(newLatLngs);
        
        this.dragStartLatLng = moveEvent.latlng;
      };
      
      const onUp = () => {
        this.isDragging = false;
        this.map.dragging.enable();
        this.map.off("mousemove", onMove);
        this.map.off("mouseup", onUp);
        
        // 重新启用编辑 - 需要重新创建 layer 才能刷新顶点
        if (this.editEnabled) {
          this.recreateLayer(layer);
        }
      };
      
      this.map.on("mousemove", onMove);
      this.map.on("mouseup", onUp);
    },

    // 重新创建图层以刷新编辑顶点
    recreateLayer(oldLayer) {
      const feature = this.features.find(f => f.layer === oldLayer);
      if (!feature) return;
      
      const latlngs = oldLayer.getLatLngs();
      const style = {
        color: oldLayer.options.color || "#3388ff",
        weight: oldLayer.options.weight || 3,
        fillColor: oldLayer.options.fillColor || "#3388ff",
        fillOpacity: oldLayer.options.fillOpacity || 0.3,
      };
      
      // 创建新图层
      let newLayer;
      if (feature.type === "polygon") {
        newLayer = L.polygon(latlngs, style);
      } else if (feature.type === "polyline") {
        newLayer = L.polyline(latlngs, style);
      }
      
      if (!newLayer) return;
      
      // 移除旧图层
      this.drawnItems.removeLayer(oldLayer);
      
      // 添加新图层
      this.drawnItems.addLayer(newLayer);
      
      // 更新 features 引用
      feature.layer = newLayer;
      
      // 更新选中状态
      if (this.selectedLayer === oldLayer) {
        this.selectedLayer = newLayer;
      }
      
      // 绑定事件
      newLayer.on("click", (evt) => {
        L.DomEvent.stopPropagation(evt);
        this.onLayerClick(newLayer);
      });
      this.bindDragEvents(newLayer);
      
      // 启用编辑
      if (newLayer.editing) {
        newLayer.editing.enable();
      }
    },

    // 递归偏移坐标（支持多环多边形）
    offsetLatLngs(latlngs, dx, dy) {
      if (Array.isArray(latlngs[0])) {
        return latlngs.map((ring) => this.offsetLatLngs(ring, dx, dy));
      }
      return latlngs.map((ll) => L.latLng(ll.lat + dx, ll.lng + dy));
    },

    startDraw(type) {
      console.log("startDraw called, type:", type);
      console.log("L.Draw:", L.Draw);
      console.log("this.map:", this.map);
      
      // 取消当前绘制
      if (this.currentDrawHandler) {
        this.currentDrawHandler.disable();
      }

      this.drawMode = type;
      let handler;

      const defaultStyle = {
        color: "#3388ff",
        weight: 3,
        fillColor: "#3388ff",
        fillOpacity: 0.3,
      };

      switch (type) {
        case "marker":
          handler = new L.Draw.Marker(this.map);
          break;
        case "polyline":
          handler = new L.Draw.Polyline(this.map, { shapeOptions: defaultStyle });
          break;
        case "polygon":
          handler = new L.Draw.Polygon(this.map, { shapeOptions: defaultStyle });
          break;
      }

      if (handler) {
        this.currentDrawHandler = handler;
        handler.enable();
      }
    },

    toggleEdit() {
      this.drawnItems.eachLayer((layer) => {
        if (this.editEnabled) {
          this.enableLayerEdit(layer);
        } else {
          this.disableLayerEdit(layer);
        }
      });
    },

    enableLayerEdit(layer) {
      if (layer.editing) {
        layer.editing.enable();
      }
      // 点要素启用拖拽
      if (layer instanceof L.Marker) {
        layer.dragging.enable();
      }
    },

    disableLayerEdit(layer) {
      if (layer.editing) {
        layer.editing.disable();
      }
      if (layer instanceof L.Marker) {
        layer.dragging.disable();
      }
    },

    onLayerClick(layer) {
      // 取消之前选中的高亮
      if (this.selectedLayer && this.selectedLayer !== layer) {
        this.resetLayerStyle(this.selectedLayer);
      }
      
      this.selectedLayer = layer;
      this.highlightLayer(layer);
    },

    highlightLayer(layer) {
      if (layer instanceof L.Marker) {
        // Marker 高亮可以通过改变图标实现
        layer.setOpacity(0.7);
      } else {
        layer.setStyle({ color: "#ff4444", weight: 4 });
      }
    },

    resetLayerStyle(layer) {
      if (layer instanceof L.Marker) {
        layer.setOpacity(1);
      } else {
        layer.setStyle({ color: "#3388ff", weight: 3 });
      }
    },

    selectFeature(feature) {
      this.onLayerClick(feature.layer);
      // 定位到要素
      if (feature.layer.getBounds) {
        this.map.fitBounds(feature.layer.getBounds(), { padding: [50, 50] });
      } else if (feature.layer.getLatLng) {
        this.map.setView(feature.layer.getLatLng(), this.map.getZoom());
      }
    },

    deleteSelected() {
      if (!this.selectedLayer) return;
      
      this.drawnItems.removeLayer(this.selectedLayer);
      this.features = this.features.filter((f) => f.layer !== this.selectedLayer);
      this.selectedLayer = null;
    },

    clearAll() {
      this.drawnItems.clearLayers();
      this.features = [];
      this.selectedLayer = null;
    },

    getFeatureIcon(type) {
      const icons = {
        marker: "📍",
        polyline: "📏",
        polygon: "⬡",
      };
      return icons[type] || "📌";
    },

    // 触发文件选择
    triggerImport() {
      this.$refs.fileInput.click();
    },

    // 处理文件导入
    handleFileImport(event) {
      const file = event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const geojson = JSON.parse(e.target.result);
          this.importGeoJSON(geojson);
        } catch (err) {
          alert("GeoJSON 解析失败: " + err.message);
        }
      };
      reader.readAsText(file);
      
      // 清空 input 以便重复选择同一文件
      event.target.value = "";
    },

    // 导入 GeoJSON 数据
    importGeoJSON(geojson) {
      const defaultStyle = {
        color: "#3388ff",
        weight: 3,
        fillColor: "#3388ff",
        fillOpacity: 0.3,
      };

      L.geoJSON(geojson, {
        style: function() { return defaultStyle; },
        pointToLayer: function(f, latlng) {
          return L.marker(latlng);
        },
        onEachFeature: (f, layer) => {
          // 确定要素类型
          let type = "polygon";
          if (layer instanceof L.Marker) {
            type = "marker";
          } else if (layer instanceof L.Polyline && !(layer instanceof L.Polygon)) {
            type = "polyline";
          }

          // 添加到图层组
          this.drawnItems.addLayer(layer);
          this.features.push({ type, layer });

          // 绑定点击事件
          layer.on("click", (evt) => {
            L.DomEvent.stopPropagation(evt);
            this.onLayerClick(layer);
          });

          // 为线/面绑定拖拽
          if (type !== "marker") {
            this.bindDragEvents(layer);
          }

          // 如果编辑模式开启，启用编辑
          if (this.editEnabled) {
            this.enableLayerEdit(layer);
          }
        },
      });

      // 缩放到导入的数据范围
      if (this.features.length > 0) {
        const bounds = this.drawnItems.getBounds();
        if (bounds.isValid()) {
          this.map.fitBounds(bounds, { padding: [50, 50] });
        }
      }
    },
  },
};
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
