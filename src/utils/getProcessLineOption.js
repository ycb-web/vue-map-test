import moment from "moment";

/**
 * 独立抽离的风/浪/潮位过程线图表配置生成方法
 * 使用方法:
 * 1. 引入此方法
 * 2. 调用 getProcessLineOption(dataList) 获取 option
 * 3. chart.setOption(option)
 */

// ---------------- 工具函数开始 ----------------

/** 中文方位 */
const positionName = [
  "北",
  "北东北",
  "东北",
  "东东北",
  "东",
  "东东南",
  "东南",
  "南东南",
  "南",
  "南西南",
  "西南",
  "西西南",
  "西",
  "西西北",
  "西北",
  "北西北",
];
/** 数值方位 */
const degreeRange = [
  11.25, 33.75, 56.25, 78.75, 101.25, 123.75, 146.25, 168.75, 191.25, 213.75,
  236.25, 258.75, 281.25, 303.75, 326.25, 348.75,
];

/** 角度转换为中文角度标识 */
export const degreeToPosition = (degree) => {
  if (degree === undefined || degree === null) return "--";
  let v = 0;
  if (degree > 360) {
    v = degree - 360;
  } else {
    v = +degree;
  }

  if (isNaN(v) || v < 0 || v > 360) {
    return "--";
  }

  const index = degreeRange.findIndex((d) => d > v);
  return positionName[index === -1 ? 0 : index];
};

/** 风速转风级 (简单实现) */
export const convertSpeedToLevel = (speed) => {
  if (speed < 0.3) return 0;
  if (speed < 1.6) return 1;
  if (speed < 3.4) return 2;
  if (speed < 5.5) return 3;
  if (speed < 8.0) return 4;
  if (speed < 10.8) return 5;
  if (speed < 13.9) return 6;
  if (speed < 17.2) return 7;
  if (speed < 20.8) return 8;
  if (speed < 24.5) return 9;
  if (speed < 28.5) return 10;
  if (speed < 32.7) return 11;
  if (speed < 37.0) return 12;
  if (speed < 41.5) return 13;
  if (speed < 46.2) return 14;
  if (speed < 51.0) return 15;
  if (speed < 56.1) return 16;
  return 17;
};

const arrowPath =
  "path://M872.8046453,917.79761746l-342.77302172-791.01466548-355.957894,791.01466548,349.36610512-177.97829973,349.3648106,177.97829973z,m0,0";

let curMonth = "";

// ---------------- 配置开始 ----------------

/**
 * 生成图表配置
 * @param dataList 数据列表
 * 结构示例:
 * [
 *   {
 *     elementName: '风', // 或 '10m风', '浪', '流'
 *     elementUnit: 'm/s', // 单位
 *     lineData: [ { time: '2023-01-01 00:00:00', value: 5.2, dir: 180, period: 2.5 }, ... ]
 *   }
 * ]
 */
export const getProcessLineOption = (dataList) => {
  // 基础配置
  const options = {
    legend: {
      data: [],
      textStyle: {
        color: "#dff7ff",
        fontSize: 14,
      },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        animation: false,
        label: {
          backgroundColor: "#505765",
        },
      },
      formatter: (item) => {
        let text = `时 间: ${item[0].data[0]}`;
        for (let i = 0; i < item.length; i++) {
          const seriesName = item[i].seriesName;
          if (seriesName === "风" || seriesName === "10m风") {
            text =
              text +
              `</br>风 速:   ${
                !item[i].data[1] ? "--" : item[i].data[1] + "m/s"
              }</br>风  向: ${
                !item[i].data[3] ? "--" : degreeToPosition(item[i].data[3])
              }</br>风 级:   ${
                !item[i].data[1] ? "--" : convertSpeedToLevel(item[i].data[1])
              }`;
          } else if (seriesName === "浪") {
            text =
              text +
              `</br>浪  高:   ${
                !item[i].data[1] ? "--" : item[i].data[1] + "m"
              }</br>浪  向: ${
                !item[i].data[1] ? "--" : degreeToPosition(item[i].data[3])
              }</br>浪周期: ${!item[i].data[4] ? "--" : item[i].data[4] + "s"}`;
          } else if (seriesName === "流") {
            text =
              text +
              `</br>流  速:   ${
                !item[i].data[1] ? "--" : item[i].data[1] + "m/s"
              }</br>流  向: ${
                !item[i].data[3] ? "--" : degreeToPosition(item[i].data[3])
              }`;
          } else {
            // 其他带方向的要素或潮位
            const val = item[i].data[1];
            const dir = item[i].data[3];
            const unit = item[i].seriesName === "潮位" ? "cm" : ""; // 简单兼容
            text = text + `</br>${seriesName}: ${val}${unit}`;
            if (dir !== undefined && dir !== null) {
              text = text + `</br>方向: ${degreeToPosition(dir)}`;
            }
          }
        }
        return text;
      },
    },
    xAxis: {
      type: "time",
      axisLabel: {
        color: "#d6f5ff",
        formatter: (params) => {
          const time = moment(params).format("MM-DD HH时");
          if (curMonth === time.substring(0, 5)) {
            curMonth = time.substring(0, 5);
            return time.substring(5, 11);
          } else {
            curMonth = time.substring(0, 5);
            return `${time.substring(5, 11)}\n${time.substring(0, 5)}`;
          }
        },
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: "rgba(255, 255, 255, 0.3)",
        },
      },
      axisLine: {
        lineStyle: {
          color: "rgba(255, 255, 255, 0.45)",
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "rgba(255, 255, 255, 0.12)",
        },
      },
    },
    dataZoom: [
      {
        show: true,
        realtime: true,
        minSpan: 5,
        start: 0,
        end: 100,
      },
      {
        type: "inside",
        realtime: true,
        minSpan: 5,
        start: 0,
        end: 100,
      },
    ],
    yAxis: [],
    grid: {
      right: "30px",
      bottom: "80px",
      left: "100px",
      top: "60px",
    },
    series: [],
  };

  // 2. 检查是否有有效数据
  if (!dataList || !dataList.length) {
    return options;
  }

  // 清空之前的配置
  options.series = [];
  options.yAxis = [];
  if (options.legend && options.legend.data) {
    options.legend.data = [];
  }
  const legendData = [];

  // 定义不同曲线的颜色数组
  const colors = ["#00f0ff", "#32c8ff", "#5ce5ff"];

  let validDataCount = 0;

  // 3. 遍历数据列表
  dataList.forEach((item, index) => {
    const { elementName, elementUnit, lineData } = item;

    // 确保该要素有线性数据
    if (lineData && lineData.length) {
      validDataCount += 1;
      // 特殊处理：将 "10m风" 显示为 "风"
      const element = elementName === "10m风" ? "风" : elementName;

      // 添加图例名称
      legendData.push(element);

      // 4. 解析单位
      const units = (elementUnit || "").split("-");
      const unit =
        units[0] || (element === "风" || element === "流" ? "m/s" : "m");

      // 5. 构建 Series 数据 (yList)
      const yList = [];
      lineData.forEach((point) => {
        const { value, time, dir, period } = point;

        if (element === "风" || element === "流") {
          // [时间, 风/流速, 箭头旋转角度(180-dir), 原始方向]
          yList.push([
            time,
            value !== null ? value.toFixed(2) : "",
            dir !== null ? 180 - parseInt(Number(dir).toFixed(0)) : "",
            dir !== null ? parseInt(Number(dir).toFixed(0)) : 0,
          ]);
        } else if (element === "浪") {
          // 海浪: [时间, 浪高, 箭头旋转角度, 原始方向, 周期]
          yList.push([
            time,
            value !== null ? value.toFixed(2) : "",
            dir ? 180 - parseInt(Number(dir).toFixed(0)) : "",
            dir !== null ? parseInt(Number(dir).toFixed(0)) : 0,
            period ? period.toFixed(2) : "",
          ]);
        } else {
          // 默认作为有方向的矢量处理
          yList.push([
            time,
            value !== null ? value.toFixed(2) : "",
            dir !== null ? 180 - parseInt(Number(dir).toFixed(0)) : "",
            dir !== null ? parseInt(Number(dir).toFixed(0)) : 0,
          ]);
        }
      });

      // 6. Series 配置
      const seriesItem = {
        name: element,
        data: yList,
        type: "line",
        yAxisIndex: index,
        color: colors[index % colors.length],
        lineStyle: {
          color: colors[index % colors.length],
        },
        showAllSymbol: true,
        symbol: arrowPath,
        symbolSize: 15,
        symbolOffset: [0, 0],
        symbolRotate: (params) => {
          return params[2]; // 根据数据中的旋转角度旋转箭头
        },
      };

      options.series.push(seriesItem);

      // 7. Y 轴配置
      options.yAxis.push({
        type: "value",
        name: unit ? element + "(" + unit + ")" : element,
        position: "left",
        nameLocation: "middle",
        nameTextStyle: {
          color: "#8fe8ff",
        },
        min: ({ max, min }) => {
          const calcMin = Math.floor(min - (max - min) * 0.2);
          return calcMin <= 0 ? 0 : calcMin;
        },
        max: ({ max, min }) => Math.ceil(max + (max - min) * 0.2),
        nameGap: 25,
        offset: 60 * index, // 多轴偏移
        axisLine: {
          show: true,
          lineStyle: {
            color: "rgba(0, 219, 255, 0.85)",
          },
        },
        axisTick: {
          show: true,
          lineStyle: {
            color: "rgba(255, 255, 255, 0.3)",
          },
        },
        axisLabel: {
          color: "#d6f5ff",
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: "dashed",
            color: "rgba(255, 255, 255, 0.12)",
          },
        },
      });
    }
  });

  // 更新 Legend
  if (options.legend) {
    options.legend.data = legendData;
  }
  options.grid.left = validDataCount * 70 + "px";

  return options;
};
