//require all needed vars
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var mustache = require('gulp-mustache');
var purify = require('gulp-purifycss');

//Detect changes in files and autosync
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b6e1727c66bea377fe3686f4da3390feb771e9e7
gulp.task('check-server', function () {
    browserSync.init({
        baseDir: "dist/",
        server: "dist"
    });
    gulp.watch(['src/assets/scss/*.scss'], ['compile-sass']).on('change', browserSync.reload);
    gulp.watch('src/views/**/*.mustache', ['compile-mustache']).on('change', browserSync.reload);
    gulp.watch('src/views/common/json/*.json', ['move-json']).on('change', browserSync.reload);
<<<<<<< HEAD
=======
gulp.task('watch', function () {
    browserSync.init({
        server: "dist/",
    });
    gulp.watch(['src/assets/scss/*.scss'], gulp.series('compile-sass')).on('change', browserSync.reload);
    gulp.watch('src/views/*.mustache', gulp.series('compile-mustache')).on('change', browserSync.reload);
    // gulp.watch('src/view/json/*.json', ['move-json']).on('change', browserSync.reload);
>>>>>>> 45486e58e65d4199bf0aae508c5c8f25803eb555
=======
>>>>>>> b6e1727c66bea377fe3686f4da3390feb771e9e7
});

//Compile scss into css
gulp.task('compile-sass', function () {
<<<<<<< HEAD
<<<<<<< HEAD
    return gulp.src('src/sass/style.scss')
=======
    return gulp.src('src/assets/scss/style.scss')
>>>>>>> 45486e58e65d4199bf0aae508c5c8f25803eb555
=======
    return gulp.src('src/sass/style.scss')
>>>>>>> b6e1727c66bea377fe3686f4da3390feb771e9e7
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
<<<<<<< HEAD
<<<<<<< HEAD
    return gulp.src('dist/assets/css/main.css')
        .pipe(purify(['src/*.css']))
=======
    return gulp.src('dist/assets/css/style.css')
        .pipe(purify(['dist/assets/css/style.css']))
>>>>>>> 45486e58e65d4199bf0aae508c5c8f25803eb555
=======
    return gulp.src('dist/assets/css/main.css')
        .pipe(purify(['src/*.css']))
>>>>>>> b6e1727c66bea377fe3686f4da3390feb771e9e7
        .pipe(gulp.dest('dist/assets/css/'))
        .pipe(browserSync.stream());
});

//Move JSON files
gulp.task('move-json', function () {
<<<<<<< HEAD
<<<<<<< HEAD
    gulp.src("src/views/common/json/*.json")
=======
    gulp.src("src/json/*.json")
>>>>>>> 45486e58e65d4199bf0aae508c5c8f25803eb555
        .pipe(gulp.dest("dist/assets/json/"));
=======
    gulp.src("src/assets/json/*.json")
    gulp.src("src/views/common/json/*.json")
    .pipe(gulp.dest("dist/assets/json/"));
});

//Move JS files
gulp.task('move-js', function () {
    gulp.src("src/assets/js/**/*.js")
        .pipe(gulp.dest("dist/assets/js/"));
>>>>>>> b6e1727c66bea377fe3686f4da3390feb771e9e7
});

