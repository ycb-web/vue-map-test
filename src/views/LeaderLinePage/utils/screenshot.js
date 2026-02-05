/**
 * 截图工具函数
 */
import html2canvas from "html2canvas";

/**
 * 截取页面并下载
 * @param {HTMLElement} element - 要截取的DOM元素
 * @param {string} filename - 下载文件名
 * @param {Object} options - 截图选项
 */
export async function captureAndDownload(
  element,
  filename = "screenshot.png",
  options = {}
) {
  try {
    const defaultOptions = {
      useCORS: true,
      allowTaint: true,
      backgroundColor: "#ffffff",
      scale: 2, // 高清截图
      logging: false,
      ...options,
    };

    const canvas = await html2canvas(element, defaultOptions);
    downloadCanvas(canvas, filename);
    return true;
  } catch (error) {
    console.error("截图失败:", error);
    return false;
  }
}

/**
 * 将canvas转为图片并下载
 * @param {HTMLCanvasElement} canvas - canvas元素
 * @param {string} filename - 文件名
 */
export function downloadCanvas(canvas, filename) {
  const link = document.createElement("a");
  link.download = filename;
  link.href = canvas.toDataURL("image/png");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * 生成带时间戳的文件名
 * @param {string} prefix - 文件名前缀
 * @returns {string} 文件名
 */
export function generateFilename(prefix = "screenshot") {
  const now = new Date();
  const timestamp = now
    .toISOString()
    .replace(/[-:T]/g, "")
    .slice(0, 14);
  return `${prefix}_${timestamp}.png`;
}
