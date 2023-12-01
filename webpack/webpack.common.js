const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  target: 'node',
  entry: './src/index.ts',
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src/'),
    },
    extensions: ['.ts', '.js'],
    fallback: {
      fs: false,
      path: require.resolve('path-browserify'),
      util: require.resolve('util/'),
      assert: require.resolve('assert/'),
      url: require.resolve('url/'),
    },
  },
  externals: {
    yargs: 'yargs',
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'README.md', to: 'README.md' }],
    }),
  ],
};
