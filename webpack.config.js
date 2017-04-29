const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './app/module.js',
  },
  target: 'node',
  output: {
    path: __dirname + '/assets',
    filename: 'app.js',
    publicPath: '/assets'
  },
  module: {
    rules: {
      test: /\.js$/,
      use: [{
        loader: 'babel-loader',
        exclude: /node_modules/,
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
  devtool: '#inline-source-map'
};

