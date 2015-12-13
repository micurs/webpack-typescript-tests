
/* global __dirname */

var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.join(__dirname , "src"),
  entry: "./main.jsx",
  output: {
    path: __dirname + "/dist",
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: [ '', '.jsx', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}
