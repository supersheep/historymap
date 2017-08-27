const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('./base')
const root = path.resolve(__dirname, '../public/src')

const config = merge(baseConfig, {
  entry: [
    'webpack-hot-middleware/client',
    // 'webpack/hot/dev-server',
    path.join(root, 'main.js')
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(root, '../../index.html'),
      inject: 'body'
    })
  ],
  devServer: {
    historyApiFallback: true,
    inline: true,
    port: 3002
  },
  devtool: 'source-map'
})

module.exports = config