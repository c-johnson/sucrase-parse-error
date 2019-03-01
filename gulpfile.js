var sucrase = require('@sucrase/gulp-plugin');
var gulp = require('gulp');

gulp.task('jsx-transform', function(cb) {
  return gulp.src('./index.js')
    .pipe(sucrase({
      transforms: ['jsx']
    }))
    .pipe(gulp.dest('dist'));
});
