<template>
  <div class="leader-line-page" ref="pageContainer">
    <!-- 地图容器 -->
    <BaseMap ref="baseMap" @map-ready="onMapReady" />

    <!-- 线引面板图层 -->
    <LeaderPanelLayer
      v-if="mapReady"
      ref="panelLayer"
      :map="map"
      :panels="panels"
      :autoLayout="autoLayout"
      @panelMoved="onPanelMoved"
    />

    <!-- 控制面板 -->
    <ControlPanel
      ref="controlPanel"
      :panels="panels"
      :autoLayout="autoLayout"
      @togglePanel="onTogglePanel"
      @toggleAll="onToggleAll"
      @autoLayoutChange="onAutoLayoutChange"
      @screenshot="onScreenshot"
    />
  </div>
</template>

<script>
import BaseMap from "@/components/BaseMap.vue";
import LeaderPanelLayer from "./components/LeaderPanelLayer.vue";
import ControlPanel from "./components/ControlPanel.vue";
import { captureAndDownload, generateFilename } from "./utils/screenshot";

export default {
  name: "LeaderLinePage",
  components: {
    BaseMap,
    LeaderPanelLayer,
    ControlPanel,
  },
  data() {
    return {
      map: null,
      mapReady: false,
      panels: [],
      autoLayout: true,
    };
  },
  methods: {
    // 地图初始化完成
    onMapReady(map) {
      this.map = map;
      this.mapReady = true;

      // 设置地图视图到广东区域
      this.map.setView([22.5, 113.5], 7);

      // 初始化示例面板数据
      this.$nextTick(() => {
        this.initPanels();
      });
    },

    // 初始化面板数据（示例数据）
    initPanels() {
      // 模拟广东省海堤漫堤风险图的数据 - 18个点位于广东沿海和河流附近
      this.panels = [
        // 珠江口区域
        {
          id: "panel-1",
          title: "潮位站A",
          lat: 22.55,
          lng: 113.95,
          visible: true,
          tableData: [
            ["站点名称", "潮位站A"],
            ["最高潮位", "2.85m"],
            ["警戒潮位", "2.50m"],
            ["风险等级", "中等"],
          ],
        },
        {
          id: "panel-2",
          title: "潮位站B",
          lat: 22.48,
          lng: 114.12,
          visible: true,
          tableData: [
            ["站点名称", "潮位站B"],
            ["最高潮位", "3.12m"],
            ["警戒潮位", "2.80m"],
            ["风险等级", "高"],
          ],
        },
        {
          id: "panel-3",
          title: "海堤段1",
          lat: 22.62,
          lng: 114.25,
          visible: true,
          tableData: [
            ["海堤名称", "海堤段1"],
            ["堤顶高程", "4.5m"],
            ["设计标准", "50年一遇"],
            ["漫堤风险", "低"],
          ],
        },
        {
          id: "panel-4",
          title: "海堤段2",
          lat: 22.35,
          lng: 113.88,
          visible: true,
          tableData: [
            ["海堤名称", "海堤段2"],
            ["堤顶高程", "3.8m"],
            ["设计标准", "20年一遇"],
            ["漫堤风险", "高"],
          ],
        },
        {
          id: "panel-5",
          title: "监测点C",
          lat: 22.72,
          lng: 114.05,
          visible: true,
          tableData: [
            ["监测点", "C"],
            ["当前水位", "1.25m"],
            ["警戒潮位", "1.80m"],
            ["24h变化", "+0.15m"],
          ],
        },
        {
          id: "panel-6",
          title: "风险区域1",
          lat: 22.42,
          lng: 114.35,
          visible: true,
          tableData: [
            ["区域", "风险区域1"],
            ["面积", "2.5km²"],
            ["影响人口", "约1.2万"],
            ["风险等级", "中高"],
          ],
        },
        // 湛江区域
        {
          id: "panel-7",
          title: "湛江潮位站",
          lat: 21.27,
          lng: 110.40,
          visible: true,
          tableData: [
            ["站点名称", "湛江站"],
            ["最高潮位", "2.95m"],
            ["警戒潮位", "2.60m"],
            ["风险等级", "中等"],
          ],
        },
        {
          id: "panel-8",
          title: "雷州海堤",
          lat: 20.92,
          lng: 110.08,
          visible: true,
          tableData: [
            ["海堤名称", "雷州海堤"],
            ["堤顶高程", "4.2m"],
            ["设计标准", "30年一遇"],
            ["漫堤风险", "中"],
          ],
        },
        // 汕头区域
        {
          id: "panel-9",
          title: "汕头潮位站",
          lat: 23.35,
          lng: 116.68,
          visible: true,
          tableData: [
            ["站点名称", "汕头站"],
            ["最高潮位", "2.68m"],
            ["警戒潮位", "2.30m"],
            ["风险等级", "中"],
          ],
        },
        {
          id: "panel-10",
          title: "潮阳海堤",
          lat: 23.28,
          lng: 116.58,
          visible: true,
          tableData: [
            ["海堤名称", "潮阳海堤"],
            ["堤顶高程", "5.0m"],
            ["设计标准", "50年一遇"],
            ["漫堤风险", "低"],
          ],
        },
        // 阳江区域
        {
          id: "panel-11",
          title: "阳江潮位站",
          lat: 21.85,
          lng: 111.98,
          visible: true,
          tableData: [
            ["站点名称", "阳江站"],
            ["最高潮位", "3.05m"],
            ["警戒潮位", "2.70m"],
            ["风险等级", "高"],
          ],
        },
        {
          id: "panel-12",
          title: "海陵岛海堤",
          lat: 21.65,
          lng: 111.92,
          visible: true,
          tableData: [
            ["海堤名称", "海陵岛海堤"],
            ["堤顶高程", "4.8m"],
            ["设计标准", "100年一遇"],
            ["漫堤风险", "极低"],
          ],
        },
        // 珠海区域
        {
          id: "panel-13",
          title: "珠海潮位站",
          lat: 22.27,
          lng: 113.58,
          visible: true,
          tableData: [
            ["站点名称", "珠海站"],
            ["最高潮位", "2.78m"],
            ["警戒潮位", "2.40m"],
            ["风险等级", "中"],
          ],
        },
        {
          id: "panel-14",
          title: "横琴海堤",
          lat: 22.12,
          lng: 113.52,
          visible: true,
          tableData: [
            ["海堤名称", "横琴海堤"],
            ["堤顶高程", "5.5m"],
            ["设计标准", "200年一遇"],
            ["漫堤风险", "极低"],
          ],
        },
        // 惠州区域
        {
          id: "panel-15",
          title: "惠州潮位站",
          lat: 22.78,
          lng: 114.68,
          visible: true,
          tableData: [
            ["站点名称", "惠州站"],
            ["最高潮位", "2.55m"],
            ["警戒潮位", "2.20m"],
            ["风险等级", "低"],
          ],
        },
        {
          id: "panel-16",
          title: "大亚湾海堤",
          lat: 22.72,
          lng: 114.52,
          visible: true,
          tableData: [
            ["海堤名称", "大亚湾海堤"],
            ["堤顶高程", "4.6m"],
            ["设计标准", "50年一遇"],
            ["漫堤风险", "低"],
          ],
        },
        // 东江流域
        {
          id: "panel-17",
          title: "东江监测点",
          lat: 23.12,
          lng: 114.42,
          visible: true,
          tableData: [
            ["监测点", "东江站"],
            ["当前水位", "8.5m"],
            ["警戒水位", "12.0m"],
            ["24h变化", "+0.32m"],
          ],
        },
        // 西江流域
        {
          id: "panel-18",
          title: "西江监测点",
          lat: 23.05,
          lng: 112.48,
          visible: true,
          tableData: [
            ["监测点", "西江站"],
            ["当前水位", "6.8m"],
            ["警戒水位", "10.5m"],
            ["24h变化", "-0.18m"],
          ],
        },
      ];
    },

    // 面板位置变化
    onPanelMoved(panelId, newPosition) {
      const panel = this.panels.find((p) => p.id === panelId);
      if (panel) {
        panel.position = newPosition;
      }
    },

    // 切换单个面板显隐
    onTogglePanel(panelId, visible) {
      const panel = this.panels.find((p) => p.id === panelId);
      if (panel) {
        this.$set(panel, "visible", visible);
      }
    },

    // 切换全部面板显隐
    onToggleAll(visible) {
      this.panels.forEach((panel) => {
        this.$set(panel, "visible", visible);
      });
    },

    // 自动布局开关变化
    onAutoLayoutChange(enabled) {
      this.autoLayout = enabled;
    },

    // 截图
    async onScreenshot() {
      const container = this.$refs.pageContainer;
      if (!container) return;

      // 临时隐藏控制面板
      const controlPanel = this.$refs.controlPanel.$el;
      const originalDisplay = controlPanel.style.display;
      controlPanel.style.display = "none";

      try {
        const filename = generateFilename("leader-line-map");
        await captureAndDownload(container, filename, {
          ignoreElements: (element) => {
            // 忽略控制面板
            return element.classList && element.classList.contains("control-panel");
          },
        });
        this.$message.success("截图已下载");
      } catch (error) {
        console.error("截图失败:", error);
        this.$message.error("截图失败，请重试");
      } finally {
        // 恢复控制面板显示
        controlPanel.style.display = originalDisplay;
      }
    },
  },
};
</script>

<style scoped>
.leader-line-page {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
