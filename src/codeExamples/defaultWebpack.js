import { js as Beautify } from 'js-beautify';

const code = {
  snippet : `
  
  const path = require('path');
  const webpack = require('webpack');
  const fs = require('fs');

  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
  const { CleanWebpackPlugin } = require('clean-webpack-plugin');
  const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
  const root = path.resolve(__dirname);
  const isDev = process.env.NODE_ENV !== 'production';

  const nodeModules = path.join('node_modules');
  const dist = path.join(root, 'dist');
  const src = path.join(root, 'src');

  module.exports = {
    devServer: {
      contentBase: dist,
      port: 3000,
      compress: true,
    },
    entry: [
      'core-js/es',
      'core-js/modules/es.array.includes',
      'core-js/modules/es.object.values',
      'core-js/modules/es.object.entries',
      './src/index.tsx',
    ],
    mode: isDev ? 'development' : 'production',
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          use: 'babel-loader',
          include: [src],
        },
        {
          test: /\.(ico|eot|otf|webp|ttf|woff|woff2)(\?.*)/,
          use: 'file-loader?limit=100000',
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          use: [
            'file-loader?limit=100000',
            {
              loader: 'img-loader',
              options: {
                enabled: true,
                opipng: true,
              },
            },
          ],
        },
      ],
    },
    node: {
      net: 'empty',
      tls: 'empty',
      fs: 'empty',
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        name: true,
      },
    },
    output: {
      path: dist,
      filename: 'app.js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html'
      }),
      new HtmlWebpackHarddiskPlugin(),
      new CleanWebpackPlugin(),
    ].concat(
      isDev
        ? new BundleAnalyzerPlugin({
            analyzerPort: 8890,
            openAnalyzer: false,
          })
        : []
    ),
    resolve: {
      modules: [root, nodeModules],
      extensions: ['.ts', '.tsx', '.js', '.json', '.jsx', '.min.js', '.gql'],
    },
  }; 
  `,
  beautyCode: () => Beautify(code.snippet, { indent_size: 2, space_in_empty_paren: true })
};

export default code;