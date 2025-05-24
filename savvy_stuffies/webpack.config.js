const path = require('path');

module.exports = {
  mode: 'development',
  entry: './js/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '_site/js'),
    publicPath: '/js/',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, '_site'),
    },
    port: 8080,
    open: true,
    compress: true,
    historyApiFallback: false, // false because this is static, not SPA routing
  },
};
