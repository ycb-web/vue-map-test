<template>
  <div class="wind-legend" :class="{ collapsed: !expanded }">
    <div class="legend-header">
      <span class="legend-title">{{ isWind ? '风级图例' : '波高图例' }}</span>
      <span class="legend-toggle" @click="toggleExpand" title="折叠/展开">
        <span class="toggle-arrow">{{ expanded ? '▼' : '▲' }}</span>
      </span>
    </div>
    <div class="legend-content" v-show="expanded">
      <div class="legend-labels">
        <span
          class="legend-text"
          v-for="item in currentLegendItems"
          :key="item.label + '-label'"
          :style="{ width: colorBlockWidth }"
          >{{ item.label }}</span
        >
      </div>
      <div class="legend-colors">
        <span
          class="legend-color"
          v-for="item in currentLegendItems"
          :key="item.label + '-color'"
          :style="{ background: item.color, width: colorBlockWidth }"
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * WindLegend - 统一风级 / 波高图例组件
 * 严格对齐 glcb-web 业务规范标准：
 * - 风级图例：≥8级(#EE472E) | 7级(#FF8813) | 6级(#D4D40E) | 5级(#78BA6E) | ≤4级(#1990FF)
 * - 波高图例：≥2米(#EE472E) | 1~2米(#78BA6E) | <1米(#1990FF)
 */
export default {
  name: 'WindLegend',
  props: {
    mode: {
      type: String,
      default: 'wind', // 'wind' | 'wave'
    },
    defaultExpanded: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      expanded: this.defaultExpanded,
      windLegendItems: [
        { label: '≥8级', color: '#EE472E' },
        { label: '7级', color: '#FF8813' },
        { label: '6级', color: '#D4D40E' },
        { label: '5级', color: '#78BA6E' },
        { label: '≤4级', color: '#1990FF' },
      ],
      waveLegendItems: [
        { label: '≥2米', color: '#EE472E' },
        { label: '1~2米', color: '#78BA6E' },
        { label: '<1米', color: '#1990FF' },
      ],
    };
  },
  computed: {
    isWind() {
      return this.mode === 'wind';
    },
    currentLegendItems() {
      return this.isWind ? this.windLegendItems : this.waveLegendItems;
    },
    colorBlockWidth() {
      return this.isWind ? '44px' : '64px';
    },
  },
  methods: {
    toggleExpand() {
      this.expanded = !this.expanded;
    },
  },
};
</script>

<style scoped>
.wind-legend {
  background: rgba(0, 30, 60, 0.75);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 8px 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.45);
  user-select: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  pointer-events: auto;
}

.legend-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.legend-title {
  color: #ffffff;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.legend-toggle {
  color: #fff;
  cursor: pointer;
  font-size: 12px;
  opacity: 0.8;
  transition: opacity 0.2s, color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.legend-toggle:hover {
  opacity: 1;
  color: #1fccfa;
}

.legend-content {
  margin-top: 8px;
}

.legend-labels {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}

.legend-text {
  color: #ffffff;
  font-size: 13px;
  font-weight: 600;
  text-align: center;
}

.legend-colors {
  display: flex;
}

.legend-color {
  height: 12px;
  display: block;
}

.legend-color:first-child {
  border-radius: 4px 0 0 4px;
}

.legend-color:last-child {
  border-radius: 0 4px 4px 0;
}

.wind-legend.collapsed .legend-header {
  margin-bottom: 0;
}
</style>
