const path = require('path');

module.exports = {

  mode: 'development',

  context: __dirname + '/src',

  entry: './index.js',

  devtool: 'inline-source-map',

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),

  },

  // module: {
  //   rules: [
  //     //css loader
  //     {
  //       test: /\.css$/i,
  //       use: ['style-loader', 
  //       {
  //           loader: 'css-loader',
  //           options: {
  //               sourceMap: true,
  //           }
  //       }],
  //     },
  //   ],
  // },
  watch: true,

};