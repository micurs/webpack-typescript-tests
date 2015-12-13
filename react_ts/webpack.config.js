
/* global __dirname */

var path = require('path');

module.exports = {
  context: path.join(__dirname , "/src"),
  entry: './main.tsx',
  output: {
    path: __dirname + "/dist",
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
}