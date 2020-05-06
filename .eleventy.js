module.exports = function (eleventyConfig) {
  eleventyConfig.setBrowserSyncConfig({
    files: [
      'dist/**/*'
    ]
  })
  return {
    dir: {
      input: "src",
      output: 'dist',
      includes: "_includes",
      layouts: "_layouts"
    }
  }
}