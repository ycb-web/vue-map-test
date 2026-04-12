<template>
  <div class="typhoon-page">
    <div id="typhoon-map" class="map-container"></div>
    <div class="controls">
      <div class="control-item control-item-slider">
        <div class="slider-header">
          <span>点位大小</span>
          <span class="slider-value">{{ pointSize }}</span>
        </div>
        <input
          v-model.number="pointSize"
          class="size-slider"
          type="range"
          min="4"
          max="14"
          step="1"
          @input="redraw"
        />
      </div>
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
import typhoonData from "../../../typhoon.json";

// 台风强度色用于历史点、预报点和当前选中态的统一视觉表达。
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
      // 右侧控件直接驱动重绘，避免分别同步 Leaflet 已存在实例的样式。
      showTrack: true,
      showForecast: true,
      showWindCircle: true,
      showLabels: false,
      pointSize: 4,
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
    formatPopupTime(timeStr) {
      const time = new Date(timeStr);
      return `${time.getMonth() + 1}月${time.getDate()}日${time.getHours()}时`;
    },
    formatTime(timeStr) {
      const time = new Date(timeStr);
      return `${time.getMonth() + 1}/${time.getDate()} ${time.getHours()}:00`;
    },
    getTrackPointRadius() {
      return this.pointSize;
    },
    getHoverPointRadius() {
      return this.pointSize * 2;
    },
    getForecastPointRadius() {
      return Math.max(3, this.pointSize - 2);
    },
    getPopupContent(point, title) {
      return `
        <div class="typhoon-popup">
          <div class="typhoon-popup__title">${title}</div>
          <div class="typhoon-popup__body">
            <div class="typhoon-popup__row"><span class="typhoon-popup__label">中心位置：</span>${point.position || `${point.lng}° ${point.lat}°`}</div>
            <div class="typhoon-popup__row"><span class="typhoon-popup__label">移动方向：</span>${point.move_dir || "--"}</div>
            <div class="typhoon-popup__row"><span class="typhoon-popup__label">中心气压：</span>${point.pressure || "--"}百帕</div>
            <div class="typhoon-popup__row"><span class="typhoon-popup__label">风速风力：</span>${point.speed || "--"}米/秒，${point.power || "--"}级（${point.strong || "--"}）</div>
          </div>
        </div>
      `;
    },
    getTyphoonDisplayName() {
      const name = typhoonData.name || "台风";
      const code = typhoonData.ty_code || "";
      return `${name}${code}`;
    },
    initMap() {
      this.map = L.map("typhoon-map", {
        zoom: 5,
        maxZoom: 16,
        zoomControl: true,
        zoomAnimation: true,
      }).setView([18, 125], 5);

      // 底图使用电子图包，便于路径与风圈叠加时保持清晰。
      L.tileLayer(
        "https://t0.tianditu.gov.cn/vec_w/wmts?tk=93724b915d1898d946ca7dc7b765dda5&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}",
        { maxZoom: 16, detectRetina: true }
      ).addTo(this.map);

      L.tileLayer(
        "https://t0.tianditu.gov.cn/cva_w/wmts?tk=93724b915d1898d946ca7dc7b765dda5&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}",
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
      // 当前页面的交互规模不大，直接全量重绘比增量更新更稳。
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

      // 选中态只影响风圈、预报线和 current point，统一归到动态图层。
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
      const color = getTyphoonColor(p.strong);
      const highlight = L.marker([p.lat, p.lng], {
        icon: L.divIcon({
          className: "current-point-icon",
          html: `
            <div class="current-point-spinner" style="color:${color}">
              <svg viewBox="0 0 200 200" aria-hidden="true">
                <path
                  fill="currentColor"
                  stroke="#ffffff"
                  stroke-width="5"
                  stroke-miterlimit="10"
                  d="M191.7 75.6c-37.9-43-87.3-43-87.3-43l.1.1c-1.6-.1-3.3-.3-5-.3-36.4 0-65.9 29.5-65.9 65.9 0 14.1 4.5 27.2 12 37.9-19.5-8.3-36.3-20-36.3-20 28.4 47.7 84.8 47.7 84.8 47.7l-.1 0c1.8.1 3.6.3 5.4.3 36.4 0 65.9-29.5 65.9-65.9 0-16-5.7-30.7-15.2-42.1 21.7 7.1 41.6 19.4 41.6 19.4Z"
                />
                <circle cx="99.6" cy="98.3" r="27.2" fill="#fff" />
              </svg>
            </div>
          `,
          iconSize: [28, 28],
          iconAnchor: [14, 14],
        }),
        interactive: false,
        zIndexOffset: 1000,
      });
      highlight.addTo(this.map);
      this.dynamicLayers.push(highlight);
    },
    drawPointWindCircle(point) {
      // 风圈按等级独立绘制，方便后续单独调整配色或显隐规则。
      if (point.radius7 > 0 || point.en7 > 0) {
        const circle7 = this.createWindCircle(point, 7);

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

      if (en === 0 && es === 0 && wn === 0 && ws === 0) return null;

      const colors = { 7: "#00FF00", 10: "#FFFF00", 12: "#FF0000" };
      const color = colors[level] || "#00FF00";

      // 四向半径一致时直接用真圆，渲染开销更低。
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

      // 非对称风圈用多边形近似，保证四象限半径差异能被看出来。
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

        // 预报线保留机构色，预报点本身仍按强度色显示。
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
          const pointColor = getTyphoonColor(p.strong);
          const marker = L.circleMarker([p.lat, p.lng], {
            radius: this.getTrackPointRadius(),
            fillColor: pointColor,
            color: "#222222",
            weight: 1,
            fillOpacity: 1,
          });

          const timeStr = this.formatPopupTime(p.time);
          marker.bindPopup(this.getPopupContent(p, `【${source}预报】${timeStr}`), {
            className: "typhoon-popup-wrap",
          });

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
      // 历史路径线统一深色，突出时间序列关系而不是强度分段。
      for (let i = 0; i < data.length - 1; i++) {
        const line = L.polyline(
          [
            [data[i].lat, data[i].lng],
            [data[i + 1].lat, data[i + 1].lng],
          ],
          { color: "#222222", weight: 3 }
        );
        line.addTo(this.map);
        this.typhoonLayers.push(line);
      }

      // 历史点承担主要交互，hover、popup 和首点名称都挂在这里。
      data.forEach((p, index) => {
        const color = getTyphoonColor(p.strong);
        const marker = L.circleMarker([p.lat, p.lng], {
          radius: this.getTrackPointRadius(),
          fillColor: color,
          color: "#222222",
          weight: 1,
          fillOpacity: 1,
        });

        const timeStr = this.formatPopupTime(p.time);

        // 鼠标悬停放大效果
        marker.on("mouseover", () => {
          marker.setRadius(this.getHoverPointRadius());
          marker.setStyle({ weight: 1 });
        });
        marker.on("mouseout", () => {
          marker.setRadius(this.getTrackPointRadius());
          marker.setStyle({ weight: 1 });
        });

        // 点击事件
        marker.on("click", () => {
          this.selectPoint(index);
        });

        marker.bindPopup(this.getPopupContent(p, `【黑格比】${timeStr}`), {
          className: "typhoon-popup-wrap",
        });

        marker.addTo(this.map);
        this.typhoonLayers.push(marker);

        if (index === 0) {
          const nameLabel = L.marker([p.lat, p.lng], {
            icon: L.divIcon({
              className: "typhoon-name-label",
              html: `<span>${this.getTyphoonDisplayName()}</span>`,
              iconSize: [120, 24],
              iconAnchor: [-16, 12],
            }),
            interactive: false,
          });
          nameLabel.addTo(this.map);
          this.typhoonLayers.push(nameLabel);
        }

        // 时间标注默认关闭，需要时按固定间隔显示避免遮挡。
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
        marker.bindPopup(
          `
            <div class="typhoon-popup">
              <div class="typhoon-popup__title">【登陆点】${timeStr}</div>
              <div class="typhoon-popup__body">
                <div class="typhoon-popup__row"><span class="typhoon-popup__label">位置：</span>${land.position}</div>
              </div>
            </div>
          `,
          {
            className: "typhoon-popup-wrap",
          }
        );

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
.control-item-slider {
  margin-bottom: 14px;
}
.control-item:last-child {
  margin-bottom: 0;
}
.slider-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
  font-size: 13px;
  color: #333;
}
.slider-value {
  min-width: 24px;
  text-align: right;
  color: #1890ff;
  font-weight: 600;
}
.size-slider {
  width: 100%;
  cursor: pointer;
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
.typhoon-popup-wrap .leaflet-popup-content-wrapper {
  padding: 0;
  border-radius: 0;
  box-shadow: 0 4px 14px rgba(0, 39, 92, 0.24);
}
.typhoon-popup-wrap .leaflet-popup-content {
  margin: 0;
  min-width: 252px;
}
.typhoon-popup-wrap .leaflet-popup-tip {
  background: #f6fbff;
}
.typhoon-popup {
  border: 1px solid #8ec5ff;
  background: #f6fbff;
  font-size: 13px;
  line-height: 1.45;
  color: #3f4c5a;
}
.typhoon-popup__title {
  padding: 5px 10px;
  background: #cfe3ff;
  color: #1465d9;
  font-weight: 700;
  border-bottom: 1px solid #9fc7fb;
}
.typhoon-popup__body {
  padding: 8px 10px 10px;
}
.typhoon-popup__row + .typhoon-popup__row {
  margin-top: 2px;
}
.typhoon-popup__label {
  color: #1465d9;
  font-weight: 700;
}
.current-point-icon {
  background: transparent;
  border: 0;
}
.current-point-spinner {
  width: 28px;
  height: 28px;
  animation: current-point-spin 2.4s linear infinite;
  transform-origin: center;
}
.current-point-spinner svg {
  display: block;
  width: 100%;
  height: 100%;
}
@keyframes current-point-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
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
.typhoon-name-label {
  background: transparent;
  border: 0;
}
.typhoon-name-label span {
  position: relative;
  display: inline-flex;
  align-items: center;
  min-height: 22px;
  padding: 0 8px;
  border: 1px solid #8fb7f3;
  background: #ffffff;
  color: #4d5e74;
  font-size: 12px;
  white-space: nowrap;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
}
.typhoon-name-label span::before {
  content: "";
  position: absolute;
  left: -7px;
  top: 50%;
  width: 10px;
  height: 10px;
  background: #ffffff;
  border-left: 1px solid #8fb7f3;
  border-bottom: 1px solid #8fb7f3;
  transform: translateY(-50%) rotate(45deg);
}
</style>
