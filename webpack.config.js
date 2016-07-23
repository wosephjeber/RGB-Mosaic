var path = require('path');
var autoprefixer = require("autoprefixer");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './app/app.jsx',

  output: {
    path: './build',
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: './',
    filename: 'bundle.js',
    port: 8888,
    publicPath: '/build/'
  },

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader!postcss!sass-loader?outputStyle=compact'
        )
      },
      { test: /\.(jpg|png)$/, loader: 'file-loader' },
    ]
  },

  postcss: function() {
    return [autoprefixer]
  },

  plugins: [
    new ExtractTextPlugin('style.css', {
      allChunks: true
    })
  ]
};
