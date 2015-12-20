var gulp = require('gulp');
var connect = require('gulp-connect');
var webpack = require('webpack-stream');

gulp.task('connect', ['bundle'], function() {
  connect.server({
    root: ['./'],
    port: 3000
  });
});

gulp.task('bundle', function() {
	return gulp.src('./src/app.ts')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('./dist'))
  ;
});

gulp.task('build', ['bundle']);

gulp.task('default', ['connect'], function() {
  gulp.watch('**/*.ts', ['bundle']);
});
