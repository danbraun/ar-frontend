// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function (cb) {
  gulp
    .src('*.scss')
    .pipe(sass())
    .pipe(
      gulp.dest(function (f) {
        return f.base;
      })
    );
  cb();
});

gulp.task('copy-fa', function (cb) {
  gulp.src('./node_modules/@fortawesome/fontawesome-free/webfonts/**/*')
    .pipe(gulp.dest('./webfonts/'));
  cb();
});

gulp.task(
  'default',
  gulp.series('sass', function (cb) {
    gulp.watch('*.scss', gulp.series('sass'));
    cb();
  })
);