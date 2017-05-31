const path = require('path');

module.exports = {
  entry: {
    app: './app/module.js',
  },
  target: 'node',
  output: {
    path: path.join(__dirname, '/assets'),
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
