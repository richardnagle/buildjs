var gulp = require('gulp');
var runSequence = require('run-sequence');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var to5 = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var paths = require('../paths');
var compilerOptions = require('../babel-options');
var assign = Object.assign || require('object.assign');
var notify = require("gulp-notify");
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json', {
  typescript: require('typescript'),
});

 gulp.task('build-system', function(callback) {
   return runSequence(
    'build-ts',
     callback
   );
 });

// gulp-typescript compiles TS files directly into ES5
gulp.task('build-ts', function () {
    var tsResult = gulp.src([paths.tsSource, paths.tsxSource, paths.jspmDefinitions, paths.typings])
    .pipe(sourcemaps.init())
    .pipe(ts(tsProject));
  return tsResult.js
    .pipe(sourcemaps.write({includeContent: true, sourceRoot: paths.sourceMapRelativePath}))
    .pipe(gulp.dest(paths.output));
});

 // transpiles changed ES6 files to SystemJS format
 // the plumber() call prevents 'pipe breaking' caused
 // by errors from other gulp plugins
 // https://www.npmjs.com/package/gulp-plumber
 gulp.task('build-js', function () {
   return gulp.src(paths.source)
     .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
     .pipe(changed(paths.output, {extension: '.js'}))
     .pipe(sourcemaps.init({loadMaps: true}))
     .pipe(to5(assign({}, compilerOptions, {modules:'system'})))
     .pipe(sourcemaps.write({includeContent: true}))
     .pipe(gulp.dest(paths.output));
 });

// copies changed html files to the output directory
gulp.task('build-html', function () {
  return gulp.src(paths.html)
    .pipe(changed(paths.output, {extension: '.html'}))
    .pipe(gulp.dest(paths.output));
});

// this task calls the clean task (located
// in ./clean.js), then runs the build-system
// and build-html tasks in parallel
// https://www.npmjs.com/package/gulp-run-sequence
gulp.task('build', function(callback) {
  return runSequence(
    'clean',
    ['build-system', 'build-html'],
    callback
  );
});
