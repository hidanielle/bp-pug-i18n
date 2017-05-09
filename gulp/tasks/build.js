'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', ['clean'], function (callBack) {
  runSequence(['lint'], ['uglify', 'compress'], 'templates', callBack);
});