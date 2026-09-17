import L from "leaflet";

/**
 * 流速颜色映射表（流体力学标准冷暖渐变）
 */
function getVelocityColor(speed, maxSpeed = 1.5) {
  const t = Math.min(1, Math.max(0, speed / maxSpeed));
  if (t < 0.2) return "#40a9ff"; // 浅蓝
  if (t < 0.4) return "#36cfc9"; // 青绿
  if (t < 0.6) return "#52c41a"; // 翠绿
  if (t < 0.8) return "#fadb14"; // 亮黄
  if (t < 0.95) return "#fa8c16"; // 亮橙
  return "#f5222d"; // 绯红
}

/**
 * RawGridArrowLayer
 * 专为水动力与流场数据设计的 100% 物理真实格点图层：
 * 1. 坐标体系规范对齐大亚湾原工程（PixelIsPoint 标准）：
 *    - 元数据中的 (lo1, la1) 严格定义为第 0 行第 0 列格点本身的物理经纬度；
 *    - 矢量箭头直接锚定在原始格点 (lo1 + x*dx, la1 - y*absDy) 上；
 *    - 物理网格单元格线向外延展半格 [lng - 0.5*dx, lng + 0.5*dx]，使原始格点正好居于网格单元几何正中心；
 * 2. 严格 1:1 逐格点渲染，绝不按屏幕像素进行任何空间抽稀或合并；
 * 3. 真实物理经纬度网格线海陆全覆盖贯通，陆地无数据格点完整呈现；
 * 4. 图层层级托管于专用顶层容器 flowTopPane (zIndex: 550)，高于陆地图包 (450)，永不被遮挡；
 * 5. 视口包围盒裁剪 (Viewport Culling)，保证在大规模网格下依然 60fps 流畅响应。
 */
export const RawGridArrowLayer = L.CanvasLayer.extend({
  options: {
    pane: "flowTopPane", // 顶层流场 Pane (zIndex 550)，确保置于最上方不被陆地图包遮挡
    showGrid: true, // 是否绘制物理网格线
    showArrows: true, // 是否绘制矢量箭头
    showCellFill: false, // 是否填充单元格流速底色
    gridColor: "rgba(0, 220, 255, 0.45)", // 网格线颜色
    gridLineWidth: 1, // 网格线宽
    arrowColor: "#00ff3f", // 默认箭头颜色
    useVelocityColor: true, // 按照真实流速大小着色
    maxVelocity: 1.5, // 标定最大参考流速 (m/s)
    arrowSizeRatio: 0.75, // 箭头长度相对于格点像素宽度的比例
    minArrowLen: 5, // 最小箭头长度 (px)
    maxArrowLen: 32, // 最大箭头长度 (px)
  },

  initialize: function(options) {
    L.CanvasLayer.prototype.initialize.call(this, options);
    L.setOptions(this, options);
    this._ncData = null;
    this._meta = null;
  },

  setData: function(ncData, metaData) {
    this._ncData = ncData;
    this._meta = metaData;
    this.needRedraw();
  },

  updateOptions: function(newOptions) {
    L.setOptions(this, newOptions);
    this.needRedraw();
  },

  onDrawLayer: function(info) {
    const canvas = info.canvas;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (!this._ncData || this._ncData.length < 2) return;

    const uData = this._ncData[0].data;
    const vData = this._ncData[1].data;
    const header = this._ncData[0].header;
    const map = info.layer._map;
    if (!map || !uData || !vData || !header) return;

    const nx = header.nx;
    const ny = header.ny;
    const dx = header.dx;
    const absDy = Math.abs(header.dy);
    const lo1 = header.lo1;
    const la1 = header.la1;

    // 1. 获取当前视窗经纬度包围盒
    const bounds = map.getBounds();
    const west = bounds.getWest();
    const east = bounds.getEast();
    const south = bounds.getSouth();
    const north = bounds.getNorth();

    // 2. 计算视口内可见的网格列 (x) 和行 (y) 范围，O(1) 视口裁剪
    const xMin = Math.max(0, Math.floor((west - lo1) / dx) - 1);
    const xMax = Math.min(nx - 1, Math.ceil((east - lo1) / dx) + 1);
    const yMin = Math.max(0, Math.floor((la1 - north) / absDy) - 1);
    const yMax = Math.min(ny - 1, Math.ceil((la1 - south) / absDy) + 1);

    if (xMin > xMax || yMin > yMax) return;

    // 获取当前网格步长在屏幕上的像素跨度（用于自适应尺寸和抽稀/显示保护）
    const p0 = map.latLngToContainerPoint([la1, lo1]);
    const p1 = map.latLngToContainerPoint([la1 - absDy, lo1 + dx]);
    const cellW = Math.max(1, Math.abs(p1.x - p0.x));

    // -------------------------------------------------------------
    // A. 绘制原始物理经纬网格线（海陆全覆盖，陆地网格完整展示，绝不过滤）
    // 规范对齐大亚湾 debug-grid-overlay: 
    // - 经线从最南边界纵贯至最北边界
    // - 纬线从最西边界横贯至最东边界
    // -------------------------------------------------------------
    if (this.options.showGrid && cellW >= 2.0) {
      ctx.save();
      ctx.lineWidth = this.options.gridLineWidth;
      ctx.strokeStyle = this.options.gridColor;

      // 整个数据网格的地理外包围盒 (向外延展半个步长对齐像素中心)
      const gridWest = lo1 - 0.5 * dx;
      const gridEast = lo1 + (nx - 0.5) * dx;
      const gridNorth = la1 + 0.5 * absDy;
      const gridSouth = la1 - (ny - 0.5) * absDy;

      // 视口与网格包围盒的相交范围
      const vWest = Math.max(gridWest, west);
      const vEast = Math.min(gridEast, east);
      const vSouth = Math.max(gridSouth, south);
      const vNorth = Math.min(gridNorth, north);

      if (vWest <= vEast && vSouth <= vNorth) {
        // 缩放很小级别时步长防护，普通/放大级别 1:1 零抽稀逐格全画
        let step = 1;
        if (cellW < 5) {
          step = Math.max(1, Math.ceil(8 / Math.max(cellW, 0.1)));
        }

        const colStart = Math.max(0, Math.floor((vWest - lo1) / dx));
        const colEnd = Math.min(nx, Math.ceil((vEast - lo1) / dx) + 1);
        const rowStart = Math.max(0, Math.floor((la1 - vNorth) / absDy));
        const rowEnd = Math.min(ny, Math.ceil((la1 - vSouth) / absDy) + 1);

        ctx.beginPath();
        // 1. 纵向经线（海陆全域无断点）
        for (let c = colStart; c <= colEnd; c += step) {
          const lng = lo1 + (c - 0.5) * dx;
          const pTop = map.latLngToContainerPoint([gridNorth, lng]);
          const pBottom = map.latLngToContainerPoint([gridSouth, lng]);
          ctx.moveTo(Math.round(pTop.x) + 0.5, Math.round(pTop.y));
          ctx.lineTo(Math.round(pBottom.x) + 0.5, Math.round(pBottom.y));
        }

        // 2. 横向纬线（海陆全域无断点）
        for (let r = rowStart; r <= rowEnd; r += step) {
          const lat = la1 - (r - 0.5) * absDy;
          const pLeft = map.latLngToContainerPoint([lat, gridWest]);
          const pRight = map.latLngToContainerPoint([lat, gridEast]);
          ctx.moveTo(Math.round(pLeft.x), Math.round(pLeft.y) + 0.5);
          ctx.lineTo(Math.round(pRight.x), Math.round(pRight.y) + 0.5);
        }
        ctx.stroke();

        // 3. 全局外包围盒虚线框（标识整体数据像元范围）
        const pNW = map.latLngToContainerPoint([gridNorth, gridWest]);
        const pSE = map.latLngToContainerPoint([gridSouth, gridEast]);
        ctx.save();
        ctx.strokeStyle = "#00e5ff";
        ctx.lineWidth = 1.5;
        ctx.setLineDash([6, 4]);
        ctx.strokeRect(
          Math.round(pNW.x),
          Math.round(pNW.y),
          Math.round(pSE.x - pNW.x),
          Math.round(pSE.y - pNW.y)
        );
        ctx.restore();
      }

      // 可选：单元格流速色块填充（仅对有流速数据的海域格点进行半透明着色）
      if (this.options.showCellFill && cellW >= 4) {
        for (let y = yMin; y <= yMax; y++) {
          const rowOffset = y * nx;
          const ptLat = la1 - y * absDy;
          const latNorth = ptLat + 0.5 * absDy;
          const latSouth = ptLat - 0.5 * absDy;

          for (let x = xMin; x <= xMax; x++) {
            const idx = rowOffset + x;
            const u = uData[idx];
            const v = vData[idx];

            if (u !== null && v !== null && !isNaN(u) && !isNaN(v)) {
              const speed = Math.sqrt(u * u + v * v);
              const color = getVelocityColor(speed, this.options.maxVelocity);

              const ptLng = lo1 + x * dx;
              const lngWest = ptLng - 0.5 * dx;
              const lngEast = ptLng + 0.5 * dx;

              const topLeft = map.latLngToContainerPoint([latNorth, lngWest]);
              const bottomRight = map.latLngToContainerPoint([latSouth, lngEast]);

              const rectX = Math.round(topLeft.x);
              const rectY = Math.round(topLeft.y);
              const rectW = Math.round(bottomRight.x - topLeft.x);
              const rectH = Math.round(bottomRight.y - topLeft.y);

              ctx.fillStyle = color;
              ctx.globalAlpha = 0.35;
              ctx.fillRect(rectX, rectY, rectW, rectH);
              ctx.globalAlpha = 1.0;
            }
          }
        }
      }

      ctx.restore();
    }

    // -------------------------------------------------------------
    // B. 绘制原始数据矢量箭头（100% 逐格无抽稀）
    // 规范对齐大亚湾: 箭头精确锚定在原始格点 (lo1 + x*dx, la1 - y*absDy)
    // -------------------------------------------------------------
    if (this.options.showArrows) {
      ctx.save();

      // 确定单个格点内箭头的尺寸
      // 放大时自适应展开，微缩时保持最小可见长度，保证每个格点都有一个箭头
      const baseLen = Math.max(
        this.options.minArrowLen,
        Math.min(this.options.maxArrowLen, cellW * this.options.arrowSizeRatio)
      );

      for (let y = yMin; y <= yMax; y++) {
        const rowOffset = y * nx;
        const ptLat = la1 - y * absDy;

        for (let x = xMin; x <= xMax; x++) {
          const idx = rowOffset + x;
          const u = uData[idx];
          const v = vData[idx];

          if (u === null || v === null || isNaN(u) || isNaN(v)) {
            continue; // 缺测/陆地格点不画
          }

          const speed = Math.sqrt(u * u + v * v);
          if (speed <= 0.001) continue; // 静水格点跳过

          const ptLng = lo1 + x * dx;
          const pt = map.latLngToContainerPoint([ptLat, ptLng]);

          // 屏幕画布裁剪安全检查
          if (pt.x < -30 || pt.x > canvas.width + 30 || pt.y < -30 || pt.y > canvas.height + 30) {
            continue;
          }

          // 计算屏幕坐标系下的矢量角
          // 物理坐标系: u 向东为正(x+), v 向北为正(y+)
          // Canvas 屏幕坐标系: x 向右为正(x+), y 向下为正(y+) => v 需要取反
          const rad = Math.atan2(-v, u);

          // 箭头长度随流速大小做微调加成
          const speedFactor = Math.min(1.4, Math.max(0.6, speed / 0.6));
          const len = baseLen * speedFactor;

          // 箭头着色
          const color = this.options.useVelocityColor
            ? getVelocityColor(speed, this.options.maxVelocity)
            : this.options.arrowColor;

          this._drawSingleArrow(ctx, pt.x, pt.y, rad, len, color, cellW);
        }
      }

      ctx.restore();
    }
  },

  /**
   * 绘制单个格点的矢量箭头
   * @param {CanvasRenderingContext2D} ctx
   * @param {number} cx 格点中心 X
   * @param {number} cy 格点中心 Y
   * @param {number} rad 角度 (弧度)
   * @param {number} len 箭头杆长度
   * @param {string} color 颜色
   * @param {number} cellW 当前网格屏幕像素宽度
   */
  _drawSingleArrow: function(ctx, cx, cy, rad, len, color, cellW) {
    const halfLen = len * 0.5;
    const cosA = Math.cos(rad);
    const sinA = Math.sin(rad);

    // 箭头尾部与头部坐标
    const startX = cx - halfLen * cosA;
    const startY = cy - halfLen * sinA;
    const endX = cx + halfLen * cosA;
    const endY = cy + halfLen * sinA;

    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = cellW >= 20 ? 1.8 : 1.2;

    // 1. 绘制箭头主轴
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();

    // 2. 绘制箭头头部尖角
    const headLen = Math.max(3, Math.min(8, len * 0.38));
    const headAngle = 0.46; // 约 26 度

    const leftX = endX - headLen * Math.cos(rad - headAngle);
    const leftY = endY - headLen * Math.sin(rad - headAngle);
    const rightX = endX - headLen * Math.cos(rad + headAngle);
    const rightY = endY - headLen * Math.sin(rad + headAngle);

    ctx.beginPath();
    ctx.moveTo(endX, endY);
    ctx.lineTo(leftX, leftY);
    ctx.lineTo(rightX, rightY);
    ctx.closePath();
    ctx.fill();
  },
});

export function rawGridArrowLayer(options) {
  return new RawGridArrowLayer(options);
}
