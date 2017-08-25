var babelpolyfill = require("babel-polyfill")
var path = require('path')
var webpack = require('webpack')
var HtmlwebpackPlugin = require('html-webpack-plugin');

var projectRootPath = path.resolve(__dirname, '..')

var config = {
  entry: [
    'babel-polyfill',
    path.resolve(projectRootPath, 'app/app.js')
  ],
  output: {
    path: path.resolve(projectRootPath, 'public', 'assets'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
		extensions: ['.js', '.jsx']
	},
  devtool: 'eval-source-map',
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: []
        }
      },
      {
        test: /\.(css|less)/,
        loaders: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'file-loader?name=/[name].[hash:8].[ext]'
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000"
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ minimize: true }),
    new HtmlwebpackPlugin({
      title: 'react-ele-webapp',
      template: path.resolve(projectRootPath, 'public/index.html'),
      filename: 'index.html',
      chunks: ['app', 'vendors'],
      inject: 'body'
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
}

//添加hotreplace支持
if (process.env.NODE_ENV !== 'production') {
  config.devtool = 'eval';
  config.entry.unshift('webpack-hot-middleware/client')
  config.plugins.unshift(new webpack.HotModuleReplacementPlugin());

  // Note: enabling React Transform and React Transform HMR:
  config.module.loaders[0].query.plugins.push([
    'react-transform', {
      transforms: [{
        transform: 'react-transform-hmr',
        imports: ['react'],
        locals: ['module']
      }]
    }
  ]);
}

module.exports = config;