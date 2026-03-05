# Views 单独模块打包指南

本文档介绍如何将 `src/views` 下的页面组件打包为独立的 UMD/ESM 模块。

## 概述

通过 Vite 的库模式（Library Mode），我们可以将每个 views 页面组件打包为可独立使用的模块：
- **UMD**: 兼容浏览器直接引入（`<script>` 标签）
- **ESM**: 支持现代模块化打包（`import` 语法）

## 目录结构要求

### 方式一：目录形式（推荐）

```
src/views/
├── WindPage/
│   ├── index.vue          # 主入口组件
│   └── components/        # 子组件
├── ContourPage.vue        # 直接是 .vue 文件
└── ...
```

- 目录形式：需要有 `index.vue` 或任意 `.vue` 文件作为入口
- 文件形式：直接使用 `PageName.vue` 作为入口

### 模块名称映射

在 `scripts/build-lib.js` 中定义了映射关系：

```javascript
const moduleMap = {
  'WindPage': 'wind',
  'ContourPage': 'contour',
  'EditPage': 'edit',
  'LeaderLinePage': 'leader',
  // ...
};
```

## 打包脚本解析

### 核心流程 (`scripts/build-lib.js`)

1. **自动发现模块**: 扫描 `src/views` 目录，自动识别可打包的组件
2. **动态生成配置**: 为每个模块生成专属的 Vite 配置
3. **构建输出**: 输出到 `dist/lib/<module-name>/`
4. **复制到 public**: 自动复制到 `public/lib/<module-name>/`

### 关键配置点

#### 1. CSS 内置插件

```javascript
function cssInjectPlugin() {
  // 将 CSS 注入到 JS 中，避免 CSS 代码分割
}
```

- 作用：把 CSS 样式内联到 JS 文件中，用户只需引入一个 JS 文件
- 原理：使用 `transform` 钩子收集 CSS，`generateBundle` 钩子注入到代码中

#### 2. 外部依赖配置

```javascript
external: [
  'vue',
  'vue-router',
  'pinia',
  'leaflet',
  'echarts',
  'ant-design-vue',
  '@ant-design/icons-vue',
  'lodash',
  'moment',
  'backbone',
  'underscore'
]
```

- 这些依赖不会被打包进输出文件
- 用户需要自行在项目中引入这些依赖

#### 3. 全局变量映射

```javascript
globals: {
  vue: 'Vue',
  leaflet: 'L',
  echarts: 'echarts',
  // ...
}
```

- UMD 模式下，这些依赖会以全局变量的形式访问
- 例如：`Vue` 对应 `window.Vue`

## 构建命令

```bash
# 构建所有模块
npm run lib

# 构建所有模块（显式）
npm run lib:all

# 构建指定模块
node scripts/build-lib.js wind
node scripts/build-lib.js contour
```

## 使用方式

### 1. HTML 直接引入（CDN）

```html
<!-- 引入依赖 -->
<script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<script src="https://unpkg.com/echarts@5.5.0/dist/echarts.min.js"></script>

<!-- 引入组件（CSS 已内置） -->
<script src="./wind.umd.js"></script>

<script>
  const { createApp } = Vue;
  const WindComponent = wind.default || wind;
  createApp(WindComponent).mount('#app');
</script>
```

### 2. ES Module 导入

```javascript
import { wind } from './dist/lib/wind/wind.esm.js';
```

### 3. 在 React 中使用

需要先安装 Vue：

```bash
npm install vue leaflet echarts
```

然后使用 Vue 的自定义元素：

```jsx
import React from 'react';
import { defineCustomElement } from 'vue';
import { wind } from './dist/lib/wind/wind.esm.js';

// 转换为 Web Component
const WindElement = defineCustomElement(wind.default || wind);
customElements.define('vue-wind', WindElement);

// 使用
function App() {
  return <vue-wind />;
}
```

## 注意事项

1. **依赖管理**: 所有外部依赖（Vue、Leaflet、ECharts 等）需要用户自行引入
2. **CSS 内置**: CSS 已自动打包到 JS 中，无需额外引入 CSS 文件（Leaflet CSS 除外）
3. **全局变量**: UMD 模式下，需要确保依赖库以全局变量形式可用
4. **模块兼容性**: 如果目标环境支持 ESM，建议使用 `.esm.js` 版本

## 输出文件结构

```
dist/lib/
├── wind/
│   ├── wind.umd.js
│   └── wind.esm.js
├── contour/
│   ├── contour.umd.js
│   └── contour.esm.js
└── README.md
```

```
public/lib/
├── wind/
│   ├── wind.umd.js
│   └── wind.esm.js
└── ...
```

## 扩展开发

如果需要添加新的可打包模块，只需：

1. 在 `src/views` 下创建对应的页面组件（目录或 .vue 文件）
2. 如需自定义输出名称，在 `moduleMap` 中添加映射
3. 运行构建命令即可自动打包
