const path = require('path');

module.exports = {

  mode: 'development',

  entry: './src/index.js',

  devtool: 'inline-source-map',

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),

  },

  module: {
    rules: [
      //css loader
      {
        test: /\.css$/i,
        use: ['style-loader', 
        {
            loader: 'css-loader',
            options: {
                sourceMap: true,
            }
        }],
      },
      //image loader
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};