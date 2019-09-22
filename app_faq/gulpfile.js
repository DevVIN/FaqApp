var gulp = require('gulp'),
	gutil = require('gulp-util'),
	sass = require('gulp-sass'),
	cleanCSS = require('gulp-clean-css');
	uglify = require('gulp-uglify'),
	notify = require('gulp-notify'),
	concat = require('gulp-concat'),
	autoprefixer = require('gulp-autoprefixer')

var path = {
	
	/* Path for faq App site */
	faq_scss_dev: ['scss/*.scss', 'scss/**/*.scss'],	
	faq_scss_dest: 'cartridge/static/default/css',

};

	
/* faq sass compile Task */
gulp.task('faq-sass', function() {
	gulp.src(path.faq_scss_dev)
	.pipe(sass())
	.pipe(autoprefixer())
	.pipe(cleanCSS())
	.pipe(gulp.dest(path.faq_scss_dest))
	
	.pipe(notify({
		message: "Your Tax Exempt scss files are now modified!"
	}));
});


//Global watch task 
gulp.task('watch', function() {
	gulp.watch(path.faq_scss_dev, ['faq-sass']);
});

/* Gulp tasks */
gulp.task('default', ['watch']);

