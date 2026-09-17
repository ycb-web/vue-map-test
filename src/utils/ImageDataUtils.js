/**
 * ImageDataUtils.js
 * 解析流场编码图片（包含元数据头和原始 RGB 分量），不执行任何补缺插值，保证 100% 最真实数据。
 */

export class NcJson {
  constructor(data, header) {
    this.data = data || [];
    this.header = header || {};
  }

  getData() {
    return this.data;
  }

  getHeader() {
    return this.header;
  }

  setData(data) {
    this.data = data || [];
  }

  setHeader(header) {
    this.header = header || {};
  }
}

/**
 * 标准 GRIB/NC Header 数据结构
 */
export class NcHeader {
  constructor() {
    this.basicAngle = 0;
    this.center = 7;
    this.centerName = "";
    this.discipline = 0;
    this.disciplineName = "Meteorological products";
    this.dx = 0;
    this.dy = 0;
    this.forecastTime = 0;
    this.genProcessType = 2;
    this.genProcessTypeName = "Forecast";
    this.gribEdition = 0;
    this.gribLength = 0;
    this.gridDefinitionTemplate = 0;
    this.gridDefinitionTemplateName = "Latitude_Longitude";
    this.gridUnits = "degrees";
    this.la1 = 0;
    this.la2 = 0;
    this.lo1 = 0;
    this.lo2 = 0;
    this.numberPoints = 0;
    this.nx = 0;
    this.ny = 0;
    this.parameterCategory = 2;
    this.parameterCategoryName = "Momentum";
    this.parameterNumber = 2;
    this.parameterNumberName = "u10m";
    this.parameterUnit = "m.s-1";
    this.productDefinitionTemplate = "productDefinitionTemplate";
    this.productDefinitionTemplateName =
      "Analysis/forecast at horizontal level/layer at a point in time";
    this.productStatus = 0;
    this.productStatusName = "Operational products";
    this.productType = 1;
    this.productTypeName = "Forecast products";
    this.refTime = "";
    this.scanMode = 0;
    this.shape = 0;
    this.shapeName = "Earth spherical with radius of 6;371;229.0 m";
    this.significanceOfRT = 1;
    this.significanceOfRTName = "Start of forecast";
    this.subDivisions = 0;
    this.subcenter = 0;
    this.surface1Type = 103;
    this.surface1TypeName = "Specified height level above ground";
    this.surface1Value = 10;
    this.surface2Type = 255;
    this.surface2TypeName = "Missing";
    this.surface2Value = 0;
    this.winds = "true";
  }
}

/**
 * 获取图片中的元数据 JSON 字符串
 */
function getMetaData(imgData) {
  const len = imgData.length;
  let ret = "";
  for (let i = 0; i < len; i += 4) {
    const r = imgData[i];
    const g = imgData[i + 1];
    const b = imgData[i + 2];
    ret += String.fromCharCode(r || 256);
    ret += String.fromCharCode(g || 256);
    ret += String.fromCharCode(b || 256);
  }
  ret = ret.replace(/#/g, "").replace(/Ā/g, "");
  const lastBrace = ret.lastIndexOf("}");
  if (lastBrace !== -1) {
    ret = ret.slice(0, lastBrace + 1);
  }
  return ret;
}

/**
 * 提取图片原始像素并解码为网格
 * 0 或 255 表示无效值/陆地/缺测，其余为真实海洋气象数据
 * @param {string} url - 图片路径
 * @param {number} factor - 采样因子（默认 1，即 100% 原始格点）
 */
function getImageRawData(url, factor = 1) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = url;

    img.onload = function () {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, img.width, img.height);
      const width = img.width;
      const height = img.height;
      const imgData = ctx.getImageData(0, 0, width, height);

      // 第一个像素记录元数据所占的行数
      const rowNumData = imgData.data.slice(0, 4);
      const rowNum = rowNumData[0] + rowNumData[1] + rowNumData[2];

      // 图片中的元数据字节
      const metaBytes = imgData.data.slice(4, rowNum * width * 4);
      let metaData = {};
      try {
        metaData = JSON.parse(getMetaData(metaBytes));
      } catch (err) {
        console.error("解析图片元数据失败:", err);
      }

      // 数值像素总行数 (height - rowNum)
      const dataRows = height - rowNum;
      const step = Math.max(1, Math.floor(factor));

      const newNx = Math.ceil(width / step);
      const newNy = Math.ceil(dataRows / step);
      const rGridData = [];
      const gGridData = [];
      const bGridData = [];

      const dataOffset = rowNum * width * 4;
      const pixels = imgData.data;

      for (let y = 0; y < dataRows; y += step) {
        const rowStart = dataOffset + y * width * 4;
        for (let x = 0; x < width; x += step) {
          const idx = rowStart + x * 4;
          const r = pixels[idx];
          const g = pixels[idx + 1];
          const b = pixels[idx + 2];

          // R 分量 -> u 分量
          if (metaData.scaleR !== undefined) {
            if (r === 255 || r === 0) {
              rGridData.push(null);
            } else {
              const realR = Math.round(((r - metaData.offsetR) / metaData.scaleR) * 100) / 100;
              rGridData.push(realR);
            }
          }

          // G 分量 -> v 分量
          if (metaData.scaleG !== undefined) {
            if (g === 255 || g === 0) {
              gGridData.push(null);
            } else {
              const realG = Math.round(((g - metaData.offsetG) / metaData.scaleG) * 100) / 100;
              gGridData.push(realG);
            }
          }

          // B 分量
          if (metaData.scaleB !== undefined && metaData.scaleB !== 0) {
            if (b === 255 || b === 0) {
              bGridData.push(null);
            } else {
              const realB = Math.round(((b - metaData.offsetB) / metaData.scaleB) * 100) / 100;
              bGridData.push(realB);
            }
          }
        }
      }

      resolve({
        r: rGridData.length ? rGridData : null,
        g: gGridData.length ? gGridData : null,
        b: bGridData.length ? bGridData : null,
        metaData,
        imageWidth: width,
        imageHeight: height,
        newNx,
        newNy,
        step,
      });
    };

    img.onerror = (err) => {
      reject(err);
    };
  });
}

/**
 * 主入口：将图片解析为标准 NC/GRIB JSON 数据
 * 严格保留最原始解析数据，不作任何加权补缺或插值
 * @param {string} url - 图片路径或 base64 / blob url
 * @param {number} factor - 采样因子（默认 1，即 100% 原始格点）
 * @returns {Promise<{ ncData: Array<NcJson>, metaData: object }>}
 */
export async function imageToNcJson(url, factor = 1) {
  const gridData = await getImageRawData(url, factor);
  const meta = gridData.metaData;
  const step = gridData.step;

  const dx = meta.dx * step;
  const dy = meta.dy * step;
  const nx = gridData.newNx;
  const ny = gridData.newNy;

  let lat1 = 0;
  let lat2 = 0;

  if (dy < 0) {
    lat1 = meta.startLat;
    lat2 = meta.startLat + dy * ny;
  } else {
    lat1 = meta.startLat + dy * ny;
    lat2 = meta.startLat;
  }
  lat2 = lat2 < -90 ? -90 : lat2;
  lat1 = lat1 > 90 ? 90 : lat1;

  let lo1 = meta.startLon;
  let lo2 = meta.startLon + dx * nx;
  lo1 = lo1 < -180 ? -180 : lo1;
  lo2 = lo2 > 360 ? 360 : lo2;

  const result = [];

  // u 分量 (来自 R 通道)
  if (gridData.r) {
    const headerU = new NcHeader();
    headerU.dx = dx;
    headerU.dy = Math.abs(dy);
    headerU.la1 = lat1;
    headerU.la2 = lat2;
    headerU.lo1 = lo1;
    headerU.lo2 = lo2;
    headerU.nx = nx;
    headerU.ny = ny;
    headerU.numberPoints = nx * ny;
    headerU.parameterCategory = 2;
    headerU.parameterNumber = 2;
    headerU.parameterNumberName = "u10m";
    headerU.parameterUnit = "m.s-1";

    const variableU = new NcJson();
    variableU.setData(gridData.r);
    variableU.setHeader(headerU);
    result.push(variableU);
  }

  // v 分量 (来自 G 通道)
  if (gridData.g) {
    const headerV = new NcHeader();
    headerV.dx = dx;
    headerV.dy = Math.abs(dy);
    headerV.la1 = lat1;
    headerV.la2 = lat2;
    headerV.lo1 = lo1;
    headerV.lo2 = lo2;
    headerV.nx = nx;
    headerV.ny = ny;
    headerV.numberPoints = nx * ny;
    headerV.parameterCategory = 2;
    headerV.parameterNumber = 3;
    headerV.parameterNumberName = "v10m";
    headerV.parameterUnit = "m.s-1";

    const variableV = new NcJson();
    variableV.setData(gridData.g);
    variableV.setHeader(headerV);
    result.push(variableV);
  }

  // B 通道 (若存在)
  if (gridData.b) {
    const headerB = new NcHeader();
    headerB.dx = dx;
    headerB.dy = Math.abs(dy);
    headerB.la1 = lat1;
    headerB.la2 = lat2;
    headerB.lo1 = lo1;
    headerB.lo2 = lo2;
    headerB.nx = nx;
    headerB.ny = ny;
    headerB.numberPoints = nx * ny;

    const variableB = new NcJson();
    variableB.setData(gridData.b);
    variableB.setHeader(headerB);
    result.push(variableB);
  }

  return {
    ncData: result,
    metaData: meta,
    samplingFactor: step,
  };
}

/**
 * 一维数据转二维网格数组
 */
export function convertToGrid(objData) {
  const { data, header } = objData;
  const nx = header.nx;
  const ny = header.ny;
  const grid = Array.from({ length: ny }, () => Array(nx).fill(null));
  for (let i = 0; i < data.length; i++) {
    const row = Math.floor(i / nx);
    const col = i % nx;
    grid[row][col] = data[i];
  }
  return grid;
}
