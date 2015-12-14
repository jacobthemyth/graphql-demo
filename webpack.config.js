var path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'frontend'),

  entry: {
    board: './board.jsx'
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    // if the webpack code-splitting feature is enabled, this is the path it'll use to download bundles
    publicPath: '/assets',

    // Improve paths in devtools
    devtoolModuleFilenameTemplate: '[resourcePath]',
    devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]',
  },

  devtool: '#eval-source-map',

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
          plugins: [path.join(__dirname, 'frontend', 'utils', 'babel-relay-plugin')]
        }
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    // Add `frontend` to allow top-level + relative paths for modules
    modulesDirectories: ['frontend', 'node_modules']
  },
};
