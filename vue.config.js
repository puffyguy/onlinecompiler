const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/server': {
        target: 'http://localhost:8000/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/server': ''
        }
      },
    }
  }
})