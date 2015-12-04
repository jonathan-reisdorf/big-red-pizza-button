'use strict';

var gulp = require('gulp'),
  paths = require('../config').paths;

gulp.task('templates', function() {
  var templateCache = require('gulp-angular-templatecache'),
    minifyHTML = require('gulp-minify-html');

  return gulp.src(paths.source.templates)
    .pipe(minifyHTML({
      comments : false,
      spare : false
    }))
    .pipe(templateCache({
      // @todo: use single quote option once it's implemented in the module
      root : '',
      moduleSystem : 'Browserify',
      module : 'application',
      standalone : false
    }))
    .pipe(gulp.dest(paths.source.scripts.generated));
});