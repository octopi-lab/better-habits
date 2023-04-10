const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')


module.exports = {

  entry: './client/index.js',

  output: {
    filename: 'bundle.js',
    path: `${__dirname}/build`,
  },

  plugins: [new HtmlWebpackPlugin({
    template: './client/index.html',
  })],

  mode: process.env.NODE_ENV,

  devServer: {
    static: {
      // match the output path
      directory: path.resolve(__dirname, 'build'),
      // match the output 'publicPath'
      publicPath: '/build',
    },
    proxy: {
      '/user': 'http://localhost:3000',
      '/habit': 'http://localhost:3000'
    },
	historyApiFallback:true,
  },
  
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
    test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [  // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ]
      }
    ]
  },
};



