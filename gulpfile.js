const gulp = require('gulp');
const sass = require('gulp-sass'); // npm install node-sass gulp-sass --save-dev
const livereload = require('gulp-livereload'); // npm install --save-dev gulp-livereload
const sourcemaps = require('gulp-sourcemaps'); // npm install --save-dev gulp-sourcemaps
const babel = require('gulp-babel'); // npm install --save-dev gulp-babel @babel/core @babel/preset-env
const uglify = require('gulp-uglify'); // npm install --save-dev gulp-uglify
const rename = require("gulp-rename"); // npm install --save-dev gulp-rename
const autoprefixer = require('gulp-autoprefixer'); // npm install --save-dev gulp-autoprefixer
const pug = require('gulp-pug'); // npm install --save-dev gulp-pug
const prettyHtml = require('gulp-pretty-html'); // npm install --save-dev gulp-pretty-html

gulp.task('sass', function(){
  return gulp.src('assets/sass/style.sass')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer('last 3 versions'))
    .pipe(gulp.dest('assets/css'))
    .pipe(livereload())
});

gulp.task('compress', function () {
  return gulp.src('assets/js/*.js', { sourcemaps: true }) // path to your file
  .pipe(sourcemaps.init())
  .pipe(babel({
    presets: ["@babel/preset-env"]
  }))
  .pipe(uglify())
  .pipe(rename({ suffix: '-min' }))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('assets/js/min'))
});

gulp.task('pug',function() {
	return gulp.src('pug_files/*.pug')
	.pipe(pug({
	   doctype: 'html',
	   pretty: true
	}))
	.pipe(gulp.dest('./'));
});

gulp.task('pretty', function () {
  return gulp.src('./*.html')
    .pipe(prettyHtml({
      indent_size: 2,
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function(){
  gulp.watch('assets/sass/**/*.sass', gulp.series(['sass']));
  gulp.watch('assets/js/**/*.js', gulp.series(['compress']));
  gulp.watch('pug_files/**/*.pug', gulp.series(['pug']));
});