var gulp    = require('gulp'),
    sass    = require('gulp-sass'),
    coffee  = require('gulp-coffee'),
    watch   = require('gulp-watch'),
    plumber = require('gulp-plumber'),
    gls     = require('gulp-live-server');
    
gulp.task('serve', function(){
    var server = gls.static('/', 8000);
    server.start();
});

gulp.task('sass-compile', function(){
    gulp.src('css/**.scss')
    .pipe(watch('css/**.scss'))
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('build/css'))
});

gulp.task('coffee-compile', function(){
    gulp.src('js/**.coffee')
    .pipe(watch('js/**/*.coffee'))
    .pipe(plumber())
    .pipe(coffee())
    .pipe(gulp.dest('build/js'))
});

gulp.task('default', ['sass-compile', 'coffee-compile', 'serve']);