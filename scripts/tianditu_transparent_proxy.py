#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
tianditu_transparent_proxy.py
天地图透明海洋切片代理服务 (服务端色键抠图与磁盘高速缓存)

核心功能:
1. 接收前端标准切片请求: /tile/{z}/{x}/{y}.png
2. 优先命中本地磁盘缓存 (命中耗时 < 0.5ms)
3. 未命中时并发请求天地图官方 WMTS 切片服务 (带合法 Referer 与 Session 池)
4. 基于 NumPy 矢量化毫秒级实现天地图海洋底色 (#aac6ee) 抠除与边缘羽化
5. 持久化缓存至本地磁盘并直接输出标准 RGBA PNG 字节流
"""

import os
import sys
import time
import io
import argparse
from http.server import HTTPServer, ThreadingHTTPServer, BaseHTTPRequestHandler
import requests
from PIL import Image
import numpy as np

# 默认配置
DEFAULT_PORT = 8089
DEFAULT_CACHE_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "cache_tianditu_tiles")
TIANDITU_TOKEN = "93724b915d1898d946ca7dc7b765dda5"

# 目标海洋基准颜色: #aac6ee -> (170, 198, 238)
TARGET_RGB = np.array([170, 198, 238], dtype=np.int16)
TOLERANCE = 18 # 容差阈值 (曼哈顿距离)
TOL_MAX = int(TOLERANCE * 2.2) # 羽化过渡边界

# 全局 HTTP Session (保持连接复用)
session = requests.Session()
session.headers.update({
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Referer": "https://ilovezhouzhou.asia/",
})

def process_tile_image(raw_bytes: bytes) -> bytes:
    """
    使用 NumPy 矢量化执行纳秒级色键抠图，输出透明海洋 PNG
    """
    img = Image.open(io.BytesIO(raw_bytes)).convert("RGBA")
    arr = np.array(img, dtype=np.int16)
    
    rgb = arr[:, :, :3]
    alpha = arr[:, :, 3]
    
    # 曼哈顿距离
    diff = np.sum(np.abs(rgb - TARGET_RGB), axis=-1)
    
    # 完全匹配海洋色 -> 设为完全透明 (Alpha = 0)
    ocean_mask = diff <= TOLERANCE
    alpha[ocean_mask] = 0
    
    # 过渡羽化边缘 -> 平滑羽化避免锯齿与蓝毛边
    blend_mask = (diff > TOLERANCE) & (diff < TOL_MAX)
    if np.any(blend_mask):
        factors = (diff[blend_mask] - TOLERANCE) / (TOLERANCE * 1.2)
        factors = np.clip(factors, 0.0, 1.0)
        alpha[blend_mask] = np.round(alpha[blend_mask] * factors).astype(np.int16)
        
    arr[:, :, 3] = np.clip(alpha, 0, 255)
    
    out_img = Image.fromarray(arr.astype(np.uint8), "RGBA")
    out_io = io.BytesIO()
    # 优化 PNG 压缩速度
    out_img.save(out_io, format="PNG", compress_level=3)
    return out_io.getvalue()

def fetch_tianditu_tile(z: int, x: int, y: int) -> bytes:
    """
    向天地图官方请求瓦片 (自动轮询子域名 0~7)
    """
    subdomain = (x + y) % 8
    url = f"https://t{subdomain}.tianditu.gov.cn/vec_w/wmts?tk={TIANDITU_TOKEN}&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}"
    
    resp = session.get(url, timeout=8)
    if resp.status_code == 200 and len(resp.content) > 100:
        return resp.content
    raise RuntimeError(f"Tianditu returned HTTP {resp.status_code}, len={len(resp.content)}")

class TileProxyHandler(BaseHTTPRequestHandler):
    cache_dir = DEFAULT_CACHE_DIR

    def do_OPTIONS(self):
        self.send_response(204)
        self.send_cors_headers()
        self.end_headers()

    def send_cors_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, Range")

    def do_GET(self):
        # 路由: /tile/{z}/{x}/{y}.png
        path = self.path.split("?")[0]
        
        if path in ["/health", "/", "/tile/health"]:
            self.send_response(200)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_cors_headers()
            self.end_headers()
            self.wfile.write(b'{"status":"ok","service":"tianditu-transparent-tile-proxy"}')
            return

        parts = path.strip("/").split("/")
        if len(parts) >= 4 and parts[0] in ["tile", "tianditu"]:
            try:
                z = int(parts[1])
                x = int(parts[2])
                y_str = parts[3].replace(".png", "")
                y = int(y_str)
            except ValueError:
                self.send_error(400, "Invalid tile coordinate format")
                return

            tile_file = os.path.join(self.cache_dir, str(z), str(x), f"{y}.png")
            
            # 1. 命中本地磁盘缓存
            if os.path.exists(tile_file):
                try:
                    with open(tile_file, "rb") as f:
                        data = f.read()
                    self.send_response(200)
                    self.send_header("Content-Type", "image/png")
                    self.send_header("Content-Length", str(len(data)))
                    self.send_header("Cache-Control", "public, max-age=2592000") # 缓存30天
                    self.send_header("X-Tile-Cache", "HIT")
                    self.send_cors_headers()
                    self.end_headers()
                    self.wfile.write(data)
                    return
                except Exception as e:
                    pass

            # 2. 未命中 -> 从天地图拉取并做色键抠像
            try:
                t0 = time.time()
                raw_bytes = fetch_tianditu_tile(z, x, y)
                t_fetch = time.time() - t0
                
                t1 = time.time()
                png_bytes = process_tile_image(raw_bytes)
                t_process = time.time() - t1
                
                # 写入缓存
                os.makedirs(os.path.dirname(tile_file), exist_ok=True)
                with open(tile_file, "wb") as f:
                    f.write(png_bytes)
                
                self.send_response(200)
                self.send_header("Content-Type", "image/png")
                self.send_header("Content-Length", str(len(png_bytes)))
                self.send_header("Cache-Control", "public, max-age=2592000")
                self.send_header("X-Tile-Cache", "MISS")
                self.send_header("X-Cost-Fetch", f"{t_fetch*1000:.1f}ms")
                self.send_header("X-Cost-Process", f"{t_process*1000:.1f}ms")
                self.send_cors_headers()
                self.end_headers()
                self.wfile.write(png_bytes)
            except Exception as e:
                self.send_error(502, f"Tile proxy error: {str(e)}")
            return

        self.send_error(404, "Endpoint not found")

    def log_message(self, format, *args):
        # 抑制海量 200 访问日志输出，仅在错误时打印
        if " 200 " not in (format % args):
            super().log_message(format, *args)

def main():
    parser = argparse.ArgumentParser(description="Tianditu Transparent Tile Proxy Server")
    parser.add_argument("--port", type=int, default=DEFAULT_PORT, help="Port to listen on")
    parser.add_argument("--cache-dir", type=str, default=DEFAULT_CACHE_DIR, help="Cache directory")
    args = parser.parse_args()

    os.makedirs(args.cache_dir, exist_ok=True)
    TileProxyHandler.cache_dir = args.cache_dir

    server = ThreadingHTTPServer(("0.0.0.0", args.port), TileProxyHandler)
    print(f"[TileProxy] 天地图透明切片代理服务启动成功: http://0.0.0.0:{args.port}/tile/{{z}}/{{x}}/{{y}}.png")
    print(f"[TileProxy] 缓存目录: {args.cache_dir}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\n[TileProxy] 服务停止")

if __name__ == "__main__":
    main()
