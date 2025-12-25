let map2D;
let viewer;

// 台风强度对应的颜色
const TYPHOON_COLORS = {
  TD: "#00BFFF", // 热带低压 - 浅蓝
  TS: "#00FF00", // 热带风暴 - 绿色
  STS: "#FFFF00", // 强热带风暴 - 黄色
  TY: "#FFA500", // 台风 - 橙色
  STY: "#FF00FF", // 强台风 - 粉色
  "Super TY": "#FF0000", // 超强台风 - 红色
};

// 预报机构颜色
const FORECAST_COLORS = {
  中国: "#FF0000",
  日本: "#00FF00",
  韩国: "#0000FF",
  美国: "#FFFF00",
  欧洲: "#FF00FF",
};

// 根据强度描述获取颜色
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
  scalarLayer: null,
  velocityLayer: null,
  arrowLayer: null,
  barbLayer: null,
  vectorAnimateSwitch: true,
  init(options) {
    //viewer = options.viewer
    //leafletMap = options.leafletMap
  },

  addLayer(options) {
    if (options && options.viewer) {
      this.switchMap({
        type: 2,
        viewer: options.viewer,
      });
    }
    if (options && options.vectorLayer == true) {
      this.addVectorLayer(options.type, options.data);
    }
    this.addScalarLayer(options.type, options.data);
  },
  switchMap(options) {
    if (options && options.type == 2) {
      options.viewer.scene.canvas.style.display = "none";
      viewer = options.viewer;
      /* if(map2D){
                map2D.destroy()
                map2D = null
            } */
      this.destory2DMap();
      this.init2DMap();
    } else {
      /*  map2D.destroy()
            map2D = null */
      this.destory2DMap();
      if (options.viewer) {
        options.viewer.scene.canvas.style.display = "block";
      } else if (viewer) {
        viewer.scene.canvas.style.display = "block";
      }
    }
  },
  destory2DMap() {
    if (map2D) {
      map2D.remove();
      map2D = null;
    }
  },
  // 加载强度图
  addScalarLayer(type, data) {
    //debugger
    let config = {};
    switch (type) {
      case "pressure":
        config = { ...config, minValue: 99000, maxValue: 105000 };
        break;

      case "salt":
        config = { ...config, minValue: 20, maxValue: 35 };
        break;

      case "wind":
        config = { ...config, minValue: 0.01, maxValue: 30 };
        break;

      case "wave":
        config = {
          ...config,
          minValue: 0.01,
          maxValue: 9,
          colorScale: [
            /*[0.5, [56, 171, 216]],
                    [1, [47, 130, 214]],
                    [1.5, [47, 102, 204]],
                    [2, [108, 47, 214]],
                    [6, [146,45,75]],
                    [9, [192,99,88]], */
            /*[0.5, [56, 171, 216]],
                    [1, [47, 130, 214]],
                    [1.5, [47, 102, 204]],
                    [2, [108, 47, 214]],
                    [6, [146,45,75]],
                    [9, [192,99,88]],*/

            /*                     [0.5, [50, 158, 186]],
                    [1, [48, 128, 164]],
                    [1.5, [56, 104, 192]],
                    [2, [57, 61, 143]],
                    [4, [134, 48, 49]],
                    [6,[52, 101, 166]],
                    [9, [192, 162, 157]],  */

            [0.5, [50, 158, 186]],
            [0.6, [48, 128, 164]],
            [0.8, [48, 99, 142]],
            [0.9, [52, 101, 166]],
            [1, [56, 104, 192]],
            [1.5, [56, 83, 169]],
            [2, [57, 61, 143]],
            [4, [134, 48, 49]],
            [5, [194, 76, 91]],
            [7, [192, 162, 157]],
          ],
        };
        break;

      case "current":
        config = { ...config, minValue: 0.001, maxValue: 2 };
        break;

      case "seaTemp":
        config = { ...config, minValue: 270, maxValue: 300 };
        break;

      default:
        config = { ...config, minValue: -30.0, maxValue: 40 };
        break;
    }

    // if (this.scalarLayer){
    //   this.scalarLayer.setOptions(config)
    //   this.scalarLayer.setData(data);
    // }else{
    // if (this.scalarLayer) {
    //     this.removeScalarLayer()
    // }
    // this.scalarLayer = new L.scalarLayer({
    //     displayValues: true,
    //     displayOptions: {
    //         velocityType: "",
    //         displayPosition: "",
    //         displayEmptyString: ""
    //     },
    //     ...config
    // })
    this.showScalarTiled(data, config);

    //console.log("data:", data)
    // this.scalarLayer.setData(data);
    // this.scalarLayer.onAdd(map2D)
    // }
    /*  if (type == 'pressure' || type == 'wind' || type == 'wave') {
             this.removeMaskMap()
         } else {
             this.addMaskMap()
         } */
  },
  // 加载风场 洋流图层 海浪图层 矢量
  addVectorLayer(type, data) {
    //console.log(type, data)
    // if(!this.vectorAnimateSwitch){ // 全局 矢量动画 形状
    //   return
    // }
    // this.toggleVectorLayer(this.vectorAnimateSwitch)
    let obj = {
      colorScale: [
        "rgb(222,255,253)",
        "rgb(234,234,234)",
        "rgb(255,255,255)",
        "rgb(156,156,156)",
        "rgb(255,106,43)",
      ],
      opacity: this.vectorAnimateSwitch ? 0.7 : 0,
    };
    if (type == "wind") {
      obj = {
        ...obj,
        maxVelocity: 35,
        lineWidth: 1,
        particleMultiplier: 1 / 500,
        frameRate: 20,
      };
    } else if (type == "wave") {
      obj = {
        ...obj,
        maxVelocity: 10,
        lineWidth: 6,
        velocityScale: 0.003,
        particleMultiplier: 1 / 500,
        frameRate: 30,
      };

      //obj.colorScale = []
    } else {
      obj = {
        ...obj,
        maxVelocity: 5,
        lineWidth: 1,
        velocityScale: 0.1,
        particleMultiplier: 1 / 500,
        frameRate: 20,
      };
    }
    this.velocityLayer = new L.velocityLayer({
      displayValues: false,
      displayOptions: {
        velocityType: "",
        displayPosition: "",
        displayEmptyString: "",
      },
      ...obj,
    });
    //console.log(obj, data)

    this.velocityLayer.setData(data);
    this.velocityLayer.onAdd(map2D);
  },
  // 添加箭头图层
  addArrowLayer(type, data) {
    if (this.arrowLayer) {
      this.removeArrowLayer();
    }
    this.arrowLayer = L.vectorArrowLayer({
      color: "white",
      arrowSize: 20,
      gridSize: 40,
    });
    this.arrowLayer.addTo(map2D);
    this.arrowLayer.setData(data);
  },
  removeArrowLayer() {
    if (this.arrowLayer) {
      map2D.removeLayer(this.arrowLayer);
      this.arrowLayer = null;
    }
  },
  // 添加风杆图层
  addBarbLayer(type, data) {
    if (this.barbLayer) {
      this.removeBarbLayer();
    }
    this.barbLayer = L.vectorBarbLayer({
      color: "#333333", // Dark color for visibility
      barbSize: 30,
      gridSize: 60,
    });
    this.barbLayer.addTo(map2D);
    this.barbLayer.setData(data);
  },
  removeBarbLayer() {
    if (this.barbLayer) {
      map2D.removeLayer(this.barbLayer);
      this.barbLayer = null;
    }
  },
  // 添加多边形图层
  addPolygonLayer() {
    if (this.polygonLayer) {
      map2D.removeLayer(this.polygonLayer);
    }
    setTimeout(() => {
      const geoJson = {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            id: 6057,
            properties: {
              _draw_type: "rect",
              _draw_prop_from: "119.26974298,23.05999394",
              _draw_prop_to: "117.4314538787,24.8064517431",
            },
            geometry: {
              type: "Polygon",
              coordinates: [
                [
                  [119.26974298, 23.05999394],
                  [117.43145387869998, 23.05999394],
                  [117.43145387869998, 24.806451743099995],
                  [119.26974298, 24.806451743099995],
                  [119.26974298, 23.05999394],
                ],
              ],
            },
            bbox: [
              117.43145387869998, 23.05999394, 119.26974298, 24.806451743099995,
            ],
          },
        ],
      };
      // 加载并绘制 GeoJSON 数据中的多边形
      this.polygonLayer = L.geoJSON(geoJson, {
        style: function (feature) {
          return {
            color: "#F52530",
            weight: 2,
            fillColor: "#F52530",
            fillOpacity: 0.4,
          };
        },
      }).addTo(map2D);
    }, 100);
  },
  removeScalarLayer() {
    if (this.scalarLayer) {
      this.scalarLayer.onRemove();
      this.scalarLayer = null;
    }
  },
  init2DMap() {
    map2D = L.map("map", {
      //center: [39.912565, 116.408509],
      //crs: L.CRS.EPSG4326,
      zoom: 5,
      maxZoom: 16,
      zoomControl: true,
      zoomAnimation: true,
    }).setView([24.5, 118], 8.4);

    /*L.geoJSON(testData.world, {
        }).addTo(map2D);*/
    L.tileLayer(
      "https://t0.tianditu.gov.cn/img_w/wmts?tk=93724b915d1898d946ca7dc7b765dda5&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}",
      //'http://172.26.55.130:10100/tiles/vct/{z}/{x}/{y}.png',
      // `${window.location.pathname}tdtserver/tiles/img/{z}/{x}/{y}.png`,
      //`${window.location.pathname}tdtserver/img_fj/wmts`,
      {
        maxZoom: 16,
        zoom: 5,
        detectRetina: true,
        // subdomains: [0, 1, 2, 3, 4, 5, 6, 7]
      }
    ).addTo(map2D);
    //注记
    L.tileLayer(
      //`${window.location.pathname}tdtserver/cia_fj/wmts`,
      "https://t0.tianditu.gov.cn/cia_w/wmts?tk=93724b915d1898d946ca7dc7b765dda5&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cia&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}",
      // `${window.location.pathname}tdtserver/tiles/ann/{z}/{x}/{y}.png`,
      //'http://172.26.55.130:10100/tiles/ann/{z}/{x}/{y}.png',
      {
        //subdomains: [0, 1, 2, 3, 4, 5, 6, 7],
        transparent: true,
        zIndex: 3,
      }
    ).addTo(map2D);
  },

  showScalarTiled(data, options = {}) {
    // 清空图层
    this.clearScalarLayer();

    if (!data || data.length === 0) {
      console.error("数据为空或无效:", data);
      return;
    }

    try {
      this.tileScalarLayer = L.scalarTileLayer(options);
      this.tileScalarLayer.addTo(map2D);
      this.tileScalarLayer.setData(data);
    } catch (error) {
      console.error("创建或添加图层时出错:", error);
    }

    /*
        let currentWindData = null; 
        
        if (data.length > 1) {
            const data1 = data[0].data;
            const data2 = data[1].data;
            currentWindData = data1.map((v, i) => (Math.abs(v) + Math.abs(data2[i])) / 2);
        } else {
            currentWindData = data[0].data.map(v => Math.abs(v));
        }
        const header = data[0].header;
        const windData = currentWindData;
        
        const OVERLAY_ALPHA = Math.floor(0.4 * 255); 
        const TRANSPARENT_BLACK = [0, 0, 0, 0]; 
        const MIN_VELOCITY_INTENSITY = options.minValue || 193; 
        const MAX_VELOCITY_INTENSITY = options.maxValue || 328;
        const OPACITY = 0.97;
        
        // FloorMod函数：处理负数的正确取模运算，确保结果在[0, n)范围内
        function floorMod(a, n) {
            const f = a - n * Math.floor(a / n);
            // 处理浮点精度问题：当f非常接近n时，返回0
            return f === n ? 0 : f;
        }

        function tilePixelToLatLng(i, j, coords) {
            const n = Math.pow(2, coords.z)
            const lon = ((coords.x + i / 256) / n) * 360 - 180
            const latRad = Math.atan(Math.sinh(Math.PI * (1 - (2 * (coords.y + j / 256)) / n)))
            const lat = (latRad * 180) / Math.PI
            return { lat, lon }
        }

        function latLngToWindGridIndex(lat, lon, header) {
            const { lo1, la1, lo2, la2, nx, ny } = header
            
            const Δλ = (lo2 - lo1) / (nx - 1);
            const fi = floorMod(lon - lo1, 360) / Δλ;
            
            const fj = ((la1 - lat) / (la1 - la2)) * (ny - 1);
            
            return { fi, fj }
        }

        function bilinearInterpolate(arr, nx, ny, fi, fj, isContinuous = false) {
            const i0 = Math.floor(fi)
            const j0 = Math.floor(fj)
            let i1 = i0 + 1
            const j1 = Math.min(j0 + 1, ny - 1)
            
            if (isContinuous && i1 >= nx) {
                i1 = 0; 
            } else {
                i1 = Math.min(i1, nx - 1);
            }
            
            const dx = fi - i0
            const dy = fj - j0
            
            function getVal(i, j) {
                if (j < 0 || j >= ny) return null;
                if (i < 0 || i >= nx) {
                    if (isContinuous && i >= nx) {
                        i = 0; 
                    } else {
                        return null;
                    }
                }
                return arr[j * nx + i]
            }
            
            const v00 = getVal(i0, j0)
            const v10 = getVal(i1, j0)
            const v01 = getVal(i0, j1)
            const v11 = getVal(i1, j1)
            
            if (v00 == null || v10 == null || v01 == null || v11 == null ||
                isNaN(v00) || isNaN(v10) || isNaN(v01) || isNaN(v11)) {
                return null;
            }
            
            return (
                v00 * (1 - dx) * (1 - dy) +
                v10 * dx * (1 - dy) +
                v01 * (1 - dx) * dy +
                v11 * dx * dy
            )
        }

        let COLORSCALE = options.colorScale || [
            [193, [90, 86, 143]],
            [206, [72, 104, 181]],
            [219, [69, 151, 168]],
            [233.15, [81, 180, 98]], // -40 C/F
            [255.372, [106, 192, 82]], // 0 F
            [273.15, [177, 209, 67]], // 0 C
            [275.15, [215, 206, 60]], // just above 0 C
            [291, [214, 172, 64]],
            [298, [213, 137, 72]],
            [311, [205, 94, 93]],
            [328, [144, 28, 79]]
        ];
        
        const setColorScale = function() {
            let n = parseFloat(((MAX_VELOCITY_INTENSITY - MIN_VELOCITY_INTENSITY) / 10).toFixed(4)),
                m = MIN_VELOCITY_INTENSITY;
            
            for (let i = 0; i < COLORSCALE.length; i++) {
                COLORSCALE[i][0] = m;
                m += n;
            }
            
            return COLORSCALE;
        };
        
        // 如果没有传入自定义颜色配置，则重新分配数值
        if (!options.colorScale) {
            COLORSCALE = setColorScale();
        }
        
        function isValue(x) {
            return x !== null && x !== undefined;
        }
        
        function clamp(x, low, high) {
            return Math.max(low, Math.min(x, high));
        }
        
        function proportion(x, low, high) {
            return (clamp(x, low, high) - low) / (high - low);
        }
        
        function colorInterpolator(start, end) {
            var r = start[0],
                g = start[1],
                b = start[2];
            var Δr = end[0] - r,
                Δg = end[1] - g,
                Δb = end[2] - b;
            return function (i, a) {
                return [Math.floor(r + i * Δr), Math.floor(g + i * Δg), Math.floor(b + i * Δb), a];
            };
        }
        
        function segmentedColorScale(segments) {
            var points = [],
                interpolators = [],
                ranges = [];
            
            for (var i = 0; i < segments.length - 1; i++) {
                points.push(segments[i + 1][0]);
                interpolators.push(colorInterpolator(segments[i][1], segments[i + 1][1]));
                ranges.push([segments[i][0], segments[i + 1][0]]);
            }
            
            return function (point, alpha) {
                var i;
                for (i = 0; i < points.length - 1; i++) {
                    if (point <= points[i]) {
                        break;
                    }
                }
                var range = ranges[i];
                return interpolators[i](proportion(point, range[0], range[1]), alpha);
            };
        }
        
        var SCALE = {
            bounds: [MIN_VELOCITY_INTENSITY, MAX_VELOCITY_INTENSITY],
            gradient: segmentedColorScale(COLORSCALE)
        };
        
        function getColor(value) {
            if (!isValue(value)) {
                return TRANSPARENT_BLACK;
            }
            var color = SCALE.gradient(value, OVERLAY_ALPHA);
            return [color[0], color[1], color[2], color[3]];
        }

        const Δλ = (header.lo2 - header.lo1) / (header.nx - 1);
        const isContinuous = Math.floor(header.nx * Δλ) >= 360;

        const WindCanvasTileLayer = L.GridLayer.extend({
            createTile: function (coords) {
                const tile = document.createElement('canvas')
                tile.width = tile.height = 256
                const ctx = tile.getContext('2d')
                const imgData = ctx.createImageData(256, 256)
                const data = imgData.data
                
                for (let j = 0; j < 256; j++) {
                    for (let i = 0; i < 256; i++) {
                        const { lat, lon } = tilePixelToLatLng(i, j, coords)
                        const { fi, fj } = latLngToWindGridIndex(lat, lon, header)
                        const value = bilinearInterpolate(windData, header.nx, header.ny, fi, fj, isContinuous)
                        const [r, g, b, a] = getColor(value)
                        const idx = (j * 256 + i) * 4
                        data[idx] = r
                        data[idx + 1] = g
                        data[idx + 2] = b
                        data[idx + 3] = a
                    }
                }
                ctx.putImageData(imgData, 0, 0)
                return tile
            },
        })
        
        // 创建并添加瓦片图层
        if (this.tileScalarLayer) {
            map2D.removeLayer(this.tileScalarLayer);
        }
        this.tileScalarLayer = new WindCanvasTileLayer({
            opacity: OPACITY 
        });
        this.tileScalarLayer.addTo(map2D);
        */
  },

  removeVectorLayer() {
    if (this.velocityLayer) {
      this.velocityLayer.onRemove(map2D);
      this.velocityLayer = null;
    }
  },

  clearScalarLayer() {
    if (this.tileScalarLayer) {
      map2D.removeLayer(this.tileScalarLayer);
      this.tileScalarLayer = null;
    }
  },

  // 添加 GeoServer WMS 图层
  addWmsLayer(map, options = {}) {
    const defaultOptions = {
      url: "http://localhost:8080/geoserver/wms",
      layers: "ne:my_points",
      styles: "population",
      format: "image/png",
      transparent: true,
      version: "1.1.1",
      opacity: 0.8,
    };

    const wmsOptions = { ...defaultOptions, ...options };
    const { url, opacity, ...layerParams } = wmsOptions;

    // 使用传入的 map 或默认的 map2D
    const targetMap = map || map2D;
    if (!targetMap) {
      console.error("地图实例不存在");
      return null;
    }

    if (this.wmsLayer) {
      this.removeWmsLayer(targetMap);
    }

    this.wmsLayer = L.tileLayer.wms(url, {
      layers: layerParams.layers,
      styles: layerParams.styles,
      format: layerParams.format,
      transparent: layerParams.transparent,
      version: layerParams.version,
      attribution: "GeoServer",
      opacity: opacity,
    });

    this.wmsLayer.addTo(targetMap);
    return this.wmsLayer;
  },

  // 移除 WMS 图层
  removeWmsLayer(map) {
    const targetMap = map || map2D;
    if (this.wmsLayer && targetMap) {
      targetMap.removeLayer(this.wmsLayer);
      this.wmsLayer = null;
    }
  },

  // 设置 WMS 图层透明度
  setWmsOpacity(opacity) {
    if (this.wmsLayer) {
      this.wmsLayer.setOpacity(opacity);
    }
  },

  // 更新 WMS 图层参数（如切换样式）
  updateWmsParams(map, params) {
    if (this.wmsLayer) {
      this.wmsLayer.setParams(params);
    }
  },

  // 获取地图实例
  getMap() {
    return map2D;
  },
};
