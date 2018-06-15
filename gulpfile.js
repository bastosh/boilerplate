var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var ghPages = require('gulp-gh-pages');
var imagemin = require('gulp-imagemin');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');



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
   gulp.src('src/js/langpack')
       .pipe(gulp.dest('dist/js'));
    gulp.src('src/flags/**/*')
        .pipe(gulp.dest('dist/flags'));
});

gulp.task('useref', function () {
    return gulp.src('src/*.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', cleanCSS()))
        .pipe(gulp.dest('dist'));
});

gulp.task('deploy', function() {
    return gulp.src('./dist/**/*')
        .pipe(ghPages());
});

gulp.task('prod', ['css', 'copy', 'img']);

gulp.task('default', ['css', 'copy']);