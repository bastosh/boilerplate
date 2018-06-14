var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var ghPages = require('gulp-gh-pages');


gulp.task('css', function() {
    return gulp.src('src/css/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('copy', function() {
   return gulp.src('src/index.html')
       .pipe(gulp.dest('dist'));
});

gulp.task('deploy', function() {
    return gulp.src('./dist/**/*')
        .pipe(ghPages());
});

gulp.task('default', ['css', 'copy']);