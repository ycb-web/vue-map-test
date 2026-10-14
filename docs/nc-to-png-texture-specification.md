# NetCDF 气象风场/浪场切片图片生成技术指南与算法规范

> **面向对象**：后端开发工程师、气象算法工程师、数据管道开发者  
> **适用场景**：将气象数值预报 NetCDF (`.nc`) 格式风浪网格数据批量转换为轻量级 RGBA PNG 图像切片，供前端高保真、低时延渲染动态流场与等值面（方案 A）。

---

## 1. 为什么采用 PNG 图像编码传输网格数据？

### 1.1 传统方案的性能瓶颈
1. **下发 GeoJSON 面场**：后端现场追踪多边形并生成 GeoJSON，单帧体积达 $200\text{ KB} \sim 1\text{ MB}$。120 个预报时效需要传输数十兆流量，网络传输耗时高达数百毫秒，难以满足 5-Day 时间轴流畅拖动；
2. **下发 JSON 浮点数组**：$221 \times 141$ 网格的双分量浮点数据序列化为文本 JSON 约需 $300\text{ KB} \sim 500\text{ KB}$，文本反序列化消耗前端大量 CPU 算力。

### 1.2 PNG 纹理切片的巨大优势
- **无损 Deflate 极速压缩**：利用气象风场的连续空间自相关性，PNG 格式单帧体积压缩至惊人的 **$19\text{ KB}$**（带宽节省达 **90%**）；
- **硬件级毫秒解码**：浏览器可通过离屏 Canvas 或 WebGL 在 **$1\text{ ms}$** 内完成显存加载与解码，为前端现场实时计算等值面与渲染流畅粒子提供坚实支撑。

---

## 2. RGBA 四通道定义与物理量存储规范

每张 PNG 图像分辨率严格为 **$221 \times 141$** 像素，每个像素包含 $4$ 个 8 位无符号整数通道（$R, G, B, A \in [0, 255]$）：

| 通道 | 对应物理意义 | 典型数据范围 | 存储值 $[0, 255]$ 说明 |
| :---: | :--- | :---: | :--- |
| **R** | **U10 分量**（经向风，自西向东为正） | $[-32.0, +31.75]\text{ m/s}$ | 通过「比例与偏移量」线性映射为 uint8 |
| **G** | **V10 分量**（纬向风，自南向北为正） | $[-32.0, +31.75]\text{ m/s}$ | 通过「比例与偏移量」线性映射为 uint8 |
| **B** | **保留扩展位** | — | 目前固定写入 `0`（未来可存阵风 Gust 或有效波高 Hs） |
| **A** | **有效数据掩膜（Mask）** | $\{0, 255\}$ | **$255$** 表示有效海洋数据；**$0$** 表示陆地掩膜或缺测点（透明） |

> [!IMPORTANT]
> **陆地与缺测掩膜关键规则**：  
> 当网格点属于陆地区域（地形 Mask）、缺测点（Missing Value）或包含 `NaN` 时，**必须将 Alpha 通道设置为 $0$**（$A = 0$）。  
> 前端在解算与追踪等值线时，凡遇 $A = 0$ 均判定为透明缺测，以确保天地图电子底图完全透出，且绝不在陆地上生成伪多边形。

---

## 3. 核心数学原理：为什么需要“比例（Scale）”与“偏移（Offset）”？

这是本套方案中最关键的技术细节。由于 PNG 颜色通道是标准的 8 位字节（`uint8`，范围必须在 $0 \sim 255$），而物理风速不仅包含正负方向（自西向东为正/自东向西为负），且通常是浮点数（如 $-7.85\text{ m/s}$），因此必须通过 **标定映射（Linear Quantization）** 将连续物理量压缩进 1 个字节中。

### 3.1 核心公式

#### 1. 后端编码公式（Python / C++）
$$\text{Pixel} = \text{clip}\left(\text{round}\left(\frac{\text{PhysicsValue}}{\text{SCALE}}\right) + \text{OFFSET}, \; 0, \; 255\right)$$

#### 2. 前端解码公式（JavaScript）
$$\text{PhysicsValue} = (\text{Pixel} - \text{OFFSET}) \times \text{SCALE}$$

---

### 3.2 当前项目采用的标准参数

当前系统统一采用的标准量化参数如下：

- **$\text{OFFSET} = 128$（零位偏移）**：
  - 物理风速 $0.0\text{ m/s}$ 恰好落在字节中心值 $128$；
  - 正风向（$>0$）映射到 $129 \sim 255$；
  - 负风向（$<0$）映射到 $0 \sim 127$。
- **$\text{SCALE} = 0.25$（量化比例 / 分辨率）**：
  - **物理分辨率**：灰度值每增加 $1$，对应物理风速增加 **$0.25\text{ m/s}$**。半阶量化最大误差为 $\pm 0.125\text{ m/s}$，完全优于常规航海气象业务报文所要求的 $0.5\text{ m/s}$ 精度；
  - **动态动态量程（Dynamic Range）**：
    - 负向极值（Pixel = $0$）：$(0 - 128) \times 0.25 = \mathbf{-32.0\text{ m/s}}$
    - 正向极值（Pixel = $255$）：$(255 - 128) \times 0.25 = \mathbf{+31.75\text{ m/s}}$
    - 最大合风速（模长）：$\sqrt{32^2 + 32^2} \approx \mathbf{45.25\text{ m/s}}$（可完整容纳蒲福风力 14 级强台风，常规海况绝不会发生溢出截断）。

### 3.3 进阶扩展：若遇极端超强台风（>16级）该如何调整 Scale？
若后续预报区域遇到超强热带气旋，风速超过 $32\text{ m/s}$：
- 可将 Scale 调大至 $0.5$（此时动态范围扩大为 $[-64.0, +63.5]\text{ m/s}$，精度为 $0.5\text{ m/s}$）；
- 调整 Scale 时只需前端同步修改 `(raw - 128) * scale` 系数即可。

---

## 4. 空间网格几何与图像坐标系对齐（排坑指南）

气象坐标系（GIS）与屏幕图像坐标系（Canvas/PNG）的 Y 轴方向往往相反，后端开发者必须特别注意南北方向的行序对齐：

### 4.1 几何网格参数
- **经度（X 轴）**：$105.0^\circ\text{E} \sim 121.5^\circ\text{E}$，步长 $\Delta \lambda = 0.075^\circ$，点数 $N_x = \frac{121.5 - 105.0}{0.075} + 1 = \mathbf{221}$ 列；
- **纬度（Y 轴）**：$15.0^\circ\text{N} \sim 25.5^\circ\text{N}$，步长 $\Delta \phi = 0.075^\circ$，点数 $N_y = \frac{25.5 - 15.0}{0.075} + 1 = \mathbf{141}$ 行。

### 4.2 图像行序与纬度对照关系
- **PNG 图像第 0 行（顶部）** $\iff$ **北纬 $25.5^\circ$（北边界）**；
- **PNG 图像第 140 行（底部）** $\iff$ **北纬 $15.0^\circ$（南边界）**。

> [!WARNING]
> **排坑避坑（南北翻转）**：  
> 部分 NC 文件（如 ERA5 / GFS）的纬度数组是从南往北单调递增的（$-90 \to +90$ 或 $15.0 \to 25.5$）。此时直接转为图片会导致**画面南北倒置**！  
> **处理方法**：在写入图片前，检查纬度数组序列；若第一行是南纬，必须执行 `np.flipud(grid)` 进行垂直翻转，确保第一行始终为北纬 $25.5^\circ$！

---

## 5. 文件命名与产物规范

- **输出格式**：标准 PNG（推荐开启无损压缩优化 `optimize=True`）；
- **分辨率**：严格保持 **$221 \times 141$ 像素**（严禁缩放插值，确保 1:1 像元对应网格点）；
- **预报时效命名**：`wind_uv_000.png` 至 `wind_uv_119.png`（按 3 位数字补零编号，代表 $+0\text{h}$ 至 $+119\text{h}$）。

---

## 6. 后端处理标准 Python 代码范例

项目仓库中提供了即插即用的生产级转换脚本：[`scripts/nc_to_wind_png.py`](file:///Users/coder_xiaoyu/Documents/personal/03_learn/02_前端/01_project/vue-map-test/scripts/nc_to_wind_png.py)。

后端工程师也可直接复制以下核心实现：

```python
import numpy as np
from PIL import Image

SCALE = 0.25
OFFSET = 128

def convert_nc_slice_to_png(u_2d, v_2d, output_path, is_north_to_south=True):
    """
    参数:
      u_2d: 221x141 的浮点型二维矩阵 (m/s)
      v_2d: 221x141 的浮点型二维矩阵 (m/s)
      output_path: 保存的 PNG 路径，如 "wind_uv_000.png"
      is_north_to_south: 若传入的矩阵第0行是南纬，需传 False 自动翻转
    """
    if not is_north_to_south:
        u_2d = np.flipud(u_2d)
        v_2d = np.flipud(v_2d)

    h, w = u_2d.shape  # 141, 221
    
    # 识别有效海面与陆地掩膜 (NaN 为缺测/陆地)
    valid_mask = ~np.isnan(u_2d) & ~np.isnan(v_2d)

    # 1. R 通道 (U 分量)
    r_chan = np.zeros((h, w), dtype=np.uint8)
    r_chan[valid_mask] = np.clip(np.round(u_2d[valid_mask] / SCALE) + OFFSET, 0, 255).astype(np.uint8)

    # 2. G 通道 (V 分量)
    g_chan = np.zeros((h, w), dtype=np.uint8)
    g_chan[valid_mask] = np.clip(np.round(v_2d[valid_mask] / SCALE) + OFFSET, 0, 255).astype(np.uint8)

    # 3. B 通道 (保留填0)
    b_chan = np.zeros((h, w), dtype=np.uint8)

    # 4. A 通道 (有效点 255，陆地 0)
    a_chan = np.zeros((h, w), dtype=np.uint8)
    a_chan[valid_mask] = 255

    # 合成并保存
    rgba = np.dstack((r_chan, g_chan, b_chan, a_chan))
    img = Image.fromarray(rgba, mode="RGBA")
    img.save(output_path, format="PNG", optimize=True)
```

---

## 7. 供后端直接粘贴给 AI 的 Prompt 模板

后端工程师若需借助 AI 改造已有的数据处理流水线（如 Python / Go / Java / C++ 数据服务），可直接复制以下 Prompt：

```text
你好！我们前端正在采用气象数据 RGBA PNG 切片方案来驱动 WebGIS 动态风场与等值面。
请帮我编写一段处理 NetCDF (.nc) 文件的脚本：

【数据规范要求】
1. 网格尺寸：宽度 nx = 221（经度 105.0°E ~ 121.5°E，步长 0.075°），高度 ny = 141（纬度 15.0°N ~ 25.5°N，步长 0.075°）。
2. 图像行序：图片第 0 行必须是北纬 25.5°N，第 140 行是南纬 15.0°N（如果原 NC 是南向北排列需做 np.flipud 垂直翻转）。
3. 编码规则：
   - R 通道存储 U 分量（m/s）：R = clip(round(u / 0.25) + 128, 0, 255)
   - G 通道存储 V 分量（m/s）：G = clip(round(v / 0.25) + 128, 0, 255)
   - B 通道固定填 0
   - A 通道存储有效性掩膜：有效海面填 255；陆地或 NaN 缺测点填 0。
4. 命名格式：输出 120 个时效的切片，命名为 wind_uv_000.png 到 wind_uv_119.png。

请提供高效批量转换的代码并附带自检校验代码。
```
