// 每个页面的代码模板
export const pageTemplates = {
  Test: `<template>
  <div class="demo-block">
    <div id="map" class="map-container"></div>
    <MapToolbar class="toolbar" :map="map" />
    <MapStatus class="status" :map="map" />
  </div>
</template>

<script>
import L from 'leaflet'
import MapToolbar from '@/components/MapToolbar'
import MapStatus from '@/components/MapStatus'

export default {
  components: { MapToolbar, MapStatus },
  data() {
    return {
      map: null
    }
  },
  mounted() {
    this.initMap()
  },
  beforeDestroy() {
    if (this.map) this.map.remove()
  },
  methods: {
    initMap() {
      this.map = L.map('map', {
        center: [25.5, 118.1],
        zoom: 8,
        zoomControl: false
      })
      
      // 添加标记点
      const points = [
        { lat: 26.08, lng: 119.3, name: '福州' },
        { lat: 24.48, lng: 118.08, name: '厦门' },
        { lat: 24.87, lng: 118.67, name: '泉州' }
      ]
      
      points.forEach(p => {
        L.marker([p.lat, p.lng]).addTo(this.map).bindPopup(p.name)
      })
    }
  }
}
<\/script>

<style>
.demo-block { height: 100%; position: relative; }
.map-container { width: 100%; height: 100%; }
.toolbar { position: absolute; top: 20px; left: 50%; transform: translateX(-50%); z-index: 1000; }
.status { position: absolute; bottom: 20px; left: 20px; z-index: 1000; background: rgba(255,255,255,0.9); padding: 8px 12px; border-radius: 4px; }
</style>`,

  Wind: `<template>
  <div class="demo-block">
    <div id="wind-map" class="map-container"></div>
    <MapToolbar class="toolbar" :map="map" />
    <div class="controls">
      <h3>图层控制</h3>
      <label><input type="checkbox" v-model="showMarkers" @change="toggleMarkers" /> 显示站点</label>
      <label><input type="checkbox" v-model="showCircles" @change="toggleCircles" /> 显示风圈</label>
    </div>
  </div>
</template>

<script>
import L from 'leaflet'
import MapToolbar from '@/components/MapToolbar'

export default {
  components: { MapToolbar },
  data() {
    return {
      map: null,
      markers: [],
      circles: [],
      showMarkers: true,
      showCircles: true,
      points: [
        { lat: 26.08, lng: 119.3, name: '福州', wind: 8 },
        { lat: 24.48, lng: 118.08, name: '厦门', wind: 12 },
        { lat: 24.87, lng: 118.67, name: '泉州', wind: 6 }
      ]
    }
  },
  mounted() {
    this.initMap()
  },
  beforeDestroy() {
    if (this.map) this.map.remove()
  },
  methods: {
    initMap() {
      this.map = L.map('wind-map', { center: [25.5, 118.5], zoom: 8, zoomControl: false })
      
      this.points.forEach(p => {
        const marker = L.marker([p.lat, p.lng]).bindPopup(p.name + ' 风速:' + p.wind + 'm/s')
        marker.addTo(this.map)
        this.markers.push(marker)
        
        const circle = L.circle([p.lat, p.lng], {
          radius: p.wind * 5000,
          color: p.wind > 10 ? '#ff4d4f' : '#1890ff',
          fillOpacity: 0.2
        }).addTo(this.map)
        this.circles.push(circle)
      })
    },
    toggleMarkers() {
      this.markers.forEach(m => this.showMarkers ? m.addTo(this.map) : m.remove())
    },
    toggleCircles() {
      this.circles.forEach(c => this.showCircles ? c.addTo(this.map) : c.remove())
    }
  }
}
<\/script>

<style>
.demo-block { height: 100%; position: relative; }
.map-container { width: 100%; height: 100%; }
.toolbar { position: absolute; top: 20px; left: 50%; transform: translateX(-50%); z-index: 1000; }
.controls { position: absolute; top: 20px; right: 20px; background: #fff; padding: 16px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.15); z-index: 1000; }
.controls h3 { margin: 0 0 12px 0; font-size: 14px; }
.controls label { display: block; margin-bottom: 8px; cursor: pointer; }
</style>`,

  Typhoon: `<template>
  <div class="demo-block">
    <div id="typhoon-map" class="map-container"></div>
    <div class="legend">
      <h3>台风强度</h3>
      <div v-for="item in levels" :key="item.name" class="legend-item">
        <span class="dot" :style="{ background: item.color }"></span>
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
import L from 'leaflet'

export default {
  data() {
    return {
      map: null,
      levels: [
        { name: '热带风暴', color: '#00ff00' },
        { name: '强热带风暴', color: '#ffff00' },
        { name: '台风', color: '#ffa500' },
        { name: '强台风', color: '#ff00ff' },
        { name: '超强台风', color: '#ff0000' }
      ],
      track: [
        { lat: 15, lng: 130, level: 0 },
        { lat: 17, lng: 127, level: 1 },
        { lat: 19, lng: 124, level: 2 },
        { lat: 21, lng: 121, level: 3 },
        { lat: 23, lng: 119, level: 4 }
      ]
    }
  },
  mounted() {
    this.initMap()
  },
  beforeDestroy() {
    if (this.map) this.map.remove()
  },
  methods: {
    initMap() {
      this.map = L.map('typhoon-map', {
        center: [20, 125],
        zoom: 5
      })
      
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map)
      
      // 绘制路径
      const latlngs = this.track.map(p => [p.lat, p.lng])
      L.polyline(latlngs, { color: '#1890ff', weight: 2 }).addTo(this.map)
      
      // 绘制点
      this.track.forEach(p => {
        L.circleMarker([p.lat, p.lng], {
          radius: 8,
          fillColor: this.levels[p.level].color,
          color: '#fff',
          weight: 2,
          fillOpacity: 1
        }).addTo(this.map)
      })
    }
  }
}
<\/script>

<style>
.demo-block { height: 100%; display: flex; flex-direction: column; }
.map-container { flex: 1; min-height: 300px; }
.legend { padding: 12px; background: #f5f5f5; }
.legend h3 { margin: 0 0 12px 0; font-size: 14px; }
.legend-item { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; font-size: 13px; }
.dot { width: 14px; height: 14px; border-radius: 50%; }
</style>`,

  Wms: `<template>
  <div class="demo-block">
    <BaseMap ref="baseMap" basemap="tianditu_img" :options="mapOptions" @map-ready="onMapReady" />
    <div class="controls">
      <h3>底图切换</h3>
      <select v-model="currentBasemap" @change="changeBasemap">
        <option value="tianditu_img">天地图影像</option>
        <option value="tianditu_vec">天地图矢量</option>
        <option value="osm">OpenStreetMap</option>
        <option value="dark">暗色底图</option>
      </select>
      <div class="info">
        <p>当前底图: {{ currentBasemap }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import BaseMap from '@/components/BaseMap'

export default {
  components: { BaseMap },
  data() {
    return {
      map: null,
      currentBasemap: 'tianditu_img',
      mapOptions: { center: [35, 110], zoom: 4 }
    }
  },
  methods: {
    onMapReady(map) {
      this.map = map
    },
    changeBasemap() {
      this.$refs.baseMap.setBasemap(this.currentBasemap)
    }
  }
}
<\/script>

<style>
.demo-block { height: 100%; position: relative; }
.controls { position: absolute; top: 20px; right: 20px; background: #fff; padding: 16px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.15); z-index: 1000; min-width: 200px; }
.controls h3 { margin: 0 0 12px 0; font-size: 14px; }
.controls select { width: 100%; padding: 8px; border: 1px solid #d9d9d9; border-radius: 4px; }
.controls .info { margin-top: 12px; padding-top: 12px; border-top: 1px solid #eee; font-size: 13px; color: #666; }
</style>`,

  Contour: `<template>
  <div class="demo-block">
    <div id="contour-map" class="map-container"></div>
    <div class="control-panel">
      <h3>等值线控制</h3>
      <label><input type="checkbox" v-model="showCircles" @change="toggleCircles" /> 显示圆圈</label>
      <div class="legend">
        <div class="legend-bar"></div>
        <div class="legend-labels"><span>低</span><span>中</span><span>高</span></div>
      </div>
    </div>
  </div>
</template>

<script>
import L from 'leaflet'

export default {
  data() {
    return {
      map: null,
      circles: [],
      showCircles: true,
      data: [
        { lat: 35, lng: 110, value: 30 },
        { lat: 36, lng: 115, value: 50 },
        { lat: 34, lng: 120, value: 80 }
      ]
    }
  },
  mounted() {
    this.initMap()
  },
  beforeDestroy() {
    if (this.map) this.map.remove()
  },
  methods: {
    initMap() {
      this.map = L.map('contour-map', {
        center: [35, 115],
        zoom: 5
      })
      
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map)
      
      this.data.forEach(p => {
        const color = p.value < 40 ? '#00ff00' : p.value < 60 ? '#ffff00' : '#ff0000'
        const circle = L.circle([p.lat, p.lng], {
          radius: p.value * 5000,
          color: color,
          fillColor: color,
          fillOpacity: 0.3
        }).addTo(this.map)
        this.circles.push(circle)
      })
    },
    toggleCircles() {
      this.circles.forEach(c => {
        if (this.showCircles) c.addTo(this.map)
        else c.remove()
      })
    }
  }
}
<\/script>

<style>
.demo-block { height: 100%; display: flex; flex-direction: column; }
.map-container { flex: 1; min-height: 300px; }
.control-panel { padding: 12px; background: #f5f5f5; }
.control-panel h3 { margin: 0 0 12px 0; font-size: 14px; }
.control-panel label { display: block; margin-bottom: 12px; cursor: pointer; }
.legend-bar {
  height: 10px; border-radius: 2px;
  background: linear-gradient(to right, #00ff00, #ffff00, #ff0000);
}
.legend-labels { display: flex; justify-content: space-between; font-size: 11px; margin-top: 4px; }
</style>`,

  Edit: `<template>
  <div class="demo-block">
    <div id="edit-map" class="map-container"></div>
    <div class="control-panel">
      <h3>绘制工具</h3>
      <div class="toolbar">
        <button :class="{ active: tool === 'marker' }" @click="setTool('marker')">📍 点</button>
        <button :class="{ active: tool === 'circle' }" @click="setTool('circle')">⭕ 圆</button>
      </div>
      <p class="tip">点击地图添加要素</p>
      <p>已添加: {{ features.length }} 个</p>
      <button class="clear-btn" @click="clearAll">清空全部</button>
    </div>
  </div>
</template>

<script>
import L from 'leaflet'

export default {
  data() {
    return {
      map: null,
      tool: 'marker',
      features: []
    }
  },
  mounted() {
    this.initMap()
  },
  beforeDestroy() {
    if (this.map) this.map.remove()
  },
  methods: {
    initMap() {
      this.map = L.map('edit-map', {
        center: [25, 118],
        zoom: 8
      })
      
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map)
      
      this.map.on('click', (e) => {
        this.addFeature(e.latlng)
      })
    },
    setTool(t) {
      this.tool = t
    },
    addFeature(latlng) {
      let layer
      if (this.tool === 'marker') {
        layer = L.marker(latlng).addTo(this.map)
      } else {
        layer = L.circle(latlng, { radius: 10000, color: '#1890ff' }).addTo(this.map)
      }
      this.features.push(layer)
    },
    clearAll() {
      this.features.forEach(f => f.remove())
      this.features = []
    }
  }
}
<\/script>

<style>
.demo-block { height: 100%; display: flex; flex-direction: column; }
.map-container { flex: 1; min-height: 300px; }
.control-panel { padding: 12px; background: #f5f5f5; }
.control-panel h3 { margin: 0 0 12px 0; font-size: 14px; }
.toolbar { display: flex; gap: 8px; margin-bottom: 12px; }
.toolbar button {
  padding: 6px 12px; border: 1px solid #d9d9d9; background: #fff;
  border-radius: 4px; cursor: pointer;
}
.toolbar button.active { background: #1890ff; color: #fff; border-color: #1890ff; }
.tip { font-size: 12px; color: #666; margin-bottom: 8px; }
.clear-btn {
  margin-top: 8px; padding: 6px 12px; background: #ff4d4f; color: #fff;
  border: none; border-radius: 4px; cursor: pointer;
}
</style>`
}
