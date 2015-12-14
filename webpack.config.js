var path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'frontend'),

  entry: {
    board: './board.jsx'
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts')
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
    modulesDirectories: ['frontend', 'node_modules']
  },
};
