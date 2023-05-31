const { merge } = require('webpack-merge');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: './generateSW.js',
      skipWaiting: true, // Mengganti "kipWaiting" dengan "skipWaiting"
      clientsClaim: true,
      runtimeCaching: [
        {
          urlPattern: new RegExp('^https://restaurant-api.dicoding.dev/'),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: new Date().toISOString(), // Menghilangkan tanda kutip pada new Date().toISOString()
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
      ],
    }),
    new CleanWebpackPlugin(),
  ],
});
