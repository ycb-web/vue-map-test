/**
 * marching-squares-geojson.js
 * 纯前端极速等值线/面追踪算法与 GeoJSON 封装模块
 * 
 * 核心技术链路:
 * 1. 输入离散网格矩阵 (Float32/Float64 二维数据)
 * 2. 基于 d3-contour (Marching Squares 行进方块算法) 提取闭合多边形环 (MultiPolygon)
 * 3. 局部格点坐标插值映射到地理经纬度 (EPSG:4326 WGS84)
 * 4. 内置 Chaikin 割角平滑算法 (对标 HiFleet 船队在线 1~3 轮迭代，去除直角折线)
 * 5. 组装标准 GeoJSON FeatureCollection，注入业务波高等级属性与配色
 */

import { contours } from "d3-contour";

/**
 * 默认海浪有效波高 (Hs) 业务分级与配色映射表 (单位: 米)
 * 业务标准:
 * - ≥ 2米: 红色 (#ef472d)
 * - 1~2米 (大于等于1米且小于2米): 绿色 (#78bb6e)
 * - < 1米 (大于等于0米且小于1米): 蓝色 (#1a90ff)
 * 陆地/无数据: 严格设为 NaN / null，保持完全透明
 */
export const DEFAULT_WAVE_LEVELS = [
  { threshold: 0, color: "#1a90ff", text: "<1米", rangeText: "0 ~ 1.0m" },
  { threshold: 1.0, color: "#78bb6e", text: "1~2米", rangeText: "1.0 ~ 2.0m" },
  { threshold: 2.0, color: "#ef472d", text: "≥2米", rangeText: "≥ 2.0m" },
];

/**
 * 默认气象风速经典分级与配色映射表 (单位: 米/秒，对齐蒲福风级)
 */
export const DEFAULT_WIND_LEVELS = [
  { threshold: 1.6, color: "#9ecae1", text: "1.6 - 3.3m/s (2级 轻风)" },
  { threshold: 3.4, color: "#6baed6", text: "3.4 - 5.4m/s (3级 微风)" },
  { threshold: 5.5, color: "#74c476", text: "5.5 - 7.9m/s (4级 和风)" },
  { threshold: 8.0, color: "#a1d99b", text: "8.0 - 10.7m/s (5级 劲风)" },
  { threshold: 10.8, color: "#fed976", text: "10.8 - 13.8m/s (6级 强风)" },
  { threshold: 13.9, color: "#feb24c", text: "13.9 - 17.1m/s (7级 疾风)" },
  { threshold: 17.2, color: "#f03b20", text: "17.2 - 20.7m/s (8级 大风)" },
  { threshold: 20.8, color: "#bd0026", text: "20.8m/s+ (9级+ 烈风)" },
];

/**
 * 拉普拉斯空间松弛滤波 (Laplacian Relaxation)
 * 在不增加任何顶点的前提下，通过几何中点弹性模型抚平网格阶梯与锯齿
 *
 * @param {Array<Array<number>>} ring 闭合坐标环
 * @param {number} passes 松弛轮数
 * @param {number} alpha 松弛阻尼系数 (0 ~ 1)
 */
function lapRelaxRing(ring, passes = 1, alpha = 0.4) {
  if (!ring || ring.length < 4 || passes <= 0) return ring;
  const len = ring.length - 1; // 排除末尾重复闭合点
  let current = ring.slice(0, len);

  for (let p = 0; p < passes; p++) {
    const next = new Array(len);
    for (let i = 0; i < len; i++) {
      const prev = current[(i - 1 + len) % len];
      const curr = current[i];
      const nxt = current[(i + 1) % len];
      // 计算前后邻居几何中点
      const avgX = (prev[0] + nxt[0]) * 0.5;
      const avgY = (prev[1] + nxt[1]) * 0.5;
      // 沿中点方向弹性收拢
      next[i] = [
        curr[0] + alpha * (avgX - curr[0]),
        curr[1] + alpha * (avgY - curr[1]),
      ];
    }
    current = next;
  }
  // 首尾重新闭合
  current.push([current[0][0], current[0][1]]);
  return current;
}

/**
 * 单轮 Chaikin 割角细分 (Corner Cutting Subdivision)
 * 提升局部曲线采样密度
 */
function chaikinSubdivideStep(ring) {
  if (!ring || ring.length < 4) return ring;
  const len = ring.length - 1;
  const next = [];
  for (let i = 0; i < len; i++) {
    const p0 = ring[i];
    const p1 = ring[i + 1];
    next.push([0.75 * p0[0] + 0.25 * p1[0], 0.75 * p0[1] + 0.25 * p1[1]]);
    next.push([0.25 * p0[0] + 0.75 * p1[0], 0.25 * p0[1] + 0.75 * p1[1]]);
  }
  next.push([next[0][0], next[0][1]]);
  return next;
}

/**
 * 高阶多边形复合平滑算法 (支持 0 ~ 10 级无爆炸平滑)
 * 结合拉普拉斯锯齿抚平与自适应割角细分，将离散网格台阶转化为极其圆润饱满的自然等值面
 * 
 * @param {Array<Array<number>>} ring 闭合多边形坐标环 [[lng, lat], ...]
 * @param {number} level 平滑等级 (0: 原始折线, 1~10: 平滑度逐步递增)
 * @returns {Array<Array<number>>} 平滑后的坐标环
 */
export function chaikinSmoothRing(ring, level = 5) {
  if (!ring || ring.length < 4 || level <= 0) {
    return ring;
  }

  // 限制 level 范围在 0 ~ 10
  const lvl = Math.min(Math.max(Math.round(level), 0), 10);
  if (lvl === 0) return ring;

  let current = ring;

  // 阶段 1: 消除原始网格阶梯台阶 (拉普拉斯空间松弛，零顶点膨胀)
  // 随着等级提升，松弛轮数成比例增加 (1级跑2轮，10级跑18轮)
  const lapPasses = Math.min(lvl * 2, 18);
  current = lapRelaxRing(current, lapPasses, 0.42);

  // 阶段 2: 自适应割角采样细分 (增加曲率密度，点数上限受控)
  const maxChaikinSteps = lvl >= 4 ? 2 : 1;
  for (let s = 0; s < maxChaikinSteps; s++) {
    // 安全熔断保护：若当前环顶点已超过 1000 点，停止继续翻倍
    if (current.length < 1000) {
      current = chaikinSubdivideStep(current);
    }
  }

  // 阶段 3: 高平滑等级终态微松弛 (去除细分产生的次级微折角)
  if (lvl >= 6) {
    const postPasses = Math.min(lvl - 4, 6);
    current = lapRelaxRing(current, postPasses, 0.32);
  }

  return current;
}

/**
 * 将网格数据现场转换为等值面 GeoJSON FeatureCollection
 * 
 * @param {Object} options 配置项
 * @param {Float32Array|Float64Array|Array<number>} options.data 网格数值数组 (长度为 width * height)
 * @param {number} options.width 网格列数 (nx, 例如 221)
 * @param {number} options.height 网格行数 (ny, 例如 141)
 * @param {Array<Array<number>>} options.bounds 经纬度地理范围 [[南纬, 西经], [北纬, 东经]]
 * @param {Array<Object>} [options.levels] 等值面分级规则数组，默认 DEFAULT_WAVE_LEVELS
 * @param {number} [options.smoothIterations=5] 复合平滑等级 (0~10，默认等级5)
 * @returns {Object} { geojson, costMs, featureCount, polygonCount }
 */
export function gridToIsosurfaceGeoJSON(options) {
  const {
    data,
    width,
    height,
    bounds = [
      [15.0, 105.0],
      [25.5, 121.5],
    ],
    levels = DEFAULT_WAVE_LEVELS,
    smoothIterations = 5,
  } = options;

  if (!data || width <= 0 || height <= 0) {
    return {
      geojson: { type: "FeatureCollection", features: [] },
      costMs: 0,
      featureCount: 0,
      polygonCount: 0,
    };
  }

  const tStart = performance.now();

  const minLat = bounds[0][0]; // 15.0
  const minLng = bounds[0][1]; // 105.0
  const maxLat = bounds[1][0]; // 25.5
  const maxLng = bounds[1][1]; // 121.5

  const dx = (maxLng - minLng) / (width - 1);
  const dy = (maxLat - minLat) / (height - 1);

  // 1. 整理阈值列表
  const thresholds = levels.map((l) => l.threshold);

  // 2. 将数据中的 null / undefined / NaN 严格保留为 NaN，绝不误设为 0 (严格区分没数据与数据是0)
  const cleanValues = new Float64Array(width * height);
  for (let i = 0; i < data.length; i++) {
    const val = data[i];
    cleanValues[i] = typeof val === "number" && !isNaN(val) ? val : NaN;
  }

  // 3. 执行 d3-contour Marching Squares 算法
  const contourGen = contours()
    .size([width, height])
    .thresholds(thresholds)
    .smooth(true); // d3 内部线性插值对齐边界

  const rawContours = contourGen(cleanValues);

  // 4. 将网格像素坐标 (x, y) 投影至实际地理经纬度 (lng, lat)，并执行 Chaikin 割角平滑
  const features = [];
  let totalPolys = 0;

  for (let cIdx = 0; cIdx < rawContours.length; cIdx++) {
    const contour = rawContours[cIdx];
    const val = contour.value;
    const levelMeta = levels.find((l) => l.threshold === val) || {
      color: "#1a90ff",
      text: `${val}m`,
      rangeText: `${val}m`,
    };

    // 变换坐标
    const mappedCoordinates = [];

    for (let p = 0; p < contour.coordinates.length; p++) {
      const polygonRings = contour.coordinates[p];
      const mappedPolygon = [];

      for (let r = 0; r < polygonRings.length; r++) {
        const ring = polygonRings[r];
        if (ring.length < 3) continue;

        // 局部像素坐标转 WGS84 经纬度
        // 注意: y=0 对应北端 maxLat，y 递增对应纬度递减 (从北向南)
        const geoRing = new Array(ring.length);
        for (let ptIdx = 0; ptIdx < ring.length; ptIdx++) {
          const pt = ring[ptIdx];
          const lng = minLng + pt[0] * dx;
          const lat = maxLat - pt[1] * dy;
          geoRing[ptIdx] = [
            Math.round(lng * 10000) / 10000,
            Math.round(lat * 10000) / 10000,
          ];
        }

        // Chaikin 割角平滑
        const smoothedRing =
          smoothIterations > 0
            ? chaikinSmoothRing(geoRing, smoothIterations)
            : geoRing;

        mappedPolygon.push(smoothedRing);
      }

      if (mappedPolygon.length > 0) {
        mappedCoordinates.push(mappedPolygon);
        totalPolys++;
      }
    }

    if (mappedCoordinates.length > 0) {
      features.push({
        type: "Feature",
        properties: {
          hvalue: val,
          color: levelMeta.color,
          fillColor: levelMeta.color,
          levelText: levelMeta.text,
          rangeText: levelMeta.rangeText || levelMeta.text,
          polygonCount: mappedCoordinates.length,
        },
        geometry: {
          type: "MultiPolygon",
          coordinates: mappedCoordinates,
        },
      });
    }
  }

  const costMs = Math.round((performance.now() - tStart) * 100) / 100;

  return {
    geojson: {
      type: "FeatureCollection",
      features,
    },
    costMs,
    featureCount: features.length,
    polygonCount: totalPolys,
  };
}
