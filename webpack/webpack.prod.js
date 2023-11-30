const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');

module.exports = [
  merge(common, {
    mode: 'production',
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
      filename: 'ignits.js',
      path: path.resolve(__dirname, '..', 'dist'),
      libraryTarget: 'commonjs2',
    },
    devtool: 'source-map',
  }),
];
