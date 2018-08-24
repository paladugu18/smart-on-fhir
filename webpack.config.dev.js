const path = require('path');
const webpack = require('webpack');
const AutoprefixerPlugin = require('autoprefixer');
const CustomPropertiesPlugin = require('postcss-custom-properties');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const I18nAggregatorPlugin = require('terra-i18n-plugin');
const i18nSupportedLocales = require('terra-i18n/lib/i18nSupportedLocales');

const webpackDevServerConfig = require('./webpack-dev-server.config');

module.exports = {
  devtool: 'inline-source-map',
  devServer: webpackDevServerConfig,
  entry: {
    index: './src/index.jsx',
    launch: './src/launch.js',
  },
  target: 'web',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(__dirname, 'aggregated-translations'), 'node_modules'],
  },
  module: {
    noParse: [
      /dtrace-provider$/,
      /safe-json-stringify$/,
      /mv/, /source-map-support/,
    ],
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      }, {
        test: /\.(scss|css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            }, {
              loader: 'postcss-loader',
              options: {
                plugins() {
                  return [AutoprefixerPlugin(), CustomPropertiesPlugin()];
                },
              },
            }, {
              loader: 'sass-loader',
            },
          ],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('[name]-[hash].css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        CLIENT_ID: JSON.stringify(process.env.CLIENT_ID),
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new HtmlWebpackPlugin({
      title: 'Launch',
      filename: 'launch.html',
      chunks: ['launch'] }),
    new HtmlWebpackPlugin({
      title: 'SMART Workshop',
      template: 'index.html',
      chunks: ['index'] }),
    new I18nAggregatorPlugin({
      baseDirectory: path.resolve(__dirname),
      supportedLocales: i18nSupportedLocales,
    }),
  ],
  node: {
    fs: 'empty',
  },
};
