/**
 * PostCSS-cssnext is a PostCSS plugin that helps you to use the latest CSS syntax today.
 * It transforms CSS specs into more compatible CSS so you don’t need to wait for browser support.
 *
 * Cssnano takes your nicely formatted CSS and runs it through many focused optimisations,
 * to ensure that the final result is as small as possible for a production environment.
 *
 * Postcss-cssnext has an interesting tool, autoprefixer.
 * It’s postcss plugin to parse CSS and add vendor prefixes to CSS rules using values from Can I Use.
 * It is recommended by Google and used in Twitter and Taobao.
 * */
module.exports = {
  plugins: {
    'postcss-cssnext': {
      warnForDuplicates: false,
    },
    cssnano: {},
  },
};
