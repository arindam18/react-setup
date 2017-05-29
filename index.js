const express = require('express')
const path = require('path')

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');


const port = process.env.PORT || 3000
const app = express()

const compiler = webpack(webpackConfig);
 
app.use(express.static(__dirname + '/public'));
 
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

app.listen(port)
console.log("server started on port " + port)
