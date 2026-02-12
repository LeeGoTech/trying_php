// postcss.config.cjs
const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    purgecss({
      content: ['./*.php'],
      safelist: []
    })
  ]
};