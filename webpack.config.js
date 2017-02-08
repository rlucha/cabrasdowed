var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "./public/bundle.js"
  },
  module: {
    rules: [
      {
        test:/\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: ['css-loader', 'sass-loader'],
        }),
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin('./public/main.css'),
  ],
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    port: 9000,
    filename: "bundle.js"
  }
}
