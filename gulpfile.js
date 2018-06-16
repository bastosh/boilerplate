var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var ghPages = require('gulp-gh-pages');
var imagemin = require('gulp-imagemin');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');


gulp.task('img', function() {
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('public/img'));
    }
);

gulp.task('copy', function() {
   gulp.src('src/js/langpack/*.json')
       .pipe(gulp.dest('public/js/langpack'));
    gulp.src('src/flags/**/*')
        .pipe(gulp.dest('public/flags'));
});

gulp.task('useref', function () {
    return gulp.src('src/*.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', cleanCSS()))
        .pipe(gulp.dest('public'));
});

gulp.task('deploy', function() {
    return gulp.src('./public/**/*')
        .pipe(ghPages());
});

gulp.task('default', ['copy', 'img', 'useref']);