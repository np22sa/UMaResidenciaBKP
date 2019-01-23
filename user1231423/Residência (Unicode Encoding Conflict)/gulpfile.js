//require all needed vars
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var mustache = require('gulp-mustache');
var purify = require('gulp-purifycss');

//Detect changes in files and autosync
gulp.task('watch', function () {
    browserSync.init({
        server: "dist/",
    });
    gulp.watch(['src/assets/scss/*.scss'], gulp.series('compile-sass')).on('change', browserSync.reload);
    gulp.watch('src/views/*.mustache', gulp.series('compile-mustache')).on('change', browserSync.reload);
    // gulp.watch('src/view/json/*.json', ['move-json']).on('change', browserSync.reload);
});

//Compile scss into css
gulp.task('compile-sass', function () {
    return gulp.src('src/assets/scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/assets/css/'))
        .pipe(browserSync.stream());
});

//Compile mustache to html
gulp.task('compile-mustache', function () {
    return gulp.src(['src/views/*.mustache'])
        .pipe(mustache({},
            {
                'extension': '.html'
            }, {})).on('error', function (error) {
            // We have an error
            console.log(error);
        })
        .pipe(gulp.dest('dist/')); //sent to root
});

//Remove all unused css
gulp.task('clean-css', function () {
    return gulp.src('dist/assets/css/style.css')
        .pipe(purify(['dist/assets/css/style.css']))
        .pipe(gulp.dest('dist/assets/css/'))
        .pipe(browserSync.stream());
});

//Move JSON files
gulp.task('move-json', function () {
    gulp.src("src/json/*.json")
        .pipe(gulp.dest("dist/assets/json/"));
});

