var gulp        = require('gulp');
var del         = require('del');
var browserSync = require('browser-sync').create();
var jade        = require('gulp-jade');
var uglify      = require('gulp-uglify');
var concat      = require('gulp-concat');
var reload      = browserSync.reload;

// CLEAN -----------------------------------------------------------------------

gulp.task('clean', function () {
  return del([
    './dist/**/*'
  ]);
});

// JADE ------------------------------------------------------------------------

gulp.task('jade', function() {
  var YOUR_LOCALS = {};
  return gulp.src('./src/*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('jade-watch', ['jade'], reload);

// JS --------------------------------------------------------------------------

var JS_PATH = [
  'node_modules/aframe/dist/aframe.js',
  './src/**/*.js'
];

gulp.task('js', function() {
  return gulp.src(JS_PATH)
    .pipe(concat('all.js'))
    //.pipe(uglify()) // disable cause is very slow
    .pipe(gulp.dest('./dist/js/'))
});

gulp.task('js-watch', ['js'], reload);

// BUILD -----------------------------------------------------------------------

gulp.task('build', ['clean', 'jade', 'js']);

// WATCH -----------------------------------------------------------------------

gulp.task('watch', ['jade', 'js'], function () {

  browserSync.init({
    server: {
      baseDir: './dist'
    }
  });

  gulp.watch('./src/**/*.jade', ['jade-watch']);
  gulp.watch('./src/**/*.js', ['js-watch']);
});

// DEFAULT ---------------------------------------------------------------------

gulp.task('default', ['build', 'watch']);
