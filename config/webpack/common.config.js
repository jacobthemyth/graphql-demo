var path = require('path');
var webpack = require('webpack');

var rootDir = path.join(__dirname, '..', '..');

module.exports = {
  context: rootDir,

  entry: {
    board: './frontend/board.jsx'
  },

  externals: {
    'jquery': 'jQuery'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          plugins: [path.join(rootDir, 'frontend', 'utils', 'babel-relay-plugin')]
        }
      }
    ]
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    // if the webpack code-splitting feature is enabled, this is the path it'll use to download bundles
    publicPath: '/assets'
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    // Add `frontend` to allow top-level + relative paths for modules
    modulesDirectories: ['frontend', 'node_modules']
  },
};
