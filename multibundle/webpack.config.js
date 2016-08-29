
/* global __dirname */

var path = require('path');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
  context: __dirname ,
  entry: {
    pagea: './src/pagea.tsx',
    pageb: './src/pageb.tsx'
  },
  output: {
    path: __dirname + "/dist",
    filename: '[name].js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [{
        test: /\.tsx?$/,
        loaders: ['ts-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CommonsChunkPlugin({
        name: "common",
        chunks: [ "common", "pagea", "pageb" ]
    })
  ]
}
