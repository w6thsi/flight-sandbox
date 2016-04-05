'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('sass', function () {
  return gulp.src('./assets/sass/main.scss')
    .pipe($.sass().on('error', $.sass.logError))
    .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('vendor-js', function () {
    return gulp.src(['./bower_components/jquery/dist/jquery.min.js',
                    './bower_components/flight/**/*.js',
                    './bower_components/requirejs/require.js'],
            { base: './bower_components'})
        .pipe(gulp.dest('./public/js/vendor'));
});

gulp.task('js', ['vendor-js'], function () {
  return gulp.src(['./assets/js/**/*.js'], { base: './assets/js' })
        .pipe(gulp.dest('./public/js'));
});

gulp.task('fonts', function () {
  return gulp.src('./components/bootstrap-sass/assets/fonts/bootstrap/*')
    .pipe(gulp.dest('./public/fonts/bootstrap'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./assets/sass/**/*.scss', ['sass']);
});

gulp.task('js:watch', function () {
  gulp.watch('./assets/js/**/*.js', ['js']);
});