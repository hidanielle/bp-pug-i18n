'use strict';

var config = require('../config');
var gulp = require('gulp');

var browserSync = require('browser-sync');

gulp.task('serve', function() {
    browserSync.init({
        injectChanges: true,
        server: {
          baseDir: config.buildDir
        }
    });
});