/**
 * nhhyyb.js
 * 深圳预报室 (szybs:test) 水动力精细流场 WMS 动态服务接口与预设方案
 * 标准 URL: nhhyyb/v2/api/v1/mapservice/wms/eds/szybs:test
 */

// 深圳预报室 (szybs) 与大亚湾核电厂 (dywhdz) WMS 服务基地址
const WMS_BASE_PREFIX = "http://121.33.201.245:9909/nhhyybv2/api/v1/mapservice/wms/eds";

// 内网网关自动获取 Token 接口地址
export const TOKEN_GATEWAY_URL = "http://192.168.2.12:40142/service-api/api/v1/nhhyyb/token";

/// 备用 Token（若网关离线时兜底使用，默认对齐用户测试 Token）
export const FALLBACK_TOKEN = "2107_ajxt19970ZF280";
export const STANDARD_TOKEN = FALLBACK_TOKEN;

let cachedToken = "";
let isManualToken = false;

/**
 * 实时获取当前有效的访问 Token
 * 优先从内网实时网关拉取最新活跃 Token，保证永不过期
 * @param {boolean} forceRefresh 是否强制刷新
 */
export async function getNhhyybToken(forceRefresh = false) {
  // 如果用户在界面上主动手动输入了 Token，且没有强制要求从网关刷新，则尊重用户的输入
  if (isManualToken && cachedToken && !forceRefresh) {
    return cachedToken;
  }

  if (cachedToken && !forceRefresh) {
    return cachedToken;
  }

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 6000);
    const resp = await fetch(TOKEN_GATEWAY_URL, {
      signal: controller.signal,
      headers: {
        accept: "*/*",
      },
    });
    clearTimeout(timer);

    if (resp.ok) {
      const liveToken = (await resp.text()).trim();
      if (liveToken) {
        cachedToken = liveToken;
        isManualToken = false;
        console.log("[nhhyyb] 成功从网关实时获取最新 Token:", liveToken);
        return liveToken;
      }
    }
  } catch (err) {
    console.warn("[nhhyyb] 从网关获取实时 Token 失败，使用备用 Token:", err.message);
  }

  return cachedToken || FALLBACK_TOKEN;
}

/**
 * 手动覆盖设置 Token
 */
export function setNhhyybToken(token) {
  if (token) {
    cachedToken = token.trim();
    isManualToken = true;
    console.log("[nhhyyb] 用户手动指定并锁定 Token:", cachedToken);
  }
}

/**
 * 恢复自动从网关拉取 Token 机制
 */
export function resetToAutoToken() {
  isManualToken = false;
  cachedToken = "";
  console.log("[nhhyyb] 已重置为网关自动获取模式");
}

/**
 * 根据 Token 特征与配置自动判断匹配的 WMS 专属服务名
 * - 103_ 开头 -> szybs:test (深圳预报室用户专属)
 * - 2107_ 开头 -> dywhdz:test (大亚湾核电厂用户专属)
 * - 默认优先使用 dywhdz:test 配合网关 Token
 */
export function resolveServiceName(token, explicitServiceName) {
  if (explicitServiceName) {
    return explicitServiceName;
  }
  const tok = token || cachedToken || FALLBACK_TOKEN;
  if (tok.startsWith("103_")) {
    return "szybs:test";
  }
  return "dywhdz:test";
}

/**
 * 大亚湾核电厂精细流场测试数据配置 (以用户指定的最新测试 URL 为准)
 * 服务: dywhdz:test
 * BBOX: 114.542584,22.587482,114.591236,22.614432
 * 步长: XInterval=0.0002, YInterval=0.0002
 * LAYERS=6349, zlayer=1, time=2026-09-18T15:00:00 (时间固定不动)
 */
export const STANDARD_FLOW_CONFIG = {
  id: "standard_fine_flow",
  name: "大亚湾水动力精细流场测试 (LAYERS:6349)",
  tag: "0.0002° · zlayer=1",
  desc: "大亚湾水动力精细流场测试数据，步长 0.0002°，LAYERS=6349，时间 2026-09-18T15:00:00",
  serviceName: "dywhdz:test",
  bBox: "114.542584,22.587482,114.591236,22.614432",
  xInterval: 0.0002,
  yInterval: 0.0002,
  width: 1024,
  height: 1024,
  layers: "6349",
  shoreInterpolation: false,
  zlayer: 1,
  time: "2026-09-18T15:00:00",
  token: "2107_ajxt19970ZF280",
  resolutionMeters: "步长 0.0002° (约 20 米)",
  defaultZoom: 14,
  center: [22.6010, 114.5669],
};

/**
 * 严格按照标准格式构造 WMS GetData 请求完整 URL
 * 目标格式:
 * nhhyyb/v2/api/v1/mapservice/wms/eds/{serviceName}?token=...&zlayer=1&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetData&FORMAT=image/png&TRANSPARENT=true&TILED=false&CRS=EPSG:4326&STYLES=&BBOX=...&WIDTH=1024&HEIGHT=1024&XInterval=...&YInterval=...&ShoreInterpolation=false&LAYERS=6349&time=...
 */
export function buildWmsFlowUrl(config = {}, token) {
  const effectiveToken = token || cachedToken || FALLBACK_TOKEN;
  const serviceName = resolveServiceName(effectiveToken, config.serviceName);

  const {
    bBox = "114.51595056870924,22.57911480200613,114.61902015085948,22.62251591243225",
    xInterval = 0.00010065388881859427,
    yInterval = 0.0001,
    width = 1024,
    height = 1024,
    time,
    layers = "6349",
    zlayer = 1,
    zLayer,
    shoreInterpolation = false,
    format = "image/png",
    crs = "EPSG:4326",
    service = "WMS",
    version = "1.3.0",
    request = "GetData",
    transparent = "true",
    tiled = "false",
    styles = "",
  } = config;

  const params = new URLSearchParams();
  params.set("token", effectiveToken);

  // 兼容大小写 zlayer / zLayer
  const zVal = zlayer !== undefined ? zlayer : zLayer;
  if (zVal !== undefined && zVal !== null && zVal !== "") {
    params.set("zlayer", String(zVal));
  }

  params.set("SERVICE", service);
  params.set("VERSION", version);
  params.set("REQUEST", request);
  params.set("FORMAT", format);
  params.set("TRANSPARENT", String(transparent));
  params.set("TILED", String(tiled));
  params.set("CRS", crs);
  params.set("STYLES", styles);
  params.set("BBOX", String(bBox));
  params.set("WIDTH", String(width));
  params.set("HEIGHT", String(height));
  params.set("XInterval", String(xInterval));
  params.set("YInterval", String(yInterval));
  params.set("ShoreInterpolation", String(shoreInterpolation));
  params.set("LAYERS", String(layers));

  // 时间参数
  const effectiveTime = time || getLatestAvailableForecastTime();
  params.set("time", String(effectiveTime));

  return `${WMS_BASE_PREFIX}/${serviceName}?${params.toString()}`;
}

/**
 * 格式化 Date 对象为 WMS 标准时间字符串 (YYYY-MM-DDTHH:00:00)
 */
export function formatWmsTime(d) {
  const yyyy = d.getFullYear();
  const MM = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  const HH = String(d.getHours()).padStart(2, "0");
  return `${yyyy}-${MM}-${dd}T${HH}:00:00`;
}

/**
 * 动态获取当前系统时刻向下对齐的最新可用预报整点
 * 例如当前是 09:25，向下取整为 08:00（最近已完成预报落库的整点时次）
 */
export function getLatestAvailableForecastTime() {
  const now = new Date();
  // 预报一般延迟 1 小时完成落库计算，因此取 now 减去 1 小时的整点
  const latestDate = new Date(now.getTime() - 3600 * 1000);
  latestDate.setMinutes(0, 0, 0);
  return formatWmsTime(latestDate);
}

/**
 * 动态构造 24 小时水动力整点时间轴（从昨天的 17:00 到今天的 17:00，共 25 个整点时次）
 * 根据当前日期实时动态锚定
 */
export function buildDynamicHourlyTimeline() {
  const now = new Date();
  // 昨天的 17:00:00
  const yesterday17 = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 17, 0, 0);

  const points = [];
  for (let i = 0; i <= 24; i++) {
    const cur = new Date(yesterday17.getTime() + i * 3600 * 1000);
    const timeIso = formatWmsTime(cur);
    const MM = String(cur.getMonth() + 1).padStart(2, "0");
    const dd = String(cur.getDate()).padStart(2, "0");
    const HH = String(cur.getHours()).padStart(2, "0");
    const label = `${MM}-${dd} ${HH}:00`;
    const shortLabel = `${HH}:00`;

    points.push({
      index: i,
      time: timeIso,
      label,
      shortLabel,
      isDayStart: HH === "00",
      dateObj: cur,
    });
  }
  return points;
}

/**
 * 获取当前时刻在动态时间轴中的最接近索引
 */
export function getDefaultTimelineIndex(timelineList) {
  if (!timelineList || timelineList.length === 0) return 0;
  const targetTime = getLatestAvailableForecastTime();
  const foundIdx = timelineList.findIndex((pt) => pt.time === targetTime);
  if (foundIdx >= 0) return foundIdx;

  // 若超出范围或未找到，查找时间差最小的那个点
  const nowMs = new Date().getTime() - 3600 * 1000;
  let closestIdx = 0;
  let minDiff = Infinity;
  timelineList.forEach((pt, idx) => {
    const diff = Math.abs(new Date(pt.time).getTime() - nowMs);
    if (diff < minDiff) {
      minDiff = diff;
      closestIdx = idx;
    }
  });
  return closestIdx;
}



/**
 * 宏观大区域南海/广东海域数值流场配置 (dywhdz:test)
 * 范围: [110, 16, 120, 26], layers: 1761
 */
export const MACRO_FLOW_CONFIG = {
  id: "macro_flow",
  serviceName: "dywhdz:test",
  name: "南海/大湾区宏观大区域流场 (LAYERS:1761)",
  tag: "宏观 · 区域尺度",
  layers: "1761",
  token: "2107_wlph54693AY559",
  bBoxRange: [110.0, 16.0, 120.0, 26.0], // [minLng, minLat, maxLng, maxLat]
  defaultCenter: [21.5, 115.0],
  defaultZoom: 7,
  zlayer: 1,
};

/**
 * 深圳预报室大亚湾微观核心区高精流场配置 (szybs:test)
 * 范围: [114.51595, 22.57911, 114.61902, 22.62252], 10米步长, layers: 6349
 */
export const FINE_FLOW_CONFIG = {
  id: "fine_flow",
  serviceName: "szybs:test",
  name: "大亚湾核心区精细流场 (LAYERS:6349 · 10m网格)",
  tag: "微观 · 10m精细网格",
  layers: "6349",
  token: "103_zzvq43806RS933",
  bBoxRange: [114.51595056870924, 22.57911480200613, 114.61902015085948, 22.62251591243225],
  xInterval: 0.00010065388881859427,
  yInterval: 0.0001,
  width: 1024,
  height: 1024,
  defaultCenter: [22.6008, 114.5675],
  defaultZoom: 13,
  zlayer: 1,
};

/**
 * 判断两个 BBOX [minLng, minLat, maxLng, maxLat] 是否相交
 */
export function isBBoxIntersect(boxA, boxB) {
  if (!boxA || !boxB) return false;
  return !(
    boxA[2] < boxB[0] ||
    boxA[0] > boxB[2] ||
    boxA[3] < boxB[1] ||
    boxA[1] > boxB[3]
  );
}

/**
 * 计算经纬度 1 度在对应纬度下的地面距离（米）
 */
export function degreeToMeters(latDegree = 22.5) {
  const latRad = (latDegree * Math.PI) / 180;
  const metersPerLng = 111320 * Math.cos(latRad);
  const metersPerLat = 110574;
  return { metersPerLng, metersPerLat };
}

/**
 * 多尺度自适应流场调度计算器
 * 根据当前视口经纬度范围、缩放等级(Zoom)以及容器尺寸，智能选择宏观/微观模型并动态计算最优步长
 * @param {Object} options
 * @param {L.LatLngBounds|Array} options.bounds 地图视口经纬度范围
 * @param {Object} options.viewSize { width: number, height: number } 地图容器像素大小
 * @param {number} options.zoom 当前地图缩放级别
/**
 * 根据中心点和辐射半径（公里）精准计算经纬度包围盒 [minLng, minLat, maxLng, maxLat]
 * @param {number} centerLng 中心点经度
 * @param {number} centerLat 中心点纬度
 * @param {number} radiusKm 辐射半径（默认 8 公里）
 */
export function calcBBoxFromCenterRadius(centerLng, centerLat, radiusKm = 8) {
  const latRad = (centerLat * Math.PI) / 180;
  const dLat = radiusKm / 110.574;
  const dLng = radiusKm / (111.32 * Math.cos(latRad));
  return [
    Number((centerLng - dLng).toFixed(6)),
    Number((centerLat - dLat).toFixed(6)),
    Number((centerLng + dLng).toFixed(6)),
    Number((centerLat + dLat).toFixed(6)),
  ];
}

/**
 * 构建 1 公里精细度宏观底图流场请求（适用 Zoom < 15）
 */
export function buildMacro1kmFlowRequest({
  bounds,
  time,
  customToken = "",
}) {
  let minLng, minLat, maxLng, maxLat;
  if (bounds && typeof bounds.getWest === "function") {
    minLng = bounds.getWest();
    minLat = bounds.getSouth();
    maxLng = bounds.getEast();
    maxLat = bounds.getNorth();
  } else if (Array.isArray(bounds) && bounds.length === 4) {
    [minLng, minLat, maxLng, maxLat] = bounds;
  } else {
    [minLng, minLat, maxLng, maxLat] = MACRO_FLOW_CONFIG.bBoxRange;
  }

  // 裁剪限制在南海/广东有效海域定义域 [110, 16, 120, 26] 内
  const [mMinLng, mMinLat, mMaxLng, mMaxLat] = MACRO_FLOW_CONFIG.bBoxRange;
  const bufferLng = (maxLng - minLng) * 0.05;
  const bufferLat = (maxLat - minLat) * 0.05;
  const clampedMinLng = Math.max(mMinLng, minLng - bufferLng);
  const clampedMaxLng = Math.min(mMaxLng, maxLng + bufferLng);
  const clampedMinLat = Math.max(mMinLat, minLat - bufferLat);
  const clampedMaxLat = Math.min(mMaxLat, maxLat + bufferLat);

  const bBoxStr = `${clampedMinLng.toFixed(4)},${clampedMinLat.toFixed(4)},${clampedMaxLng.toFixed(4)},${clampedMaxLat.toFixed(4)}`;
  const spanLng = clampedMaxLng - clampedMinLng;
  const spanLat = clampedMaxLat - clampedMinLat;

  // 1公里精细度 (1km ≈ 0.009°)
  const xInterval = 0.009;
  const yInterval = 0.009;
  const reqWidth = Math.max(300, Math.min(Math.round(spanLng / xInterval), 1280));
  const reqHeight = Math.max(200, Math.min(Math.round(spanLat / yInterval), 800));

  const effectiveToken = customToken || cachedToken || FALLBACK_TOKEN;
  const serviceName = effectiveToken.startsWith("103_") ? "szybs:test" : "dywhdz:test";
  const layers = effectiveToken.startsWith("103_") ? "6349" : "1761";
  const effectiveTime = time || getLatestAvailableForecastTime();

  const url = buildWmsFlowUrl({
    serviceName,
    layers,
    bBox: bBoxStr,
    xInterval,
    yInterval,
    width: reqWidth,
    height: reqHeight,
    time: effectiveTime,
    zlayer: 1,
    shoreInterpolation: false,
  }, effectiveToken);

  return {
    url,
    modelType: "macro",
    modelTitle: "宏观流场底图 (1km精细度)",
    serviceName,
    layers,
    token: effectiveToken,
    bBox: bBoxStr,
    bBoxRange: [clampedMinLng, clampedMinLat, clampedMaxLng, clampedMaxLat],
    xInterval,
    yInterval,
    width: reqWidth,
    height: reqHeight,
    time: effectiveTime,
    approxResolutionMeters: "约 1 公里",
  };
}

/**
 * 构建中心点向外辐射 8 公里的 10 米超高精流场叠加请求（适用 Zoom >= 15）
 */
export function buildFine8kmRadiationRequest({
  centerLng,
  centerLat,
  radiusKm = 8,
  time,
  customToken = "",
}) {
  const [minLng, minLat, maxLng, maxLat] = calcBBoxFromCenterRadius(centerLng, centerLat, radiusKm);
  const bBoxStr = `${minLng.toFixed(6)},${minLat.toFixed(6)},${maxLng.toFixed(6)},${maxLat.toFixed(6)}`;

  // 10米精细度 (10m ≈ 0.0001°)
  const xInterval = 0.0001;
  const yInterval = 0.0001;
  const reqWidth = 1024;
  const reqHeight = 1024;

  const effectiveToken = customToken || cachedToken || FALLBACK_TOKEN;
  const serviceName = effectiveToken.startsWith("103_") ? "szybs:test" : "dywhdz:test";
  const layers = effectiveToken.startsWith("103_") ? "6349" : "1761";
  const effectiveTime = time || getLatestAvailableForecastTime();

  const url = buildWmsFlowUrl({
    serviceName,
    layers,
    bBox: bBoxStr,
    xInterval,
    yInterval,
    width: reqWidth,
    height: reqHeight,
    time: effectiveTime,
    zlayer: 1,
    shoreInterpolation: false,
  }, effectiveToken);

  return {
    url,
    modelType: "fine",
    modelTitle: `中心辐射${radiusKm}km高精叠加 (10m网格)`,
    serviceName,
    layers,
    token: effectiveToken,
    bBox: bBoxStr,
    bBoxRange: [minLng, minLat, maxLng, maxLat],
    xInterval,
    yInterval,
    width: reqWidth,
    height: reqHeight,
    time: effectiveTime,
    radiusKm,
    approxResolutionMeters: "约 10 米",
  };
}

/**
 * 核心调度决策器：构建自适应流场 WMS 请求信息
 * @param {Object} options
 * @param {L.LatLngBounds|Array} options.bounds 地图视口经纬度范围
 * @param {Object} options.viewSize { width: number, height: number } 地图容器像素大小
 * @param {number} options.zoom 当前地图缩放级别
 * @param {string} options.time 预报时间 ISO 字符串
 * @param {string} options.forceModel 强制模型模式: 'auto' | 'macro' | 'fine'
 * @param {string} options.customToken 用户手动指定 Token
 */
export function buildAdaptiveFlowRequest({
  bounds,
  viewSize = { width: 1024, height: 768 },
  zoom = 10,
  time,
  forceModel = "auto",
  customToken = "",
}) {
  let minLng, minLat, maxLng, maxLat;
  if (bounds && typeof bounds.getWest === "function") {
    minLng = bounds.getWest();
    minLat = bounds.getSouth();
    maxLng = bounds.getEast();
    maxLat = bounds.getNorth();
  } else if (Array.isArray(bounds) && bounds.length === 4) {
    [minLng, minLat, maxLng, maxLat] = bounds;
  } else {
    [minLng, minLat, maxLng, maxLat] = MACRO_FLOW_CONFIG.bBoxRange;
  }

  const [mMinLng, mMinLat, mMaxLng, mMaxLat] = MACRO_FLOW_CONFIG.bBoxRange;
  const bufferLng = (maxLng - minLng) * 0.05;
  const bufferLat = (maxLat - minLat) * 0.05;
  const clampedMinLng = Math.max(mMinLng, minLng - bufferLng);
  const clampedMaxLng = Math.min(mMaxLng, maxLng + bufferLng);
  const clampedMinLat = Math.max(mMinLat, minLat - bufferLat);
  const clampedMaxLat = Math.min(mMaxLat, maxLat + bufferLat);

  const bBoxStr = `${clampedMinLng.toFixed(4)},${clampedMinLat.toFixed(4)},${clampedMaxLng.toFixed(4)},${clampedMaxLat.toFixed(4)}`;
  const spanLng = clampedMaxLng - clampedMinLng;
  const spanLat = clampedMaxLat - clampedMinLat;

  const baseW = Math.max(400, Math.min(viewSize.width || 1024, 1280));
  const baseH = Math.max(300, Math.min(viewSize.height || 720, 800));
  const reqWidth = Math.round(baseW);
  const reqHeight = Math.round(baseH);

  let xInterval, yInterval, approxResolutionMeters;
  if (zoom >= 15) {
    xInterval = 0.0001;
    yInterval = 0.0001;
    approxResolutionMeters = "约 10 米 (中心辐射高精)";
  } else {
    xInterval = 0.009;
    yInterval = 0.009;
    approxResolutionMeters = "约 1 公里 (宏观流场)";
  }

  const effectiveToken = customToken || cachedToken || FALLBACK_TOKEN;
  const serviceName = effectiveToken.startsWith("103_") ? "szybs:test" : "dywhdz:test";
  const layers = effectiveToken.startsWith("103_") ? "6349" : "1761";
  const effectiveTime = time || getLatestAvailableForecastTime();

  const finalUrl = buildWmsFlowUrl({
    serviceName,
    layers,
    bBox: bBoxStr,
    xInterval,
    yInterval,
    width: reqWidth,
    height: reqHeight,
    time: effectiveTime,
    zlayer: 1,
    shoreInterpolation: false,
  }, effectiveToken);

  return {
    url: finalUrl,
    modelType: zoom >= 15 ? "fine" : "macro",
    modelTitle: zoom >= 15 ? "微观高精 (10m)" : "宏观流场 (1km)",
    serviceName,
    layers,
    token: effectiveToken,
    bBox: bBoxStr,
    bBoxRange: [clampedMinLng, clampedMinLat, clampedMaxLng, clampedMaxLat],
    xInterval,
    yInterval,
    width: reqWidth,
    height: reqHeight,
    time: effectiveTime,
    approxResolutionMeters,
    zoom,
  };
}

/**
 * =========================================================================
 * 大亚湾原项目官方视口动态自适应流场服务规则 (来自 HQXS2024014-大亚湾)
 * =========================================================================
 */
export const ADAPTIVE_FLOW_RULES = {
  // 缩放分级阈值：小于14使用1km精度底图，大于等于14触发动态视口切片
  ZOOM_THRESHOLD: 14,

  // zoom === 14 分级配置：横向/纵向各辐射 10km (总跨度 20km)，100米精度 (0.001)
  ZOOM_14_CONFIG: {
    RADIUS_LNG_KM: 10,
    RADIUS_LAT_KM: 10,
    INTERVAL: 0.001,
    DESC: "100m中精/辐射10km",
    LABEL: "中精 100m",
    SHAFT_ZOOM_OFFSET: -9,
    SHAFT_SIZE: 16,
    NUMBER_ZOOM_OFFSET: -10,
  },

  // zoom === 15 分级配置：横向/纵向各辐射 5km (总跨度 10km)，50米精度 (0.0005)
  ZOOM_15_CONFIG: {
    RADIUS_LNG_KM: 5,
    RADIUS_LAT_KM: 5,
    INTERVAL: 0.0005,
    DESC: "50m精度/辐射5km",
    LABEL: "高精 50m",
    SHAFT_ZOOM_OFFSET: -10,
    SHAFT_SIZE: 16,
    NUMBER_ZOOM_OFFSET: -11,
  },

  // zoom >= 16 分级配置：横向辐射 2.5km (跨度5km)，纵向辐射 1.5km (跨度3km)，20米超高精 (0.0002)
  ZOOM_16_CONFIG: {
    RADIUS_LNG_KM: 2.5,
    RADIUS_LAT_KM: 1.5,
    INTERVAL: 0.0002,
    DESC: "20m高精/横2.5km纵1.5km",
    LABEL: "超高精 20m",
    SHAFT_ZOOM_OFFSET: -11,
    SHAFT_SIZE: 16,
    NUMBER_ZOOM_OFFSET: -12,
  },

  RADIUS_KM: 2.5,
  FINE_INTERVAL: 0.0001,
  MACRO_INTERVAL: 0.001,
  Z_LAYER: 1,
};

/**
 * 根据缩放层级获取精细流场的自适应辐射范围、采样精度与稀疏显示步长 (100% 对齐大亚湾原工程)
 */
export function getFlowParamsByZoom(zoom) {
  const z = Number(zoom);
  if (z === 14) {
    return {
      radiusKm: {
        lng: ADAPTIVE_FLOW_RULES.ZOOM_14_CONFIG.RADIUS_LNG_KM,
        lat: ADAPTIVE_FLOW_RULES.ZOOM_14_CONFIG.RADIUS_LAT_KM,
      },
      interval: ADAPTIVE_FLOW_RULES.ZOOM_14_CONFIG.INTERVAL,
      desc: ADAPTIVE_FLOW_RULES.ZOOM_14_CONFIG.DESC,
      label: ADAPTIVE_FLOW_RULES.ZOOM_14_CONFIG.LABEL,
      shaftZoomOffset: ADAPTIVE_FLOW_RULES.ZOOM_14_CONFIG.SHAFT_ZOOM_OFFSET,
      shaftSize: ADAPTIVE_FLOW_RULES.ZOOM_14_CONFIG.SHAFT_SIZE,
      numberZoomOffset: ADAPTIVE_FLOW_RULES.ZOOM_14_CONFIG.NUMBER_ZOOM_OFFSET,
    };
  }
  if (z === 15) {
    return {
      radiusKm: {
        lng: ADAPTIVE_FLOW_RULES.ZOOM_15_CONFIG.RADIUS_LNG_KM,
        lat: ADAPTIVE_FLOW_RULES.ZOOM_15_CONFIG.RADIUS_LAT_KM,
      },
      interval: ADAPTIVE_FLOW_RULES.ZOOM_15_CONFIG.INTERVAL,
      desc: ADAPTIVE_FLOW_RULES.ZOOM_15_CONFIG.DESC,
      label: ADAPTIVE_FLOW_RULES.ZOOM_15_CONFIG.LABEL,
      shaftZoomOffset: ADAPTIVE_FLOW_RULES.ZOOM_15_CONFIG.SHAFT_ZOOM_OFFSET,
      shaftSize: ADAPTIVE_FLOW_RULES.ZOOM_15_CONFIG.SHAFT_SIZE,
      numberZoomOffset: ADAPTIVE_FLOW_RULES.ZOOM_15_CONFIG.NUMBER_ZOOM_OFFSET,
    };
  }
  // zoom >= 16
  return {
    radiusKm: {
      lng: ADAPTIVE_FLOW_RULES.ZOOM_16_CONFIG.RADIUS_LNG_KM,
      lat: ADAPTIVE_FLOW_RULES.ZOOM_16_CONFIG.RADIUS_LAT_KM,
    },
    interval: ADAPTIVE_FLOW_RULES.ZOOM_16_CONFIG.INTERVAL,
    desc: ADAPTIVE_FLOW_RULES.ZOOM_16_CONFIG.DESC,
    label: ADAPTIVE_FLOW_RULES.ZOOM_16_CONFIG.LABEL,
    shaftZoomOffset: ADAPTIVE_FLOW_RULES.ZOOM_16_CONFIG.SHAFT_ZOOM_OFFSET,
    shaftSize: ADAPTIVE_FLOW_RULES.ZOOM_16_CONFIG.SHAFT_SIZE,
    numberZoomOffset: ADAPTIVE_FLOW_RULES.ZOOM_16_CONFIG.NUMBER_ZOOM_OFFSET,
  };
}

/**
 * 判断缩放层级是否达到高精切片触发阈值 (zoom >= 14)
 */
export function isFineFlowZoom(zoom) {
  return Number(zoom) >= ADAPTIVE_FLOW_RULES.ZOOM_THRESHOLD;
}

/**
 * 根据中心点与横纵辐射半径精确计算地理包围盒 (大亚湾原工程同款精准余弦公式)
 */
export function calculateBboxFromCenter(center, radiusKm) {
  const radiusLng = typeof radiusKm === "number" ? radiusKm : (radiusKm ? radiusKm.lng : ADAPTIVE_FLOW_RULES.RADIUS_KM);
  const radiusLat = typeof radiusKm === "number" ? radiusKm : (radiusKm ? radiusKm.lat : ADAPTIVE_FLOW_RULES.RADIUS_KM);

  // 纬度 1 度约为 111.32 km
  const latDelta = radiusLat / 111.32;
  // 经度 1 度距离随纬度余弦收缩
  const cosLat = Math.cos((center.lat * Math.PI) / 180);
  const lngDelta = radiusLng / (111.32 * Math.max(cosLat, 0.1));

  const minLng = Number((center.lng - lngDelta).toFixed(6));
  const maxLng = Number((center.lng + lngDelta).toFixed(6));
  const minLat = Number((center.lat - latDelta).toFixed(6));
  const maxLat = Number((center.lat + latDelta).toFixed(6));

  return {
    bboxStr: `${minLng},${minLat},${maxLng},${maxLat}`,
    minLng,
    maxLng,
    minLat,
    maxLat,
  };
}

/**
 * 高精切片防重复请求特征键 (保留 4 位小数约 11 米灵敏度)
 */
export function buildFineRequestKey(zoom, center, timeStr) {
  return `${zoom}_${center.lat.toFixed(4)}_${center.lng.toFixed(4)}_${timeStr}`;
}

/**
 * 根据地图当前中心点与缩放级别构建大亚湾原工程自适应切片请求
 */
export function buildDayaBayAdaptiveRequest({
  center,
  zoom,
  time,
  customToken = "",
}) {
  const currentZoom = Number(zoom);
  const timeStr = time || getLatestAvailableForecastTime();
  const effectiveToken = customToken || cachedToken || FALLBACK_TOKEN;
  const serviceName = resolveServiceName(effectiveToken);
  const layers = effectiveToken.startsWith("103_") ? "6349" : "1761";

  if (!isFineFlowZoom(currentZoom)) {
    return {
      isFine: false,
      zoom: currentZoom,
      label: "宏观 1km",
      desc: "全海域自然缩放 (1km 精度底图)",
      serviceName,
      layers,
      token: effectiveToken,
      time: timeStr,
    };
  }

  const flowParams = getFlowParamsByZoom(currentZoom);
  const { bboxStr, minLng, maxLng, minLat, maxLat } = calculateBboxFromCenter(center, flowParams.radiusKm);
  const width = 1024;
  const height = 1024;

  const url = buildWmsFlowUrl({
    serviceName,
    layers,
    bBox: bboxStr,
    width,
    height,
    xInterval: flowParams.interval,
    yInterval: flowParams.interval,
    shoreInterpolation: false,
    zlayer: 1,
    time: timeStr,
  }, effectiveToken);

  return {
    isFine: true,
    zoom: currentZoom,
    label: flowParams.label,
    desc: flowParams.desc,
    interval: flowParams.interval,
    radiusKm: flowParams.radiusKm,
    bboxStr,
    bBoxRange: [minLng, minLat, maxLng, maxLat],
    width,
    height,
    url,
    serviceName,
    layers,
    token: effectiveToken,
    time: timeStr,
  };
}



