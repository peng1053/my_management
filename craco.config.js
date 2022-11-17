const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CracoLessPlugin = require('craco-less');
const TerserPlugin = require('terser-webpack-plugin');

// const themes = require('./src/theme/antd-theme.js');

// const sassResourcesLoader = require('craco-sass-resources-loader');

const path = require('path');
const resolve = dir => path.join(__dirname, dir);

process.env.GENERATE_SOURCEMAP = 'false';

const webpackPlugins = [];

if(process.env.REACT_APP_ENV === 'staging'){
  webpackPlugins.push(new BundleAnalyzerPlugin({ analyzerMode: 'static' }));
}
if(process.env.REACT_APP_ENV === 'production'){
  webpackPlugins.push(new TerserPlugin({
    terserOptions: {
      ecma: undefined,
      warnings: false,
      parse: {},
      compress: {
        drop_console: true, // 生产环境下移除控制台所有的内容
        drop_debugger: true, // 移除断点
        pure_funcs:["console.log"], // 生产环境下移除console
      },
    },
  }));
}

module.exports = {
  webpack: {
    alias: {
      '@': resolve('src'),
      '@/types': resolve('src/types'),
      '@/app': resolve('src/app'),
      '@/api': resolve('src/api'),
      '@/assets': resolve('src/assets'),
      '@/pages': resolve('src/pages'),
      '@/components': resolve('src/components'),
      '@/utils': resolve('src/utils'),
      '@/config': resolve('src/config')
    },
    plugins:webpackPlugins
  },
  devServer:{
    // proxy: {
    //   "/fileupload": {
    //     target: "http://image.bjdwcx.net:1280/upload/fileupload",  
    //     changeOrigin: true,
    //     pathRewrite: {
    //         "^/fileupload": ""
    //     }
    //   }
    // }
  },
  plugins: [
    // {
    //   plugin: CracoLessPlugin,
    //   options: {
    //     lessLoaderOptions: {
    //       lessOptions: {
    //         javascriptEnabled: true,
    //         modifyVars: themes,
    //       },
    //     },
    //   },
    // }
  ],
};