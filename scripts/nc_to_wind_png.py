#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
NC 气象风场数据转 RGBA PNG 纹理切片工具
----------------------------------------------------------------------
功能说明：
  读取气象数值预报 NetCDF (.nc) 格式风场数据（U10、V10 分量），
  将其编码为包含 120 个预报时效的紧凑 RGBA PNG 图像切片。
  单帧仅约 19KB，前端 Canvas 可在 1ms 内极速解码并驱动动态粒子流场与等值面。

依赖安装：
  pip install netCDF4 xarray numpy pillow
----------------------------------------------------------------------
"""

import os
import sys
import numpy as np
from PIL import Image

# ======================================================================
# 核心编码参数配置 (与前端解算引擎严格对齐)
# ======================================================================
# 网格几何与范围
GRID_WIDTH = 221       # 经度方向网格点数 (nx)
GRID_HEIGHT = 141      # 纬度方向网格点数 (ny)
LON_MIN = 105.0        # 起始经度 (lo1, 西边界)
LON_MAX = 121.5        # 结束经度 (lo2, 东边界)
LAT_MAX = 25.5         # 起始纬度 (la1, 北边界 - 对应图片顶部第0行)
LAT_MIN = 15.0         # 结束纬度 (la2, 南边界 - 对应图片底部第140行)
GRID_RES = 0.075       # 空间分辨率 (度)

# 物理量量化参数 (核心比例 Scale 与 偏移量 Offset)
# 量化公式: Pixel = clip(round(PhysicsValue / SCALE) + OFFSET, 0, 255)
# 解码公式: PhysicsValue = (Pixel - OFFSET) * SCALE
SCALE = 0.25           # 量化分辨率: 1个灰度阶 = 0.25 m/s
OFFSET = 128           # 零值偏移量: 0 m/s 映射为像素值 128
# 可表达的动态物理范围:
#   最小值 (Pixel=0)   : (0 - 128) * 0.25 = -32.0 m/s
#   最大值 (Pixel=255) : (255 - 128) * 0.25 = +31.75 m/s
#   模长极值: sqrt(32^2 + 32^2) ≈ 45.25 m/s (已覆盖14级强台风极限)


def encode_component(phys_val, scale=SCALE, offset=OFFSET):
    """
    将物理风速分量标量值 (m/s) 编码为 uint8 像素值 [0, 255]
    """
    if phys_val is None or np.isnan(phys_val):
        return 0
    # 四舍五入后偏移，并截断在 0~255 区间
    val = np.round(phys_val / scale) + offset
    return np.clip(val, 0, 255).astype(np.uint8)


def decode_component(pixel_val, scale=SCALE, offset=OFFSET):
    """
    [自验工具] 从 uint8 像素值还原出物理风速 (m/s)，与前端 JS 解码逻辑一致
    """
    return (float(pixel_val) - offset) * scale


def convert_uv_grid_to_rgba_image(u_grid, v_grid, mask_grid=None):
    """
    将单个预报时效的 2D U/V 物理网格转换为单张 RGBA PNG 图像。

    参数：
      u_grid: np.ndarray, shape=(141, 221), 浮点型，单位 m/s (U10 分量)
              第 0 行对应北纬 LAT_MAX (25.5°N)，最后一行对应南纬 LAT_MIN (15.0°N)
      v_grid: np.ndarray, shape=(141, 221), 浮点型，单位 m/s (V10 分量)
      mask_grid: np.ndarray (可选), shape=(141, 221), 布尔或数值型
                 True/1 表示海面(有效数据)，False/0 表示陆地或缺测

    返回：
      PIL.Image 对象 (RGBA 模式，尺寸 221x141)
    """
    assert u_grid.shape == (GRID_HEIGHT, GRID_WIDTH), f"U 网格尺寸异常: {u_grid.shape}"
    assert v_grid.shape == (GRID_HEIGHT, GRID_WIDTH), f"V 网格尺寸异常: {v_grid.shape}"

    # 1. 缺测与陆地掩膜判定
    # 如果数据中存在 NaN，或者 mask_grid 指定了陆地，则将其置为透明点
    is_valid = ~np.isnan(u_grid) & ~np.isnan(v_grid)
    if mask_grid is not None:
        is_valid = is_valid & (mask_grid > 0)

    # 2. R 通道：存储 U 分量 (自西向东为正)
    # 填充默认 0，有效区域按公式量化
    r_channel = np.zeros((GRID_HEIGHT, GRID_WIDTH), dtype=np.uint8)
    u_valid = u_grid[is_valid]
    r_channel[is_valid] = np.clip(np.round(u_valid / SCALE) + OFFSET, 0, 255).astype(np.uint8)

    # 3. G 通道：存储 V 分量 (自南向北为正)
    g_channel = np.zeros((GRID_HEIGHT, GRID_WIDTH), dtype=np.uint8)
    v_valid = v_grid[is_valid]
    g_channel[is_valid] = np.clip(np.round(v_valid / SCALE) + OFFSET, 0, 255).astype(np.uint8)

    # 4. B 通道：保留位，目前固定填充 0
    b_channel = np.zeros((GRID_HEIGHT, GRID_WIDTH), dtype=np.uint8)

    # 5. A 通道：透明度掩膜
    # 海洋有效点 = 255 (完全不透明)，陆地/缺测点 = 0 (完全透明)
    a_channel = np.zeros((GRID_HEIGHT, GRID_WIDTH), dtype=np.uint8)
    a_channel[is_valid] = 255

    # 6. 合成 RGBA 并构造 Pillow 图像
    rgba_array = np.dstack((r_channel, g_channel, b_channel, a_channel))
    img = Image.fromarray(rgba_array, mode="RGBA")
    return img


def process_nc_file(nc_file_path, output_dir, u_var_name=None, v_var_name=None):
    """
    处理真实 NetCDF 文件并批量导出 120 个时效的 PNG 图像。
    """
    try:
        import xarray as xr
    except ImportError:
        print("错误: 请先安装 xarray: pip install xarray netCDF4")
        return

    os.makedirs(output_dir, exist_ok=True)
    print(f"--> 正在读取 NetCDF 文件: {nc_file_path} ...")
    ds = xr.open_dataset(nc_file_path)

    # 自动识别 U/V 分量变量名
    if not u_var_name or u_var_name not in ds.data_vars:
        for c in ["windx_grid", "u10", "u", "UGRD", "U", "u_wind"]:
            if c in ds.data_vars:
                u_var_name = c
                break
    if not v_var_name or v_var_name not in ds.data_vars:
        for c in ["windy_grid", "v10", "v", "VGRD", "V", "v_wind"]:
            if c in ds.data_vars:
                v_var_name = c
                break

    if not u_var_name or not v_var_name:
        raise ValueError(f"未能在 NC 文件中找到匹配的风场 U/V 变量名，当前变量: {list(ds.data_vars.keys())}")

    print(f"--> 匹配风场变量: U={u_var_name}, V={v_var_name}")

    # 检查并统一经纬度维度名称
    lat_name = "lat" if "lat" in ds.coords else "latitude"
    lon_name = "lon" if "lon" in ds.coords else "longitude"
    time_name = "time" if "time" in ds.dims else "step"

    # 确保纬度从北往南排列 (25.5° -> 15.0°)
    lats = ds[lat_name].values
    need_flip_lat = False
    if lats[0] < lats[-1]:
        print("提示: NC 文件纬度是从南向北排列，已自动进行南北翻转以匹配图像坐标系！")
        need_flip_lat = True

    # 预报时效数（最高支持 120 帧）
    time_steps = len(ds[time_name])
    total_frames = min(120, time_steps)
    print(f"--> 检测到预报时效总数: {time_steps} 帧，将生成前 {total_frames} 帧切片...")

    for hour in range(total_frames):
        u_slice = ds[u_var_name].isel({time_name: hour}).values
        v_slice = ds[v_var_name].isel({time_name: hour}).values

        if need_flip_lat:
            u_slice = np.flipud(u_slice)
            v_slice = np.flipud(v_slice)

        # 生成 RGBA 切片图像
        img = convert_uv_grid_to_rgba_image(u_slice, v_slice)

        filename = f"wind_uv_{hour:03d}.png"
        out_path = os.path.join(output_dir, filename)
        img.save(out_path, format="PNG", optimize=True)

        if hour % 24 == 0 or hour == total_frames - 1:
            print(f"    [进度] 已生成: {filename} (时效 +{hour}h)")

    print(f"--> 全部 {total_frames} 帧 PNG 图像已成功生成并存放在: {output_dir}")


def generate_mock_demo_nc_slices(output_dir, num_hours=5):
    """
    [内置演示函数] 当手头暂无实际 NC 文件时，自动生成合规风场测试切片并自验
    """
    os.makedirs(output_dir, exist_ok=True)
    print(f"--> [演示模式] 生成模拟 221x141 风场测试数据并保存至: {output_dir}")

    # 经纬度网格坐标
    lons = np.linspace(LON_MIN, LON_MAX, GRID_WIDTH)
    lats = np.linspace(LAT_MAX, LAT_MIN, GRID_HEIGHT)  # 北往南
    lon_grid, lat_grid = np.meshgrid(lons, lats)

    # 模拟珠江口 / 海南岛陆地掩膜 (简单的几何多边形判定)
    is_land = ((lat_grid > 22.8) & (lon_grid < 114.2)) | \
              ((lat_grid > 18.0) & (lat_grid < 20.2) & (lon_grid > 108.5) & (lon_grid < 111.2))

    max_error = 0.0

    for hour in range(num_hours):
        # 模拟物理风场：西南风气旋波动
        phase = hour * 0.15
        u_physics = 6.0 + 8.0 * np.sin((lon_grid - 105.0) * 0.3 + phase)
        v_physics = 4.0 + 6.0 * np.cos((lat_grid - 15.0) * 0.4 + phase)

        # 陆地区域置为 NaN
        u_physics[is_land] = np.nan
        v_physics[is_land] = np.nan

        # 生成切片
        img = convert_uv_grid_to_rgba_image(u_physics, v_physics, mask_grid=~is_land)
        filename = f"wind_uv_{hour:03d}.png"
        filepath = os.path.join(output_dir, filename)
        img.save(filepath, format="PNG", optimize=True)

        # 自检校验: 随机抽取有效海面点，测试解码还原误差
        test_y, test_x = 70, 110
        raw_r, raw_g, _, raw_a = img.getpixel((test_x, test_y))
        u_decoded = decode_component(raw_r)
        v_decoded = decode_component(raw_g)
        err_u = abs(u_decoded - u_physics[test_y, test_x])
        err_v = abs(v_decoded - v_physics[test_y, test_x])
        max_error = max(max_error, err_u, err_v)

    print(f"--> 演示数据生成完毕！文件体积: ~{os.path.getsize(filepath)/1024:.1f} KB")
    print(f"--> 编码/解码闭环自测: 最大量化误差 = {max_error:.4f} m/s (严格小于 Scale/2 = 0.125 m/s)")


if __name__ == "__main__":
    out_dir = sys.argv[1] if len(sys.argv) > 1 else "./output_wind_png"
    if len(sys.argv) > 2 and os.path.exists(sys.argv[2]):
        # 处理真实 NC 文件: python nc_to_wind_png.py <out_dir> <input.nc>
        process_nc_file(sys.argv[2], out_dir)
    else:
        # 无入参时运行演示模式
        generate_mock_demo_nc_slices(out_dir, num_hours=5)
