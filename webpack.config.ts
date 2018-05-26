import * as CleanWebpackPlugin from 'clean-webpack-plugin';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as ServiceWorkerPlugin from 'sw-precache-webpack-plugin';

module.exports = {
  devServer: {
    port: 8080,
  },
  entry: './src/index.tsx',
  mode: 'production',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(ts|tsx)$/,
        use: ['awesome-typescript-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(svg)$/,
        use: ['file-loader?name=images/[name].[ext]'],
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        use: ['file-loader?name=fonts/[name].[ext]'],
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/dist`,
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new ServiceWorkerPlugin({
      cacheId: 'swcache',
      filename: 'service-worker.js',
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
