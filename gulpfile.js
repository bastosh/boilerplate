var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var ghPages = require('gulp-gh-pages');
var imagemin = require('gulp-imagemin');


gulp.task('css', function() {
    return gulp.src('src/css/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('img', function() {
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
    }
);

gulp.task('copy', function() {
   return gulp.src('src/index.html')
       .pipe(gulp.dest('dist'));
});

gulp.task('deploy', function() {
    return gulp.src('./dist/**/*')
        .pipe(ghPages());
});

gulp.task('prod', ['css', 'copy', 'img']);

gulp.task('default', ['css', 'copy']);