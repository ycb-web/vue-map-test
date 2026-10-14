module.exports = {
  runtimeCompiler: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      "/ventusky-api": {
        // 直连我们自己的远程 Nginx 反向代理服务器 (8.138.183.98)
        target: "https://www.ilovezhouzhou.asia",
        changeOrigin: true,
        secure: true,
      },
      "/backend-nctopng": {
        // 代理后端切片服务器，绕过本地开发环境跨域拦截
        target: "https://ys.51canto.com/nctopng",
        changeOrigin: true,
        secure: true,
        pathRewrite: { "^/backend-nctopng": "" },
      },
      "/api/tianditu-transparent": {
        // 代理透明切片服务
        target: "https://www.ilovezhouzhou.asia",
        changeOrigin: true,
        secure: true,
      },
    },
  },
};
