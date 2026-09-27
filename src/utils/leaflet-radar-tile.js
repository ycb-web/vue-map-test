import L from "leaflet";

/**
 * Ventusky 官方 1:1 雷达反射率色阶配置
 * 对应 dBZ: 0 ~ 60+ (深蓝 -> 绿 -> 黄 -> 橙红 -> 品红 -> 纯白)
 */
export const VENTUSKY_RADAR_COLORS = [
  { dbz: 0, color: [87, 87, 87], alpha: 0, label: "0" }, // 晴空透明 (0 dBZ #575757)
  { dbz: 3, color: [87, 87, 87], alpha: 0.35, label: "3" }, // 微弱过渡
  { dbz: 6, color: [85, 82, 113], alpha: 0.65, label: "6" }, // #555271
  { dbz: 10, color: [81, 90, 149], alpha: 0.85, label: "10" }, // #515a95
  { dbz: 16, color: [70, 137, 169], alpha: 0.95, label: "16" }, // #4689a9
  { dbz: 20, color: [85, 183, 100], alpha: 1.0, label: "20" }, // #55b764
  { dbz: 26, color: [94, 194, 73], alpha: 1.0, label: "26" }, // #5ec249
  { dbz: 30, color: [160, 207, 72], alpha: 1.0, label: "30" }, // #a0cf48
  { dbz: 36, color: [200, 217, 67], alpha: 1.0, label: "36" }, // #c8d943
  { dbz: 40, color: [216, 155, 68], alpha: 1.0, label: "40" }, // #d89b44
  { dbz: 46, color: [200, 84, 94], alpha: 1.0, label: "46" }, // #c8545e
  { dbz: 50, color: [165, 41, 90], alpha: 1.0, label: "50" }, // #a5295a
  { dbz: 56, color: [123, 22, 62], alpha: 1.0, label: "56" }, // #7b163e
  { dbz: 60, color: [255, 255, 255], alpha: 1.0, label: "60" }, // #ffffff
];

/**
 * 根据反射率 dBZ 估算降水强度 (Marshall-Palmer 经典公式 Z = 200 * R^1.6)
 * @param {number} dbz
 * @returns {number} mm/h
 */
export function dbzToRainRate(dbz) {
  if (!dbz || dbz < 5) return 0;
  const z = Math.pow(10, dbz / 10);
  const r = Math.pow(z / 200, 1 / 1.6);
  return Math.round(r * 10) / 10;
}

/**
 * 获取降雨等级中文描述
 * @param {number} dbz
 */
export function getRainIntensityDesc(dbz) {
  if (!dbz || dbz < 10) return "无明显降水";
  if (dbz < 20) return "微量毛毛雨";
  if (dbz < 30) return "小雨";
  if (dbz < 40) return "中雨";
  if (dbz < 50) return "大雨到暴雨";
  return "大暴雨 / 强对流";
}

/**
 * 逆向 Ventusky 官方标准相态分类规范 (1:1 映射自 script-zh.js / w.radar.C.typed 与 jt 函数)
 * 切片数值分布: 10:雨, 30:雪, 40:雷暴, 50:冻雨, 60:冰雹, 70:雨夹雪
 * @param {number} pType 原始相态切片通道数值 (0~255)
 */
export function parsePrecipitationType(pType) {
  if (!pType || pType < 15) {
    return { code: 10, desc: "降雨", isStorm: false, isSnow: false };
  }
  // Ventusky 官方: 35 <= c < 45 为雷暴强对流 (内部代号 33)
  if (pType >= 35 && pType < 45) {
    return { code: 30, desc: "雷暴", isStorm: true, isSnow: false };
  }
  // Ventusky 官方: 15 <= c < 35 为降雪 (内部代号 65)
  if (pType >= 15 && pType < 35) {
    return { code: 40, desc: "降雪", isStorm: false, isSnow: true };
  }
  // Ventusky 官方: 45 <= c < 55 为冻雨 (内部代号 129)
  if (pType >= 45 && pType < 55) {
    return { code: 50, desc: "冻雨", isStorm: false, isSnow: false };
  }
  // Ventusky 官方: 55 <= c < 65 为冰雹
  if (pType >= 55 && pType < 65) {
    return { code: 60, desc: "冰雹", isStorm: true, isSnow: false };
  }
  // Ventusky 官方: 65 <= c 为雨夹雪/阵雨/雾 (内部代号 17)
  if (pType >= 65) {
    return { code: 70, desc: "雨夹雪", isStorm: false, isSnow: true };
  }
  return { code: 10, desc: "降雨", isStorm: false, isSnow: false };
}


/**
 * 获取最近 1 小时整点对齐的雷达数据时间戳信息 (Ventusky 官方整点 1h 间隔规范)
 * 例如 16:38 -> 16:00
 * @param {Date|number} [baseDate=new Date()]
 * @returns {Object}
 */
export function getRecentRadarTime(baseDate = new Date()) {
  const d = baseDate instanceof Date ? baseDate : new Date(baseDate);
  // 严格基于目标时刻向下对齐到过去最近的 1 小时整点（分、秒、毫秒归零）
  const targetDate = new Date(d);
  targetDate.setUTCMinutes(0, 0, 0);

  // UTC 字段 (Ventusky 文件路径与归档严格基于 UTC)
  const utcYear = targetDate.getUTCFullYear();
  const utcMonth = String(targetDate.getUTCMonth() + 1).padStart(2, "0");
  const utcDay = String(targetDate.getUTCDate()).padStart(2, "0");
  const utcHour = String(targetDate.getUTCHours()).padStart(2, "0");
  const utcMin = "00";

  // 本地字段 (客户端所在本地时间，如北京时间 UTC+8)
  const locYear = targetDate.getFullYear();
  const locMonth = String(targetDate.getMonth() + 1).padStart(2, "0");
  const locDay = String(targetDate.getDate()).padStart(2, "0");
  const locHour = String(targetDate.getHours()).padStart(2, "0");
  const locMin = "00";

  return {
    dateStr: `${utcYear}/${utcMonth}/${utcDay}`,
    hourStr: utcHour,
    minuteStr: utcMin,
    timeStr: `${utcYear}${utcMonth}${utcDay}_${utcHour}${utcMin}`,
    localStr: `${locYear}-${locMonth}-${locDay} ${locHour}:${locMin}`,
    localDateStr: `${locYear}-${locMonth}-${locDay}`,
    localTimeOnly: `${locHour}:${locMin}`,
    utcHourMin: `${utcHour}:${utcMin}`,
    utcStr: `${utcYear}-${utcMonth}-${utcDay} ${utcHour}:${utcMin} UTC`,
    timestamp: targetDate.getTime(),
  };
}

/**
 * Ventusky 官方高精切片雷达配置矩阵 (1:1 逆向自官方核心元数据)
 * 包含全球 6km 宏观/中高精网格 (WORAD)，以及东亚、欧洲、北美 2km 超高精网格
 */
export const REGIONAL_RADAR_CONFIGS = {
  worad_hres: {
    model: "worad_hres",
    name: "全球 6km (WORAD)",
    totalWidth: 5760,
    totalHeight: 2882,
    tileW: 320,
    tileH: 262,
    xMax: 18, // 0..17 (共 18 列切片，每列 20° 经度，全球全覆盖)
    yMax: 11, // 0..10 (共 11 行切片)
    bounds: { west: -180, east: 180, south: -90, north: 90 },
    center: [30.0, 105.0],
    zoom: 5,
    minRegionalZoom: 4, // 当 zoom > 4 (即 5+) 时自动激活拉取 6km 切片
  },
  earad: {
    model: "earad",
    name: "东亚 (East Asia)",
    totalWidth: 1685,
    totalHeight: 1199,
    tileW: 256,
    tileH: 265,
    xMax: 7, // 0..6 (共 35 块瓦片)
    yMax: 5, // 0..4
    bounds: { west: 102, east: 147, south: 19, north: 46 },
    center: [31.5, 117.5],
    zoom: 5,
    minRegionalZoom: 9, // 当 zoom > 9 (即 10+) 时自动激活拉取 2km 切片
  },
  eurad: {
    model: "eurad",
    name: "欧洲 (Europe)",
    totalWidth: 2750,
    totalHeight: 1647,
    tileW: 275,
    tileH: 250,
    xMax: 10, // 0..9 (共 70 块瓦片)
    yMax: 7,  // 0..6
    bounds: { west: -23.488, east: 45.012, south: 29.488, north: 70.488 },
    center: [50.0, 10.0],
    zoom: 5,
    minRegionalZoom: 9,
  },
  usrad: {
    model: "usrad",
    name: "北美 (USA)",
    totalWidth: 2699,
    totalHeight: 1589,
    tileW: 260,
    tileH: 270,
    xMax: 11, // 0..10 (共 66 块瓦片)
    yMax: 6,  // 0..5
    bounds: { west: -134.079, east: -60.8811, south: 21.12324, north: 52.60614 },
    center: [38.5, -96.5],
    zoom: 5,
    minRegionalZoom: 9,
  },
};

/**
 * Ventusky 官方 2km 超高精大区地理边界 (东亚、欧洲、北美)
 * 用于在中高缩放层级 (Zoom >= 10) 自动避让全球 6km 底图，杜绝双图层重叠叠加重影
 */
export const HIGH_RES_REGIONS = [
  { model: "earad", bounds: { west: 102, east: 147, south: 19, north: 46 } },
  { model: "eurad", bounds: { west: -23.488, east: 45.012, south: 29.488, north: 70.488 } },
  { model: "usrad", bounds: { west: -134.079, east: -60.8811, south: 21.12324, north: 52.60614 } },
];

/**
 * 校验某经纬度点是否完全落在任一 2km 高精大区地理范围内
 */
export function isPointInHighResRegion(lat, lon) {
  for (let k = 0; k < HIGH_RES_REGIONS.length; k++) {
    const b = HIGH_RES_REGIONS[k].bounds;
    if (lat >= b.south && lat <= b.north && lon >= b.west && lon <= b.east) {
      return true;
    }
  }
  return false;
}

/**
 * 校验单张 Web 墨卡托瓦片的经纬度四至是否 100% 完整落在任一高精大区内部
 */
export function isTileFullyInHighResRegion(north, south, east, west) {
  for (let k = 0; k < HIGH_RES_REGIONS.length; k++) {
    const b = HIGH_RES_REGIONS[k].bounds;
    if (south >= b.south && north <= b.north && west >= b.west && east <= b.east) {
      return true;
    }
  }
  return false;
}

/**
 * L.RadarTileLayer 天气雷达切片瓦片图层
 * 继承自 L.GridLayer，在瓦片内部完成 Web 墨卡托 -> 等经纬度重采样与双线性插值
 */
L.RadarTileLayer = (L.GridLayer ? L.GridLayer : L.Class).extend({
  options: {
    tileSize: 256,
    opacity: 0.95,
    zIndex: 400,
    minZoom: 1,
    maxZoom: 18,
    // 默认全球气象数据范围 EPSG:4326 (避免使用 Leaflet 原生保留字 options.bounds)
    dataBounds: {
      west: -180,
      east: 180,
      south: -90,
      north: 90,
    },
    rainOnly: false, // 默认全相态协同融合（普通降雨、雷暴强对流、降雪全量叠加）
    colorScale: VENTUSKY_RADAR_COLORS,
    minDbzThreshold: 0, // 过滤阈值默认为 0，全显雷达回波面场
    minRegionalZoom: 9, // 区域精细化切片触发阈值：仅当 zoom > 9 (即 10+) 时才激活 2km 局域切片，<= 9 保持宏观与 6km 视野
    maskRegionalBounds: true, // 全球 6km 底图在高精层级是否自动避让 2km 大区地理范围（杜绝两层叠加重影）
    highResMaskZoom: 9, // 当 zoom > 9 (即 10+) 且处于 2km 区域时激活避让，交由 2km 图层独占渲染
  },

  onAdd(map) {
    L.GridLayer.prototype.onAdd.call(this, map);
    this._map = map;

    if (this._isRegionalMode) {
      this._onViewportChangeHandler = () => {
        this._updateViewportTiles();
      };
      this._map.on("moveend zoomend", this._onViewportChangeHandler);
      // 图层挂载到地图后立即执行当前视口计算与按需拉取
      this._updateViewportTiles();
    }
    return this;
  },

  onRemove(map) {
    if (this._redrawTimer) {
      clearTimeout(this._redrawTimer);
      this._redrawTimer = null;
    }
    if (this._onViewportChangeHandler && this._map) {
      this._map.off("moveend zoomend", this._onViewportChangeHandler);
      this._onViewportChangeHandler = null;
    }
    this._map = null;
    L.GridLayer.prototype.onRemove.call(this, map);
    return this;
  },

  initialize(urlOrData, options) {
    const opts = Object.assign({}, options);
    // 兼容外层传入 bounds 或 dataBounds，将其统一存放在 this._dataBounds
    let dataBounds = { west: -180, east: 180, south: -90, north: 90 };
    if (opts.dataBounds) {
      dataBounds = opts.dataBounds;
    } else if (opts.bounds) {
      if (opts.bounds.west !== undefined) {
        dataBounds = opts.bounds;
        // 关键：删除自定义的 { west, east, south, north }，避免与 Leaflet GridLayer 原生 options.bounds 冲突导致 TypeError
        delete opts.bounds;
      }
    }
    this._dataBounds = dataBounds;

    L.setOptions(this, opts);
    L.GridLayer.prototype.initialize.call(this, opts);

    this._rawGrid = null;
    this._typeGrid = null;
    this._gridWidth = 0;
    this._gridHeight = 0;
    this._lut = null;
    this._isLoaded = false;
    this._isRegionalMode = false;
    this._tileCache = null;
    this._loadingTiles = null;
    this._tileDecodeCanvas = null;
    this._tileDecodeCtx = null;
    this._redrawTimer = null;

    this._setupColorLut();

    const modelKey = opts.mode || (urlOrData && urlOrData.mode);
    if (modelKey && REGIONAL_RADAR_CONFIGS[modelKey]) {
      const mergedConfig = Object.assign(
        {},
        REGIONAL_RADAR_CONFIGS[modelKey],
        opts,
        typeof urlOrData === "object" ? urlOrData : {}
      );
      this.loadRegionalTiles(mergedConfig);
    } else if (typeof urlOrData === "string") {
      this.loadUrls(urlOrData, opts.typeUrl, opts.fallbackDbzUrl, opts.fallbackTypeUrl);
    } else if (urlOrData && (urlOrData.dbzUrl || urlOrData.url)) {
      const dbzUrl = urlOrData.dbzUrl || urlOrData.url;
      const typeUrl = urlOrData.typeUrl || opts.typeUrl;
      const fallbackDbzUrl = urlOrData.fallbackDbzUrl || opts.fallbackDbzUrl;
      const fallbackTypeUrl = urlOrData.fallbackTypeUrl || opts.fallbackTypeUrl;
      this.loadUrls(dbzUrl, typeUrl, fallbackDbzUrl, fallbackTypeUrl);
    } else if (urlOrData && urlOrData.data) {
      this.setRawData(urlOrData.data, urlOrData.width, urlOrData.height, urlOrData.dataBounds || urlOrData.bounds);
    }
  },

  /**
   * 预计算 0~255 dBZ 的 32-bit RGBA 查找表，提高每个像素取色性能
   * 颜色与固有 Alpha 完全忠实于气象色阶，整体透明度由 Leaflet 容器层统一管控
   */
  _setupColorLut() {
    const scale = this.options.colorScale || VENTUSKY_RADAR_COLORS;
    const lut = new Array(256);
    const minThreshold =
      typeof this.options.minDbzThreshold === "number"
        ? this.options.minDbzThreshold
        : 0;

    for (let dbz = 0; dbz < 256; dbz++) {
      if (dbz < minThreshold) {
        lut[dbz] = [0, 0, 0, 0];
        continue;
      }

      // 寻找对应的区间做线性颜色插值
      let idx = 0;
      while (idx < scale.length - 1 && dbz >= scale[idx + 1].dbz) {
        idx++;
      }

      if (idx >= scale.length - 1) {
        const last = scale[scale.length - 1];
        lut[dbz] = [
          last.color[0],
          last.color[1],
          last.color[2],
          Math.floor(last.alpha * 255),
        ];
      } else {
        const c1 = scale[idx];
        const c2 = scale[idx + 1];
        const t = (dbz - c1.dbz) / (c2.dbz - c1.dbz);
        const r = Math.round(c1.color[0] + (c2.color[0] - c1.color[0]) * t);
        const g = Math.round(c1.color[1] + (c2.color[1] - c1.color[1]) * t);
        const b = Math.round(c1.color[2] + (c2.color[2] - c1.color[2]) * t);
        const a = c1.alpha + (c2.alpha - c1.alpha) * t;
        lut[dbz] = [r, g, b, Math.floor(a * 255)];
      }
    }

    this._lut = lut;
  },

  /**
   * 加载雷达回波图及相态类型图
   * 采用原生 Image + 跨域透传直连，并在失败时自动回退本地容灾
   */
  loadUrls(dbzUrl, typeUrl, fallbackDbzUrl, fallbackTypeUrl) {
    this._isLoaded = false;
    this._rawGrid = null;
    this._typeGrid = null;

    const loadImage = (url, fallbackUrl) => {
      if (!url) return Promise.resolve(null);
      return new Promise((resolve) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => resolve(img);
        img.onerror = () => {
          if (fallbackUrl) {
            console.warn(
              `[L.RadarTileLayer] 远程数据源获取失败，自动切换本地备份: ${fallbackUrl}`
            );
            const fallbackImg = new Image();
            fallbackImg.crossOrigin = "anonymous";
            fallbackImg.onload = () => resolve(fallbackImg);
            fallbackImg.onerror = () => resolve(null);
            fallbackImg.src = fallbackUrl;
          } else {
            resolve(null);
          }
        };
        img.src = url;
      });
    };

    Promise.all([
      loadImage(dbzUrl, fallbackDbzUrl),
      typeUrl ? loadImage(typeUrl, fallbackTypeUrl) : Promise.resolve(null),
    ])
      .then(([dbzImg, typeImg]) => {
        this._decodeImages(dbzImg, typeImg);
      })
      .catch((err) => {
        console.error("[L.RadarTileLayer] 获取雷达数据失败:", err);
        this.fire("data-error", err);
      });
  },

  loadUrl(url) {
    this.loadUrls(url);
  },

  /**
   * 加载 Ventusky 区域高精分块雷达 (2km 超高分辨率, 支持 earad、eurad、usrad)
   * 采用视口按需惰性加载 (Viewport On-Demand Lazy Loading) 与切片内存缓存池
   * @param {Object|string} configOrModel
   */
  loadRegionalTiles(configOrModel = {}) {
    this._isRegionalMode = true;
    this._isLoaded = false;

    const config =
      typeof configOrModel === "string" ? { model: configOrModel } : configOrModel;
    const model = config.model || "earad";
    const baseConfig = REGIONAL_RADAR_CONFIGS[model] || REGIONAL_RADAR_CONFIGS.earad;

    this._regionalConfig = Object.assign({}, baseConfig, config);

    const totalWidth = this._regionalConfig.totalWidth;
    const totalHeight = this._regionalConfig.totalHeight;
    const bounds = this._regionalConfig.bounds;

    this._gridWidth = totalWidth;
    this._gridHeight = totalHeight;
    this._tileW = this._regionalConfig.tileW;
    this._tileH = this._regionalConfig.tileH;
    this._xMax = this._regionalConfig.xMax;
    this._yMax = this._regionalConfig.yMax;
    this._dataBounds = bounds;

    // 分配整图网格内存 (初态全透明 0 dBZ，按需填充)
    this._rawGrid = new Uint8Array(totalWidth * totalHeight);
    this._typeGrid = new Uint8Array(totalWidth * totalHeight);

    // 切片请求缓存池与在途队列 (key: `${x}_${y}`)
    this._tileCache = new Map();
    this._loadingTiles = new Set();

    // 如果属于 worad_hres 或明确配置了概览底图，先行拉取全域宏观底图平滑填充到主网格作为基底
    const defaultTime = getRecentRadarTime();
    const dateStr = this._regionalConfig.dateStr || defaultTime.dateStr;
    const hourStr = this._regionalConfig.hourStr || defaultTime.hourStr;
    const timeStr = this._regionalConfig.timeStr || defaultTime.timeStr;
    const proxyPrefix = this._regionalConfig.proxyPrefix || "/ventusky-api";

    const overviewDbzUrl =
      this._regionalConfig.overviewDbzUrl ||
      this._regionalConfig.dbzUrl ||
      (model === "worad_hres"
        ? `${proxyPrefix}/${dateStr}/${model}/whole_world/hour_${hourStr}/${model}_srazky_dbz_${timeStr}.jpg?model=${model}&scope=whole_world&hour=${hourStr}&time=${timeStr}&layer=dbz`
        : null);

    const overviewTypeUrl =
      this._regionalConfig.overviewTypeUrl ||
      this._regionalConfig.typeUrl ||
      (model === "worad_hres"
        ? `${proxyPrefix}/${dateStr}/${model}/whole_world/hour_${hourStr}/${model}_srazky_type_dbz_${timeStr}.jpg?model=${model}&scope=whole_world&hour=${hourStr}&time=${timeStr}&layer=type`
        : null);

    const fallbackDbzUrl = this._regionalConfig.fallbackDbzUrl;
    const fallbackTypeUrl = this._regionalConfig.fallbackTypeUrl;

    if (this._regionalConfig.loadOverview !== false && overviewDbzUrl) {
      this._loadScaledOverview(overviewDbzUrl, overviewTypeUrl, fallbackDbzUrl, fallbackTypeUrl);
    }

    if (this._map) {
      this._updateViewportTiles();
    }
  },

  /**
   * 核心：根据地图当前视口 (Viewport) 与当前缩放层级动态计算空间相交切片并按需请求
   */
  _updateViewportTiles() {
    if (!this._map || !this._isRegionalMode || !this._regionalConfig) return;

    const map = this._map;
    const currentZoom = map.getZoom();
    const minZoom =
      typeof this.options.minRegionalZoom === "number"
        ? this.options.minRegionalZoom
        : (this._regionalConfig.minRegionalZoom != null ? this._regionalConfig.minRegionalZoom : 9);

    const mapBounds = map.getBounds();
    const vWest = mapBounds.getWest();
    const vEast = mapBounds.getEast();
    const vSouth = mapBounds.getSouth();
    const vNorth = mapBounds.getNorth();

    const b = this._dataBounds;
    let isIntersect = false;
    let interWest = 0;
    let interEast = 0;
    let interSouth = 0;
    let interNorth = 0;

    // 经度多周期相交检测 (-360, 0, +360)，解决跨经线或大范围漫游时的经度漂移
    for (const offset of [0, -360, 360]) {
      const curVWest = vWest + offset;
      const curVEast = vEast + offset;
      const iw = Math.max(curVWest, b.west);
      const ie = Math.min(curVEast, b.east);
      const is_ = Math.max(vSouth, b.south);
      const in_ = Math.min(vNorth, b.north);
      if (iw < ie && is_ < in_) {
        isIntersect = true;
        interWest = iw;
        interEast = ie;
        interSouth = is_;
        interNorth = in_;
        break;
      }
    }

    const isZoomQualified = currentZoom > minZoom;

    this.fire("viewport-status", {
      currentZoom,
      minZoom,
      active: isZoomQualified,
      isIntersect,
      model: this._regionalConfig.model,
      cachedCount: this._tileCache ? this._tileCache.size : 0,
      totalTiles: this._xMax * this._yMax,
    });

    // 缩放层级未大于 6，或视口完全在大区地理范围外
    if (!isZoomQualified || !isIntersect) {
      return;
    }

    const w = this._gridWidth;
    const h = this._gridHeight;
    const tileW = this._tileW;
    const tileH = this._tileH;
    const xMax = this._xMax;
    const yMax = this._yMax;

    const lonSpan = b.east - b.west;
    const latSpan = b.north - b.south;

    const pxMin = ((interWest - b.west) / lonSpan) * (w - 1);
    const pxMax = ((interEast - b.west) / lonSpan) * (w - 1);
    const pyMin = ((b.north - interNorth) / latSpan) * (h - 1);
    const pyMax = ((b.north - interSouth) / latSpan) * (h - 1);

    const minTileX = Math.max(0, Math.floor(pxMin / tileW));
    const maxTileX = Math.min(xMax - 1, Math.floor(pxMax / tileW));
    const minTileY = Math.max(0, Math.floor(pyMin / tileH));
    const maxTileY = Math.min(yMax - 1, Math.floor(pyMax / tileH));

    const tilesToFetch = [];
    for (let x = minTileX; x <= maxTileX; x++) {
      for (let y = minTileY; y <= maxTileY; y++) {
        const key = `${x}_${y}`;
        if (!this._tileCache.has(key) && !this._loadingTiles.has(key)) {
          tilesToFetch.push({ x, y, key });
        }
      }
    }

    if (tilesToFetch.length === 0) return;

    this.fire("tiles-requesting", {
      model: this._regionalConfig.model,
      count: tilesToFetch.length,
      tiles: tilesToFetch,
      minTileX,
      maxTileX,
      minTileY,
      maxTileY,
    });

    // 仅按需并发拉取当前视口内未缓存的切片 (绝不一次性请求全部几十张)
    tilesToFetch.forEach(({ x, y, key }) => {
      this._loadingTiles.add(key);
      this._fetchAndStampTile(x, y, key);
    });
  },

  /**
   * 单张瓦片拉取、通道分离与增量拼接
   */
  _fetchAndStampTile(x, y, key) {
    const config = this._regionalConfig;
    const model = config.model;
    const defaultTime = getRecentRadarTime();
    const dateStr = config.dateStr || defaultTime.dateStr;
    const hourStr = config.hourStr || defaultTime.hourStr;
    const timeStr = config.timeStr || defaultTime.timeStr;
    const proxyPrefix = config.proxyPrefix || "/ventusky-api";
    const directPrefix = "https://data.ventusky.com";

    const fetchSingleImage = (isType) => {
      const layerName = isType ? "srazky_type_dbz" : "srazky_dbz";
      const fileName = `${model}_${layerName}_${x}_${y}_${timeStr}.jpg`;
      const subPath = `${dateStr}/${model}/tilled_world/hour_${hourStr}/${fileName}`;
      // 透明暴露经纬网切片业务参数，供开发者在 Network 控制台清晰查验原始参数：
      const queryString = `?model=${model}&x=${x}&y=${y}&hour=${hourStr}&time=${timeStr}&type=${isType ? "type" : "dbz"}`;
      const proxyUrl = `${proxyPrefix}/${subPath}${queryString}`;
      const directUrl = `${directPrefix}/${subPath}`;

      return new Promise((resolve) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => resolve(img);
        img.onerror = () => {
          const fallbackImg = new Image();
          fallbackImg.crossOrigin = "anonymous";
          fallbackImg.onload = () => resolve(fallbackImg);
          fallbackImg.onerror = () => resolve(null);
          fallbackImg.src = directUrl;
        };
        img.src = proxyUrl;
      });
    };

    Promise.all([fetchSingleImage(false), fetchSingleImage(true)])
      .then(([dbzImg, typeImg]) => {
        this._loadingTiles.delete(key);
        this._tileCache.set(key, true);

        if (!dbzImg || dbzImg.naturalWidth <= 1) {
          // 晴空无雨切片 (1x1 占位图)，需将该切片区域在主网格中清零 (0 dBZ)
          this._clearTileData(x, y);
          this.fire("tile-loaded", {
            x,
            y,
            isClear: true,
            cachedCount: this._tileCache.size,
          });
          this._requestRedraw();
          return;
        }

        // 将单张切片解码后像素增量写入主网格对应位置
        this._stampTileData(x, y, dbzImg, typeImg);

        this._isLoaded = true;
        this.fire("tile-loaded", {
          x,
          y,
          isClear: false,
          cachedCount: this._tileCache.size,
        });

        // 局部触发 Leaflet 瓦片平滑重绘
        this._requestRedraw();
      })
      .catch((err) => {
        this._loadingTiles.delete(key);
        console.warn(`[L.RadarTileLayer] Tile ${model} [${x}, ${y}] 加载失败:`, err);
      });
  },

  /**
   * 将单张切片像素增量复制到主矩阵
   */
  _stampTileData(x, y, dbzImg, typeImg) {
    const tileW = this._tileW;
    const tileH = this._tileH;
    const totalW = this._gridWidth;
    const totalH = this._gridHeight;

    const dx = x * tileW;
    const dy = y * tileH;
    const actualW = Math.min(tileW, totalW - dx);
    const actualH = Math.min(tileH, totalH - dy);

    if (!this._tileDecodeCanvas) {
      this._tileDecodeCanvas = document.createElement("canvas");
      this._tileDecodeCtx = this._tileDecodeCanvas.getContext("2d", { willReadFrequently: true });
    }
    const canvas = this._tileDecodeCanvas;
    const ctx = this._tileDecodeCtx;

    canvas.width = tileW;
    canvas.height = tileH;
    ctx.clearRect(0, 0, tileW, tileH);
    ctx.drawImage(dbzImg, 0, 0);

    const dbzPixels = ctx.getImageData(0, 0, actualW, actualH).data;

    let typePixels = null;
    if (typeImg && typeImg.naturalWidth > 1) {
      ctx.clearRect(0, 0, tileW, tileH);
      ctx.drawImage(typeImg, 0, 0);
      typePixels = ctx.getImageData(0, 0, actualW, actualH).data;
    }

    const rawGrid = this._rawGrid;
    const typeGrid = this._typeGrid;

    for (let r = 0; r < actualH; r++) {
      const masterOffset = (dy + r) * totalW + dx;
      const tileOffset = r * actualW * 4;
      for (let c = 0; c < actualW; c++) {
        rawGrid[masterOffset + c] = dbzPixels[tileOffset + c * 4 + 1]; // G 通道为 0~255 dBZ
        if (typePixels) {
          typeGrid[masterOffset + c] = typePixels[tileOffset + c * 4]; // R 通道为相态
        }
      }
    }
  },

  /**
   * 将晴空无雨 (1x1 占位) 切片对应主矩阵区域安全清零
   */
  _clearTileData(x, y) {
    if (!this._rawGrid) return;
    const tileW = this._tileW;
    const tileH = this._tileH;
    const totalW = this._gridWidth;
    const totalH = this._gridHeight;

    const dx = x * tileW;
    const dy = y * tileH;
    const actualW = Math.min(tileW, totalW - dx);
    const actualH = Math.min(tileH, totalH - dy);

    const rawGrid = this._rawGrid;
    const typeGrid = this._typeGrid;

    for (let r = 0; r < actualH; r++) {
      const masterOffset = (dy + r) * totalW + dx;
      for (let c = 0; c < actualW; c++) {
        rawGrid[masterOffset + c] = 0;
        if (typeGrid) {
          typeGrid[masterOffset + c] = 0;
        }
      }
    }
  },

  /**
   * 宏观概览底图预热拉取与主网格平滑填充 (Ventusky 官方级联方案)
   */
  _loadScaledOverview(dbzUrl, typeUrl, fallbackDbzUrl, fallbackTypeUrl) {
    const loadImage = (url, fallback) => {
      if (!url) return Promise.resolve(null);
      return new Promise((resolve) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => resolve(img);
        img.onerror = () => {
          if (fallback) {
            console.warn(`[L.RadarTileLayer] 概览图加载失败，尝试备用源: ${fallback}`);
            const fImg = new Image();
            fImg.crossOrigin = "anonymous";
            fImg.onload = () => resolve(fImg);
            fImg.onerror = () => resolve(null);
            fImg.src = fallback;
          } else {
            resolve(null);
          }
        };
        img.src = url;
      });
    };

    Promise.all([
      loadImage(dbzUrl, fallbackDbzUrl),
      loadImage(typeUrl, fallbackTypeUrl),
    ])
      .then(([dbzImg, typeImg]) => {
        if (!dbzImg || !this._rawGrid) return;
        const totalW = this._gridWidth;
        const totalH = this._gridHeight;

        if (!this._overviewCanvas) {
          this._overviewCanvas = document.createElement("canvas");
          this._overviewCtx = this._overviewCanvas.getContext("2d", { willReadFrequently: true });
        }
        const canvas = this._overviewCanvas;
        const ctx = this._overviewCtx;

        canvas.width = totalW;
        canvas.height = totalH;
        ctx.clearRect(0, 0, totalW, totalH);
        ctx.drawImage(dbzImg, 0, 0, totalW, totalH);
        const dbzData = ctx.getImageData(0, 0, totalW, totalH).data;

        let typeData = null;
        if (typeImg && typeImg.naturalWidth > 1) {
          ctx.clearRect(0, 0, totalW, totalH);
          ctx.drawImage(typeImg, 0, 0, totalW, totalH);
          typeData = ctx.getImageData(0, 0, totalW, totalH).data;
        }

        for (let i = 0, j = 0; i < dbzData.length; i += 4, j++) {
          // 仅在当前像素未被高精切片覆盖时填入概览值
          if (this._rawGrid[j] === 0) {
            this._rawGrid[j] = dbzData[i + 1];
          }
          if (typeData && this._typeGrid && this._typeGrid[j] === 0) {
            this._typeGrid[j] = typeData[i];
          }
        }

        this._isLoaded = true;
        this.fire("data-loaded", { width: totalW, height: totalH });
        this._requestRedraw();
      })
      .catch((err) => {
        console.warn("[L.RadarTileLayer] 概览底图预热失败:", err);
      });
  },

  /**
   * 原地无闪烁重绘当前视口中已存在的 Canvas 瓦片 (In-Place Update)
   * 严禁调用 Leaflet 原生 redraw() / _removeAllTiles()，绝不销毁和重建 DOM 节点，彻底杜绝任何白屏与闪烁！
   */
  _refreshCurrentTiles() {
    if (!this._map || !this._tiles || !this._rawGrid) return;
    for (const key in this._tiles) {
      const tileEntry = this._tiles[key];
      // Leaflet GridLayer 维护的瓦片缓存对象中包含 el (即 <canvas>) 和 coords (瓦片行列号与缩放层级)
      if (tileEntry && tileEntry.el && tileEntry.coords) {
        this._renderTile(tileEntry.el, tileEntry.coords);
      }
    }
  },

  /**
   * 防抖触发瓦片原地重绘，批量合并并发网络切片加载事件，避免高频刷新与画面抖动
   */
  _requestRedraw() {
    if (this._redrawTimer) return;
    this._redrawTimer = setTimeout(() => {
      this._redrawTimer = null;
      if (typeof window !== "undefined" && window.requestAnimationFrame) {
        window.requestAnimationFrame(() => this._refreshCurrentTiles());
      } else {
        this._refreshCurrentTiles();
      }
    }, 50); // 50ms 聚合缓冲窗口，有效合并同时返回的多个切片请求，杜绝每回 3 张图就反复刷屏闪烁
  },

  /**
   * 重写 Leaflet GridLayer 原生 redraw
   * 原生 redraw 会暴力执行 this._removeAllTiles() 销毁所有 DOM Canvas 导致严重白屏闪烁！
   * 重写后执行无损原地像素更新 (In-Place Update)
   */
  redraw() {
    if (this._map && this._tiles && Object.keys(this._tiles).length > 0) {
      this._refreshCurrentTiles();
      return this;
    }
    return L.GridLayer.prototype.redraw.call(this);
  },

  /**
   * 向后兼容保留 loadEaradTiles
   */
  loadEaradTiles(config = {}) {
    return this.loadRegionalTiles(Object.assign({}, REGIONAL_RADAR_CONFIGS.earad, config));
  },

  /**
   * 解码图像绿色通道获取 0~255 dBZ，以及相态类型通道
   */
  _decodeImages(dbzImg, typeImg) {
    if (!dbzImg) return;
    const width = dbzImg.naturalWidth || dbzImg.width;
    const height = dbzImg.naturalHeight || dbzImg.height;

    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    ctx.drawImage(dbzImg, 0, 0);

    const imgData = ctx.getImageData(0, 0, width, height).data;
    const rawGrid = new Uint8Array(width * height);

    // 提取绿色通道 G (8位灰度图 R=G=B=回波强度数值)
    for (let i = 0, j = 0; i < imgData.length; i += 4, j++) {
      rawGrid[j] = imgData[i + 1];
    }

    // 解码相态遮罩
    let typeGrid = null;
    if (typeImg) {
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(typeImg, 0, 0);
      const typeData = ctx.getImageData(0, 0, width, height).data;
      typeGrid = new Uint8Array(width * height);
      for (let i = 0, j = 0; i < typeData.length; i += 4, j++) {
        typeGrid[j] = typeData[i]; // R 通道取类型值 (0:普通雨, 10/30:阵雨, 40:雪, 50:冻雨)
      }
    }

    this._rawGrid = rawGrid;
    this._typeGrid = typeGrid;
    this._gridWidth = width;
    this._gridHeight = height;
    this._isLoaded = true;

    // 触发数据加载完毕事件，通知排队等待渲染的瓦片
    this.fire("data-loaded", { width, height });
    this.redraw();
  },

  /**
   * 直接载入已解码的原始数值矩阵
   */
  setRawData(rawGrid, width, height, bounds) {
    this._rawGrid = rawGrid;
    this._gridWidth = width;
    this._gridHeight = height;
    if (bounds) {
      this._dataBounds = bounds;
    }
    this._isLoaded = true;
    this.fire("data-loaded", { width, height });
    this.redraw();
  },

  /**
   * 更新透明度 (统一通过 Leaflet GridLayer 容器层设置 CSS 透明度)
   */
  setOverlayOpacity(opacity) {
    if (typeof this.setOpacity === "function") {
      this.setOpacity(opacity);
    } else {
      this.options.opacity = opacity;
      this.redraw();
    }
  },

  /**
   * 动态设置回波截断阈值 (0~255 dBZ)
   */
  setMinDbzThreshold(threshold) {
    this.options.minDbzThreshold = Number(threshold) || 0;
    this._setupColorLut();
    this.redraw();
  },

  /**
   * 动态切换仅雨模式 (过滤雪 40、冻雨 50)
   */
  setRainOnly(rainOnly) {
    this.options.rainOnly = !!rainOnly;
    this.redraw();
  },

  /**
   * 核心：Leaflet 瓦片创建回调 (256x256)
   * 完美适配 Leaflet GridLayer 异步 done(null, tile) 规范，避免空白未就绪瓦片
   */
  createTile(coords, done) {
    const tile = document.createElement("canvas");
    tile.width = tile.height = this.options.tileSize;

    const render = () => {
      this._renderTile(tile, coords);
      if (typeof done === "function") {
        if (L.Util && L.Util.requestAnimFrame) {
          L.Util.requestAnimFrame(() => done(null, tile));
        } else {
          setTimeout(() => done(null, tile), 0);
        }
      }
    };

    if (this._rawGrid) {
      render();
    } else {
      const onLoaded = () => {
        this.off("data-loaded", onLoaded);
        render();
      };
      this.on("data-loaded", onLoaded);
    }

    return tile;
  },

  /**
   * 渲染单个瓦片：Web 墨卡托 -> 等经纬度反算与双线性平滑插值
   */
  _renderTile(tile, coords) {
    if (!this._rawGrid) return;

    const ctx = tile.getContext("2d");
    const size = this.options.tileSize;

    // 区域精细化雷达严格遵从 zoom > minZoom 规则，层级 <= minZoom 时保持瓦片透明不绘制 (除全球 worad_hres 6km 全层级托底层外)
    if (this._isRegionalMode && this._regionalConfig && this._regionalConfig.model !== "worad_hres") {
      const minZoom =
        typeof this.options.minRegionalZoom === "number"
          ? this.options.minRegionalZoom
          : (this._regionalConfig.minRegionalZoom != null ? this._regionalConfig.minRegionalZoom : 9);
      if (coords.z <= minZoom) {
        ctx.clearRect(0, 0, size, size);
        return;
      }
    } else if (!this._isRegionalMode && typeof this.options.maxZoom === "number" && coords.z > this.options.maxZoom) {
      // 全球宏观雷达层：层级 > maxZoom 时保持透明
      ctx.clearRect(0, 0, size, size);
      return;
    }

    const imgData = ctx.createImageData(size, size);
    const pixels = imgData.data;

    const grid = this._rawGrid;
    const typeGrid = this._typeGrid;
    const rainOnly = this.options.rainOnly !== false;
    const w = this._gridWidth;
    const h = this._gridHeight;
    const lut = this._lut;

    const bounds = this._dataBounds || { west: -180, east: 180, south: -90, north: 90 };
    const west = bounds.west;
    const east = bounds.east;
    const south = bounds.south;
    const north = bounds.north;
    const lonSpan = east - west;
    const latSpan = north - south;

    const n = Math.pow(2, coords.z);
    const isWorad = this._regionalConfig && this._regionalConfig.model === "worad_hres";
    const maskRegional = isWorad && this.options.maskRegionalBounds !== false;
    const maskZoom = typeof this.options.highResMaskZoom === "number" ? this.options.highResMaskZoom : 9;

    // 当全球 6km 底图处于高精层级 (z > 9，即 10+) 且启用了高精避让时：
    // 若当前瓦片整块完全落在 2km 高精大区 (如东亚、欧洲、北美) 内部，直接清空并跳过渲染，避免与 2km 图层重叠！
    if (maskRegional && coords.z > maskZoom) {
      const tileNorthRad = Math.atan(Math.sinh(Math.PI * (1 - (2 * coords.y) / n)));
      const tileNorth = (tileNorthRad * 180) / Math.PI;
      const tileSouthRad = Math.atan(Math.sinh(Math.PI * (1 - (2 * (coords.y + 1)) / n)));
      const tileSouth = (tileSouthRad * 180) / Math.PI;
      let tileWest = (coords.x / n) * 360 - 180;
      let tileEast = ((coords.x + 1) / n) * 360 - 180;
      tileWest = ((((tileWest + 180) % 360) + 360) % 360) - 180;
      tileEast = ((((tileEast + 180) % 360) + 360) % 360) - 180;

      if (isTileFullyInHighResRegion(tileNorth, tileSouth, tileEast, tileWest)) {
        ctx.clearRect(0, 0, size, size);
        return; // 整块瓦片完全在高精大区内，由 2km 图层独占渲染，6km 底层保持透明
      }
    }

    let hasAnyEcho = false;

    for (let j = 0; j < size; j++) {
      // 墨卡托归一化坐标反求纬度 (Gudermannian 逆变换)
      const normY = (coords.y + j / size) / n;
      const latRad = Math.atan(Math.sinh(Math.PI * (1 - 2 * normY)));
      const lat = (latRad * 180) / Math.PI;

      if (lat > north || lat < south) {
        continue;
      }

      // 计算源网格垂直浮点坐标 fj (90° -> 0, -90° -> h - 1)
      const fj = ((north - lat) / latSpan) * (h - 1);
      const j0 = Math.floor(fj);
      const j1 = Math.min(j0 + 1, h - 1);
      const dy = fj - j0;

      for (let i = 0; i < size; i++) {
        // 墨卡托经度反算 [-180, 180]
        const normX = (coords.x + i / size) / n;
        let lon = normX * 360 - 180;
        // 经度规范化至 [-180, 180)
        lon = ((((lon + 180) % 360) + 360) % 360) - 180;

        if (lon < west || lon > east) {
          continue;
        }

        // 边界瓦片像素级避让：如果处于高精层级，且该像素点落入 2km 大区内部，跳过绘制
        if (maskRegional && coords.z > maskZoom && isPointInHighResRegion(lat, lon)) {
          continue;
        }

        // 计算源网格水平浮点坐标 fi
        const fi = ((lon - west) / lonSpan) * (w - 1);
        const i0 = Math.floor(fi);
        const i1 = Math.min(i0 + 1, w - 1);
        const dx = fi - i0;

        const pType = typeGrid ? typeGrid[j0 * w + i0] : 0;
        const pInfo = parsePrecipitationType(pType);

        // 相态过滤：仅在显式设置 rainOnly === true 时过滤纯雪和冻雨；默认普通降雨(10)、雷暴(30)、降雪(40)全量参与着色！
        if (rainOnly && typeGrid) {
          if (pInfo.isSnow || pInfo.code === 50) {
            continue;
          }
        }

        // 双线性插值提取当前经纬度的平滑 dBZ 回波强度
        const row0 = j0 * w;
        const row1 = j1 * w;
        const v00 = grid[row0 + i0];
        const v10 = grid[row0 + i1];
        const v01 = grid[row1 + i0];
        const v11 = grid[row1 + i1];

        let val =
          v00 * (1 - dx) * (1 - dy) +
          v10 * dx * (1 - dy) +
          v01 * (1 - dx) * dy +
          v11 * dx * dy;

        const roundDbz = Math.round(val);

        // 真实雷达物理连续性：回波强度严格由真实反射率双线性插值驱动，坚决不人为强行注入伪回波底色，
        // 彻底杜绝离散相态格网在晴空区或弱回波区产生直角锯齿方块（消除“雪叠在雨上”的生硬补丁感）
        if (roundDbz <= 0) continue;

        let color = lut[roundDbz];
        if (!color || color[3] === 0) continue;

        const idx = (j * size + i) * 4;
        pixels[idx] = color[0];
        pixels[idx + 1] = color[1];
        pixels[idx + 2] = color[2];
        pixels[idx + 3] = color[3];

        hasAnyEcho = true;
      }
    }

    if (hasAnyEcho) {
      ctx.putImageData(imgData, 0, 0);
    } else {
      ctx.clearRect(0, 0, size, size);
    }
  },

  /**
   * 空间位置查询接口：根据经纬度反查雷达反射率 (dBZ)
   * 供鼠标悬停拾取使用
   */
  getValueAt(lat, lon) {
    if (!this._isLoaded || !this._rawGrid) {
      return null;
    }

    // 区域精细化雷达在 zoom <= minZoom 时未激活，探针不拾取 (除 worad_hres 外)
    if (this._isRegionalMode && this._map && this._regionalConfig && this._regionalConfig.model !== "worad_hres") {
      const minZoom =
        typeof this.options.minRegionalZoom === "number"
          ? this.options.minRegionalZoom
          : (this._regionalConfig.minRegionalZoom != null ? this._regionalConfig.minRegionalZoom : 9);
      if (this._map.getZoom() <= minZoom) {
        return null;
      }
    } else if (!this._isRegionalMode && this._map && typeof this.options.maxZoom === "number") {
      if (this._map.getZoom() > this.options.maxZoom) {
        return null;
      }
    }

    const bounds = this._dataBounds || { west: -180, east: 180, south: -90, north: 90 };
    if (lat < bounds.south || lat > bounds.north) {
      return null;
    }

    let normLon = ((((lon + 180) % 360) + 360) % 360) - 180;
    if (normLon < bounds.west || normLon > bounds.east) {
      return null;
    }

    // 全球底图在高精大区内避让取值 (交由 2km 精细图层取值)
    const isWorad = this._regionalConfig && this._regionalConfig.model === "worad_hres";
    const maskRegional = isWorad && this.options.maskRegionalBounds !== false;
    const maskZoom = typeof this.options.highResMaskZoom === "number" ? this.options.highResMaskZoom : 9;
    if (maskRegional && this._map && this._map.getZoom() > maskZoom && isPointInHighResRegion(lat, normLon)) {
      return null;
    }

    const w = this._gridWidth;
    const h = this._gridHeight;
    const lonSpan = bounds.east - bounds.west;
    const latSpan = bounds.north - bounds.south;

    const fi = ((normLon - bounds.west) / lonSpan) * (w - 1);
    const fj = ((bounds.north - lat) / latSpan) * (h - 1);

    const i0 = Math.max(0, Math.min(Math.floor(fi), w - 2));
    const j0 = Math.max(0, Math.min(Math.floor(fj), h - 2));
    const dx = fi - i0;
    const dy = fj - j0;

    const pType = this._typeGrid ? this._typeGrid[j0 * w + i0] : 0;
    const pInfo = parsePrecipitationType(pType);
    if (this.options.rainOnly && this._typeGrid) {
      if (pInfo.isSnow || pInfo.code === 50) {
        return null;
      }
    }

    const v00 = this._rawGrid[j0 * w + i0];
    const v10 = this._rawGrid[j0 * w + i0 + 1];
    const v01 = this._rawGrid[(j0 + 1) * w + i0];
    const v11 = this._rawGrid[(j0 + 1) * w + i0 + 1];

    const dbz =
      v00 * (1 - dx) * (1 - dy) +
      v10 * dx * (1 - dy) +
      v01 * (1 - dx) * dy +
      v11 * dx * dy;

    const roundedDbz = Math.round(dbz * 10) / 10;
    if (roundedDbz <= 0) return null;

    const rainRate = dbzToRainRate(roundedDbz);
    const desc = getRainIntensityDesc(roundedDbz);

    return {
      dbz: roundedDbz,
      rainRate,
      desc,
      type: pInfo.code,
      typeDesc: pInfo.desc,
      isStorm: pInfo.isStorm,
      isSnow: pInfo.isSnow,
    };
  },
});

L.radarTileLayer = function (urlOrData, options) {
  return new L.RadarTileLayer(urlOrData, options);
};

L.getRecentRadarTime = getRecentRadarTime;

export default L.RadarTileLayer;
