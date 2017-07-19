var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    minifyCss = require('gulp-minify-css'),
    ngmin = require('gulp-ngmin');

gulp.task('minify', function(){
   gulp.src(['javascript/vanillaJS.js', '!javascript/*min.js'])
       .pipe(rename({suffix: '.min'}))
       .pipe(uglify())
       .pipe(gulp.dest('javascript'))
    .pipe(reload({stream:true}));

});

gulp.task('ngMinify', function(){
   gulp.src('javascript/angularModule.js')
       .pipe(rename({suffix:'.min'}))
       .pipe(ngmin())
       .pipe(gulp.dest('javascript'));
});

gulp.task('minifyCss', function(){
   gulp.src(['css/*.css', '!css/*.min.css'])
       .pipe(rename({suffix: '.min'}))
       .pipe(minifyCss({compatibility: 'ie8'}))
       .pipe(gulp.dest('css'))
       .pipe(reload({stream:true}));
});
//browser task  just to watch html..
gulp.task('html', function(){
   gulp.src('**/*.html')
       .pipe(reload({stream:true}));

});
//reloads browser as html/anything changes
gulp.task('browser-sync', function(){
    browserSync({
        server: {baseDir: "./"},
        startPath: "/"});

});

//gulp.task('watch', function(){
//    gulp.watch('javascript/*.js', ['minify']);
//    gulp.watch('css/*.css', ['minifyCss']);
//    gulp.watch('**/*.html', ['html']);
//
//});

gulp.task('default', ['minify', 'minifyCss', 'html', 'ngMinify']);