const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, './main.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: [
          'kongroo-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        exclude: /node_modules/,
        type: 'javascript/auto',
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
              esModule: false,
              name: 'assets/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({ template: path.join(__dirname, './public/index.html') })
  ],
  devServer: {
    open: true,
    port: 8080
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}