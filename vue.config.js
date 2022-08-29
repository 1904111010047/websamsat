//const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
    productionSourceMap: false,
    configureWebpack: {
        mode: 'production',
        devtool: 'nosources-source-map',
        output: {
            libraryExport: 'default'
        }
    },
    chainWebpack: config => {
      config.module
        .rule('vue')
        .use('vue-loader')
          .tap(options => {
            // modify the options...
            return options
          })
    }
  }
