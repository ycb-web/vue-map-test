(function() { try { var style = document.createElement("style"); style.textContent = "\n.typhoon-label span {\n  font-size: 11px;\n  color: #333;\n  background: rgba(255, 255, 255, 0.8);\n  padding: 1px 4px;\n  border-radius: 2px;\n  white-space: nowrap;\n}\n.forecast-label span {\n  font-size: 11px;\n}\n\n.typhoon-page[data-v-5e05a7d9] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.map-container[data-v-5e05a7d9] {\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n.controls[data-v-5e05a7d9] {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  background: white;\n  padding: 15px;\n  border-radius: 4px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);\n  z-index: 1000;\n  text-align: left;\n  min-width: 160px;\n}\n.control-item[data-v-5e05a7d9] {\n  margin-bottom: 10px;\n}\n.control-item[data-v-5e05a7d9]:last-child {\n  margin-bottom: 0;\n}\nlabel[data-v-5e05a7d9] {\n  cursor: pointer;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n}\ninput[type=\"checkbox\"][data-v-5e05a7d9] {\n  margin-right: 8px;\n}\n.selected-info[data-v-5e05a7d9] {\n  margin-top: 15px;\n  padding-top: 12px;\n  border-top: 1px solid #eee;\n}\n.info-title[data-v-5e05a7d9] {\n  font-weight: bold;\n  color: #1890ff;\n  margin-bottom: 6px;\n}\n.info-time[data-v-5e05a7d9] {\n  font-size: 13px;\n  color: #666;\n  margin-bottom: 4px;\n}\n.info-item[data-v-5e05a7d9] {\n  font-size: 12px;\n  color: #333;\n  margin-bottom: 2px;\n}\n.legend[data-v-5e05a7d9] {\n  position: absolute;\n  bottom: 30px;\n  right: 20px;\n  background: white;\n  padding: 12px;\n  border-radius: 4px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);\n  z-index: 1000;\n  font-size: 12px;\n}\n.legend-title[data-v-5e05a7d9] {\n  font-weight: bold;\n  margin-bottom: 8px;\n  border-bottom: 1px solid #eee;\n  padding-bottom: 4px;\n}\n.legend-item[data-v-5e05a7d9] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 4px;\n}\n.color-box[data-v-5e05a7d9] {\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  margin-right: 8px;\n  border: 1px solid #ccc;\n}\n.color-line[data-v-5e05a7d9] {\n  width: 20px;\n  height: 3px;\n  margin-right: 8px;\n}\n"; document.head.appendChild(style); } catch(e) { console.error("CSS inject error:", e); } })();

import { defineComponent as t0, ref as w, onMounted as p0, onUnmounted as o0, openBlock as W, createElementBlock as B, createElementVNode as o, withDirectives as y, vModelCheckbox as F, createTextVNode as $, toDisplayString as x, createCommentVNode as n0, createStaticVNode as T0 } from "vue";
import l from "leaflet";
const l0 = [
  {
    lng: 120.716,
    lat: 22.1,
    position: "台湾屏东县恒春镇沿海",
    time: "2025-11-12T19:50:00",
    ty_la_id: "4612a4b8-81b2-49ed-aaaf-a214604b2d43",
    ty_code: "202526"
  }
], g0 = [
  {
    lng: 142.1,
    lat: 9.6,
    power: 8,
    speed: 18,
    pressure: 998,
    radius7: 380,
    en7: 360,
    es7: 300,
    wn7: 380,
    ws7: 300,
    radius10: 0,
    en10: 0,
    es10: 0,
    wn10: 0,
    ws10: 0,
    radius12: 0,
    en12: 0,
    es12: 0,
    wn12: 0,
    ws12: 0,
    remark: "",
    strong: "热带风暴(TS)",
    time: "2025-11-06T02:00:00",
    data: [
      {
        source: "韩国",
        time: "2025-11-06T02:00:00",
        data: [
          {
            lng: 141.4,
            lat: 10.6,
            power: 9,
            speed: 23,
            pressure: 992,
            strong: "热带风暴(TS)",
            time: "2025-11-06T14:00:00"
          },
          {
            lng: 139.9,
            lat: 11.4,
            power: 9,
            speed: 24,
            pressure: 990,
            strong: "热带风暴(TS)",
            time: "2025-11-07T02:00:00"
          },
          {
            lng: 135.4,
            lat: 13.3,
            power: 11,
            speed: 29,
            pressure: 980,
            strong: "强热带风暴(STS)",
            time: "2025-11-08T02:00:00"
          },
          {
            lng: 128.8,
            lat: 14.6,
            power: 13,
            speed: 39,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-09T02:00:00"
          },
          {
            lng: 123.3,
            lat: 16.8,
            power: 15,
            speed: 47,
            pressure: 940,
            strong: "强台风(STY)",
            time: "2025-11-10T02:00:00"
          },
          {
            lng: 120.4,
            lat: 18.2,
            power: 13,
            speed: 39,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-11T02:00:00"
          }
        ]
      },
      {
        source: "欧洲",
        time: "2025-11-06T02:00:00",
        data: [
          {
            lng: 139.1,
            lat: 11.4,
            power: 11,
            speed: 30,
            strong: "强热带风暴(STS)",
            time: "2025-11-07T02:00:00"
          },
          {
            lng: 134.2,
            lat: 12.5,
            power: 13,
            speed: 38,
            strong: "台风(TY)",
            time: "2025-11-08T02:00:00"
          },
          {
            lng: 127.9,
            lat: 14,
            power: 14,
            speed: 43,
            strong: "强台风(STY)",
            time: "2025-11-09T02:00:00"
          },
          {
            lng: 122.3,
            lat: 16.8,
            power: 15,
            speed: 48,
            strong: "强台风(STY)",
            time: "2025-11-10T02:00:00"
          },
          {
            lng: 119.6,
            lat: 18.4,
            power: 13,
            speed: 40,
            strong: "台风(TY)",
            time: "2025-11-11T02:00:00"
          }
        ]
      },
      {
        source: "中国",
        time: "2025-11-06T02:00:00",
        data: [
          {
            lng: 140.8,
            lat: 11.1,
            power: 8,
            speed: 20,
            pressure: 995,
            strong: "热带风暴(TS)",
            time: "2025-11-06T14:00:00"
          },
          {
            lng: 139.2,
            lat: 12,
            power: 10,
            speed: 25,
            pressure: 985,
            strong: "强热带风暴(STS)",
            time: "2025-11-07T02:00:00"
          },
          {
            lng: 137.1,
            lat: 12.8,
            power: 11,
            speed: 30,
            pressure: 980,
            strong: "强热带风暴(STS)",
            time: "2025-11-07T14:00:00"
          },
          {
            lng: 134.6,
            lat: 13,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-08T02:00:00"
          },
          {
            lng: 131.7,
            lat: 13.6,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-08T14:00:00"
          },
          {
            lng: 128.7,
            lat: 14.5,
            power: 14,
            speed: 45,
            pressure: 950,
            strong: "强台风(STY)",
            time: "2025-11-09T02:00:00"
          },
          {
            lng: 123.1,
            lat: 16.7,
            power: 16,
            speed: 52,
            pressure: 935,
            strong: "超强台风(Super TY)",
            time: "2025-11-10T02:00:00"
          },
          {
            lng: 121,
            lat: 18.3,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-11T02:00:00"
          }
        ]
      },
      {
        source: "日本",
        time: "2025-11-06T02:00:00",
        data: [
          {
            lng: 139.9,
            lat: 11.6,
            power: 9,
            speed: 23,
            pressure: 992,
            strong: "热带风暴(TS)",
            time: "2025-11-07T02:00:00"
          },
          {
            lng: 135.8,
            lat: 13.4,
            power: 11,
            speed: 30,
            pressure: 985,
            strong: "强热带风暴(STS)",
            time: "2025-11-08T02:00:00"
          },
          {
            lng: 129.6,
            lat: 14.9,
            power: 13,
            speed: 40,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-09T02:00:00"
          },
          {
            lng: 123.6,
            lat: 17,
            power: 14,
            speed: 45,
            pressure: 940,
            strong: "强台风(STY)",
            time: "2025-11-10T02:00:00"
          },
          {
            lng: 120.1,
            lat: 18,
            power: 13,
            speed: 40,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-11T02:00:00"
          }
        ]
      }
    ],
    move_dir: "西北",
    move_speed: 19
  },
  {
    lng: 141.7,
    lat: 10.1,
    power: 8,
    speed: 18,
    pressure: 998,
    radius7: 380,
    en7: 360,
    es7: 300,
    wn7: 380,
    ws7: 300,
    radius10: 0,
    en10: 0,
    es10: 0,
    wn10: 0,
    ws10: 0,
    radius12: 0,
    en12: 0,
    es12: 0,
    wn12: 0,
    ws12: 0,
    remark: "",
    strong: "热带风暴(TS)",
    time: "2025-11-06T05:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-06T05:00:00",
        data: [
          {
            lng: 140.4,
            lat: 10.8,
            power: 8,
            speed: 20,
            pressure: 995,
            strong: "热带风暴(TS)",
            time: "2025-11-06T17:00:00"
          },
          {
            lng: 138.7,
            lat: 11.8,
            power: 10,
            speed: 25,
            pressure: 985,
            strong: "强热带风暴(STS)",
            time: "2025-11-07T05:00:00"
          },
          {
            lng: 136.4,
            lat: 12.5,
            power: 11,
            speed: 30,
            pressure: 980,
            strong: "强热带风暴(STS)",
            time: "2025-11-07T17:00:00"
          },
          {
            lng: 133.7,
            lat: 13,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-08T05:00:00"
          },
          {
            lng: 130.6,
            lat: 13.8,
            power: 14,
            speed: 42,
            pressure: 955,
            strong: "强台风(STY)",
            time: "2025-11-08T17:00:00"
          },
          {
            lng: 127.2,
            lat: 14.9,
            power: 15,
            speed: 48,
            pressure: 945,
            strong: "强台风(STY)",
            time: "2025-11-09T05:00:00"
          },
          {
            lng: 122.1,
            lat: 17.1,
            power: 15,
            speed: 48,
            pressure: 945,
            strong: "强台风(STY)",
            time: "2025-11-10T05:00:00"
          },
          {
            lng: 119.3,
            lat: 18.4,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-11T05:00:00"
          }
        ]
      },
      {
        source: "日本",
        time: "2025-11-06T05:00:00",
        data: [
          {
            lng: 140.6,
            lat: 10.7,
            power: 8,
            speed: 20,
            pressure: 996,
            strong: "热带风暴(TS)",
            time: "2025-11-06T17:00:00"
          },
          {
            lng: 139.1,
            lat: 11.9,
            power: 9,
            speed: 23,
            pressure: 992,
            strong: "热带风暴(TS)",
            time: "2025-11-07T05:00:00"
          },
          {
            lng: 135.8,
            lat: 13.4,
            power: 11,
            speed: 30,
            pressure: 985,
            strong: "强热带风暴(STS)",
            time: "2025-11-08T02:00:00"
          },
          {
            lng: 129.6,
            lat: 14.9,
            power: 13,
            speed: 40,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-09T02:00:00"
          },
          {
            lng: 123.6,
            lat: 17,
            power: 14,
            speed: 45,
            pressure: 940,
            strong: "强台风(STY)",
            time: "2025-11-10T02:00:00"
          },
          {
            lng: 120.1,
            lat: 18,
            power: 13,
            speed: 40,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-11T02:00:00"
          }
        ]
      }
    ],
    move_dir: "西西北",
    move_speed: 14
  },
  {
    lng: 140.6,
    lat: 10.5,
    power: 8,
    speed: 18,
    pressure: 998,
    radius7: 380,
    en7: 360,
    es7: 300,
    wn7: 380,
    ws7: 300,
    radius10: 0,
    en10: 0,
    es10: 0,
    wn10: 0,
    ws10: 0,
    radius12: 0,
    en12: 0,
    es12: 0,
    wn12: 0,
    ws12: 0,
    remark: "",
    strong: "热带风暴(TS)",
    time: "2025-11-06T08:00:00",
    data: [
      {
        source: "欧洲",
        time: "2025-11-06T08:00:00",
        data: [
          {
            lng: 137.9,
            lat: 11.6,
            power: 12,
            speed: 33,
            strong: "台风(TY)",
            time: "2025-11-07T08:00:00"
          },
          {
            lng: 132.8,
            lat: 12.4,
            power: 14,
            speed: 43,
            strong: "强台风(STY)",
            time: "2025-11-08T08:00:00"
          },
          {
            lng: 126.5,
            lat: 14.4,
            power: 15,
            speed: 48,
            strong: "强台风(STY)",
            time: "2025-11-09T08:00:00"
          },
          {
            lng: 121.3,
            lat: 17,
            power: 14,
            speed: 45,
            strong: "强台风(STY)",
            time: "2025-11-10T08:00:00"
          },
          {
            lng: 119.3,
            lat: 18.5,
            power: 13,
            speed: 38,
            strong: "台风(TY)",
            time: "2025-11-11T08:00:00"
          }
        ]
      },
      {
        source: "美国",
        time: "2025-11-06T08:00:00",
        data: [
          {
            lng: 136.8,
            lat: 11.9,
            power: 12,
            speed: 33,
            strong: "台风(TY)",
            time: "2025-11-07T08:00:00"
          },
          {
            lng: 128.3,
            lat: 13.9,
            power: 15,
            speed: 49,
            strong: "强台风(STY)",
            time: "2025-11-08T08:00:00"
          },
          {
            lng: 125,
            lat: 15.1,
            power: 17,
            speed: 59,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T08:00:00"
          },
          {
            lng: 120.5,
            lat: 17.4,
            power: 12,
            speed: 33,
            strong: "台风(TY)",
            time: "2025-11-10T08:00:00"
          },
          {
            lng: 117.9,
            lat: 19.6,
            power: 13,
            speed: 41,
            strong: "台风(TY)",
            time: "2025-11-11T08:00:00"
          }
        ]
      },
      {
        source: "中国",
        time: "2025-11-06T08:00:00",
        data: [
          {
            lng: 139.6,
            lat: 11.3,
            power: 9,
            speed: 23,
            pressure: 990,
            strong: "热带风暴(TS)",
            time: "2025-11-06T20:00:00"
          },
          {
            lng: 138,
            lat: 12.2,
            power: 10,
            speed: 28,
            pressure: 982,
            strong: "强热带风暴(STS)",
            time: "2025-11-07T08:00:00"
          },
          {
            lng: 135.8,
            lat: 12.8,
            power: 12,
            speed: 33,
            pressure: 975,
            strong: "台风(TY)",
            time: "2025-11-07T20:00:00"
          },
          {
            lng: 133,
            lat: 13.2,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-08T08:00:00"
          },
          {
            lng: 129.8,
            lat: 14.1,
            power: 14,
            speed: 45,
            pressure: 950,
            strong: "强台风(STY)",
            time: "2025-11-08T20:00:00"
          },
          {
            lng: 126.6,
            lat: 14.9,
            power: 16,
            speed: 52,
            pressure: 935,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T08:00:00"
          },
          {
            lng: 121.6,
            lat: 17.3,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-10T08:00:00"
          },
          {
            lng: 119.5,
            lat: 18.8,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-11T08:00:00"
          }
        ]
      },
      {
        source: "韩国",
        time: "2025-11-06T08:00:00",
        data: [
          {
            lng: 139.5,
            lat: 11.2,
            power: 9,
            speed: 24,
            pressure: 990,
            strong: "热带风暴(TS)",
            time: "2025-11-06T20:00:00"
          },
          {
            lng: 138.2,
            lat: 11.8,
            power: 11,
            speed: 29,
            pressure: 980,
            strong: "强热带风暴(STS)",
            time: "2025-11-07T08:00:00"
          },
          {
            lng: 133.6,
            lat: 13,
            power: 13,
            speed: 39,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-08T08:00:00"
          },
          {
            lng: 127.1,
            lat: 15.1,
            power: 15,
            speed: 49,
            pressure: 935,
            strong: "强台风(STY)",
            time: "2025-11-09T08:00:00"
          },
          {
            lng: 122,
            lat: 16.8,
            power: 13,
            speed: 39,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-10T08:00:00"
          },
          {
            lng: 120,
            lat: 18.4,
            power: 11,
            speed: 32,
            pressure: 975,
            strong: "强热带风暴(STS)",
            time: "2025-11-11T08:00:00"
          }
        ]
      },
      {
        source: "日本",
        time: "2025-11-06T08:00:00",
        data: [
          {
            lng: 140.2,
            lat: 11.2,
            power: 9,
            speed: 23,
            pressure: 990,
            strong: "热带风暴(TS)",
            time: "2025-11-06T20:00:00"
          },
          {
            lng: 138.6,
            lat: 12.1,
            power: 11,
            speed: 30,
            pressure: 980,
            strong: "强热带风暴(STS)",
            time: "2025-11-07T08:00:00"
          },
          {
            lng: 133.7,
            lat: 13.5,
            power: 12,
            speed: 35,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-08T08:00:00"
          },
          {
            lng: 127.1,
            lat: 15.5,
            power: 14,
            speed: 45,
            pressure: 935,
            strong: "强台风(STY)",
            time: "2025-11-09T08:00:00"
          },
          {
            lng: 121.5,
            lat: 17.3,
            power: 13,
            speed: 40,
            pressure: 950,
            strong: "台风(TY)",
            time: "2025-11-10T08:00:00"
          },
          {
            lng: 119.2,
            lat: 18.6,
            power: 11,
            speed: 30,
            pressure: 975,
            strong: "强热带风暴(STS)",
            time: "2025-11-11T08:00:00"
          }
        ]
      }
    ],
    move_dir: "西北",
    move_speed: 12
  },
  {
    lng: 140.5,
    lat: 10.5,
    power: 8,
    speed: 20,
    pressure: 995,
    radius7: 380,
    en7: 360,
    es7: 300,
    wn7: 380,
    ws7: 300,
    radius10: 0,
    en10: 0,
    es10: 0,
    wn10: 0,
    ws10: 0,
    radius12: 0,
    en12: 0,
    es12: 0,
    wn12: 0,
    ws12: 0,
    remark: "",
    strong: "热带风暴(TS)",
    time: "2025-11-06T11:00:00",
    data: [
      {
        source: "日本",
        time: "2025-11-06T11:00:00",
        data: [
          {
            lng: 139.5,
            lat: 11.4,
            power: 9,
            speed: 23,
            pressure: 990,
            strong: "热带风暴(TS)",
            time: "2025-11-06T23:00:00"
          },
          {
            lng: 138,
            lat: 12.1,
            power: 11,
            speed: 30,
            pressure: 980,
            strong: "强热带风暴(STS)",
            time: "2025-11-07T11:00:00"
          },
          {
            lng: 133.7,
            lat: 13.5,
            power: 12,
            speed: 35,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-08T08:00:00"
          },
          {
            lng: 127.1,
            lat: 15.5,
            power: 14,
            speed: 45,
            pressure: 935,
            strong: "强台风(STY)",
            time: "2025-11-09T08:00:00"
          },
          {
            lng: 121.5,
            lat: 17.3,
            power: 13,
            speed: 40,
            pressure: 950,
            strong: "台风(TY)",
            time: "2025-11-10T08:00:00"
          },
          {
            lng: 119.2,
            lat: 18.6,
            power: 11,
            speed: 30,
            pressure: 975,
            strong: "强热带风暴(STS)",
            time: "2025-11-11T08:00:00"
          }
        ]
      },
      {
        source: "中国",
        time: "2025-11-06T11:00:00",
        data: [
          {
            lng: 139.6,
            lat: 11.4,
            power: 9,
            speed: 23,
            pressure: 990,
            strong: "热带风暴(TS)",
            time: "2025-11-06T23:00:00"
          },
          {
            lng: 137.3,
            lat: 12.3,
            power: 10,
            speed: 28,
            pressure: 982,
            strong: "强热带风暴(STS)",
            time: "2025-11-07T11:00:00"
          },
          {
            lng: 135,
            lat: 12.8,
            power: 12,
            speed: 33,
            pressure: 975,
            strong: "台风(TY)",
            time: "2025-11-07T23:00:00"
          },
          {
            lng: 132.1,
            lat: 13.3,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-08T11:00:00"
          },
          {
            lng: 128.8,
            lat: 14.2,
            power: 14,
            speed: 45,
            pressure: 950,
            strong: "强台风(STY)",
            time: "2025-11-08T23:00:00"
          },
          {
            lng: 125.6,
            lat: 15.2,
            power: 16,
            speed: 52,
            pressure: 935,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T11:00:00"
          },
          {
            lng: 120.7,
            lat: 17.4,
            power: 13,
            speed: 38,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-10T11:00:00"
          },
          {
            lng: 119.4,
            lat: 19.2,
            power: 12,
            speed: 33,
            pressure: 975,
            strong: "台风(TY)",
            time: "2025-11-11T11:00:00"
          }
        ]
      }
    ],
    move_dir: "西北",
    move_speed: 12
  },
  {
    lng: 140.2,
    lat: 10.1,
    power: 8,
    speed: 20,
    pressure: 995,
    radius7: 380,
    en7: 360,
    es7: 300,
    wn7: 380,
    ws7: 300,
    remark: "",
    strong: "热带风暴(TS)",
    time: "2025-11-06T14:00:00",
    data: [
      {
        source: "日本",
        time: "2025-11-06T14:00:00",
        data: [
          {
            lng: 138.7,
            lat: 11.5,
            power: 9,
            speed: 23,
            pressure: 990,
            strong: "热带风暴(TS)",
            time: "2025-11-07T02:00:00"
          },
          {
            lng: 137.2,
            lat: 12.5,
            power: 11,
            speed: 30,
            pressure: 980,
            strong: "强热带风暴(STS)",
            time: "2025-11-07T14:00:00"
          },
          {
            lng: 131.8,
            lat: 14,
            power: 12,
            speed: 35,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-08T14:00:00"
          },
          {
            lng: 124.9,
            lat: 15.8,
            power: 14,
            speed: 45,
            pressure: 935,
            strong: "强台风(STY)",
            time: "2025-11-09T14:00:00"
          },
          {
            lng: 119.9,
            lat: 17.2,
            power: 13,
            speed: 40,
            pressure: 950,
            strong: "台风(TY)",
            time: "2025-11-10T14:00:00"
          },
          {
            lng: 118.3,
            lat: 19,
            power: 11,
            speed: 30,
            pressure: 975,
            strong: "强热带风暴(STS)",
            time: "2025-11-11T14:00:00"
          }
        ]
      },
      {
        source: "南海所",
        time: "2025-11-06T14:00:00",
        data: [
          {
            lng: 134.2,
            lat: 13,
            power: 11,
            speed: 32,
            pressure: 976,
            strong: "强热带风暴(STS)",
            time: "2025-11-08T02:00:00"
          },
          {
            lng: 133.8,
            lat: 13.6,
            power: 12,
            speed: 34,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-08T08:00:00"
          },
          {
            lng: 132.1,
            lat: 14.4,
            power: 13,
            speed: 41,
            pressure: 953,
            strong: "台风(TY)",
            time: "2025-11-08T14:00:00"
          },
          {
            lng: 130,
            lat: 14.1,
            power: 15,
            speed: 48,
            pressure: 953,
            strong: "强台风(STY)",
            time: "2025-11-08T20:00:00"
          },
          {
            lng: 127.9,
            lat: 14.8,
            power: 14,
            speed: 42,
            pressure: 951,
            strong: "强台风(STY)",
            time: "2025-11-09T02:00:00"
          },
          {
            lng: 126.1,
            lat: 15,
            power: 14,
            speed: 44,
            pressure: 945,
            strong: "强台风(STY)",
            time: "2025-11-09T08:00:00"
          },
          {
            lng: 124.4,
            lat: 15.6,
            power: 14,
            speed: 43,
            pressure: 942,
            strong: "强台风(STY)",
            time: "2025-11-09T14:00:00"
          },
          {
            lng: 123.8,
            lat: 15.8,
            power: 14,
            speed: 42,
            pressure: 951,
            strong: "强台风(STY)",
            time: "2025-11-09T20:00:00"
          },
          {
            lng: 122.3,
            lat: 16.1,
            power: 13,
            speed: 40,
            pressure: 950,
            strong: "台风(TY)",
            time: "2025-11-10T02:00:00"
          },
          {
            lng: 121.5,
            lat: 15.7,
            power: 12,
            speed: 34,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-10T08:00:00"
          },
          {
            lng: 120.3,
            lat: 16.3,
            power: 12,
            speed: 35,
            pressure: 959,
            strong: "台风(TY)",
            time: "2025-11-10T14:00:00"
          },
          {
            lng: 120.1,
            lat: 17,
            power: 12,
            speed: 35,
            pressure: 968,
            strong: "台风(TY)",
            time: "2025-11-10T20:00:00"
          },
          {
            lng: 119.8,
            lat: 17.7,
            power: 13,
            speed: 37,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-11T02:00:00"
          },
          {
            lng: 119.4,
            lat: 18.4,
            power: 12,
            speed: 36,
            pressure: 973,
            strong: "台风(TY)",
            time: "2025-11-11T08:00:00"
          }
        ]
      },
      {
        source: "欧洲",
        time: "2025-11-06T14:00:00",
        data: [
          {
            lng: 136.6,
            lat: 11.7,
            power: 12,
            speed: 35,
            strong: "台风(TY)",
            time: "2025-11-07T14:00:00"
          },
          {
            lng: 131.3,
            lat: 12.8,
            power: 14,
            speed: 45,
            strong: "强台风(STY)",
            time: "2025-11-08T14:00:00"
          },
          {
            lng: 125.4,
            lat: 15.1,
            power: 16,
            speed: 51,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T14:00:00"
          },
          {
            lng: 121,
            lat: 17.1,
            power: 13,
            speed: 40,
            strong: "台风(TY)",
            time: "2025-11-10T14:00:00"
          },
          {
            lng: 119,
            lat: 19.3,
            power: 12,
            speed: 33,
            strong: "台风(TY)",
            time: "2025-11-11T14:00:00"
          }
        ]
      },
      {
        source: "美国",
        time: "2025-11-06T14:00:00",
        data: [
          {
            lng: 137,
            lat: 11.2,
            power: 12,
            speed: 36,
            strong: "台风(TY)",
            time: "2025-11-07T14:00:00"
          },
          {
            lng: 131.2,
            lat: 12.5,
            power: 16,
            speed: 51,
            strong: "超强台风(Super TY)",
            time: "2025-11-08T14:00:00"
          },
          {
            lng: 124.7,
            lat: 14.7,
            power: 17,
            speed: 59,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T14:00:00"
          },
          {
            lng: 120.1,
            lat: 16.8,
            power: 13,
            speed: 39,
            strong: "台风(TY)",
            time: "2025-11-10T14:00:00"
          },
          {
            lng: 118.8,
            lat: 19.2,
            power: 12,
            speed: 36,
            strong: "台风(TY)",
            time: "2025-11-11T14:00:00"
          }
        ]
      },
      {
        source: "韩国",
        time: "2025-11-06T14:00:00",
        data: [
          {
            lng: 138.9,
            lat: 11.5,
            power: 10,
            speed: 27,
            pressure: 985,
            strong: "强热带风暴(STS)",
            time: "2025-11-07T02:00:00"
          },
          {
            lng: 137.1,
            lat: 12.2,
            power: 11,
            speed: 32,
            pressure: 975,
            strong: "强热带风暴(STS)",
            time: "2025-11-07T14:00:00"
          },
          {
            lng: 131.5,
            lat: 13.5,
            power: 14,
            speed: 43,
            pressure: 950,
            strong: "强台风(STY)",
            time: "2025-11-08T14:00:00"
          },
          {
            lng: 125.1,
            lat: 15.6,
            power: 15,
            speed: 49,
            pressure: 935,
            strong: "强台风(STY)",
            time: "2025-11-09T14:00:00"
          },
          {
            lng: 120,
            lat: 17.4,
            power: 13,
            speed: 39,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-10T14:00:00"
          },
          {
            lng: 118.8,
            lat: 19.1,
            power: 11,
            speed: 32,
            pressure: 975,
            strong: "强热带风暴(STS)",
            time: "2025-11-11T14:00:00"
          }
        ]
      },
      {
        source: "中国",
        time: "2025-11-06T14:00:00",
        data: [
          {
            lng: 138.8,
            lat: 11.7,
            power: 10,
            speed: 25,
            pressure: 985,
            strong: "强热带风暴(STS)",
            time: "2025-11-07T02:00:00"
          },
          {
            lng: 136.6,
            lat: 12.5,
            power: 11,
            speed: 30,
            pressure: 980,
            strong: "强热带风暴(STS)",
            time: "2025-11-07T14:00:00"
          },
          {
            lng: 134.5,
            lat: 12.9,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-08T02:00:00"
          },
          {
            lng: 131.3,
            lat: 13.6,
            power: 14,
            speed: 42,
            pressure: 955,
            strong: "强台风(STY)",
            time: "2025-11-08T14:00:00"
          },
          {
            lng: 127.8,
            lat: 14.6,
            power: 16,
            speed: 52,
            pressure: 935,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T02:00:00"
          },
          {
            lng: 124.8,
            lat: 15.6,
            power: 16,
            speed: 55,
            pressure: 930,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T14:00:00"
          },
          {
            lng: 119.9,
            lat: 17.7,
            power: 13,
            speed: 38,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-10T14:00:00"
          },
          {
            lng: 118.7,
            lat: 19.6,
            power: 12,
            speed: 33,
            pressure: 975,
            strong: "台风(TY)",
            time: "2025-11-11T14:00:00"
          }
        ]
      }
    ],
    move_dir: "西北",
    move_speed: 20
  },
  {
    lng: 139.6,
    lat: 10.1,
    power: 8,
    speed: 20,
    pressure: 995,
    radius7: 380,
    en7: 360,
    es7: 300,
    wn7: 380,
    ws7: 300,
    radius10: 0,
    en10: 0,
    es10: 0,
    wn10: 0,
    ws10: 0,
    radius12: 0,
    en12: 0,
    es12: 0,
    wn12: 0,
    ws12: 0,
    remark: "",
    strong: "热带风暴(TS)",
    time: "2025-11-06T17:00:00",
    data: [
      {
        source: "日本",
        time: "2025-11-06T17:00:00",
        data: [
          {
            lng: 138.9,
            lat: 11.7,
            power: 9,
            speed: 23,
            pressure: 990,
            strong: "热带风暴(TS)",
            time: "2025-11-07T05:00:00"
          },
          {
            lng: 136.9,
            lat: 12.5,
            power: 11,
            speed: 30,
            pressure: 980,
            strong: "强热带风暴(STS)",
            time: "2025-11-07T17:00:00"
          },
          {
            lng: 131.8,
            lat: 14,
            power: 12,
            speed: 35,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-08T14:00:00"
          },
          {
            lng: 124.9,
            lat: 15.8,
            power: 14,
            speed: 45,
            pressure: 935,
            strong: "强台风(STY)",
            time: "2025-11-09T14:00:00"
          },
          {
            lng: 119.9,
            lat: 17.2,
            power: 13,
            speed: 40,
            pressure: 950,
            strong: "台风(TY)",
            time: "2025-11-10T14:00:00"
          },
          {
            lng: 118.3,
            lat: 19,
            power: 11,
            speed: 30,
            pressure: 975,
            strong: "强热带风暴(STS)",
            time: "2025-11-11T14:00:00"
          }
        ]
      },
      {
        source: "中国",
        time: "2025-11-06T17:00:00",
        data: [
          {
            lng: 138.1,
            lat: 11.3,
            power: 10,
            speed: 25,
            pressure: 985,
            strong: "强热带风暴(STS)",
            time: "2025-11-07T05:00:00"
          },
          {
            lng: 136.2,
            lat: 11.8,
            power: 11,
            speed: 30,
            pressure: 980,
            strong: "强热带风暴(STS)",
            time: "2025-11-07T17:00:00"
          },
          {
            lng: 133.4,
            lat: 12.4,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-08T05:00:00"
          },
          {
            lng: 130.3,
            lat: 13,
            power: 14,
            speed: 45,
            pressure: 950,
            strong: "强台风(STY)",
            time: "2025-11-08T17:00:00"
          },
          {
            lng: 126.8,
            lat: 14,
            power: 16,
            speed: 55,
            pressure: 930,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T05:00:00"
          },
          {
            lng: 124,
            lat: 15.3,
            power: 17,
            speed: 58,
            pressure: 925,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T17:00:00"
          },
          {
            lng: 119.2,
            lat: 17.5,
            power: 13,
            speed: 38,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-10T17:00:00"
          },
          {
            lng: 118.4,
            lat: 20.1,
            power: 12,
            speed: 33,
            pressure: 975,
            strong: "台风(TY)",
            time: "2025-11-11T17:00:00"
          }
        ]
      }
    ],
    move_dir: "西北",
    move_speed: 18
  },
  {
    lng: 139.2,
    lat: 10.4,
    power: 8,
    speed: 20,
    pressure: 995,
    radius7: 380,
    en7: 360,
    es7: 300,
    wn7: 380,
    ws7: 300,
    remark: "",
    strong: "热带风暴(TS)",
    time: "2025-11-06T20:00:00",
    data: [
      {
        source: "欧洲",
        time: "2025-11-06T20:00:00",
        data: [
          {
            lng: 135.6,
            lat: 12.2,
            power: 12,
            speed: 35,
            strong: "台风(TY)",
            time: "2025-11-07T20:00:00"
          },
          {
            lng: 129.2,
            lat: 13.5,
            power: 14,
            speed: 45,
            strong: "强台风(STY)",
            time: "2025-11-08T20:00:00"
          },
          {
            lng: 123,
            lat: 16.1,
            power: 16,
            speed: 51,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T20:00:00"
          },
          {
            lng: 119.4,
            lat: 17.9,
            power: 13,
            speed: 40,
            strong: "台风(TY)",
            time: "2025-11-10T20:00:00"
          },
          {
            lng: 118.8,
            lat: 20.4,
            power: 12,
            speed: 35,
            strong: "台风(TY)",
            time: "2025-11-11T20:00:00"
          }
        ]
      },
      {
        source: "美国",
        time: "2025-11-06T20:00:00",
        data: [
          {
            lng: 135.3,
            lat: 11.9,
            power: 12,
            speed: 36,
            strong: "台风(TY)",
            time: "2025-11-07T20:00:00"
          },
          {
            lng: 129,
            lat: 13.3,
            power: 16,
            speed: 51,
            strong: "超强台风(Super TY)",
            time: "2025-11-08T20:00:00"
          },
          {
            lng: 122.8,
            lat: 15.7,
            power: 17,
            speed: 59,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T20:00:00"
          },
          {
            lng: 119.2,
            lat: 17.8,
            power: 12,
            speed: 36,
            strong: "台风(TY)",
            time: "2025-11-10T20:00:00"
          },
          {
            lng: 118.6,
            lat: 20.4,
            power: 11,
            speed: 31,
            strong: "强热带风暴(STS)",
            time: "2025-11-11T20:00:00"
          }
        ]
      },
      {
        source: "中国",
        time: "2025-11-06T20:00:00",
        data: [
          {
            lng: 137.5,
            lat: 11.5,
            power: 10,
            speed: 25,
            pressure: 985,
            strong: "强热带风暴(STS)",
            time: "2025-11-07T08:00:00"
          },
          {
            lng: 135.4,
            lat: 12.2,
            power: 11,
            speed: 30,
            pressure: 980,
            strong: "强热带风暴(STS)",
            time: "2025-11-07T20:00:00"
          },
          {
            lng: 132.6,
            lat: 12.6,
            power: 13,
            speed: 38,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-08T08:00:00"
          },
          {
            lng: 129.1,
            lat: 13.3,
            power: 15,
            speed: 48,
            pressure: 945,
            strong: "强台风(STY)",
            time: "2025-11-08T20:00:00"
          },
          {
            lng: 125.9,
            lat: 14.4,
            power: 16,
            speed: 55,
            pressure: 930,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T08:00:00"
          },
          {
            lng: 123,
            lat: 15.9,
            power: 17,
            speed: 58,
            pressure: 925,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T20:00:00"
          },
          {
            lng: 119.4,
            lat: 17.9,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-10T20:00:00"
          },
          {
            lng: 119,
            lat: 20.7,
            power: 12,
            speed: 33,
            pressure: 975,
            strong: "台风(TY)",
            time: "2025-11-11T20:00:00"
          }
        ]
      },
      {
        source: "中国香港",
        time: "2025-11-06T20:00:00",
        data: [
          {
            lng: 135.6,
            lat: 12.1,
            power: 11,
            speed: 30,
            strong: "强热带风暴(STS)",
            time: "2025-11-07T20:00:00"
          },
          {
            lng: 129.3,
            lat: 13.5,
            power: 14,
            speed: 43,
            strong: "强台风(STY)",
            time: "2025-11-08T20:00:00"
          },
          {
            lng: 122.8,
            lat: 16.1,
            power: 16,
            speed: 54,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T20:00:00"
          },
          {
            lng: 118.8,
            lat: 17.8,
            power: 13,
            speed: 40,
            strong: "台风(TY)",
            time: "2025-11-10T20:00:00"
          },
          {
            lng: 118,
            lat: 20.3,
            power: 12,
            speed: 36,
            strong: "台风(TY)",
            time: "2025-11-11T20:00:00"
          }
        ]
      },
      {
        source: "日本",
        time: "2025-11-06T20:00:00",
        data: [
          {
            lng: 138.4,
            lat: 11.8,
            power: 11,
            speed: 30,
            pressure: 975,
            strong: "强热带风暴(STS)",
            time: "2025-11-07T08:00:00"
          },
          {
            lng: 136.4,
            lat: 12.6,
            power: 12,
            speed: 35,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-07T20:00:00"
          },
          {
            lng: 130.2,
            lat: 13.9,
            power: 14,
            speed: 45,
            pressure: 945,
            strong: "强台风(STY)",
            time: "2025-11-08T20:00:00"
          },
          {
            lng: 123.8,
            lat: 16.4,
            power: 15,
            speed: 50,
            pressure: 920,
            strong: "强台风(STY)",
            time: "2025-11-09T20:00:00"
          },
          {
            lng: 119.7,
            lat: 17.6,
            power: 13,
            speed: 40,
            pressure: 950,
            strong: "台风(TY)",
            time: "2025-11-10T20:00:00"
          },
          {
            lng: 118.4,
            lat: 19.6,
            power: 12,
            speed: 35,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-11T20:00:00"
          }
        ]
      },
      {
        source: "韩国",
        time: "2025-11-06T20:00:00",
        data: [
          {
            lng: 137.3,
            lat: 11.1,
            power: 11,
            speed: 29,
            pressure: 980,
            strong: "强热带风暴(STS)",
            time: "2025-11-07T08:00:00"
          },
          {
            lng: 135.2,
            lat: 11.7,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-07T20:00:00"
          },
          {
            lng: 129.3,
            lat: 13.5,
            power: 15,
            speed: 47,
            pressure: 940,
            strong: "强台风(STY)",
            time: "2025-11-08T20:00:00"
          },
          {
            lng: 123.1,
            lat: 16,
            power: 15,
            speed: 50,
            pressure: 930,
            strong: "强台风(STY)",
            time: "2025-11-09T20:00:00"
          },
          {
            lng: 119.4,
            lat: 17.9,
            power: 14,
            speed: 43,
            pressure: 950,
            strong: "强台风(STY)",
            time: "2025-11-10T20:00:00"
          },
          {
            lng: 118.4,
            lat: 20.1,
            power: 13,
            speed: 37,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-11T20:00:00"
          }
        ]
      },
      {
        source: "南海所",
        time: "2025-11-06T20:00:00",
        data: [
          {
            lng: 133.9,
            lat: 12.1,
            power: 10,
            speed: 25,
            pressure: 989,
            strong: "强热带风暴(STS)",
            time: "2025-11-07T21:00:00"
          },
          {
            lng: 134.5,
            lat: 12.9,
            power: 12,
            speed: 33,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-08T02:00:00"
          },
          {
            lng: 133.3,
            lat: 12.9,
            power: 13,
            speed: 41,
            pressure: 964,
            strong: "台风(TY)",
            time: "2025-11-08T08:00:00"
          },
          {
            lng: 131.4,
            lat: 13.7,
            power: 13,
            speed: 41,
            pressure: 954,
            strong: "台风(TY)",
            time: "2025-11-08T14:00:00"
          },
          {
            lng: 129.7,
            lat: 14.1,
            power: 15,
            speed: 47,
            pressure: 949,
            strong: "强台风(STY)",
            time: "2025-11-08T20:00:00"
          },
          {
            lng: 127.8,
            lat: 13.8,
            power: 14,
            speed: 44,
            pressure: 951,
            strong: "强台风(STY)",
            time: "2025-11-09T02:00:00"
          },
          {
            lng: 126.3,
            lat: 14.5,
            power: 14,
            speed: 43,
            pressure: 953,
            strong: "强台风(STY)",
            time: "2025-11-09T08:00:00"
          },
          {
            lng: 124.4,
            lat: 15.1,
            power: 13,
            speed: 39,
            pressure: 949,
            strong: "台风(TY)",
            time: "2025-11-09T14:00:00"
          },
          {
            lng: 122.9,
            lat: 15.6,
            power: 14,
            speed: 42,
            pressure: 946,
            strong: "强台风(STY)",
            time: "2025-11-09T20:00:00"
          },
          {
            lng: 122.1,
            lat: 15.9,
            power: 12,
            speed: 36,
            pressure: 958,
            strong: "台风(TY)",
            time: "2025-11-10T02:00:00"
          },
          {
            lng: 120.7,
            lat: 15.8,
            power: 12,
            speed: 35,
            pressure: 966,
            strong: "台风(TY)",
            time: "2025-11-10T08:00:00"
          },
          {
            lng: 120.2,
            lat: 17,
            power: 12,
            speed: 33,
            pressure: 963,
            strong: "台风(TY)",
            time: "2025-11-10T14:00:00"
          },
          {
            lng: 119.7,
            lat: 17,
            power: 12,
            speed: 36,
            pressure: 964,
            strong: "台风(TY)",
            time: "2025-11-10T20:00:00"
          },
          {
            lng: 119.2,
            lat: 17.6,
            power: 13,
            speed: 38,
            pressure: 967,
            strong: "台风(TY)",
            time: "2025-11-11T02:00:00"
          },
          {
            lng: 119.1,
            lat: 18.2,
            power: 12,
            speed: 35,
            pressure: 973,
            strong: "台风(TY)",
            time: "2025-11-11T08:00:00"
          },
          {
            lng: 118.9,
            lat: 18.6,
            power: 12,
            speed: 34,
            pressure: 973,
            strong: "台风(TY)",
            time: "2025-11-11T14:00:00"
          }
        ]
      }
    ],
    move_dir: "西西北",
    move_speed: 19
  },
  {
    lng: 139,
    lat: 10.5,
    power: 8,
    speed: 20,
    pressure: 995,
    radius7: 380,
    en7: 360,
    es7: 300,
    wn7: 380,
    ws7: 300,
    radius10: 0,
    en10: 0,
    es10: 0,
    wn10: 0,
    ws10: 0,
    radius12: 0,
    en12: 0,
    es12: 0,
    wn12: 0,
    ws12: 0,
    remark: "",
    strong: "热带风暴(TS)",
    time: "2025-11-06T23:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-06T23:00:00",
        data: [
          {
            lng: 137.2,
            lat: 11.7,
            power: 10,
            speed: 25,
            pressure: 985,
            strong: "强热带风暴(STS)",
            time: "2025-11-07T11:00:00"
          },
          {
            lng: 135,
            lat: 12.3,
            power: 12,
            speed: 33,
            pressure: 975,
            strong: "台风(TY)",
            time: "2025-11-07T23:00:00"
          },
          {
            lng: 132,
            lat: 12.8,
            power: 13,
            speed: 38,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-08T11:00:00"
          },
          {
            lng: 128.5,
            lat: 13.5,
            power: 15,
            speed: 48,
            pressure: 945,
            strong: "强台风(STY)",
            time: "2025-11-08T23:00:00"
          },
          {
            lng: 125.4,
            lat: 14.7,
            power: 17,
            speed: 58,
            pressure: 925,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T11:00:00"
          },
          {
            lng: 122.6,
            lat: 16,
            power: 16,
            speed: 55,
            pressure: 930,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T23:00:00"
          },
          {
            lng: 119.4,
            lat: 18.2,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-10T23:00:00"
          },
          {
            lng: 119.2,
            lat: 20.7,
            power: 12,
            speed: 33,
            pressure: 975,
            strong: "台风(TY)",
            time: "2025-11-11T23:00:00"
          }
        ]
      },
      {
        source: "日本",
        time: "2025-11-06T23:00:00",
        data: [
          {
            lng: 137.9,
            lat: 12,
            power: 11,
            speed: 30,
            pressure: 975,
            strong: "强热带风暴(STS)",
            time: "2025-11-07T11:00:00"
          },
          {
            lng: 135.6,
            lat: 12.8,
            power: 12,
            speed: 35,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-07T23:00:00"
          },
          {
            lng: 130.2,
            lat: 13.9,
            power: 14,
            speed: 45,
            pressure: 945,
            strong: "强台风(STY)",
            time: "2025-11-08T20:00:00"
          },
          {
            lng: 123.8,
            lat: 16.4,
            power: 15,
            speed: 50,
            pressure: 920,
            strong: "强台风(STY)",
            time: "2025-11-09T20:00:00"
          },
          {
            lng: 119.7,
            lat: 17.6,
            power: 13,
            speed: 40,
            pressure: 950,
            strong: "台风(TY)",
            time: "2025-11-10T20:00:00"
          },
          {
            lng: 118.4,
            lat: 19.6,
            power: 12,
            speed: 35,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-11T20:00:00"
          }
        ]
      }
    ],
    move_dir: "西北",
    move_speed: 20
  },
  {
    lng: 138.8,
    lat: 10.8,
    power: 9,
    speed: 23,
    pressure: 990,
    radius7: 420,
    en7: 380,
    es7: 320,
    wn7: 420,
    ws7: 320,
    remark: "",
    strong: "热带风暴(TS)",
    time: "2025-11-07T02:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-07T02:00:00",
        data: [
          {
            lng: 136.9,
            lat: 11.9,
            power: 11,
            speed: 30,
            pressure: 980,
            strong: "强热带风暴(STS)",
            time: "2025-11-07T14:00:00"
          },
          {
            lng: 134.1,
            lat: 12.4,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-08T02:00:00"
          },
          {
            lng: 130.9,
            lat: 13,
            power: 14,
            speed: 42,
            pressure: 955,
            strong: "强台风(STY)",
            time: "2025-11-08T14:00:00"
          },
          {
            lng: 127.6,
            lat: 14.1,
            power: 16,
            speed: 52,
            pressure: 935,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T02:00:00"
          },
          {
            lng: 124.5,
            lat: 15.3,
            power: 17,
            speed: 58,
            pressure: 925,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T14:00:00"
          },
          {
            lng: 121.8,
            lat: 16.8,
            power: 15,
            speed: 50,
            pressure: 940,
            strong: "强台风(STY)",
            time: "2025-11-10T02:00:00"
          },
          {
            lng: 119.4,
            lat: 18.7,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-11T02:00:00"
          },
          {
            lng: 119.6,
            lat: 21.4,
            power: 12,
            speed: 33,
            pressure: 975,
            strong: "台风(TY)",
            time: "2025-11-12T02:00:00"
          }
        ]
      },
      {
        source: "美国",
        time: "2025-11-07T02:00:00",
        data: [
          {
            lng: 127.4,
            lat: 13.8,
            power: 16,
            speed: 54,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T02:00:00"
          },
          {
            lng: 121.6,
            lat: 16.2,
            power: 16,
            speed: 54,
            strong: "超强台风(Super TY)",
            time: "2025-11-10T02:00:00"
          },
          {
            lng: 119,
            lat: 17.7,
            power: 12,
            speed: 36,
            strong: "台风(TY)",
            time: "2025-11-11T02:00:00"
          }
        ]
      },
      {
        source: "日本",
        time: "2025-11-07T02:00:00",
        data: [
          {
            lng: 137.3,
            lat: 12,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-07T14:00:00"
          },
          {
            lng: 134.8,
            lat: 12.8,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-08T02:00:00"
          },
          {
            lng: 128,
            lat: 14.7,
            power: 14,
            speed: 45,
            pressure: 935,
            strong: "强台风(STY)",
            time: "2025-11-09T02:00:00"
          },
          {
            lng: 122.1,
            lat: 16.8,
            power: 15,
            speed: 50,
            pressure: 925,
            strong: "强台风(STY)",
            time: "2025-11-10T02:00:00"
          },
          {
            lng: 119.4,
            lat: 18.1,
            power: 12,
            speed: 35,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-11T02:00:00"
          },
          {
            lng: 118.8,
            lat: 20.3,
            power: 12,
            speed: 35,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-12T02:00:00"
          }
        ]
      },
      {
        source: "韩国",
        time: "2025-11-07T02:00:00",
        data: [
          {
            lng: 136.5,
            lat: 11.7,
            power: 11,
            speed: 32,
            pressure: 975,
            strong: "强热带风暴(STS)",
            time: "2025-11-07T14:00:00"
          },
          {
            lng: 134,
            lat: 12.3,
            power: 13,
            speed: 39,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-08T02:00:00"
          },
          {
            lng: 127.9,
            lat: 14,
            power: 15,
            speed: 49,
            pressure: 935,
            strong: "强台风(STY)",
            time: "2025-11-09T02:00:00"
          },
          {
            lng: 121.9,
            lat: 16.5,
            power: 15,
            speed: 47,
            pressure: 940,
            strong: "强台风(STY)",
            time: "2025-11-10T02:00:00"
          },
          {
            lng: 119.1,
            lat: 18.5,
            power: 13,
            speed: 39,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-11T02:00:00"
          },
          {
            lng: 119,
            lat: 21.2,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-12T02:00:00"
          }
        ]
      },
      {
        source: "中国香港",
        time: "2025-11-07T02:00:00",
        data: [
          {
            lng: 134.1,
            lat: 12.6,
            power: 12,
            speed: 36,
            strong: "台风(TY)",
            time: "2025-11-08T02:00:00"
          },
          {
            lng: 127.3,
            lat: 14.1,
            power: 15,
            speed: 48,
            strong: "强台风(STY)",
            time: "2025-11-09T02:00:00"
          },
          {
            lng: 121.1,
            lat: 16.7,
            power: 14,
            speed: 46,
            strong: "强台风(STY)",
            time: "2025-11-10T02:00:00"
          },
          {
            lng: 118.7,
            lat: 18.5,
            power: 12,
            speed: 36,
            strong: "台风(TY)",
            time: "2025-11-11T02:00:00"
          },
          {
            lng: 118.5,
            lat: 20.9,
            power: 11,
            speed: 30,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T02:00:00"
          }
        ]
      },
      {
        source: "欧洲",
        time: "2025-11-07T02:00:00",
        data: [
          {
            lng: 133.9,
            lat: 12.3,
            power: 13,
            speed: 38,
            strong: "台风(TY)",
            time: "2025-11-08T02:00:00"
          },
          {
            lng: 127.5,
            lat: 14,
            power: 15,
            speed: 48,
            strong: "强台风(STY)",
            time: "2025-11-09T02:00:00"
          },
          {
            lng: 121.7,
            lat: 16.7,
            power: 14,
            speed: 45,
            strong: "强台风(STY)",
            time: "2025-11-10T02:00:00"
          },
          {
            lng: 119.4,
            lat: 18.4,
            power: 13,
            speed: 40,
            strong: "台风(TY)",
            time: "2025-11-11T02:00:00"
          },
          {
            lng: 119.2,
            lat: 20.9,
            power: 12,
            speed: 33,
            strong: "台风(TY)",
            time: "2025-11-12T02:00:00"
          }
        ]
      }
    ],
    move_dir: "西西北",
    move_speed: 21
  },
  {
    lng: 138.6,
    lat: 11,
    power: 10,
    speed: 25,
    pressure: 985,
    radius7: 420,
    en7: 380,
    es7: 320,
    wn7: 420,
    ws7: 320,
    radius10: 0,
    en10: 0,
    es10: 0,
    wn10: 0,
    ws10: 0,
    radius12: 0,
    en12: 0,
    es12: 0,
    wn12: 0,
    ws12: 0,
    remark: "",
    strong: "强热带风暴(STS)",
    time: "2025-11-07T05:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-07T05:00:00",
        data: [
          {
            lng: 136,
            lat: 12.2,
            power: 11,
            speed: 30,
            pressure: 980,
            strong: "强热带风暴(STS)",
            time: "2025-11-07T17:00:00"
          },
          {
            lng: 133.3,
            lat: 12.8,
            power: 13,
            speed: 38,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-08T05:00:00"
          },
          {
            lng: 129.8,
            lat: 13.5,
            power: 14,
            speed: 45,
            pressure: 950,
            strong: "强台风(STY)",
            time: "2025-11-08T17:00:00"
          },
          {
            lng: 126.6,
            lat: 14.3,
            power: 16,
            speed: 52,
            pressure: 935,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T05:00:00"
          },
          {
            lng: 123.6,
            lat: 15.6,
            power: 17,
            speed: 58,
            pressure: 925,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T17:00:00"
          },
          {
            lng: 120.7,
            lat: 16.8,
            power: 13,
            speed: 40,
            pressure: 955,
            strong: "台风(TY)",
            time: "2025-11-10T05:00:00"
          },
          {
            lng: 119,
            lat: 18.9,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-11T05:00:00"
          },
          {
            lng: 119.1,
            lat: 21.3,
            power: 11,
            speed: 30,
            pressure: 980,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T05:00:00"
          }
        ]
      },
      {
        source: "日本",
        time: "2025-11-07T05:00:00",
        data: [
          {
            lng: 136.5,
            lat: 12.4,
            power: 12,
            speed: 35,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-07T17:00:00"
          },
          {
            lng: 133.7,
            lat: 13,
            power: 13,
            speed: 40,
            pressure: 950,
            strong: "台风(TY)",
            time: "2025-11-08T05:00:00"
          },
          {
            lng: 128,
            lat: 14.7,
            power: 14,
            speed: 45,
            pressure: 935,
            strong: "强台风(STY)",
            time: "2025-11-09T02:00:00"
          },
          {
            lng: 122.1,
            lat: 16.8,
            power: 15,
            speed: 50,
            pressure: 925,
            strong: "强台风(STY)",
            time: "2025-11-10T02:00:00"
          },
          {
            lng: 119.4,
            lat: 18.1,
            power: 12,
            speed: 35,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-11T02:00:00"
          },
          {
            lng: 118.8,
            lat: 20.3,
            power: 12,
            speed: 35,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-12T02:00:00"
          }
        ]
      }
    ],
    move_dir: "西西北",
    move_speed: 27
  },
  {
    lng: 138.2,
    lat: 11.4,
    power: 10,
    speed: 25,
    pressure: 985,
    radius7: 420,
    en7: 380,
    es7: 320,
    wn7: 420,
    ws7: 320,
    remark: "",
    strong: "强热带风暴(STS)",
    time: "2025-11-07T08:00:00",
    data: [
      {
        source: "韩国",
        time: "2025-11-07T08:00:00",
        data: [
          {
            lng: 135.5,
            lat: 12.2,
            power: 13,
            speed: 37,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-07T20:00:00"
          },
          {
            lng: 132.7,
            lat: 12.7,
            power: 14,
            speed: 43,
            pressure: 950,
            strong: "强台风(STY)",
            time: "2025-11-08T08:00:00"
          },
          {
            lng: 126,
            lat: 14.7,
            power: 15,
            speed: 50,
            pressure: 930,
            strong: "强台风(STY)",
            time: "2025-11-09T08:00:00"
          },
          {
            lng: 120.2,
            lat: 17,
            power: 13,
            speed: 40,
            pressure: 955,
            strong: "台风(TY)",
            time: "2025-11-10T08:00:00"
          },
          {
            lng: 118.8,
            lat: 18.8,
            power: 13,
            speed: 39,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-11T08:00:00"
          },
          {
            lng: 118.6,
            lat: 21.1,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-12T08:00:00"
          }
        ]
      },
      {
        source: "欧洲",
        time: "2025-11-07T08:00:00",
        data: [
          {
            lng: 132.4,
            lat: 12.3,
            power: 13,
            speed: 40,
            strong: "台风(TY)",
            time: "2025-11-08T08:00:00"
          },
          {
            lng: 125.6,
            lat: 14.2,
            power: 16,
            speed: 51,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T08:00:00"
          },
          {
            lng: 120.2,
            lat: 16.7,
            power: 14,
            speed: 45,
            strong: "强台风(STY)",
            time: "2025-11-10T08:00:00"
          },
          {
            lng: 118.2,
            lat: 19.2,
            power: 13,
            speed: 38,
            strong: "台风(TY)",
            time: "2025-11-11T08:00:00"
          },
          {
            lng: 119,
            lat: 21.9,
            power: 11,
            speed: 30,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T08:00:00"
          }
        ]
      },
      {
        source: "南海所",
        time: "2025-11-07T08:00:00",
        data: [
          {
            lng: 134.2,
            lat: 14.1,
            power: 11,
            speed: 31,
            pressure: 979,
            strong: "强热带风暴(STS)",
            time: "2025-11-11T02:00:00"
          },
          {
            lng: 134.3,
            lat: 14.8,
            power: 11,
            speed: 32,
            pressure: 965,
            strong: "强热带风暴(STS)",
            time: "2025-11-11T08:00:00"
          },
          {
            lng: 132.7,
            lat: 14.4,
            power: 14,
            speed: 42,
            pressure: 956,
            strong: "强台风(STY)",
            time: "2025-11-11T14:00:00"
          },
          {
            lng: 131,
            lat: 14.8,
            power: 14,
            speed: 43,
            pressure: 952,
            strong: "强台风(STY)",
            time: "2025-11-11T20:00:00"
          },
          {
            lng: 129.4,
            lat: 15.1,
            power: 13,
            speed: 41,
            pressure: 947,
            strong: "台风(TY)",
            time: "2025-11-12T02:00:00"
          }
        ]
      },
      {
        source: "中国香港",
        time: "2025-11-07T08:00:00",
        data: [
          {
            lng: 132.5,
            lat: 12.6,
            power: 13,
            speed: 39,
            strong: "台风(TY)",
            time: "2025-11-08T08:00:00"
          },
          {
            lng: 125.7,
            lat: 14.6,
            power: 16,
            speed: 51,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T08:00:00"
          },
          {
            lng: 120,
            lat: 17,
            power: 14,
            speed: 43,
            strong: "强台风(STY)",
            time: "2025-11-10T08:00:00"
          },
          {
            lng: 118.6,
            lat: 19,
            power: 12,
            speed: 33,
            strong: "台风(TY)",
            time: "2025-11-11T08:00:00"
          },
          {
            lng: 118.9,
            lat: 21.5,
            power: 11,
            speed: 29,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T08:00:00"
          }
        ]
      },
      {
        source: "中国",
        time: "2025-11-07T08:00:00",
        data: [
          {
            lng: 135.4,
            lat: 12.3,
            power: 11,
            speed: 30,
            pressure: 980,
            strong: "强热带风暴(STS)",
            time: "2025-11-07T20:00:00"
          },
          {
            lng: 132.5,
            lat: 12.8,
            power: 13,
            speed: 38,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-08T08:00:00"
          },
          {
            lng: 129.1,
            lat: 13.4,
            power: 14,
            speed: 45,
            pressure: 950,
            strong: "强台风(STY)",
            time: "2025-11-08T20:00:00"
          },
          {
            lng: 126,
            lat: 14.5,
            power: 16,
            speed: 52,
            pressure: 935,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T08:00:00"
          },
          {
            lng: 123.1,
            lat: 16,
            power: 17,
            speed: 58,
            pressure: 925,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T20:00:00"
          },
          {
            lng: 120.2,
            lat: 17,
            power: 13,
            speed: 40,
            pressure: 955,
            strong: "台风(TY)",
            time: "2025-11-10T08:00:00"
          },
          {
            lng: 118.9,
            lat: 19,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-11T08:00:00"
          },
          {
            lng: 119.4,
            lat: 21.8,
            power: 12,
            speed: 33,
            pressure: 975,
            strong: "台风(TY)",
            time: "2025-11-12T08:00:00"
          }
        ]
      },
      {
        source: "美国",
        time: "2025-11-07T08:00:00",
        data: [
          {
            lng: 132.7,
            lat: 12.7,
            power: 14,
            speed: 44,
            strong: "强台风(STY)",
            time: "2025-11-08T08:00:00"
          },
          {
            lng: 126.1,
            lat: 14.5,
            power: 17,
            speed: 59,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T08:00:00"
          },
          {
            lng: 120.9,
            lat: 16.8,
            power: 14,
            speed: 44,
            strong: "强台风(STY)",
            time: "2025-11-10T08:00:00"
          },
          {
            lng: 119.3,
            lat: 18.6,
            power: 12,
            speed: 36,
            strong: "台风(TY)",
            time: "2025-11-11T08:00:00"
          },
          {
            lng: 119.2,
            lat: 21.3,
            power: 11,
            speed: 31,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T08:00:00"
          }
        ]
      },
      {
        source: "日本",
        time: "2025-11-07T08:00:00",
        data: [
          {
            lng: 135.7,
            lat: 12.5,
            power: 12,
            speed: 35,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-07T20:00:00"
          },
          {
            lng: 132.8,
            lat: 12.9,
            power: 13,
            speed: 40,
            pressure: 950,
            strong: "台风(TY)",
            time: "2025-11-08T08:00:00"
          },
          {
            lng: 125.9,
            lat: 14.8,
            power: 15,
            speed: 50,
            pressure: 920,
            strong: "强台风(STY)",
            time: "2025-11-09T08:00:00"
          },
          {
            lng: 120.2,
            lat: 16.6,
            power: 12,
            speed: 35,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-10T08:00:00"
          },
          {
            lng: 118.6,
            lat: 18.5,
            power: 12,
            speed: 35,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-11T08:00:00"
          },
          {
            lng: 118,
            lat: 20.9,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-12T08:00:00"
          }
        ]
      }
    ],
    move_dir: "西西北",
    move_speed: 27
  },
  {
    lng: 137.2,
    lat: 11.8,
    power: 10,
    speed: 25,
    pressure: 985,
    radius7: 420,
    en7: 380,
    es7: 320,
    wn7: 420,
    ws7: 320,
    remark: "",
    strong: "强热带风暴(STS)",
    time: "2025-11-07T11:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-07T11:00:00",
        data: [
          {
            lng: 134.3,
            lat: 12.3,
            power: 11,
            speed: 30,
            pressure: 980,
            strong: "强热带风暴(STS)",
            time: "2025-11-07T23:00:00"
          },
          {
            lng: 131.3,
            lat: 12.9,
            power: 14,
            speed: 42,
            pressure: 955,
            strong: "强台风(STY)",
            time: "2025-11-08T11:00:00"
          },
          {
            lng: 127.9,
            lat: 13.7,
            power: 16,
            speed: 52,
            pressure: 935,
            strong: "超强台风(Super TY)",
            time: "2025-11-08T23:00:00"
          },
          {
            lng: 124.7,
            lat: 14.9,
            power: 17,
            speed: 60,
            pressure: 920,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T11:00:00"
          },
          {
            lng: 122,
            lat: 16.3,
            power: 16,
            speed: 52,
            pressure: 935,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T23:00:00"
          },
          {
            lng: 119.9,
            lat: 17,
            power: 13,
            speed: 38,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-10T11:00:00"
          },
          {
            lng: 118.8,
            lat: 19.2,
            power: 13,
            speed: 38,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-11T11:00:00"
          },
          {
            lng: 119.7,
            lat: 22,
            power: 12,
            speed: 33,
            pressure: 975,
            strong: "台风(TY)",
            time: "2025-11-12T11:00:00"
          }
        ]
      },
      {
        source: "日本",
        time: "2025-11-07T11:00:00",
        data: [
          {
            lng: 134.9,
            lat: 12.5,
            power: 12,
            speed: 35,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-07T23:00:00"
          },
          {
            lng: 131.9,
            lat: 13,
            power: 13,
            speed: 40,
            pressure: 950,
            strong: "台风(TY)",
            time: "2025-11-08T11:00:00"
          },
          {
            lng: 125.9,
            lat: 14.8,
            power: 15,
            speed: 50,
            pressure: 920,
            strong: "强台风(STY)",
            time: "2025-11-09T08:00:00"
          },
          {
            lng: 120.2,
            lat: 16.6,
            power: 12,
            speed: 35,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-10T08:00:00"
          },
          {
            lng: 118.6,
            lat: 18.5,
            power: 12,
            speed: 35,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-11T08:00:00"
          },
          {
            lng: 118,
            lat: 20.9,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-12T08:00:00"
          }
        ]
      }
    ],
    move_dir: "西西北",
    move_speed: 27
  },
  {
    lng: 136.6,
    lat: 11.8,
    power: 10,
    speed: 28,
    pressure: 982,
    radius7: 460,
    en7: 420,
    es7: 380,
    wn7: 460,
    ws7: 380,
    radius10: 200,
    en10: 200,
    es10: 180,
    wn10: 200,
    ws10: 180,
    remark: "",
    strong: "强热带风暴(STS)",
    time: "2025-11-07T14:00:00",
    data: [
      {
        source: "日本",
        time: "2025-11-07T14:00:00",
        data: [
          {
            lng: 134.1,
            lat: 12.5,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-08T02:00:00"
          },
          {
            lng: 131,
            lat: 13.2,
            power: 14,
            speed: 45,
            pressure: 935,
            strong: "强台风(STY)",
            time: "2025-11-08T14:00:00"
          },
          {
            lng: 124.2,
            lat: 15.4,
            power: 15,
            speed: 50,
            pressure: 920,
            strong: "强台风(STY)",
            time: "2025-11-09T14:00:00"
          },
          {
            lng: 119.3,
            lat: 17,
            power: 12,
            speed: 35,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-10T14:00:00"
          },
          {
            lng: 118,
            lat: 19,
            power: 12,
            speed: 35,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-11T14:00:00"
          },
          {
            lng: 118.1,
            lat: 21.9,
            power: 12,
            speed: 35,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-12T14:00:00"
          }
        ]
      },
      {
        source: "中国香港",
        time: "2025-11-07T14:00:00",
        data: [
          {
            lng: 130.6,
            lat: 13,
            power: 13,
            speed: 40,
            strong: "台风(TY)",
            time: "2025-11-08T14:00:00"
          },
          {
            lng: 123.8,
            lat: 15.3,
            power: 16,
            speed: 54,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T14:00:00"
          },
          {
            lng: 119.1,
            lat: 17.2,
            power: 13,
            speed: 40,
            strong: "台风(TY)",
            time: "2025-11-10T14:00:00"
          },
          {
            lng: 118.2,
            lat: 19.5,
            power: 12,
            speed: 33,
            strong: "台风(TY)",
            time: "2025-11-11T14:00:00"
          },
          {
            lng: 119.2,
            lat: 22.3,
            power: 11,
            speed: 29,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T14:00:00"
          }
        ]
      },
      {
        source: "菲律宾",
        time: "2025-11-07T14:00:00",
        data: [
          {
            lng: 130.6,
            lat: 12.6,
            power: 14,
            speed: 46,
            strong: "强台风(STY)",
            time: "2025-11-08T14:00:00"
          },
          {
            lng: 123.8,
            lat: 15.2,
            power: 16,
            speed: 51,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T14:00:00"
          },
          {
            lng: 119.7,
            lat: 17.3,
            power: 12,
            speed: 36,
            strong: "台风(TY)",
            time: "2025-11-10T14:00:00"
          },
          {
            lng: 118.7,
            lat: 19.4,
            power: 12,
            speed: 33,
            strong: "台风(TY)",
            time: "2025-11-11T14:00:00"
          },
          {
            lng: 119.5,
            lat: 22.3,
            power: 12,
            speed: 33,
            strong: "台风(TY)",
            time: "2025-11-12T14:00:00"
          }
        ]
      },
      {
        source: "美国",
        time: "2025-11-07T14:00:00",
        data: [
          {
            lng: 130.5,
            lat: 13,
            power: 15,
            speed: 49,
            strong: "强台风(STY)",
            time: "2025-11-08T14:00:00"
          },
          {
            lng: 123.9,
            lat: 15.1,
            power: 17,
            speed: 59,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T14:00:00"
          },
          {
            lng: 119.4,
            lat: 17.2,
            power: 13,
            speed: 39,
            strong: "台风(TY)",
            time: "2025-11-10T14:00:00"
          },
          {
            lng: 118.4,
            lat: 19.4,
            power: 12,
            speed: 36,
            strong: "台风(TY)",
            time: "2025-11-11T14:00:00"
          },
          {
            lng: 119.4,
            lat: 22.4,
            power: 11,
            speed: 31,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T14:00:00"
          }
        ]
      },
      {
        source: "中国",
        time: "2025-11-07T14:00:00",
        data: [
          {
            lng: 133.9,
            lat: 12.3,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-08T02:00:00"
          },
          {
            lng: 130.5,
            lat: 13,
            power: 14,
            speed: 45,
            pressure: 950,
            strong: "强台风(STY)",
            time: "2025-11-08T14:00:00"
          },
          {
            lng: 127,
            lat: 14,
            power: 16,
            speed: 55,
            pressure: 930,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T02:00:00"
          },
          {
            lng: 124.1,
            lat: 15.2,
            power: 18,
            speed: 62,
            pressure: 915,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T14:00:00"
          },
          {
            lng: 121.2,
            lat: 16.5,
            power: 14,
            speed: 45,
            pressure: 950,
            strong: "强台风(STY)",
            time: "2025-11-10T02:00:00"
          },
          {
            lng: 119.5,
            lat: 17.2,
            power: 13,
            speed: 38,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-10T14:00:00"
          },
          {
            lng: 118.9,
            lat: 19.9,
            power: 13,
            speed: 38,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-11T14:00:00"
          },
          {
            lng: 119.8,
            lat: 22.3,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-12T14:00:00"
          }
        ]
      },
      {
        source: "欧洲",
        time: "2025-11-07T14:00:00",
        data: [
          {
            lng: 130.7,
            lat: 12.7,
            power: 14,
            speed: 43,
            strong: "强台风(STY)",
            time: "2025-11-08T14:00:00"
          },
          {
            lng: 124.3,
            lat: 14.8,
            power: 16,
            speed: 51,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T14:00:00"
          },
          {
            lng: 119.7,
            lat: 17.3,
            power: 14,
            speed: 43,
            strong: "强台风(STY)",
            time: "2025-11-10T14:00:00"
          },
          {
            lng: 118.2,
            lat: 19.4,
            power: 12,
            speed: 35,
            strong: "台风(TY)",
            time: "2025-11-11T14:00:00"
          },
          {
            lng: 119.1,
            lat: 22.3,
            power: 11,
            speed: 30,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T14:00:00"
          }
        ]
      },
      {
        source: "南海所",
        time: "2025-11-07T14:00:00",
        data: [
          {
            lng: 134.2,
            lat: 14.1,
            power: 11,
            speed: 31,
            pressure: 979,
            strong: "强热带风暴(STS)",
            time: "2025-11-11T08:00:00"
          },
          {
            lng: 134.3,
            lat: 14.8,
            power: 11,
            speed: 32,
            pressure: 965,
            strong: "强热带风暴(STS)",
            time: "2025-11-11T14:00:00"
          },
          {
            lng: 132.7,
            lat: 14.4,
            power: 14,
            speed: 42,
            pressure: 956,
            strong: "强台风(STY)",
            time: "2025-11-11T20:00:00"
          },
          {
            lng: 131,
            lat: 14.8,
            power: 14,
            speed: 43,
            pressure: 952,
            strong: "强台风(STY)",
            time: "2025-11-12T02:00:00"
          },
          {
            lng: 129.4,
            lat: 15.1,
            power: 13,
            speed: 41,
            pressure: 947,
            strong: "台风(TY)",
            time: "2025-11-12T08:00:00"
          }
        ]
      },
      {
        source: "韩国",
        time: "2025-11-07T14:00:00",
        data: [
          {
            lng: 134,
            lat: 12.2,
            power: 13,
            speed: 40,
            pressure: 955,
            strong: "台风(TY)",
            time: "2025-11-08T02:00:00"
          },
          {
            lng: 131,
            lat: 13,
            power: 15,
            speed: 47,
            pressure: 940,
            strong: "强台风(STY)",
            time: "2025-11-08T14:00:00"
          },
          {
            lng: 124.5,
            lat: 15.1,
            power: 16,
            speed: 53,
            pressure: 920,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T14:00:00"
          },
          {
            lng: 119.5,
            lat: 17.2,
            power: 13,
            speed: 37,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-10T14:00:00"
          },
          {
            lng: 118.3,
            lat: 19.4,
            power: 13,
            speed: 37,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-11T14:00:00"
          },
          {
            lng: 118.5,
            lat: 21.7,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-12T14:00:00"
          }
        ]
      }
    ],
    move_dir: "西西北",
    move_speed: 25
  },
  {
    lng: 136,
    lat: 11.9,
    power: 11,
    speed: 30,
    pressure: 980,
    radius7: 460,
    en7: 420,
    es7: 380,
    wn7: 460,
    ws7: 380,
    radius10: 200,
    en10: 200,
    es10: 180,
    wn10: 200,
    ws10: 180,
    remark: "",
    strong: "强热带风暴(STS)",
    time: "2025-11-07T17:00:00",
    data: [
      {
        source: "日本",
        time: "2025-11-07T17:00:00",
        data: [
          {
            lng: 133.4,
            lat: 12.6,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-08T05:00:00"
          },
          {
            lng: 130,
            lat: 13.5,
            power: 14,
            speed: 45,
            pressure: 935,
            strong: "强台风(STY)",
            time: "2025-11-08T17:00:00"
          },
          {
            lng: 124.2,
            lat: 15.4,
            power: 15,
            speed: 50,
            pressure: 920,
            strong: "强台风(STY)",
            time: "2025-11-09T14:00:00"
          },
          {
            lng: 119.3,
            lat: 17,
            power: 12,
            speed: 35,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-10T14:00:00"
          },
          {
            lng: 118,
            lat: 19,
            power: 12,
            speed: 35,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-11T14:00:00"
          },
          {
            lng: 118.1,
            lat: 21.9,
            power: 12,
            speed: 35,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-12T14:00:00"
          }
        ]
      },
      {
        source: "中国",
        time: "2025-11-07T17:00:00",
        data: [
          {
            lng: 133.2,
            lat: 12.4,
            power: 13,
            speed: 38,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-08T05:00:00"
          },
          {
            lng: 129.5,
            lat: 13.3,
            power: 15,
            speed: 48,
            pressure: 945,
            strong: "强台风(STY)",
            time: "2025-11-08T17:00:00"
          },
          {
            lng: 126,
            lat: 14.4,
            power: 17,
            speed: 58,
            pressure: 925,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T05:00:00"
          },
          {
            lng: 122.8,
            lat: 15.8,
            power: 18,
            speed: 62,
            pressure: 915,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T17:00:00"
          },
          {
            lng: 120.2,
            lat: 16.5,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-10T05:00:00"
          },
          {
            lng: 119.1,
            lat: 17.6,
            power: 13,
            speed: 38,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-10T17:00:00"
          },
          {
            lng: 118.7,
            lat: 20.1,
            power: 13,
            speed: 38,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-11T17:00:00"
          },
          {
            lng: 119.9,
            lat: 22.4,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-12T17:00:00"
          }
        ]
      }
    ],
    move_dir: "西",
    move_speed: 26
  },
  {
    lng: 135.4,
    lat: 12,
    power: 11,
    speed: 30,
    pressure: 980,
    radius7: 460,
    en7: 420,
    es7: 380,
    wn7: 460,
    ws7: 380,
    radius10: 200,
    en10: 200,
    es10: 180,
    wn10: 200,
    ws10: 180,
    remark: "",
    strong: "强热带风暴(STS)",
    time: "2025-11-07T20:00:00",
    data: [
      {
        source: "中国香港",
        time: "2025-11-07T20:00:00",
        data: [
          {
            lng: 128.8,
            lat: 13.5,
            power: 14,
            speed: 46,
            strong: "强台风(STY)",
            time: "2025-11-08T20:00:00"
          },
          {
            lng: 122.3,
            lat: 16,
            power: 17,
            speed: 57,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T20:00:00"
          },
          {
            lng: 118.8,
            lat: 17.7,
            power: 13,
            speed: 39,
            strong: "台风(TY)",
            time: "2025-11-10T20:00:00"
          },
          {
            lng: 118.2,
            lat: 20.2,
            power: 12,
            speed: 33,
            strong: "台风(TY)",
            time: "2025-11-11T20:00:00"
          },
          {
            lng: 120,
            lat: 23.3,
            power: 11,
            speed: 29,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T20:00:00"
          }
        ]
      },
      {
        source: "中国",
        time: "2025-11-07T20:00:00",
        data: [
          {
            lng: 132.4,
            lat: 12.7,
            power: 13,
            speed: 38,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-08T08:00:00"
          },
          {
            lng: 128.8,
            lat: 13.5,
            power: 15,
            speed: 48,
            pressure: 945,
            strong: "强台风(STY)",
            time: "2025-11-08T20:00:00"
          },
          {
            lng: 125.3,
            lat: 14.5,
            power: 17,
            speed: 58,
            pressure: 925,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T08:00:00"
          },
          {
            lng: 122.4,
            lat: 16,
            power: 18,
            speed: 62,
            pressure: 915,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T20:00:00"
          },
          {
            lng: 119.8,
            lat: 16.6,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-10T08:00:00"
          },
          {
            lng: 119,
            lat: 17.5,
            power: 13,
            speed: 38,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-10T20:00:00"
          },
          {
            lng: 118.7,
            lat: 20.3,
            power: 13,
            speed: 38,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-11T20:00:00"
          },
          {
            lng: 119.7,
            lat: 22.7,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-12T20:00:00"
          }
        ]
      },
      {
        source: "韩国",
        time: "2025-11-07T20:00:00",
        data: [
          {
            lng: 132.5,
            lat: 12.6,
            power: 14,
            speed: 45,
            pressure: 945,
            strong: "强台风(STY)",
            time: "2025-11-08T08:00:00"
          },
          {
            lng: 129.5,
            lat: 13.4,
            power: 15,
            speed: 47,
            pressure: 940,
            strong: "强台风(STY)",
            time: "2025-11-08T20:00:00"
          },
          {
            lng: 123.3,
            lat: 15.6,
            power: 16,
            speed: 51,
            pressure: 925,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T20:00:00"
          },
          {
            lng: 119.1,
            lat: 17.7,
            power: 13,
            speed: 37,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-10T20:00:00"
          },
          {
            lng: 118.3,
            lat: 20.2,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-11T20:00:00"
          },
          {
            lng: 119.1,
            lat: 22.6,
            power: 11,
            speed: 32,
            pressure: 975,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T20:00:00"
          }
        ]
      },
      {
        source: "菲律宾",
        time: "2025-11-07T20:00:00",
        data: [
          {
            lng: 129.1,
            lat: 13.3,
            power: 14,
            speed: 46,
            strong: "强台风(STY)",
            time: "2025-11-08T20:00:00"
          },
          {
            lng: 122.4,
            lat: 15.8,
            power: 16,
            speed: 54,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T20:00:00"
          },
          {
            lng: 119.3,
            lat: 17.5,
            power: 13,
            speed: 41,
            strong: "台风(TY)",
            time: "2025-11-10T20:00:00"
          },
          {
            lng: 118.7,
            lat: 19.2,
            power: 13,
            speed: 41,
            strong: "台风(TY)",
            time: "2025-11-11T20:00:00"
          },
          {
            lng: 119.2,
            lat: 22.3,
            power: 12,
            speed: 36,
            strong: "台风(TY)",
            time: "2025-11-12T20:00:00"
          }
        ]
      },
      {
        source: "日本",
        time: "2025-11-07T20:00:00",
        data: [
          {
            lng: 132.6,
            lat: 12.7,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-08T08:00:00"
          },
          {
            lng: 129,
            lat: 13.7,
            power: 14,
            speed: 45,
            pressure: 940,
            strong: "强台风(STY)",
            time: "2025-11-08T20:00:00"
          },
          {
            lng: 122.5,
            lat: 16.1,
            power: 15,
            speed: 50,
            pressure: 935,
            strong: "强台风(STY)",
            time: "2025-11-09T20:00:00"
          },
          {
            lng: 118.9,
            lat: 17.5,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-10T20:00:00"
          },
          {
            lng: 118,
            lat: 19.7,
            power: 13,
            speed: 40,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-11T20:00:00"
          },
          {
            lng: 118.8,
            lat: 22.7,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-12T20:00:00"
          }
        ]
      },
      {
        source: "美国",
        time: "2025-11-07T20:00:00",
        data: [
          {
            lng: 129,
            lat: 13.4,
            power: 16,
            speed: 51,
            strong: "超强台风(Super TY)",
            time: "2025-11-08T20:00:00"
          },
          {
            lng: 122.5,
            lat: 15.6,
            power: 17,
            speed: 59,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T20:00:00"
          },
          {
            lng: 119.1,
            lat: 17.5,
            power: 13,
            speed: 39,
            strong: "台风(TY)",
            time: "2025-11-10T20:00:00"
          },
          {
            lng: 118.6,
            lat: 19.9,
            power: 12,
            speed: 36,
            strong: "台风(TY)",
            time: "2025-11-11T20:00:00"
          },
          {
            lng: 120.1,
            lat: 22.7,
            power: 11,
            speed: 31,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T20:00:00"
          }
        ]
      },
      {
        source: "欧洲",
        time: "2025-11-07T20:00:00",
        data: [
          {
            lng: 128.9,
            lat: 13.2,
            power: 15,
            speed: 48,
            strong: "强台风(STY)",
            time: "2025-11-08T20:00:00"
          },
          {
            lng: 123.1,
            lat: 15.4,
            power: 16,
            speed: 51,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T20:00:00"
          },
          {
            lng: 118.9,
            lat: 17.6,
            power: 14,
            speed: 43,
            strong: "强台风(STY)",
            time: "2025-11-10T20:00:00"
          },
          {
            lng: 118.2,
            lat: 20.1,
            power: 12,
            speed: 35,
            strong: "台风(TY)",
            time: "2025-11-11T20:00:00"
          },
          {
            lng: 120.3,
            lat: 23.2,
            power: 10,
            speed: 25,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T20:00:00"
          }
        ]
      },
      {
        source: "南海所",
        time: "2025-11-07T20:00:00",
        data: [
          {
            lng: 134.2,
            lat: 14.1,
            power: 11,
            speed: 31,
            pressure: 979,
            strong: "强热带风暴(STS)",
            time: "2025-11-11T14:00:00"
          },
          {
            lng: 134.3,
            lat: 14.8,
            power: 11,
            speed: 32,
            pressure: 965,
            strong: "强热带风暴(STS)",
            time: "2025-11-11T20:00:00"
          },
          {
            lng: 132.7,
            lat: 14.4,
            power: 14,
            speed: 42,
            pressure: 956,
            strong: "强台风(STY)",
            time: "2025-11-12T02:00:00"
          },
          {
            lng: 131,
            lat: 14.8,
            power: 14,
            speed: 43,
            pressure: 952,
            strong: "强台风(STY)",
            time: "2025-11-12T08:00:00"
          },
          {
            lng: 129.4,
            lat: 15.1,
            power: 13,
            speed: 41,
            pressure: 947,
            strong: "台风(TY)",
            time: "2025-11-12T14:00:00"
          }
        ]
      }
    ],
    move_dir: "西西北",
    move_speed: 28
  },
  {
    lng: 134.9,
    lat: 12,
    power: 12,
    speed: 33,
    pressure: 975,
    radius7: 460,
    en7: 420,
    es7: 380,
    wn7: 460,
    ws7: 380,
    radius10: 200,
    en10: 200,
    es10: 180,
    wn10: 200,
    ws10: 180,
    remark: "",
    strong: "台风(TY)",
    time: "2025-11-07T23:00:00",
    data: [
      {
        source: "日本",
        time: "2025-11-07T23:00:00",
        data: [
          {
            lng: 131.6,
            lat: 12.8,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-08T11:00:00"
          },
          {
            lng: 128.1,
            lat: 13.8,
            power: 14,
            speed: 45,
            pressure: 940,
            strong: "强台风(STY)",
            time: "2025-11-08T23:00:00"
          },
          {
            lng: 122.5,
            lat: 16.1,
            power: 15,
            speed: 50,
            pressure: 935,
            strong: "强台风(STY)",
            time: "2025-11-09T20:00:00"
          },
          {
            lng: 118.9,
            lat: 17.5,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-10T20:00:00"
          },
          {
            lng: 118,
            lat: 19.7,
            power: 13,
            speed: 40,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-11T20:00:00"
          },
          {
            lng: 118.8,
            lat: 22.7,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-12T20:00:00"
          }
        ]
      },
      {
        source: "中国",
        time: "2025-11-07T23:00:00",
        data: [
          {
            lng: 131.5,
            lat: 12.8,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-08T11:00:00"
          },
          {
            lng: 127.9,
            lat: 13.5,
            power: 15,
            speed: 50,
            pressure: 940,
            strong: "强台风(STY)",
            time: "2025-11-08T23:00:00"
          },
          {
            lng: 124.6,
            lat: 14.9,
            power: 17,
            speed: 58,
            pressure: 925,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T11:00:00"
          },
          {
            lng: 121.6,
            lat: 16.1,
            power: 16,
            speed: 55,
            pressure: 930,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T23:00:00"
          },
          {
            lng: 119.5,
            lat: 16.7,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-10T11:00:00"
          },
          {
            lng: 118.8,
            lat: 17.7,
            power: 13,
            speed: 38,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-10T23:00:00"
          },
          {
            lng: 118.6,
            lat: 20.5,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-11T23:00:00"
          },
          {
            lng: 120,
            lat: 23.1,
            power: 11,
            speed: 30,
            pressure: 980,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T23:00:00"
          }
        ]
      }
    ],
    move_dir: "西西北",
    move_speed: 32
  },
  {
    lng: 134.5,
    lat: 12.1,
    power: 12,
    speed: 35,
    pressure: 970,
    radius7: 460,
    en7: 420,
    es7: 380,
    wn7: 460,
    ws7: 380,
    radius10: 200,
    en10: 200,
    es10: 180,
    wn10: 200,
    ws10: 180,
    radius12: 50,
    en12: 50,
    es12: 50,
    wn12: 50,
    ws12: 50,
    remark: "",
    strong: "台风(TY)",
    time: "2025-11-08T02:00:00",
    data: [
      {
        source: "日本",
        time: "2025-11-08T02:00:00",
        data: [
          {
            lng: 130.6,
            lat: 13.1,
            power: 13,
            speed: 40,
            pressure: 955,
            strong: "台风(TY)",
            time: "2025-11-08T14:00:00"
          },
          {
            lng: 126.9,
            lat: 14.1,
            power: 16,
            speed: 51,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T02:00:00"
          },
          {
            lng: 120.5,
            lat: 16.6,
            power: 12,
            speed: 36,
            strong: "台风(TY)",
            time: "2025-11-10T02:00:00"
          },
          {
            lng: 118.4,
            lat: 18.1,
            power: 13,
            speed: 39,
            strong: "台风(TY)",
            time: "2025-11-11T02:00:00"
          },
          {
            lng: 117.6,
            lat: 20.2,
            power: 13,
            speed: 39,
            strong: "台风(TY)",
            time: "2025-11-12T02:00:00"
          },
          {
            lng: 118.7,
            lat: 23,
            power: 12,
            speed: 33,
            strong: "台风(TY)",
            time: "2025-11-13T02:00:00"
          }
        ]
      },
      {
        source: "美国",
        time: "2025-11-08T02:00:00",
        data: [
          {
            lng: 127.3,
            lat: 13.7,
            power: 16,
            speed: 51,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T02:00:00"
          },
          {
            lng: 121.3,
            lat: 16.2,
            power: 14,
            speed: 44,
            strong: "强台风(STY)",
            time: "2025-11-10T02:00:00"
          },
          {
            lng: 119,
            lat: 18.1,
            power: 13,
            speed: 39,
            strong: "台风(TY)",
            time: "2025-11-11T02:00:00"
          },
          {
            lng: 118.5,
            lat: 20.4,
            power: 12,
            speed: 36,
            strong: "台风(TY)",
            time: "2025-11-12T02:00:00"
          },
          {
            lng: 121.1,
            lat: 24,
            power: 11,
            speed: 31,
            strong: "强热带风暴(STS)",
            time: "2025-11-13T02:00:00"
          }
        ]
      },
      {
        source: "中国",
        time: "2025-11-08T02:00:00",
        data: [
          {
            lng: 130.6,
            lat: 12.9,
            power: 14,
            speed: 45,
            pressure: 950,
            strong: "强台风(STY)",
            time: "2025-11-08T14:00:00"
          },
          {
            lng: 127,
            lat: 14.1,
            power: 16,
            speed: 55,
            pressure: 930,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T02:00:00"
          },
          {
            lng: 123.8,
            lat: 15.3,
            power: 18,
            speed: 62,
            pressure: 915,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T14:00:00"
          },
          {
            lng: 120.7,
            lat: 16.3,
            power: 14,
            speed: 45,
            pressure: 950,
            strong: "强台风(STY)",
            time: "2025-11-10T02:00:00"
          },
          {
            lng: 119.4,
            lat: 16.8,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-10T14:00:00"
          },
          {
            lng: 118.6,
            lat: 18,
            power: 13,
            speed: 38,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-11T02:00:00"
          },
          {
            lng: 118.6,
            lat: 20.9,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-12T02:00:00"
          },
          {
            lng: 119.8,
            lat: 23.1,
            power: 10,
            speed: 28,
            pressure: 982,
            strong: "强热带风暴(STS)",
            time: "2025-11-13T02:00:00"
          }
        ]
      },
      {
        source: "欧洲",
        time: "2025-11-08T02:00:00",
        data: [
          {
            lng: 127.2,
            lat: 13.9,
            power: 16,
            speed: 51,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T02:00:00"
          },
          {
            lng: 121.3,
            lat: 16.2,
            power: 15,
            speed: 48,
            strong: "强台风(STY)",
            time: "2025-11-10T02:00:00"
          },
          {
            lng: 118.6,
            lat: 18.1,
            power: 13,
            speed: 40,
            strong: "台风(TY)",
            time: "2025-11-11T02:00:00"
          },
          {
            lng: 118.6,
            lat: 20.8,
            power: 12,
            speed: 35,
            strong: "台风(TY)",
            time: "2025-11-12T02:00:00"
          },
          {
            lng: 120.5,
            lat: 23.6,
            power: 10,
            speed: 28,
            strong: "强热带风暴(STS)",
            time: "2025-11-13T02:00:00"
          }
        ]
      },
      {
        source: "菲律宾",
        time: "2025-11-08T02:00:00",
        data: [
          {
            lng: 126.8,
            lat: 14.1,
            power: 16,
            speed: 54,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T02:00:00"
          },
          {
            lng: 120.6,
            lat: 16.6,
            power: 13,
            speed: 41,
            strong: "台风(TY)",
            time: "2025-11-10T02:00:00"
          },
          {
            lng: 118.6,
            lat: 18.3,
            power: 13,
            speed: 39,
            strong: "台风(TY)",
            time: "2025-11-11T02:00:00"
          },
          {
            lng: 118.3,
            lat: 20.3,
            power: 12,
            speed: 36,
            strong: "台风(TY)",
            time: "2025-11-12T02:00:00"
          },
          {
            lng: 120.3,
            lat: 23.2,
            power: 11,
            speed: 31,
            strong: "强热带风暴(STS)",
            time: "2025-11-13T02:00:00"
          }
        ]
      },
      {
        source: "中国香港",
        time: "2025-11-08T02:00:00",
        data: [
          {
            lng: 127,
            lat: 13.8,
            power: 16,
            speed: 51,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T02:00:00"
          },
          {
            lng: 120.8,
            lat: 16.5,
            power: 14,
            speed: 46,
            strong: "强台风(STY)",
            time: "2025-11-10T02:00:00"
          },
          {
            lng: 118.5,
            lat: 18.4,
            power: 13,
            speed: 39,
            strong: "台风(TY)",
            time: "2025-11-11T02:00:00"
          },
          {
            lng: 118.4,
            lat: 20.9,
            power: 12,
            speed: 33,
            strong: "台风(TY)",
            time: "2025-11-12T02:00:00"
          },
          {
            lng: 120.7,
            lat: 23.9,
            power: 11,
            speed: 29,
            strong: "强热带风暴(STS)",
            time: "2025-11-13T02:00:00"
          }
        ]
      },
      {
        source: "南海所",
        time: "2025-11-08T02:00:00",
        data: [
          {
            lng: 134.2,
            lat: 14.1,
            power: 11,
            speed: 31,
            pressure: 979,
            strong: "强热带风暴(STS)",
            time: "2025-11-11T20:00:00"
          },
          {
            lng: 134.3,
            lat: 14.8,
            power: 11,
            speed: 32,
            pressure: 965,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T02:00:00"
          },
          {
            lng: 132.7,
            lat: 14.4,
            power: 14,
            speed: 42,
            pressure: 956,
            strong: "强台风(STY)",
            time: "2025-11-12T08:00:00"
          },
          {
            lng: 131,
            lat: 14.8,
            power: 14,
            speed: 43,
            pressure: 952,
            strong: "强台风(STY)",
            time: "2025-11-12T14:00:00"
          },
          {
            lng: 129.4,
            lat: 15.1,
            power: 13,
            speed: 41,
            pressure: 947,
            strong: "台风(TY)",
            time: "2025-11-12T20:00:00"
          }
        ]
      },
      {
        source: "韩国",
        time: "2025-11-08T02:00:00",
        data: [
          {
            lng: 131,
            lat: 13,
            power: 15,
            speed: 47,
            pressure: 940,
            strong: "强台风(STY)",
            time: "2025-11-08T14:00:00"
          },
          {
            lng: 128,
            lat: 13.9,
            power: 15,
            speed: 49,
            pressure: 935,
            strong: "强台风(STY)",
            time: "2025-11-09T02:00:00"
          },
          {
            lng: 122.3,
            lat: 16.1,
            power: 14,
            speed: 43,
            pressure: 950,
            strong: "强台风(STY)",
            time: "2025-11-10T02:00:00"
          },
          {
            lng: 118.8,
            lat: 18.1,
            power: 13,
            speed: 37,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-11T02:00:00"
          },
          {
            lng: 118.4,
            lat: 20.9,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-12T02:00:00"
          },
          {
            lng: 119.3,
            lat: 23,
            power: 10,
            speed: 27,
            pressure: 985,
            strong: "强热带风暴(STS)",
            time: "2025-11-13T02:00:00"
          }
        ]
      }
    ],
    move_dir: "西西北",
    move_speed: 37
  },
  {
    lng: 133.3,
    lat: 12.6,
    power: 13,
    speed: 38,
    pressure: 965,
    radius7: 460,
    en7: 420,
    es7: 380,
    wn7: 460,
    ws7: 380,
    radius10: 200,
    en10: 200,
    es10: 180,
    wn10: 200,
    ws10: 180,
    radius12: 80,
    en12: 80,
    es12: 80,
    wn12: 80,
    ws12: 80,
    remark: "",
    strong: "台风(TY)",
    time: "2025-11-08T05:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-08T05:00:00",
        data: [
          {
            lng: 129.7,
            lat: 13.3,
            power: 15,
            speed: 48,
            pressure: 945,
            strong: "强台风(STY)",
            time: "2025-11-08T17:00:00"
          },
          {
            lng: 126.2,
            lat: 14.3,
            power: 17,
            speed: 58,
            pressure: 925,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T05:00:00"
          },
          {
            lng: 123.2,
            lat: 15.5,
            power: 18,
            speed: 62,
            pressure: 915,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T17:00:00"
          },
          {
            lng: 120.6,
            lat: 16.5,
            power: 14,
            speed: 42,
            pressure: 955,
            strong: "强台风(STY)",
            time: "2025-11-10T05:00:00"
          },
          {
            lng: 119.3,
            lat: 17.2,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-10T17:00:00"
          },
          {
            lng: 118.7,
            lat: 18.4,
            power: 13,
            speed: 38,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-11T05:00:00"
          },
          {
            lng: 119,
            lat: 21.4,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-12T05:00:00"
          },
          {
            lng: 120,
            lat: 23.9,
            power: 11,
            speed: 30,
            pressure: 980,
            strong: "强热带风暴(STS)",
            time: "2025-11-13T05:00:00"
          }
        ]
      },
      {
        source: "日本",
        time: "2025-11-08T05:00:00",
        data: [
          {
            lng: 129.7,
            lat: 13.3,
            power: 13,
            speed: 40,
            pressure: 955,
            strong: "台风(TY)",
            time: "2025-11-08T17:00:00"
          },
          {
            lng: 126.1,
            lat: 14.4,
            power: 15,
            speed: 50,
            pressure: 935,
            strong: "强台风(STY)",
            time: "2025-11-09T05:00:00"
          },
          {
            lng: 120.5,
            lat: 16.6,
            power: 12,
            speed: 35,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-10T02:00:00"
          },
          {
            lng: 118.4,
            lat: 18.1,
            power: 13,
            speed: 40,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-11T02:00:00"
          },
          {
            lng: 117.6,
            lat: 20.2,
            power: 13,
            speed: 40,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-12T02:00:00"
          },
          {
            lng: 118.7,
            lat: 23,
            power: 12,
            speed: 35,
            pressure: 980,
            strong: "台风(TY)",
            time: "2025-11-13T02:00:00"
          }
        ]
      }
    ],
    move_dir: "西西北",
    move_speed: 34
  },
  {
    lng: 132.3,
    lat: 12.8,
    power: 13,
    speed: 40,
    pressure: 960,
    radius7: 460,
    en7: 420,
    es7: 380,
    wn7: 460,
    ws7: 380,
    radius10: 200,
    en10: 200,
    es10: 180,
    wn10: 200,
    ws10: 180,
    radius12: 80,
    en12: 80,
    es12: 80,
    wn12: 80,
    ws12: 80,
    remark: "",
    strong: "台风(TY)",
    time: "2025-11-08T08:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-08T08:00:00",
        data: [
          {
            lng: 128.7,
            lat: 13.3,
            power: 15,
            speed: 48,
            pressure: 945,
            strong: "强台风(STY)",
            time: "2025-11-08T20:00:00"
          },
          {
            lng: 125.5,
            lat: 14.5,
            power: 17,
            speed: 58,
            pressure: 925,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T08:00:00"
          },
          {
            lng: 122.5,
            lat: 15.9,
            power: 18,
            speed: 62,
            pressure: 915,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T20:00:00"
          },
          {
            lng: 120,
            lat: 16.7,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-10T08:00:00"
          },
          {
            lng: 119.1,
            lat: 17.5,
            power: 13,
            speed: 38,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-10T20:00:00"
          },
          {
            lng: 118.6,
            lat: 18.6,
            power: 13,
            speed: 38,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-11T08:00:00"
          },
          {
            lng: 119.3,
            lat: 21.7,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-12T08:00:00"
          },
          {
            lng: 120.4,
            lat: 24.1,
            power: 9,
            speed: 23,
            pressure: 990,
            strong: "热带风暴(TS)",
            time: "2025-11-13T08:00:00"
          }
        ]
      },
      {
        source: "日本",
        time: "2025-11-08T08:00:00",
        data: [
          {
            lng: 128.8,
            lat: 13.4,
            power: 14,
            speed: 45,
            pressure: 950,
            strong: "强台风(STY)",
            time: "2025-11-08T20:00:00"
          },
          {
            lng: 125.3,
            lat: 14.6,
            power: 15,
            speed: 50,
            pressure: 935,
            strong: "强台风(STY)",
            time: "2025-11-09T08:00:00"
          },
          {
            lng: 119.6,
            lat: 16.7,
            power: 12,
            speed: 35,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-10T08:00:00"
          },
          {
            lng: 118,
            lat: 18.6,
            power: 13,
            speed: 40,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-11T08:00:00"
          },
          {
            lng: 117.7,
            lat: 21,
            power: 13,
            speed: 40,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-12T08:00:00"
          },
          {
            lng: 119.6,
            lat: 23.5,
            power: 11,
            speed: 30,
            pressure: 985,
            strong: "强热带风暴(STS)",
            time: "2025-11-13T08:00:00"
          }
        ]
      },
      {
        source: "南海所",
        time: "2025-11-08T08:00:00",
        data: [
          {
            lng: 134.2,
            lat: 14.1,
            power: 11,
            speed: 31,
            pressure: 979,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T02:00:00"
          },
          {
            lng: 134.3,
            lat: 14.8,
            power: 11,
            speed: 32,
            pressure: 965,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T08:00:00"
          },
          {
            lng: 132.7,
            lat: 14.4,
            power: 14,
            speed: 42,
            pressure: 956,
            strong: "强台风(STY)",
            time: "2025-11-12T14:00:00"
          },
          {
            lng: 131,
            lat: 14.8,
            power: 14,
            speed: 43,
            pressure: 952,
            strong: "强台风(STY)",
            time: "2025-11-12T20:00:00"
          },
          {
            lng: 129.4,
            lat: 15.1,
            power: 13,
            speed: 41,
            pressure: 947,
            strong: "台风(TY)",
            time: "2025-11-13T02:00:00"
          }
        ]
      },
      {
        source: "欧洲",
        time: "2025-11-08T08:00:00",
        data: [
          {
            lng: 125.5,
            lat: 14.3,
            power: 16,
            speed: 53,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T08:00:00"
          },
          {
            lng: 119.8,
            lat: 16.8,
            power: 14,
            speed: 43,
            strong: "强台风(STY)",
            time: "2025-11-10T08:00:00"
          },
          {
            lng: 118.2,
            lat: 18.9,
            power: 13,
            speed: 40,
            strong: "台风(TY)",
            time: "2025-11-11T08:00:00"
          },
          {
            lng: 118.6,
            lat: 21.4,
            power: 12,
            speed: 35,
            strong: "台风(TY)",
            time: "2025-11-12T08:00:00"
          },
          {
            lng: 120.5,
            lat: 23.9,
            power: 8,
            speed: 18,
            strong: "热带风暴(TS)",
            time: "2025-11-13T08:00:00"
          }
        ]
      },
      {
        source: "菲律宾",
        time: "2025-11-08T08:00:00",
        data: [
          {
            lng: 125.1,
            lat: 14.4,
            power: 15,
            speed: 49,
            strong: "强台风(STY)",
            time: "2025-11-09T08:00:00"
          },
          {
            lng: 119.6,
            lat: 16.7,
            power: 12,
            speed: 36,
            strong: "台风(TY)",
            time: "2025-11-10T08:00:00"
          },
          {
            lng: 118.1,
            lat: 18.7,
            power: 12,
            speed: 33,
            strong: "台风(TY)",
            time: "2025-11-11T08:00:00"
          },
          {
            lng: 118.1,
            lat: 21,
            power: 10,
            speed: 28,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T08:00:00"
          },
          {
            lng: 120.2,
            lat: 23.4,
            power: 9,
            speed: 23,
            strong: "热带风暴(TS)",
            time: "2025-11-13T08:00:00"
          }
        ]
      },
      {
        source: "韩国",
        time: "2025-11-08T08:00:00",
        data: [
          {
            lng: 129.5,
            lat: 13.4,
            power: 14,
            speed: 43,
            pressure: 950,
            strong: "强台风(STY)",
            time: "2025-11-08T20:00:00"
          },
          {
            lng: 125.9,
            lat: 14.5,
            power: 15,
            speed: 50,
            pressure: 930,
            strong: "强台风(STY)",
            time: "2025-11-09T08:00:00"
          },
          {
            lng: 120.5,
            lat: 17,
            power: 13,
            speed: 40,
            pressure: 955,
            strong: "台风(TY)",
            time: "2025-11-10T08:00:00"
          },
          {
            lng: 118.5,
            lat: 18.8,
            power: 13,
            speed: 37,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-11T08:00:00"
          },
          {
            lng: 118.6,
            lat: 21.5,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-12T08:00:00"
          },
          {
            lng: 120.1,
            lat: 23.5,
            power: 9,
            speed: 24,
            pressure: 990,
            strong: "热带风暴(TS)",
            time: "2025-11-13T08:00:00"
          }
        ]
      },
      {
        source: "中国香港",
        time: "2025-11-08T08:00:00",
        data: [
          {
            lng: 125.4,
            lat: 14.4,
            power: 16,
            speed: 54,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T08:00:00"
          },
          {
            lng: 119.7,
            lat: 16.8,
            power: 13,
            speed: 40,
            strong: "台风(TY)",
            time: "2025-11-10T08:00:00"
          },
          {
            lng: 118.3,
            lat: 19,
            power: 12,
            speed: 36,
            strong: "台风(TY)",
            time: "2025-11-11T08:00:00"
          },
          {
            lng: 118.7,
            lat: 21.6,
            power: 12,
            speed: 33,
            strong: "台风(TY)",
            time: "2025-11-12T08:00:00"
          },
          {
            lng: 122.2,
            lat: 25,
            power: 9,
            speed: 24,
            strong: "热带风暴(TS)",
            time: "2025-11-13T08:00:00"
          }
        ]
      },
      {
        source: "美国",
        time: "2025-11-08T08:00:00",
        data: [
          {
            lng: 125.3,
            lat: 14.4,
            power: 17,
            speed: 59,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T08:00:00"
          },
          {
            lng: 120.2,
            lat: 16.6,
            power: 14,
            speed: 44,
            strong: "强台风(STY)",
            time: "2025-11-10T08:00:00"
          },
          {
            lng: 118.6,
            lat: 18.6,
            power: 13,
            speed: 39,
            strong: "台风(TY)",
            time: "2025-11-11T08:00:00"
          },
          {
            lng: 118.7,
            lat: 20.7,
            power: 12,
            speed: 33,
            strong: "台风(TY)",
            time: "2025-11-12T08:00:00"
          },
          {
            lng: 121.7,
            lat: 24.7,
            power: 10,
            speed: 26,
            strong: "强热带风暴(STS)",
            time: "2025-11-13T08:00:00"
          }
        ]
      }
    ],
    move_dir: "西",
    move_speed: 33
  },
  {
    lng: 131.3,
    lat: 12.7,
    power: 14,
    speed: 42,
    pressure: 955,
    radius7: 460,
    en7: 420,
    es7: 380,
    wn7: 460,
    ws7: 380,
    radius10: 200,
    en10: 200,
    es10: 180,
    wn10: 200,
    ws10: 180,
    radius12: 80,
    en12: 80,
    es12: 80,
    wn12: 80,
    ws12: 80,
    remark: "",
    strong: "强台风(STY)",
    time: "2025-11-08T11:00:00",
    data: [
      {
        source: "日本",
        time: "2025-11-08T11:00:00",
        data: [
          {
            lng: 127.9,
            lat: 13.7,
            power: 14,
            speed: 45,
            pressure: 940,
            strong: "强台风(STY)",
            time: "2025-11-08T23:00:00"
          },
          {
            lng: 124.5,
            lat: 14.9,
            power: 15,
            speed: 50,
            pressure: 935,
            strong: "强台风(STY)",
            time: "2025-11-09T11:00:00"
          },
          {
            lng: 119.6,
            lat: 16.7,
            power: 12,
            speed: 35,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-10T08:00:00"
          },
          {
            lng: 118,
            lat: 18.6,
            power: 13,
            speed: 40,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-11T08:00:00"
          },
          {
            lng: 117.7,
            lat: 21,
            power: 13,
            speed: 40,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-12T08:00:00"
          },
          {
            lng: 119.6,
            lat: 23.5,
            power: 11,
            speed: 30,
            pressure: 985,
            strong: "强热带风暴(STS)",
            time: "2025-11-13T08:00:00"
          }
        ]
      },
      {
        source: "中国",
        time: "2025-11-08T11:00:00",
        data: [
          {
            lng: 127.8,
            lat: 13.5,
            power: 15,
            speed: 50,
            pressure: 940,
            strong: "强台风(STY)",
            time: "2025-11-08T23:00:00"
          },
          {
            lng: 124.5,
            lat: 14.8,
            power: 17,
            speed: 58,
            pressure: 925,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T11:00:00"
          },
          {
            lng: 121.6,
            lat: 16.1,
            power: 17,
            speed: 58,
            pressure: 925,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T23:00:00"
          },
          {
            lng: 119.4,
            lat: 16.8,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-10T11:00:00"
          },
          {
            lng: 118.8,
            lat: 17.7,
            power: 13,
            speed: 38,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-10T23:00:00"
          },
          {
            lng: 118.5,
            lat: 18.8,
            power: 13,
            speed: 38,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-11T11:00:00"
          },
          {
            lng: 119.2,
            lat: 21.6,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-12T11:00:00"
          },
          {
            lng: 120.6,
            lat: 24.5,
            power: 9,
            speed: 23,
            pressure: 990,
            strong: "热带风暴(TS)",
            time: "2025-11-13T11:00:00"
          }
        ]
      }
    ],
    move_dir: "西西北",
    move_speed: 33
  },
  {
    lng: 130.7,
    lat: 13,
    power: 14,
    speed: 42,
    pressure: 955,
    radius7: 560,
    en7: 520,
    es7: 380,
    wn7: 560,
    ws7: 380,
    radius10: 200,
    en10: 200,
    es10: 180,
    wn10: 200,
    ws10: 180,
    radius12: 100,
    en12: 100,
    es12: 100,
    wn12: 100,
    ws12: 100,
    remark: "",
    strong: "强台风(STY)",
    time: "2025-11-08T14:00:00",
    data: [
      {
        source: "中国香港",
        time: "2025-11-08T14:00:00",
        data: [
          {
            lng: 123.6,
            lat: 14.9,
            power: 17,
            speed: 57,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T14:00:00"
          },
          {
            lng: 118.8,
            lat: 17,
            power: 13,
            speed: 40,
            strong: "台风(TY)",
            time: "2025-11-10T14:00:00"
          },
          {
            lng: 117.9,
            lat: 19.4,
            power: 12,
            speed: 36,
            strong: "台风(TY)",
            time: "2025-11-11T14:00:00"
          },
          {
            lng: 118.8,
            lat: 22,
            power: 12,
            speed: 33,
            strong: "台风(TY)",
            time: "2025-11-12T14:00:00"
          },
          {
            lng: 122.8,
            lat: 25.5,
            power: 9,
            speed: 24,
            strong: "热带风暴(TS)",
            time: "2025-11-13T14:00:00"
          }
        ]
      },
      {
        source: "菲律宾",
        time: "2025-11-08T14:00:00",
        data: [
          {
            lng: 123.8,
            lat: 15.1,
            power: 16,
            speed: 54,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T14:00:00"
          },
          {
            lng: 119.3,
            lat: 17,
            power: 12,
            speed: 33,
            strong: "台风(TY)",
            time: "2025-11-10T14:00:00"
          },
          {
            lng: 118.3,
            lat: 19,
            power: 12,
            speed: 36,
            strong: "台风(TY)",
            time: "2025-11-11T14:00:00"
          },
          {
            lng: 118.5,
            lat: 21.5,
            power: 10,
            speed: 28,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T14:00:00"
          },
          {
            lng: 121.1,
            lat: 23.8,
            power: 8,
            speed: 18,
            strong: "热带风暴(TS)",
            time: "2025-11-13T14:00:00"
          }
        ]
      },
      {
        source: "美国",
        time: "2025-11-08T14:00:00",
        data: [
          {
            lng: 124.1,
            lat: 15.1,
            power: 17,
            speed: 57,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T14:00:00"
          },
          {
            lng: 120,
            lat: 17.2,
            power: 13,
            speed: 39,
            strong: "台风(TY)",
            time: "2025-11-10T14:00:00"
          },
          {
            lng: 118.6,
            lat: 19.2,
            power: 11,
            speed: 31,
            strong: "强热带风暴(STS)",
            time: "2025-11-11T14:00:00"
          },
          {
            lng: 119.6,
            lat: 22.3,
            power: 10,
            speed: 28,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T14:00:00"
          },
          {
            lng: 121.9,
            lat: 24.5,
            power: 10,
            speed: 26,
            strong: "强热带风暴(STS)",
            time: "2025-11-13T14:00:00"
          }
        ]
      },
      {
        source: "日本",
        time: "2025-11-08T14:00:00",
        data: [
          {
            lng: 126.8,
            lat: 13.9,
            power: 14,
            speed: 45,
            pressure: 940,
            strong: "强台风(STY)",
            time: "2025-11-09T02:00:00"
          },
          {
            lng: 123.6,
            lat: 15.1,
            power: 15,
            speed: 50,
            pressure: 935,
            strong: "强台风(STY)",
            time: "2025-11-09T14:00:00"
          },
          {
            lng: 119,
            lat: 17.1,
            power: 12,
            speed: 35,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-10T14:00:00"
          },
          {
            lng: 117.8,
            lat: 19.1,
            power: 13,
            speed: 40,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-11T14:00:00"
          },
          {
            lng: 117.7,
            lat: 21.5,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-12T14:00:00"
          },
          {
            lng: 120.1,
            lat: 24,
            power: 11,
            speed: 30,
            pressure: 990,
            strong: "强热带风暴(STS)",
            time: "2025-11-13T14:00:00"
          }
        ]
      },
      {
        source: "欧洲",
        time: "2025-11-08T14:00:00",
        data: [
          {
            lng: 123.6,
            lat: 15,
            power: 16,
            speed: 55,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T14:00:00"
          },
          {
            lng: 119,
            lat: 17.2,
            power: 14,
            speed: 43,
            strong: "强台风(STY)",
            time: "2025-11-10T14:00:00"
          },
          {
            lng: 118.2,
            lat: 19.3,
            power: 13,
            speed: 40,
            strong: "台风(TY)",
            time: "2025-11-11T14:00:00"
          },
          {
            lng: 118.4,
            lat: 21.9,
            power: 12,
            speed: 33,
            strong: "台风(TY)",
            time: "2025-11-12T14:00:00"
          },
          {
            lng: 121.1,
            lat: 24.6,
            power: 8,
            speed: 18,
            strong: "热带风暴(TS)",
            time: "2025-11-13T14:00:00"
          }
        ]
      },
      {
        source: "中国",
        time: "2025-11-08T14:00:00",
        data: [
          {
            lng: 127,
            lat: 13.8,
            power: 16,
            speed: 52,
            pressure: 935,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T02:00:00"
          },
          {
            lng: 123.7,
            lat: 15.1,
            power: 18,
            speed: 62,
            pressure: 915,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T14:00:00"
          },
          {
            lng: 120.7,
            lat: 16.3,
            power: 14,
            speed: 45,
            pressure: 950,
            strong: "强台风(STY)",
            time: "2025-11-10T02:00:00"
          },
          {
            lng: 119.2,
            lat: 16.9,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-10T14:00:00"
          },
          {
            lng: 118.7,
            lat: 17.9,
            power: 13,
            speed: 38,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-11T02:00:00"
          },
          {
            lng: 118.5,
            lat: 19,
            power: 13,
            speed: 38,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-11T14:00:00"
          },
          {
            lng: 119.2,
            lat: 21.6,
            power: 12,
            speed: 33,
            pressure: 975,
            strong: "台风(TY)",
            time: "2025-11-12T14:00:00"
          },
          {
            lng: 120.7,
            lat: 24.7,
            power: 9,
            speed: 23,
            pressure: 990,
            strong: "热带风暴(TS)",
            time: "2025-11-13T14:00:00"
          }
        ]
      },
      {
        source: "韩国",
        time: "2025-11-08T14:00:00",
        data: [
          {
            lng: 127.1,
            lat: 13.9,
            power: 15,
            speed: 47,
            pressure: 940,
            strong: "强台风(STY)",
            time: "2025-11-09T02:00:00"
          },
          {
            lng: 123.9,
            lat: 15.1,
            power: 15,
            speed: 50,
            pressure: 930,
            strong: "强台风(STY)",
            time: "2025-11-09T14:00:00"
          },
          {
            lng: 119.4,
            lat: 17.1,
            power: 13,
            speed: 39,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-10T14:00:00"
          },
          {
            lng: 118.2,
            lat: 19.1,
            power: 13,
            speed: 37,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-11T14:00:00"
          },
          {
            lng: 118.8,
            lat: 21.8,
            power: 11,
            speed: 32,
            pressure: 975,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T14:00:00"
          },
          {
            lng: 120.2,
            lat: 23.9,
            power: 9,
            speed: 21,
            pressure: 994,
            strong: "热带风暴(TS)",
            time: "2025-11-13T14:00:00"
          }
        ]
      }
    ],
    move_dir: "西西北",
    move_speed: 35
  },
  {
    lng: 129.6,
    lat: 13.1,
    power: 14,
    speed: 42,
    pressure: 955,
    radius7: 560,
    en7: 520,
    es7: 380,
    wn7: 560,
    ws7: 380,
    radius10: 200,
    en10: 200,
    es10: 180,
    wn10: 200,
    ws10: 180,
    radius12: 100,
    en12: 100,
    es12: 100,
    wn12: 100,
    ws12: 100,
    remark: "",
    strong: "强台风(STY)",
    time: "2025-11-08T17:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-08T17:00:00",
        data: [
          {
            lng: 126,
            lat: 14,
            power: 16,
            speed: 52,
            pressure: 935,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T05:00:00"
          },
          {
            lng: 122.9,
            lat: 15.4,
            power: 18,
            speed: 62,
            pressure: 915,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T17:00:00"
          },
          {
            lng: 120,
            lat: 16.5,
            power: 13,
            speed: 38,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-10T05:00:00"
          },
          {
            lng: 119,
            lat: 17.2,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-10T17:00:00"
          },
          {
            lng: 118.4,
            lat: 18.2,
            power: 14,
            speed: 42,
            pressure: 955,
            strong: "强台风(STY)",
            time: "2025-11-11T05:00:00"
          },
          {
            lng: 118.1,
            lat: 19.6,
            power: 13,
            speed: 38,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-11T17:00:00"
          },
          {
            lng: 119.1,
            lat: 22.3,
            power: 11,
            speed: 30,
            pressure: 980,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T17:00:00"
          },
          {
            lng: 121,
            lat: 24.7,
            power: 9,
            speed: 23,
            pressure: 990,
            strong: "热带风暴(TS)",
            time: "2025-11-13T17:00:00"
          }
        ]
      },
      {
        source: "日本",
        time: "2025-11-08T17:00:00",
        data: [
          {
            lng: 126.2,
            lat: 14,
            power: 14,
            speed: 45,
            pressure: 940,
            strong: "强台风(STY)",
            time: "2025-11-09T05:00:00"
          },
          {
            lng: 123,
            lat: 15.5,
            power: 15,
            speed: 50,
            pressure: 935,
            strong: "强台风(STY)",
            time: "2025-11-09T17:00:00"
          },
          {
            lng: 119,
            lat: 17.1,
            power: 12,
            speed: 35,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-10T14:00:00"
          },
          {
            lng: 117.8,
            lat: 19.1,
            power: 13,
            speed: 40,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-11T14:00:00"
          },
          {
            lng: 117.7,
            lat: 21.5,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-12T14:00:00"
          },
          {
            lng: 120.1,
            lat: 24,
            power: 11,
            speed: 30,
            pressure: 990,
            strong: "强热带风暴(STS)",
            time: "2025-11-13T14:00:00"
          }
        ]
      }
    ],
    move_dir: "西西北",
    move_speed: 34
  },
  {
    lng: 128.4,
    lat: 13.2,
    power: 14,
    speed: 42,
    pressure: 955,
    radius7: 560,
    en7: 520,
    es7: 380,
    wn7: 560,
    ws7: 380,
    radius10: 200,
    en10: 200,
    es10: 180,
    wn10: 200,
    ws10: 180,
    radius12: 100,
    en12: 100,
    es12: 100,
    wn12: 100,
    ws12: 100,
    remark: "",
    strong: "强台风(STY)",
    time: "2025-11-08T20:00:00",
    data: [
      {
        source: "日本",
        time: "2025-11-08T20:00:00",
        data: [
          {
            lng: 125.1,
            lat: 14.3,
            power: 14,
            speed: 45,
            pressure: 940,
            strong: "强台风(STY)",
            time: "2025-11-09T08:00:00"
          },
          {
            lng: 122,
            lat: 15.9,
            power: 15,
            speed: 50,
            pressure: 935,
            strong: "强台风(STY)",
            time: "2025-11-09T20:00:00"
          },
          {
            lng: 118.4,
            lat: 17.6,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-10T20:00:00"
          },
          {
            lng: 117.4,
            lat: 19.6,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-11T20:00:00"
          },
          {
            lng: 117.7,
            lat: 22.1,
            power: 11,
            speed: 30,
            pressure: 980,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T20:00:00"
          },
          {
            lng: 120.8,
            lat: 23.7,
            power: 9,
            speed: 23,
            pressure: 994,
            strong: "热带风暴(TS)",
            time: "2025-11-13T20:00:00"
          }
        ]
      },
      {
        source: "菲律宾",
        time: "2025-11-08T20:00:00",
        data: [
          {
            lng: 121.8,
            lat: 15.9,
            power: 17,
            speed: 57,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T20:00:00"
          },
          {
            lng: 118.6,
            lat: 17.7,
            power: 12,
            speed: 33,
            strong: "台风(TY)",
            time: "2025-11-10T20:00:00"
          },
          {
            lng: 118,
            lat: 19.7,
            power: 12,
            speed: 33,
            strong: "台风(TY)",
            time: "2025-11-11T20:00:00"
          },
          {
            lng: 118.8,
            lat: 22,
            power: 10,
            speed: 28,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T20:00:00"
          },
          {
            lng: 122.2,
            lat: 24.7,
            power: 7,
            speed: 15,
            strong: "热带低压(TD)",
            time: "2025-11-13T20:00:00"
          }
        ]
      },
      {
        source: "南海所",
        time: "2025-11-08T20:00:00",
        data: [
          {
            lng: 126.8,
            lat: 13.3,
            power: 14,
            speed: 43,
            pressure: 953,
            strong: "强台风(STY)",
            time: "2025-11-09T02:00:00"
          },
          {
            lng: 125.3,
            lat: 14,
            power: 14,
            speed: 43,
            pressure: 951,
            strong: "强台风(STY)",
            time: "2025-11-09T08:00:00"
          },
          {
            lng: 123.6,
            lat: 14.8,
            power: 14,
            speed: 43,
            pressure: 949,
            strong: "强台风(STY)",
            time: "2025-11-09T14:00:00"
          },
          {
            lng: 121.9,
            lat: 15.2,
            power: 13,
            speed: 37,
            pressure: 952,
            strong: "台风(TY)",
            time: "2025-11-09T20:00:00"
          },
          {
            lng: 119.9,
            lat: 16.4,
            power: 13,
            speed: 37,
            pressure: 961,
            strong: "台风(TY)",
            time: "2025-11-10T02:00:00"
          },
          {
            lng: 119.4,
            lat: 16.2,
            power: 12,
            speed: 36,
            pressure: 964,
            strong: "台风(TY)",
            time: "2025-11-10T08:00:00"
          },
          {
            lng: 118.8,
            lat: 17,
            power: 13,
            speed: 39,
            pressure: 961,
            strong: "台风(TY)",
            time: "2025-11-10T14:00:00"
          },
          {
            lng: 118.1,
            lat: 17.4,
            power: 13,
            speed: 39,
            pressure: 962,
            strong: "台风(TY)",
            time: "2025-11-10T20:00:00"
          },
          {
            lng: 117.5,
            lat: 17.3,
            power: 13,
            speed: 39,
            pressure: 966,
            strong: "台风(TY)",
            time: "2025-11-11T02:00:00"
          },
          {
            lng: 117.6,
            lat: 17.9,
            power: 12,
            speed: 35,
            pressure: 973,
            strong: "台风(TY)",
            time: "2025-11-11T08:00:00"
          },
          {
            lng: 117.5,
            lat: 18.6,
            power: 11,
            speed: 32,
            pressure: 975,
            strong: "强热带风暴(STS)",
            time: "2025-11-11T14:00:00"
          },
          {
            lng: 117.6,
            lat: 19.2,
            power: 11,
            speed: 31,
            pressure: 978,
            strong: "强热带风暴(STS)",
            time: "2025-11-11T20:00:00"
          },
          {
            lng: 116.7,
            lat: 20.4,
            power: 12,
            speed: 35,
            pressure: 975,
            strong: "台风(TY)",
            time: "2025-11-12T02:00:00"
          },
          {
            lng: 117.1,
            lat: 21.2,
            power: 11,
            speed: 30,
            pressure: 980,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T08:00:00"
          },
          {
            lng: 117.1,
            lat: 21.9,
            power: 10,
            speed: 26,
            pressure: 983,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T14:00:00"
          },
          {
            lng: 117.4,
            lat: 22.7,
            power: 10,
            speed: 25,
            pressure: 989,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T20:00:00"
          },
          {
            lng: 117.5,
            lat: 22.8,
            power: 9,
            speed: 23,
            pressure: 995,
            strong: "热带风暴(TS)",
            time: "2025-11-13T02:00:00"
          },
          {
            lng: 118.2,
            lat: 23.4,
            power: 8,
            speed: 18,
            pressure: 1e3,
            strong: "热带风暴(TS)",
            time: "2025-11-13T08:00:00"
          },
          {
            lng: 119.3,
            lat: 24.1,
            power: 8,
            speed: 18,
            pressure: 1001,
            strong: "热带风暴(TS)",
            time: "2025-11-13T14:00:00"
          }
        ]
      },
      {
        source: "中国香港",
        time: "2025-11-08T20:00:00",
        data: [
          {
            lng: 122.3,
            lat: 15.5,
            power: 17,
            speed: 57,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T20:00:00"
          },
          {
            lng: 118.4,
            lat: 17.6,
            power: 13,
            speed: 40,
            strong: "台风(TY)",
            time: "2025-11-10T20:00:00"
          },
          {
            lng: 118,
            lat: 20.1,
            power: 13,
            speed: 39,
            strong: "台风(TY)",
            time: "2025-11-11T20:00:00"
          },
          {
            lng: 119.5,
            lat: 23,
            power: 11,
            speed: 30,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T20:00:00"
          },
          {
            lng: 124.5,
            lat: 25.9,
            power: 9,
            speed: 21,
            strong: "热带风暴(TS)",
            time: "2025-11-13T20:00:00"
          }
        ]
      },
      {
        source: "韩国",
        time: "2025-11-08T20:00:00",
        data: [
          {
            lng: 125.2,
            lat: 14.4,
            power: 15,
            speed: 47,
            pressure: 940,
            strong: "强台风(STY)",
            time: "2025-11-09T08:00:00"
          },
          {
            lng: 122.1,
            lat: 15.8,
            power: 15,
            speed: 49,
            pressure: 935,
            strong: "强台风(STY)",
            time: "2025-11-09T20:00:00"
          },
          {
            lng: 118.6,
            lat: 17.7,
            power: 13,
            speed: 39,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-10T20:00:00"
          },
          {
            lng: 118.1,
            lat: 19.8,
            power: 13,
            speed: 37,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-11T20:00:00"
          },
          {
            lng: 118.8,
            lat: 22.3,
            power: 11,
            speed: 32,
            pressure: 975,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T20:00:00"
          },
          {
            lng: 120.7,
            lat: 24.3,
            power: 9,
            speed: 21,
            pressure: 995,
            strong: "热带风暴(TS)",
            time: "2025-11-13T20:00:00"
          }
        ]
      },
      {
        source: "中国",
        time: "2025-11-08T20:00:00",
        data: [
          {
            lng: 124.9,
            lat: 14.2,
            power: 16,
            speed: 52,
            pressure: 935,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T08:00:00"
          },
          {
            lng: 122.1,
            lat: 15.7,
            power: 17,
            speed: 60,
            pressure: 920,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T20:00:00"
          },
          {
            lng: 119.3,
            lat: 16.5,
            power: 13,
            speed: 38,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-10T08:00:00"
          },
          {
            lng: 118.4,
            lat: 17.5,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-10T20:00:00"
          },
          {
            lng: 117.8,
            lat: 18.7,
            power: 14,
            speed: 42,
            pressure: 955,
            strong: "强台风(STY)",
            time: "2025-11-11T08:00:00"
          },
          {
            lng: 118,
            lat: 19.9,
            power: 13,
            speed: 38,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-11T20:00:00"
          },
          {
            lng: 119.5,
            lat: 22.7,
            power: 11,
            speed: 30,
            pressure: 980,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T20:00:00"
          },
          {
            lng: 121.3,
            lat: 24.9,
            power: 8,
            speed: 20,
            pressure: 995,
            strong: "热带风暴(TS)",
            time: "2025-11-13T20:00:00"
          }
        ]
      },
      {
        source: "欧洲",
        time: "2025-11-08T20:00:00",
        data: [
          {
            lng: 122.1,
            lat: 15.8,
            power: 16,
            speed: 53,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T20:00:00"
          },
          {
            lng: 118.5,
            lat: 17.6,
            power: 14,
            speed: 43,
            strong: "强台风(STY)",
            time: "2025-11-10T20:00:00"
          },
          {
            lng: 118.1,
            lat: 19.9,
            power: 13,
            speed: 40,
            strong: "台风(TY)",
            time: "2025-11-11T20:00:00"
          },
          {
            lng: 119.1,
            lat: 22.6,
            power: 11,
            speed: 30,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T20:00:00"
          },
          {
            lng: 121.8,
            lat: 24.5,
            power: 8,
            speed: 18,
            strong: "热带风暴(TS)",
            time: "2025-11-13T20:00:00"
          }
        ]
      },
      {
        source: "美国",
        time: "2025-11-08T20:00:00",
        data: [
          {
            lng: 122.1,
            lat: 15.4,
            power: 16,
            speed: 51,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T20:00:00"
          },
          {
            lng: 118.9,
            lat: 17.5,
            power: 11,
            speed: 31,
            strong: "强热带风暴(STS)",
            time: "2025-11-10T20:00:00"
          },
          {
            lng: 118.1,
            lat: 19.8,
            power: 10,
            speed: 26,
            strong: "强热带风暴(STS)",
            time: "2025-11-11T20:00:00"
          },
          {
            lng: 119.4,
            lat: 22.6,
            power: 10,
            speed: 26,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T20:00:00"
          },
          {
            lng: 121.6,
            lat: 24.9,
            power: 9,
            speed: 23,
            strong: "热带风暴(TS)",
            time: "2025-11-13T20:00:00"
          }
        ]
      }
    ],
    move_dir: "西西北",
    move_speed: 33
  },
  {
    lng: 127.5,
    lat: 13.5,
    power: 15,
    speed: 48,
    pressure: 945,
    radius7: 560,
    en7: 520,
    es7: 380,
    wn7: 560,
    ws7: 380,
    radius10: 260,
    en10: 260,
    es10: 250,
    wn10: 260,
    ws10: 200,
    radius12: 100,
    en12: 100,
    es12: 100,
    wn12: 100,
    ws12: 100,
    remark: "",
    strong: "强台风(STY)",
    time: "2025-11-08T23:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-08T23:00:00",
        data: [
          {
            lng: 124.3,
            lat: 14.6,
            power: 17,
            speed: 60,
            pressure: 920,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T11:00:00"
          },
          {
            lng: 121.3,
            lat: 15.9,
            power: 17,
            speed: 58,
            pressure: 925,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T23:00:00"
          },
          {
            lng: 119.1,
            lat: 16.7,
            power: 13,
            speed: 38,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-10T11:00:00"
          },
          {
            lng: 118.3,
            lat: 17.8,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-10T23:00:00"
          },
          {
            lng: 117.9,
            lat: 18.9,
            power: 14,
            speed: 42,
            pressure: 955,
            strong: "强台风(STY)",
            time: "2025-11-11T11:00:00"
          },
          {
            lng: 118,
            lat: 20.3,
            power: 13,
            speed: 38,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-11T23:00:00"
          },
          {
            lng: 120,
            lat: 23.2,
            power: 10,
            speed: 28,
            pressure: 982,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T23:00:00"
          },
          {
            lng: 121.5,
            lat: 25,
            power: 8,
            speed: 20,
            pressure: 995,
            strong: "热带风暴(TS)",
            time: "2025-11-13T23:00:00"
          }
        ]
      },
      {
        source: "日本",
        time: "2025-11-08T23:00:00",
        data: [
          {
            lng: 124.5,
            lat: 14.7,
            power: 14,
            speed: 45,
            pressure: 940,
            strong: "强台风(STY)",
            time: "2025-11-09T11:00:00"
          },
          {
            lng: 121.3,
            lat: 16.1,
            power: 15,
            speed: 50,
            pressure: 935,
            strong: "强台风(STY)",
            time: "2025-11-09T23:00:00"
          },
          {
            lng: 118.4,
            lat: 17.6,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-10T20:00:00"
          },
          {
            lng: 117.4,
            lat: 19.6,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-11T20:00:00"
          },
          {
            lng: 117.7,
            lat: 22.1,
            power: 11,
            speed: 30,
            pressure: 980,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T20:00:00"
          },
          {
            lng: 120.8,
            lat: 23.7,
            power: 9,
            speed: 23,
            pressure: 994,
            strong: "热带风暴(TS)",
            time: "2025-11-13T20:00:00"
          }
        ]
      }
    ],
    move_dir: "西西北",
    move_speed: 31
  },
  {
    lng: 126.4,
    lat: 13.8,
    power: 16,
    speed: 52,
    pressure: 935,
    radius7: 600,
    en7: 600,
    es7: 420,
    wn7: 600,
    ws7: 400,
    radius10: 280,
    en10: 280,
    es10: 250,
    wn10: 280,
    ws10: 240,
    radius12: 120,
    en12: 120,
    es12: 110,
    wn12: 120,
    ws12: 100,
    remark: "",
    strong: "超强台风(Super TY)",
    time: "2025-11-09T02:00:00",
    data: [
      {
        source: "韩国",
        time: "2025-11-09T02:00:00",
        data: [
          {
            lng: 123.5,
            lat: 14.9,
            power: 15,
            speed: 49,
            pressure: 935,
            strong: "强台风(STY)",
            time: "2025-11-09T14:00:00"
          },
          {
            lng: 120.1,
            lat: 16.6,
            power: 14,
            speed: 43,
            pressure: 950,
            strong: "强台风(STY)",
            time: "2025-11-10T02:00:00"
          },
          {
            lng: 118.2,
            lat: 18.2,
            power: 13,
            speed: 39,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-11T02:00:00"
          },
          {
            lng: 117.7,
            lat: 20.4,
            power: 13,
            speed: 37,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-12T02:00:00"
          },
          {
            lng: 118.8,
            lat: 22.6,
            power: 11,
            speed: 29,
            pressure: 980,
            strong: "强热带风暴(STS)",
            time: "2025-11-13T02:00:00"
          },
          {
            lng: 121.2,
            lat: 24.3,
            power: 8,
            speed: 19,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-14T02:00:00"
          }
        ]
      },
      {
        source: "菲律宾",
        time: "2025-11-09T02:00:00",
        data: [
          {
            lng: 120.1,
            lat: 16.5,
            power: 13,
            speed: 39,
            strong: "台风(TY)",
            time: "2025-11-10T02:00:00"
          },
          {
            lng: 117.8,
            lat: 18.5,
            power: 13,
            speed: 41,
            strong: "台风(TY)",
            time: "2025-11-11T02:00:00"
          },
          {
            lng: 117.6,
            lat: 20.5,
            power: 12,
            speed: 36,
            strong: "台风(TY)",
            time: "2025-11-12T02:00:00"
          },
          {
            lng: 118.6,
            lat: 22.6,
            power: 10,
            speed: 26,
            strong: "强热带风暴(STS)",
            time: "2025-11-13T02:00:00"
          },
          {
            lng: 122.3,
            lat: 25.1,
            power: 8,
            speed: 18,
            strong: "热带风暴(TS)",
            time: "2025-11-14T02:00:00"
          }
        ]
      },
      {
        source: "日本",
        time: "2025-11-09T02:00:00",
        data: [
          {
            lng: 123.6,
            lat: 14.8,
            power: 15,
            speed: 50,
            pressure: 935,
            strong: "强台风(STY)",
            time: "2025-11-09T14:00:00"
          },
          {
            lng: 120.2,
            lat: 16.4,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-10T02:00:00"
          },
          {
            lng: 117.9,
            lat: 18.2,
            power: 12,
            speed: 35,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-11T02:00:00"
          },
          {
            lng: 117.3,
            lat: 20.4,
            power: 13,
            speed: 40,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-12T02:00:00"
          },
          {
            lng: 118.5,
            lat: 22.7,
            power: 10,
            speed: 25,
            pressure: 990,
            strong: "强热带风暴(STS)",
            time: "2025-11-13T02:00:00"
          },
          {
            lng: 121.6,
            lat: 24.2,
            power: 8,
            speed: 18,
            pressure: 1e3,
            strong: "热带风暴(TS)",
            time: "2025-11-14T02:00:00"
          }
        ]
      },
      {
        source: "中国",
        time: "2025-11-09T02:00:00",
        data: [
          {
            lng: 123.6,
            lat: 15,
            power: 17,
            speed: 60,
            pressure: 920,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T14:00:00"
          },
          {
            lng: 120.3,
            lat: 16.3,
            power: 13,
            speed: 40,
            pressure: 955,
            strong: "台风(TY)",
            time: "2025-11-10T02:00:00"
          },
          {
            lng: 118.8,
            lat: 17.1,
            power: 13,
            speed: 38,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-10T14:00:00"
          },
          {
            lng: 118.1,
            lat: 18.3,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-11T02:00:00"
          },
          {
            lng: 118,
            lat: 19.5,
            power: 14,
            speed: 42,
            pressure: 955,
            strong: "强台风(STY)",
            time: "2025-11-11T14:00:00"
          },
          {
            lng: 118.1,
            lat: 20.9,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-12T02:00:00"
          },
          {
            lng: 120.6,
            lat: 23.8,
            power: 10,
            speed: 25,
            pressure: 985,
            strong: "强热带风暴(STS)",
            time: "2025-11-13T02:00:00"
          },
          {
            lng: 121.9,
            lat: 25.1,
            power: 8,
            speed: 18,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-14T02:00:00"
          }
        ]
      },
      {
        source: "中国香港",
        time: "2025-11-09T02:00:00",
        data: [
          {
            lng: 120.4,
            lat: 16.3,
            power: 14,
            speed: 43,
            strong: "强台风(STY)",
            time: "2025-11-10T02:00:00"
          },
          {
            lng: 118,
            lat: 18.2,
            power: 13,
            speed: 39,
            strong: "台风(TY)",
            time: "2025-11-11T02:00:00"
          },
          {
            lng: 118.1,
            lat: 20.8,
            power: 12,
            speed: 36,
            strong: "台风(TY)",
            time: "2025-11-12T02:00:00"
          },
          {
            lng: 120.6,
            lat: 23.8,
            power: 11,
            speed: 29,
            strong: "强热带风暴(STS)",
            time: "2025-11-13T02:00:00"
          },
          {
            lng: 125.8,
            lat: 25.8,
            power: 9,
            speed: 21,
            strong: "热带风暴(TS)",
            time: "2025-11-14T02:00:00"
          }
        ]
      },
      {
        source: "欧洲",
        time: "2025-11-09T02:00:00",
        data: [
          {
            lng: 120.3,
            lat: 16.3,
            power: 13,
            speed: 40,
            strong: "台风(TY)",
            time: "2025-11-10T02:00:00"
          },
          {
            lng: 118.1,
            lat: 18.2,
            power: 13,
            speed: 38,
            strong: "台风(TY)",
            time: "2025-11-11T02:00:00"
          },
          {
            lng: 118,
            lat: 20.6,
            power: 13,
            speed: 38,
            strong: "台风(TY)",
            time: "2025-11-12T02:00:00"
          },
          {
            lng: 119.4,
            lat: 23,
            power: 10,
            speed: 28,
            strong: "强热带风暴(STS)",
            time: "2025-11-13T02:00:00"
          },
          {
            lng: 121.9,
            lat: 24.6,
            power: 8,
            speed: 18,
            strong: "热带风暴(TS)",
            time: "2025-11-14T02:00:00"
          }
        ]
      },
      {
        source: "美国",
        time: "2025-11-09T02:00:00",
        data: [
          {
            lng: 120.8,
            lat: 16.3,
            power: 13,
            speed: 41,
            strong: "台风(TY)",
            time: "2025-11-10T02:00:00"
          },
          {
            lng: 118.2,
            lat: 18.5,
            power: 11,
            speed: 31,
            strong: "强热带风暴(STS)",
            time: "2025-11-11T02:00:00"
          },
          {
            lng: 118.2,
            lat: 20.7,
            power: 10,
            speed: 26,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T02:00:00"
          },
          {
            lng: 120.7,
            lat: 23.7,
            power: 9,
            speed: 21,
            strong: "热带风暴(TS)",
            time: "2025-11-13T02:00:00"
          },
          {
            lng: 123.5,
            lat: 25.6,
            power: 7,
            speed: 15,
            strong: "热带低压(TD)",
            time: "2025-11-14T02:00:00"
          }
        ]
      }
    ],
    move_dir: "西西北",
    move_speed: 28
  },
  {
    lng: 125.8,
    lat: 13.9,
    power: 16,
    speed: 52,
    pressure: 935,
    radius7: 600,
    en7: 600,
    es7: 420,
    wn7: 600,
    ws7: 400,
    radius10: 280,
    en10: 280,
    es10: 250,
    wn10: 280,
    ws10: 240,
    radius12: 120,
    en12: 120,
    es12: 110,
    wn12: 120,
    ws12: 100,
    remark: "",
    strong: "超强台风(Super TY)",
    time: "2025-11-09T05:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-09T05:00:00",
        data: [
          {
            lng: 122.7,
            lat: 15.2,
            power: 17,
            speed: 60,
            pressure: 920,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T17:00:00"
          },
          {
            lng: 120.2,
            lat: 16.3,
            power: 13,
            speed: 38,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-10T05:00:00"
          },
          {
            lng: 118.7,
            lat: 17.4,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-10T17:00:00"
          },
          {
            lng: 118.3,
            lat: 18.2,
            power: 14,
            speed: 42,
            pressure: 955,
            strong: "强台风(STY)",
            time: "2025-11-11T05:00:00"
          },
          {
            lng: 118.3,
            lat: 19.9,
            power: 13,
            speed: 38,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-11T17:00:00"
          },
          {
            lng: 118.9,
            lat: 21.6,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-12T05:00:00"
          },
          {
            lng: 121.1,
            lat: 23.1,
            power: 9,
            speed: 23,
            pressure: 990,
            strong: "热带风暴(TS)",
            time: "2025-11-13T05:00:00"
          },
          {
            lng: 123.1,
            lat: 25.1,
            power: 8,
            speed: 18,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-14T05:00:00"
          }
        ]
      },
      {
        source: "日本",
        time: "2025-11-09T05:00:00",
        data: [
          {
            lng: 122.9,
            lat: 15.4,
            power: 15,
            speed: 50,
            pressure: 935,
            strong: "强台风(STY)",
            time: "2025-11-09T17:00:00"
          },
          {
            lng: 119.8,
            lat: 16.6,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-10T05:00:00"
          },
          {
            lng: 117.9,
            lat: 18.2,
            power: 12,
            speed: 35,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-11T02:00:00"
          },
          {
            lng: 117.3,
            lat: 20.4,
            power: 13,
            speed: 40,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-12T02:00:00"
          },
          {
            lng: 118.5,
            lat: 22.7,
            power: 10,
            speed: 25,
            pressure: 990,
            strong: "强热带风暴(STS)",
            time: "2025-11-13T02:00:00"
          },
          {
            lng: 121.6,
            lat: 24.2,
            power: 8,
            speed: 18,
            pressure: 1e3,
            strong: "热带风暴(TS)",
            time: "2025-11-14T02:00:00"
          }
        ]
      }
    ],
    move_dir: "西西北",
    move_speed: 30
  },
  {
    lng: 125,
    lat: 14.3,
    power: 16,
    speed: 52,
    pressure: 935,
    radius7: 520,
    en7: 420,
    es7: 420,
    wn7: 520,
    ws7: 380,
    radius10: 280,
    en10: 260,
    es10: 220,
    wn10: 280,
    ws10: 220,
    radius12: 120,
    en12: 120,
    es12: 110,
    wn12: 120,
    ws12: 100,
    remark: "",
    strong: "超强台风(Super TY)",
    time: "2025-11-09T08:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-09T08:00:00",
        data: [
          {
            lng: 122.2,
            lat: 15.4,
            power: 16,
            speed: 55,
            pressure: 930,
            strong: "超强台风(Super TY)",
            time: "2025-11-09T20:00:00"
          },
          {
            lng: 119.4,
            lat: 16.6,
            power: 13,
            speed: 38,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-10T08:00:00"
          },
          {
            lng: 118.7,
            lat: 17.5,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-10T20:00:00"
          },
          {
            lng: 118,
            lat: 18.7,
            power: 14,
            speed: 42,
            pressure: 955,
            strong: "强台风(STY)",
            time: "2025-11-11T08:00:00"
          },
          {
            lng: 118.3,
            lat: 20.1,
            power: 13,
            speed: 38,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-11T20:00:00"
          },
          {
            lng: 118.9,
            lat: 21.6,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-12T08:00:00"
          },
          {
            lng: 122.7,
            lat: 24.3,
            power: 8,
            speed: 18,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T08:00:00"
          },
          {
            lng: 127,
            lat: 25.5,
            power: 7,
            speed: 15,
            pressure: 1e3,
            strong: "热带低压(TD)",
            time: "2025-11-14T08:00:00"
          }
        ]
      },
      {
        source: "菲律宾",
        time: "2025-11-09T08:00:00",
        data: [
          {
            lng: 119.3,
            lat: 16.7,
            power: 13,
            speed: 39,
            strong: "台风(TY)",
            time: "2025-11-10T08:00:00"
          },
          {
            lng: 117.9,
            lat: 18.8,
            power: 13,
            speed: 41,
            strong: "台风(TY)",
            time: "2025-11-11T08:00:00"
          },
          {
            lng: 118.2,
            lat: 21.2,
            power: 11,
            speed: 31,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T08:00:00"
          },
          {
            lng: 121,
            lat: 24.1,
            power: 9,
            speed: 21,
            strong: "热带风暴(TS)",
            time: "2025-11-13T08:00:00"
          }
        ]
      },
      {
        source: "韩国",
        time: "2025-11-09T08:00:00",
        data: [
          {
            lng: 121.7,
            lat: 15.8,
            power: 14,
            speed: 45,
            pressure: 945,
            strong: "强台风(STY)",
            time: "2025-11-09T20:00:00"
          },
          {
            lng: 119.4,
            lat: 16.9,
            power: 13,
            speed: 40,
            pressure: 955,
            strong: "台风(TY)",
            time: "2025-11-10T08:00:00"
          },
          {
            lng: 117.9,
            lat: 18.8,
            power: 13,
            speed: 37,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-11T08:00:00"
          },
          {
            lng: 117.9,
            lat: 21.3,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-12T08:00:00"
          },
          {
            lng: 120.4,
            lat: 23.8,
            power: 11,
            speed: 29,
            pressure: 980,
            strong: "强热带风暴(STS)",
            time: "2025-11-13T08:00:00"
          },
          {
            lng: 123.6,
            lat: 24.3,
            power: 7,
            speed: 15,
            pressure: 1e3,
            strong: "热带低压(TD)",
            time: "2025-11-14T08:00:00"
          }
        ]
      },
      {
        source: "美国",
        time: "2025-11-09T08:00:00",
        data: [
          {
            lng: 119.5,
            lat: 16.7,
            power: 13,
            speed: 39,
            strong: "台风(TY)",
            time: "2025-11-10T08:00:00"
          },
          {
            lng: 117.8,
            lat: 18.7,
            power: 11,
            speed: 31,
            strong: "强热带风暴(STS)",
            time: "2025-11-11T08:00:00"
          },
          {
            lng: 118.3,
            lat: 21.3,
            power: 10,
            speed: 26,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T08:00:00"
          },
          {
            lng: 120.7,
            lat: 24,
            power: 9,
            speed: 21,
            strong: "热带风暴(TS)",
            time: "2025-11-13T08:00:00"
          },
          {
            lng: 125.6,
            lat: 25.6,
            power: 7,
            speed: 15,
            strong: "热带低压(TD)",
            time: "2025-11-14T08:00:00"
          }
        ]
      },
      {
        source: "南海所",
        time: "2025-11-09T08:00:00",
        data: [
          {
            lng: 123.4,
            lat: 14.9,
            power: 13,
            speed: 41,
            pressure: 951,
            strong: "台风(TY)",
            time: "2025-11-09T14:00:00"
          },
          {
            lng: 121.6,
            lat: 15.5,
            power: 13,
            speed: 39,
            pressure: 957,
            strong: "台风(TY)",
            time: "2025-11-09T20:00:00"
          },
          {
            lng: 120.1,
            lat: 15.9,
            power: 12,
            speed: 34,
            pressure: 964,
            strong: "台风(TY)",
            time: "2025-11-10T02:00:00"
          },
          {
            lng: 119.4,
            lat: 16.6,
            power: 11,
            speed: 32,
            pressure: 966,
            strong: "强热带风暴(STS)",
            time: "2025-11-10T08:00:00"
          },
          {
            lng: 118.5,
            lat: 16.8,
            power: 12,
            speed: 35,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-10T14:00:00"
          },
          {
            lng: 118.2,
            lat: 17.3,
            power: 13,
            speed: 38,
            pressure: 966,
            strong: "台风(TY)",
            time: "2025-11-10T20:00:00"
          },
          {
            lng: 117.8,
            lat: 17.9,
            power: 12,
            speed: 35,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-11T02:00:00"
          },
          {
            lng: 117.7,
            lat: 18.4,
            power: 12,
            speed: 35,
            pressure: 968,
            strong: "台风(TY)",
            time: "2025-11-11T08:00:00"
          },
          {
            lng: 117.2,
            lat: 19.1,
            power: 13,
            speed: 38,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-11T14:00:00"
          },
          {
            lng: 117.4,
            lat: 20,
            power: 11,
            speed: 32,
            pressure: 974,
            strong: "强热带风暴(STS)",
            time: "2025-11-11T20:00:00"
          },
          {
            lng: 117.5,
            lat: 20.9,
            power: 11,
            speed: 31,
            pressure: 975,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T02:00:00"
          },
          {
            lng: 117.5,
            lat: 22.1,
            power: 11,
            speed: 30,
            pressure: 979,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T08:00:00"
          },
          {
            lng: 117.3,
            lat: 22.6,
            power: 10,
            speed: 28,
            pressure: 986,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T14:00:00"
          },
          {
            lng: 118.3,
            lat: 23,
            power: 9,
            speed: 22,
            pressure: 994,
            strong: "热带风暴(TS)",
            time: "2025-11-12T20:00:00"
          },
          {
            lng: 118.7,
            lat: 23.7,
            power: 9,
            speed: 21,
            pressure: 997,
            strong: "热带风暴(TS)",
            time: "2025-11-13T02:00:00"
          },
          {
            lng: 119.6,
            lat: 24.5,
            power: 8,
            speed: 19,
            pressure: 1002,
            strong: "热带风暴(TS)",
            time: "2025-11-13T08:00:00"
          },
          {
            lng: 120.6,
            lat: 23.8,
            power: 7,
            speed: 17,
            pressure: 1e3,
            strong: "热带低压(TD)",
            time: "2025-11-13T14:00:00"
          },
          {
            lng: 121,
            lat: 22.8,
            power: 7,
            speed: 17,
            pressure: 1002,
            strong: "热带低压(TD)",
            time: "2025-11-13T20:00:00"
          }
        ]
      },
      {
        source: "日本",
        time: "2025-11-09T08:00:00",
        data: [
          {
            lng: 121.9,
            lat: 15.9,
            power: 15,
            speed: 50,
            pressure: 935,
            strong: "强台风(STY)",
            time: "2025-11-09T20:00:00"
          },
          {
            lng: 119.2,
            lat: 16.7,
            power: 13,
            speed: 40,
            pressure: 950,
            strong: "台风(TY)",
            time: "2025-11-10T08:00:00"
          },
          {
            lng: 117.9,
            lat: 18.9,
            power: 13,
            speed: 40,
            pressure: 950,
            strong: "台风(TY)",
            time: "2025-11-11T08:00:00"
          },
          {
            lng: 118,
            lat: 21.3,
            power: 12,
            speed: 35,
            pressure: 975,
            strong: "台风(TY)",
            time: "2025-11-12T08:00:00"
          },
          {
            lng: 120.8,
            lat: 24.1,
            power: 9,
            speed: 23,
            pressure: 992,
            strong: "热带风暴(TS)",
            time: "2025-11-13T08:00:00"
          },
          {
            lng: 124.8,
            lat: 24.4,
            power: 8,
            speed: 18,
            pressure: 1e3,
            strong: "热带风暴(TS)",
            time: "2025-11-14T08:00:00"
          }
        ]
      },
      {
        source: "中国香港",
        time: "2025-11-09T08:00:00",
        data: [
          {
            lng: 119.2,
            lat: 16.5,
            power: 14,
            speed: 43,
            strong: "强台风(STY)",
            time: "2025-11-10T08:00:00"
          },
          {
            lng: 117.8,
            lat: 18.9,
            power: 13,
            speed: 40,
            strong: "台风(TY)",
            time: "2025-11-11T08:00:00"
          },
          {
            lng: 118.4,
            lat: 21.6,
            power: 12,
            speed: 36,
            strong: "台风(TY)",
            time: "2025-11-12T08:00:00"
          },
          {
            lng: 122.1,
            lat: 24.9,
            power: 9,
            speed: 24,
            strong: "热带风暴(TS)",
            time: "2025-11-13T08:00:00"
          },
          {
            lng: 127.7,
            lat: 25.6,
            power: 8,
            speed: 18,
            strong: "热带风暴(TS)",
            time: "2025-11-14T08:00:00"
          }
        ]
      },
      {
        source: "欧洲",
        time: "2025-11-09T08:00:00",
        data: [
          {
            lng: 119,
            lat: 16.9,
            power: 13,
            speed: 40,
            strong: "台风(TY)",
            time: "2025-11-10T08:00:00"
          },
          {
            lng: 117.7,
            lat: 18.9,
            power: 13,
            speed: 38,
            strong: "台风(TY)",
            time: "2025-11-11T08:00:00"
          },
          {
            lng: 118.2,
            lat: 21.5,
            power: 12,
            speed: 33,
            strong: "台风(TY)",
            time: "2025-11-12T08:00:00"
          },
          {
            lng: 122.2,
            lat: 24.9,
            power: 7,
            speed: 15,
            strong: "热带低压(TD)",
            time: "2025-11-13T08:00:00"
          }
        ]
      }
    ],
    move_dir: "西西北",
    move_speed: 28
  },
  {
    lng: 124.1,
    lat: 14.5,
    power: 16,
    speed: 52,
    pressure: 935,
    radius7: 520,
    en7: 420,
    es7: 420,
    wn7: 520,
    ws7: 380,
    radius10: 280,
    en10: 260,
    es10: 220,
    wn10: 280,
    ws10: 220,
    radius12: 120,
    en12: 120,
    es12: 110,
    wn12: 120,
    ws12: 100,
    remark: "",
    strong: "超强台风(Super TY)",
    time: "2025-11-09T11:00:00",
    data: [
      {
        source: "中国香港",
        time: "2025-11-09T11:00:00",
        data: [
          {
            lng: 118.8,
            lat: 16.8,
            power: 14,
            speed: 43,
            strong: "强台风(STY)",
            time: "2025-11-10T11:00:00"
          },
          {
            lng: 117.8,
            lat: 19.3,
            power: 13,
            speed: 40,
            strong: "台风(TY)",
            time: "2025-11-11T11:00:00"
          },
          {
            lng: 118.6,
            lat: 21.9,
            power: 12,
            speed: 36,
            strong: "台风(TY)",
            time: "2025-11-12T11:00:00"
          },
          {
            lng: 122.8,
            lat: 25.3,
            power: 9,
            speed: 21,
            strong: "热带风暴(TS)",
            time: "2025-11-13T11:00:00"
          },
          {
            lng: 128.9,
            lat: 25.7,
            power: 7,
            speed: 15,
            strong: "热带低压(TD)",
            time: "2025-11-14T11:00:00"
          }
        ]
      },
      {
        source: "中国",
        time: "2025-11-09T11:00:00",
        data: [
          {
            lng: 121.1,
            lat: 16,
            power: 15,
            speed: 48,
            pressure: 945,
            strong: "强台风(STY)",
            time: "2025-11-09T23:00:00"
          },
          {
            lng: 118.9,
            lat: 17,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-10T11:00:00"
          },
          {
            lng: 118.2,
            lat: 18.1,
            power: 14,
            speed: 42,
            pressure: 955,
            strong: "强台风(STY)",
            time: "2025-11-10T23:00:00"
          },
          {
            lng: 118.1,
            lat: 19.1,
            power: 13,
            speed: 38,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-11T11:00:00"
          },
          {
            lng: 118.2,
            lat: 20.5,
            power: 12,
            speed: 33,
            pressure: 975,
            strong: "台风(TY)",
            time: "2025-11-11T23:00:00"
          },
          {
            lng: 118.8,
            lat: 21.8,
            power: 10,
            speed: 28,
            pressure: 982,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T11:00:00"
          },
          {
            lng: 123.3,
            lat: 24.6,
            power: 8,
            speed: 18,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T11:00:00"
          },
          {
            lng: 127.6,
            lat: 25.1,
            power: 7,
            speed: 15,
            pressure: 1e3,
            strong: "热带低压(TD)",
            time: "2025-11-14T11:00:00"
          }
        ]
      },
      {
        source: "日本",
        time: "2025-11-09T11:00:00",
        data: [
          {
            lng: 120.9,
            lat: 16.1,
            power: 13,
            speed: 40,
            pressure: 955,
            strong: "台风(TY)",
            time: "2025-11-09T23:00:00"
          },
          {
            lng: 118.9,
            lat: 16.8,
            power: 12,
            speed: 35,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-10T11:00:00"
          },
          {
            lng: 117.9,
            lat: 18.9,
            power: 13,
            speed: 40,
            pressure: 950,
            strong: "台风(TY)",
            time: "2025-11-11T08:00:00"
          },
          {
            lng: 118,
            lat: 21.3,
            power: 12,
            speed: 35,
            pressure: 975,
            strong: "台风(TY)",
            time: "2025-11-12T08:00:00"
          },
          {
            lng: 120.8,
            lat: 24.1,
            power: 9,
            speed: 23,
            pressure: 992,
            strong: "热带风暴(TS)",
            time: "2025-11-13T08:00:00"
          },
          {
            lng: 124.8,
            lat: 24.4,
            power: 8,
            speed: 18,
            pressure: 1e3,
            strong: "热带风暴(TS)",
            time: "2025-11-14T08:00:00"
          }
        ]
      }
    ],
    move_dir: "西西北",
    move_speed: 31
  },
  {
    lng: 123.5,
    lat: 14.9,
    power: 16,
    speed: 52,
    pressure: 935,
    radius7: 520,
    en7: 420,
    es7: 420,
    wn7: 520,
    ws7: 380,
    radius10: 280,
    en10: 260,
    es10: 220,
    wn10: 280,
    ws10: 220,
    radius12: 120,
    en12: 120,
    es12: 110,
    wn12: 120,
    ws12: 100,
    remark: "",
    strong: "超强台风(Super TY)",
    time: "2025-11-09T14:00:00",
    data: [
      {
        source: "中国香港",
        time: "2025-11-09T14:00:00",
        data: [
          {
            lng: 118.6,
            lat: 17.2,
            power: 14,
            speed: 43,
            strong: "强台风(STY)",
            time: "2025-11-10T14:00:00"
          },
          {
            lng: 118,
            lat: 19.8,
            power: 13,
            speed: 40,
            strong: "台风(TY)",
            time: "2025-11-11T14:00:00"
          },
          {
            lng: 119.6,
            lat: 22.5,
            power: 12,
            speed: 36,
            strong: "台风(TY)",
            time: "2025-11-12T14:00:00"
          },
          {
            lng: 124.4,
            lat: 26,
            power: 9,
            speed: 21,
            strong: "热带风暴(TS)",
            time: "2025-11-13T14:00:00"
          },
          {
            lng: 130.1,
            lat: 25.8,
            power: 7,
            speed: 15,
            strong: "热带低压(TD)",
            time: "2025-11-14T14:00:00"
          }
        ]
      },
      {
        source: "欧洲",
        time: "2025-11-09T14:00:00",
        data: [
          {
            lng: 118.4,
            lat: 17.5,
            power: 13,
            speed: 40,
            strong: "台风(TY)",
            time: "2025-11-10T14:00:00"
          },
          {
            lng: 117.9,
            lat: 20,
            power: 13,
            speed: 38,
            strong: "台风(TY)",
            time: "2025-11-11T14:00:00"
          },
          {
            lng: 119.3,
            lat: 22.3,
            power: 11,
            speed: 30,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T14:00:00"
          },
          {
            lng: 123.8,
            lat: 25.5,
            power: 7,
            speed: 15,
            strong: "热带低压(TD)",
            time: "2025-11-13T14:00:00"
          }
        ]
      },
      {
        source: "中国",
        time: "2025-11-09T14:00:00",
        data: [
          {
            lng: 120.1,
            lat: 16.4,
            power: 13,
            speed: 38,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-10T02:00:00"
          },
          {
            lng: 118.7,
            lat: 17.1,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-10T14:00:00"
          },
          {
            lng: 118,
            lat: 18.5,
            power: 14,
            speed: 42,
            pressure: 955,
            strong: "强台风(STY)",
            time: "2025-11-11T02:00:00"
          },
          {
            lng: 118,
            lat: 19.8,
            power: 14,
            speed: 42,
            pressure: 955,
            strong: "强台风(STY)",
            time: "2025-11-11T14:00:00"
          },
          {
            lng: 118.4,
            lat: 21.3,
            power: 13,
            speed: 38,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-12T02:00:00"
          },
          {
            lng: 119.5,
            lat: 22.5,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-12T14:00:00"
          },
          {
            lng: 124.5,
            lat: 25.4,
            power: 7,
            speed: 15,
            pressure: 1e3,
            strong: "热带低压(TD)",
            time: "2025-11-13T14:00:00"
          }
        ]
      },
      {
        source: "美国",
        time: "2025-11-09T14:00:00",
        data: [
          {
            lng: 118.9,
            lat: 17.4,
            power: 13,
            speed: 41,
            strong: "台风(TY)",
            time: "2025-11-10T14:00:00"
          },
          {
            lng: 117.8,
            lat: 19.6,
            power: 12,
            speed: 36,
            strong: "台风(TY)",
            time: "2025-11-11T14:00:00"
          },
          {
            lng: 118.7,
            lat: 22.5,
            power: 10,
            speed: 26,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T14:00:00"
          },
          {
            lng: 122.1,
            lat: 25,
            power: 9,
            speed: 21,
            strong: "热带风暴(TS)",
            time: "2025-11-13T14:00:00"
          },
          {
            lng: 126,
            lat: 25.9,
            power: 7,
            speed: 15,
            strong: "热带低压(TD)",
            time: "2025-11-14T14:00:00"
          }
        ]
      },
      {
        source: "菲律宾",
        time: "2025-11-09T14:00:00",
        data: [
          {
            lng: 118.8,
            lat: 17,
            power: 12,
            speed: 36,
            strong: "台风(TY)",
            time: "2025-11-10T14:00:00"
          },
          {
            lng: 118.1,
            lat: 19.4,
            power: 13,
            speed: 39,
            strong: "台风(TY)",
            time: "2025-11-11T14:00:00"
          },
          {
            lng: 118.6,
            lat: 21.9,
            power: 10,
            speed: 28,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T14:00:00"
          },
          {
            lng: 122,
            lat: 24,
            power: 8,
            speed: 18,
            strong: "热带风暴(TS)",
            time: "2025-11-13T14:00:00"
          }
        ]
      },
      {
        source: "韩国",
        time: "2025-11-09T14:00:00",
        data: [
          {
            lng: 120.4,
            lat: 16.4,
            power: 13,
            speed: 40,
            pressure: 955,
            strong: "台风(TY)",
            time: "2025-11-10T02:00:00"
          },
          {
            lng: 118.9,
            lat: 17.2,
            power: 13,
            speed: 39,
            strong: "台风(TY)",
            time: "2025-11-10T14:00:00"
          },
          {
            lng: 117.8,
            lat: 19.3,
            power: 12,
            speed: 35,
            strong: "台风(TY)",
            time: "2025-11-11T14:00:00"
          },
          {
            lng: 118.3,
            lat: 22,
            power: 11,
            speed: 32,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T14:00:00"
          },
          {
            lng: 123.2,
            lat: 24.6,
            power: 7,
            speed: 15,
            strong: "热带低压(TD)",
            time: "2025-11-13T14:00:00"
          }
        ]
      },
      {
        source: "日本",
        time: "2025-11-09T14:00:00",
        data: [
          {
            lng: 120.1,
            lat: 16.2,
            power: 13,
            speed: 40,
            pressure: 950,
            strong: "台风(TY)",
            time: "2025-11-10T02:00:00"
          },
          {
            lng: 118.7,
            lat: 17.1,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-10T14:00:00"
          },
          {
            lng: 117.8,
            lat: 19.5,
            power: 13,
            speed: 40,
            pressure: 955,
            strong: "台风(TY)",
            time: "2025-11-11T14:00:00"
          },
          {
            lng: 118.2,
            lat: 22.1,
            power: 11,
            speed: 30,
            pressure: 980,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T14:00:00"
          },
          {
            lng: 122.3,
            lat: 24.9,
            power: 8,
            speed: 20,
            pressure: 1e3,
            strong: "热带风暴(TS)",
            time: "2025-11-13T14:00:00"
          }
        ]
      }
    ],
    move_dir: "西西北",
    move_speed: 34
  },
  {
    lng: 122.9,
    lat: 15.2,
    power: 16,
    speed: 52,
    pressure: 935,
    radius7: 520,
    en7: 420,
    es7: 420,
    wn7: 520,
    ws7: 380,
    radius10: 280,
    en10: 260,
    es10: 220,
    wn10: 280,
    ws10: 220,
    radius12: 120,
    en12: 120,
    es12: 110,
    wn12: 120,
    ws12: 100,
    remark: "",
    strong: "超强台风(Super TY)",
    time: "2025-11-09T17:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-09T17:00:00",
        data: [
          {
            lng: 119.6,
            lat: 16.5,
            power: 13,
            speed: 38,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-10T05:00:00"
          },
          {
            lng: 118.5,
            lat: 17.5,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-10T17:00:00"
          },
          {
            lng: 118,
            lat: 18.7,
            power: 14,
            speed: 42,
            pressure: 955,
            strong: "强台风(STY)",
            time: "2025-11-11T05:00:00"
          },
          {
            lng: 118.1,
            lat: 20.2,
            power: 14,
            speed: 42,
            pressure: 955,
            strong: "强台风(STY)",
            time: "2025-11-11T17:00:00"
          },
          {
            lng: 118.7,
            lat: 21.7,
            power: 13,
            speed: 38,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-12T05:00:00"
          },
          {
            lng: 119.9,
            lat: 22.9,
            power: 12,
            speed: 33,
            pressure: 975,
            strong: "台风(TY)",
            time: "2025-11-12T17:00:00"
          },
          {
            lng: 125,
            lat: 25.7,
            power: 7,
            speed: 15,
            pressure: 1e3,
            strong: "热带低压(TD)",
            time: "2025-11-13T17:00:00"
          }
        ]
      },
      {
        source: "日本",
        time: "2025-11-09T17:00:00",
        data: [
          {
            lng: 119.6,
            lat: 16.5,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-10T05:00:00"
          },
          {
            lng: 118.4,
            lat: 17.4,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-10T17:00:00"
          },
          {
            lng: 117.8,
            lat: 19.5,
            power: 13,
            speed: 40,
            pressure: 955,
            strong: "台风(TY)",
            time: "2025-11-11T14:00:00"
          },
          {
            lng: 118.2,
            lat: 22.1,
            power: 11,
            speed: 30,
            pressure: 980,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T14:00:00"
          },
          {
            lng: 122.3,
            lat: 24.9,
            power: 8,
            speed: 20,
            pressure: 1e3,
            strong: "热带风暴(TS)",
            time: "2025-11-13T14:00:00"
          }
        ]
      },
      {
        source: "中国香港",
        time: "2025-11-09T17:00:00",
        data: [
          {
            lng: 118.4,
            lat: 17.5,
            power: 13,
            speed: 40,
            strong: "台风(TY)",
            time: "2025-11-10T17:00:00"
          },
          {
            lng: 118.1,
            lat: 20.2,
            power: 13,
            speed: 40,
            strong: "台风(TY)",
            time: "2025-11-11T17:00:00"
          },
          {
            lng: 120.2,
            lat: 23,
            power: 12,
            speed: 36,
            strong: "台风(TY)",
            time: "2025-11-12T17:00:00"
          },
          {
            lng: 125.1,
            lat: 26.1,
            power: 9,
            speed: 21,
            strong: "热带风暴(TS)",
            time: "2025-11-13T17:00:00"
          },
          {
            lng: 130.7,
            lat: 25.8,
            power: 7,
            speed: 15,
            strong: "热带低压(TD)",
            time: "2025-11-14T17:00:00"
          }
        ]
      }
    ],
    move_dir: "西西北",
    move_speed: 32
  },
  {
    lng: 122.1,
    lat: 15.7,
    power: 15,
    speed: 50,
    pressure: 940,
    radius7: 520,
    en7: 420,
    es7: 420,
    wn7: 520,
    ws7: 380,
    radius10: 280,
    en10: 260,
    es10: 220,
    wn10: 280,
    ws10: 220,
    radius12: 120,
    en12: 120,
    es12: 110,
    wn12: 120,
    ws12: 100,
    remark: "",
    strong: "强台风(STY)",
    time: "2025-11-09T20:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-09T20:00:00",
        data: [
          {
            lng: 119.2,
            lat: 16.7,
            power: 13,
            speed: 38,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-10T08:00:00"
          },
          {
            lng: 118.3,
            lat: 17.7,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-10T20:00:00"
          },
          {
            lng: 117.9,
            lat: 18.9,
            power: 14,
            speed: 42,
            pressure: 955,
            strong: "强台风(STY)",
            time: "2025-11-11T08:00:00"
          },
          {
            lng: 118.1,
            lat: 20.4,
            power: 14,
            speed: 42,
            pressure: 955,
            strong: "强台风(STY)",
            time: "2025-11-11T20:00:00"
          },
          {
            lng: 118.6,
            lat: 21.7,
            power: 13,
            speed: 38,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-12T08:00:00"
          },
          {
            lng: 120.1,
            lat: 23,
            power: 12,
            speed: 33,
            pressure: 975,
            strong: "台风(TY)",
            time: "2025-11-12T20:00:00"
          },
          {
            lng: 125,
            lat: 25.4,
            power: 7,
            speed: 15,
            pressure: 1e3,
            strong: "热带低压(TD)",
            time: "2025-11-13T20:00:00"
          }
        ]
      },
      {
        source: "欧洲",
        time: "2025-11-09T20:00:00",
        data: [
          {
            lng: 118.1,
            lat: 17.9,
            power: 13,
            speed: 40,
            strong: "台风(TY)",
            time: "2025-11-10T20:00:00"
          },
          {
            lng: 118.1,
            lat: 20.6,
            power: 12,
            speed: 35,
            strong: "台风(TY)",
            time: "2025-11-11T20:00:00"
          },
          {
            lng: 119.9,
            lat: 23.2,
            power: 10,
            speed: 25,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T20:00:00"
          }
        ]
      },
      {
        source: "菲律宾",
        time: "2025-11-09T20:00:00",
        data: [
          {
            lng: 118.6,
            lat: 18,
            power: 13,
            speed: 39,
            strong: "台风(TY)",
            time: "2025-11-10T20:00:00"
          },
          {
            lng: 118.1,
            lat: 20.1,
            power: 12,
            speed: 36,
            strong: "台风(TY)",
            time: "2025-11-11T20:00:00"
          },
          {
            lng: 119.3,
            lat: 22.5,
            power: 10,
            speed: 28,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T20:00:00"
          },
          {
            lng: 122.3,
            lat: 24.3,
            power: 8,
            speed: 18,
            strong: "热带风暴(TS)",
            time: "2025-11-13T20:00:00"
          }
        ]
      },
      {
        source: "南海所",
        time: "2025-11-09T20:00:00",
        data: [
          {
            lng: 119.9,
            lat: 16.1,
            power: 12,
            speed: 34,
            pressure: 966,
            strong: "台风(TY)",
            time: "2025-11-10T02:00:00"
          },
          {
            lng: 119.3,
            lat: 16.3,
            power: 11,
            speed: 31,
            pressure: 969,
            strong: "强热带风暴(STS)",
            time: "2025-11-10T08:00:00"
          },
          {
            lng: 118.8,
            lat: 16.9,
            power: 12,
            speed: 34,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-10T14:00:00"
          },
          {
            lng: 118.4,
            lat: 17.6,
            power: 13,
            speed: 37,
            pressure: 963,
            strong: "台风(TY)",
            time: "2025-11-10T20:00:00"
          },
          {
            lng: 117.7,
            lat: 18.3,
            power: 12,
            speed: 36,
            pressure: 963,
            strong: "台风(TY)",
            time: "2025-11-11T02:00:00"
          },
          {
            lng: 117.8,
            lat: 18.9,
            power: 12,
            speed: 36,
            pressure: 968,
            strong: "台风(TY)",
            time: "2025-11-11T08:00:00"
          },
          {
            lng: 117.8,
            lat: 19.6,
            power: 12,
            speed: 33,
            pressure: 969,
            strong: "台风(TY)",
            time: "2025-11-11T14:00:00"
          },
          {
            lng: 118.1,
            lat: 20.2,
            power: 11,
            speed: 31,
            pressure: 973,
            strong: "强热带风暴(STS)",
            time: "2025-11-11T20:00:00"
          },
          {
            lng: 117.8,
            lat: 21.4,
            power: 12,
            speed: 36,
            pressure: 973,
            strong: "台风(TY)",
            time: "2025-11-12T02:00:00"
          },
          {
            lng: 118.3,
            lat: 22.5,
            power: 10,
            speed: 28,
            pressure: 981,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T08:00:00"
          },
          {
            lng: 119.1,
            lat: 23.7,
            power: 10,
            speed: 25,
            pressure: 985,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T14:00:00"
          },
          {
            lng: 119.7,
            lat: 24.5,
            power: 9,
            speed: 24,
            pressure: 992,
            strong: "热带风暴(TS)",
            time: "2025-11-12T20:00:00"
          },
          {
            lng: 121,
            lat: 24.9,
            power: 9,
            speed: 23,
            pressure: 995,
            strong: "热带风暴(TS)",
            time: "2025-11-13T02:00:00"
          },
          {
            lng: 121.1,
            lat: 23.1,
            power: 8,
            speed: 18,
            pressure: 1001,
            strong: "热带风暴(TS)",
            time: "2025-11-13T08:00:00"
          }
        ]
      },
      {
        source: "美国",
        time: "2025-11-09T20:00:00",
        data: [
          {
            lng: 118.4,
            lat: 18.3,
            power: 13,
            speed: 39,
            strong: "台风(TY)",
            time: "2025-11-10T20:00:00"
          },
          {
            lng: 117.8,
            lat: 20.8,
            power: 12,
            speed: 33,
            strong: "台风(TY)",
            time: "2025-11-11T20:00:00"
          },
          {
            lng: 119.6,
            lat: 23.6,
            power: 10,
            speed: 26,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T20:00:00"
          },
          {
            lng: 123.4,
            lat: 25.9,
            power: 9,
            speed: 21,
            strong: "热带风暴(TS)",
            time: "2025-11-13T20:00:00"
          },
          {
            lng: 127,
            lat: 26.3,
            power: 6,
            speed: 13,
            strong: "热带低压(TD)",
            time: "2025-11-14T20:00:00"
          }
        ]
      },
      {
        source: "韩国",
        time: "2025-11-09T20:00:00",
        data: [
          {
            lng: 119.4,
            lat: 16.9,
            power: 13,
            speed: 40,
            pressure: 955,
            strong: "台风(TY)",
            time: "2025-11-10T08:00:00"
          },
          {
            lng: 118.4,
            lat: 17.8,
            power: 13,
            speed: 39,
            strong: "台风(TY)",
            time: "2025-11-10T20:00:00"
          },
          {
            lng: 117.9,
            lat: 20.4,
            power: 13,
            speed: 37,
            strong: "台风(TY)",
            time: "2025-11-11T20:00:00"
          },
          {
            lng: 119.4,
            lat: 22.8,
            power: 11,
            speed: 32,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T20:00:00"
          },
          {
            lng: 124.4,
            lat: 24.9,
            power: 7,
            speed: 15,
            strong: "热带低压(TD)",
            time: "2025-11-13T20:00:00"
          }
        ]
      },
      {
        source: "日本",
        time: "2025-11-09T20:00:00",
        data: [
          {
            lng: 119.2,
            lat: 16.7,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-10T08:00:00"
          },
          {
            lng: 118.3,
            lat: 17.8,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-10T20:00:00"
          },
          {
            lng: 117.6,
            lat: 20.2,
            power: 14,
            speed: 45,
            pressure: 950,
            strong: "强台风(STY)",
            time: "2025-11-11T20:00:00"
          },
          {
            lng: 118.9,
            lat: 22.8,
            power: 12,
            speed: 35,
            pressure: 975,
            strong: "台风(TY)",
            time: "2025-11-12T20:00:00"
          },
          {
            lng: 122.9,
            lat: 24.9,
            power: 9,
            speed: 23,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T20:00:00"
          }
        ]
      },
      {
        source: "中国香港",
        time: "2025-11-09T20:00:00",
        data: [
          {
            lng: 118.2,
            lat: 17.8,
            power: 13,
            speed: 40,
            strong: "台风(TY)",
            time: "2025-11-10T20:00:00"
          },
          {
            lng: 118.2,
            lat: 20.6,
            power: 13,
            speed: 40,
            strong: "台风(TY)",
            time: "2025-11-11T20:00:00"
          },
          {
            lng: 120.6,
            lat: 23.7,
            power: 12,
            speed: 33,
            strong: "台风(TY)",
            time: "2025-11-12T20:00:00"
          },
          {
            lng: 125.8,
            lat: 26.1,
            power: 8,
            speed: 18,
            strong: "热带风暴(TS)",
            time: "2025-11-13T20:00:00"
          },
          {
            lng: 131.6,
            lat: 25.6,
            power: 6,
            speed: 12,
            strong: "热带低压(TD)",
            time: "2025-11-14T20:00:00"
          }
        ]
      }
    ],
    move_dir: "西西北",
    move_speed: 28
  },
  {
    lng: 121.3,
    lat: 16.1,
    power: 14,
    speed: 45,
    pressure: 950,
    radius7: 0,
    en7: 0,
    es7: 0,
    wn7: 0,
    ws7: 0,
    radius10: 0,
    en10: 0,
    es10: 0,
    wn10: 0,
    ws10: 0,
    radius12: 0,
    en12: 0,
    es12: 0,
    wn12: 0,
    ws12: 0,
    remark: "",
    strong: "强台风(STY)",
    time: "2025-11-09T23:00:00",
    data: [
      {
        source: "日本",
        time: "2025-11-09T23:00:00",
        data: [
          {
            lng: 119.1,
            lat: 17.2,
            power: 12,
            speed: 35,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-10T11:00:00"
          },
          {
            lng: 118.1,
            lat: 18.1,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-10T23:00:00"
          },
          {
            lng: 117.6,
            lat: 20.2,
            power: 14,
            speed: 45,
            pressure: 950,
            strong: "强台风(STY)",
            time: "2025-11-11T20:00:00"
          },
          {
            lng: 118.9,
            lat: 22.8,
            power: 12,
            speed: 35,
            pressure: 975,
            strong: "台风(TY)",
            time: "2025-11-12T20:00:00"
          },
          {
            lng: 122.9,
            lat: 24.9,
            power: 9,
            speed: 23,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T20:00:00"
          }
        ]
      },
      {
        source: "中国香港",
        time: "2025-11-09T23:00:00",
        data: [
          {
            lng: 118.2,
            lat: 18.2,
            power: 13,
            speed: 40,
            strong: "台风(TY)",
            time: "2025-11-10T23:00:00"
          },
          {
            lng: 118.3,
            lat: 21,
            power: 13,
            speed: 40,
            strong: "台风(TY)",
            time: "2025-11-11T23:00:00"
          },
          {
            lng: 121.1,
            lat: 24.3,
            power: 11,
            speed: 29,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T23:00:00"
          },
          {
            lng: 127.8,
            lat: 26.8,
            power: 8,
            speed: 18,
            strong: "热带风暴(TS)",
            time: "2025-11-13T23:00:00"
          },
          {
            lng: 131.7,
            lat: 27.1,
            power: 6,
            speed: 11,
            strong: "热带低压(TD)",
            time: "2025-11-14T23:00:00"
          }
        ]
      },
      {
        source: "中国",
        time: "2025-11-09T23:00:00",
        data: [
          {
            lng: 119,
            lat: 17,
            power: 13,
            speed: 38,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-10T11:00:00"
          },
          {
            lng: 118.2,
            lat: 18.1,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-10T23:00:00"
          },
          {
            lng: 118,
            lat: 19.4,
            power: 14,
            speed: 42,
            pressure: 955,
            strong: "强台风(STY)",
            time: "2025-11-11T11:00:00"
          },
          {
            lng: 118.2,
            lat: 20.8,
            power: 14,
            speed: 42,
            pressure: 955,
            strong: "强台风(STY)",
            time: "2025-11-11T23:00:00"
          },
          {
            lng: 119,
            lat: 22.1,
            power: 13,
            speed: 38,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-12T11:00:00"
          },
          {
            lng: 120.6,
            lat: 23.6,
            power: 10,
            speed: 28,
            pressure: 982,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T23:00:00"
          },
          {
            lng: 125.7,
            lat: 25.2,
            power: 7,
            speed: 15,
            pressure: 1e3,
            strong: "热带低压(TD)",
            time: "2025-11-13T23:00:00"
          }
        ]
      }
    ],
    move_dir: "西西北",
    move_speed: 23
  },
  {
    lng: 120,
    lat: 16.6,
    power: 13,
    speed: 38,
    pressure: 965,
    radius7: 520,
    en7: 380,
    es7: 380,
    wn7: 520,
    ws7: 420,
    radius10: 240,
    en10: 200,
    es10: 200,
    wn10: 240,
    ws10: 220,
    radius12: 100,
    en12: 80,
    es12: 80,
    wn12: 100,
    ws12: 100,
    remark: "",
    strong: "台风(TY)",
    time: "2025-11-10T02:00:00",
    data: [
      {
        source: "美国",
        time: "2025-11-10T02:00:00",
        data: [
          {
            lng: 117.8,
            lat: 18.6,
            power: 13,
            speed: 39,
            strong: "台风(TY)",
            time: "2025-11-11T02:00:00"
          },
          {
            lng: 118,
            lat: 21.3,
            power: 12,
            speed: 33,
            strong: "台风(TY)",
            time: "2025-11-12T02:00:00"
          },
          {
            lng: 121.2,
            lat: 24.9,
            power: 10,
            speed: 26,
            strong: "强热带风暴(STS)",
            time: "2025-11-13T02:00:00"
          },
          {
            lng: 124.9,
            lat: 25.4,
            power: 9,
            speed: 21,
            strong: "热带风暴(TS)",
            time: "2025-11-14T02:00:00"
          }
        ]
      },
      {
        source: "韩国",
        time: "2025-11-10T02:00:00",
        data: [
          {
            lng: 118.6,
            lat: 17.6,
            power: 13,
            speed: 39,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-10T14:00:00"
          },
          {
            lng: 117.9,
            lat: 18.9,
            power: 13,
            speed: 37,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-11T02:00:00"
          },
          {
            lng: 118.2,
            lat: 21.2,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-12T02:00:00"
          },
          {
            lng: 120.1,
            lat: 23.7,
            power: 11,
            speed: 29,
            pressure: 980,
            strong: "强热带风暴(STS)",
            time: "2025-11-13T02:00:00"
          },
          {
            lng: 126,
            lat: 25.1,
            power: 7,
            speed: 15,
            pressure: 1004,
            strong: "热带低压(TD)",
            time: "2025-11-14T02:00:00"
          }
        ]
      },
      {
        source: "中国",
        time: "2025-11-10T02:00:00",
        data: [
          {
            lng: 118.5,
            lat: 17.5,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-10T14:00:00"
          },
          {
            lng: 118,
            lat: 19,
            power: 14,
            speed: 42,
            pressure: 955,
            strong: "强台风(STY)",
            time: "2025-11-11T02:00:00"
          },
          {
            lng: 118,
            lat: 20.1,
            power: 14,
            speed: 42,
            pressure: 955,
            strong: "强台风(STY)",
            time: "2025-11-11T14:00:00"
          },
          {
            lng: 118.4,
            lat: 21.3,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-12T02:00:00"
          },
          {
            lng: 119.5,
            lat: 22.5,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-12T14:00:00"
          },
          {
            lng: 121.4,
            lat: 24.1,
            power: 9,
            speed: 23,
            pressure: 990,
            strong: "热带风暴(TS)",
            time: "2025-11-13T02:00:00"
          },
          {
            lng: 126.3,
            lat: 25.1,
            power: 7,
            speed: 15,
            pressure: 1e3,
            strong: "热带低压(TD)",
            time: "2025-11-14T02:00:00"
          }
        ]
      },
      {
        source: "欧洲",
        time: "2025-11-10T02:00:00",
        data: [
          {
            lng: 117.8,
            lat: 18.7,
            power: 13,
            speed: 40,
            strong: "台风(TY)",
            time: "2025-11-11T02:00:00"
          },
          {
            lng: 118.4,
            lat: 21.5,
            power: 12,
            speed: 33,
            strong: "台风(TY)",
            time: "2025-11-12T02:00:00"
          },
          {
            lng: 120.7,
            lat: 23.8,
            power: 9,
            speed: 23,
            strong: "热带风暴(TS)",
            time: "2025-11-13T02:00:00"
          }
        ]
      },
      {
        source: "中国香港",
        time: "2025-11-10T02:00:00",
        data: [
          {
            lng: 118,
            lat: 18.5,
            power: 14,
            speed: 43,
            strong: "强台风(STY)",
            time: "2025-11-11T02:00:00"
          },
          {
            lng: 118.1,
            lat: 21.1,
            power: 13,
            speed: 40,
            strong: "台风(TY)",
            time: "2025-11-12T02:00:00"
          },
          {
            lng: 121.1,
            lat: 24.3,
            power: 10,
            speed: 25,
            strong: "强热带风暴(STS)",
            time: "2025-11-13T02:00:00"
          },
          {
            lng: 127.3,
            lat: 26,
            power: 8,
            speed: 18,
            strong: "热带风暴(TS)",
            time: "2025-11-14T02:00:00"
          },
          {
            lng: 131.7,
            lat: 26,
            power: 6,
            speed: 11,
            strong: "热带低压(TD)",
            time: "2025-11-15T02:00:00"
          }
        ]
      },
      {
        source: "菲律宾",
        time: "2025-11-10T02:00:00",
        data: [
          {
            lng: 118,
            lat: 18.7,
            power: 13,
            speed: 39,
            strong: "台风(TY)",
            time: "2025-11-11T02:00:00"
          },
          {
            lng: 118,
            lat: 20.9,
            power: 13,
            speed: 41,
            strong: "台风(TY)",
            time: "2025-11-12T02:00:00"
          },
          {
            lng: 120.2,
            lat: 23.4,
            power: 10,
            speed: 28,
            strong: "强热带风暴(STS)",
            time: "2025-11-13T02:00:00"
          },
          {
            lng: 123.7,
            lat: 24.8,
            power: 8,
            speed: 18,
            strong: "热带风暴(TS)",
            time: "2025-11-14T02:00:00"
          }
        ]
      },
      {
        source: "日本",
        time: "2025-11-10T02:00:00",
        data: [
          {
            lng: 118.3,
            lat: 17.7,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-10T14:00:00"
          },
          {
            lng: 117.6,
            lat: 18.8,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-11T02:00:00"
          },
          {
            lng: 117.6,
            lat: 20.9,
            power: 14,
            speed: 45,
            pressure: 950,
            strong: "强台风(STY)",
            time: "2025-11-12T02:00:00"
          },
          {
            lng: 119.7,
            lat: 23.4,
            power: 11,
            speed: 30,
            pressure: 980,
            strong: "强热带风暴(STS)",
            time: "2025-11-13T02:00:00"
          },
          {
            lng: 124.6,
            lat: 25.1,
            power: 8,
            speed: 20,
            pressure: 1e3,
            strong: "热带风暴(TS)",
            time: "2025-11-14T02:00:00"
          }
        ]
      }
    ],
    move_dir: "西西北",
    move_speed: 16
  },
  {
    lng: 119.5,
    lat: 16.6,
    power: 13,
    speed: 38,
    pressure: 965,
    radius7: 480,
    en7: 380,
    es7: 380,
    wn7: 480,
    ws7: 420,
    radius10: 220,
    en10: 200,
    es10: 180,
    wn10: 220,
    ws10: 200,
    radius12: 80,
    en12: 80,
    es12: 80,
    wn12: 80,
    ws12: 80,
    remark: "",
    strong: "台风(TY)",
    time: "2025-11-10T05:00:00",
    data: [
      {
        source: "日本",
        time: "2025-11-10T05:00:00",
        data: [
          {
            lng: 118,
            lat: 18.3,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-10T17:00:00"
          },
          {
            lng: 117.7,
            lat: 19.3,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-11T05:00:00"
          },
          {
            lng: 117.6,
            lat: 20.9,
            power: 14,
            speed: 45,
            pressure: 950,
            strong: "强台风(STY)",
            time: "2025-11-12T02:00:00"
          },
          {
            lng: 119.7,
            lat: 23.4,
            power: 11,
            speed: 30,
            pressure: 980,
            strong: "强热带风暴(STS)",
            time: "2025-11-13T02:00:00"
          },
          {
            lng: 124.6,
            lat: 25.1,
            power: 8,
            speed: 20,
            pressure: 1e3,
            strong: "热带风暴(TS)",
            time: "2025-11-14T02:00:00"
          }
        ]
      },
      {
        source: "中国",
        time: "2025-11-10T05:00:00",
        data: [
          {
            lng: 118.5,
            lat: 17.6,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-10T17:00:00"
          },
          {
            lng: 118.1,
            lat: 18.9,
            power: 14,
            speed: 42,
            pressure: 955,
            strong: "强台风(STY)",
            time: "2025-11-11T05:00:00"
          },
          {
            lng: 118.1,
            lat: 20.3,
            power: 14,
            speed: 42,
            pressure: 955,
            strong: "强台风(STY)",
            time: "2025-11-11T17:00:00"
          },
          {
            lng: 118.8,
            lat: 21.8,
            power: 13,
            speed: 38,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-12T05:00:00"
          },
          {
            lng: 119.8,
            lat: 22.8,
            power: 12,
            speed: 33,
            pressure: 975,
            strong: "台风(TY)",
            time: "2025-11-12T17:00:00"
          },
          {
            lng: 122.4,
            lat: 24.4,
            power: 8,
            speed: 18,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T05:00:00"
          },
          {
            lng: 126.4,
            lat: 25,
            power: 7,
            speed: 15,
            pressure: 1e3,
            strong: "热带低压(TD)",
            time: "2025-11-14T05:00:00"
          }
        ]
      },
      {
        source: "中国香港",
        time: "2025-11-10T05:00:00",
        data: [
          {
            lng: 117.9,
            lat: 18.7,
            power: 14,
            speed: 43,
            strong: "强台风(STY)",
            time: "2025-11-11T05:00:00"
          },
          {
            lng: 118.3,
            lat: 21.5,
            power: 13,
            speed: 40,
            strong: "台风(TY)",
            time: "2025-11-12T05:00:00"
          },
          {
            lng: 121.7,
            lat: 24.6,
            power: 9,
            speed: 24,
            strong: "热带风暴(TS)",
            time: "2025-11-13T05:00:00"
          },
          {
            lng: 127.7,
            lat: 26.2,
            power: 7,
            speed: 15,
            strong: "热带低压(TD)",
            time: "2025-11-14T05:00:00"
          },
          {
            lng: 131.7,
            lat: 26.3,
            power: 6,
            speed: 11,
            strong: "热带低压(TD)",
            time: "2025-11-15T05:00:00"
          }
        ]
      }
    ],
    move_dir: "西北",
    move_speed: 13
  },
  {
    lng: 119.2,
    lat: 16.8,
    power: 13,
    speed: 38,
    pressure: 965,
    radius7: 480,
    en7: 380,
    es7: 380,
    wn7: 480,
    ws7: 420,
    radius10: 220,
    en10: 200,
    es10: 180,
    wn10: 220,
    ws10: 200,
    radius12: 80,
    en12: 80,
    es12: 80,
    wn12: 80,
    ws12: 80,
    remark: "",
    strong: "台风(TY)",
    time: "2025-11-10T08:00:00",
    data: [
      {
        source: "韩国",
        time: "2025-11-10T08:00:00",
        data: [
          {
            lng: 118.2,
            lat: 18.2,
            power: 13,
            speed: 39,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-10T20:00:00"
          },
          {
            lng: 117.8,
            lat: 19.5,
            power: 13,
            speed: 39,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-11T08:00:00"
          },
          {
            lng: 118.5,
            lat: 21.8,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-12T08:00:00"
          },
          {
            lng: 121.7,
            lat: 24.6,
            power: 9,
            speed: 24,
            pressure: 990,
            strong: "热带风暴(TS)",
            time: "2025-11-13T08:00:00"
          },
          {
            lng: 126.2,
            lat: 24.9,
            power: 7,
            speed: 15,
            pressure: 1004,
            strong: "热带低压(TD)",
            time: "2025-11-14T08:00:00"
          }
        ]
      },
      {
        source: "南海所",
        time: "2025-11-10T08:00:00",
        data: [
          {
            lng: 118.6,
            lat: 17.2,
            power: 11,
            speed: 31,
            pressure: 967,
            strong: "强热带风暴(STS)",
            time: "2025-11-10T14:00:00"
          },
          {
            lng: 118.3,
            lat: 17.6,
            power: 12,
            speed: 33,
            pressure: 968,
            strong: "台风(TY)",
            time: "2025-11-10T20:00:00"
          },
          {
            lng: 118.2,
            lat: 18.3,
            power: 12,
            speed: 34,
            pressure: 967,
            strong: "台风(TY)",
            time: "2025-11-11T02:00:00"
          },
          {
            lng: 118.1,
            lat: 18.9,
            power: 12,
            speed: 34,
            pressure: 969,
            strong: "台风(TY)",
            time: "2025-11-11T08:00:00"
          },
          {
            lng: 117.6,
            lat: 19.4,
            power: 13,
            speed: 39,
            pressure: 966,
            strong: "台风(TY)",
            time: "2025-11-11T14:00:00"
          },
          {
            lng: 117.8,
            lat: 20.3,
            power: 11,
            speed: 32,
            pressure: 975,
            strong: "强热带风暴(STS)",
            time: "2025-11-11T20:00:00"
          },
          {
            lng: 117.9,
            lat: 21.1,
            power: 11,
            speed: 29,
            pressure: 980,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T02:00:00"
          },
          {
            lng: 118.4,
            lat: 22.5,
            power: 10,
            speed: 27,
            pressure: 985,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T08:00:00"
          },
          {
            lng: 118.7,
            lat: 22.7,
            power: 11,
            speed: 29,
            pressure: 988,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T14:00:00"
          },
          {
            lng: 120.1,
            lat: 23.8,
            power: 9,
            speed: 22,
            pressure: 996,
            strong: "热带风暴(TS)",
            time: "2025-11-12T20:00:00"
          },
          {
            lng: 120.9,
            lat: 24.9,
            power: 9,
            speed: 22,
            pressure: 995,
            strong: "热带风暴(TS)",
            time: "2025-11-13T02:00:00"
          },
          {
            lng: 121.5,
            lat: 23.7,
            power: 9,
            speed: 21,
            pressure: 999,
            strong: "热带风暴(TS)",
            time: "2025-11-13T08:00:00"
          },
          {
            lng: 123.4,
            lat: 26.4,
            power: 9,
            speed: 23,
            pressure: 1001,
            strong: "热带风暴(TS)",
            time: "2025-11-13T14:00:00"
          },
          {
            lng: 124.8,
            lat: 26.5,
            power: 9,
            speed: 24,
            pressure: 1003,
            strong: "热带风暴(TS)",
            time: "2025-11-13T20:00:00"
          },
          {
            lng: 126.6,
            lat: 26.7,
            power: 9,
            speed: 22,
            pressure: 1002,
            strong: "热带风暴(TS)",
            time: "2025-11-14T02:00:00"
          }
        ]
      },
      {
        source: "菲律宾",
        time: "2025-11-10T08:00:00",
        data: [
          {
            lng: 117.8,
            lat: 19.4,
            power: 13,
            speed: 41,
            strong: "台风(TY)",
            time: "2025-11-11T08:00:00"
          },
          {
            lng: 118.6,
            lat: 21.6,
            power: 12,
            speed: 36,
            strong: "台风(TY)",
            time: "2025-11-12T08:00:00"
          },
          {
            lng: 122,
            lat: 24.6,
            power: 9,
            speed: 23,
            strong: "热带风暴(TS)",
            time: "2025-11-13T08:00:00"
          }
        ]
      },
      {
        source: "日本",
        time: "2025-11-10T08:00:00",
        data: [
          {
            lng: 117.9,
            lat: 18.5,
            power: 12,
            speed: 35,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-10T20:00:00"
          },
          {
            lng: 117.6,
            lat: 19.5,
            power: 13,
            speed: 40,
            pressure: 950,
            strong: "台风(TY)",
            time: "2025-11-11T08:00:00"
          },
          {
            lng: 118.2,
            lat: 21.5,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-12T08:00:00"
          },
          {
            lng: 121.7,
            lat: 24.8,
            power: 11,
            speed: 30,
            pressure: 980,
            strong: "强热带风暴(STS)",
            time: "2025-11-13T08:00:00"
          }
        ]
      },
      {
        source: "中国",
        time: "2025-11-10T08:00:00",
        data: [
          {
            lng: 118.3,
            lat: 17.8,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-10T20:00:00"
          },
          {
            lng: 118,
            lat: 19.1,
            power: 14,
            speed: 42,
            pressure: 955,
            strong: "强台风(STY)",
            time: "2025-11-11T08:00:00"
          },
          {
            lng: 118.2,
            lat: 20.8,
            power: 14,
            speed: 42,
            pressure: 955,
            strong: "强台风(STY)",
            time: "2025-11-11T20:00:00"
          },
          {
            lng: 119,
            lat: 22,
            power: 13,
            speed: 38,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-12T08:00:00"
          },
          {
            lng: 120.2,
            lat: 23.2,
            power: 10,
            speed: 25,
            pressure: 985,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T20:00:00"
          },
          {
            lng: 122.7,
            lat: 24.8,
            power: 8,
            speed: 18,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T08:00:00"
          },
          {
            lng: 126.3,
            lat: 25.1,
            power: 7,
            speed: 15,
            pressure: 1e3,
            strong: "热带低压(TD)",
            time: "2025-11-14T08:00:00"
          }
        ]
      },
      {
        source: "欧洲",
        time: "2025-11-10T08:00:00",
        data: [
          {
            lng: 117.8,
            lat: 19.4,
            power: 13,
            speed: 38,
            strong: "台风(TY)",
            time: "2025-11-11T08:00:00"
          },
          {
            lng: 119,
            lat: 22.1,
            power: 11,
            speed: 30,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T08:00:00"
          },
          {
            lng: 122.3,
            lat: 24.9,
            power: 8,
            speed: 20,
            strong: "热带风暴(TS)",
            time: "2025-11-13T08:00:00"
          }
        ]
      },
      {
        source: "美国",
        time: "2025-11-10T08:00:00",
        data: [
          {
            lng: 117.9,
            lat: 19.5,
            power: 13,
            speed: 39,
            strong: "台风(TY)",
            time: "2025-11-11T08:00:00"
          },
          {
            lng: 118.9,
            lat: 22.4,
            power: 12,
            speed: 33,
            strong: "台风(TY)",
            time: "2025-11-12T08:00:00"
          },
          {
            lng: 121.9,
            lat: 25.5,
            power: 10,
            speed: 26,
            strong: "强热带风暴(STS)",
            time: "2025-11-13T08:00:00"
          },
          {
            lng: 127.2,
            lat: 26.6,
            power: 9,
            speed: 21,
            strong: "热带风暴(TS)",
            time: "2025-11-14T08:00:00"
          }
        ]
      },
      {
        source: "中国香港",
        time: "2025-11-10T08:00:00",
        data: [
          {
            lng: 118.1,
            lat: 19.4,
            power: 13,
            speed: 40,
            strong: "台风(TY)",
            time: "2025-11-11T08:00:00"
          },
          {
            lng: 119.2,
            lat: 22.1,
            power: 13,
            speed: 39,
            strong: "台风(TY)",
            time: "2025-11-12T08:00:00"
          },
          {
            lng: 123.8,
            lat: 26.1,
            power: 9,
            speed: 24,
            strong: "热带风暴(TS)",
            time: "2025-11-13T08:00:00"
          },
          {
            lng: 130.4,
            lat: 26,
            power: 6,
            speed: 11,
            strong: "热带低压(TD)",
            time: "2025-11-14T08:00:00"
          }
        ]
      }
    ],
    move_dir: "西北",
    move_speed: 13
  },
  {
    lng: 119.1,
    lat: 17,
    power: 13,
    speed: 38,
    pressure: 965,
    radius7: 480,
    en7: 380,
    es7: 380,
    wn7: 480,
    ws7: 420,
    radius10: 220,
    en10: 200,
    es10: 180,
    wn10: 220,
    ws10: 200,
    radius12: 80,
    en12: 80,
    es12: 80,
    wn12: 80,
    ws12: 80,
    remark: "",
    strong: "台风(TY)",
    time: "2025-11-10T11:00:00",
    data: [
      {
        source: "中国香港",
        time: "2025-11-10T11:00:00",
        data: [
          {
            lng: 118.1,
            lat: 19.7,
            power: 13,
            speed: 40,
            strong: "台风(TY)",
            time: "2025-11-11T11:00:00"
          },
          {
            lng: 119.7,
            lat: 22.6,
            power: 12,
            speed: 36,
            strong: "台风(TY)",
            time: "2025-11-12T11:00:00"
          },
          {
            lng: 124.7,
            lat: 26.3,
            power: 9,
            speed: 21,
            strong: "热带风暴(TS)",
            time: "2025-11-13T11:00:00"
          },
          {
            lng: 130.9,
            lat: 25.7,
            power: 6,
            speed: 11,
            strong: "热带低压(TD)",
            time: "2025-11-14T11:00:00"
          }
        ]
      },
      {
        source: "日本",
        time: "2025-11-10T11:00:00",
        data: [
          {
            lng: 118.1,
            lat: 18.6,
            power: 12,
            speed: 35,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-10T23:00:00"
          },
          {
            lng: 118,
            lat: 19.7,
            power: 13,
            speed: 40,
            pressure: 950,
            strong: "台风(TY)",
            time: "2025-11-11T11:00:00"
          },
          {
            lng: 118.2,
            lat: 21.5,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-12T08:00:00"
          },
          {
            lng: 121.7,
            lat: 24.8,
            power: 11,
            speed: 30,
            pressure: 980,
            strong: "强热带风暴(STS)",
            time: "2025-11-13T08:00:00"
          }
        ]
      },
      {
        source: "中国",
        time: "2025-11-10T11:00:00",
        data: [
          {
            lng: 118.3,
            lat: 18.2,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-10T23:00:00"
          },
          {
            lng: 118,
            lat: 19.5,
            power: 14,
            speed: 42,
            pressure: 955,
            strong: "强台风(STY)",
            time: "2025-11-11T11:00:00"
          },
          {
            lng: 118.2,
            lat: 20.9,
            power: 14,
            speed: 42,
            pressure: 955,
            strong: "强台风(STY)",
            time: "2025-11-11T23:00:00"
          },
          {
            lng: 119.2,
            lat: 22.4,
            power: 13,
            speed: 38,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-12T11:00:00"
          },
          {
            lng: 120.8,
            lat: 23.8,
            power: 8,
            speed: 20,
            pressure: 995,
            strong: "热带风暴(TS)",
            time: "2025-11-12T23:00:00"
          },
          {
            lng: 123.5,
            lat: 25.2,
            power: 7,
            speed: 15,
            pressure: 1002,
            strong: "热带低压(TD)",
            time: "2025-11-13T11:00:00"
          }
        ]
      }
    ],
    move_dir: "北西北",
    move_speed: 14
  },
  {
    lng: 119,
    lat: 17.6,
    power: 13,
    speed: 38,
    pressure: 965,
    radius7: 480,
    en7: 380,
    es7: 380,
    wn7: 480,
    ws7: 420,
    radius10: 220,
    en10: 200,
    es10: 180,
    wn10: 220,
    ws10: 200,
    radius12: 80,
    en12: 80,
    es12: 80,
    wn12: 80,
    ws12: 80,
    remark: "",
    strong: "台风(TY)",
    time: "2025-11-10T14:00:00",
    data: [
      {
        source: "中国香港",
        time: "2025-11-10T14:00:00",
        data: [
          {
            lng: 118.4,
            lat: 20,
            power: 13,
            speed: 40,
            strong: "台风(TY)",
            time: "2025-11-11T14:00:00"
          },
          {
            lng: 119.7,
            lat: 22.4,
            power: 12,
            speed: 36,
            strong: "台风(TY)",
            time: "2025-11-12T14:00:00"
          },
          {
            lng: 124.6,
            lat: 25.8,
            power: 9,
            speed: 21,
            strong: "热带风暴(TS)",
            time: "2025-11-13T14:00:00"
          },
          {
            lng: 130.9,
            lat: 25.5,
            power: 6,
            speed: 11,
            strong: "热带低压(TD)",
            time: "2025-11-14T14:00:00"
          }
        ]
      },
      {
        source: "菲律宾",
        time: "2025-11-10T14:00:00",
        data: [
          {
            lng: 118.2,
            lat: 20,
            power: 12,
            speed: 33,
            strong: "台风(TY)",
            time: "2025-11-11T14:00:00"
          },
          {
            lng: 119.6,
            lat: 22.7,
            power: 10,
            speed: 26,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T14:00:00"
          },
          {
            lng: 123.3,
            lat: 24.8,
            power: 7,
            speed: 15,
            strong: "热带低压(TD)",
            time: "2025-11-13T14:00:00"
          }
        ]
      },
      {
        source: "中国",
        time: "2025-11-10T14:00:00",
        data: [
          {
            lng: 118.1,
            lat: 18.8,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-11T02:00:00"
          },
          {
            lng: 118.2,
            lat: 20,
            power: 14,
            speed: 42,
            pressure: 955,
            strong: "强台风(STY)",
            time: "2025-11-11T14:00:00"
          },
          {
            lng: 118.5,
            lat: 21.5,
            power: 14,
            speed: 42,
            pressure: 955,
            strong: "强台风(STY)",
            time: "2025-11-12T02:00:00"
          },
          {
            lng: 119.8,
            lat: 22.9,
            power: 12,
            speed: 33,
            pressure: 975,
            strong: "台风(TY)",
            time: "2025-11-12T14:00:00"
          },
          {
            lng: 121.7,
            lat: 24.7,
            power: 8,
            speed: 20,
            pressure: 995,
            strong: "热带风暴(TS)",
            time: "2025-11-13T02:00:00"
          },
          {
            lng: 124.3,
            lat: 25.2,
            power: 7,
            speed: 15,
            pressure: 1002,
            strong: "热带低压(TD)",
            time: "2025-11-13T14:00:00"
          }
        ]
      },
      {
        source: "美国",
        time: "2025-11-10T14:00:00",
        data: [
          {
            lng: 118.1,
            lat: 19.9,
            power: 12,
            speed: 33,
            strong: "台风(TY)",
            time: "2025-11-11T14:00:00"
          },
          {
            lng: 119.5,
            lat: 22.8,
            power: 10,
            speed: 28,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T14:00:00"
          },
          {
            lng: 123.3,
            lat: 25.5,
            power: 9,
            speed: 23,
            strong: "热带风暴(TS)",
            time: "2025-11-13T14:00:00"
          },
          {
            lng: 128.3,
            lat: 26,
            power: 7,
            speed: 15,
            strong: "热带低压(TD)",
            time: "2025-11-14T14:00:00"
          }
        ]
      },
      {
        source: "韩国",
        time: "2025-11-10T14:00:00",
        data: [
          {
            lng: 118.3,
            lat: 18.7,
            power: 13,
            speed: 37,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-11T02:00:00"
          },
          {
            lng: 118.3,
            lat: 20.3,
            power: 13,
            speed: 37,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-11T14:00:00"
          },
          {
            lng: 121.7,
            lat: 24.7,
            power: 9,
            speed: 24,
            pressure: 990,
            strong: "热带风暴(TS)",
            time: "2025-11-12T14:00:00"
          },
          {
            lng: 124.5,
            lat: 24.9,
            power: 7,
            speed: 15,
            pressure: 1e3,
            strong: "热带低压(TD)",
            time: "2025-11-13T14:00:00"
          }
        ]
      },
      {
        source: "欧洲",
        time: "2025-11-10T14:00:00",
        data: [
          {
            lng: 118.1,
            lat: 20.1,
            power: 12,
            speed: 35,
            strong: "台风(TY)",
            time: "2025-11-11T14:00:00"
          },
          {
            lng: 119.9,
            lat: 22.6,
            power: 10,
            speed: 28,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T14:00:00"
          },
          {
            lng: 124.2,
            lat: 25.5,
            power: 7,
            speed: 15,
            strong: "热带低压(TD)",
            time: "2025-11-13T14:00:00"
          }
        ]
      },
      {
        source: "日本",
        time: "2025-11-10T14:00:00",
        data: [
          {
            lng: 118.1,
            lat: 18.7,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-11T02:00:00"
          },
          {
            lng: 118.2,
            lat: 19.9,
            power: 13,
            speed: 40,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-11T14:00:00"
          },
          {
            lng: 119.4,
            lat: 22.8,
            power: 12,
            speed: 35,
            pressure: 975,
            strong: "台风(TY)",
            time: "2025-11-12T14:00:00"
          },
          {
            lng: 123.4,
            lat: 25.1,
            power: 9,
            speed: 23,
            pressure: 994,
            strong: "热带风暴(TS)",
            time: "2025-11-13T14:00:00"
          }
        ]
      }
    ],
    move_dir: "西北",
    move_speed: 14
  },
  {
    lng: 118.9,
    lat: 17.6,
    power: 13,
    speed: 38,
    pressure: 965,
    radius7: 480,
    en7: 380,
    es7: 380,
    wn7: 480,
    ws7: 420,
    radius10: 220,
    en10: 200,
    es10: 180,
    wn10: 220,
    ws10: 200,
    radius12: 80,
    en12: 80,
    es12: 80,
    wn12: 80,
    ws12: 80,
    remark: "",
    strong: "台风(TY)",
    time: "2025-11-10T15:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-10T15:00:00",
        data: [
          {
            lng: 118.1,
            lat: 18.9,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-11T03:00:00"
          },
          {
            lng: 118.2,
            lat: 20.1,
            power: 14,
            speed: 42,
            pressure: 955,
            strong: "强台风(STY)",
            time: "2025-11-11T15:00:00"
          },
          {
            lng: 118.6,
            lat: 21.6,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-12T03:00:00"
          },
          {
            lng: 120,
            lat: 23,
            power: 11,
            speed: 30,
            pressure: 982,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T15:00:00"
          },
          {
            lng: 121.9,
            lat: 24.7,
            power: 8,
            speed: 18,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T03:00:00"
          },
          {
            lng: 124.5,
            lat: 25.2,
            power: 7,
            speed: 15,
            pressure: 1e3,
            strong: "热带低压(TD)",
            time: "2025-11-13T15:00:00"
          }
        ]
      }
    ],
    move_dir: "北西北",
    move_speed: 14
  },
  {
    lng: 118.8,
    lat: 17.8,
    power: 13,
    speed: 38,
    pressure: 965,
    radius7: 480,
    en7: 380,
    es7: 380,
    wn7: 480,
    ws7: 420,
    radius10: 220,
    en10: 200,
    es10: 180,
    wn10: 220,
    ws10: 200,
    radius12: 80,
    en12: 80,
    es12: 80,
    wn12: 80,
    ws12: 80,
    remark: "",
    strong: "台风(TY)",
    time: "2025-11-10T16:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-10T16:00:00",
        data: [
          {
            lng: 118.1,
            lat: 19,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-11T04:00:00"
          },
          {
            lng: 118.3,
            lat: 20.3,
            power: 14,
            speed: 42,
            pressure: 955,
            strong: "强台风(STY)",
            time: "2025-11-11T16:00:00"
          },
          {
            lng: 118.7,
            lat: 21.7,
            power: 13,
            speed: 40,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-12T04:00:00"
          },
          {
            lng: 120.1,
            lat: 23.2,
            power: 10,
            speed: 28,
            pressure: 985,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T16:00:00"
          },
          {
            lng: 122.1,
            lat: 24.8,
            power: 8,
            speed: 18,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T04:00:00"
          },
          {
            lng: 124.7,
            lat: 25.3,
            power: 7,
            speed: 14,
            pressure: 1e3,
            strong: "热带低压(TD)",
            time: "2025-11-13T16:00:00"
          }
        ]
      }
    ],
    move_dir: "北西北",
    move_speed: 12
  },
  {
    lng: 118.7,
    lat: 17.9,
    power: 12,
    speed: 35,
    pressure: 970,
    radius7: 480,
    en7: 380,
    es7: 380,
    wn7: 480,
    ws7: 420,
    radius10: 220,
    en10: 200,
    es10: 180,
    wn10: 220,
    ws10: 200,
    radius12: 80,
    en12: 80,
    es12: 80,
    wn12: 80,
    ws12: 80,
    remark: "",
    strong: "台风(TY)",
    time: "2025-11-10T17:00:00",
    data: [
      {
        source: "中国香港",
        time: "2025-11-10T17:00:00",
        data: [
          {
            lng: 118.4,
            lat: 20.3,
            power: 13,
            speed: 40,
            strong: "台风(TY)",
            time: "2025-11-11T17:00:00"
          },
          {
            lng: 120.1,
            lat: 22.9,
            power: 12,
            speed: 33,
            strong: "台风(TY)",
            time: "2025-11-12T17:00:00"
          },
          {
            lng: 125.4,
            lat: 25.9,
            power: 8,
            speed: 18,
            strong: "热带风暴(TS)",
            time: "2025-11-13T17:00:00"
          },
          {
            lng: 131.7,
            lat: 25.4,
            power: 6,
            speed: 11,
            strong: "热带低压(TD)",
            time: "2025-11-14T17:00:00"
          }
        ]
      },
      {
        source: "欧洲",
        time: "2025-11-10T17:00:00",
        data: [
          {
            lng: 118.2,
            lat: 20.3,
            power: 12,
            speed: 35,
            strong: "台风(TY)",
            time: "2025-11-11T17:00:00"
          },
          {
            lng: 120.5,
            lat: 23.1,
            power: 10,
            speed: 25,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T17:00:00"
          }
        ]
      },
      {
        source: "日本",
        time: "2025-11-10T17:00:00",
        data: [
          {
            lng: 118.1,
            lat: 18.8,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-11T05:00:00"
          },
          {
            lng: 118.1,
            lat: 20,
            power: 13,
            speed: 40,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-11T17:00:00"
          },
          {
            lng: 119.4,
            lat: 22.8,
            power: 12,
            speed: 35,
            pressure: 975,
            strong: "台风(TY)",
            time: "2025-11-12T14:00:00"
          },
          {
            lng: 123.4,
            lat: 25.1,
            power: 9,
            speed: 23,
            pressure: 994,
            strong: "热带风暴(TS)",
            time: "2025-11-13T14:00:00"
          }
        ]
      },
      {
        source: "中国",
        time: "2025-11-10T17:00:00",
        data: [
          {
            lng: 118.1,
            lat: 19.1,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-11T05:00:00"
          },
          {
            lng: 118.3,
            lat: 20.4,
            power: 14,
            speed: 42,
            pressure: 955,
            strong: "强台风(STY)",
            time: "2025-11-11T17:00:00"
          },
          {
            lng: 118.7,
            lat: 21.7,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-12T05:00:00"
          },
          {
            lng: 120.1,
            lat: 22.9,
            power: 10,
            speed: 28,
            pressure: 982,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T17:00:00"
          },
          {
            lng: 122.7,
            lat: 25.2,
            power: 7,
            speed: 15,
            pressure: 1002,
            strong: "热带低压(TD)",
            time: "2025-11-13T05:00:00"
          }
        ]
      }
    ],
    move_dir: "北西北",
    move_speed: 13
  },
  {
    lng: 118.7,
    lat: 17.9,
    power: 12,
    speed: 35,
    pressure: 970,
    radius7: 480,
    en7: 380,
    es7: 380,
    wn7: 480,
    ws7: 420,
    radius10: 220,
    en10: 200,
    es10: 180,
    wn10: 220,
    ws10: 200,
    radius12: 80,
    en12: 80,
    es12: 80,
    wn12: 80,
    ws12: 80,
    remark: "",
    strong: "台风(TY)",
    time: "2025-11-10T18:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-10T18:00:00",
        data: [
          {
            lng: 118.1,
            lat: 19.2,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-11T06:00:00"
          },
          {
            lng: 118.3,
            lat: 20.5,
            power: 14,
            speed: 42,
            pressure: 960,
            strong: "强台风(STY)",
            time: "2025-11-11T18:00:00"
          },
          {
            lng: 118.8,
            lat: 21.8,
            power: 12,
            speed: 33,
            pressure: 975,
            strong: "台风(TY)",
            time: "2025-11-12T06:00:00"
          },
          {
            lng: 120.3,
            lat: 23.1,
            power: 10,
            speed: 25,
            pressure: 990,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T18:00:00"
          },
          {
            lng: 122.9,
            lat: 25.4,
            power: 7,
            speed: 14,
            pressure: 1e3,
            strong: "热带低压(TD)",
            time: "2025-11-13T06:00:00"
          }
        ]
      }
    ],
    move_dir: "北西北",
    move_speed: 13
  },
  {
    lng: 118.6,
    lat: 18,
    power: 12,
    speed: 35,
    pressure: 970,
    radius7: 480,
    en7: 380,
    es7: 380,
    wn7: 480,
    ws7: 420,
    radius10: 220,
    en10: 200,
    es10: 180,
    wn10: 220,
    ws10: 200,
    radius12: 80,
    en12: 80,
    es12: 80,
    wn12: 80,
    ws12: 80,
    remark: "",
    strong: "台风(TY)",
    time: "2025-11-10T19:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-10T19:00:00",
        data: [
          {
            lng: 118.1,
            lat: 19.3,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-11T07:00:00"
          },
          {
            lng: 118.4,
            lat: 20.6,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-11T19:00:00"
          },
          {
            lng: 118.9,
            lat: 21.9,
            power: 12,
            speed: 33,
            pressure: 975,
            strong: "台风(TY)",
            time: "2025-11-12T07:00:00"
          },
          {
            lng: 120.5,
            lat: 23.3,
            power: 9,
            speed: 23,
            pressure: 990,
            strong: "热带风暴(TS)",
            time: "2025-11-12T19:00:00"
          },
          {
            lng: 123.1,
            lat: 25.6,
            power: 6,
            speed: 13,
            pressure: 1e3,
            strong: "热带低压(TD)",
            time: "2025-11-13T07:00:00"
          }
        ]
      }
    ],
    move_dir: "北西北",
    move_speed: 12
  },
  {
    lng: 118.5,
    lat: 18.2,
    power: 12,
    speed: 35,
    pressure: 970,
    radius7: 480,
    en7: 380,
    es7: 380,
    wn7: 480,
    ws7: 420,
    radius10: 220,
    en10: 200,
    es10: 180,
    wn10: 220,
    ws10: 200,
    radius12: 80,
    en12: 80,
    es12: 80,
    wn12: 80,
    ws12: 80,
    remark: "",
    strong: "台风(TY)",
    time: "2025-11-10T20:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-10T20:00:00",
        data: [
          {
            lng: 118.2,
            lat: 19.4,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-11T08:00:00"
          },
          {
            lng: 118.4,
            lat: 20.7,
            power: 14,
            speed: 42,
            pressure: 955,
            strong: "强台风(STY)",
            time: "2025-11-11T20:00:00"
          },
          {
            lng: 119,
            lat: 21.9,
            power: 12,
            speed: 33,
            pressure: 975,
            strong: "台风(TY)",
            time: "2025-11-12T08:00:00"
          },
          {
            lng: 120.5,
            lat: 23.2,
            power: 9,
            speed: 23,
            pressure: 990,
            strong: "热带风暴(TS)",
            time: "2025-11-12T20:00:00"
          },
          {
            lng: 123.2,
            lat: 25.5,
            power: 7,
            speed: 15,
            pressure: 1002,
            strong: "热带低压(TD)",
            time: "2025-11-13T08:00:00"
          }
        ]
      },
      {
        source: "中国香港",
        time: "2025-11-10T20:00:00",
        data: [
          {
            lng: 118.6,
            lat: 20.7,
            power: 13,
            speed: 40,
            strong: "台风(TY)",
            time: "2025-11-11T20:00:00"
          },
          {
            lng: 120.8,
            lat: 23.3,
            power: 11,
            speed: 29,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T20:00:00"
          },
          {
            lng: 126.2,
            lat: 25.9,
            power: 8,
            speed: 18,
            strong: "热带风暴(TS)",
            time: "2025-11-13T20:00:00"
          },
          {
            lng: 132.5,
            lat: 25.3,
            power: 6,
            speed: 11,
            strong: "热带低压(TD)",
            time: "2025-11-14T20:00:00"
          }
        ]
      },
      {
        source: "菲律宾",
        time: "2025-11-10T20:00:00",
        data: [
          {
            lng: 118.5,
            lat: 20.7,
            power: 12,
            speed: 33,
            strong: "台风(TY)",
            time: "2025-11-11T20:00:00"
          },
          {
            lng: 120.8,
            lat: 23.6,
            power: 9,
            speed: 23,
            strong: "热带风暴(TS)",
            time: "2025-11-12T20:00:00"
          },
          {
            lng: 123.9,
            lat: 24.8,
            power: 6,
            speed: 13,
            strong: "热带低压(TD)",
            time: "2025-11-13T20:00:00"
          }
        ]
      },
      {
        source: "欧洲",
        time: "2025-11-10T20:00:00",
        data: [
          {
            lng: 118.5,
            lat: 20.7,
            power: 12,
            speed: 35,
            strong: "台风(TY)",
            time: "2025-11-11T20:00:00"
          },
          {
            lng: 121.1,
            lat: 23.5,
            power: 9,
            speed: 23,
            strong: "热带风暴(TS)",
            time: "2025-11-12T20:00:00"
          }
        ]
      },
      {
        source: "日本",
        time: "2025-11-10T20:00:00",
        data: [
          {
            lng: 118.2,
            lat: 19.2,
            power: 12,
            speed: 35,
            pressure: 975,
            strong: "台风(TY)",
            time: "2025-11-11T08:00:00"
          },
          {
            lng: 118.4,
            lat: 20.5,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-11T20:00:00"
          },
          {
            lng: 120.4,
            lat: 23.2,
            power: 10,
            speed: 25,
            pressure: 992,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T20:00:00"
          },
          {
            lng: 124.6,
            lat: 25.1,
            power: 9,
            speed: 23,
            pressure: 1002,
            strong: "热带风暴(TS)",
            time: "2025-11-13T20:00:00"
          }
        ]
      },
      {
        source: "韩国",
        time: "2025-11-10T20:00:00",
        data: [
          {
            lng: 118.4,
            lat: 20.9,
            power: 12,
            speed: 35,
            strong: "台风(TY)",
            time: "2025-11-11T20:00:00"
          },
          {
            lng: 120.5,
            lat: 23.3,
            power: 9,
            speed: 24,
            strong: "热带风暴(TS)",
            time: "2025-11-12T20:00:00"
          },
          {
            lng: 124.7,
            lat: 25.4,
            power: 9,
            speed: 22,
            strong: "热带风暴(TS)",
            time: "2025-11-13T20:00:00"
          }
        ]
      },
      {
        source: "南海所",
        time: "2025-11-10T20:00:00",
        data: [
          {
            lng: 118.1,
            lat: 18.4,
            power: 11,
            speed: 30,
            pressure: 976,
            strong: "强热带风暴(STS)",
            time: "2025-11-11T02:00:00"
          },
          {
            lng: 118.3,
            lat: 19.1,
            power: 11,
            speed: 30,
            pressure: 981,
            strong: "强热带风暴(STS)",
            time: "2025-11-11T08:00:00"
          },
          {
            lng: 118.4,
            lat: 19.8,
            power: 11,
            speed: 29,
            pressure: 982,
            strong: "强热带风暴(STS)",
            time: "2025-11-11T14:00:00"
          },
          {
            lng: 118.6,
            lat: 20.4,
            power: 10,
            speed: 27,
            pressure: 985,
            strong: "强热带风暴(STS)",
            time: "2025-11-11T20:00:00"
          },
          {
            lng: 118.4,
            lat: 20.8,
            power: 11,
            speed: 29,
            pressure: 987,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T02:00:00"
          },
          {
            lng: 119.2,
            lat: 21.6,
            power: 10,
            speed: 26,
            pressure: 991,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T08:00:00"
          },
          {
            lng: 119.6,
            lat: 22.6,
            power: 9,
            speed: 22,
            pressure: 993,
            strong: "热带风暴(TS)",
            time: "2025-11-12T14:00:00"
          },
          {
            lng: 120.2,
            lat: 24.2,
            power: 9,
            speed: 22,
            pressure: 994,
            strong: "热带风暴(TS)",
            time: "2025-11-12T20:00:00"
          },
          {
            lng: 121.1,
            lat: 24.5,
            power: 9,
            speed: 21,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T02:00:00"
          },
          {
            lng: 121,
            lat: 22.6,
            power: 8,
            speed: 19,
            pressure: 1e3,
            strong: "热带风暴(TS)",
            time: "2025-11-13T08:00:00"
          },
          {
            lng: 123.9,
            lat: 26,
            power: 9,
            speed: 24,
            pressure: 1003,
            strong: "热带风暴(TS)",
            time: "2025-11-13T15:00:00"
          },
          {
            lng: 125.6,
            lat: 26.5,
            power: 9,
            speed: 24,
            pressure: 1001,
            strong: "热带风暴(TS)",
            time: "2025-11-13T20:00:00"
          },
          {
            lng: 126.6,
            lat: 26.8,
            power: 9,
            speed: 21,
            pressure: 1004,
            strong: "热带风暴(TS)",
            time: "2025-11-14T02:00:00"
          },
          {
            lng: 127.1,
            lat: 26.6,
            power: 8,
            speed: 19,
            pressure: 1004,
            strong: "热带风暴(TS)",
            time: "2025-11-14T08:00:00"
          },
          {
            lng: 126.4,
            lat: 25.9,
            power: 7,
            speed: 17,
            pressure: 1004,
            strong: "热带低压(TD)",
            time: "2025-11-14T14:00:00"
          }
        ]
      },
      {
        source: "美国",
        time: "2025-11-10T20:00:00",
        data: [
          {
            lng: 118.3,
            lat: 21,
            power: 11,
            speed: 31,
            strong: "强热带风暴(STS)",
            time: "2025-11-11T20:00:00"
          },
          {
            lng: 120.4,
            lat: 23.5,
            power: 9,
            speed: 21,
            strong: "热带风暴(TS)",
            time: "2025-11-12T20:00:00"
          },
          {
            lng: 123.5,
            lat: 25.6,
            power: 6,
            speed: 13,
            strong: "热带低压(TD)",
            time: "2025-11-13T20:00:00"
          }
        ]
      }
    ],
    move_dir: "北西北",
    move_speed: 12
  },
  {
    lng: 118.5,
    lat: 18.4,
    power: 12,
    speed: 35,
    pressure: 970,
    radius7: 480,
    en7: 380,
    es7: 380,
    wn7: 480,
    ws7: 420,
    radius10: 220,
    en10: 200,
    es10: 180,
    wn10: 220,
    ws10: 200,
    radius12: 80,
    en12: 80,
    es12: 80,
    wn12: 80,
    ws12: 80,
    remark: "",
    strong: "台风(TY)",
    time: "2025-11-10T21:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-10T21:00:00",
        data: [
          {
            lng: 118.2,
            lat: 19.5,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-11T09:00:00"
          },
          {
            lng: 118.4,
            lat: 20.8,
            power: 14,
            speed: 42,
            pressure: 960,
            strong: "强台风(STY)",
            time: "2025-11-11T21:00:00"
          },
          {
            lng: 119.1,
            lat: 22,
            power: 12,
            speed: 33,
            pressure: 980,
            strong: "台风(TY)",
            time: "2025-11-12T09:00:00"
          },
          {
            lng: 120.7,
            lat: 23.4,
            power: 8,
            speed: 20,
            pressure: 995,
            strong: "热带风暴(TS)",
            time: "2025-11-12T21:00:00"
          },
          {
            lng: 123.4,
            lat: 25.7,
            power: 7,
            speed: 14,
            pressure: 1e3,
            strong: "热带低压(TD)",
            time: "2025-11-13T09:00:00"
          }
        ]
      }
    ],
    move_dir: "北西北",
    move_speed: 12
  },
  {
    lng: 118.4,
    lat: 18.5,
    power: 12,
    speed: 35,
    pressure: 970,
    radius7: 480,
    en7: 380,
    es7: 380,
    wn7: 480,
    ws7: 420,
    radius10: 220,
    en10: 200,
    es10: 180,
    wn10: 220,
    ws10: 200,
    radius12: 80,
    en12: 80,
    es12: 80,
    wn12: 80,
    ws12: 80,
    remark: "",
    strong: "台风(TY)",
    time: "2025-11-10T22:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-10T22:00:00",
        data: [
          {
            lng: 118.2,
            lat: 19.6,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-11T10:00:00"
          },
          {
            lng: 118.5,
            lat: 20.9,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-11T22:00:00"
          },
          {
            lng: 119.3,
            lat: 22.1,
            power: 11,
            speed: 30,
            pressure: 980,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T10:00:00"
          },
          {
            lng: 120.9,
            lat: 23.6,
            power: 8,
            speed: 20,
            pressure: 995,
            strong: "热带风暴(TS)",
            time: "2025-11-12T22:00:00"
          },
          {
            lng: 123.7,
            lat: 25.9,
            power: 7,
            speed: 14,
            pressure: 1e3,
            strong: "热带低压(TD)",
            time: "2025-11-13T10:00:00"
          }
        ]
      }
    ],
    move_dir: "北西北",
    move_speed: 12
  },
  {
    lng: 118.3,
    lat: 18.6,
    power: 12,
    speed: 35,
    pressure: 970,
    radius7: 480,
    en7: 380,
    es7: 380,
    wn7: 480,
    ws7: 420,
    radius10: 220,
    en10: 200,
    es10: 180,
    wn10: 220,
    ws10: 200,
    radius12: 80,
    en12: 80,
    es12: 80,
    wn12: 80,
    ws12: 80,
    remark: "",
    strong: "台风(TY)",
    time: "2025-11-10T23:00:00",
    data: [
      {
        source: "欧洲",
        time: "2025-11-10T23:00:00",
        data: [
          {
            lng: 118.8,
            lat: 21.1,
            power: 12,
            speed: 33,
            strong: "台风(TY)",
            time: "2025-11-11T23:00:00"
          },
          {
            lng: 121.4,
            lat: 23.3,
            power: 8,
            speed: 18,
            strong: "热带风暴(TS)",
            time: "2025-11-12T23:00:00"
          }
        ]
      },
      {
        source: "日本",
        time: "2025-11-10T23:00:00",
        data: [
          {
            lng: 118.4,
            lat: 19.5,
            power: 12,
            speed: 35,
            pressure: 975,
            strong: "台风(TY)",
            time: "2025-11-11T11:00:00"
          },
          {
            lng: 118.6,
            lat: 20.6,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-11T23:00:00"
          },
          {
            lng: 120.4,
            lat: 23.2,
            power: 10,
            speed: 25,
            pressure: 992,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T20:00:00"
          },
          {
            lng: 124.6,
            lat: 25.1,
            power: 9,
            speed: 23,
            pressure: 1002,
            strong: "热带风暴(TS)",
            time: "2025-11-13T20:00:00"
          }
        ]
      },
      {
        source: "中国",
        time: "2025-11-10T23:00:00",
        data: [
          {
            lng: 118.3,
            lat: 19.7,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-11T11:00:00"
          },
          {
            lng: 118.7,
            lat: 21.1,
            power: 14,
            speed: 42,
            pressure: 955,
            strong: "强台风(STY)",
            time: "2025-11-11T23:00:00"
          },
          {
            lng: 119.6,
            lat: 22.2,
            power: 11,
            speed: 30,
            pressure: 980,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T11:00:00"
          },
          {
            lng: 121.1,
            lat: 23.7,
            power: 8,
            speed: 20,
            pressure: 995,
            strong: "热带风暴(TS)",
            time: "2025-11-12T23:00:00"
          },
          {
            lng: 123.8,
            lat: 25.6,
            power: 7,
            speed: 15,
            pressure: 1002,
            strong: "热带低压(TD)",
            time: "2025-11-13T11:00:00"
          }
        ]
      },
      {
        source: "中国香港",
        time: "2025-11-10T23:00:00",
        data: [
          {
            lng: 118.7,
            lat: 21,
            power: 13,
            speed: 39,
            strong: "台风(TY)",
            time: "2025-11-11T23:00:00"
          },
          {
            lng: 121.3,
            lat: 23.8,
            power: 10,
            speed: 25,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T23:00:00"
          },
          {
            lng: 127,
            lat: 25.9,
            power: 7,
            speed: 15,
            strong: "热带低压(TD)",
            time: "2025-11-13T23:00:00"
          }
        ]
      }
    ],
    move_dir: "北",
    move_speed: 11
  },
  {
    lng: 118.3,
    lat: 18.7,
    power: 12,
    speed: 35,
    pressure: 970,
    radius7: 480,
    en7: 380,
    es7: 380,
    wn7: 480,
    ws7: 420,
    radius10: 220,
    en10: 200,
    es10: 180,
    wn10: 220,
    ws10: 200,
    radius12: 80,
    en12: 80,
    es12: 80,
    wn12: 80,
    ws12: 80,
    remark: "",
    strong: "台风(TY)",
    time: "2025-11-11T00:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-11T00:00:00",
        data: [
          {
            lng: 118.3,
            lat: 19.8,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-11T12:00:00"
          },
          {
            lng: 118.8,
            lat: 21.2,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-12T00:00:00"
          },
          {
            lng: 119.7,
            lat: 22.3,
            power: 10,
            speed: 28,
            pressure: 985,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T12:00:00"
          },
          {
            lng: 121.3,
            lat: 23.9,
            power: 8,
            speed: 18,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T00:00:00"
          },
          {
            lng: 124,
            lat: 25.8,
            power: 7,
            speed: 15,
            pressure: 1e3,
            strong: "热带低压(TD)",
            time: "2025-11-13T12:00:00"
          }
        ]
      }
    ],
    move_dir: "北",
    move_speed: 11
  },
  {
    lng: 118.3,
    lat: 18.8,
    power: 12,
    speed: 35,
    pressure: 970,
    radius7: 480,
    en7: 380,
    es7: 380,
    wn7: 480,
    ws7: 420,
    radius10: 220,
    en10: 200,
    es10: 180,
    wn10: 220,
    ws10: 200,
    radius12: 80,
    en12: 80,
    es12: 80,
    wn12: 80,
    ws12: 80,
    remark: "",
    strong: "台风(TY)",
    time: "2025-11-11T01:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-11T01:00:00",
        data: [
          {
            lng: 118.4,
            lat: 19.9,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-11T13:00:00"
          },
          {
            lng: 118.8,
            lat: 21.3,
            power: 13,
            speed: 40,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-12T01:00:00"
          },
          {
            lng: 119.8,
            lat: 22.5,
            power: 10,
            speed: 28,
            pressure: 985,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T13:00:00"
          },
          {
            lng: 121.6,
            lat: 24,
            power: 8,
            speed: 18,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T01:00:00"
          },
          {
            lng: 124.3,
            lat: 25.9,
            power: 7,
            speed: 14,
            pressure: 1e3,
            strong: "热带低压(TD)",
            time: "2025-11-13T13:00:00"
          }
        ]
      }
    ],
    move_dir: "北",
    move_speed: 11
  },
  {
    lng: 118.3,
    lat: 19,
    power: 12,
    speed: 35,
    pressure: 970,
    radius7: 480,
    en7: 380,
    es7: 380,
    wn7: 480,
    ws7: 420,
    radius10: 220,
    en10: 200,
    es10: 180,
    wn10: 220,
    ws10: 200,
    radius12: 80,
    en12: 80,
    es12: 80,
    wn12: 80,
    ws12: 80,
    remark: "",
    strong: "台风(TY)",
    time: "2025-11-11T02:00:00",
    data: [
      {
        source: "美国",
        time: "2025-11-11T02:00:00",
        data: [
          {
            lng: 118.6,
            lat: 21.1,
            power: 10,
            speed: 28,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T02:00:00"
          },
          {
            lng: 121.1,
            lat: 23.6,
            power: 8,
            speed: 18,
            strong: "热带风暴(TS)",
            time: "2025-11-13T02:00:00"
          },
          {
            lng: 124.6,
            lat: 25.2,
            power: 7,
            speed: 15,
            strong: "热带低压(TD)",
            time: "2025-11-14T02:00:00"
          }
        ]
      },
      {
        source: "韩国",
        time: "2025-11-11T02:00:00",
        data: [
          {
            lng: 118.8,
            lat: 21.2,
            power: 11,
            speed: 29,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T02:00:00"
          },
          {
            lng: 121.7,
            lat: 23.9,
            power: 8,
            speed: 20,
            strong: "热带风暴(TS)",
            time: "2025-11-13T02:00:00"
          },
          {
            lng: 126.3,
            lat: 25.2,
            power: 8,
            speed: 20,
            strong: "热带风暴(TS)",
            time: "2025-11-14T02:00:00"
          }
        ]
      },
      {
        source: "日本",
        time: "2025-11-11T02:00:00",
        data: [
          {
            lng: 118.5,
            lat: 19.8,
            power: 12,
            speed: 35,
            pressure: 975,
            strong: "台风(TY)",
            time: "2025-11-11T14:00:00"
          },
          {
            lng: 118.7,
            lat: 20.9,
            power: 11,
            speed: 30,
            pressure: 980,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T02:00:00"
          },
          {
            lng: 121.7,
            lat: 24,
            power: 9,
            speed: 23,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T02:00:00"
          },
          {
            lng: 125.8,
            lat: 24.9,
            power: 8,
            speed: 20,
            pressure: 1002,
            strong: "热带风暴(TS)",
            time: "2025-11-14T02:00:00"
          }
        ]
      },
      {
        source: "中国",
        time: "2025-11-11T02:00:00",
        data: [
          {
            lng: 118.5,
            lat: 20.2,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-11T14:00:00"
          },
          {
            lng: 119,
            lat: 21.4,
            power: 14,
            speed: 42,
            pressure: 955,
            strong: "强台风(STY)",
            time: "2025-11-12T02:00:00"
          },
          {
            lng: 120.1,
            lat: 22.6,
            power: 10,
            speed: 28,
            pressure: 982,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T14:00:00"
          },
          {
            lng: 121.8,
            lat: 24.1,
            power: 8,
            speed: 18,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T02:00:00"
          },
          {
            lng: 124.7,
            lat: 25.7,
            power: 7,
            speed: 15,
            pressure: 1002,
            strong: "热带低压(TD)",
            time: "2025-11-13T14:00:00"
          }
        ]
      },
      {
        source: "南海所",
        time: "2025-11-11T02:00:00",
        data: [
          {
            lng: 118.3,
            lat: 19,
            power: 11,
            speed: 31,
            pressure: 981,
            strong: "强热带风暴(STS)",
            time: "2025-11-11T08:00:00"
          },
          {
            lng: 118.6,
            lat: 19.8,
            power: 10,
            speed: 27,
            pressure: 984,
            strong: "强热带风暴(STS)",
            time: "2025-11-11T14:00:00"
          },
          {
            lng: 118.9,
            lat: 20.6,
            power: 10,
            speed: 25,
            pressure: 989,
            strong: "强热带风暴(STS)",
            time: "2025-11-11T20:00:00"
          },
          {
            lng: 119,
            lat: 21.2,
            power: 10,
            speed: 25,
            pressure: 989,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T02:00:00"
          },
          {
            lng: 118.8,
            lat: 21.5,
            power: 10,
            speed: 26,
            pressure: 995,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T08:00:00"
          },
          {
            lng: 120.2,
            lat: 22.1,
            power: 9,
            speed: 21,
            pressure: 995,
            strong: "热带风暴(TS)",
            time: "2025-11-12T14:00:00"
          },
          {
            lng: 121.3,
            lat: 23.5,
            power: 9,
            speed: 21,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-12T20:00:00"
          },
          {
            lng: 121.9,
            lat: 24.4,
            power: 8,
            speed: 19,
            pressure: 996,
            strong: "热带风暴(TS)",
            time: "2025-11-13T02:00:00"
          },
          {
            lng: 122.6,
            lat: 25.5,
            power: 10,
            speed: 26,
            pressure: 999,
            strong: "强热带风暴(STS)",
            time: "2025-11-13T08:00:00"
          },
          {
            lng: 124.1,
            lat: 25.9,
            power: 10,
            speed: 28,
            pressure: 995,
            strong: "强热带风暴(STS)",
            time: "2025-11-13T14:00:00"
          },
          {
            lng: 125.4,
            lat: 26.2,
            power: 11,
            speed: 29,
            pressure: 997,
            strong: "强热带风暴(STS)",
            time: "2025-11-13T20:00:00"
          },
          {
            lng: 126.9,
            lat: 26.4,
            power: 9,
            speed: 24,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-14T02:00:00"
          },
          {
            lng: 127.2,
            lat: 26.5,
            power: 9,
            speed: 23,
            pressure: 1004,
            strong: "热带风暴(TS)",
            time: "2025-11-14T08:00:00"
          },
          {
            lng: 127.2,
            lat: 26,
            power: 8,
            speed: 19,
            pressure: 1004,
            strong: "热带风暴(TS)",
            time: "2025-11-14T14:00:00"
          },
          {
            lng: 127,
            lat: 25.1,
            power: 7,
            speed: 17,
            pressure: 1004,
            strong: "热带低压(TD)",
            time: "2025-11-14T20:00:00"
          }
        ]
      },
      {
        source: "欧洲",
        time: "2025-11-11T02:00:00",
        data: [
          {
            lng: 119,
            lat: 21.3,
            power: 10,
            speed: 28,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T02:00:00"
          }
        ]
      },
      {
        source: "菲律宾",
        time: "2025-11-11T02:00:00",
        data: [
          {
            lng: 118.5,
            lat: 21.2,
            power: 10,
            speed: 28,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T02:00:00"
          },
          {
            lng: 121.3,
            lat: 23.9,
            power: 9,
            speed: 21,
            strong: "热带风暴(TS)",
            time: "2025-11-13T02:00:00"
          }
        ]
      },
      {
        source: "中国香港",
        time: "2025-11-11T02:00:00",
        data: [
          {
            lng: 118.7,
            lat: 21.1,
            power: 12,
            speed: 36,
            strong: "台风(TY)",
            time: "2025-11-12T02:00:00"
          },
          {
            lng: 121.8,
            lat: 24.1,
            power: 9,
            speed: 24,
            strong: "热带风暴(TS)",
            time: "2025-11-13T02:00:00"
          },
          {
            lng: 127.8,
            lat: 25.7,
            power: 7,
            speed: 15,
            strong: "热带低压(TD)",
            time: "2025-11-14T02:00:00"
          }
        ]
      }
    ],
    move_dir: "北",
    move_speed: 12
  },
  {
    lng: 118.3,
    lat: 19.1,
    power: 12,
    speed: 35,
    pressure: 970,
    radius7: 480,
    en7: 380,
    es7: 380,
    wn7: 480,
    ws7: 420,
    radius10: 220,
    en10: 200,
    es10: 180,
    wn10: 220,
    ws10: 200,
    radius12: 80,
    en12: 80,
    es12: 80,
    wn12: 80,
    ws12: 80,
    remark: "",
    strong: "台风(TY)",
    time: "2025-11-11T03:00:00",
    data: [],
    move_dir: "北",
    move_speed: 11
  },
  {
    lng: 118.3,
    lat: 19.2,
    power: 12,
    speed: 35,
    pressure: 970,
    radius7: 480,
    en7: 380,
    es7: 380,
    wn7: 480,
    ws7: 420,
    radius10: 220,
    en10: 200,
    es10: 180,
    wn10: 220,
    ws10: 200,
    radius12: 80,
    en12: 80,
    es12: 80,
    wn12: 80,
    ws12: 80,
    remark: "",
    strong: "台风(TY)",
    time: "2025-11-11T04:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-11T04:00:00",
        data: [
          {
            lng: 118.6,
            lat: 20.4,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-11T16:00:00"
          },
          {
            lng: 119.2,
            lat: 21.6,
            power: 13,
            speed: 40,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-12T04:00:00"
          },
          {
            lng: 120.4,
            lat: 22.9,
            power: 10,
            speed: 25,
            pressure: 990,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T16:00:00"
          },
          {
            lng: 122.3,
            lat: 24.4,
            power: 8,
            speed: 18,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T04:00:00"
          },
          {
            lng: 125.2,
            lat: 26,
            power: 7,
            speed: 15,
            pressure: 1e3,
            strong: "热带低压(TD)",
            time: "2025-11-13T16:00:00"
          }
        ]
      }
    ],
    move_dir: "北东北",
    move_speed: 10
  },
  {
    lng: 118.3,
    lat: 19.2,
    power: 12,
    speed: 35,
    pressure: 970,
    radius7: 480,
    en7: 380,
    es7: 380,
    wn7: 480,
    ws7: 420,
    radius10: 220,
    en10: 200,
    es10: 180,
    wn10: 220,
    ws10: 200,
    radius12: 80,
    en12: 80,
    es12: 80,
    wn12: 80,
    ws12: 80,
    remark: "",
    strong: "台风(TY)",
    time: "2025-11-11T05:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-11T05:00:00",
        data: [
          {
            lng: 118.5,
            lat: 20.2,
            power: 13,
            speed: 40,
            pressure: 960,
            strong: "台风(TY)",
            time: "2025-11-11T17:00:00"
          },
          {
            lng: 119,
            lat: 21.4,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-12T05:00:00"
          },
          {
            lng: 120.1,
            lat: 22.6,
            power: 10,
            speed: 28,
            pressure: 982,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T17:00:00"
          },
          {
            lng: 122.6,
            lat: 24.5,
            power: 7,
            speed: 15,
            pressure: 1002,
            strong: "热带低压(TD)",
            time: "2025-11-13T05:00:00"
          }
        ]
      },
      {
        source: "日本",
        time: "2025-11-11T05:00:00",
        data: [
          {
            lng: 118.4,
            lat: 20.1,
            power: 12,
            speed: 35,
            pressure: 975,
            strong: "台风(TY)",
            time: "2025-11-11T17:00:00"
          },
          {
            lng: 118.8,
            lat: 21.1,
            power: 11,
            speed: 30,
            pressure: 980,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T05:00:00"
          },
          {
            lng: 121.7,
            lat: 24,
            power: 9,
            speed: 23,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T02:00:00"
          },
          {
            lng: 125.8,
            lat: 24.9,
            power: 8,
            speed: 20,
            pressure: 1002,
            strong: "热带风暴(TS)",
            time: "2025-11-14T02:00:00"
          }
        ]
      },
      {
        source: "欧洲",
        time: "2025-11-11T05:00:00",
        data: [
          {
            lng: 119.2,
            lat: 21.6,
            power: 10,
            speed: 25,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T05:00:00"
          }
        ]
      },
      {
        source: "中国香港",
        time: "2025-11-11T05:00:00",
        data: [
          {
            lng: 118.9,
            lat: 21.3,
            power: 12,
            speed: 36,
            strong: "台风(TY)",
            time: "2025-11-12T05:00:00"
          },
          {
            lng: 122.5,
            lat: 24.8,
            power: 9,
            speed: 24,
            strong: "热带风暴(TS)",
            time: "2025-11-13T05:00:00"
          },
          {
            lng: 128.5,
            lat: 25.6,
            power: 6,
            speed: 12,
            strong: "热带低压(TD)",
            time: "2025-11-14T05:00:00"
          }
        ]
      }
    ],
    move_dir: "北东北",
    move_speed: 10
  },
  {
    lng: 118.3,
    lat: 19.3,
    power: 12,
    speed: 35,
    pressure: 970,
    radius7: 480,
    en7: 380,
    es7: 380,
    wn7: 480,
    ws7: 420,
    radius10: 220,
    en10: 200,
    es10: 180,
    wn10: 220,
    ws10: 200,
    radius12: 80,
    en12: 80,
    es12: 80,
    wn12: 80,
    ws12: 80,
    remark: "",
    strong: "台风(TY)",
    time: "2025-11-11T06:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-11T06:00:00",
        data: [
          {
            lng: 118.5,
            lat: 20.3,
            power: 13,
            speed: 40,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-11T18:00:00"
          },
          {
            lng: 119.1,
            lat: 21.5,
            power: 12,
            speed: 35,
            pressure: 975,
            strong: "台风(TY)",
            time: "2025-11-12T06:00:00"
          },
          {
            lng: 120.3,
            lat: 22.8,
            power: 10,
            speed: 25,
            pressure: 990,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T18:00:00"
          },
          {
            lng: 122.8,
            lat: 24.7,
            power: 7,
            speed: 14,
            pressure: 1e3,
            strong: "热带低压(TD)",
            time: "2025-11-13T06:00:00"
          }
        ]
      }
    ],
    move_dir: "北东北",
    move_speed: 9
  },
  {
    lng: 118.2,
    lat: 19.4,
    power: 12,
    speed: 35,
    pressure: 970,
    radius7: 480,
    en7: 380,
    es7: 380,
    wn7: 480,
    ws7: 420,
    radius10: 220,
    en10: 200,
    es10: 180,
    wn10: 220,
    ws10: 200,
    radius12: 80,
    en12: 80,
    es12: 80,
    wn12: 80,
    ws12: 80,
    remark: "",
    strong: "台风(TY)",
    time: "2025-11-11T07:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-11T07:00:00",
        data: [
          {
            lng: 118.6,
            lat: 20.4,
            power: 13,
            speed: 40,
            pressure: 965,
            strong: "台风(TY)",
            time: "2025-11-11T19:00:00"
          },
          {
            lng: 119.2,
            lat: 21.6,
            power: 12,
            speed: 33,
            pressure: 975,
            strong: "台风(TY)",
            time: "2025-11-12T07:00:00"
          },
          {
            lng: 120.5,
            lat: 22.9,
            power: 10,
            speed: 25,
            pressure: 990,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T19:00:00"
          },
          {
            lng: 123,
            lat: 24.8,
            power: 6,
            speed: 13,
            pressure: 1e3,
            strong: "热带低压(TD)",
            time: "2025-11-13T07:00:00"
          }
        ]
      }
    ],
    move_dir: "北东北",
    move_speed: 8
  },
  {
    lng: 118.2,
    lat: 19.5,
    power: 12,
    speed: 35,
    pressure: 970,
    radius7: 480,
    en7: 380,
    es7: 380,
    wn7: 480,
    ws7: 420,
    radius10: 220,
    en10: 200,
    es10: 180,
    wn10: 220,
    ws10: 200,
    radius12: 80,
    en12: 80,
    es12: 80,
    wn12: 80,
    ws12: 80,
    remark: "",
    strong: "台风(TY)",
    time: "2025-11-11T08:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-11T08:00:00",
        data: [
          {
            lng: 118.4,
            lat: 20.1,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-11T14:00:00"
          },
          {
            lng: 118.6,
            lat: 20.5,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-11T20:00:00"
          },
          {
            lng: 118.8,
            lat: 21,
            power: 12,
            speed: 33,
            pressure: 975,
            strong: "台风(TY)",
            time: "2025-11-12T02:00:00"
          },
          {
            lng: 119.1,
            lat: 21.5,
            power: 12,
            speed: 33,
            pressure: 975,
            strong: "台风(TY)",
            time: "2025-11-12T08:00:00"
          },
          {
            lng: 120.7,
            lat: 22.7,
            power: 9,
            speed: 23,
            pressure: 990,
            strong: "热带风暴(TS)",
            time: "2025-11-12T20:00:00"
          },
          {
            lng: 123,
            lat: 24.8,
            power: 7,
            speed: 15,
            pressure: 1002,
            strong: "热带低压(TD)",
            time: "2025-11-13T08:00:00"
          }
        ]
      },
      {
        source: "欧洲",
        time: "2025-11-11T08:00:00",
        data: [
          {
            lng: 119.4,
            lat: 21.9,
            power: 10,
            speed: 25,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T08:00:00"
          }
        ]
      },
      {
        source: "菲律宾",
        time: "2025-11-11T08:00:00",
        data: [
          {
            lng: 119,
            lat: 21.6,
            power: 10,
            speed: 28,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T08:00:00"
          },
          {
            lng: 122.6,
            lat: 24.6,
            power: 9,
            speed: 21,
            strong: "热带风暴(TS)",
            time: "2025-11-13T08:00:00"
          }
        ]
      },
      {
        source: "美国",
        time: "2025-11-11T08:00:00",
        data: [
          {
            lng: 119.4,
            lat: 21.6,
            power: 10,
            speed: 26,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T08:00:00"
          },
          {
            lng: 122.4,
            lat: 24.3,
            power: 8,
            speed: 18,
            strong: "热带风暴(TS)",
            time: "2025-11-13T08:00:00"
          },
          {
            lng: 127.2,
            lat: 25.5,
            power: 7,
            speed: 15,
            strong: "热带低压(TD)",
            time: "2025-11-14T08:00:00"
          }
        ]
      },
      {
        source: "中国香港",
        time: "2025-11-11T08:00:00",
        data: [
          {
            lng: 119.1,
            lat: 21.5,
            power: 11,
            speed: 30,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T08:00:00"
          },
          {
            lng: 123,
            lat: 25.1,
            power: 9,
            speed: 21,
            strong: "热带风暴(TS)",
            time: "2025-11-13T08:00:00"
          },
          {
            lng: 128.6,
            lat: 25.3,
            power: 6,
            speed: 12,
            strong: "热带低压(TD)",
            time: "2025-11-14T08:00:00"
          }
        ]
      },
      {
        source: "南海所",
        time: "2025-11-11T08:00:00",
        data: [
          {
            lng: 118.4,
            lat: 19.9,
            power: 11,
            speed: 30,
            pressure: 984,
            strong: "强热带风暴(STS)",
            time: "2025-11-11T14:00:00"
          },
          {
            lng: 118.8,
            lat: 20.9,
            power: 10,
            speed: 26,
            pressure: 989,
            strong: "强热带风暴(STS)",
            time: "2025-11-11T20:00:00"
          },
          {
            lng: 119.2,
            lat: 21.4,
            power: 9,
            speed: 23,
            pressure: 991,
            strong: "热带风暴(TS)",
            time: "2025-11-12T02:00:00"
          },
          {
            lng: 119.3,
            lat: 22.1,
            power: 9,
            speed: 24,
            pressure: 994,
            strong: "热带风暴(TS)",
            time: "2025-11-12T08:00:00"
          },
          {
            lng: 120.4,
            lat: 23.3,
            power: 9,
            speed: 23,
            pressure: 996,
            strong: "热带风暴(TS)",
            time: "2025-11-12T14:00:00"
          },
          {
            lng: 120.7,
            lat: 23.2,
            power: 8,
            speed: 20,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-12T20:00:00"
          },
          {
            lng: 121.3,
            lat: 23.2,
            power: 8,
            speed: 20,
            pressure: 997,
            strong: "热带风暴(TS)",
            time: "2025-11-13T02:00:00"
          },
          {
            lng: 123.5,
            lat: 26.5,
            power: 10,
            speed: 26,
            pressure: 1e3,
            strong: "强热带风暴(STS)",
            time: "2025-11-13T08:00:00"
          },
          {
            lng: 124.1,
            lat: 26.3,
            power: 10,
            speed: 26,
            pressure: 1e3,
            strong: "强热带风暴(STS)",
            time: "2025-11-13T14:00:00"
          },
          {
            lng: 124.8,
            lat: 25.7,
            power: 9,
            speed: 22,
            pressure: 1003,
            strong: "热带风暴(TS)",
            time: "2025-11-13T20:00:00"
          },
          {
            lng: 125.8,
            lat: 25.8,
            power: 9,
            speed: 21,
            pressure: 1003,
            strong: "热带风暴(TS)",
            time: "2025-11-14T02:00:00"
          },
          {
            lng: 126.5,
            lat: 25.9,
            power: 8,
            speed: 19,
            pressure: 1004,
            strong: "热带风暴(TS)",
            time: "2025-11-14T08:00:00"
          },
          {
            lng: 126.8,
            lat: 25.6,
            power: 7,
            speed: 16,
            pressure: 1004,
            strong: "热带低压(TD)",
            time: "2025-11-14T14:00:00"
          }
        ]
      },
      {
        source: "日本",
        time: "2025-11-11T08:00:00",
        data: [
          {
            lng: 118.2,
            lat: 20.6,
            power: 11,
            speed: 30,
            pressure: 985,
            strong: "强热带风暴(STS)",
            time: "2025-11-11T20:00:00"
          },
          {
            lng: 118.9,
            lat: 21.3,
            power: 10,
            speed: 25,
            pressure: 990,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T08:00:00"
          },
          {
            lng: 122.5,
            lat: 24.8,
            power: 9,
            speed: 23,
            pressure: 1e3,
            strong: "热带风暴(TS)",
            time: "2025-11-13T08:00:00"
          },
          {
            lng: 126.9,
            lat: 24.5,
            power: 8,
            speed: 20,
            pressure: 1006,
            strong: "热带风暴(TS)",
            time: "2025-11-14T08:00:00"
          }
        ]
      },
      {
        source: "韩国",
        time: "2025-11-11T08:00:00",
        data: [
          {
            lng: 118.5,
            lat: 20.6,
            power: 11,
            speed: 32,
            pressure: 975,
            strong: "强热带风暴(STS)",
            time: "2025-11-11T20:00:00"
          },
          {
            lng: 119.3,
            lat: 21.8,
            power: 11,
            speed: 29,
            pressure: 980,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T08:00:00"
          },
          {
            lng: 123.1,
            lat: 24.7,
            power: 8,
            speed: 20,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T08:00:00"
          },
          {
            lng: 127.1,
            lat: 24.9,
            power: 8,
            speed: 19,
            pressure: 1004,
            strong: "热带风暴(TS)",
            time: "2025-11-14T08:00:00"
          }
        ]
      }
    ],
    move_dir: "北东北",
    move_speed: 10
  },
  {
    lng: 118.2,
    lat: 19.6,
    power: 12,
    speed: 35,
    pressure: 970,
    radius7: 480,
    en7: 380,
    es7: 380,
    wn7: 480,
    ws7: 420,
    radius10: 220,
    en10: 200,
    es10: 180,
    wn10: 220,
    ws10: 200,
    radius12: 80,
    en12: 80,
    es12: 80,
    wn12: 80,
    ws12: 80,
    remark: "",
    strong: "台风(TY)",
    time: "2025-11-11T09:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-11T09:00:00",
        data: [
          {
            lng: 118.4,
            lat: 20.2,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-11T15:00:00"
          },
          {
            lng: 118.6,
            lat: 20.6,
            power: 12,
            speed: 35,
            pressure: 975,
            strong: "台风(TY)",
            time: "2025-11-11T21:00:00"
          },
          {
            lng: 118.8,
            lat: 21.1,
            power: 12,
            speed: 33,
            pressure: 975,
            strong: "台风(TY)",
            time: "2025-11-12T03:00:00"
          },
          {
            lng: 119.2,
            lat: 21.6,
            power: 11,
            speed: 30,
            pressure: 980,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T09:00:00"
          },
          {
            lng: 120.9,
            lat: 22.9,
            power: 8,
            speed: 20,
            pressure: 995,
            strong: "热带风暴(TS)",
            time: "2025-11-12T21:00:00"
          },
          {
            lng: 123.2,
            lat: 25,
            power: 7,
            speed: 14,
            pressure: 1e3,
            strong: "热带低压(TD)",
            time: "2025-11-13T09:00:00"
          }
        ]
      }
    ],
    move_dir: "北东北",
    move_speed: 10
  },
  {
    lng: 118.3,
    lat: 19.7,
    power: 12,
    speed: 35,
    pressure: 970,
    radius7: 480,
    en7: 380,
    es7: 380,
    wn7: 480,
    ws7: 420,
    radius10: 220,
    en10: 200,
    es10: 180,
    wn10: 220,
    ws10: 200,
    radius12: 80,
    en12: 80,
    es12: 80,
    wn12: 80,
    ws12: 80,
    remark: "",
    strong: "台风(TY)",
    time: "2025-11-11T10:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-11T10:00:00",
        data: [
          {
            lng: 118.5,
            lat: 20.2,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-11T16:00:00"
          },
          {
            lng: 118.7,
            lat: 20.7,
            power: 12,
            speed: 35,
            pressure: 975,
            strong: "台风(TY)",
            time: "2025-11-11T22:00:00"
          },
          {
            lng: 118.9,
            lat: 21.2,
            power: 12,
            speed: 33,
            pressure: 975,
            strong: "台风(TY)",
            time: "2025-11-12T04:00:00"
          },
          {
            lng: 119.4,
            lat: 21.7,
            power: 11,
            speed: 30,
            pressure: 982,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T10:00:00"
          },
          {
            lng: 121.1,
            lat: 23,
            power: 8,
            speed: 20,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-12T22:00:00"
          },
          {
            lng: 123.4,
            lat: 25.1,
            power: 7,
            speed: 14,
            pressure: 1e3,
            strong: "热带低压(TD)",
            time: "2025-11-13T10:00:00"
          }
        ]
      }
    ],
    move_dir: "北东北",
    move_speed: 10
  },
  {
    lng: 118.4,
    lat: 19.8,
    power: 12,
    speed: 35,
    pressure: 970,
    radius7: 480,
    en7: 380,
    es7: 380,
    wn7: 480,
    ws7: 420,
    radius10: 220,
    en10: 200,
    es10: 180,
    wn10: 220,
    ws10: 200,
    radius12: 80,
    en12: 80,
    es12: 80,
    wn12: 80,
    ws12: 80,
    remark: "",
    strong: "台风(TY)",
    time: "2025-11-11T11:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-11T11:00:00",
        data: [
          {
            lng: 118.5,
            lat: 20.3,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-11T17:00:00"
          },
          {
            lng: 118.6,
            lat: 20.8,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-11T23:00:00"
          },
          {
            lng: 118.9,
            lat: 21.3,
            power: 12,
            speed: 33,
            pressure: 975,
            strong: "台风(TY)",
            time: "2025-11-12T05:00:00"
          },
          {
            lng: 119.3,
            lat: 21.8,
            power: 11,
            speed: 30,
            pressure: 980,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T11:00:00"
          },
          {
            lng: 120.9,
            lat: 23,
            power: 8,
            speed: 18,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-12T23:00:00"
          },
          {
            lng: 123.4,
            lat: 24.9,
            power: 7,
            speed: 15,
            pressure: 1002,
            strong: "热带低压(TD)",
            time: "2025-11-13T11:00:00"
          }
        ]
      },
      {
        source: "中国香港",
        time: "2025-11-11T11:00:00",
        data: [
          {
            lng: 119.3,
            lat: 21.7,
            power: 11,
            speed: 29,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T11:00:00"
          },
          {
            lng: 123.8,
            lat: 25.5,
            power: 9,
            speed: 21,
            strong: "热带风暴(TS)",
            time: "2025-11-13T11:00:00"
          },
          {
            lng: 128.9,
            lat: 25.2,
            power: 6,
            speed: 12,
            strong: "热带低压(TD)",
            time: "2025-11-14T11:00:00"
          }
        ]
      },
      {
        source: "日本",
        time: "2025-11-11T11:00:00",
        data: [
          {
            lng: 118.3,
            lat: 20.8,
            power: 11,
            speed: 30,
            pressure: 985,
            strong: "强热带风暴(STS)",
            time: "2025-11-11T23:00:00"
          },
          {
            lng: 119.1,
            lat: 21.6,
            power: 10,
            speed: 25,
            pressure: 990,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T11:00:00"
          },
          {
            lng: 122.5,
            lat: 24.8,
            power: 9,
            speed: 23,
            pressure: 1e3,
            strong: "热带风暴(TS)",
            time: "2025-11-13T08:00:00"
          },
          {
            lng: 126.9,
            lat: 24.5,
            power: 8,
            speed: 20,
            pressure: 1006,
            strong: "热带风暴(TS)",
            time: "2025-11-14T08:00:00"
          }
        ]
      },
      {
        source: "欧洲",
        time: "2025-11-11T11:00:00",
        data: [
          {
            lng: 119.5,
            lat: 21.9,
            power: 10,
            speed: 25,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T11:00:00"
          }
        ]
      }
    ],
    move_dir: "北东北",
    move_speed: 10
  },
  {
    lng: 118.5,
    lat: 19.9,
    power: 12,
    speed: 35,
    pressure: 970,
    radius7: 480,
    en7: 380,
    es7: 380,
    wn7: 480,
    ws7: 420,
    radius10: 220,
    en10: 200,
    es10: 180,
    wn10: 220,
    ws10: 200,
    radius12: 80,
    en12: 80,
    es12: 80,
    wn12: 80,
    ws12: 80,
    remark: "",
    strong: "台风(TY)",
    time: "2025-11-11T12:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-11T12:00:00",
        data: [
          {
            lng: 118.5,
            lat: 20.4,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-11T18:00:00"
          },
          {
            lng: 118.7,
            lat: 20.9,
            power: 12,
            speed: 35,
            pressure: 975,
            strong: "台风(TY)",
            time: "2025-11-12T00:00:00"
          },
          {
            lng: 119,
            lat: 21.4,
            power: 12,
            speed: 33,
            pressure: 980,
            strong: "台风(TY)",
            time: "2025-11-12T06:00:00"
          },
          {
            lng: 119.4,
            lat: 21.9,
            power: 10,
            speed: 28,
            pressure: 990,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T12:00:00"
          },
          {
            lng: 121.1,
            lat: 23.2,
            power: 8,
            speed: 18,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T00:00:00"
          },
          {
            lng: 123.6,
            lat: 25.1,
            power: 7,
            speed: 15,
            pressure: 1e3,
            strong: "热带低压(TD)",
            time: "2025-11-13T12:00:00"
          }
        ]
      }
    ],
    move_dir: "北东北",
    move_speed: 10
  },
  {
    lng: 118.6,
    lat: 20,
    power: 12,
    speed: 35,
    pressure: 970,
    radius7: 480,
    en7: 380,
    es7: 380,
    wn7: 480,
    ws7: 420,
    radius10: 220,
    en10: 200,
    es10: 180,
    wn10: 220,
    ws10: 200,
    radius12: 80,
    en12: 80,
    es12: 80,
    wn12: 80,
    ws12: 80,
    remark: "",
    strong: "台风(TY)",
    time: "2025-11-11T13:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-11T13:00:00",
        data: [
          {
            lng: 118.5,
            lat: 20.5,
            power: 12,
            speed: 35,
            pressure: 970,
            strong: "台风(TY)",
            time: "2025-11-11T19:00:00"
          },
          {
            lng: 118.7,
            lat: 21,
            power: 12,
            speed: 35,
            pressure: 975,
            strong: "台风(TY)",
            time: "2025-11-12T01:00:00"
          },
          {
            lng: 119,
            lat: 21.5,
            power: 12,
            speed: 33,
            pressure: 980,
            strong: "台风(TY)",
            time: "2025-11-12T07:00:00"
          },
          {
            lng: 119.6,
            lat: 22,
            power: 10,
            speed: 25,
            pressure: 990,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T13:00:00"
          },
          {
            lng: 121.3,
            lat: 23.3,
            power: 8,
            speed: 18,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T01:00:00"
          },
          {
            lng: 123.8,
            lat: 25.2,
            power: 7,
            speed: 15,
            pressure: 1e3,
            strong: "热带低压(TD)",
            time: "2025-11-13T13:00:00"
          }
        ]
      }
    ],
    move_dir: "北",
    move_speed: 8
  },
  {
    lng: 118.7,
    lat: 20.1,
    power: 12,
    speed: 33,
    pressure: 975,
    radius7: 480,
    en7: 380,
    es7: 380,
    wn7: 480,
    ws7: 420,
    radius10: 220,
    en10: 200,
    es10: 180,
    wn10: 220,
    ws10: 200,
    radius12: 80,
    en12: 80,
    es12: 80,
    wn12: 80,
    ws12: 80,
    remark: "",
    strong: "台风(TY)",
    time: "2025-11-11T14:00:00",
    data: [
      {
        source: "菲律宾",
        time: "2025-11-11T14:00:00",
        data: [
          {
            lng: 120.1,
            lat: 22.3,
            power: 9,
            speed: 23,
            strong: "热带风暴(TS)",
            time: "2025-11-12T14:00:00"
          },
          {
            lng: 124.4,
            lat: 24.8,
            power: 6,
            speed: 13,
            strong: "热带低压(TD)",
            time: "2025-11-13T14:00:00"
          }
        ]
      },
      {
        source: "美国",
        time: "2025-11-11T14:00:00",
        data: [
          {
            lng: 120.1,
            lat: 22.2,
            power: 9,
            speed: 21,
            strong: "热带风暴(TS)",
            time: "2025-11-12T14:00:00"
          },
          {
            lng: 124.7,
            lat: 25.2,
            power: 7,
            speed: 15,
            strong: "热带低压(TD)",
            time: "2025-11-13T14:00:00"
          },
          {
            lng: 128.7,
            lat: 25.4,
            power: 6,
            speed: 13,
            strong: "热带低压(TD)",
            time: "2025-11-14T14:00:00"
          }
        ]
      },
      {
        source: "韩国",
        time: "2025-11-11T14:00:00",
        data: [
          {
            lng: 119.9,
            lat: 22.1,
            power: 10,
            speed: 27,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T14:00:00"
          },
          {
            lng: 124.2,
            lat: 24.9,
            power: 8,
            speed: 19,
            strong: "热带风暴(TS)",
            time: "2025-11-13T14:00:00"
          }
        ]
      },
      {
        source: "日本",
        time: "2025-11-11T14:00:00",
        data: [
          {
            lng: 118.8,
            lat: 21,
            power: 11,
            speed: 30,
            pressure: 985,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T02:00:00"
          },
          {
            lng: 119.7,
            lat: 21.9,
            power: 10,
            speed: 25,
            pressure: 990,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T14:00:00"
          },
          {
            lng: 124.5,
            lat: 26,
            power: 9,
            speed: 23,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T14:00:00"
          },
          {
            lng: 128.2,
            lat: 24.4,
            power: 8,
            speed: 18,
            pressure: 1006,
            strong: "热带风暴(TS)",
            time: "2025-11-14T14:00:00"
          }
        ]
      },
      {
        source: "欧洲",
        time: "2025-11-11T14:00:00",
        data: [
          {
            lng: 119.7,
            lat: 22.1,
            power: 8,
            speed: 20,
            strong: "热带风暴(TS)",
            time: "2025-11-12T14:00:00"
          },
          {
            lng: 124.4,
            lat: 25,
            power: 7,
            speed: 15,
            strong: "热带低压(TD)",
            time: "2025-11-13T14:00:00"
          }
        ]
      },
      {
        source: "中国香港",
        time: "2025-11-11T14:00:00",
        data: [
          {
            lng: 119.8,
            lat: 21.9,
            power: 10,
            speed: 25,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T14:00:00"
          },
          {
            lng: 125,
            lat: 25.8,
            power: 8,
            speed: 18,
            strong: "热带风暴(TS)",
            time: "2025-11-13T14:00:00"
          },
          {
            lng: 130.6,
            lat: 25.3,
            power: 6,
            speed: 11,
            strong: "热带低压(TD)",
            time: "2025-11-14T14:00:00"
          }
        ]
      },
      {
        source: "中国",
        time: "2025-11-11T14:00:00",
        data: [
          {
            lng: 118.9,
            lat: 20.6,
            power: 11,
            speed: 30,
            pressure: 980,
            strong: "强热带风暴(STS)",
            time: "2025-11-11T20:00:00"
          },
          {
            lng: 119.1,
            lat: 21.1,
            power: 10,
            speed: 28,
            pressure: 982,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T02:00:00"
          },
          {
            lng: 119.6,
            lat: 21.7,
            power: 10,
            speed: 25,
            pressure: 980,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T08:00:00"
          },
          {
            lng: 120.1,
            lat: 22.1,
            power: 9,
            speed: 23,
            pressure: 990,
            strong: "热带风暴(TS)",
            time: "2025-11-12T14:00:00"
          },
          {
            lng: 121.8,
            lat: 23.2,
            power: 7,
            speed: 15,
            pressure: 1002,
            strong: "热带低压(TD)",
            time: "2025-11-13T02:00:00"
          }
        ]
      }
    ],
    move_dir: "北东北",
    move_speed: 10
  },
  {
    lng: 118.7,
    lat: 20.1,
    power: 12,
    speed: 33,
    pressure: 975,
    radius7: 320,
    en7: 320,
    es7: 280,
    wn7: 300,
    ws7: 220,
    radius10: 120,
    en10: 120,
    es10: 100,
    wn10: 120,
    ws10: 100,
    radius12: 80,
    en12: 80,
    es12: 80,
    wn12: 80,
    ws12: 80,
    remark: "",
    strong: "台风(TY)",
    time: "2025-11-11T15:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-11T15:00:00",
        data: [
          {
            lng: 118.9,
            lat: 20.7,
            power: 11,
            speed: 30,
            pressure: 980,
            strong: "强热带风暴(STS)",
            time: "2025-11-11T21:00:00"
          },
          {
            lng: 119.2,
            lat: 21.2,
            power: 10,
            speed: 28,
            pressure: 982,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T03:00:00"
          },
          {
            lng: 119.7,
            lat: 21.8,
            power: 10,
            speed: 25,
            pressure: 985,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T09:00:00"
          },
          {
            lng: 120.2,
            lat: 22.2,
            power: 8,
            speed: 20,
            pressure: 995,
            strong: "热带风暴(TS)",
            time: "2025-11-12T15:00:00"
          },
          {
            lng: 121.9,
            lat: 23.3,
            power: 7,
            speed: 14,
            pressure: 1e3,
            strong: "热带低压(TD)",
            time: "2025-11-13T03:00:00"
          }
        ]
      }
    ],
    move_dir: "北东北",
    move_speed: 10
  },
  {
    lng: 118.7,
    lat: 20.2,
    power: 12,
    speed: 33,
    pressure: 975,
    radius7: 320,
    en7: 320,
    es7: 280,
    wn7: 300,
    ws7: 220,
    radius10: 120,
    en10: 120,
    es10: 100,
    wn10: 120,
    ws10: 100,
    radius12: 0,
    en12: 0,
    es12: 0,
    wn12: 0,
    ws12: 0,
    remark: "",
    strong: "台风(TY)",
    time: "2025-11-11T16:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-11T16:00:00",
        data: [
          {
            lng: 119,
            lat: 20.8,
            power: 11,
            speed: 30,
            pressure: 982,
            strong: "强热带风暴(STS)",
            time: "2025-11-11T22:00:00"
          },
          {
            lng: 119.3,
            lat: 21.3,
            power: 10,
            speed: 28,
            pressure: 982,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T04:00:00"
          },
          {
            lng: 119.8,
            lat: 21.8,
            power: 10,
            speed: 25,
            pressure: 990,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T10:00:00"
          },
          {
            lng: 120.4,
            lat: 22.3,
            power: 8,
            speed: 20,
            pressure: 995,
            strong: "热带风暴(TS)",
            time: "2025-11-12T16:00:00"
          },
          {
            lng: 122.1,
            lat: 23.4,
            power: 7,
            speed: 14,
            pressure: 1e3,
            strong: "热带低压(TD)",
            time: "2025-11-13T04:00:00"
          }
        ]
      }
    ],
    move_dir: "北东北",
    move_speed: 10
  },
  {
    lng: 118.7,
    lat: 20.3,
    power: 11,
    speed: 30,
    pressure: 980,
    radius7: 240,
    en7: 240,
    es7: 220,
    wn7: 220,
    ws7: 200,
    radius10: 100,
    en10: 100,
    es10: 80,
    wn10: 100,
    ws10: 80,
    remark: "",
    strong: "强热带风暴(STS)",
    time: "2025-11-11T17:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-11T17:00:00",
        data: [
          {
            lng: 118.9,
            lat: 20.9,
            power: 10,
            speed: 28,
            pressure: 982,
            strong: "强热带风暴(STS)",
            time: "2025-11-11T23:00:00"
          },
          {
            lng: 119.3,
            lat: 21.4,
            power: 10,
            speed: 25,
            pressure: 985,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T05:00:00"
          },
          {
            lng: 119.8,
            lat: 21.8,
            power: 10,
            speed: 25,
            pressure: 985,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T11:00:00"
          },
          {
            lng: 120.4,
            lat: 22.2,
            power: 9,
            speed: 23,
            pressure: 990,
            strong: "热带风暴(TS)",
            time: "2025-11-12T17:00:00"
          },
          {
            lng: 122,
            lat: 23.4,
            power: 7,
            speed: 15,
            pressure: 1002,
            strong: "热带低压(TD)",
            time: "2025-11-13T05:00:00"
          }
        ]
      },
      {
        source: "欧洲",
        time: "2025-11-11T17:00:00",
        data: [
          {
            lng: 120.4,
            lat: 22.2,
            power: 8,
            speed: 20,
            strong: "热带风暴(TS)",
            time: "2025-11-12T17:00:00"
          }
        ]
      },
      {
        source: "日本",
        time: "2025-11-11T17:00:00",
        data: [
          {
            lng: 119,
            lat: 21.2,
            power: 11,
            speed: 30,
            pressure: 985,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T05:00:00"
          },
          {
            lng: 120.4,
            lat: 22.1,
            power: 10,
            speed: 25,
            pressure: 990,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T17:00:00"
          },
          {
            lng: 124.5,
            lat: 26,
            power: 9,
            speed: 23,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T14:00:00"
          },
          {
            lng: 128.2,
            lat: 24.4,
            power: 8,
            speed: 18,
            pressure: 1006,
            strong: "热带风暴(TS)",
            time: "2025-11-14T14:00:00"
          }
        ]
      },
      {
        source: "中国香港",
        time: "2025-11-11T17:00:00",
        data: [
          {
            lng: 120.4,
            lat: 22.2,
            power: 9,
            speed: 24,
            strong: "热带风暴(TS)",
            time: "2025-11-12T17:00:00"
          },
          {
            lng: 126,
            lat: 26,
            power: 7,
            speed: 15,
            strong: "热带低压(TD)",
            time: "2025-11-13T17:00:00"
          }
        ]
      }
    ],
    move_dir: "北东北",
    move_speed: 12
  },
  {
    lng: 118.7,
    lat: 20.4,
    power: 11,
    speed: 30,
    pressure: 980,
    radius7: 240,
    en7: 240,
    es7: 220,
    wn7: 220,
    ws7: 200,
    radius10: 100,
    en10: 100,
    es10: 80,
    wn10: 100,
    ws10: 80,
    radius12: 0,
    en12: 0,
    es12: 0,
    wn12: 0,
    ws12: 0,
    remark: "",
    strong: "强热带风暴(STS)",
    time: "2025-11-11T18:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-11T18:00:00",
        data: [
          {
            lng: 119,
            lat: 21,
            power: 10,
            speed: 28,
            pressure: 985,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T00:00:00"
          },
          {
            lng: 119.4,
            lat: 21.5,
            power: 10,
            speed: 25,
            pressure: 985,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T06:00:00"
          },
          {
            lng: 119.9,
            lat: 21.9,
            power: 10,
            speed: 25,
            pressure: 990,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T12:00:00"
          },
          {
            lng: 120.5,
            lat: 22.3,
            power: 8,
            speed: 20,
            pressure: 995,
            strong: "热带风暴(TS)",
            time: "2025-11-12T18:00:00"
          },
          {
            lng: 122.1,
            lat: 23.5,
            power: 7,
            speed: 14,
            pressure: 1e3,
            strong: "热带低压(TD)",
            time: "2025-11-13T06:00:00"
          }
        ]
      }
    ],
    move_dir: "北东北",
    move_speed: 12
  },
  {
    lng: 118.7,
    lat: 20.5,
    power: 11,
    speed: 30,
    pressure: 980,
    radius7: 240,
    en7: 240,
    es7: 220,
    wn7: 220,
    ws7: 200,
    radius10: 100,
    en10: 100,
    es10: 80,
    wn10: 100,
    ws10: 80,
    remark: "",
    strong: "强热带风暴(STS)",
    time: "2025-11-11T19:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-11T19:00:00",
        data: [
          {
            lng: 119,
            lat: 21.1,
            power: 10,
            speed: 28,
            pressure: 985,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T01:00:00"
          },
          {
            lng: 119.5,
            lat: 21.5,
            power: 10,
            speed: 25,
            pressure: 985,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T07:00:00"
          },
          {
            lng: 120,
            lat: 21.9,
            power: 10,
            speed: 25,
            pressure: 990,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T13:00:00"
          },
          {
            lng: 120.7,
            lat: 22.4,
            power: 8,
            speed: 20,
            pressure: 995,
            strong: "热带风暴(TS)",
            time: "2025-11-12T19:00:00"
          },
          {
            lng: 122.3,
            lat: 23.6,
            power: 7,
            speed: 14,
            pressure: 1e3,
            strong: "热带低压(TD)",
            time: "2025-11-13T07:00:00"
          }
        ]
      }
    ],
    move_dir: "北东北",
    move_speed: 12
  },
  {
    lng: 118.8,
    lat: 20.7,
    power: 10,
    speed: 28,
    pressure: 982,
    radius7: 240,
    en7: 240,
    es7: 220,
    wn7: 220,
    ws7: 200,
    radius10: 100,
    en10: 100,
    es10: 100,
    wn10: 100,
    ws10: 80,
    remark: "",
    strong: "强热带风暴(STS)",
    time: "2025-11-11T20:00:00",
    data: [
      {
        source: "南海所",
        time: "2025-11-11T20:00:00",
        data: [
          {
            lng: 118.7,
            lat: 21.4,
            power: 10,
            speed: 26,
            pressure: 992,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T02:00:00"
          },
          {
            lng: 119.1,
            lat: 21.5,
            power: 9,
            speed: 22,
            pressure: 996,
            strong: "热带风暴(TS)",
            time: "2025-11-12T08:00:00"
          },
          {
            lng: 119.6,
            lat: 22,
            power: 8,
            speed: 20,
            pressure: 996,
            strong: "热带风暴(TS)",
            time: "2025-11-12T14:00:00"
          },
          {
            lng: 120.9,
            lat: 23.2,
            power: 8,
            speed: 19,
            pressure: 999,
            strong: "热带风暴(TS)",
            time: "2025-11-12T20:00:00"
          },
          {
            lng: 121.4,
            lat: 23.8,
            power: 8,
            speed: 19,
            pressure: 1e3,
            strong: "热带风暴(TS)",
            time: "2025-11-13T02:00:00"
          },
          {
            lng: 122.7,
            lat: 25.1,
            power: 10,
            speed: 25,
            pressure: 1001,
            strong: "强热带风暴(STS)",
            time: "2025-11-13T08:00:00"
          },
          {
            lng: 124.4,
            lat: 25.7,
            power: 9,
            speed: 24,
            pressure: 1e3,
            strong: "热带风暴(TS)",
            time: "2025-11-13T14:00:00"
          },
          {
            lng: 126.4,
            lat: 26,
            power: 9,
            speed: 22,
            pressure: 1002,
            strong: "热带风暴(TS)",
            time: "2025-11-13T20:00:00"
          },
          {
            lng: 127.2,
            lat: 26.2,
            power: 9,
            speed: 21,
            pressure: 1003,
            strong: "热带风暴(TS)",
            time: "2025-11-14T02:00:00"
          },
          {
            lng: 128,
            lat: 26.1,
            power: 9,
            speed: 21,
            pressure: 1004,
            strong: "热带风暴(TS)",
            time: "2025-11-14T08:00:00"
          },
          {
            lng: 127.6,
            lat: 26,
            power: 8,
            speed: 18,
            pressure: 1004,
            strong: "热带风暴(TS)",
            time: "2025-11-14T14:00:00"
          }
        ]
      },
      {
        source: "美国",
        time: "2025-11-11T20:00:00",
        data: [
          {
            lng: 121.1,
            lat: 22.4,
            power: 9,
            speed: 21,
            strong: "热带风暴(TS)",
            time: "2025-11-12T20:00:00"
          },
          {
            lng: 126.1,
            lat: 25.1,
            power: 8,
            speed: 18,
            strong: "热带风暴(TS)",
            time: "2025-11-13T20:00:00"
          },
          {
            lng: 131.5,
            lat: 24.7,
            power: 7,
            speed: 15,
            strong: "热带低压(TD)",
            time: "2025-11-14T20:00:00"
          }
        ]
      },
      {
        source: "菲律宾",
        time: "2025-11-11T20:00:00",
        data: [
          {
            lng: 120.7,
            lat: 22.5,
            power: 9,
            speed: 21,
            strong: "热带风暴(TS)",
            time: "2025-11-12T20:00:00"
          },
          {
            lng: 125.5,
            lat: 25.1,
            power: 6,
            speed: 13,
            strong: "热带低压(TD)",
            time: "2025-11-13T20:00:00"
          }
        ]
      },
      {
        source: "中国",
        time: "2025-11-11T20:00:00",
        data: [
          {
            lng: 119,
            lat: 21.2,
            power: 10,
            speed: 25,
            pressure: 985,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T02:00:00"
          },
          {
            lng: 119.2,
            lat: 21.5,
            power: 10,
            speed: 25,
            pressure: 985,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T08:00:00"
          },
          {
            lng: 119.8,
            lat: 21.8,
            power: 9,
            speed: 23,
            pressure: 990,
            strong: "热带风暴(TS)",
            time: "2025-11-12T14:00:00"
          },
          {
            lng: 120.8,
            lat: 22.2,
            power: 9,
            speed: 23,
            pressure: 990,
            strong: "热带风暴(TS)",
            time: "2025-11-12T20:00:00"
          },
          {
            lng: 123.5,
            lat: 24.8,
            power: 7,
            speed: 15,
            pressure: 1002,
            strong: "热带低压(TD)",
            time: "2025-11-13T08:00:00"
          }
        ]
      },
      {
        source: "日本",
        time: "2025-11-11T20:00:00",
        data: [
          {
            lng: 119.2,
            lat: 21.3,
            power: 10,
            speed: 25,
            pressure: 985,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T08:00:00"
          },
          {
            lng: 120.7,
            lat: 22,
            power: 9,
            speed: 23,
            strong: "热带风暴(TS)",
            time: "2025-11-12T20:00:00"
          },
          {
            lng: 126.3,
            lat: 25.5,
            power: 9,
            speed: 23,
            strong: "热带风暴(TS)",
            time: "2025-11-13T20:00:00"
          }
        ]
      },
      {
        source: "中国香港",
        time: "2025-11-11T20:00:00",
        data: [
          {
            lng: 120.9,
            lat: 22.5,
            power: 8,
            speed: 18,
            strong: "热带风暴(TS)",
            time: "2025-11-12T20:00:00"
          },
          {
            lng: 126.9,
            lat: 25.6,
            power: 6,
            speed: 12,
            strong: "热带低压(TD)",
            time: "2025-11-13T20:00:00"
          }
        ]
      },
      {
        source: "欧洲",
        time: "2025-11-11T20:00:00",
        data: [
          {
            lng: 120.7,
            lat: 22.4,
            power: 8,
            speed: 20,
            strong: "热带风暴(TS)",
            time: "2025-11-12T20:00:00"
          }
        ]
      },
      {
        source: "韩国",
        time: "2025-11-11T20:00:00",
        data: [
          {
            lng: 119.3,
            lat: 21.6,
            power: 10,
            speed: 27,
            pressure: 985,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T08:00:00"
          },
          {
            lng: 120.8,
            lat: 22.5,
            power: 9,
            speed: 24,
            pressure: 990,
            strong: "热带风暴(TS)",
            time: "2025-11-12T20:00:00"
          },
          {
            lng: 125.8,
            lat: 25.2,
            power: 7,
            speed: 17,
            pressure: 1002,
            strong: "热带低压(TD)",
            time: "2025-11-13T20:00:00"
          }
        ]
      }
    ],
    move_dir: "北东北",
    move_speed: 9
  },
  {
    lng: 118.8,
    lat: 20.8,
    power: 10,
    speed: 28,
    pressure: 982,
    radius7: 240,
    en7: 240,
    es7: 220,
    wn7: 220,
    ws7: 200,
    radius10: 100,
    en10: 100,
    es10: 100,
    wn10: 100,
    ws10: 80,
    remark: "",
    strong: "强热带风暴(STS)",
    time: "2025-11-11T21:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-11T21:00:00",
        data: [
          {
            lng: 119,
            lat: 21.3,
            power: 10,
            speed: 25,
            pressure: 985,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T03:00:00"
          },
          {
            lng: 119.3,
            lat: 21.5,
            power: 10,
            speed: 25,
            pressure: 990,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T09:00:00"
          },
          {
            lng: 120,
            lat: 21.9,
            power: 9,
            speed: 23,
            pressure: 990,
            strong: "热带风暴(TS)",
            time: "2025-11-12T15:00:00"
          },
          {
            lng: 121,
            lat: 22.4,
            power: 8,
            speed: 20,
            pressure: 995,
            strong: "热带风暴(TS)",
            time: "2025-11-12T21:00:00"
          },
          {
            lng: 123.7,
            lat: 25,
            power: 7,
            speed: 14,
            pressure: 1e3,
            strong: "热带低压(TD)",
            time: "2025-11-13T09:00:00"
          }
        ]
      }
    ],
    move_dir: "北东北",
    move_speed: 9
  },
  {
    lng: 118.8,
    lat: 20.8,
    power: 10,
    speed: 28,
    pressure: 982,
    radius7: 240,
    en7: 240,
    es7: 220,
    wn7: 220,
    ws7: 200,
    radius10: 100,
    en10: 100,
    es10: 100,
    wn10: 100,
    ws10: 80,
    radius12: 0,
    en12: 0,
    es12: 0,
    wn12: 0,
    ws12: 0,
    remark: "",
    strong: "强热带风暴(STS)",
    time: "2025-11-11T22:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-11T22:00:00",
        data: [
          {
            lng: 119.1,
            lat: 21.3,
            power: 10,
            speed: 25,
            pressure: 985,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T04:00:00"
          },
          {
            lng: 119.4,
            lat: 21.6,
            power: 10,
            speed: 25,
            pressure: 990,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T10:00:00"
          },
          {
            lng: 120.1,
            lat: 21.9,
            power: 9,
            speed: 23,
            pressure: 990,
            strong: "热带风暴(TS)",
            time: "2025-11-12T16:00:00"
          },
          {
            lng: 121.3,
            lat: 22.6,
            power: 8,
            speed: 20,
            pressure: 995,
            strong: "热带风暴(TS)",
            time: "2025-11-12T22:00:00"
          },
          {
            lng: 123.9,
            lat: 25.2,
            power: 7,
            speed: 14,
            pressure: 1e3,
            strong: "热带低压(TD)",
            time: "2025-11-13T10:00:00"
          }
        ]
      }
    ],
    move_dir: "北东北",
    move_speed: 9
  },
  {
    lng: 118.8,
    lat: 20.9,
    power: 10,
    speed: 28,
    pressure: 982,
    radius7: 240,
    en7: 240,
    es7: 220,
    wn7: 220,
    ws7: 200,
    radius10: 100,
    en10: 100,
    es10: 100,
    wn10: 100,
    ws10: 80,
    remark: "",
    strong: "强热带风暴(STS)",
    time: "2025-11-11T23:00:00",
    data: [
      {
        source: "欧洲",
        time: "2025-11-11T23:00:00",
        data: [
          {
            lng: 121.3,
            lat: 22.6,
            power: 8,
            speed: 18,
            strong: "热带风暴(TS)",
            time: "2025-11-12T23:00:00"
          }
        ]
      },
      {
        source: "日本",
        time: "2025-11-11T23:00:00",
        data: [
          {
            lng: 119.4,
            lat: 21.4,
            power: 10,
            speed: 25,
            pressure: 985,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T11:00:00"
          },
          {
            lng: 121.2,
            lat: 22.5,
            power: 9,
            speed: 23,
            pressure: 992,
            strong: "热带风暴(TS)",
            time: "2025-11-12T23:00:00"
          },
          {
            lng: 126.3,
            lat: 25.5,
            power: 9,
            speed: 23,
            pressure: 1004,
            strong: "热带风暴(TS)",
            time: "2025-11-13T20:00:00"
          }
        ]
      },
      {
        source: "中国香港",
        time: "2025-11-11T23:00:00",
        data: [
          {
            lng: 121.4,
            lat: 23.1,
            power: 8,
            speed: 18,
            strong: "热带风暴(TS)",
            time: "2025-11-12T23:00:00"
          },
          {
            lng: 127.4,
            lat: 25.6,
            power: 6,
            speed: 12,
            strong: "热带低压(TD)",
            time: "2025-11-13T23:00:00"
          }
        ]
      },
      {
        source: "中国",
        time: "2025-11-11T23:00:00",
        data: [
          {
            lng: 118.9,
            lat: 21.3,
            power: 10,
            speed: 25,
            pressure: 985,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T05:00:00"
          },
          {
            lng: 119.4,
            lat: 21.7,
            power: 9,
            speed: 23,
            pressure: 985,
            strong: "热带风暴(TS)",
            time: "2025-11-12T11:00:00"
          },
          {
            lng: 120.4,
            lat: 22.1,
            power: 9,
            speed: 23,
            pressure: 990,
            strong: "热带风暴(TS)",
            time: "2025-11-12T17:00:00"
          },
          {
            lng: 121.4,
            lat: 22.6,
            power: 8,
            speed: 20,
            pressure: 995,
            strong: "热带风暴(TS)",
            time: "2025-11-12T23:00:00"
          },
          {
            lng: 124.3,
            lat: 25.1,
            power: 7,
            speed: 15,
            pressure: 1002,
            strong: "热带低压(TD)",
            time: "2025-11-13T11:00:00"
          }
        ]
      }
    ],
    move_dir: "东北",
    move_speed: 10
  },
  {
    lng: 118.9,
    lat: 21,
    power: 10,
    speed: 28,
    pressure: 982,
    radius7: 240,
    en7: 240,
    es7: 220,
    wn7: 220,
    ws7: 200,
    radius10: 100,
    en10: 100,
    es10: 100,
    wn10: 100,
    ws10: 80,
    remark: "",
    strong: "强热带风暴(STS)",
    time: "2025-11-12T00:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-12T00:00:00",
        data: [
          {
            lng: 119,
            lat: 21.4,
            power: 10,
            speed: 25,
            pressure: 985,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T06:00:00"
          },
          {
            lng: 119.6,
            lat: 21.8,
            power: 9,
            speed: 23,
            pressure: 990,
            strong: "热带风暴(TS)",
            time: "2025-11-12T12:00:00"
          },
          {
            lng: 120.6,
            lat: 22.2,
            power: 9,
            speed: 23,
            pressure: 995,
            strong: "热带风暴(TS)",
            time: "2025-11-12T18:00:00"
          },
          {
            lng: 121.6,
            lat: 22.8,
            power: 8,
            speed: 18,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T00:00:00"
          },
          {
            lng: 124.5,
            lat: 25.3,
            power: 7,
            speed: 15,
            pressure: 1e3,
            strong: "热带低压(TD)",
            time: "2025-11-13T12:00:00"
          }
        ]
      }
    ],
    move_dir: "东北",
    move_speed: 10
  },
  {
    lng: 119,
    lat: 21.1,
    power: 10,
    speed: 28,
    pressure: 982,
    radius7: 240,
    en7: 240,
    es7: 220,
    wn7: 220,
    ws7: 200,
    radius10: 100,
    en10: 100,
    es10: 100,
    wn10: 100,
    ws10: 80,
    remark: "",
    strong: "强热带风暴(STS)",
    time: "2025-11-12T01:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-12T01:00:00",
        data: [
          {
            lng: 119.1,
            lat: 21.4,
            power: 10,
            speed: 25,
            pressure: 985,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T07:00:00"
          },
          {
            lng: 119.7,
            lat: 21.8,
            power: 9,
            speed: 23,
            pressure: 990,
            strong: "热带风暴(TS)",
            time: "2025-11-12T13:00:00"
          },
          {
            lng: 120.7,
            lat: 22.3,
            power: 9,
            speed: 23,
            pressure: 995,
            strong: "热带风暴(TS)",
            time: "2025-11-12T19:00:00"
          },
          {
            lng: 121.9,
            lat: 23,
            power: 8,
            speed: 18,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T01:00:00"
          },
          {
            lng: 124.8,
            lat: 25.5,
            power: 7,
            speed: 14,
            pressure: 1e3,
            strong: "热带低压(TD)",
            time: "2025-11-13T13:00:00"
          }
        ]
      }
    ],
    move_dir: "东北",
    move_speed: 10
  },
  {
    lng: 119,
    lat: 21.2,
    power: 10,
    speed: 25,
    pressure: 985,
    radius7: 240,
    en7: 240,
    es7: 220,
    wn7: 220,
    ws7: 200,
    radius10: 0,
    en10: 0,
    es10: 0,
    wn10: 0,
    ws10: 0,
    radius12: 0,
    en12: 0,
    es12: 0,
    wn12: 0,
    ws12: 0,
    remark: "",
    strong: "强热带风暴(STS)",
    time: "2025-11-12T02:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-12T02:00:00",
        data: [
          {
            lng: 119.3,
            lat: 21.6,
            power: 10,
            speed: 25,
            pressure: 985,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T08:00:00"
          },
          {
            lng: 119.8,
            lat: 21.8,
            power: 9,
            speed: 23,
            pressure: 990,
            strong: "热带风暴(TS)",
            time: "2025-11-12T14:00:00"
          },
          {
            lng: 120.7,
            lat: 22.2,
            power: 9,
            speed: 23,
            pressure: 990,
            strong: "热带风暴(TS)",
            time: "2025-11-12T20:00:00"
          },
          {
            lng: 121.9,
            lat: 23.1,
            power: 8,
            speed: 20,
            pressure: 995,
            strong: "热带风暴(TS)",
            time: "2025-11-13T02:00:00"
          },
          {
            lng: 124.6,
            lat: 25,
            power: 7,
            speed: 15,
            pressure: 1002,
            strong: "热带低压(TD)",
            time: "2025-11-13T14:00:00"
          }
        ]
      },
      {
        source: "韩国",
        time: "2025-11-12T02:00:00",
        data: [
          {
            lng: 120,
            lat: 21.9,
            power: 9,
            speed: 24,
            pressure: 990,
            strong: "热带风暴(TS)",
            time: "2025-11-12T14:00:00"
          },
          {
            lng: 122,
            lat: 23.4,
            power: 8,
            speed: 19,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T02:00:00"
          }
        ]
      },
      {
        source: "中国香港",
        time: "2025-11-12T02:00:00",
        data: [
          {
            lng: 121.5,
            lat: 22.9,
            power: 8,
            speed: 18,
            strong: "热带风暴(TS)",
            time: "2025-11-13T02:00:00"
          },
          {
            lng: 128.8,
            lat: 26,
            power: 6,
            speed: 12,
            strong: "热带低压(TD)",
            time: "2025-11-14T02:00:00"
          }
        ]
      },
      {
        source: "美国",
        time: "2025-11-12T02:00:00",
        data: [
          {
            lng: 121.9,
            lat: 23.5,
            power: 9,
            speed: 21,
            strong: "热带风暴(TS)",
            time: "2025-11-13T02:00:00"
          },
          {
            lng: 127.4,
            lat: 25.7,
            power: 8,
            speed: 18,
            strong: "热带风暴(TS)",
            time: "2025-11-14T02:00:00"
          },
          {
            lng: 131.4,
            lat: 25.2,
            power: 7,
            speed: 15,
            strong: "热带低压(TD)",
            time: "2025-11-15T02:00:00"
          }
        ]
      },
      {
        source: "日本",
        time: "2025-11-12T02:00:00",
        data: [
          {
            lng: 119.6,
            lat: 21.7,
            power: 9,
            speed: 23,
            pressure: 992,
            strong: "热带风暴(TS)",
            time: "2025-11-12T14:00:00"
          },
          {
            lng: 121.9,
            lat: 23.2,
            power: 8,
            speed: 20,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T02:00:00"
          },
          {
            lng: 127.7,
            lat: 25.5,
            power: 9,
            speed: 23,
            pressure: 1004,
            strong: "热带风暴(TS)",
            time: "2025-11-14T02:00:00"
          }
        ]
      },
      {
        source: "菲律宾",
        time: "2025-11-12T02:00:00",
        data: [
          {
            lng: 121.9,
            lat: 23.4,
            power: 8,
            speed: 18,
            strong: "热带风暴(TS)",
            time: "2025-11-13T02:00:00"
          }
        ]
      },
      {
        source: "欧洲",
        time: "2025-11-12T02:00:00",
        data: [
          {
            lng: 121.9,
            lat: 22.7,
            power: 8,
            speed: 18,
            strong: "热带风暴(TS)",
            time: "2025-11-13T02:00:00"
          }
        ]
      }
    ],
    move_dir: "东北",
    move_speed: 9
  },
  {
    lng: 119,
    lat: 21.3,
    power: 10,
    speed: 25,
    pressure: 985,
    radius7: 240,
    en7: 240,
    es7: 220,
    wn7: 220,
    ws7: 200,
    radius10: 0,
    en10: 0,
    es10: 0,
    wn10: 0,
    ws10: 0,
    radius12: 0,
    en12: 0,
    es12: 0,
    wn12: 0,
    ws12: 0,
    remark: "",
    strong: "强热带风暴(STS)",
    time: "2025-11-12T03:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-12T03:00:00",
        data: [
          {
            lng: 119.4,
            lat: 21.6,
            power: 10,
            speed: 25,
            pressure: 990,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T09:00:00"
          },
          {
            lng: 119.9,
            lat: 21.9,
            power: 9,
            speed: 23,
            pressure: 990,
            strong: "热带风暴(TS)",
            time: "2025-11-12T15:00:00"
          },
          {
            lng: 120.9,
            lat: 22.4,
            power: 9,
            speed: 23,
            pressure: 995,
            strong: "热带风暴(TS)",
            time: "2025-11-12T21:00:00"
          },
          {
            lng: 122.1,
            lat: 23.3,
            power: 8,
            speed: 18,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T03:00:00"
          },
          {
            lng: 124.8,
            lat: 25.2,
            power: 7,
            speed: 15,
            pressure: 1e3,
            strong: "热带低压(TD)",
            time: "2025-11-13T15:00:00"
          }
        ]
      }
    ],
    move_dir: "东北",
    move_speed: 9
  },
  {
    lng: 119,
    lat: 21.4,
    power: 10,
    speed: 25,
    pressure: 985,
    radius7: 240,
    en7: 240,
    es7: 220,
    wn7: 220,
    ws7: 200,
    remark: "",
    strong: "强热带风暴(STS)",
    time: "2025-11-12T04:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-12T04:00:00",
        data: [
          {
            lng: 119.5,
            lat: 21.7,
            power: 10,
            speed: 25,
            pressure: 990,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T10:00:00"
          },
          {
            lng: 120.1,
            lat: 21.9,
            power: 9,
            speed: 23,
            pressure: 990,
            strong: "热带风暴(TS)",
            time: "2025-11-12T16:00:00"
          },
          {
            lng: 121.1,
            lat: 22.5,
            power: 9,
            speed: 23,
            pressure: 995,
            strong: "热带风暴(TS)",
            time: "2025-11-12T22:00:00"
          },
          {
            lng: 122.3,
            lat: 23.4,
            power: 8,
            speed: 18,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T04:00:00"
          },
          {
            lng: 125.1,
            lat: 25.3,
            power: 7,
            speed: 14,
            pressure: 1e3,
            strong: "热带低压(TD)",
            time: "2025-11-13T16:00:00"
          }
        ]
      }
    ],
    move_dir: "东北",
    move_speed: 9
  },
  {
    lng: 119,
    lat: 21.4,
    power: 10,
    speed: 25,
    pressure: 985,
    radius7: 240,
    en7: 240,
    es7: 220,
    wn7: 220,
    ws7: 200,
    radius10: 0,
    en10: 0,
    es10: 0,
    wn10: 0,
    ws10: 0,
    radius12: 0,
    en12: 0,
    es12: 0,
    wn12: 0,
    ws12: 0,
    remark: "",
    strong: "强热带风暴(STS)",
    time: "2025-11-12T05:00:00",
    data: [
      {
        source: "日本",
        time: "2025-11-12T05:00:00",
        data: [
          {
            lng: 120.2,
            lat: 21.9,
            power: 9,
            speed: 23,
            pressure: 994,
            strong: "热带风暴(TS)",
            time: "2025-11-12T17:00:00"
          },
          {
            lng: 122.5,
            lat: 24,
            power: 8,
            speed: 20,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T05:00:00"
          },
          {
            lng: 127.7,
            lat: 25.5,
            power: 9,
            speed: 23,
            pressure: 1004,
            strong: "热带风暴(TS)",
            time: "2025-11-14T02:00:00"
          }
        ]
      },
      {
        source: "中国",
        time: "2025-11-12T05:00:00",
        data: [
          {
            lng: 119.4,
            lat: 21.8,
            power: 10,
            speed: 25,
            pressure: 985,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T11:00:00"
          },
          {
            lng: 119.9,
            lat: 22.1,
            power: 9,
            speed: 23,
            pressure: 990,
            strong: "热带风暴(TS)",
            time: "2025-11-12T17:00:00"
          },
          {
            lng: 120.7,
            lat: 22.3,
            power: 8,
            speed: 20,
            pressure: 995,
            strong: "热带风暴(TS)",
            time: "2025-11-12T23:00:00"
          },
          {
            lng: 122,
            lat: 23.3,
            power: 8,
            speed: 20,
            pressure: 995,
            strong: "热带风暴(TS)",
            time: "2025-11-13T05:00:00"
          },
          {
            lng: 125.3,
            lat: 25,
            power: 8,
            speed: 18,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T17:00:00"
          }
        ]
      },
      {
        source: "中国香港",
        time: "2025-11-12T05:00:00",
        data: [
          {
            lng: 122.1,
            lat: 23.4,
            power: 7,
            speed: 15,
            strong: "热带低压(TD)",
            time: "2025-11-13T05:00:00"
          }
        ]
      }
    ],
    move_dir: "东北",
    move_speed: 11
  },
  {
    lng: 119.1,
    lat: 21.5,
    power: 10,
    speed: 25,
    pressure: 985,
    radius7: 240,
    en7: 240,
    es7: 220,
    wn7: 220,
    ws7: 200,
    remark: "",
    strong: "强热带风暴(STS)",
    time: "2025-11-12T06:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-12T06:00:00",
        data: [
          {
            lng: 119.5,
            lat: 21.9,
            power: 10,
            speed: 25,
            pressure: 990,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T12:00:00"
          },
          {
            lng: 120,
            lat: 22.1,
            power: 9,
            speed: 23,
            pressure: 995,
            strong: "热带风暴(TS)",
            time: "2025-11-12T18:00:00"
          },
          {
            lng: 120.9,
            lat: 22.5,
            power: 8,
            speed: 20,
            pressure: 995,
            strong: "热带风暴(TS)",
            time: "2025-11-13T00:00:00"
          },
          {
            lng: 122.3,
            lat: 23.4,
            power: 8,
            speed: 20,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T06:00:00"
          },
          {
            lng: 125.6,
            lat: 25.1,
            power: 8,
            speed: 18,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T18:00:00"
          }
        ]
      }
    ],
    move_dir: "东北",
    move_speed: 11
  },
  {
    lng: 119.1,
    lat: 21.5,
    power: 10,
    speed: 25,
    pressure: 985,
    radius7: 240,
    en7: 240,
    es7: 220,
    wn7: 220,
    ws7: 200,
    remark: "",
    strong: "强热带风暴(STS)",
    time: "2025-11-12T07:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-12T07:00:00",
        data: [
          {
            lng: 119.6,
            lat: 21.9,
            power: 10,
            speed: 25,
            pressure: 990,
            strong: "强热带风暴(STS)",
            time: "2025-11-12T13:00:00"
          },
          {
            lng: 120.2,
            lat: 22.2,
            power: 9,
            speed: 23,
            pressure: 995,
            strong: "热带风暴(TS)",
            time: "2025-11-12T19:00:00"
          },
          {
            lng: 121.1,
            lat: 22.6,
            power: 8,
            speed: 20,
            pressure: 995,
            strong: "热带风暴(TS)",
            time: "2025-11-13T01:00:00"
          },
          {
            lng: 122.6,
            lat: 23.6,
            power: 8,
            speed: 20,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T07:00:00"
          },
          {
            lng: 125.8,
            lat: 25.3,
            power: 8,
            speed: 18,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T19:00:00"
          }
        ]
      }
    ],
    move_dir: "东北",
    move_speed: 10
  },
  {
    lng: 119.2,
    lat: 21.5,
    power: 9,
    speed: 23,
    pressure: 990,
    radius7: 240,
    en7: 150,
    es7: 180,
    wn7: 240,
    ws7: 200,
    radius10: 0,
    en10: 0,
    es10: 0,
    wn10: 0,
    ws10: 0,
    radius12: 0,
    en12: 0,
    es12: 0,
    wn12: 0,
    ws12: 0,
    remark: "",
    strong: "热带风暴(TS)",
    time: "2025-11-12T08:00:00",
    data: [
      {
        source: "菲律宾",
        time: "2025-11-12T08:00:00",
        data: [
          {
            lng: 122.6,
            lat: 24,
            power: 6,
            speed: 13,
            strong: "热带低压(TD)",
            time: "2025-11-13T08:00:00"
          }
        ]
      },
      {
        source: "日本",
        time: "2025-11-12T08:00:00",
        data: [
          {
            lng: 120.7,
            lat: 21.9,
            power: 8,
            speed: 20,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-12T20:00:00"
          },
          {
            lng: 123.1,
            lat: 24.8,
            power: 9,
            speed: 23,
            pressure: 994,
            strong: "热带风暴(TS)",
            time: "2025-11-13T08:00:00"
          },
          {
            lng: 131.1,
            lat: 26.5,
            power: 8,
            speed: 20,
            pressure: 1004,
            strong: "热带风暴(TS)",
            time: "2025-11-14T08:00:00"
          }
        ]
      },
      {
        source: "南海所",
        time: "2025-11-12T08:00:00",
        data: [
          {
            lng: 119.6,
            lat: 21.5,
            power: 9,
            speed: 21,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-12T14:00:00"
          },
          {
            lng: 120.9,
            lat: 22.8,
            power: 7,
            speed: 17,
            pressure: 1001,
            strong: "热带低压(TD)",
            time: "2025-11-12T20:00:00"
          },
          {
            lng: 121.6,
            lat: 23.2,
            power: 8,
            speed: 18,
            pressure: 1e3,
            strong: "热带风暴(TS)",
            time: "2025-11-13T02:00:00"
          },
          {
            lng: 122.8,
            lat: 24.7,
            power: 9,
            speed: 22,
            pressure: 1001,
            strong: "热带风暴(TS)",
            time: "2025-11-13T08:00:00"
          },
          {
            lng: 121,
            lat: 23.3,
            power: 8,
            speed: 20,
            pressure: 1e3,
            strong: "热带风暴(TS)",
            time: "2025-11-13T14:00:00"
          },
          {
            lng: 121.3,
            lat: 23.7,
            power: 8,
            speed: 20,
            pressure: 997,
            strong: "热带风暴(TS)",
            time: "2025-11-13T20:00:00"
          },
          {
            lng: 122.1,
            lat: 24.8,
            power: 9,
            speed: 24,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-14T02:00:00"
          },
          {
            lng: 123.9,
            lat: 25.7,
            power: 9,
            speed: 23,
            pressure: 999,
            strong: "热带风暴(TS)",
            time: "2025-11-14T08:00:00"
          },
          {
            lng: 124.6,
            lat: 25.8,
            power: 9,
            speed: 23,
            pressure: 1004,
            strong: "热带风暴(TS)",
            time: "2025-11-14T14:00:00"
          },
          {
            lng: 124.9,
            lat: 25.7,
            power: 9,
            speed: 21,
            pressure: 1004,
            strong: "热带风暴(TS)",
            time: "2025-11-14T20:00:00"
          },
          {
            lng: 124.6,
            lat: 24.8,
            power: 8,
            speed: 19,
            pressure: 1004,
            strong: "热带风暴(TS)",
            time: "2025-11-15T02:00:00"
          }
        ]
      },
      {
        source: "韩国",
        time: "2025-11-12T08:00:00",
        data: [
          {
            lng: 120.7,
            lat: 22.2,
            power: 9,
            speed: 21,
            pressure: 994,
            strong: "热带风暴(TS)",
            time: "2025-11-12T20:00:00"
          },
          {
            lng: 123.1,
            lat: 24.4,
            power: 7,
            speed: 17,
            pressure: 998,
            strong: "热带低压(TD)",
            time: "2025-11-13T08:00:00"
          }
        ]
      },
      {
        source: "中国",
        time: "2025-11-12T08:00:00",
        data: [
          {
            lng: 119.9,
            lat: 21.8,
            power: 9,
            speed: 23,
            pressure: 990,
            strong: "热带风暴(TS)",
            time: "2025-11-12T14:00:00"
          },
          {
            lng: 120.6,
            lat: 22.1,
            power: 8,
            speed: 20,
            pressure: 995,
            strong: "热带风暴(TS)",
            time: "2025-11-12T20:00:00"
          },
          {
            lng: 121.6,
            lat: 23,
            power: 8,
            speed: 18,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T02:00:00"
          },
          {
            lng: 122.8,
            lat: 24.1,
            power: 7,
            speed: 15,
            pressure: 1e3,
            strong: "热带低压(TD)",
            time: "2025-11-13T08:00:00"
          }
        ]
      },
      {
        source: "中国香港",
        time: "2025-11-12T08:00:00",
        data: [
          {
            lng: 122.8,
            lat: 24.1,
            power: 7,
            speed: 15,
            strong: "热带低压(TD)",
            time: "2025-11-13T08:00:00"
          }
        ]
      },
      {
        source: "美国",
        time: "2025-11-12T08:00:00",
        data: [
          {
            lng: 122.6,
            lat: 23.8,
            power: 8,
            speed: 18,
            strong: "热带风暴(TS)",
            time: "2025-11-13T08:00:00"
          },
          {
            lng: 128,
            lat: 25.6,
            power: 7,
            speed: 15,
            strong: "热带低压(TD)",
            time: "2025-11-14T08:00:00"
          },
          {
            lng: 130.8,
            lat: 25.3,
            power: 6,
            speed: 13,
            strong: "热带低压(TD)",
            time: "2025-11-15T08:00:00"
          }
        ]
      }
    ],
    move_dir: "东北",
    move_speed: 13
  },
  {
    lng: 119.2,
    lat: 21.6,
    power: 9,
    speed: 23,
    pressure: 990,
    radius7: 240,
    en7: 150,
    es7: 180,
    wn7: 240,
    ws7: 200,
    radius10: 0,
    en10: 0,
    es10: 0,
    wn10: 0,
    ws10: 0,
    radius12: 0,
    en12: 0,
    es12: 0,
    wn12: 0,
    ws12: 0,
    remark: "",
    strong: "热带风暴(TS)",
    time: "2025-11-12T09:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-12T09:00:00",
        data: [
          {
            lng: 120,
            lat: 21.9,
            power: 9,
            speed: 23,
            pressure: 995,
            strong: "热带风暴(TS)",
            time: "2025-11-12T15:00:00"
          },
          {
            lng: 120.8,
            lat: 22.3,
            power: 8,
            speed: 20,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-12T21:00:00"
          },
          {
            lng: 121.8,
            lat: 23.2,
            power: 8,
            speed: 18,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T03:00:00"
          },
          {
            lng: 123,
            lat: 24.3,
            power: 7,
            speed: 15,
            pressure: 998,
            strong: "热带低压(TD)",
            time: "2025-11-13T09:00:00"
          }
        ]
      }
    ],
    move_dir: "东北",
    move_speed: 13
  },
  {
    lng: 119.3,
    lat: 21.7,
    power: 9,
    speed: 23,
    pressure: 990,
    radius7: 240,
    en7: 150,
    es7: 180,
    wn7: 240,
    ws7: 200,
    radius10: 0,
    en10: 0,
    es10: 0,
    wn10: 0,
    ws10: 0,
    radius12: 0,
    en12: 0,
    es12: 0,
    wn12: 0,
    ws12: 0,
    remark: "",
    strong: "热带风暴(TS)",
    time: "2025-11-12T10:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-12T10:00:00",
        data: [
          {
            lng: 120.1,
            lat: 21.9,
            power: 9,
            speed: 23,
            pressure: 995,
            strong: "热带风暴(TS)",
            time: "2025-11-12T16:00:00"
          },
          {
            lng: 120.9,
            lat: 22.4,
            power: 8,
            speed: 20,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-12T22:00:00"
          },
          {
            lng: 122,
            lat: 23.4,
            power: 7,
            speed: 16,
            pressure: 998,
            strong: "热带低压(TD)",
            time: "2025-11-13T04:00:00"
          },
          {
            lng: 123.2,
            lat: 24.5,
            power: 7,
            speed: 14,
            pressure: 1e3,
            strong: "热带低压(TD)",
            time: "2025-11-13T10:00:00"
          }
        ]
      }
    ],
    move_dir: "东北",
    move_speed: 13
  },
  {
    lng: 119.3,
    lat: 21.7,
    power: 9,
    speed: 23,
    pressure: 990,
    radius7: 240,
    en7: 150,
    es7: 180,
    wn7: 240,
    ws7: 200,
    remark: "",
    strong: "热带风暴(TS)",
    time: "2025-11-12T11:00:00",
    data: [
      {
        source: "日本",
        time: "2025-11-12T11:00:00",
        data: [
          {
            lng: 121.3,
            lat: 22.5,
            power: 8,
            speed: 20,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-12T23:00:00"
          },
          {
            lng: 123.8,
            lat: 25.2,
            power: 9,
            speed: 23,
            pressure: 994,
            strong: "热带风暴(TS)",
            time: "2025-11-13T11:00:00"
          },
          {
            lng: 131.1,
            lat: 26.5,
            power: 8,
            speed: 20,
            pressure: 1004,
            strong: "热带风暴(TS)",
            time: "2025-11-14T08:00:00"
          }
        ]
      },
      {
        source: "中国香港",
        time: "2025-11-12T11:00:00",
        data: [
          {
            lng: 123.6,
            lat: 24.7,
            power: 7,
            speed: 15,
            strong: "热带低压(TD)",
            time: "2025-11-13T11:00:00"
          }
        ]
      },
      {
        source: "中国",
        time: "2025-11-12T11:00:00",
        data: [
          {
            lng: 120.1,
            lat: 21.9,
            power: 9,
            speed: 23,
            pressure: 990,
            strong: "热带风暴(TS)",
            time: "2025-11-12T17:00:00"
          },
          {
            lng: 120.9,
            lat: 22.3,
            power: 8,
            speed: 20,
            pressure: 995,
            strong: "热带风暴(TS)",
            time: "2025-11-12T23:00:00"
          },
          {
            lng: 122.1,
            lat: 23.2,
            power: 8,
            speed: 18,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T05:00:00"
          },
          {
            lng: 123.5,
            lat: 24.4,
            power: 8,
            speed: 18,
            pressure: 999,
            strong: "热带风暴(TS)",
            time: "2025-11-13T11:00:00"
          }
        ]
      }
    ],
    move_dir: "东北",
    move_speed: 15
  },
  {
    lng: 119.5,
    lat: 21.7,
    power: 9,
    speed: 23,
    pressure: 990,
    radius7: 240,
    en7: 150,
    es7: 180,
    wn7: 240,
    ws7: 200,
    radius10: 0,
    en10: 0,
    es10: 0,
    wn10: 0,
    ws10: 0,
    radius12: 0,
    en12: 0,
    es12: 0,
    wn12: 0,
    ws12: 0,
    remark: "",
    strong: "热带风暴(TS)",
    time: "2025-11-12T12:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-12T12:00:00",
        data: [
          {
            lng: 120.2,
            lat: 22,
            power: 9,
            speed: 23,
            pressure: 995,
            strong: "热带风暴(TS)",
            time: "2025-11-12T18:00:00"
          },
          {
            lng: 121.1,
            lat: 22.5,
            power: 8,
            speed: 20,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T00:00:00"
          },
          {
            lng: 122.3,
            lat: 23.4,
            power: 8,
            speed: 18,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T06:00:00"
          },
          {
            lng: 123.7,
            lat: 24.6,
            power: 8,
            speed: 18,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T12:00:00"
          }
        ]
      }
    ],
    move_dir: "东北",
    move_speed: 15
  },
  {
    lng: 119.7,
    lat: 21.8,
    power: 9,
    speed: 23,
    pressure: 990,
    radius7: 240,
    en7: 150,
    es7: 180,
    wn7: 240,
    ws7: 200,
    remark: "",
    strong: "热带风暴(TS)",
    time: "2025-11-12T13:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-12T13:00:00",
        data: [
          {
            lng: 120.4,
            lat: 22,
            power: 9,
            speed: 23,
            pressure: 995,
            strong: "热带风暴(TS)",
            time: "2025-11-12T19:00:00"
          },
          {
            lng: 121.3,
            lat: 22.6,
            power: 8,
            speed: 20,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T01:00:00"
          },
          {
            lng: 122.6,
            lat: 23.6,
            power: 8,
            speed: 18,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T07:00:00"
          },
          {
            lng: 124,
            lat: 24.8,
            power: 8,
            speed: 18,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T13:00:00"
          }
        ]
      }
    ],
    move_dir: "东北",
    move_speed: 15
  },
  {
    lng: 119.9,
    lat: 21.8,
    power: 9,
    speed: 23,
    pressure: 990,
    radius7: 240,
    en7: 150,
    es7: 180,
    wn7: 240,
    ws7: 200,
    radius10: 0,
    en10: 0,
    es10: 0,
    wn10: 0,
    ws10: 0,
    radius12: 0,
    en12: 0,
    es12: 0,
    wn12: 0,
    ws12: 0,
    remark: "",
    strong: "热带风暴(TS)",
    time: "2025-11-12T14:00:00",
    data: [
      {
        source: "南海所",
        time: "2025-11-12T14:00:00",
        data: [
          {
            lng: 120.7,
            lat: 22.1,
            power: 8,
            speed: 18,
            pressure: 1002,
            strong: "热带风暴(TS)",
            time: "2025-11-12T20:00:00"
          },
          {
            lng: 121.8,
            lat: 23.3,
            power: 7,
            speed: 17,
            pressure: 1001,
            strong: "热带低压(TD)",
            time: "2025-11-13T02:00:00"
          },
          {
            lng: 122.8,
            lat: 24.8,
            power: 9,
            speed: 22,
            pressure: 1002,
            strong: "热带风暴(TS)",
            time: "2025-11-13T08:00:00"
          },
          {
            lng: 124.5,
            lat: 25.9,
            power: 9,
            speed: 23,
            pressure: 1001,
            strong: "热带风暴(TS)",
            time: "2025-11-13T14:00:00"
          },
          {
            lng: 126.5,
            lat: 26.1,
            power: 9,
            speed: 22,
            pressure: 1004,
            strong: "热带风暴(TS)",
            time: "2025-11-13T20:00:00"
          },
          {
            lng: 127.8,
            lat: 26.2,
            power: 8,
            speed: 20,
            pressure: 1004,
            strong: "热带风暴(TS)",
            time: "2025-11-14T02:00:00"
          },
          {
            lng: 128.8,
            lat: 25.7,
            power: 8,
            speed: 18,
            pressure: 1004,
            strong: "热带风暴(TS)",
            time: "2025-11-14T08:00:00"
          }
        ]
      },
      {
        source: "日本",
        time: "2025-11-12T14:00:00",
        data: [
          {
            lng: 121.8,
            lat: 23.1,
            power: 8,
            speed: 20,
            pressure: 1e3,
            strong: "热带风暴(TS)",
            time: "2025-11-13T02:00:00"
          },
          {
            lng: 124.9,
            lat: 25.5,
            power: 8,
            speed: 20,
            pressure: 1e3,
            strong: "热带风暴(TS)",
            time: "2025-11-13T14:00:00"
          }
        ]
      },
      {
        source: "韩国",
        time: "2025-11-12T14:00:00",
        data: [
          {
            lng: 121.8,
            lat: 23.3,
            power: 8,
            speed: 18,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T02:00:00"
          },
          {
            lng: 124.6,
            lat: 24.8,
            power: 7,
            speed: 17,
            pressure: 1004,
            strong: "热带低压(TD)",
            time: "2025-11-13T14:00:00"
          }
        ]
      },
      {
        source: "美国",
        time: "2025-11-12T14:00:00",
        data: [
          {
            lng: 124.9,
            lat: 25,
            power: 9,
            speed: 21,
            strong: "热带风暴(TS)",
            time: "2025-11-13T14:00:00"
          },
          {
            lng: 131.7,
            lat: 25.9,
            power: 7,
            speed: 15,
            strong: "热带低压(TD)",
            time: "2025-11-14T14:00:00"
          }
        ]
      },
      {
        source: "中国",
        time: "2025-11-12T14:00:00",
        data: [
          {
            lng: 120.8,
            lat: 22.1,
            power: 8,
            speed: 20,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-12T20:00:00"
          },
          {
            lng: 121.8,
            lat: 22.9,
            power: 8,
            speed: 20,
            pressure: 1e3,
            strong: "热带风暴(TS)",
            time: "2025-11-13T02:00:00"
          },
          {
            lng: 123,
            lat: 24.1,
            power: 8,
            speed: 20,
            pressure: 1e3,
            strong: "热带风暴(TS)",
            time: "2025-11-13T08:00:00"
          },
          {
            lng: 124.5,
            lat: 25.1,
            power: 8,
            speed: 20,
            pressure: 1e3,
            strong: "热带风暴(TS)",
            time: "2025-11-13T14:00:00"
          }
        ]
      }
    ],
    move_dir: "东东北",
    move_speed: 18
  },
  {
    lng: 120,
    lat: 21.8,
    power: 9,
    speed: 23,
    pressure: 990,
    radius7: 240,
    en7: 150,
    es7: 180,
    wn7: 240,
    ws7: 200,
    remark: "",
    strong: "热带风暴(TS)",
    time: "2025-11-12T15:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-12T15:00:00",
        data: [
          {
            lng: 121,
            lat: 22.2,
            power: 8,
            speed: 20,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-12T21:00:00"
          },
          {
            lng: 122,
            lat: 23.1,
            power: 8,
            speed: 20,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T03:00:00"
          },
          {
            lng: 123.3,
            lat: 24.3,
            power: 8,
            speed: 20,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T09:00:00"
          },
          {
            lng: 124.8,
            lat: 25.3,
            power: 8,
            speed: 20,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T15:00:00"
          }
        ]
      }
    ],
    move_dir: "东东北",
    move_speed: 18
  },
  {
    lng: 120.1,
    lat: 21.9,
    power: 9,
    speed: 23,
    pressure: 990,
    radius7: 240,
    en7: 150,
    es7: 180,
    wn7: 240,
    ws7: 200,
    radius10: 0,
    en10: 0,
    es10: 0,
    wn10: 0,
    ws10: 0,
    radius12: 0,
    en12: 0,
    es12: 0,
    wn12: 0,
    ws12: 0,
    remark: "",
    strong: "热带风暴(TS)",
    time: "2025-11-12T16:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-12T16:00:00",
        data: [
          {
            lng: 121.1,
            lat: 22.4,
            power: 8,
            speed: 20,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-12T22:00:00"
          },
          {
            lng: 122.2,
            lat: 23.3,
            power: 8,
            speed: 20,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T04:00:00"
          },
          {
            lng: 123.5,
            lat: 24.4,
            power: 8,
            speed: 20,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T10:00:00"
          },
          {
            lng: 125,
            lat: 25.4,
            power: 8,
            speed: 20,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T16:00:00"
          }
        ]
      }
    ],
    move_dir: "东东北",
    move_speed: 18
  },
  {
    lng: 120.3,
    lat: 22,
    power: 9,
    speed: 23,
    pressure: 990,
    radius7: 240,
    en7: 70,
    es7: 70,
    wn7: 240,
    ws7: 200,
    remark: "",
    strong: "热带风暴(TS)",
    time: "2025-11-12T17:00:00",
    data: [
      {
        source: "日本",
        time: "2025-11-12T17:00:00",
        data: [
          {
            lng: 122.6,
            lat: 23.9,
            power: 8,
            speed: 20,
            pressure: 1e3,
            strong: "热带风暴(TS)",
            time: "2025-11-13T05:00:00"
          },
          {
            lng: 125.8,
            lat: 25.6,
            power: 8,
            speed: 20,
            pressure: 1e3,
            strong: "热带风暴(TS)",
            time: "2025-11-13T17:00:00"
          }
        ]
      },
      {
        source: "中国",
        time: "2025-11-12T17:00:00",
        data: [
          {
            lng: 121.5,
            lat: 22.7,
            power: 8,
            speed: 20,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-12T23:00:00"
          },
          {
            lng: 122.4,
            lat: 23.7,
            power: 8,
            speed: 20,
            pressure: 1e3,
            strong: "热带风暴(TS)",
            time: "2025-11-13T05:00:00"
          },
          {
            lng: 124,
            lat: 24.8,
            power: 8,
            speed: 20,
            pressure: 1e3,
            strong: "热带风暴(TS)",
            time: "2025-11-13T11:00:00"
          },
          {
            lng: 125.9,
            lat: 25.6,
            power: 8,
            speed: 20,
            pressure: 1e3,
            strong: "热带风暴(TS)",
            time: "2025-11-13T17:00:00"
          }
        ]
      }
    ],
    move_dir: "东北",
    move_speed: 24
  },
  {
    lng: 120.4,
    lat: 22.1,
    power: 9,
    speed: 23,
    pressure: 990,
    radius7: 240,
    en7: 70,
    es7: 70,
    wn7: 240,
    ws7: 200,
    radius10: 0,
    en10: 0,
    es10: 0,
    wn10: 0,
    ws10: 0,
    radius12: 0,
    en12: 0,
    es12: 0,
    wn12: 0,
    ws12: 0,
    remark: "",
    strong: "热带风暴(TS)",
    time: "2025-11-12T18:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-12T18:00:00",
        data: [
          {
            lng: 121.7,
            lat: 22.9,
            power: 8,
            speed: 20,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T00:00:00"
          },
          {
            lng: 122.7,
            lat: 23.9,
            power: 8,
            speed: 20,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T06:00:00"
          },
          {
            lng: 124.3,
            lat: 24.9,
            power: 8,
            speed: 20,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T12:00:00"
          },
          {
            lng: 126.2,
            lat: 25.7,
            power: 8,
            speed: 20,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T18:00:00"
          }
        ]
      }
    ],
    move_dir: "东北",
    move_speed: 24
  },
  {
    lng: 120.5,
    lat: 22.1,
    power: 9,
    speed: 23,
    pressure: 990,
    radius7: 240,
    en7: 70,
    es7: 70,
    wn7: 240,
    ws7: 200,
    radius10: 0,
    en10: 0,
    es10: 0,
    wn10: 0,
    ws10: 0,
    radius12: 0,
    en12: 0,
    es12: 0,
    wn12: 0,
    ws12: 0,
    remark: "",
    strong: "热带风暴(TS)",
    time: "2025-11-12T19:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-12T19:00:00",
        data: [
          {
            lng: 121.8,
            lat: 23,
            power: 8,
            speed: 20,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T01:00:00"
          },
          {
            lng: 122.9,
            lat: 24.1,
            power: 8,
            speed: 20,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T07:00:00"
          },
          {
            lng: 124.6,
            lat: 25.1,
            power: 8,
            speed: 20,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T13:00:00"
          },
          {
            lng: 126.5,
            lat: 25.9,
            power: 8,
            speed: 20,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T19:00:00"
          }
        ]
      }
    ],
    move_dir: "东北",
    move_speed: 24
  },
  {
    lng: 120.8,
    lat: 22.1,
    power: 9,
    speed: 23,
    pressure: 990,
    radius7: 0,
    en7: 0,
    es7: 0,
    wn7: 0,
    ws7: 0,
    radius10: 0,
    en10: 0,
    es10: 0,
    wn10: 0,
    ws10: 0,
    radius12: 0,
    en12: 0,
    es12: 0,
    wn12: 0,
    ws12: 0,
    remark: "",
    strong: "热带风暴(TS)",
    time: "2025-11-12T20:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-12T20:00:00",
        data: [
          {
            lng: 122.1,
            lat: 23.1,
            power: 8,
            speed: 20,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T02:00:00"
          },
          {
            lng: 123.1,
            lat: 24.4,
            power: 8,
            speed: 20,
            pressure: 1e3,
            strong: "热带风暴(TS)",
            time: "2025-11-13T08:00:00"
          },
          {
            lng: 124.9,
            lat: 25.3,
            power: 8,
            speed: 20,
            pressure: 1e3,
            strong: "热带风暴(TS)",
            time: "2025-11-13T14:00:00"
          }
        ]
      },
      {
        source: "南海所",
        time: "2025-11-12T20:00:00",
        data: [
          {
            lng: 121.7,
            lat: 22.8,
            power: 7,
            speed: 17,
            pressure: 1001,
            strong: "热带低压(TD)",
            time: "2025-11-13T02:00:00"
          },
          {
            lng: 122.8,
            lat: 24.2,
            power: 9,
            speed: 22,
            pressure: 1004,
            strong: "热带风暴(TS)",
            time: "2025-11-13T08:00:00"
          },
          {
            lng: 125.4,
            lat: 25.9,
            power: 9,
            speed: 24,
            pressure: 1001,
            strong: "热带风暴(TS)",
            time: "2025-11-13T14:00:00"
          },
          {
            lng: 127.3,
            lat: 26.3,
            power: 8,
            speed: 20,
            pressure: 1004,
            strong: "热带风暴(TS)",
            time: "2025-11-13T20:00:00"
          },
          {
            lng: 128.5,
            lat: 26.2,
            power: 8,
            speed: 18,
            pressure: 1004,
            strong: "热带风暴(TS)",
            time: "2025-11-14T01:00:00"
          },
          {
            lng: 128.6,
            lat: 25.3,
            power: 7,
            speed: 17,
            pressure: 1004,
            strong: "热带低压(TD)",
            time: "2025-11-14T08:00:00"
          }
        ]
      },
      {
        source: "美国",
        time: "2025-11-12T20:00:00",
        data: [
          {
            lng: 126.4,
            lat: 25.3,
            power: 9,
            speed: 21,
            strong: "热带风暴(TS)",
            time: "2025-11-13T20:00:00"
          }
        ]
      },
      {
        source: "日本",
        time: "2025-11-12T20:00:00",
        data: [
          {
            lng: 123.3,
            lat: 24.5,
            power: 8,
            speed: 20,
            pressure: 1002,
            strong: "热带风暴(TS)",
            time: "2025-11-13T08:00:00"
          },
          {
            lng: 126.7,
            lat: 25.5,
            power: 9,
            speed: 23,
            pressure: 1e3,
            strong: "热带风暴(TS)",
            time: "2025-11-13T20:00:00"
          }
        ]
      },
      {
        source: "韩国",
        time: "2025-11-12T20:00:00",
        data: [
          {
            lng: 123.2,
            lat: 24.2,
            power: 8,
            speed: 18,
            pressure: 1e3,
            strong: "热带风暴(TS)",
            time: "2025-11-13T08:00:00"
          },
          {
            lng: 126.3,
            lat: 25.5,
            power: 7,
            speed: 17,
            pressure: 1006,
            strong: "热带低压(TD)",
            time: "2025-11-13T20:00:00"
          }
        ]
      }
    ],
    move_dir: "东北",
    move_speed: 29
  },
  {
    lng: 121,
    lat: 22.2,
    power: 9,
    speed: 23,
    pressure: 990,
    radius7: 150,
    en7: 80,
    es7: 80,
    wn7: 150,
    ws7: 150,
    remark: "",
    strong: "热带风暴(TS)",
    time: "2025-11-12T21:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-12T21:00:00",
        data: [
          {
            lng: 122.3,
            lat: 23.3,
            power: 8,
            speed: 20,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T03:00:00"
          },
          {
            lng: 123.4,
            lat: 24.5,
            power: 8,
            speed: 20,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T09:00:00"
          },
          {
            lng: 125.2,
            lat: 25.5,
            power: 8,
            speed: 20,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T15:00:00"
          }
        ]
      }
    ],
    move_dir: "东北",
    move_speed: 28
  },
  {
    lng: 121.2,
    lat: 22.4,
    power: 9,
    speed: 23,
    pressure: 990,
    radius7: 150,
    en7: 80,
    es7: 80,
    wn7: 150,
    ws7: 150,
    remark: "",
    strong: "热带风暴(TS)",
    time: "2025-11-12T22:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-12T22:00:00",
        data: [
          {
            lng: 122.4,
            lat: 23.5,
            power: 8,
            speed: 20,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T04:00:00"
          },
          {
            lng: 123.7,
            lat: 24.7,
            power: 8,
            speed: 20,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T10:00:00"
          },
          {
            lng: 125.5,
            lat: 25.6,
            power: 8,
            speed: 20,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T16:00:00"
          }
        ]
      }
    ],
    move_dir: "东北",
    move_speed: 25
  },
  {
    lng: 121.4,
    lat: 22.6,
    power: 8,
    speed: 20,
    pressure: 998,
    radius7: 150,
    en7: 80,
    es7: 80,
    wn7: 150,
    ws7: 150,
    radius10: 0,
    en10: 0,
    es10: 0,
    wn10: 0,
    ws10: 0,
    radius12: 0,
    en12: 0,
    es12: 0,
    wn12: 0,
    ws12: 0,
    remark: "",
    strong: "热带风暴(TS)",
    time: "2025-11-12T23:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-12T23:00:00",
        data: [
          {
            lng: 122.4,
            lat: 23.8,
            power: 8,
            speed: 20,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T05:00:00"
          },
          {
            lng: 123.9,
            lat: 24.7,
            power: 8,
            speed: 20,
            pressure: 1e3,
            strong: "热带风暴(TS)",
            time: "2025-11-13T11:00:00"
          }
        ]
      },
      {
        source: "日本",
        time: "2025-11-12T23:00:00",
        data: [
          {
            lng: 124,
            lat: 25,
            power: 8,
            speed: 20,
            pressure: 1002,
            strong: "热带风暴(TS)",
            time: "2025-11-13T11:00:00"
          },
          {
            lng: 127.6,
            lat: 25.7,
            power: 9,
            speed: 23,
            pressure: 1e3,
            strong: "热带风暴(TS)",
            time: "2025-11-13T23:00:00"
          }
        ]
      }
    ],
    move_dir: "东北",
    move_speed: 29
  },
  {
    lng: 121.5,
    lat: 22.7,
    power: 8,
    speed: 20,
    pressure: 998,
    radius7: 150,
    en7: 80,
    es7: 80,
    wn7: 150,
    ws7: 150,
    radius10: 0,
    en10: 0,
    es10: 0,
    wn10: 0,
    ws10: 0,
    radius12: 0,
    en12: 0,
    es12: 0,
    wn12: 0,
    ws12: 0,
    remark: "",
    strong: "热带风暴(TS)",
    time: "2025-11-13T00:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-13T00:00:00",
        data: [
          {
            lng: 122.7,
            lat: 24,
            power: 8,
            speed: 20,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T06:00:00"
          },
          {
            lng: 124.2,
            lat: 24.9,
            power: 8,
            speed: 20,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T12:00:00"
          }
        ]
      }
    ],
    move_dir: "东北",
    move_speed: 28
  },
  {
    lng: 121.6,
    lat: 22.9,
    power: 8,
    speed: 20,
    pressure: 998,
    radius7: 150,
    en7: 80,
    es7: 80,
    wn7: 150,
    ws7: 150,
    remark: "",
    strong: "热带风暴(TS)",
    time: "2025-11-13T01:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-13T01:00:00",
        data: [
          {
            lng: 122.9,
            lat: 24.1,
            power: 8,
            speed: 20,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T07:00:00"
          },
          {
            lng: 124.4,
            lat: 25,
            power: 8,
            speed: 20,
            pressure: 1e3,
            strong: "热带风暴(TS)",
            time: "2025-11-13T13:00:00"
          }
        ]
      }
    ],
    move_dir: "东北",
    move_speed: 26
  },
  {
    lng: 121.8,
    lat: 23.1,
    power: 8,
    speed: 20,
    pressure: 998,
    radius7: 150,
    en7: 80,
    es7: 80,
    wn7: 150,
    ws7: 150,
    remark: "",
    strong: "热带风暴(TS)",
    time: "2025-11-13T02:00:00",
    data: [
      {
        source: "韩国",
        time: "2025-11-13T02:00:00",
        data: [
          {
            lng: 124.9,
            lat: 25.2,
            power: 7,
            speed: 17,
            pressure: 1002,
            strong: "热带低压(TD)",
            time: "2025-11-13T14:00:00"
          }
        ]
      },
      {
        source: "日本",
        time: "2025-11-13T02:00:00",
        data: [
          {
            lng: 124.8,
            lat: 25.3,
            power: 9,
            speed: 23,
            pressure: 1e3,
            strong: "热带风暴(TS)",
            time: "2025-11-13T14:00:00"
          },
          {
            lng: 127.5,
            lat: 25,
            power: 8,
            speed: 18,
            pressure: 1004,
            strong: "热带风暴(TS)",
            time: "2025-11-14T02:00:00"
          }
        ]
      },
      {
        source: "中国",
        time: "2025-11-13T02:00:00",
        data: [
          {
            lng: 123.1,
            lat: 24.3,
            power: 8,
            speed: 20,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T08:00:00"
          },
          {
            lng: 124.8,
            lat: 25.2,
            power: 8,
            speed: 20,
            pressure: 1e3,
            strong: "热带风暴(TS)",
            time: "2025-11-13T14:00:00"
          }
        ]
      },
      {
        source: "美国",
        time: "2025-11-13T02:00:00",
        data: [
          {
            lng: 127.9,
            lat: 25.3,
            power: 7,
            speed: 15,
            strong: "热带低压(TD)",
            time: "2025-11-14T02:00:00"
          }
        ]
      }
    ],
    move_dir: "东北",
    move_speed: 32
  },
  {
    lng: 122,
    lat: 23.3,
    power: 8,
    speed: 20,
    pressure: 998,
    radius7: 150,
    en7: 80,
    es7: 80,
    wn7: 150,
    ws7: 150,
    radius10: 0,
    en10: 0,
    es10: 0,
    wn10: 0,
    ws10: 0,
    radius12: 0,
    en12: 0,
    es12: 0,
    wn12: 0,
    ws12: 0,
    remark: "",
    strong: "热带风暴(TS)",
    time: "2025-11-13T03:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-13T03:00:00",
        data: [
          {
            lng: 123.4,
            lat: 24.5,
            power: 8,
            speed: 20,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T09:00:00"
          },
          {
            lng: 125.1,
            lat: 25.4,
            power: 8,
            speed: 20,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T15:00:00"
          }
        ]
      }
    ],
    move_dir: "东北",
    move_speed: 32
  },
  {
    lng: 122.2,
    lat: 23.5,
    power: 8,
    speed: 20,
    pressure: 998,
    radius7: 150,
    en7: 80,
    es7: 80,
    wn7: 150,
    ws7: 150,
    radius10: 0,
    en10: 0,
    es10: 0,
    wn10: 0,
    ws10: 0,
    radius12: 0,
    en12: 0,
    es12: 0,
    wn12: 0,
    ws12: 0,
    remark: "",
    strong: "热带风暴(TS)",
    time: "2025-11-13T04:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-13T04:00:00",
        data: [
          {
            lng: 123.7,
            lat: 24.6,
            power: 8,
            speed: 20,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T10:00:00"
          },
          {
            lng: 125.4,
            lat: 25.5,
            power: 8,
            speed: 20,
            pressure: 1e3,
            strong: "热带风暴(TS)",
            time: "2025-11-13T16:00:00"
          }
        ]
      }
    ],
    move_dir: "东北",
    move_speed: 32
  },
  {
    lng: 122.3,
    lat: 23.6,
    power: 8,
    speed: 20,
    pressure: 998,
    radius7: 150,
    en7: 80,
    es7: 80,
    wn7: 150,
    ws7: 150,
    radius10: 0,
    en10: 0,
    es10: 0,
    wn10: 0,
    ws10: 0,
    radius12: 0,
    en12: 0,
    es12: 0,
    wn12: 0,
    ws12: 0,
    remark: "",
    strong: "热带风暴(TS)",
    time: "2025-11-13T05:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-13T05:00:00",
        data: [
          {
            lng: 123.3,
            lat: 24.5,
            power: 8,
            speed: 20,
            pressure: 1e3,
            strong: "热带风暴(TS)",
            time: "2025-11-13T11:00:00"
          },
          {
            lng: 124.9,
            lat: 25.2,
            power: 8,
            speed: 20,
            pressure: 1e3,
            strong: "热带风暴(TS)",
            time: "2025-11-13T17:00:00"
          }
        ]
      },
      {
        source: "日本",
        time: "2025-11-13T05:00:00",
        data: [
          {
            lng: 125.5,
            lat: 25.2,
            power: 9,
            speed: 23,
            pressure: 1e3,
            strong: "热带风暴(TS)",
            time: "2025-11-13T17:00:00"
          },
          {
            lng: 128.2,
            lat: 24.7,
            power: 8,
            speed: 18,
            pressure: 1004,
            strong: "热带风暴(TS)",
            time: "2025-11-14T05:00:00"
          }
        ]
      }
    ],
    move_dir: "东东北",
    move_speed: 27
  },
  {
    lng: 122.5,
    lat: 23.8,
    power: 8,
    speed: 20,
    pressure: 998,
    radius7: 150,
    en7: 80,
    es7: 80,
    wn7: 150,
    ws7: 150,
    remark: "",
    strong: "热带风暴(TS)",
    time: "2025-11-13T06:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-13T06:00:00",
        data: [
          {
            lng: 123.6,
            lat: 24.6,
            power: 8,
            speed: 20,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T12:00:00"
          },
          {
            lng: 125.2,
            lat: 25.3,
            power: 8,
            speed: 20,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T18:00:00"
          }
        ]
      }
    ],
    move_dir: "东东北",
    move_speed: 27
  },
  {
    lng: 122.7,
    lat: 24,
    power: 8,
    speed: 20,
    pressure: 998,
    radius7: 150,
    en7: 80,
    es7: 80,
    wn7: 150,
    ws7: 150,
    radius10: 0,
    en10: 0,
    es10: 0,
    wn10: 0,
    ws10: 0,
    radius12: 0,
    en12: 0,
    es12: 0,
    wn12: 0,
    ws12: 0,
    remark: "",
    strong: "热带风暴(TS)",
    time: "2025-11-13T07:00:00",
    data: [
      {
        source: "中国",
        time: "2025-11-13T07:00:00",
        data: [
          {
            lng: 123.8,
            lat: 24.7,
            power: 8,
            speed: 20,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T13:00:00"
          },
          {
            lng: 125.4,
            lat: 25.4,
            power: 8,
            speed: 20,
            pressure: 998,
            strong: "热带风暴(TS)",
            time: "2025-11-13T19:00:00"
          }
        ]
      }
    ],
    move_dir: "东东北",
    move_speed: 27
  }
], D = {
  land: l0,
  data: g0
}, a0 = { class: "typhoon-page" }, d0 = { class: "controls" }, i0 = { class: "control-item" }, m0 = { class: "control-item" }, w0 = { class: "control-item" }, u0 = { class: "control-item" }, S0 = {
  key: 0,
  class: "selected-info"
}, Y0 = { class: "info-time" }, c0 = { class: "info-item" }, v0 = { class: "info-item" }, _0 = { class: "info-item" }, D0 = /* @__PURE__ */ t0({
  __name: "TyphoonPage",
  setup(E) {
    const u = {
      "Super TY": "#FF0000",
      STY: "#FF00FF",
      TY: "#FFA500",
      STS: "#FFFF00",
      TS: "#00FF00",
      TD: "#00BFFF"
    }, k = {
      中国: "#FF0000",
      日本: "#00CED1",
      韩国: "#4169E1",
      美国: "#FFD700",
      欧洲: "#9932CC"
    };
    function f(s) {
      return s ? s.includes("超强台风") ? u["Super TY"] : s.includes("强台风") ? u.STY : s.includes("台风") ? u.TY : s.includes("强热带风暴") ? u.STS : s.includes("热带风暴") ? u.TS : u.TD : "#00BFFF";
    }
    const r = w(null), C = w(!0), M = w(!0), R = w(!0), L = w(!0), Y = w([]), i = w([]), g = w(null), I = w(-1), Z = (s) => {
      const e = new Date(s);
      return `${e.getMonth() + 1}/${e.getDate()} ${e.getHours()}:00`;
    }, G = () => {
      r.value = l.map("typhoon-map", {
        zoom: 5,
        maxZoom: 16,
        zoomControl: !0,
        zoomAnimation: !0
      }).setView([18, 125], 5), l.tileLayer(
        "https://t0.tianditu.gov.cn/img_w/wmts?tk=93724b915d1898d946ca7dc7b765dda5&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}",
        { maxZoom: 16, detectRetina: !0 }
      ).addTo(r.value), l.tileLayer(
        "https://t0.tianditu.gov.cn/cia_w/wmts?tk=93724b915d1898d946ca7dc7b765dda5&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cia&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}",
        { transparent: !0, zIndex: 3 }
      ).addTo(r.value);
    }, Q = () => {
      Y.value.forEach((s) => {
        var e;
        return (e = r.value) == null ? void 0 : e.removeLayer(s);
      }), Y.value = [];
    }, V = () => {
      i.value.forEach((s) => {
        var e;
        return (e = r.value) == null ? void 0 : e.removeLayer(s);
      }), i.value = [];
    }, h = () => {
      Q(), V(), g.value = null, I.value = -1, A();
    }, A = () => {
      const s = D.data;
      !s || s.length === 0 || (C.value && J(s), s.length > 0 && N(s.length - 1), D.land && D.land.length > 0 && e0(D.land));
    }, N = (s) => {
      var t;
      const e = D.data;
      s < 0 || s >= e.length || (V(), I.value = s, g.value = e[s], (t = r.value) == null || t.setView(
        [g.value.lat, g.value.lng],
        r.value.getZoom(),
        {
          animate: !0,
          duration: 0.5
        }
      ), R.value && j(g.value), M.value && g.value.data && q(g.value), X());
    }, X = () => {
      const s = g.value;
      if (!r.value) return;
      const e = l.circleMarker([s.lat, s.lng], {
        radius: 12,
        fillColor: "transparent",
        color: "#fff",
        weight: 3,
        opacity: 1
      });
      e.addTo(r.value), i.value.push(e);
    }, j = (s) => {
      if (s.radius7 > 0 || s.en7 > 0) {
        const e = P(s, 7);
        console.log(e, "circle7"), e && r.value && (e.addTo(r.value), i.value.push(e));
      }
      if (s.radius10 > 0 || s.en10 > 0) {
        const e = P(s, 10);
        e && r.value && (e.addTo(r.value), i.value.push(e));
      }
      if (s.radius12 > 0 || s.en12 > 0) {
        const e = P(s, 12);
        e && r.value && (e.addTo(r.value), i.value.push(e));
      }
    }, P = (s, e) => {
      const t = `radius${e}`, T = `en${e}`, n = `es${e}`, c = `wn${e}`, v = `ws${e}`, a = s[T] || s[t] || 0, p = s[n] || s[t] || 0, d = s[c] || s[t] || 0, m = s[v] || s[t] || 0;
      if (console.log(`en: ${a}, es: ${p}, wn: ${d}, ws: ${m}`), a === 0 && p === 0 && d === 0 && m === 0) return null;
      const b = { 7: "#00FF00", 10: "#FFFF00", 12: "#FF0000" }[e] || "#00FF00";
      if (a === p && p === m && m === d)
        return l.circle([s.lat, s.lng], {
          radius: a * 1e3,
          color: b,
          weight: 2,
          fillColor: b,
          fillOpacity: 0.15,
          interactive: !1
        });
      const U = [], H = 360;
      for (let O = 0; O <= H; O++) {
        const S = O / H * 360;
        let _;
        S >= 0 && S < 90 ? _ = a : S >= 90 && S < 180 ? _ = p : S >= 180 && S < 270 ? _ = m : _ = d;
        const K = S * Math.PI / 180, s0 = s.lat + _ / 111 * Math.cos(K), r0 = s.lng + _ / 111 * Math.sin(K);
        U.push([s0, r0]);
      }
      return l.polygon(U, {
        color: b,
        weight: 2,
        fillColor: b,
        fillOpacity: 0.15,
        interactive: !1,
        smoothFactor: 0,
        noClip: !0
      });
    }, q = (s) => {
      !s.data || s.data.length === 0 || !r.value || s.data.forEach((e) => {
        const t = e.source, T = k[t] || "#888888", n = e.data;
        if (!n || n.length === 0) return;
        const v = [
          [s.lat, s.lng],
          ...n.map((p) => [p.lat, p.lng])
        ], a = l.polyline(v, {
          color: T,
          weight: 2,
          dashArray: "5, 5",
          opacity: 0.8
        });
        if (a.addTo(r.value), i.value.push(a), n.forEach((p) => {
          const d = l.circleMarker([p.lat, p.lng], {
            radius: 4,
            fillColor: T,
            color: T,
            weight: 1,
            fillOpacity: 0.8
          }), m = new Date(p.time), z = `${m.getMonth() + 1}/${m.getDate()} ${m.getHours()}时`;
          d.bindPopup(`
        <b>${t}预报</b><br/>
        ${z}<br/>
        强度: ${p.strong || "--"}<br/>
        风速: ${p.speed} m/s<br/>
        ${p.pressure ? "气压: " + p.pressure + " hPa" : ""}
      `), d.addTo(r.value), i.value.push(d);
        }), n.length > 0) {
          const p = n[n.length - 1], d = l.marker([p.lat, p.lng], {
            icon: l.divIcon({
              className: "forecast-label",
              html: `<span style="color:${T};font-weight:bold;text-shadow:1px 1px 1px #fff,-1px -1px 1px #fff">${t}</span>`,
              iconSize: [40, 16],
              iconAnchor: [-5, 8]
            })
          });
          d.addTo(r.value), i.value.push(d);
        }
      });
    }, J = (s) => {
      if (r.value) {
        for (let e = 0; e < s.length - 1; e++) {
          const t = f(s[e].strong), T = l.polyline(
            [
              [s[e].lat, s[e].lng],
              [s[e + 1].lat, s[e + 1].lng]
            ],
            { color: t, weight: 3 }
          );
          T.addTo(r.value), Y.value.push(T);
        }
        s.forEach((e, t) => {
          const T = f(e.strong), n = l.circleMarker([e.lat, e.lng], {
            radius: 6,
            fillColor: T,
            color: "#fff",
            weight: 2,
            fillOpacity: 1
          }), c = new Date(e.time), v = `${c.getMonth() + 1}/${c.getDate()} ${c.getHours()}时`;
          if (n.on("mouseover", function() {
            this.setRadius(9), this.setStyle({ weight: 3 });
          }), n.on("mouseout", function() {
            this.setRadius(6), this.setStyle({ weight: 2 });
          }), n.on("click", () => {
            N(t);
          }), n.bindPopup(`
      <b>${v}</b><br/>
      强度: ${e.strong || "--"}<br/>
      风速: ${e.speed} m/s<br/>
      气压: ${e.pressure} hPa<br/>
      移向: ${e.move_dir || "--"}<br/>
      移速: ${e.move_speed || "--"} km/h<br/>
      <small>点击查看该时刻预报</small>
    `), n.addTo(r.value), Y.value.push(n), L.value && t % 4 === 0) {
            const a = l.marker([e.lat, e.lng], {
              icon: l.divIcon({
                className: "typhoon-label",
                html: `<span>${v}</span>`,
                iconSize: [60, 20],
                iconAnchor: [-5, 10]
              })
            });
            a.addTo(r.value), Y.value.push(a);
          }
        });
      }
    }, e0 = (s) => {
      r.value && s.forEach((e) => {
        const t = l.marker([e.lat, e.lng], {
          icon: l.divIcon({
            className: "landfall-icon",
            html: '<div style="background:#FF0000;width:12px;height:12px;border-radius:0;transform:rotate(45deg);border:2px solid #fff;"></div>',
            iconSize: [16, 16],
            iconAnchor: [8, 8]
          })
        }), T = new Date(e.time), n = `${T.getMonth() + 1}月${T.getDate()}日 ${T.getHours()}:${String(
          T.getMinutes()
        ).padStart(2, "0")}`;
        t.bindPopup(`
      <b>登陆点</b><br/>
      位置: ${e.position}<br/>
      时间: ${n}
    `), t.addTo(r.value), Y.value.push(t);
      });
    };
    return p0(() => {
      G(), A();
    }), o0(() => {
      r.value && (r.value.remove(), r.value = null);
    }), (s, e) => (W(), B("div", a0, [
      e[9] || (e[9] = o("div", {
        id: "typhoon-map",
        class: "map-container"
      }, null, -1)),
      o("div", d0, [
        o("div", i0, [
          o("label", null, [
            y(o("input", {
              type: "checkbox",
              "onUpdate:modelValue": e[0] || (e[0] = (t) => C.value = t),
              onChange: h
            }, null, 544), [
              [F, C.value]
            ]),
            e[4] || (e[4] = $(" 实况路径 ", -1))
          ])
        ]),
        o("div", m0, [
          o("label", null, [
            y(o("input", {
              type: "checkbox",
              "onUpdate:modelValue": e[1] || (e[1] = (t) => M.value = t),
              onChange: h
            }, null, 544), [
              [F, M.value]
            ]),
            e[5] || (e[5] = $(" 预报路径 ", -1))
          ])
        ]),
        o("div", w0, [
          o("label", null, [
            y(o("input", {
              type: "checkbox",
              "onUpdate:modelValue": e[2] || (e[2] = (t) => R.value = t),
              onChange: h
            }, null, 544), [
              [F, R.value]
            ]),
            e[6] || (e[6] = $(" 风圈 ", -1))
          ])
        ]),
        o("div", u0, [
          o("label", null, [
            y(o("input", {
              type: "checkbox",
              "onUpdate:modelValue": e[3] || (e[3] = (t) => L.value = t),
              onChange: h
            }, null, 544), [
              [F, L.value]
            ]),
            e[7] || (e[7] = $(" 标注 ", -1))
          ])
        ]),
        g.value ? (W(), B("div", S0, [
          e[8] || (e[8] = o("div", { class: "info-title" }, "当前选中", -1)),
          o("div", Y0, x(Z(g.value.time)), 1),
          o("div", c0, "强度: " + x(g.value.strong), 1),
          o("div", v0, "风速: " + x(g.value.speed) + " m/s", 1),
          o("div", _0, "气压: " + x(g.value.pressure) + " hPa", 1)
        ])) : n0("", !0)
      ]),
      e[10] || (e[10] = T0('<div class="legend" data-v-5e05a7d9><div class="legend-title" data-v-5e05a7d9>台风强度</div><div class="legend-item" data-v-5e05a7d9><span class="color-box" style="background:#00ff00;" data-v-5e05a7d9></span>热带风暴 </div><div class="legend-item" data-v-5e05a7d9><span class="color-box" style="background:#ffff00;" data-v-5e05a7d9></span>强热带风暴 </div><div class="legend-item" data-v-5e05a7d9><span class="color-box" style="background:#ffa500;" data-v-5e05a7d9></span>台风 </div><div class="legend-item" data-v-5e05a7d9><span class="color-box" style="background:#ff00ff;" data-v-5e05a7d9></span>强台风 </div><div class="legend-item" data-v-5e05a7d9><span class="color-box" style="background:#ff0000;" data-v-5e05a7d9></span>超强台风 </div><div class="legend-title" style="margin-top:10px;" data-v-5e05a7d9>预报机构</div><div class="legend-item" data-v-5e05a7d9><span class="color-line" style="background:#ff0000;" data-v-5e05a7d9></span>中国 </div><div class="legend-item" data-v-5e05a7d9><span class="color-line" style="background:#00ced1;" data-v-5e05a7d9></span>日本 </div><div class="legend-item" data-v-5e05a7d9><span class="color-line" style="background:#4169e1;" data-v-5e05a7d9></span>韩国 </div><div class="legend-item" data-v-5e05a7d9><span class="color-line" style="background:#ffd700;" data-v-5e05a7d9></span>美国 </div><div class="legend-item" data-v-5e05a7d9><span class="color-line" style="background:#9932cc;" data-v-5e05a7d9></span>欧洲 </div></div>', 1))
    ]));
  }
}), k0 = (E, u) => {
  const k = E.__vccOpts || E;
  for (const [f, r] of u)
    k[f] = r;
  return k;
}, b0 = /* @__PURE__ */ k0(D0, [["__scopeId", "data-v-5e05a7d9"]]);
export {
  b0 as default
};
