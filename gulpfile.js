var gulp = require('gulp');
var concat = require('gulp-concat');
var minifycss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('css', function(){
	return gulp.src([
		'bower_components/angular-material/angular-material.min.css',
		'bower_components/ionicons/css/ionicons.min.css',
		'src/css/*.css'
		])
	.pipe(autoprefixer({
		browsers : ['last 10 versions'],
		cascade : false
		}))
	.pipe(concat('all.min.css'))
	.pipe(minifycss({
		keepBreaks : false,
		keepSpecialComments : 0
	}))
	.pipe(gulp.dest('dist/css'));
});

gulp.task('font',function(){
	return gulp.src([
		'bower_components/ionicons/fonts/*.*'
		])
	.pipe(gulp.dest('dist/fonts'));
});

gulp.task('js', function(){
	return gulp.src([
		'bower_components/angular/angular.min.js',
		'bower_components/angular-animate/angular-animate.min.js',
		'bower_components/ui-router/release/angular-ui-router.min.js',
		'bower_components/angular-aria/angular-aria.min.js',
		'bower_components/angular-material/angular-material.min.js',
		'src/js/*.js'
		])
	.pipe(concat('all.min.js'))
	.pipe(gulp.dest('dist/js'));
});

gulp.task('watch',function(){
	gulp.watch('src/css/*.css',['css']);
	gulp.watch('src/js/*.js',['js']);
});

gulp.task('default',['css', 'font', 'js']);