module.exports = {
  outputDir: 'docs',
    baseUrl: process.env.NODE_ENV === 'production'
      ? '/Vue-Tree-Chart/'
      : '/',
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  },
  css: { 
    extract: false
  }
}