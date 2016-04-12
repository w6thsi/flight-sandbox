'use strict';

const gulp = require('gulp');
const del = require('del');
const $ = require('gulp-load-plugins')();

gulp.task('sass', function () {
    return gulp.src('./src/client/sass/main.scss')
        .pipe($.sass().on('error', $.sass.logError))
        .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('vendor-js', function () {
    return gulp.src(['./bower_components/jquery/dist/jquery.min.js',
            './bower_components/flight/**/*.js',
            './bower_components/requirejs/require.js'],
        {base: './bower_components'})
        .pipe(gulp.dest('./public/js/vendor'));
});

gulp.task('js', ['vendor-js'], function () {
    return gulp.src(['./src/client/js/**/*.js'], {base: './src/client/js'})
        .pipe(gulp.dest('./public/js'));
});

gulp.task('fonts', function () {
    return gulp.src('./bower_components/bootstrap-sass/client/fonts/bootstrap/*')
        .pipe(gulp.dest('./public/fonts/bootstrap'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./client/sass/**/*.scss', ['sass']);
});

gulp.task('js:watch', function () {
    gulp.watch('./client/js/**/*.js', ['js']);
});

gulp.task('clean', function (done) {
    del(['./public/fonts/*', './public/js/*', './public/stylesheets/*'])
        .then(function () {
            done();
        });
});