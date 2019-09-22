var gulp = require('gulp'),
	gutil = require('gulp-util'),
	sass = require('gulp-sass'),
	cleanCSS = require('gulp-clean-css');
	uglify = require('gulp-uglify'),
	notify = require('gulp-notify'),
	concat = require('gulp-concat'),
	autoprefixer = require('gulp-autoprefixer'),
	rename = require('gulp-rename')
	

var path = {
	
	/* Path for faq App site */
	faq_scss_dev: ['scss/*.scss', 'scss/**/*.scss'],	
	faq_scss_dest: 'cartridge/static/default/css',
	bootstrap_js: ['node_modules/bootstrap/dist/js/bootstrap.js'],
	bootjs_dest: 'cartridge/static/default/js',
	bootstrap_dev: 'scss/vendors/bootstrap/bootstrap.scss',

};

	
/* faq sass compile Task */
gulp.task('faq-sass', function() {
	gulp.src(path.faq_scss_dev)
	.pipe(sass())
	.pipe(autoprefixer())
	.pipe(cleanCSS())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest(path.faq_scss_dest))
	
	.pipe(notify({
		message: "Your Faq App scss files are now modified!"
	}));
});


/* faq sass compile Task 
gulp.task('bootstrap-sass', function() {
	gulp.src(path.bootstrap_dev)
	.pipe(sass())
	.pipe(autoprefixer())
	.pipe(cleanCSS())
	.pipe(gulp.dest(path.faq_scss_dest))
	
	.pipe(notify({
		message: "Your Bootstrap scss files are now modified!"
	}));
});*/

/* minify-bootstrap Task */
gulp.task('min-boot', function() {
	gulp.src(path.bootstrap_js)
	.pipe(uglify())
	.pipe(rename({extname:'.min.js'}))
	.pipe(gulp.dest(path.bootjs_dest))
	.pipe(notify({
		message: "Your Bootstrap Js file got minified!"
	}));
});

/* minify-css Task */
gulp.task('min-css', function() {
	gulp.src(path.bootstrap_dev)
	.pipe(cleanCSS())
	.pipe(rename({extname:'.min.css'}))
	.pipe(gulp.dest(path.faq_scss_dest))
	.pipe(notify({
		message: "Your bootstrap css file got minified!"
	}));
});

//Global watch task 
gulp.task('watch', function() {
	gulp.watch(path.faq_scss_dev, ['faq-sass']);
});

/* Gulp tasks */
gulp.task('default', ['watch']);

