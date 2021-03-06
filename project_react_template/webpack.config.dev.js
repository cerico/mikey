var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './src/App'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  node: {
    fs: 'empty'
  },
  module: {
    loaders: [
    // JS Loaders
    {
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src'),
      exclude: /(node_modules|bower_components)/
    },
    // CSS Loaders
    {
      test: /\.scss$/,
      include: path.join(__dirname, 'src'),
      loaders: ['style', 'css', 'sass']
    },
    // Image Loaders
    {
      test: /\.(jpg|png)$/,
      include: path.join(__dirname, 'src'),
      loader: 'url?limit=25000'
    }
    ]
  },
  // For enzyme testing
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  }
};
