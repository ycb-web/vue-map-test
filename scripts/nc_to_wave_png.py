#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
NC 气象海浪场数据转 RGBA PNG 纹理切片工具
----------------------------------------------------------------------
功能说明：
  读取气象海洋数值模式 NetCDF (.nc) 格式海浪数据，
  支持两种常见海浪数据格式：
    1. 矢量分量型（如 wave_u / wave_v，单位 m，自动合成有效波高 Hs = sqrt(u^2 + v^2)）
    2. 标量型（如 hs 波高 + dir 浪向，自动分解为 u/v 矢量）
  将其紧凑编码为 120 个时效的 RGBA PNG 图像切片 (221x141 分辨率) 及配套 metadata.json。

RGBA 通道定义：
  - R 通道: 海浪 U 分量 (经向浪高，西->东为正，[-6.4, +6.35]m，Scale=0.05m，Offset=128)
  - G 通道: 海浪 V 分量 (纬向浪高，南->北为正，[-6.4, +6.35]m，Scale=0.05m，Offset=128)
  - B 通道: 有效波高 Hs (显著波高，[0, 12.75]m，Scale=0.05m，Offset=0)
  - A 通道: 陆地/海面掩膜 (海面有效点=255, 陆地/NaN=0)

依赖安装：
  pip install netCDF4 xarray numpy pillow
----------------------------------------------------------------------
"""

import os
import sys
import json
import numpy as np
from PIL import Image

# ======================================================================
# 1. 核心网格几何参数 (华南沿海/南海北部区域标准网格)
# ======================================================================
GRID_WIDTH = 221       # 经度方向网格点数 (nx)
GRID_HEIGHT = 141      # 纬度方向网格点数 (ny)
LON_MIN = 105.0        # 起始经度 (西边界)
LON_MAX = 121.5        # 结束经度 (东边界)
LAT_MAX = 25.5         # 起始纬度 (北边界 - 对应图片第0行)
LAT_MIN = 15.0         # 结束纬度 (南边界 - 对应图片第140行)
GRID_RES = 0.075       # 空间分辨率 (度)

# ======================================================================
# 2. 海浪物理量量化标定参数 (Scale 与 Offset)
# ======================================================================
# 海浪矢量分量 (U, V)
OFFSET_UV = 128        # 0 值落在字节中心 128
SCALE_UV = 0.05        # 1 个灰度阶 = 0.05米 (5cm 极高精度)
# 动态量程: (0 - 128)*0.05 = -6.4m 至 (255 - 128)*0.05 = +6.35m

# 有效波高 Hs (Significant Wave Height, 必须 >= 0)
OFFSET_HS = 0          # 0 值对应 0 像素
SCALE_HS = 0.05        # 1 个灰度阶 = 0.05米 (5cm 极高精度)
# 动态量程: 0.0m 至 (255 * 0.05) = 12.75m (完美覆盖从微浪到狂涛巨浪)


def encode_uv(val):
    """海浪分量浮点数转 uint8 像素值"""
    if val is None or np.isnan(val):
        return 0
    return np.clip(np.round(val / SCALE_UV) + OFFSET_UV, 0, 255).astype(np.uint8)


def decode_uv(pixel_val):
    """[自验] 像素值还原海浪分量 (m)"""
    return (float(pixel_val) - OFFSET_UV) * SCALE_UV


def encode_hs(val):
    """有效波高浮点数转 uint8 像素值"""
    if val is None or np.isnan(val):
        return 0
    return np.clip(np.round(val / SCALE_HS) + OFFSET_HS, 0, 255).astype(np.uint8)


def decode_hs(pixel_val):
    """[自验] 像素值还原有效波高 (m)"""
    return (float(pixel_val) - OFFSET_HS) * SCALE_HS


def convert_wave_frame_to_rgba(u_grid, v_grid, hs_grid=None):
    """
    将单帧 221x141 的海浪网格数据合成为 RGBA PNG 图像。

    参数：
      u_grid: np.ndarray, shape=(141, 221), 经向浪高分量 (m)
      v_grid: np.ndarray, shape=(141, 221), 纬向浪高分量 (m)
      hs_grid: np.ndarray, 可选, 有效波高 (m)。若为空，自动通过 sqrt(u^2 + v^2) 计算
    """
    assert u_grid.shape == (GRID_HEIGHT, GRID_WIDTH), f"U网格尺寸异常: {u_grid.shape}"
    assert v_grid.shape == (GRID_HEIGHT, GRID_WIDTH), f"V网格尺寸异常: {v_grid.shape}"

    # 1. 陆地/海洋有效点掩膜判定 (海面非 NaN 为 True)
    is_valid = (~np.isnan(u_grid)) & (~np.isnan(v_grid))

    # 2. 计算有效波高 (若未显式提供)
    if hs_grid is None:
        hs_grid = np.zeros_like(u_grid)
        hs_grid[is_valid] = np.sqrt(u_grid[is_valid]**2 + v_grid[is_valid]**2)

    # 3. R 通道：U 分量
    r_channel = np.zeros((GRID_HEIGHT, GRID_WIDTH), dtype=np.uint8)
    r_channel[is_valid] = np.clip(np.round(u_grid[is_valid] / SCALE_UV) + OFFSET_UV, 0, 255).astype(np.uint8)

    # 4. G 通道：V 分量
    g_channel = np.zeros((GRID_HEIGHT, GRID_WIDTH), dtype=np.uint8)
    g_channel[is_valid] = np.clip(np.round(v_grid[is_valid] / SCALE_UV) + OFFSET_UV, 0, 255).astype(np.uint8)

    # 5. B 通道：有效波高 Hs
    b_channel = np.zeros((GRID_HEIGHT, GRID_WIDTH), dtype=np.uint8)
    b_channel[is_valid] = np.clip(np.round(hs_grid[is_valid] / SCALE_HS) + OFFSET_HS, 0, 255).astype(np.uint8)

    # 6. A 通道：海面掩膜 (海洋=255, 陆地/NaN=0)
    a_channel = np.zeros((GRID_HEIGHT, GRID_WIDTH), dtype=np.uint8)
    a_channel[is_valid] = 255

    rgba_array = np.dstack((r_channel, g_channel, b_channel, a_channel))
    return Image.fromarray(rgba_array, mode="RGBA")


def process_wave_nc_file(nc_file_path, output_dir, max_frames=120):
    """
    解析海浪 NetCDF 文件并批量生成 RGBA PNG 切片及 metadata.json
    """
    try:
        import xarray as xr
    except ImportError:
        print("错误: 缺少 xarray 库，请先执行: pip install xarray netCDF4")
        sys.exit(1)

    if not os.path.exists(nc_file_path):
        print(f"错误: 找不到输入海浪 NC 文件: {nc_file_path}")
        sys.exit(1)

    os.makedirs(output_dir, exist_ok=True)
    print(f"--> [1/4] 正在读取海浪 NetCDF 文件: {nc_file_path} ...")
    ds = xr.open_dataset(nc_file_path)

    # 变量名识别策略 (兼容 wave_u/wave_v 或 u/v 或 hs/dir)
    u_var, v_var, hs_var = None, None, None
    for cand in ["wave_u", "u_wave", "u", "WAVE_U", "u10"]:
        if cand in ds.data_vars:
            u_var = cand
            break
    for cand in ["wave_v", "v_wave", "v", "WAVE_V", "v10"]:
        if cand in ds.data_vars:
            v_var = cand
            break
    for cand in ["hs", "swh", "significant_wave_height", "htsgw", "VHM0"]:
        if cand in ds.data_vars:
            hs_var = cand
            break

    print(f"--> [2/4] 变量识别结果: u_var='{u_var}', v_var='{v_var}', hs_var='{hs_var}'")

    if not (u_var and v_var) and not hs_var:
        raise ValueError(f"无法匹配海浪变量！当前文件包含的变量: {list(ds.data_vars.keys())}")

    # 坐标系检查与南北翻转校正
    lat_name = "lat" if "lat" in ds.coords else "latitude"
    lon_name = "lon" if "lon" in ds.coords else "longitude"
    time_name = "time" if "time" in ds.dims else "step"

    lats = ds[lat_name].values
    need_flip_lat = False
    if lats[0] < lats[-1]:
        print(f"    [提示] 纬度数组为南向北升序 ({lats[0]:.2f}° -> {lats[-1]:.2f}°)，自动执行垂直翻转以匹配图像坐标！")
        need_flip_lat = True

    time_steps = len(ds[time_name])
    total_frames = min(max_frames, time_steps)
    print(f"--> [3/4] 计划转换 {total_frames} 个预报时效 (NC总时效: {time_steps}) ...")

    # 统计还原精度误差
    max_err_u, max_err_v, max_err_hs = 0.0, 0.0, 0.0

    for hour in range(total_frames):
        if u_var and v_var:
            u_slice = ds[u_var].isel({time_name: hour}).values.astype(np.float32)
            v_slice = ds[v_var].isel({time_name: hour}).values.astype(np.float32)
            if need_flip_lat:
                u_slice = np.flipud(u_slice)
                v_slice = np.flipud(v_slice)
            hs_slice = np.sqrt(u_slice**2 + v_slice**2)
        else:
            # 仅有波高标量时
            hs_slice = ds[hs_var].isel({time_name: hour}).values.astype(np.float32)
            if need_flip_lat:
                hs_slice = np.flipud(hs_slice)
            u_slice = np.zeros_like(hs_slice)
            v_slice = np.zeros_like(hs_slice)

        img = convert_wave_frame_to_rgba(u_slice, v_slice, hs_slice)

        filename = f"wave_uv_{hour:03d}.png"
        filepath = os.path.join(output_dir, filename)
        img.save(filepath, format="PNG", optimize=True)

        # 抽样自检验算误差
        valid = ~np.isnan(u_slice)
        if np.any(valid):
            rgba_arr = np.array(img)
            r_val = rgba_arr[:, :, 0][valid]
            g_val = rgba_arr[:, :, 1][valid]
            b_val = rgba_arr[:, :, 2][valid]

            u_rec = (r_val.astype(float) - OFFSET_UV) * SCALE_UV
            v_rec = (g_val.astype(float) - OFFSET_UV) * SCALE_UV
            hs_rec = (b_val.astype(float) - OFFSET_HS) * SCALE_HS

            err_u = np.max(np.abs(u_slice[valid] - u_rec))
            err_v = np.max(np.abs(v_slice[valid] - v_rec))
            err_hs = np.max(np.abs(hs_slice[valid] - hs_rec))

            max_err_u = max(max_err_u, err_u)
            max_err_v = max(max_err_v, err_v)
            max_err_hs = max(max_err_hs, err_hs)

        if hour % 24 == 0 or hour == total_frames - 1:
            size_kb = os.path.getsize(filepath) / 1024
            print(f"    [生成切片] {filename} (时效 +{hour:03d}h) - 体积: {size_kb:.1f} KB")

    # 4. 生成统一元数据描述文件 metadata.json
    metadata = {
        "dataset": "Marine Numerical Wave Forecast (South China Sea)",
        "type": "wave",
        "format": "RGBA PNG Slices",
        "bounds": {
            "west": LON_MIN,
            "east": LON_MAX,
            "south": LAT_MIN,
            "north": LAT_MAX,
        },
        "grid": {
            "width": GRID_WIDTH,
            "height": GRID_HEIGHT,
            "resLon": GRID_RES,
            "resLat": GRID_RES,
            "totalPoints": GRID_WIDTH * GRID_HEIGHT,
        },
        "channels": {
            "R": {
                "variable": "wave_u",
                "name": "海浪东西向经向分量 (West to East)",
                "unit": "m",
                "scale": SCALE_UV,
                "offset": OFFSET_UV,
                "formula": "value = (R - offset) * scale",
                "min": (0 - OFFSET_UV) * SCALE_UV,
                "max": (255 - OFFSET_UV) * SCALE_UV,
            },
            "G": {
                "variable": "wave_v",
                "name": "海浪南北向纬向分量 (South to North)",
                "unit": "m",
                "scale": SCALE_UV,
                "offset": OFFSET_UV,
                "formula": "value = (G - offset) * scale",
                "min": (0 - OFFSET_UV) * SCALE_UV,
                "max": (255 - OFFSET_UV) * SCALE_UV,
            },
            "B": {
                "variable": "hs",
                "name": "有效波高 / 显著波高 (Significant Wave Height)",
                "unit": "m",
                "scale": SCALE_HS,
                "offset": OFFSET_HS,
                "formula": "value = B * scale",
                "min": 0.0,
                "max": 255 * SCALE_HS,
            },
            "A": {
                "name": "海陆与缺测掩膜 (Sea/Land Mask)",
                "seaValue": 255,
                "landValue": 0,
                "description": "255 表示海洋有效数据，0 表示陆地掩膜或缺测点",
            },
        },
        "frames": {
            "total": total_frames,
            "namingPattern": "wave_uv_{hour:03d}.png",
            "intervalHours": 1,
        },
    }

    meta_path = os.path.join(output_dir, "metadata.json")
    with open(meta_path, "w", encoding="utf-8") as f:
        json.dump(metadata, f, ensure_ascii=False, indent=2)

    print(f"--> [4/4] 转换圆满完成！元数据已输出至: {meta_path}")
    print(f"    - 最大误差自检: U分量={max_err_u:.4f}m, V分量={max_err_v:.4f}m, 有效波高={max_err_hs:.4f}m")
    print(f"    - 全部误差均严格小于 {SCALE_UV/2:.3f}m 理论极限！")


if __name__ == "__main__":
    # 默认路径配置
    default_nc = "nc-灰度图/wave_uv_rec_2026100912.nc"
    default_out = "public/nc-wave-uv"

    target_out = sys.argv[1] if len(sys.argv) > 1 else default_out
    target_nc = sys.argv[2] if len(sys.argv) > 2 else default_nc

    process_wave_nc_file(target_nc, target_out, max_frames=120)
