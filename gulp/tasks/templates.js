'use strict';

var config = require('../config');
var gulp = require('gulp');

var pug = require('gulp-pug-i18n');
var browserSync = require('browser-sync');

gulp.task('templates', function () {
  return gulp.src(config.templates.src)
    .pipe(pug({
      i18n: {
        locales: 'locales/*.{yml,json}',
        namespace: '$t',
        filename: '{{basename}}-{{lang}}.html'
      },
      pretty: true
    }))
    .pipe(gulp.dest(config.templates.dest));
});

gulp.task('templates-watch', ['templates'], function (done) {
  browserSync.reload();
  done();
});