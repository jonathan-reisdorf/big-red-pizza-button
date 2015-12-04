'use strict';

var gulp = require('gulp');

gulp.task('serve:reload', function(cb) {
  require('browser-sync').reload();
  return cb();
});

gulp.task('serve', function(cb) {
  require('browser-sync')({
    server : {
      baseDir : require('../config').paths.dest
    },
    notify: false,
    open : true
  });

  return cb();
});