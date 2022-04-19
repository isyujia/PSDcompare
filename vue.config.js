/*
 * @Author: Billy
 * @Date: 2020-06-03 09:47:31
 * @LastEditors: Billy
 * @LastEditTime: 2022-01-10 13:49:17
 * @Description: 请输入
 */

const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

/**
 * @see https://cli.vuejs.org/zh/config/#vue-config-js
 */

module.exports = {
  devServer: {
    port: 8030,
    proxy: {
      '/api': {
        target: 'http://ty.y68.fun/sales-show-3',
        ws: true,
        changeOrigin: true, // false：请求头中host仍然是浏览器发送过来的host；true：请求头中host会设置成target
        // secure: false, // 如果是https接口，需要配置这个参数
        pathRewrite: {
          '^/api': '', // 重写请求路径
        },
      }
    }
  },
  /**
   * @see https://cli.vuejs.org/zh/config/#publicpath
   */
  publicPath: "./",
  configureWebpack: {
    plugins: []
  },

  chainWebpack(config) {
    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/svgicon'))
      .end();
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/svgicon'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end();
  },
};