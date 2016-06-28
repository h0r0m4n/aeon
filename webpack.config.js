var webpack = require('webpack');

module.exports = {
  entry: [
    "./src/scripts/aframe.js",
    "./src/scripts/controls.js",
    "./src/scripts/d3.js",
    "./src/scripts/scripts.js"
  ],
  output: {
    path: __dirname + "./dist/js/",
    filename: "all.js"
  },
  plugins: [
    new webpack.ProvidePlugin({
      'd3': 'd3'
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    // new webpack.optimize.UglifyJsPlugin({ output: {comments: false}, mangle: false, sourcemap: false }),
  ]
};
