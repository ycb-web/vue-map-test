<template>
  <div class="triangle-topic-page">
    <div class="topic-tabs">
      <div class="topic-tab-list" role="tablist" aria-label="三角专题页签">
        <button
          type="button"
          class="topic-tab"
          :class="{ active: activeTab === 'mesh' }"
          @click="activeTab = 'mesh'"
        >
          水深 fort.14 模块
        </button>
        <button
          type="button"
          class="topic-tab"
          :class="{ active: activeTab === 'wave' }"
          @click="activeTab = 'wave'"
        >
          波高nc数据模块
        </button>
      </div>

      <div class="topic-tab-panel">
        <Fort14MeshPane v-if="activeTab === 'mesh'" />
        <WavePointsPane v-else />
      </div>
    </div>
  </div>
</template>

<script>
import Fort14MeshPane from "./components/water-depth-fort14/Fort14MeshPane.vue";
import WavePointsPane from "./components/wave-points/WavePointsPane.vue";

export default {
  name: "TriangleTopicPage",
  components: {
    Fort14MeshPane,
    WavePointsPane,
  },
  data() {
    return {
      activeTab: "mesh",
    };
  },
};
</script>

<style scoped>
.triangle-topic-page {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  padding: 14px 16px 20px;
  background:
    radial-gradient(circle at top right, rgba(10, 124, 255, 0.12), transparent 24%),
    linear-gradient(180deg, #f5f8fc 0%, #edf2f7 100%);
  overflow-x: hidden;
  overflow-y: auto;
}

.topic-tabs {
  flex: 0 0 auto;
}

.topic-tab-list {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  border-bottom: 1px solid rgba(16, 50, 74, 0.08);
}

.topic-tab {
  appearance: none;
  border: 0;
  border-bottom: 2px solid transparent;
  background: transparent;
  color: #607284;
  font-size: 16px;
  font-weight: 500;
  padding: 10px 16px 11px;
  cursor: pointer;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.topic-tab:hover {
  color: #1f5d85;
}

.topic-tab.active {
  color: #1677ff;
  border-bottom-color: #1677ff;
}

.topic-tab-panel {
  min-width: 0;
}

@media (max-width: 960px) {
  .triangle-topic-page {
    padding: 14px;
  }

  .topic-tab-list {
    gap: 0;
    overflow-x: auto;
  }

  .topic-tab {
    flex: 0 0 auto;
    white-space: nowrap;
    font-size: 14px;
    padding-left: 12px;
    padding-right: 12px;
  }
}
</style>
