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
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] },
        }],
      },
    ],
  },
  devtool: '#inline-source-map'
};