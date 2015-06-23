var paths = require('../paths');
var gulp = require('gulp');
//var browserSync = require('browser-sync');
var runSequence = require('run-sequence');
var ts = require('gulp-typescript');
//var merge = require('merge2');

gulp.task('build-ts', function () {
    var tsResult = gulp.src([
//        'src/typings/**/*.d.ts',
        paths.typescriptSource
    ],
        { base: "src" })
    .pipe(ts({
//        typescript: require('typescript'),
        declarationFiles: false,
        noExternalResolve: true,
        target: "es5",
        module: "amd",
        emitDecoratorMetadata: true,
        listFiles: true,
        version: true,
        diagnostics: true
    }));

    //return merge([
    //    tsResult.dts.pipe(gulp.dest(paths.output)),
    //    tsResult.js.pipe(gulp.dest(paths.output))
    //]);

    return tsResult.js.pipe(gulp.dest(paths.output));
});

//var path = {
//    sourceTS: "views/**/*.ts",
//    sourceJS: "views/**/*.js",
//    html: "views/**/*.html",
//    style: "styles/**/*.css"
//}

//gulp.task('serve', function (done) {
//    browserSync({
//        open: false,
//        port: 9000,
//        server: {
//            baseDir: ['.'],
//            middleware: function (req, res, next) {
//                res.setHeader('Access-Control-Allow-Origin', '*');
//                next();
//            }
//        }
//    }, done);
//});

//function reportChange(event) {
//    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
//}

//gulp.task('watch', ['serve'], function () {
//    gulp.watch(path.sourceTS, [browserSync.reload]).on('change', reportChange);
//    gulp.watch(path.html, [browserSync.reload]).on('change', reportChange);
//    gulp.watch(path.style, [browserSync.reload]).on('change', reportChange);
//});