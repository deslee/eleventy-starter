const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './src/assets/**/*.js',
    './src/**/*.njk',
    './src/**/*.md',
    './src/**/*.html'
  ],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
})

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('postcss-nested'),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
}