const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');

module.exports = [
  merge(common, {
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.cjs.json',
            },
          },
        },
      ],
    },
    output: {
      filename: '[name].cjs.lib.dev.js',
      path: path.resolve(__dirname, '..', 'dist/cjs'),
      libraryTarget: 'commonjs2',
      chunkFormat: 'commonjs',
    },
    devtool: 'eval-source-map',
  }),
];
