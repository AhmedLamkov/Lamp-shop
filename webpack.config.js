const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports = {
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
				test: /\.(png|jpg|svg|gif)$/,
				type: 'asset/resource',
			},
      {
        test: /\.(html)$/,
        use: ['html-loader']
      }
    ],
  },
  entry: './src/index.js',
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
  ],
  output: {
    publicPath: '/',
  }
};