module.exports = {
  outputDir: 'dist',
  publicPath: process.env.NODE_ENV === 'production' ?
    '/' : '/',
  css: {
    extract: false
  }
}