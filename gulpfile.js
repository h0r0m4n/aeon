var gulp          = require('gulp'),
    plumber       = require('gulp-plumber'),
    del           = require('del'),
    ghPages       = require('gulp-gh-pages');

var jade          = require('gulp-jade');

var imagemin      = require('gulp-imagemin');

var webpackstream = require('webpack-stream');

var sass         = require('gulp-sass'),
    combineMq    = require('gulp-combine-mq'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano      = require('gulp-cssnano'),
    shorthand    = require('gulp-shorthand');

var browserSync   = require('browser-sync'),
    reload        = browserSync.reload;

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

var AUTOPREFIXER_BROWSERS = {
  browsers: [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
  ]
};

gulp.task('stylesheets', function () {
  return gulp.src('./src/stylesheets/**/*.{scss,sass}')
    .pipe(plumber())
    .pipe(sass({
      precision: 6
    }).on('error', sass.logError))
    .pipe(combineMq())
    .pipe(shorthand())
    .pipe(autoprefixer(AUTOPREFIXER_BROWSERS))
    .pipe(cssnano())
    .pipe(gulp.dest('./dist/css/'))
    .pipe(reload({stream: true}));
});

// JS --------------------------------------------------------------------------

gulp.task('scripts', function() {
  return gulp.src('./src/scripts/scripts.js')
    .pipe(plumber())
    .pipe(webpackstream(
      require('./webpack.config.js')
    ))
    .pipe(gulp.dest('./dist/js/'))
    .pipe(reload({stream: true}));
});

// IMAGE -----------------------------------------------------------------------

gulp.task('images', function () {
  return gulp.src('./src/images/*')
    .pipe(plumber())
    .pipe(imagemin({
      optimizationLevel: 5,
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest('./dist/img/'));
});

gulp.task('images-watch', ['images'], reload);

// OBJECTS ---------------------------------------------------------------------

gulp.task('objects', function () {
  return gulp.src('./src/objects/*')
    .pipe(gulp.dest('./dist/objects'));
});

gulp.task('objects-watch', ['objects'], reload);

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
    port: 1565,
    ghostMode: false,
    open: false,
    notify: false,
  });

  gulp.watch('./src/**/*.jade',                    ['jade-watch']);
  gulp.watch('./src/scripts/**/*.js',              ['scripts']);
  gulp.watch('./src/stylesheets/**/*.{scss,sass}', ['stylesheets']);
  gulp.watch('./src/objects/*',                    ['objects-watch']);
  gulp.watch('./src/images/*',                     ['images-watch']);
});

// DEPLOY ----------------------------------------------------------------------

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});
