'use strict';

var config = require('../config');
var gulp = require('gulp');

var browserSync = require('browser-sync');

gulp.task('watch', ['dev'], function () {

    gulp.watch(config.templates.src, ['templates-watch']);
    gulp.watch(config.styles.src, ['sass']);
    gulp.watch(config.scripts.src, ['lint', 'concat']).on('change', function() {
      browserSync.reload();
    });
});