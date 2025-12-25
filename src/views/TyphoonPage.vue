<template>
  <div class="typhoon-page">
    <div id="typhoon-map" class="map-container"></div>
    <div class="controls">
      <div class="control-item">
        <label>
          <input type="checkbox" v-model="showTrack" @change="redraw" />
          实况路径
        </label>
      </div>
      <div class="control-item">
        <label>
          <input type="checkbox" v-model="showForecast" @change="redraw" />
          预报路径
        </label>
      </div>
      <div class="control-item">
        <label>
          <input type="checkbox" v-model="showWindCircle" @change="redraw" />
          风圈
        </label>
      </div>
      <div class="control-item">
        <label>
          <input type="checkbox" v-model="showLabels" @change="redraw" />
          标注
        </label>
      </div>
      <div class="selected-info" v-if="selectedPoint">
        <div class="info-title">当前选中</div>
        <div class="info-time">{{ formatTime(selectedPoint.time) }}</div>
        <div class="info-item">强度: {{ selectedPoint.strong }}</div>
        <div class="info-item">风速: {{ selectedPoint.speed }} m/s</div>
        <div class="info-item">气压: {{ selectedPoint.pressure }} hPa</div>
      </div>
    </div>
    <div class="legend">
      <div class="legend-title">台风强度</div>
      <div class="legend-item">
        <span class="color-box" style="background: #00ff00"></span>热带风暴
      </div>
      <div class="legend-item">
        <span class="color-box" style="background: #ffff00"></span>强热带风暴
      </div>
      <div class="legend-item">
        <span class="color-box" style="background: #ffa500"></span>台风
      </div>
      <div class="legend-item">
        <span class="color-box" style="background: #ff00ff"></span>强台风
      </div>
      <div class="legend-item">
        <span class="color-box" style="background: #ff0000"></span>超强台风
      </div>
      <div class="legend-title" style="margin-top: 10px">预报机构</div>
      <div class="legend-item">
        <span class="color-line" style="background: #ff0000"></span>中国
      </div>
      <div class="legend-item">
        <span class="color-line" style="background: #00ced1"></span>日本
      </div>
      <div class="legend-item">
        <span class="color-line" style="background: #4169e1"></span>韩国
      </div>
      <div class="legend-item">
        <span class="color-line" style="background: #ffd700"></span>美国
      </div>
      <div class="legend-item">
        <span class="color-line" style="background: #9932cc"></span>欧洲
      </div>
    </div>
  </div>
</template>

<script>
import L from "leaflet";
import typhoonData from "../../typhoon.json";

const TYPHOON_COLORS = {
  "Super TY": "#FF0000",
  STY: "#FF00FF",
  TY: "#FFA500",
  STS: "#FFFF00",
  TS: "#00FF00",
  TD: "#00BFFF",
};

const FORECAST_COLORS = {
  中国: "#FF0000",
  日本: "#00CED1",
  韩国: "#4169E1",
  美国: "#FFD700",
  欧洲: "#9932CC",
};

function getTyphoonColor(strong) {
  if (!strong) return "#00BFFF";
  if (strong.includes("超强台风")) return TYPHOON_COLORS["Super TY"];
  if (strong.includes("强台风")) return TYPHOON_COLORS["STY"];
  if (strong.includes("台风")) return TYPHOON_COLORS["TY"];
  if (strong.includes("强热带风暴")) return TYPHOON_COLORS["STS"];
  if (strong.includes("热带风暴")) return TYPHOON_COLORS["TS"];
  return TYPHOON_COLORS["TD"];
}

export default {
  name: "TyphoonPage",
  data() {
    return {
      map: null,
      showTrack: true,
      showForecast: true,
      showWindCircle: true,
      showLabels: true,
      typhoonLayers: [],
      // 动态图层（点击时更新）
      dynamicLayers: [],
      selectedPoint: null,
      selectedIndex: -1,
    };
  },
  mounted() {
    this.initMap();
    this.drawTyphoon();
  },
  beforeDestroy() {
    if (this.map) {
      this.map.remove();
      this.map = null;
    }
  },
  methods: {
    formatTime(timeStr) {
      const time = new Date(timeStr);
      return `${time.getMonth() + 1}/${time.getDate()} ${time.getHours()}:00`;
    },
    initMap() {
      this.map = L.map("typhoon-map", {
        zoom: 5,
        maxZoom: 16,
        zoomControl: true,
        zoomAnimation: true,
      }).setView([18, 125], 5);

      L.tileLayer(
        "https://t0.tianditu.gov.cn/img_w/wmts?tk=93724b915d1898d946ca7dc7b765dda5&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}",
        { maxZoom: 16, detectRetina: true }
      ).addTo(this.map);

      L.tileLayer(
        "https://t0.tianditu.gov.cn/cia_w/wmts?tk=93724b915d1898d946ca7dc7b765dda5&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cia&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}",
        { transparent: true, zIndex: 3 }
      ).addTo(this.map);
    },
    clearLayers() {
      this.typhoonLayers.forEach((layer) => this.map.removeLayer(layer));
      this.typhoonLayers = [];
    },
    clearDynamicLayers() {
      this.dynamicLayers.forEach((layer) => this.map.removeLayer(layer));
      this.dynamicLayers = [];
    },
    redraw() {
      this.clearLayers();
      this.clearDynamicLayers();
      this.selectedPoint = null;
      this.selectedIndex = -1;
      this.drawTyphoon();
    },
    drawTyphoon() {
      const data = typhoonData.data;
      if (!data || data.length === 0) return;

      // 绘制实况路径
      if (this.showTrack) {
        this.drawTrack(data);
      }

      // 默认选中最后一个点
      if (data.length > 0) {
        this.selectPoint(data.length - 1);
      }

      // 绘制登陆点
      if (typhoonData.land && typhoonData.land.length > 0) {
        this.drawLandfall(typhoonData.land);
      }
    },
    selectPoint(index) {
      const data = typhoonData.data;
      if (index < 0 || index >= data.length) return;

      // 清除之前的动态图层
      this.clearDynamicLayers();

      this.selectedIndex = index;
      this.selectedPoint = data[index];

      // 聚焦到该点
      this.map.setView(
        [this.selectedPoint.lat, this.selectedPoint.lng],
        this.map.getZoom(),
        {
          animate: true,
          duration: 0.5,
        }
      );

      // 绘制该点的风圈
      if (this.showWindCircle) {
        this.drawPointWindCircle(this.selectedPoint);
      }

      // 绘制该点的预报路径
      if (this.showForecast && this.selectedPoint.data) {
        this.drawPointForecast(this.selectedPoint);
      }

      // 高亮选中点
      this.highlightSelectedPoint();
    },
    highlightSelectedPoint() {
      const p = this.selectedPoint;
      const highlight = L.circleMarker([p.lat, p.lng], {
        radius: 12,
        fillColor: "transparent",
        color: "#fff",
        weight: 3,
        opacity: 1,
      });
      highlight.addTo(this.map);
      this.dynamicLayers.push(highlight);
    },
    drawPointWindCircle(point) {
      // 7级风圈
      if (point.radius7 > 0 || point.en7 > 0) {
        const circle7 = this.createWindCircle(point, 7);

        console.log(circle7, 'circle7')
        if (circle7) {
          circle7.addTo(this.map);
          this.dynamicLayers.push(circle7);
        }
      }

      // 10级风圈
      if (point.radius10 > 0 || point.en10 > 0) {
        const circle10 = this.createWindCircle(point, 10);
        if (circle10) {
          circle10.addTo(this.map);
          this.dynamicLayers.push(circle10);
        }
      }

      // 12级风圈
      if (point.radius12 > 0 || point.en12 > 0) {
        const circle12 = this.createWindCircle(point, 12);
        if (circle12) {
          circle12.addTo(this.map);
          this.dynamicLayers.push(circle12);
        }
      }
    },
    createWindCircle(point, level) {
      const radiusKey = `radius${level}`;
      const enKey = `en${level}`;
      const esKey = `es${level}`;
      const wnKey = `wn${level}`;
      const wsKey = `ws${level}`;

      const en = point[enKey] || point[radiusKey] || 0;
      const es = point[esKey] || point[radiusKey] || 0;
      const wn = point[wnKey] || point[radiusKey] || 0;
      const ws = point[wsKey] || point[radiusKey] || 0;

      console.log(`en: ${en}, es: ${es}, wn: ${wn}, ws: ${ws}`)

      if (en === 0 && es === 0 && wn === 0 && ws === 0) return null;

      const colors = { 7: "#00FF00", 10: "#FFFF00", 12: "#FF0000" };
      const color = colors[level] || "#00FF00";

      // 如果四个方向半径相同，使用真正的圆
      if (en === es && es === ws && ws === wn) {
        return L.circle([point.lat, point.lng], {
          radius: en * 1000,
          color: color,
          weight: 2,
          fillColor: color,
          fillOpacity: 0.15,
          interactive: false,
        });
      }

      // 非对称风圈：增加点数并禁用简化
      const points = [];
      const segments = 360;

      for (let i = 0; i <= segments; i++) {
        const angle = (i / segments) * 360;

        let radius;
        if (angle >= 0 && angle < 90) {
          radius = en;
        } else if (angle >= 90 && angle < 180) {
          radius = es;
        } else if (angle >= 180 && angle < 270) {
          radius = ws;
        } else {
          radius = wn;
        }

        const angleRad = (angle * Math.PI) / 180;
        const lat = point.lat + (radius / 111) * Math.cos(angleRad);
        const lng = point.lng + (radius / 111) * Math.sin(angleRad);
        points.push([lat, lng]);
      }

      return L.polygon(points, {
        color: color,
        weight: 2,
        fillColor: color,
        fillOpacity: 0.15,
        interactive: false,
        smoothFactor: 0,
        noClip: true,
      });
    },
    drawPointForecast(point) {
      if (!point.data || point.data.length === 0) return;

      point.data.forEach((forecast) => {
        const source = forecast.source;
        const color = FORECAST_COLORS[source] || "#888888";
        const forecastPoints = forecast.data;

        if (!forecastPoints || forecastPoints.length === 0) return;

        // 从当前点连接到预报第一点
        const startPoint = [point.lat, point.lng];
        const allPoints = [
          startPoint,
          ...forecastPoints.map((p) => [p.lat, p.lng]),
        ];

        // 绘制预报路径线（虚线）
        const line = L.polyline(allPoints, {
          color: color,
          weight: 2,
          dashArray: "5, 5",
          opacity: 0.8,
        });
        line.addTo(this.map);
        this.dynamicLayers.push(line);

        // 绘制预报点
        forecastPoints.forEach((p) => {
          const marker = L.circleMarker([p.lat, p.lng], {
            radius: 4,
            fillColor: color,
            color: color,
            weight: 1,
            fillOpacity: 0.8,
          });

          const time = new Date(p.time);
          const timeStr = `${
            time.getMonth() + 1
          }/${time.getDate()} ${time.getHours()}时`;
          marker.bindPopup(`
            <b>${source}预报</b><br/>
            ${timeStr}<br/>
            强度: ${p.strong || "--"}<br/>
            风速: ${p.speed} m/s<br/>
            ${p.pressure ? "气压: " + p.pressure + " hPa" : ""}
          `);

          marker.addTo(this.map);
          this.dynamicLayers.push(marker);
        });

        // 添加机构标签
        if (forecastPoints.length > 0) {
          const lastForecast = forecastPoints[forecastPoints.length - 1];
          const label = L.marker([lastForecast.lat, lastForecast.lng], {
            icon: L.divIcon({
              className: "forecast-label",
              html: `<span style="color:${color};font-weight:bold;text-shadow:1px 1px 1px #fff,-1px -1px 1px #fff">${source}</span>`,
              iconSize: [40, 16],
              iconAnchor: [-5, 8],
            }),
          });
          label.addTo(this.map);
          this.dynamicLayers.push(label);
        }
      });
    },
    drawTrack(data) {
      // 绘制路径线（分段着色）
      for (let i = 0; i < data.length - 1; i++) {
        const color = getTyphoonColor(data[i].strong);
        const line = L.polyline(
          [
            [data[i].lat, data[i].lng],
            [data[i + 1].lat, data[i + 1].lng],
          ],
          { color: color, weight: 3 }
        );
        line.addTo(this.map);
        this.typhoonLayers.push(line);
      }

      // 绘制路径点
      data.forEach((p, index) => {
        const color = getTyphoonColor(p.strong);
        const marker = L.circleMarker([p.lat, p.lng], {
          radius: 6,
          fillColor: color,
          color: "#fff",
          weight: 2,
          fillOpacity: 1,
        });

        const time = new Date(p.time);
        const timeStr = `${
          time.getMonth() + 1
        }/${time.getDate()} ${time.getHours()}时`;

        // 鼠标悬停放大效果
        marker.on("mouseover", function () {
          this.setRadius(9);
          this.setStyle({ weight: 3 });
        });
        marker.on("mouseout", function () {
          this.setRadius(6);
          this.setStyle({ weight: 2 });
        });

        // 点击事件
        marker.on("click", () => {
          this.selectPoint(index);
        });

        marker.bindPopup(`
          <b>${timeStr}</b><br/>
          强度: ${p.strong || "--"}<br/>
          风速: ${p.speed} m/s<br/>
          气压: ${p.pressure} hPa<br/>
          移向: ${p.move_dir || "--"}<br/>
          移速: ${p.move_speed || "--"} km/h<br/>
          <small>点击查看该时刻预报</small>
        `);

        marker.addTo(this.map);
        this.typhoonLayers.push(marker);

        // 标注
        if (this.showLabels && index % 4 === 0) {
          const label = L.marker([p.lat, p.lng], {
            icon: L.divIcon({
              className: "typhoon-label",
              html: `<span>${timeStr}</span>`,
              iconSize: [60, 20],
              iconAnchor: [-5, 10],
            }),
          });
          label.addTo(this.map);
          this.typhoonLayers.push(label);
        }
      });
    },
    drawLandfall(landData) {
      landData.forEach((land) => {
        const marker = L.marker([land.lat, land.lng], {
          icon: L.divIcon({
            className: "landfall-icon",
            html: '<div style="background:#FF0000;width:12px;height:12px;border-radius:0;transform:rotate(45deg);border:2px solid #fff;"></div>',
            iconSize: [16, 16],
            iconAnchor: [8, 8],
          }),
        });

        const time = new Date(land.time);
        const timeStr = `${
          time.getMonth() + 1
        }月${time.getDate()}日 ${time.getHours()}:${String(
          time.getMinutes()
        ).padStart(2, "0")}`;
        marker.bindPopup(`
          <b>登陆点</b><br/>
          位置: ${land.position}<br/>
          时间: ${timeStr}
        `);

        marker.addTo(this.map);
        this.typhoonLayers.push(marker);
      });
    },
  },
};
</script>

<style scoped>
.typhoon-page {
  width: 100%;
  height: 100%;
  position: relative;
}
.map-container {
  width: 100%;
  height: 100%;
  z-index: 1;
}
.controls {
  position: absolute;
  top: 20px;
  right: 20px;
  background: white;
  padding: 15px;
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  text-align: left;
  min-width: 160px;
}
.control-item {
  margin-bottom: 10px;
}
.control-item:last-child {
  margin-bottom: 0;
}
label {
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
}
input[type="checkbox"] {
  margin-right: 8px;
}
.selected-info {
  margin-top: 15px;
  padding-top: 12px;
  border-top: 1px solid #eee;
}
.info-title {
  font-weight: bold;
  color: #1890ff;
  margin-bottom: 6px;
}
.info-time {
  font-size: 13px;
  color: #666;
  margin-bottom: 4px;
}
.info-item {
  font-size: 12px;
  color: #333;
  margin-bottom: 2px;
}
.legend {
  position: absolute;
  bottom: 30px;
  right: 20px;
  background: white;
  padding: 12px;
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  font-size: 12px;
}
.legend-title {
  font-weight: bold;
  margin-bottom: 8px;
  border-bottom: 1px solid #eee;
  padding-bottom: 4px;
}
.legend-item {
  display: flex;
  align-items: center;
  margin-bottom: 4px;
}
.color-box {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  margin-right: 8px;
  border: 1px solid #ccc;
}
.color-line {
  width: 20px;
  height: 3px;
  margin-right: 8px;
}
</style>

<style>
.typhoon-label span {
  font-size: 11px;
  color: #333;
  background: rgba(255, 255, 255, 0.8);
  padding: 1px 4px;
  border-radius: 2px;
  white-space: nowrap;
}
.forecast-label span {
  font-size: 11px;
}
</style>
