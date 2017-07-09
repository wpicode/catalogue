var gulp = require('gulp');
var minifycss = require( 'gulp-minify-css' );
var notify = require( 'gulp-notify' );
var concatCss = require('gulp-concat-css');
var  rename = require( 'gulp-rename' );
var  plumber = require( 'gulp-plumber' );

var sass = require('gulp-sass');
 
var onError = function( err ) {
  console.log( 'An error occured:', err.message );
  this.emit('end');
}
gulp.task('sass', function () {
 return gulp.src('./public/sass/*.scss')
    .pipe( plumber( { errorHandler: onError } ) )
    .pipe(sass())
    .pipe( gulp.dest( './public/css/dist/' ) )
     .pipe(concatCss("App.css"))
    .pipe( minifycss() )
    .pipe( gulp.dest( './public/css' ) )
    .pipe(notify({ message: 'sass task complete' }))
});
 
gulp.task('watch', function () {
  gulp.watch('./public/sass/*.scss', ['sass']);
});