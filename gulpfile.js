const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', function () {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./public/css'));
});



gulp.task('default', function (){
    return gulp.watch('./src/scss/**/*.scss', gulp.series('sass'));
});