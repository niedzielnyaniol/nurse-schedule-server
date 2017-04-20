const gulp = require('gulp');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const gutil = require('gulp-util');
const ngAnnotate = require('gulp-ng-annotate');
const nodemon = require( 'nodemon' );

gulp.task('js', function(){
    gulp.src(['ng/module.js', 'ng/**/*.js'])
        .pipe(sourcemaps.init())
            .pipe(concat('app.js'))
            .pipe(ngAnnotate())
            .on('error', function(err){
                gutil.log(
                    gutil.colors.red('[Error]'), 
                    err.toString()
                )
            })
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('assets'));

});

gulp.task('watch:js', ['js'], function(){
    gulp.watch('ng/**/*.js', ['js']);
});

gulp.task( 'dev:server' , function(){
    nodemon( {
        script: 'server.js',
        ext: 'js',
        ignore: [ 'ng*', 'gulp*', 'assets*' ]
    } );
} );

gulp.task('dev', ['watch:js', 'dev:server']);