
/* global __dirname */

var path = require('path');

module.exports = {
  entry: './app/boot.ts',
  output: {
    path: __dirname + "/dist",
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    modulesDirectories: ['node_modules'],
    root: './src',
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      }
    ],
    noParse: [
       /zone\.js\/dist\/.+/,
       /angular2\/bundles\/.+/
    ]
  }
}