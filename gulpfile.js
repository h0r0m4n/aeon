var gulp        = require('gulp');
var browserSync = require('browser-sync');
var jade        = require('gulp-jade');
var reload      = browserSync.reload;

// JADE ------------------------------------------------------------------------

gulp.task('templates', function() {
  var YOUR_LOCALS = {};
  return gulp.src('./src/*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('jade-watch', ['templates'], reload);

// WATCH -----------------------------------------------------------------------

gulp.task('default', ['templates'], function () {
  browserSync({server: './dist'});
  gulp.watch('./src/*.jade', ['jade-watch']);
});
