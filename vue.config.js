module.exports = {
  outputDir: 'docs',
  publicPath: process.env.NODE_ENV === 'production' ?
    '/Vue-Tree-Chart/' : '/',
  css: {
    extract: false
  }
}