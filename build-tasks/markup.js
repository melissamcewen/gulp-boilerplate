var gulp      = require('gulp'),
  gConfig     = require('../gulp-config'),
  utils       = require('./utils'),
  opts        = gConfig.pluginOpts,
  env         = utils.getEnv(),
  src         = gConfig.paths.sources,
  dest        = gConfig.paths.destinations,
  plugins     = require('gulp-load-plugins')(opts.load),

  /* markup:compile */
  compile = function() {
    return gulp.src(src.markup)
      .pipe(gulp.dest(dest.html));
  },
  /* markup:watch */
  watch = function() {
    gulp.watch(src.markup, ['compile:markup']);
  };

module.exports = {
  compile: compile,
  watch  : watch
};
