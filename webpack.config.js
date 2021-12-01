const path = require('path');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: 'dist/' // co the doi http 'https://google.com/'
  },
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.(png|jpeg||jpg)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
}