/**
 * 库打包脚本
 * 用法:
 *   npm run lib              # 打包所有模块
 *   npm run lib:wind        # 打包 wind 模块
 *   node scripts/build-lib.js wind  # 打包指定模块
 */

// 修复 Node.js crypto.getRandomValues 在 ESM 下的兼容性问题
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
if (!globalThis.crypto) {
  globalThis.crypto = require('crypto');
}

import { readdir, stat } from 'fs/promises';
import { resolve, join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';
import { writeFile, unlink } from 'fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, '..');
const viewsDir = resolve(rootDir, 'src/views');

// 模块名称映射 (views 名称 -> 包名)
const moduleMap = {
  'WindPage': 'wind',
  'ContourPage': 'contour',
  'EditPage': 'edit',
  'LeaderLinePage': 'leader',
  'PlaygroundPage': 'playground',
  'TestPage': 'test',
  'TyphoonPage': 'typhoon',
  'UmdTestPage': 'umd',
  'WmsPage': 'wms'
};

// 获取所有 views 模块
async function getViewsModules() {
  const entries = await readdir(viewsDir);
  const modules = [];

  for (const entry of entries) {
    const entryPath = join(viewsDir, entry);
    const statInfo = await stat(entryPath);

    if (statInfo.isDirectory()) {
      // 目录形式: WindPage/index.vue
      const indexPath = join(entryPath, 'index.vue');
      try {
        const indexStat = await stat(indexPath);
        if (indexStat.isFile()) {
          modules.push({
            name: entry,
            type: 'directory',
            entry: indexPath,
            outputName: moduleMap[entry] || entry.replace('Page', '').toLowerCase()
          });
        }
      } catch {
        // 尝试找主组件
        const vueFiles = (await readdir(entryPath)).filter(f => f.endsWith('.vue'));
        if (vueFiles.length > 0) {
          modules.push({
            name: entry,
            type: 'directory',
            entry: join(entryPath, vueFiles[0]),
            outputName: moduleMap[entry] || entry.replace('Page', '').toLowerCase()
          });
        }
      }
    } else if (statInfo.isFile() && entry.endsWith('.vue')) {
      // 单文件形式: WindPage.vue
      const nameWithoutExt = entry.replace('.vue', '');
      modules.push({
        name: nameWithoutExt,
        type: 'file',
        entry: entryPath,
        outputName: moduleMap[nameWithoutExt] || nameWithoutExt.replace('Page', '').toLowerCase()
      });
    }
  }

  return modules;
}

// 生成 Vite 库模式配置
function generateViteConfig(module) {
  // 计算相对路径
  const relativeEntry = module.entry.replace(rootDir + '/', '');

  return `import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// 自定义插件：将 CSS 注入到 JS 中
function cssInjectPlugin() {
  let css = '';
  return {
    name: 'css-inject',
    apply: 'build',
    generateBundle(options, bundle) {
      for (const fileName of Object.keys(bundle)) {
        const chunk = bundle[fileName];
        if (chunk.type === 'chunk' && css) {
          // 使用更安全的方式注入 CSS
          const escapedCss = css.replace(/[\\\\"']/g, '\\\\$&').replace(/\\n/g, '\\\\n').replace(/\\r/g, '');
          chunk.code = '(function() { try { var style = document.createElement("style"); style.textContent = "' + escapedCss + '"; document.head.appendChild(style); } catch(e) { console.error("CSS inject error:", e); } })();\\n\\n' + chunk.code;
        }
      }
    },
    transform(code, id) {
      if (id.endsWith('.css')) {
        css += code;
        return { code: '', map: null };
      }
    }
  };
}

export default defineConfig({
  plugins: [
    vue(),
    cssInjectPlugin()
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, '${relativeEntry}'),
      name: '${module.outputName}',
      formats: ['umd', 'es'],
      fileName: (format) => format === 'es' ? '${module.outputName}.esm.js' : '${module.outputName}.umd.js'
    },
    // 禁用 CSS 代码分割，将所有 CSS 打包到 JS 中
    cssCodeSplit: false,
    rollupOptions: {
      // external 所有依赖，用户需要自行引入
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
      ],
      output: {
        globals: {
          vue: 'Vue',
          'vue-router': 'VueRouter',
          pinia: 'Pinia',
          leaflet: 'L',
          echarts: 'echarts',
          'ant-design-vue': 'antd',
          '@ant-design/icons-vue': 'icons',
          lodash: '_',
          moment: 'moment',
          backbone: 'Backbone',
          underscore: '_'
        },
        exports: 'named'
      }
    },
    // 排除静态资源
    assetsInclude: [],
    outDir: path.resolve(__dirname, 'dist/lib/${module.outputName}'),
    emptyOutDir: true,
    sourcemap: false,
    minify: 'esbuild',
    // 不复制 public 目录的资源
    copyPublicDir: false
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
`;
}

// 构建单个模块
async function buildModule(module) {
  const configContent = generateViteConfig(module);
  const configPath = resolve(rootDir, `vite.lib.${module.outputName}.config.ts`);

  // 写入临时配置文件
  await writeFile(configPath, configContent);

  console.log(`\n📦 Building ${module.name}...`);

  return new Promise((resolve, reject) => {
    const vite = spawn('npx', ['vite', 'build', '--config', configPath], {
      cwd: rootDir,
      stdio: 'inherit',
      shell: process.platform === 'win32'
    });

    vite.on('close', async (code) => {
      // 清理临时配置文件
      try {
        await unlink(configPath);
      } catch (e) {}

      if (code === 0) {
        console.log(`✅ ${module.name} built successfully`);
        resolve(true);
      } else {
        console.error(`❌ ${module.name} build failed (code: ${code})`);
        console.log(`⚠️  Skipping ${module.name} and continuing...`);
        resolve(false); // 返回 false 表示跳过，继续构建其他模块
      }
    });
  });
}

// 主函数
async function main() {
  const args = process.argv.slice(2);
  const modules = await getViewsModules();

  console.log('===========================================');
  console.log('  Vue Map Test - Library Build Script');
  console.log('===========================================');
  console.log('\n📋 Available modules:');
  modules.forEach((m, i) => {
    console.log(`   ${i + 1}. ${m.name} -> ${m.outputName}`);
  });
  console.log('');

  let toBuild = [];

  if (args.includes('all')) {
    toBuild = modules;
  } else if (args.length > 0) {
    // 指定模块名
    const targetName = args[0].toLowerCase();
    toBuild = modules.filter(m =>
      m.outputName.toLowerCase() === targetName ||
      m.name.toLowerCase() === targetName
    );

    if (toBuild.length === 0) {
      console.error(`\n❌ Module "${args[0]}" not found`);
      console.log('\n📋 Available modules:');
      modules.forEach((m, i) => {
        console.log(`   ${i + 1}. ${m.name} -> ${m.outputName}`);
      });
      process.exit(1);
    }
  } else {
    // 默认全部
    console.log('📌 Building all modules by default');
    console.log('   Use "node scripts/build-lib.js <module-name>" to build specific module');
    console.log('   Example: node scripts/build-lib.js wind');
    toBuild = modules;
  }

  console.log(`\n🚀 Building ${toBuild.length} module(s)...`);
  console.log('===========================================');

  for (const module of toBuild) {
    try {
      await buildModule(module);
    } catch (e) {
      console.error(e.message);
      process.exit(1);
    }
  }

  // 复制文件到 public/lib 目录
  await copyToPublic();

  // 生成 README
  await generateReadme(modules);

  console.log('\n===========================================');
  console.log('✅ All modules built successfully!');
  console.log('📁 Output: dist/lib/<module-name>/');
  console.log('📁 Public: public/lib/<module-name>/');
  console.log('📖 Usage: See dist/lib/README.md');
  console.log('===========================================');
}

// 复制构建文件到 public 目录
async function copyToPublic() {
  const { copyFile, mkdir } = await import('fs/promises');
  const publicLibDir = resolve(rootDir, 'public/lib');

  try {
    await mkdir(publicLibDir, { recursive: true });
  } catch (e) {}

  const builtModules = await readdir(resolve(rootDir, 'dist/lib'));

  for (const moduleDir of builtModules) {
    const srcDir = resolve(rootDir, 'dist/lib', moduleDir);
    const destDir = resolve(publicLibDir, moduleDir);

    // 跳过非目录的文件（如 README.md）
    const statInfo = await stat(srcDir);
    if (!statInfo.isDirectory()) continue;

    try {
      await mkdir(destDir, { recursive: true });
    } catch (e) {}

    const files = await readdir(srcDir);
    for (const file of files) {
      if (file.endsWith('.js')) {
        await copyFile(resolve(srcDir, file), resolve(destDir, file));
        console.log(`📋 Copied ${moduleDir}/${file} to public/lib/`);
      }
    }
  }
}

// 生成使用说明
async function generateReadme(modules) {
  const readme = `# Vue Map Test - 组件库

这个目录包含从 views 模块打包的独立 UMD/ESM 模块。

**注意：CSS 已自动打包到 JS 文件中，只需引入一个 JS 文件即可使用。**

## 可用模块

${modules.map(m => `- **${m.name}** -> \`${m.outputName}\``).join('\n')}

## 使用方式

### 1. 在 HTML 中直接引入（CDN）

\`\`\`html
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
\`\`\`

### 2. 在 React 中使用

需要先安装 Vue：

\`\`\`bash
npm install vue leaflet echarts
\`\`\`

然后使用 vue-web-component-wrapper：

\`\`\`jsx
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
\`\`\`

### 3. 作为 ES Module 导入

\`\`\`javascript
import { wind } from './dist/lib/wind/wind.esm.js';
\`\`\`

## 注意事项

1. 每个模块都依赖 Vue、Leaflet、ECharts 等库，请确保这些库已正确引入
2. CSS 已自动打包到 JS 中，无需额外引入 CSS 文件
3. 部分模块包含地图功能，需要 Leaflet CSS（需要单独引入）
4. 如果遇到问题，请检查控制台错误信息

## 构建命令

\`\`\`bash
# 构建所有模块
npm run lib

# 构建指定模块
npm run lib:all

# 或使用 node 脚本
node scripts/build-lib.js wind
node scripts/build-lib.js contour
\`\`\`
`;

  await writeFile(resolve(rootDir, 'dist/lib/README.md'), readme);
}

main().catch(console.error);
