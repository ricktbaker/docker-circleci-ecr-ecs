// gulpfile.js
'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const nodemon = require('gulp-nodemon');

gulp.task('lint', function() {
  return gulp.src([
    './*.js'
  ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('watch_app', function() {
  nodemon({
    verbose : true,
    script : 'app.js',
    ext : 'js',
    tasks : ['lint']
  });
});

gulp.task('start', ['lint', 'watch_app']);
gulp.task('default', ['start']);
