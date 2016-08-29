
/* global __dirname */

var path = require('path');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var UglifyJsPlugin = require("webpack/lib/optimize/UglifyJsPlugin");
var SourceMapDevToolPlugin = require("webpack/lib/SourceMapDevToolPlugin");
var DefinePlugin = require("webpack/lib/DefinePlugin");

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
    // Produce a common chunk with the shared code of all output chunks
    new CommonsChunkPlugin({
        name: "common",
        // minChunks: 2,
        // chunks: [ 'pagea', 'pageb', 'common' ]
    }),
    // Minify but suppress warnings
    new UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    // Use the production node environment.
    new DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
}
