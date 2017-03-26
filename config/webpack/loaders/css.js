const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports =  {
  test: /\.css(\.erb)?$/i,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: ['css-loader', 'rails-erb-loader']
  })
}
