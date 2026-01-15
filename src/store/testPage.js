/**
 * TestPage 页面的 Vuex Store 模块
 * 用于管理地图站点数据，实现 Vue 组件叠点的响应式更新
 */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 站点数据，以 id 为 key 存储
    points: {},
    // 是否显示站点名称标签（zoom >= 10 时显示）
    showLabel: false,
  },

  mutations: {
    /**
     * 批量设置站点数据
     * @param {Object} state - Vuex state
     * @param {Array} points - 站点数据数组
     */
    SET_POINTS: function (state, points) {
      var data = {};
      points.forEach(function (point) {
        data[point.id] = point;
      });
      state.points = data;
    },

    /**
     * 更新单个站点数据
     * 使用 Vue.set 确保响应式更新
     * @param {Object} state - Vuex state
     * @param {Object} payload - { id: 站点ID, data: 要更新的数据 }
     */
    UPDATE_POINT: function (state, payload) {
      var id = payload.id;
      var newData = payload.data;
      if (state.points[id]) {
        Object.keys(newData).forEach(function (key) {
          Vue.set(state.points[id], key, newData[key]);
        });
      }
    },

    /**
     * 设置标签显示状态
     * @param {Object} state - Vuex state
     * @param {Boolean} show - 是否显示
     */
    SET_SHOW_LABEL: function (state, show) {
      state.showLabel = show;
    },
  },

  actions: {
    /**
     * 批量设置站点数据
     */
    setPoints: function (context, points) {
      context.commit("SET_POINTS", points);
    },

    /**
     * 更新单个站点数据
     */
    updatePoint: function (context, payload) {
      context.commit("UPDATE_POINT", payload);
    },

    /**
     * 设置标签显示状态
     */
    setShowLabel: function (context, show) {
      context.commit("SET_SHOW_LABEL", show);
    },
  },

  getters: {
    /**
     * 根据 ID 获取站点数据
     */
    getPointById: function (state) {
      return function (id) {
        return state.points[id] || {};
      };
    },

    /**
     * 获取标签显示状态
     */
    showLabel: function (state) {
      return state.showLabel;
    },
  },
});
