const path = require('path')
const root = path.join(__dirname, '../public')
const config = require('./config')

module.exports = {
  entry: path.join(root, 'src/main.js'),
  output: {
    path: path.join(root, 'dist'),
    filename: 'main.js'
  },
  resolve: {
    alias: {
      components: path.join(root, 'src/components'),
      views: path.join(root, 'src/views'),
      styles: path.join(root, 'src/styles'),
      store: path.join(root, 'src/store')
    },
    extensions: ['.js', '.vue', '.less']
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue-loader'},
      { test: /\.css$/, 
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }]
      },
      {
        test: /\.less$/, 
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "less-loader"
        }]
      },
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 500,
          name: path.join(config.build.assetsSubDirectory, '[name].[hash:7].[ext]').replace(/\\/g, '/')
        }
      }
    ]
  }
}

