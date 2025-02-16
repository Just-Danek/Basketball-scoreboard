const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  "output": {
    "path": path.resolve(__dirname, 'build'),
    "filename": "[name].pack.js"
  },
  "module": {
    "rules": [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      }
    ]
  },
  "plugins": [
    new HtmlWebpackPlugin({
      "template": "./index.html",
      "filename": "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css",
    })
  ],
  "entry": {
    "index": "./index"
  }
};