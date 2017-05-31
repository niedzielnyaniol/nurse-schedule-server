const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const compass = require('compass-importer');

gulp.task('sass', () =>
  gulp.src('./sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ importer: compass }).on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('assets'))
);

gulp.task('sass:watch', ['sass'], () => {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('dev', ['sass:watch']);
