var gulp = require('gulp')
    ,sass = require('gulp-sass')
    ,browserSync = require('browser-sync').create()
    ,reload = browserSync.reload;


    gulp.task('sass', function () {
        return gulp.src('../src/assets/scss/**/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('../src/static/css'))
            .pipe(browserSync.reload({stream: true}));
    });

    gulp.task('browserSync', function(){
        return browserSync.init({
            proxy: 'localhost:8000'
        });
    });

    gulp.task('watch', function () {
        gulp.watch('../src/assets/scss/**/*.scss', ['sass']);
        // gulp.watch('../src/static/js/**/*.js', browserSync.reload);
        gulp.watch('../src/templates/**/*.html', browserSync.reload);
    });

    gulp.task('default', gulp.parallel(gulp.series('browserSync', 'sass')));