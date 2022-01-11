const postcss = require('postcss')

module.exports = (opts = {}) => {
  return {
    Once (root, { result }) {
      return postcss([
        require('postcss-import'),
        require('postcss-mixins')
      ]).process(root, result.opts)
    },
    postcssPlugin: 'grouped'
  }
}
