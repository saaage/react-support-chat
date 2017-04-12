const path = require('path');

module.exports = {

  entry: './src/index.js',
  output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, "/node_modules"),
        loader: 'babel-loader?presets[]=es2015&presets[]=react'
      }
    ]
  }

}
