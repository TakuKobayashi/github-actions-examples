const path = require('path');
const GasPlugin = require('gas-webpack-plugin');
const Es3ifyPlugin = require('es3ify-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    main: path.resolve(__dirname, 'src', 'webapi', 'webapi.ts')
  },
  output: {
    path: path.resolve(__dirname, 'src'),
    filename: 'webapi.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.[tj]s$/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new GasPlugin(),
    new Es3ifyPlugin(),
    new Dotenv({
      path: path.join(__dirname, '.env'),
      systemvars: false
    })
  ]
};
