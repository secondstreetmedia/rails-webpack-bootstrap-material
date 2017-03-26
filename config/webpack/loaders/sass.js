const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  test: /\.(scss|sass)$/i,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: ['css-loader', 'postcss-loader', 'sass-loader']
  })
}