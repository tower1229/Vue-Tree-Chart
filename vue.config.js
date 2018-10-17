module.exports = {
  outputDir: 'docs',
  baseUrl: process.env.NODE_ENV === 'production' ?
    '/Vue-Tree-Chart/' : '/',
  css: {
    extract: false
  }
}