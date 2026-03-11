const webpack = require('webpack')

const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PUBLIC_URL = process.env.PUBLIC_URL || '/'
const publicPath = PUBLIC_URL.endsWith('/') ? PUBLIC_URL : PUBLIC_URL + '/'

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  output: {
    filename: '[name].[hash].js',
    publicPath: publicPath
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.PUBLIC_URL': JSON.stringify(publicPath)
    }),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new CopyWebpackPlugin([
      { from: './assets/**/*', to: './' },
      { from: './404.html', to: './404.html' }
    ]),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(
      [
        'dist'
      ],
      {
        verbose:  true,
        dry:      false
      }
    ),
  ],
}
