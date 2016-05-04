var gulp        = require('gulp');
var webpack     = require('webpack-stream');
var del         = require('del');
var browserSync = require('browser-sync');
var jade        = require('gulp-jade');
var image       = require('gulp-image');
var sass        = require('gulp-sass');
var reload      = browserSync.reload;
var ghPages     = require('gulp-gh-pages');

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
    .pipe(jade({
      locals: YOUR_LOCALS,
      pretty: true
    }))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('jade-watch', ['jade'], reload);

// SASS ------------------------------------------------------------------------

gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.{scss,sass}')
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(reload({stream: true}));
});

// JS --------------------------------------------------------------------------

gulp.task('js', function() {
  return gulp.src('./src/js/scripts.js')
    .pipe(webpack(
      require('./webpack.config.js')
    ))
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('js-watch', ['js'], reload);

// IMAGE -----------------------------------------------------------------------

gulp.task('image', function () {
  return gulp.src('./src/img/**/*')
    .pipe(image())
    .pipe(gulp.dest('./dist/img/'));
});

// OBJECT ----------------------------------------------------------------------

gulp.task('object', function () {
  return gulp.src('./src/object/**/*')
    .pipe(gulp.dest('./dist/object/'));
});

// CNAME -----------------------------------------------------------------------

gulp.task('cname', function () {
  gulp.src(['./src/CNAME'])
    .pipe(gulp.dest('./dist/'));
});

// DEFAULT/WATCH ---------------------------------------------------------------

gulp.task('default', ['clean', 'jade', 'sass', 'js', 'image', 'object', 'cname'], function () {

  browserSync({
    server: './dist',
    port: 2016
  });

  gulp.watch('./src/**/*.jade',             ['jade-watch']);
  gulp.watch('./src/sass/**/*.{scss,sass}', ['sass']);
  gulp.watch('./src/**/*.js',               ['js-watch']);
});

// DEPLOY ----------------------------------------------------------------------

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});
