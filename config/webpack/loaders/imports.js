module.exports = {
  test: /[\/\\]node_modules[\/\\]some-module[\/\\]index\.js$/,
  loader: "imports-loader?this=>window"
}
