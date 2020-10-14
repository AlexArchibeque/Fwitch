const path = require('path');

module.exports = {
  context: __dirname,
  entry: "./frontend/fwitch.jsx",
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  },

  watch: process.env.NODE_ENV !== "production" ? true : false, 
  watchOptions: { poll: process.env.NODE_ENV !== "production" ? true : false }
};
