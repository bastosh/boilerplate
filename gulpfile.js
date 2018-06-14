var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');

gulp.task('css', function() {
    return gulp.src('src/css/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('copy', function() {
   return gulp.src('src/index.html')
       .pipe(gulp.dest('dist'));
});

gulp.task('default', ['css', 'copy']);