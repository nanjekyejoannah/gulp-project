// Gulpfile

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    gutil = require('gulp-util');
	sourcemaps = require('gulp-sourcemaps'),
	coffee = require('gulp-coffee'),
	uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    eslint = require('gulp-eslint');


gulp.task('copy', function() {
  gulp.src('index.html')
  .pipe(gulp.dest('assets'))
});

gulp.task('compile-css', function() {
  return gulp.src('styles/main.scss')
    .pipe(sourcemaps.init())
     .pipe(sass({style: 'expanded'}))
      .on('error', gutil.log)
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('assets'));
});

gulp.task('compile-js', function() {
  gulp.src('scripts/hello.coffee')
  .pipe(coffee({bare: true})
    .on('error', gutil.log))
  .pipe(gulp.dest('scripts'))
});

gulp.task('js', function() {
  gulp.src('scripts/*.js')
  .pipe(uglify())
  .pipe(concat('script.js'))
  .pipe(gulp.dest('assets'))
});

gulp.task('eslint', () => {
    return gulp.src('assets/script.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
});

gulp.task('default', ['compile-js', 'js']);





// gulp.task('default', ['html', 'coffee', 'js', 'sass', 'connect', 'watch']);
