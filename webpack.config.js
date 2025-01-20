const path = require('path');

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
      }
    ]
  },
  "entry": {
    "index": "./index"
  }
};
