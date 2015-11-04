var gulp    = require('gulp'),
    sass    = require('gulp-sass'),
    watch   = require('gulp-watch');

gulp.task('sass-compile', function(){
    gulp.src('css/**.scss')
    .pipe(watch('css/**.scss'))
    .pipe(sass())
    .pipe(gulp.dest('build/css'))
});

gulp.task('default', ['sass-compile']);