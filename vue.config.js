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
    },
  },
};
