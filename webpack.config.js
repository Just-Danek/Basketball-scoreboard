const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  "output": {
    "path": path.resolve(__dirname, 'build'),
    "filename": "[name].pack.js"
  },
  "module": {
    "rules": [
      {
        "use": {
          "loader": "babel-loader",
          "options": {
            "presets": [
              "babel-preset-env",
              "babel-preset-react"
            ]
          }
        },
        "exclude": /node_modules/,
        "test": /\.js$/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
  "entry": {
    "index": "./index"
  }
};
