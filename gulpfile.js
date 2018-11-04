var gulp = require('gulp');
var sass = require('gulp-sass');
var   uglify = require('gulp-uglify');
var	  rename = require('gulp-rename');
var	  concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');

gulp.task('js',function(){
	return gulp.src('./src/js/*.js')
	.pipe(concat('main.js'))
	.pipe(rename({'suffix':'.min'}))
	.pipe(uglify()).pipe(gulp.dest('dist'));
})

gulp.task('sass',function(){
	return gulp.src("./src/sass/*.scss").pipe(sass()).pipe(rename({"suffix" : ".min"}))
	.pipe(gulp.dest('dist/css'));
})
gulp.task('img',function(){
	return gulp.src('./src/images/index/*').pipe(imagemin()).pipe(gulp.dest('dist/images/index'));
})
gulp.task('img1',function(){
	return gulp.src('./src/images/*').pipe(imagemin()).pipe(gulp.dest('dist/images'));
})
gulp.task('login',function(){
	return gulp.src('./src/images/login/*').pipe(imagemin()).pipe(gulp.dest('dist/images/login'));
})
gulp.task('regis',function(){
	return gulp.src('./src/images/regis/*').pipe(imagemin()).pipe(gulp.dest('dist/images/regis'));
})
gulp.task('product',function(){
	return gulp.src('./src/images/pro/*').pipe(imagemin()).pipe(gulp.dest('dist/images/pro'));
})
gulp.task('list',function(){
	return gulp.src('./src/images/list/*').pipe(imagemin()).pipe(gulp.dest('dist/images/list'));
})
gulp.task('default',function(){
	gulp.watch('./src/sass/*.scss',['sass']);
	gulp.watch('.src/images/index/*',['img']);
	gulp.watch('.src/images/login/*',['login']);
	gulp.watch('.src/images/regis/*',['regis']);
	gulp.watch('.src/images/pro/*',['product']);
	gulp.watch('.src/images/list/*',['list']);	
	gulp.watch('./src/js/*.js',['js']);
})