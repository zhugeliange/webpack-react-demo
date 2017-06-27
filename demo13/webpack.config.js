const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BabiliWebpackPlugin = require('babili-webpack-plugin');
const webpack = require('webpack');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
};

const PLUGIN = new ExtractTextPlugin({
  filename: '[name].css',
  ignoreOrder: true,
});

module.exports = {
  devServer: {
    host: process.env.HOST, // default to localhost
    port: process.env.PORT, // default to 8080
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  devtool: 'source-map',
  performance: {
    hints: 'warning', 
    maxEntrypointSize: 300000,
    maxAssetSize: 700000,
  },
  entry: {
    app: PATHS.app,
    vendor: ['react'],
  },
  output: {
    path: PATHS.build,
    filename: '[name].js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      enforce: 'pre',
      loader: 'eslint-loader',
      options: {
        emitWarning: true,
      },
    },
    { // 有多个 loader 的时候加载顺序是从右到左，从下到上
      test: /\.css$/,
      exclude: /node_modules/,
      use: PLUGIN.extract({
        use: {
          loader: 'css-loader',
          options: {
            modules: true,
          },
        },
        fallback: 'style-loader',
      }),
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'hellow word!',
    }),
    PLUGIN,
    new BabiliWebpackPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    }),
  ],
};