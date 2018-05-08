const gulp = require('gulp');
const sass = require('gulp-sass');
const eslint = require('gulp-eslint');
const livereload = require('gulp-livereload');
const del = require('del');
const concat = require('gulp-concat');
const copy = require('gulp-copy');
const uglify = require('gulp-uglify');
const pump = require('pump');


gulp.task('sass', () => {
    return gulp.src('./sass/**/*.scss').pipe(sass())
            .pipe(gulp.dest('./prod/css'));
});
gulp.task('eslint', () => {
    return gulp.src('./scripts/**/*.js').pipe(eslint())
            .pipe(gulp.dest('./js'));
});
gulp.task('live', () => {
    livereload.listen();

    gulp.watch('./scripts/**/*.js', ['eslint', 'sass']);
});
gulp.task('del', () => {
    return del([
        './prod',
    ]);
});
gulp.task('concat', () => {
    return gulp.src('./scripts/**/*.js').pipe(concat('all.js'))
            .pipe(gulp.dest('./prod/concat'));
});
gulp.task('copy', () => {
    return gulp.src('./index.html')
            .pipe(gulp.dest('./prod'));
});
gulp.task('uglify', (cb) => {
    pump([
        gulp.src('./scripts/**/*.js'),
        uglify(),
        gulp.dest('./prod'),
    ], cb);
});

/** Add task ‘prod’, which should delete folder ‘prod’ (if exists), 
 * create folder ‘prod’, copy index.html, copy compiled css file to ‘prod/css/styles.css’, 
 * copy and minify all js code (including libs) to 1 file ‘prod/js/app.js’ */