const gulp = require('gulp');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('autoprefixer');
const nested = require('postcss-nested');
const rename = require('gulp-rename');
const cssnano = require('cssnano');

gulp.task('styles', function() {
  const plugins = [
    autoprefixer(),
    nested(),
    cssnano()
  ];

  return gulp.src('src/styles/*.pcss')
    .pipe(sourcemaps.init())
    .pipe(postcss(plugins))
    .pipe(rename({ basename: 'default.min', extname: '.css' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('assets/css'));
});

gulp.task('watch', function() {
  gulp.watch('src/styles/*.pcss', gulp.series('styles'));
});

gulp.task('default', gulp.series('styles', 'watch'));