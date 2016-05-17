var gulp          = require('gulp');
var plumber       = require('gulp-plumber');
var webpackstream = require('webpack-stream');
var del           = require('del');
var browserSync   = require('browser-sync');
var jade          = require('gulp-jade');
var imagemin      = require('gulp-imagemin');
var sass          = require('gulp-sass');
var reload        = browserSync.reload;
var ghPages       = require('gulp-gh-pages');

// CLEAN -----------------------------------------------------------------------

gulp.task('clean', function () {
  return del.sync([
    './dist/**/*'
  ]);
});

// JADE ------------------------------------------------------------------------

gulp.task('jade', function() {

  var YOUR_LOCALS = {};

  return gulp.src(['./src/*.jade', '!./src/_*.jade'])
    .pipe(plumber())
    .pipe(jade({
      locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('jade-watch', ['jade'], reload);

// STYLESHEETS -----------------------------------------------------------------

gulp.task('stylesheets', function () {
  return gulp.src('./src/sass/**/*.{scss,sass}')
    .pipe(plumber())
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(reload({stream: true}));
});

// JS --------------------------------------------------------------------------

gulp.task('scripts', function() {
  return gulp.src('./src/js/scripts.js')
    .pipe(plumber())
    .pipe(webpackstream(
      require('./webpack.config.js')
    ))
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('scripts-watch', ['scripts'], reload);

// IMAGE -----------------------------------------------------------------------

gulp.task('images', function () {
  return gulp.src('./src/img/*.{gif,jpg,jpeg,png,svg}')
    .pipe(plumber())
    .pipe(imagemin({
      optimizationLevel: 5,
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest('./dist/img/'));
});

// OBJECTS ---------------------------------------------------------------------

gulp.task('objects', function () {
  return gulp.src('./src/objects/*')
    .pipe(gulp.dest('./dist/objects'));
});

// COPY ------------------------------------------------------------------------

var FILES_TO_COPY = [
    './src/*.txt',
    './src/CNAME'
];

gulp.task('copy', function () {
  return gulp.src(FILES_TO_COPY)
    .pipe(gulp.dest('./dist'));
});

// DEFAULT/WATCH ---------------------------------------------------------------

gulp.task('default', ['clean', 'jade', 'scripts', 'stylesheets', 'images', 'objects', 'copy'], function () {

  browserSync({
    server: './dist',
    port: 2016
  });

  gulp.watch('./src/**/*.jade',                    ['jade-watch']);
  gulp.watch('./src/js/**/*.js',                   ['scripts-watch']);
  gulp.watch('./src/stylesheets/**/*.{scss,sass}', ['stylesheets']);
});

// DEPLOY ----------------------------------------------------------------------

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});
