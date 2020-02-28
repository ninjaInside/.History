let gulp = require('gulp')
		babel = require('gulp-babel')
		sass = require('gulp-sass')
		jshint = require('gulp-jshint')
		uglify = require('gulp-uglify-es').default
		clean = require('del')
		concat = require('gulp-concat')
		autopolyfiller = require('gulp-autopolyfiller')
		autoprefixer = require('autoprefixer')
		mincss = require('gulp-cssmin')
		uncss = require('gulp-uncss')
		postcss = require('gulp-postcss')
		fixjs = require('gulp-fixmyjs')
		browserSync = require('browser-sync').create();

	gulp.task('sass', function() {
		return gulp.src('src/sass/**/*.sass')
		.pipe(sass())
		.pipe(postcss([autoprefixer([
			'last 10 version'
			])]))
		.pipe(concat('style.min.css'))
		.pipe(browserSync.reload({
			stream: true
		}))
		.pipe(gulp.dest('src/css'))
	});

	gulp.task('js-validate-minify', function() {
		return gulp.src('src/js/**/*.js')
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(jshint())
		.pipe(fixjs())
		.pipe(uglify())
		.pipe(concat('scripts-modules.min.js'))
		.pipe(gulp.dest('dist/js'))
	});

	gulp.task('libs-concat-minify', function() {
		return gulp.src('src/libs/**/*.js')
		.pipe(uglify())
		.pipe(concat('libs.min.js'))
		.pipe(gulp.dest('dist/libs'))
	});

	gulp.task('browser-sync', function() {
		browserSync.init({
			server: {
				baseDir: './src'
			},
		});
		browserSync.watch('src', browserSync.reload)
	});

	gulp.task('watch', function() {
		gulp.watch('src/sass/**/*.sass', gulp.series('sass'));
	});

	gulp.task('serve', gulp.series(
		gulp.parallel('browser-sync', 'watch')
	));

	gulp.task('clean', async function() {
		return clean.sync('dist')
	});

	gulp.task('port-css', function() {
	    return gulp.src('src/css/style.min.css')
	    .pipe(gulp.dest('dist/css'));
	})

	gulp.task('port-fonts', function() {
	    return gulp.src('src/fonts/**/*')
	    .pipe(gulp.dest('dist/fonts'));

	})

	gulp.task('port-html', function() {
		return gulp.src('src/*.html')
	    .pipe(gulp.dest('dist'));
	})

	gulp.task('port-img', function() {
	  	return gulp.src('src/img/**/*')
	    .pipe(gulp.dest('dist/img'));
	})

	gulp.task('builder',gulp.series(
		'clean', 'sass', 'js-validate-minify', 
		'libs-concat-minify', 'port-css', 'port-img',
		'port-html', 'port-fonts'), function() {
		return;
	});
