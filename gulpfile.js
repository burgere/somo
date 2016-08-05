var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var clean = require('gulp-clean');
var jshint = require('gulp-jshint');

var bases = {
	app: 'www/',
	dist: 'dist/',
};

var paths = {
	html: ['index.html', '**/**/**.html'],
	scripts: ['app/**/**/**.js', 'app/**/**/**.min.js'],
	styles: ['assets/css/**.css', 'assets/css/**.min.css'],
	libs: [
		'assets/lib/angular-animate.min.js',
		'assets/lib/angular-aria.min.js',
		'assets/lib/angular-material-icons.min.js',
		'assets/lib/angular-material.js',
		'assets/lib/angular-ui-router.min.js',
		'assets/lib/angular.min.js',
		'assets/lib/ng-cordova.min.js',
		'assets/lib/ngStorage.min.js',
		'assets/lib/ngTouch.min.js',
		'assets/lib/angular-material.min.js',
		'../node_modules/angular-material-calendar/angular-material-calendar.js'
	],
	img: ['img/**.png']
}

gulp.task('sass', function() {
	return gulp.src('www/assets/scss/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('www/assets/css'))
	.pipe(browserSync.reload({
		stream: true
	}))
});

gulp.task('watch', ['sass','browserSync'], function() {
	gulp.watch(bases.app + 'assets/scss/*.scss', ['sass']);
	gulp.watch(bases.app + 'assets/css/**.css', ['copy']);
	gulp.watch(bases.app + 'app/**/*', ['scripts', 'copy']);
});

gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: bases.dist
		},
	})
});

gulp.task('clean', function() {
	return gulp.src(bases.dist)
	.pipe(clean());
});

gulp.task('copy', ['clean', 'scripts'], function() {
	//Copies html
	gulp.src(paths.html, {cwd: bases.app})
	.pipe(gulp.dest(bases.dist));

	//Copies styles
	gulp.src(paths.styles, {cwd: bases.app})
	.pipe(gulp.dest(bases.dist + 'assets/css'));

	gulp.src(paths.libs, {cwd: bases.app})
		//TODO: Uglify dependencies
		// .pipe(uglify({
		// }))	
		.pipe(gulp.dest(bases.dist + 'assets/lib'));

	gulp.src(paths.img, {cwd: bases.app})
	.pipe(gulp.dest(bases.dist + 'img'));


});


gulp.task('scripts', ['clean'], function() {
	gulp.src(paths.scripts, {cwd: bases.app})
	.pipe(jshint())
	.pipe(jshint.reporter('default'))
	.pipe(gulp.dest(bases.dist + 'app'));
	//TODO: Uglify dependencies
	// .pipe(uglify())
	// .pipe(concat('app.min.js'))
	// .pipe(gulp.dest(bases.dist + ))
});

gulp.task('dev', ['clean', 'scripts', 'copy', 'watch']);