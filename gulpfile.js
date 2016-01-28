/**
 * Created by tongliang on 2016/1/27.
 */

var gulp = require('gulp');


var less = require('gulp-less');
var cssnano = require('gulp-cssnano');
gulp.task('style', function() {
  gulp.src('src/css/*.less')
    .pipe(less())
    .pipe(cssnano())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

var concat = require('gulp-concat');
gulp.task('js', function() {
  gulp.src('src/js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('image', function() {
  gulp.src('src/image/*.*')
    .pipe(gulp.dest('dist/image'))
    .pipe(browserSync.reload({
      stream: true
    }));;
});

var htmlmin = require('gulp-htmlmin');
gulp.task('html', function() {
  gulp.src('src/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

var bowserSync = require('browser-sync');
gulp.task('serve', function() {
  bowserSync({
      server: {
        baseDir: ['dist'],
      },
    },

    function(err, bs) {
      console.log(bs.options.getIn(["urls", "local"]));
    }
  );

  gulp.watch('src/css/*.less', ['style']);
  gulp.watch('src/js/*.js', ['script']);
  gulp.watch('src/image/*.*', ['image']);
  gulp.watch('src/*.html', ['html']);


})
