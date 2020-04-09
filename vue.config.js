/* eslint-disable no-param-reassign, global-require */
module.exports = {
  publicPath: '.',
  productionSourceMap: false,
  chainWebpack: (config) => {
    // 设置 页面标题
    config
      .plugin('html')
      .tap((args) => {
        args[0].title = 'Custom Title';
        return args;
      });
    // 加载 图片压缩 模块
    config.module
      .rule('images')
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({
        bypassOnDebug: true,
      })
      .end();
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          // 加载&配置 px转vw 模块
          require('postcss-px-to-viewport')({
            unitToConvert: 'px',
            viewportWidth: 750,
            unitPrecision: 9,
            viewportUnit: 'vw',
            fontViewportUnit: 'vw',
            minPixelValue: 1,
          }),
        ],
      },
    },
  },
};
