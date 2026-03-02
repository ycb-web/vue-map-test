# SEO 优化配置指南

## 概述

本文档记录项目的 SEO 基础优化配置，适用于 Vue 2 单页应用部署到阿里云服务器的场景。

## 当前配置（方案1：基础优化）

### 1. public/index.html

修改 `public/index.html`，添加全局 meta 标签：

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <meta name="description" content="Vue地图可视化工具集，提供风场、台风、等值线、引导线等多种地图可视化功能">
    <meta name="keywords" content="Vue地图,地图可视化,风场可视化,台风路径,等值线图,Leaflet,ECharts">
    <meta name="author" content="Vue Map Test">
    <link rel="icon" href="<%= BASE_URL %>favicon.ico">
    <title>Vue地图可视化工具 - 风场/台风/等值线/引导线</title>
    <!-- ... -->
  </head>
</html>
```

**要点：**
- `lang="zh-CN"`：指定页面语言为中文
- `description`：页面描述，搜索引擎展示结果时使用
- `keywords`：关键词，多个用逗号分隔
- `title`：页面标题

### 2. public/robots.txt

新建 `public/robots.txt`：

```
User-agent: *
Allow: /

Sitemap: /sitemap.xml
```

**要点：**
- 允许所有搜索引擎爬虫访问
- 指定 sitemap 位置

### 3. public/sitemap.xml

新建 `public/sitemap.xml`：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>/wind</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <!-- 其他页面... -->
</urlset>
```

**要点：**
- `changefreq`：页面更新频率
- `priority`：页面优先级（0.0-1.0）
- 重要页面（wind、typhoon）优先级设高一些

### 4. src/router/index.js

在路由配置中添加 meta 信息：

```javascript
{
  path: "/wind",
  name: "Wind",
  component: WindPage,
  meta: {
    title: "风场可视化 - Vue地图可视化工具",
    description: "风力场可视化展示，动态渲染风向风速粒子效果"
  },
},
```

添加路由守卫自动更新标题和 meta：

```javascript
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;

    // 更新 meta 描述
    let descMeta = document.querySelector('meta[name="description"]');
    if (to.meta.description && descMeta) {
      descMeta.setAttribute('content', to.meta.description);
    }
  }
  next();
});
```

## 页面路由与 SEO 配置

| 路由 | 页面 | 优先级 | 更新频率 |
|------|------|--------|----------|
| `/` | 首页（test） | 1.0 |重定向到 / weekly |
| `/playground` | 代码演练场 | 0.8 | monthly |
| `/test` | 地图示例 | 0.8 | monthly |
| `/wind` | 风场可视化 | 0.9 | weekly |
| `/typhoon` | 台风路径 | 0.9 | weekly |
| `/wms` | WMS图层 | 0.7 | monthly |
| `/contour` | 等值线图 | 0.7 | monthly |
| `/leader` | 引导线 | 0.7 | monthly |

## 部署后操作

1. **打包项目**
   ```bash
   pnpm build
   ```

2. **将 dist 目录部署到阿里云**

3. **提交 sitemap 到搜索引擎**
   - 百度：https://ziyuan.baidu.com/site
   - Google：https://search.google.com/search-console

4. **验证配置**
   - 访问 `你的域名/robots.txt` 确认可访问
   - 访问 `你的域名/sitemap.xml` 确认可访问

## 方案对比

| 方案 | 难度 | SEO 效果 | 适用场景 |
|------|------|----------|----------|
| 1. 基础优化 | 简单 | 一般 | 简单展示页面 |
| 2. 预渲染 (Prerender) | 中等 | 较好 | 需要更多页面被收录 |
| 3. SSR (Nuxt) | 复杂 | 最好 | 完整 SEO 需求 |

## 后续升级

如果需要更好的 SEO 效果，可以考虑：

1. **预渲染方案**：使用 `@vue/cli-plugin-prerender` 或 `prerender-spa-plugin`
2. **SSR 方案**：迁移到 Nuxt.js
3. **静态站点生成**：将页面生成静态 HTML

---

## 修改记录

- 2026-03-02：初始配置（基础 SEO 优化方案1）
