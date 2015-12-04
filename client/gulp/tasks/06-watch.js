'use strict';

var gulp  = require('gulp'),
  paths = require('../config').paths;

gulp.task('styles:watch', function () {
  gulp.watch(paths.source.styles, gulp.series('styles', 'serve:reload'));
});

gulp.task('scripts:watch', function () {
  gulp.watch(paths.source.scripts.main, gulp.series('scripts', 'serve:reload'));
});

gulp.task('images:watch', function () {
  gulp.watch(paths.source.images, gulp.series('images', 'serve:reload'));
});

gulp.task('copy:watch', function () {
  gulp.watch(paths.source.copy, gulp.series('copy', 'serve:reload'));
});

gulp.task('templates:watch', function() {
  gulp.watch(paths.source.templates, gulp.series('templates', 'serve:reload'));
});