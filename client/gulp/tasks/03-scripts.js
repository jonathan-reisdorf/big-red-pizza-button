'use strict';

var gulp = require('gulp'),
  paths = require('../config').paths;

gulp.task('scripts', gulp.series('templates', function bundle() {
  var
    browserify = require('browserify'),
    source     = require('vinyl-source-stream'),
    buffer     = require('vinyl-buffer'),
    uglify     = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    path       = require('path'),
    gutil      = require('gutil');

  return browserify({ entries : paths.source.scripts.main })
    .bundle()
    .on('error', gutil.log)
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.dest + 'scripts'));
}));
