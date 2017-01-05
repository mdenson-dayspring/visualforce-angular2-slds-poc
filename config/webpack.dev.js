var fs = require('fs');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: 'http://localhost:3000/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css', {disable: false})
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal',
    progress: true,
    inline: true,
    port: 3000,
    https: true,
    cacert: fs.readFileSync(helpers.root('config/ssl/dst-ca.crt'), 'utf8'),
    cert: fs.readFileSync(helpers.root('config/ssl/localhost.crt'), 'utf8'),
    key: fs.readFileSync(helpers.root('config/ssl/localhost.pem'), 'utf8')
  }
});
