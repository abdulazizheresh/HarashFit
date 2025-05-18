const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: [],

  publicPath: '/',

  productionSourceMap: true,

  css: {
    extract: false,
    sourceMap: true
  },

  configureWebpack: {
    devtool: 'source-map'
  }
})
