var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


const VENDOR_LIBS = [
  'react','lodash','redux','react-redux','react-dom',
  'faker', 'react-input-range', 'redux-form', 'redux-thunk'
];

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module : {
    rules : [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
             fallback : 'style-loader',
             use :['css-loader', 'sass-loader']

           })
      }
    ]
  },
  plugins : [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor','manifest']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),

    new ExtractTextPlugin("styles.css")
  ]
};
