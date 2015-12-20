var gulp = require('gulp');
var connect = require('gulp-connect');
var webpack = require('webpack-stream');

gulp.task('bundle', function() {
	return gulp.src('./src/app.ts')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('./dist'));
});

gulp.task('serve', ['bundle'], function() {
  connect.server({ root: ['./'], port: 3000 });
});

gulp.task('build', ['bundle']);

// By default start the server and bundle the app in dist/bundle.js
gulp.task('default', ['serve'], function() {
  gulp.watch('**/*.ts', ['bundle']);
});
