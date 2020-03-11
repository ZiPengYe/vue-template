/* eslint-disable no-param-reassign, global-require */
module.exports = {
  publicPath: '.',
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        args[0].title = 'Custom Title';
        return args;
      });
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
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
