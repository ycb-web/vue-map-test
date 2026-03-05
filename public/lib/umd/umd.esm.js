(function() { try { var style = document.createElement("style"); style.textContent = "\n.umd-test-page[data-v-e04995b1] {\n  padding: 20px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.tip[data-v-e04995b1] {\n  color: #666;\n  margin-bottom: 20px;\n}\n.test-section[data-v-e04995b1] {\n  margin: 20px 0;\n  padding: 15px;\n  background: #f5f5f5;\n  border-radius: 8px;\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n.test-section select[data-v-e04995b1] {\n  padding: 8px 12px;\n  font-size: 16px;\n  border-radius: 4px;\n  border: 1px solid #ccc;\n  min-width: 200px;\n}\n.load-btn[data-v-e04995b1] {\n  padding: 8px 20px;\n  font-size: 16px;\n  background: #1890ff;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.load-btn[data-v-e04995b1]:hover {\n  background: #40a9ff;\n}\n.loading[data-v-e04995b1] {\n  padding: 20px;\n  text-align: center;\n  color: #666;\n}\n.error[data-v-e04995b1] {\n  padding: 20px;\n  background: #fff2f0;\n  border: 1px solid #ffccc7;\n  border-radius: 4px;\n  color: #ff4d4f;\n}\n.module-container[data-v-e04995b1] {\n  margin-top: 20px;\n  padding: 20px;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n}\n.mount-point[data-v-e04995b1] {\n  margin-top: 15px;\n  height: 600px;\n  min-height: 500px;\n  background: #fafafa;\n  border: 1px dashed #ccc;\n}\n.mount-point[data-v-e04995b1] > * {\n  height: 100%;\n  min-height: 500px;\n}\n.info-section[data-v-e04995b1] {\n  margin-top: 20px;\n  padding: 15px;\n  background: #e6f7ff;\n  border-radius: 8px;\n}\n"; document.head.appendChild(style); } catch(e) { console.error("CSS inject error:", e); } })();

import { ref as b, onMounted as _, openBlock as y, createElementBlock as v, createElementVNode as c, Fragment as x, renderList as S, toDisplayString as B, createStaticVNode as L } from "vue";
const N = (p, u) => {
  const a = p.__vccOpts || p;
  for (const [r, m] of u)
    a[r] = m;
  return a;
}, C = { class: "umd-test-page" }, M = { class: "test-section" }, T = { id: "module-select" }, V = ["value"], I = {
  __name: "index",
  setup(p) {
    const u = [
      { name: "contour", label: "Contour (等值线)", file: "/lib/contour/contour.umd.js" },
      { name: "edit", label: "Edit (编辑)", file: "/lib/edit/edit.umd.js" },
      { name: "leader", label: "Leader (引导线)", file: "/lib/leader/leader.umd.js" },
      { name: "test", label: "Test (测试)", file: "/lib/test/test.umd.js" },
      { name: "typhoon", label: "Typhoon (台风)", file: "/lib/typhoon/typhoon.umd.js" },
      { name: "wind", label: "Wind (风场)", file: "/lib/wind/wind.umd.js" },
      { name: "wms", label: "WMS", file: "/lib/wms/wms.umd.js" }
    ];
    b(!1);
    const a = b(null), r = (i, e) => {
      const n = document.getElementById(i);
      n && (n.style.display = e ? "block" : "none");
    }, m = (i, e) => {
      const n = document.getElementById(i);
      n && (n.textContent = e);
    }, h = (i) => new Promise((e, n) => {
      if (document.querySelector(`script[src="${i}"]`)) {
        e();
        return;
      }
      const d = document.createElement("script");
      d.src = i, d.onload = e, d.onerror = n, document.head.appendChild(d);
    }), j = async () => {
      const i = [
        // Underscore (Backbone 依赖)
        "https://unpkg.com/underscore@1.13.8/underscore-min.js",
        // Backbone (依赖 Underscore)
        "https://unpkg.com/backbone@1.6.1/backbone-min.js",
        // Vue
        "https://unpkg.com/vue@3/dist/vue.global.prod.js",
        // Leaflet
        "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js",
        // ECharts
        "https://unpkg.com/echarts@5.5.0/dist/echarts.min.js",
        // Moment
        "https://cdn.jsdelivr.net/npm/moment@2.30.1/moment.min.js"
      ];
      for (const e of i)
        console.log("加载:", e), await h(e), console.log("完成:", e);
    }, k = async () => {
      var f, w;
      const e = document.getElementById("module-select").value;
      if (!e) {
        alert("请先选择模块");
        return;
      }
      const n = u.find((o) => o.name === e);
      if (!n) return;
      if (a.value) {
        try {
          a.value.unmount();
        } catch {
        }
        a.value = null;
      }
      r("error", !1), r("result", !1), r("loading", !0);
      const d = document.getElementById("module-mount-point");
      d.innerHTML = "", console.log("开始加载模块:", e), document.querySelectorAll('script[data-is-lib="true"]').forEach((o) => o.remove());
      try {
        await j(), console.log("所有依赖加载完成"), console.log("window.Vue:", typeof window.Vue), console.log("window.L:", typeof window.L), console.log("window.Backbone:", typeof window.Backbone), console.log("window.echarts:", typeof window.echarts), await new Promise((s, t) => {
          const l = document.createElement("script");
          l.src = n.file, l.setAttribute("data-is-lib", "true"), l.onload = s, l.onerror = () => t(new Error("加载脚本失败: " + n.file)), document.head.appendChild(l);
        }), console.log("模块加载完成"), console.log("window[moduleName]:", window[e]), await new Promise((s) => setTimeout(s, 300));
        let o = ((f = window[e]) == null ? void 0 : f.default) || window[e];
        if (console.log("=== 组件查找调试 ==="), console.log("moduleName:", e), console.log("window[moduleName]:", window[e]), console.log("window[moduleName]?.default:", (w = window[e]) == null ? void 0 : w.default), console.log("Component:", o), !o || !o.render && !o.setup) {
          console.log("从全局变量搜索组件...");
          for (const s in window) {
            const t = window[s];
            if (t && typeof t == "function" && (t.render || t.setup)) {
              o = t, console.log("找到组件 from", s, ":", o);
              break;
            }
            if (t && typeof t == "object" && t.default && (t.default.render || t.default.setup)) {
              o = t.default, console.log("找到组件 from", s + ".default", ":", o);
              break;
            }
          }
        }
        if (console.log("最终组件:", o), console.log("组件类型:", typeof o), console.log("组件 render:", o == null ? void 0 : o.render), console.log("组件 setup:", o == null ? void 0 : o.setup), console.log("=================="), !o) {
          const s = Object.keys(window).filter(
            (t) => {
              var l;
              return typeof window[t] == "function" || typeof window[t] == "object" && ((l = window[t]) == null ? void 0 : l.render);
            }
          );
          throw m("debug-info", `未找到组件: ${e}
可用: ${s.join(", ")}`), console.error("未找到组件:", e, "可用:", s), new Error(`未找到组件: ${e}`);
        }
        const E = window.Vue;
        console.log("创建 Vue 应用"), a.value = E.createApp(o), a.value.mount(d), console.log("挂载完成"), console.log("挂载点内容:", d.innerHTML), setTimeout(() => {
          d.querySelectorAll("*").forEach((l) => {
            const g = window.getComputedStyle(l);
            (g.height === "0px" || g.height === "auto") && (l.style.height = "100%", l.style.minHeight = "500px");
          });
          const t = d.querySelector(".map-container");
          t && (t.style.height = "100%", t.style.minHeight = "500px");
        }, 500), r("loading", !1), r("result", !0);
      } catch (o) {
        console.error("失败:", o), r("loading", !1), r("error", !0), document.getElementById("error").textContent = o.message;
      }
    };
    return _(() => {
      console.log("测试页面加载完成"), m("debug-info", "请选择一个模块然后点击加载按钮。所有依赖将通过 CDN 自动加载。");
    }), (i, e) => (y(), v("div", C, [
      e[2] || (e[2] = c("h1", null, "UMD 模块测试页面", -1)),
      e[3] || (e[3] = c("p", { class: "tip" }, "测试打包后的 UMD 模块是否可以在其他框架中使用", -1)),
      c("div", M, [
        e[1] || (e[1] = c("h2", null, "选择要测试的模块", -1)),
        c("select", T, [
          e[0] || (e[0] = c("option", { value: "" }, "-- 请选择模块 --", -1)),
          (y(), v(x, null, S(u, (n) => c("option", {
            key: n.name,
            value: n.name
          }, B(n.label), 9, V)), 64))
        ]),
        c("button", {
          onClick: k,
          class: "load-btn"
        }, "加载模块")
      ]),
      e[4] || (e[4] = L('<div id="loading" style="display:none;" class="loading" data-v-e04995b1>加载中...</div><div id="error" style="display:none;" class="error" data-v-e04995b1></div><div id="result" style="display:none;" class="module-container" data-v-e04995b1><h3 id="module-title" data-v-e04995b1></h3><div id="module-mount-point" class="mount-point" data-v-e04995b1></div></div><div class="info-section" data-v-e04995b1><h3 data-v-e04995b1>调试信息</h3><p id="debug-info" data-v-e04995b1></p></div>', 4))
    ]));
  }
}, q = /* @__PURE__ */ N(I, [["__scopeId", "data-v-e04995b1"]]);
export {
  q as default
};
