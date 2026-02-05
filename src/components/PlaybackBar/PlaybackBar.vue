<!--
  PlaybackBar 播放轴组件
  ========================
  
  功能概述：
  - 时间序列数据的可视化播放控制组件
  - 支持播放/暂停、前进/后退控制
  - 播放轴按数据点数量等分，每个时间点对应一个颜色段
  - 滑块可拖拽或点击定位，滑块颜色随当前时间点颜色变化
  - 显示当前时间tooltip和hover时间tooltip
  - 显示时间刻度（如"08时"）和日期刻度（如"今天2026年1月21日"）
  
  布局结构（从左到右）：
  [播放控制按钮] + [时间轴色标下拉] + [播放轴 + 刻度]
  
  使用示例：
  <PlaybackBar
    :playing.sync="playing"
    :progress.sync="playbackProgress"
    :available-times="availableTimes"
    :time-colors="timeColors"
    :time-dates="timeDates"
    @progress-change="handleProgressChange"
  />
-->
<template>
  <div class="playback-bar">
    <!-- 
      播放控制按钮区域
      - 后退按钮：点击回退一个时间点
      - 播放/暂停按钮：切换播放状态
      - 前进按钮：点击前进一个时间点
    -->
    <div class="playback-controls">
      <div class="control-btn" @click="handleStep(-1)">◀◀</div>
      <div class="control-btn play" @click="togglePlay">
        {{ playing ? "⏸" : "▶" }}
      </div>
      <div class="control-btn" @click="handleStep(1)">▶▶</div>
    </div>

    <!-- 
      时间轴色标选择区域
      - 显示"时间轴色标："文字标签
      - a-select下拉框用于切换不同的色标方案（如全部航道/主航道）
    -->
    <div class="color-label">
      <span class="label-text">时间轴色标：</span>
      <a-select
        v-model="colorType"
        size="small"
        style="width: 100px"
        @change="onColorTypeChange"
      >
        <a-select-option
          v-for="opt in colorOptions"
          :key="opt.value"
          :value="opt.value"
        >
          {{ opt.label }}
        </a-select-option>
      </a-select>
    </div>

    <!-- 
      播放轴主体区域
      包含：轨道、滑块、时间刻度、日期刻度
    -->
    <div class="slider-wrapper">
      <!-- 
        播放轨道
        - 支持点击定位和拖拽
        - 支持hover显示时间提示
        - 内部由多个颜色段组成，每段宽度相等（100% / 数据点数量）
      -->
      <div
        class="slider-track"
        ref="track"
        @mousedown="onMouseDown"
        @mousemove="onHover"
        @mouseleave="hoverIndex = -1"
      >
        <!-- 颜色段容器，每个segment代表一个时间点的颜色 -->
        <div class="slider-fill">
          <div
            v-for="(seg, i) in segments"
            :key="i"
            class="segment"
            :style="{ width: segmentWidth + '%', backgroundColor: seg.color }"
          ></div>
        </div>
        <!-- 轨道内部分割线，每6小时一条 -->
        <div
          v-for="(div, i) in trackDividers"
          :key="'div-' + i"
          class="track-divider"
          :style="{ left: div.position + '%' }"
        ></div>
      </div>

      <!-- 
        Hover时间提示框
        - 当鼠标悬停在轨道上时显示
        - 显示悬停位置对应的时间（如"21日08时"）
        - 不显示在当前选中位置（避免与滑块tooltip重叠）
      -->
      <div
        v-if="hoverIndex >= 0 && hoverIndex !== innerProgress"
        class="hover-tooltip"
        :style="{ left: hoverPosition + '%' }"
      >
        {{ hoverTimeLabel }}
      </div>

      <!-- 
        滑块（Thumb）
        - 位置：居中于当前时间点所在的段
        - 背景色：使用当前时间点的颜色（不是白色）
        - 包含tooltip显示当前时间
      -->
      <div
        class="slider-thumb"
        :style="{ left: thumbPosition + '%', backgroundColor: thumbColor }"
      >
        <!-- 滑块上方的时间提示，始终显示当前时间（如"21日08时"） -->
        <div class="thumb-tooltip">{{ currentTimeLabel }}</div>
      </div>

      <!-- 
        时间刻度
        - 显示在轨道下方
        - 按一定间隔显示时间标签（如"08时"、"16时"、"00时"）
        - 间隔根据数据点数量自动计算
      -->
      <div class="time-ticks">
        <span
          v-for="(tick, i) in timeTicks"
          :key="i"
          class="tick"
          :style="{ left: tick.position + '%' }"
          >{{ tick.label }}</span
        >
      </div>

      <!-- 
        日期刻度
        - 显示在时间刻度下方
        - 按日期分组，每组显示日期标签
        - 今天/明天/后天会加上前缀（如"今天2026年1月21日"）
        - 日期之间有分隔线
      -->
      <div class="date-ticks">
        <div
          v-for="(d, i) in dateTicks"
          :key="i"
          class="date-tick"
          :style="{ left: d.left + '%', width: d.width + '%' }"
        >
          {{ d.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * PlaybackBar 播放轴组件
 *
 * @description 时间序列数据的可视化播放控制组件，支持播放/暂停、拖拽定位、
 *              颜色分段显示、时间/日期刻度等功能
 *
 * @example
 * <PlaybackBar
 *   :playing.sync="playing"
 *   :progress.sync="playbackProgress"
 *   :available-times="['00:00', '01:00', '02:00']"
 *   :time-colors="['#f5a623', '#7ed321', '#4a90d9']"
 *   :time-dates="['2026年1月21日', '2026年1月21日', '2026年1月21日']"
 *   @progress-change="handleProgressChange"
 * />
 *
 * @fires update:playing - 播放状态变化时触发
 * @fires update:progress - 进度变化时触发
 * @fires progress-change - 进度变化时触发（带当前索引）
 * @fires color-type-change - 色标类型变化时触发
 */
export default {
  name: "PlaybackBar",

  /**
   * 组件属性定义
   */
  props: {
    /**
     * 播放状态
     * @type {Boolean}
     * @default false
     */
    playing: { type: Boolean, default: false },

    /**
     * 当前进度索引（对应availableTimes数组的索引）
     * @type {Number}
     * @default 0
     */
    progress: { type: Number, default: 0 },

    /**
     * 可用时间点数组，格式如 ['00:00', '01:00', '02:00', ...]
     * 数组长度决定了播放轴的分段数量
     * @type {Array<String>}
     * @default []
     */
    availableTimes: { type: Array, default: () => [] },

    /**
     * 每个时间点对应的日期，格式如 ['2026年1月21日', '2026年1月21日', ...]
     * 用于显示日期刻度和tooltip中的日期部分
     * @type {Array<String>}
     * @default []
     */
    timeDates: { type: Array, default: () => [] },

    /**
     * 每个时间点对应的颜色，用于播放轴分段着色和滑块颜色
     * 例如：['#f5a623', '#f5a623', '#7ed321', '#7ed321', '#4a90d9']
     * @type {Array<String>}
     * @default []
     */
    timeColors: { type: Array, default: () => [] },

    /**
     * 默认颜色，当timeColors中没有对应颜色时使用
     * @type {String}
     * @default '#1890ff'
     */
    defaultColor: { type: String, default: "#1890ff" },

    /**
     * 色标下拉选项配置
     * @type {Array<{value: String, label: String}>}
     * @default [{ value: 'all', label: '全部航道' }, { value: 'main', label: '主航道' }]
     */
    colorOptions: {
      type: Array,
      default: () => [
        { value: "all", label: "全部航道" },
        { value: "main", label: "主航道" },
      ],
    },
  },

  /**
   * 组件内部状态
   */
  data() {
    return {
      /** 内部进度值，用于双向绑定 */
      innerProgress: this.progress,
      /** 是否正在拖拽滑块 */
      dragging: false,
      /** 当前选中的色标类型 */
      colorType: "all",
      /** 自动播放定时器 */
      playTimer: null,
      /** 当前hover的时间点索引，-1表示未hover */
      hoverIndex: -1,
    };
  },
  /**
   * 计算属性
   */
  computed: {
    /**
     * 时间点总数
     * @returns {Number} 数据点数量，最小为1
     */
    total() {
      return this.availableTimes.length || 1;
    },

    /**
     * 每个分段的宽度百分比
     * 例如：10个时间点，每段宽度为10%
     * @returns {Number} 百分比值
     */
    segmentWidth() {
      return 100 / this.total;
    },

    /**
     * 播放轴颜色分段数据
     * 每个分段包含对应时间点的颜色
     * @returns {Array<{color: String}>}
     */
    segments() {
      return this.availableTimes.map((_, i) => ({
        color: this.timeColors[i] || this.defaultColor,
      }));
    },

    /**
     * 滑块位置（百分比）
     * 滑块居中于当前时间点所在的分段
     * 计算公式：(当前索引 + 0.5) / 总数 * 100
     * @returns {Number} 百分比位置
     */
    thumbPosition() {
      return ((this.innerProgress + 0.5) / this.total) * 100;
    },

    /**
     * 滑块颜色
     * 使用当前时间点对应的颜色
     * @returns {String} 颜色值
     */
    thumbColor() {
      return this.timeColors[this.innerProgress] || this.defaultColor;
    },

    /**
     * 当前时间标签（显示在滑块上方）
     * 格式：xx日xx时，如"21日08时"
     * @returns {String}
     */
    currentTimeLabel() {
      const time = this.availableTimes[this.innerProgress] || "00:00";
      const date = this.timeDates[this.innerProgress] || "";
      // 从日期字符串中提取日期数字
      const dayMatch = date.match(/(\d+)日/);
      const day = dayMatch ? dayMatch[1] + "日" : "";
      // 将"08:00"转换为"08时"
      const hour = time.replace(":00", "时");
      return day + hour;
    },

    /**
     * Hover位置（百分比）
     * @returns {Number}
     */
    hoverPosition() {
      return ((this.hoverIndex + 0.5) / this.total) * 100;
    },

    /**
     * Hover时间标签
     * 格式同currentTimeLabel
     * @returns {String}
     */
    hoverTimeLabel() {
      if (this.hoverIndex < 0) return "";
      const time = this.availableTimes[this.hoverIndex] || "00:00";
      const date = this.timeDates[this.hoverIndex] || "";
      const dayMatch = date.match(/(\d+)日/);
      const day = dayMatch ? dayMatch[1] + "日" : "";
      const hour = time.replace(":00", "时");
      return day + hour;
    },

    /**
     * 时间刻度数据
     * 每6小时显示一次：00时、06时、12时、18时
     * @returns {Array<{label: String, position: Number}>}
     */
    timeTicks() {
      const arr = [];
      for (let i = 0; i < this.total; i++) {
        const time = this.availableTimes[i] || "";
        const hour = parseInt(time.split(":")[0], 10);
        // 只在 0, 6, 12, 18 时显示刻度
        if (hour % 6 === 0) {
          arr.push({
            label: String(hour).padStart(2, "0") + "时",
            position: ((i + 0.5) / this.total) * 100,
          });
        }
      }
      return arr;
    },

    /**
     * 轨道内部分割线位置
     * 每6小时一条分割线
     * @returns {Array<{position: Number}>}
     */
    trackDividers() {
      const arr = [];
      for (let i = 0; i < this.total; i++) {
        const time = this.availableTimes[i] || "";
        const hour = parseInt(time.split(":")[0], 10);
        // 在 0, 6, 12, 18 时添加分割线（跳过第一个）
        if (hour % 6 === 0 && i > 0) {
          arr.push({
            position: (i / this.total) * 100,
          });
        }
      }
      return arr;
    },

    /**
     * 日期刻度数据
     * 将连续相同日期的时间点合并为一个日期段
     * 今天/明天/后天会添加前缀
     * @returns {Array<{label: String, left: Number, width: Number}>}
     */
    dateTicks() {
      if (!this.timeDates.length) return [];
      const result = [];
      let start = 0;
      let current = this.timeDates[0];
      // 获取今天、明天、后天的日期字符串用于比较
      const today = this.getDateLabel(0);
      const tomorrow = this.getDateLabel(1);
      const dayAfter = this.getDateLabel(2);

      // 遍历所有日期，将相同日期合并为一段
      for (let i = 1; i <= this.timeDates.length; i++) {
        if (i === this.timeDates.length || this.timeDates[i] !== current) {
          const count = i - start;
          let label = current;
          // 为今天/明天/后天添加前缀
          if (current === today) label = "今天" + current;
          else if (current === tomorrow) label = "明天" + current;
          else if (current === dayAfter) label = "后天" + current;
          result.push({
            label,
            left: (start / this.total) * 100,
            width: (count / this.total) * 100,
          });
          if (i < this.timeDates.length) {
            start = i;
            current = this.timeDates[i];
          }
        }
      }
      return result;
    },
  },
  /**
   * 监听器
   */
  watch: {
    /** 同步外部progress到内部状态 */
    progress(v) {
      this.innerProgress = v;
    },
    /** 播放状态变化时启动/停止自动播放 */
    playing(v) {
      v ? this.startPlay() : this.stopPlay();
    },
  },

  /**
   * 生命周期：组件挂载后
   * 添加全局鼠标事件监听，用于支持拖拽到轨道外部
   */
  mounted() {
    document.addEventListener("mousemove", this.onMouseMove);
    document.addEventListener("mouseup", this.onMouseUp);
  },

  /**
   * 生命周期：组件销毁前
   * 清理事件监听和定时器
   */
  beforeDestroy() {
    document.removeEventListener("mousemove", this.onMouseMove);
    document.removeEventListener("mouseup", this.onMouseUp);
    this.stopPlay();
  },

  /**
   * 组件方法
   */
  methods: {
    /**
     * 获取相对于今天偏移N天的日期字符串
     * @param {Number} offset - 天数偏移，0=今天，1=明天，2=后天
     * @returns {String} 格式如"2026年1月21日"
     */
    getDateLabel(offset) {
      const d = new Date(Date.now() + offset * 86400000);
      return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
    },

    /**
     * 切换播放/暂停状态
     * 通过emit触发父组件更新playing属性
     */
    togglePlay() {
      this.$emit("update:playing", !this.playing);
    },

    /**
     * 步进控制（前进/后退）
     * @param {Number} dir - 方向，1=前进，-1=后退
     */
    handleStep(dir) {
      let next = this.innerProgress + dir;
      // 循环播放：到达边界时跳转到另一端
      if (next < 0) next = this.total - 1;
      if (next >= this.total) next = 0;
      this.innerProgress = next;
      this.$emit("update:progress", next);
      this.$emit("progress-change", next);
    },

    /**
     * 色标类型变化处理
     * @param {String} val - 新的色标类型值
     */
    onColorTypeChange(val) {
      this.$emit("color-type-change", val);
    },

    /**
     * 轨道鼠标按下事件
     * 开始拖拽并立即更新位置
     * @param {MouseEvent} e
     */
    onMouseDown(e) {
      this.dragging = true;
      this.updateFromEvent(e);
    },

    /**
     * 全局鼠标移动事件
     * 拖拽时更新滑块位置
     * @param {MouseEvent} e
     */
    onMouseMove(e) {
      if (this.dragging) this.updateFromEvent(e);
    },

    /**
     * 全局鼠标释放事件
     * 结束拖拽
     */
    onMouseUp() {
      this.dragging = false;
    },

    /**
     * 轨道hover事件
     * 计算并更新hover位置索引
     * @param {MouseEvent} e
     */
    onHover(e) {
      const track = this.$refs.track;
      if (!track) return;
      const rect = track.getBoundingClientRect();
      // 限制x在轨道范围内
      const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
      // 计算对应的时间点索引
      const idx = Math.min(
        Math.floor((x / rect.width) * this.total),
        this.total - 1,
      );
      this.hoverIndex = idx;
    },

    /**
     * 根据鼠标事件更新进度
     * 将鼠标位置转换为时间点索引
     * @param {MouseEvent} e
     */
    updateFromEvent(e) {
      const track = this.$refs.track;
      if (!track) return;
      const rect = track.getBoundingClientRect();
      const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
      const idx = Math.min(
        Math.floor((x / rect.width) * this.total),
        this.total - 1,
      );
      // 只在索引变化时触发更新
      if (idx !== this.innerProgress) {
        this.innerProgress = idx;
        this.$emit("update:progress", idx);
        this.$emit("progress-change", idx);
      }
    },

    /**
     * 开始自动播放
     * 每1.5秒前进一个时间点
     */
    startPlay() {
      this.stopPlay();
      this.playTimer = setInterval(() => this.handleStep(1), 1500);
    },

    /**
     * 停止自动播放
     * 清除定时器
     */
    stopPlay() {
      if (this.playTimer) {
        clearInterval(this.playTimer);
        this.playTimer = null;
      }
    },
  },
};
</script>

<style scoped>
.playback-bar {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  background: linear-gradient(180deg, #e8f4fc 0%, #d9ebf7 100%);
  padding: 8px 16px;
  border-radius: 8px;
}

.playback-controls {
  display: flex;
  align-items: center;
  background: #f5f9fc;
  border-radius: 20px;
  padding: 4px 6px;
  gap: 2px;
  flex-shrink: 0;
}
.control-btn {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 10px;
  color: #1890ff;
  border-radius: 50%;
}
.control-btn:hover {
  background: rgba(24, 144, 255, 0.1);
}
.control-btn.play {
  background: #1890ff;
  color: #fff;
  width: 32px;
  height: 32px;
}
.control-btn.play:hover {
  background: #40a9ff;
}

.color-label {
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  padding-top: 2px;
}
.label-text {
  font-size: 13px;
  color: #333;
  white-space: nowrap;
}

.slider-wrapper {
  flex: 1;
  min-width: 0;
  position: relative;
  padding-top: 28px; /* 给tooltip留空间 */
}
.slider-track {
  position: relative;
  height: 20px;
  background: #ddd;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
}
.slider-fill {
  display: flex;
  height: 100%;
}
.segment {
  height: 100%;
  flex-shrink: 0;
}
.track-divider {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;
  background: rgba(0, 0, 0, 0.3);
  pointer-events: none;
}
.slider-thumb {
  position: absolute;
  top: 28px; /* 和 track 对齐 */
  width: 18px;
  height: 18px;
  border: 3px solid #555;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  margin-top: 10px; /* track高度的一半 */
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  pointer-events: none;
  z-index: 2;
}

.thumb-tooltip {
  position: absolute;
  bottom: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%);
  background: #333;
  color: #fff;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
}
.thumb-tooltip::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 5px solid transparent;
  border-top-color: #333;
}

.time-ticks {
  position: relative;
  height: 18px;
  margin-top: 2px;
}
.tick {
  position: absolute;
  transform: translateX(-50%);
  font-size: 11px;
  color: #666;
  white-space: nowrap;
}

.date-ticks {
  position: relative;
  height: 20px;
  display: flex;
}
.date-tick {
  position: absolute;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #333;
  border-left: 1px solid #aac;
  box-sizing: border-box;
}
.date-tick:first-child {
  border-left: none;
}

.hover-tooltip {
  position: absolute;
  top: 0;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  z-index: 5;
  pointer-events: none;
}
.hover-tooltip::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 5px solid transparent;
  border-top-color: rgba(0, 0, 0, 0.75);
}
</style>
