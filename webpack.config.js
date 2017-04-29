const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './app/module.js',
  },
  target: 'node',
  output: {
    path: __dirname + '/dist',
    filename: 'app.js',
    publicPath: '/assets'
  },
  module: {
    rules: {
      test: /\.js$/,
      use: [{
        loader: 'babel-loader',
        options: { presets: ['es2015'] }
      }]
    }
  },
  module: {
    rules: [{
      test: /\.(sass|scss)$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
      ]
    }]
  },
  devtool: 'eval-source-map'
};

