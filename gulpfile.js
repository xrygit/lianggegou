var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');


gulp.task('sass',function(){
	return gulp.src("./src/sass/*.scss").pipe(sass()).pipe(rename({"suffix" : ".min"}))
	//.pipe(cssnano())
	.pipe(gulp.dest('dist/css'));
})
gulp.task('img',function(){
	return gulp.src('./src/images/index/*').pipe(imagemin()).pipe(gulp.dest('dist/images/index'));
})
gulp.task('default',function(){
	gulp.watch('./src/sass/*.scss',['sass']);
	gulp.watch('.src/images/index/*',['img']);
})