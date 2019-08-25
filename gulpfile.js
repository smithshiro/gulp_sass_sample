const gulp = require('gulp');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');

function css() {
  return gulp
    .src('./sass/application.sass', {sourcemaps: true})
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(gulp.dest('./css'));
}

function watch() {
  gulp.watch('./sass/**/*.sass', css);
}

exports.watch = watch;
exports.default = gulp.series(css);

