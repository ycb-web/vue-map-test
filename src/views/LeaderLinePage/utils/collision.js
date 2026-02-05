/**
 * 碰撞检测工具函数
 */

/**
 * 检测两个矩形是否重叠
 * @param {Object} rect1 - 矩形1 { x, y, width, height }
 * @param {Object} rect2 - 矩形2 { x, y, width, height }
 * @param {number} padding - 间距
 * @returns {boolean} 是否重叠
 */
export function isRectOverlapping(rect1, rect2, padding = 10) {
  return !(
    rect1.x + rect1.width + padding < rect2.x ||
    rect2.x + rect2.width + padding < rect1.x ||
    rect1.y + rect1.height + padding < rect2.y ||
    rect2.y + rect2.height + padding < rect1.y
  );
}

/**
 * 计算两个矩形的重叠面积
 * @param {Object} rect1 - 矩形1
 * @param {Object} rect2 - 矩形2
 * @returns {number} 重叠面积
 */
export function getOverlapArea(rect1, rect2) {
  const xOverlap = Math.max(
    0,
    Math.min(rect1.x + rect1.width, rect2.x + rect2.width) -
      Math.max(rect1.x, rect2.x)
  );
  const yOverlap = Math.max(
    0,
    Math.min(rect1.y + rect1.height, rect2.y + rect2.height) -
      Math.max(rect1.y, rect2.y)
  );
  return xOverlap * yOverlap;
}

/**
 * 螺旋搜索算法 - 在锚点周围寻找空位
 * @param {Object} anchor - 锚点位置 { x, y }
 * @param {Object} panelSize - 面板尺寸 { width, height }
 * @param {Array} occupiedRects - 已占用的矩形列表
 * @param {Object} bounds - 边界 { width, height }
 * @param {number} step - 搜索步长
 * @param {number} maxRadius - 最大搜索半径
 * @returns {Object} 找到的位置 { x, y }
 */
export function spiralSearch(
  anchor,
  panelSize,
  occupiedRects,
  bounds,
  step = 30,
  maxRadius = 600
) {
  const margin = 10; // 边缘留白
  
  // 8个方向，优先级：上、右上、右、左上、右下、左、下、左下
  const directions = [
    { dx: 0, dy: -1 },   // 上
    { dx: 1, dy: -1 },   // 右上
    { dx: 1, dy: 0 },    // 右
    { dx: -1, dy: -1 },  // 左上
    { dx: 1, dy: 1 },    // 右下
    { dx: -1, dy: 0 },   // 左
    { dx: 0, dy: 1 },    // 下
    { dx: -1, dy: 1 },   // 左下
  ];

  let bestPosition = null;
  let bestScore = -Infinity;

  for (let radius = step; radius <= maxRadius; radius += step) {
    for (const dir of directions) {
      // 计算测试位置，面板中心对准搜索点
      const testX = anchor.x + dir.dx * radius - panelSize.width / 2;
      const testY = anchor.y + dir.dy * radius - panelSize.height / 2;

      const testRect = {
        x: testX,
        y: testY,
        width: panelSize.width,
        height: panelSize.height,
      };

      // 检查是否与已有面板重叠
      let hasOverlap = false;
      for (const rect of occupiedRects) {
        if (isRectOverlapping(testRect, rect)) {
          hasOverlap = true;
          break;
        }
      }

      if (hasOverlap) continue;

      // 计算位置得分（越多在屏幕内越好，距离锚点越近越好）
      const score = calculatePositionScore(testRect, bounds, anchor, radius, margin);
      
      if (score > bestScore) {
        bestScore = score;
        bestPosition = { x: testX, y: testY };
        
        // 如果完全在屏幕内且距离较近，直接返回
        if (score >= 1000 && radius <= step * 3) {
          return bestPosition;
        }
      }
    }
    
    // 如果找到了完全在屏幕内的位置，返回
    if (bestScore >= 1000) {
      return bestPosition;
    }
  }

  // 返回最佳位置，如果没找到则返回默认位置
  return bestPosition || {
    x: Math.max(margin, Math.min(anchor.x - panelSize.width / 2, bounds.width - panelSize.width - margin)),
    y: Math.max(margin, Math.min(anchor.y - panelSize.height - 50, bounds.height - panelSize.height - margin)),
  };
}

/**
 * 计算位置得分
 * @param {Object} rect - 面板矩形
 * @param {Object} bounds - 屏幕边界
 * @param {Object} anchor - 锚点位置
 * @param {number} radius - 距离锚点的半径
 * @param {number} margin - 边缘留白
 * @returns {number} 得分
 */
function calculatePositionScore(rect, bounds, anchor, radius, margin) {
  // 计算面板在屏幕内的比例
  const visibleLeft = Math.max(rect.x, margin);
  const visibleRight = Math.min(rect.x + rect.width, bounds.width - margin);
  const visibleTop = Math.max(rect.y, margin);
  const visibleBottom = Math.min(rect.y + rect.height, bounds.height - margin);
  
  const visibleWidth = Math.max(0, visibleRight - visibleLeft);
  const visibleHeight = Math.max(0, visibleBottom - visibleTop);
  const visibleArea = visibleWidth * visibleHeight;
  const totalArea = rect.width * rect.height;
  const visibleRatio = visibleArea / totalArea;
  
  // 完全在屏幕内得1000分基础分
  let score = 0;
  if (visibleRatio >= 0.99) {
    score = 1000;
  } else {
    score = visibleRatio * 500;
  }
  
  // 距离越近得分越高（最多加100分）
  const maxRadius = 600;
  score += (1 - radius / maxRadius) * 100;
  
  return score;
}

/**
 * 为面板计算不重叠的初始位置
 * 只计算锚点在可视区域内的面板
 * @param {Array} panels - 面板数据列表
 * @param {Object} map - Leaflet地图实例
 * @param {Object} defaultSize - 默认面板尺寸
 * @returns {Array} 带有计算后位置的面板列表
 */
export function calculateNonOverlappingPositions(panels, map, defaultSize = { width: 180, height: 120 }) {
  const occupiedRects = [];
  const container = map.getContainer();
  const bounds = {
    width: container.clientWidth,
    height: container.clientHeight,
  };
  const padding = 50; // 边缘容差

  return panels.map((panel) => {
    // 将经纬度转为屏幕坐标
    const point = map.latLngToContainerPoint([panel.lat, panel.lng]);
    const anchor = { x: point.x, y: point.y };
    const panelSize = panel.size || defaultSize;

    // 检查锚点是否在可视区域内
    const isInView =
      anchor.x >= -padding &&
      anchor.x <= bounds.width + padding &&
      anchor.y >= -padding &&
      anchor.y <= bounds.height + padding;

    if (!isInView) {
      // 不在可视区域内，返回基本信息但不计算位置
      return {
        ...panel,
        position: { x: -9999, y: -9999 }, // 放到屏幕外
        anchor,
        size: panelSize,
      };
    }

    // 寻找不重叠的位置
    const position = spiralSearch(anchor, panelSize, occupiedRects, bounds);

    // 记录已占用区域
    occupiedRects.push({
      x: position.x,
      y: position.y,
      width: panelSize.width,
      height: panelSize.height,
    });

    return {
      ...panel,
      position,
      anchor,
      size: panelSize,
    };
  });
}

/**
 * 计算面板到锚点的最佳连线点
 * @param {Object} panelRect - 面板矩形 { x, y, width, height }
 * @param {Object} anchor - 锚点位置 { x, y }
 * @returns {Object} 连线起点 { x, y }
 */
export function getLineStartPoint(panelRect, anchor) {
  const centerX = panelRect.x + panelRect.width / 2;
  const centerY = panelRect.y + panelRect.height / 2;

  // 计算锚点相对于面板中心的方向
  const dx = anchor.x - centerX;
  const dy = anchor.y - centerY;

  // 根据方向选择面板边缘的连接点
  if (Math.abs(dx) > Math.abs(dy)) {
    // 水平方向为主
    if (dx > 0) {
      // 锚点在右边
      return { x: panelRect.x + panelRect.width, y: centerY };
    } else {
      // 锚点在左边
      return { x: panelRect.x, y: centerY };
    }
  } else {
    // 垂直方向为主
    if (dy > 0) {
      // 锚点在下方
      return { x: centerX, y: panelRect.y + panelRect.height };
    } else {
      // 锚点在上方
      return { x: centerX, y: panelRect.y };
    }
  }
}
