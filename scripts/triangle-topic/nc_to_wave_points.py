#!/usr/bin/env python3
"""
将 points + time 结构的 NC 文件转换为父项目点位时序预览数据。

默认输入:
  地图-三角图层/nc原数据解析渲染/20260311.nc

默认输出:
  public/data/triangle-topic/wave-points

备注:
  - 当前父项目的专题页使用这份输出直接做点位播放
  - 默认转换变量是 hs，可通过第三个参数切换变量名
  - 默认只抽样保留首帧 / 中间帧 / 末帧，减少调试数据体积
"""

import argparse
import json
import math
from pathlib import Path

import numpy as np
import xarray as xr


PROJECT_ROOT = Path(__file__).resolve().parents[2]
DEFAULT_INPUT = PROJECT_ROOT / "地图-三角图层" / "nc原数据解析渲染" / "20260311.nc"
DEFAULT_OUTPUT = PROJECT_ROOT / "public" / "data" / "triangle-topic" / "wave-points"


def round_float_list(values, digits=6):
    return [round(float(value), digits) for value in values]


def safe_min_max(values):
    arr = np.asarray(values, dtype=np.float32)
    valid = arr[np.isfinite(arr)]
    if valid.size == 0:
        return None, None
    return float(valid.min()), float(valid.max())


def pick_sample_indexes(time_count: int) -> list[int]:
    if time_count <= 0:
        return []
    if time_count == 1:
        return [0]
    if time_count == 2:
        return [0, 1]
    middle = time_count // 2
    return [0, middle, time_count - 1]


def convert_nc_to_wave_points(nc_file: Path, output_dir: Path, variable="hs") -> None:
    output_dir.mkdir(parents=True, exist_ok=True)
    frames_dir = output_dir / "frames"
    frames_dir.mkdir(parents=True, exist_ok=True)
    for old_frame in frames_dir.glob("*.json"):
        old_frame.unlink()

    print(f"正在读取: {nc_file}")
    ds = xr.open_dataset(nc_file)

    required_vars = {"longitude", "latitude", variable}
    missing = [name for name in required_vars if name not in ds]
    if missing:
        raise ValueError(f"缺少必要变量: {', '.join(missing)}")

    lon = ds["longitude"].values
    lat = ds["latitude"].values
    values = ds[variable].values
    time_values = ds["time"].values

    point_count = int(lon.shape[0])
    time_count = int(time_values.shape[0])
    value_min, value_max = safe_min_max(values)

    print(f"点数: {point_count}")
    print(f"时间步数: {time_count}")
    print(f"{variable} 范围: {value_min} ~ {value_max}")

    time_list = [
        str(np.datetime_as_string(t, unit="s")).replace("T", " ")
        for t in time_values
    ]

    sampled_indexes = pick_sample_indexes(time_count)
    sampled_time_list = [time_list[index] for index in sampled_indexes]

    metadata = {
        "sourceFile": nc_file.name,
        "variable": variable,
        "pointCount": point_count,
        "timeCount": len(sampled_indexes),
        "timeList": sampled_time_list,
        "sourceTimeCount": time_count,
        "sampledSourceIndexes": sampled_indexes,
        "lon": round_float_list(lon),
        "lat": round_float_list(lat),
        "bounds": {
            "minLon": round(float(np.nanmin(lon)), 6),
            "maxLon": round(float(np.nanmax(lon)), 6),
            "minLat": round(float(np.nanmin(lat)), 6),
            "maxLat": round(float(np.nanmax(lat)), 6),
        },
        "valueRange": {
            "min": None if value_min is None else round(value_min, 6),
            "max": None if value_max is None else round(value_max, 6),
        },
    }

    with (output_dir / "metadata.json").open("w", encoding="utf-8") as f:
        json.dump(metadata, f, ensure_ascii=False)

    for output_index, source_index in enumerate(sampled_indexes):
        time_text = time_list[source_index]
        frame = np.asarray(values[source_index], dtype=np.float32)
        frame_list = []
        for value in frame:
            if not math.isfinite(float(value)):
                frame_list.append(None)
            else:
                frame_list.append(round(float(value), 4))

        frame_data = {
            "index": output_index,
            "sourceIndex": source_index,
            "time": time_text,
            "values": frame_list,
        }
        frame_name = f"{output_index:03d}.json"
        with (frames_dir / frame_name).open("w", encoding="utf-8") as f:
            json.dump(frame_data, f, ensure_ascii=False)

        print(
            f"[{output_index + 1}/{len(sampled_indexes)}] {frame_name} <- source {source_index:03d}"
        )

    ds.close()
    print("转换完成")


def parse_args():
    parser = argparse.ArgumentParser(description="points + time NC -> 点位时序 JSON")
    parser.add_argument("nc_file", nargs="?", default=str(DEFAULT_INPUT))
    parser.add_argument("output_dir", nargs="?", default=str(DEFAULT_OUTPUT))
    parser.add_argument("variable", nargs="?", default="hs")
    return parser.parse_args()


if __name__ == "__main__":
    args = parse_args()
    nc_file = Path(args.nc_file).resolve()
    output_dir = Path(args.output_dir).resolve()
    variable = args.variable

    if not nc_file.exists():
        print(f"错误: 找不到文件 {nc_file}")
        raise SystemExit(1)

    convert_nc_to_wave_points(nc_file, output_dir, variable)
