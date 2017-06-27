const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
  entry: {
    app: PATHS.app,
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
    {
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
  ],
};