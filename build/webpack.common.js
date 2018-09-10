const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmtlWebpackPlugin = require('html-webpack-plugin');;
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: path.join(__dirname, '../src/main.js'),
  output: {
    filename: './js/app.js',
    path: path.join(__dirname, '../dist'),
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], { root: path.join(__dirname, '..') }),
    new HtmtlWebpackPlugin({
      template: './src/index.html',
    }),
    new VueLoaderPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  resolve: {
    alias: { '~': path.join(__dirname, '../src/') },
    extensions: ['*', '.vue', '.js', '.json'],
  },
};
