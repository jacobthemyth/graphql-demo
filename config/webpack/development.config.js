var webpack = require('webpack');
var _ = require('lodash');

var common = require('./common.config.js');

var config = _.merge({}, common, {
  debug: true,
  devtool: '#eval-source-map',
  displayErrorDetails: true,
  outputPathinfo: true,
  output: {
    devtoolModuleFilenameTemplate: '[resourcePath]',
    devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'common.bundle.js'
    })
  ]
});

module.exports = config;
