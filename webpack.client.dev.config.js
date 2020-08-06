const path = require('path')
const webpack = require('webpack')
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
    entry: {
        client: './src/app.js'
    },
    output: {
        path: path.join(__dirname, 'public/dist'),
        publicPath: '/',
        filename: '[name].js',
    },
    mode: 'development',
    target: 'web',
    resolve: {
      alias: {
        '@root': path.resolve(__dirname, './'), 
      }
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",     
            }
          },
          {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
          },
        ]
      },
      plugins: [
        new WriteFilePlugin()
    ],
};