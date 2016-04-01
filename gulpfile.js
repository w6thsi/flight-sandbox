'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('sass', function () {
  return gulp.src('./assets/sass/main.scss')
    .pipe($.sass().on('error', $.sass.logError))
    .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('js', function () {
  return gulp.src(['./components/jquery/dist/jquery.min.js',
                  './components/flight/build/flight.min.js',
                  './assets/javascripts/**/*.js'])
    .pipe($.concat('all.js'))
    .pipe(gulp.dest('./public/javascripts'));
});

gulp.task('fonts', function () {
  return gulp.src('./components/bootstrap-sass/assets/fonts/bootstrap/*')
    .pipe(gulp.dest('./public/fonts/bootstrap'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./assets/sass/**/*.scss', ['sass']);
});

gulp.task('js:watch', function () {
  gulp.watch('./assets/javascripts/**/*.js', ['js']);
});