/* eslint no-process-env: 0 */
/* eslint-env node */
import webpack from 'webpack';
import ForceCaseSensitivyPlugin from 'force-case-sensitivity-webpack-plugin';
import autoprefixer from 'autoprefixer';
import path from 'path';

const config = {
  entry: ['babel-polyfill', './src/Main.jsx'],
  output: {
    filename: 'bundle.js',
    path: './dist'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.jsx', '.js']
  },
  module: {
    loaders: [
      {test: /\.jsx?$/, loaders: ['babel-loader'], exclude: /node_modules/},
      {test: /\.s?css$/, loaders: ['style', 'css', 'postcss', 'sass']},
      {test: /\.(woff2?|eot|ttf|svg|)$/, loader: 'file-loader'}
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, './src')]
  },
  postcss: () => [autoprefixer],
  devtool: '#source-map',
  plugins: [
    new ForceCaseSensitivyPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
};

if (process.env.NODE_ENV === 'production') {
  config.plugins = [...config.plugins, new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })];
}

export default config;
