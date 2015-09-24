var gulp = require('gulp');
var browserSync = require('browser-sync');
var shell = require('gulp-shell');

// this task utilizes the browsersync plugin
// to create a dev server instance
// at http://localhost:9000
//gulp.task('serve', ['build'], function(done) {
//  browserSync({
//    open: false,
//    port: 9000,
//    server: {
//      baseDir: ['.'],
//      middleware: function (req, res, next) {
//        res.setHeader('Access-Control-Allow-Origin', '*');
//        next();
//      }
//    }
//  }, done);
//});

gulp.task('serve', ['build'], function (done) {
    browserSync({
        open: false,
        proxy: 'localhost:49387',
        port: 8000,
        online: false
    }, done);
});

gulp.task('iisexpress', shell.task([
	'cmd /c "c:\\Program Files\\IIS Express\\iisexpress.exe" /path:c:\\_root\\aurelia\\buildjs\\src\\buildjs\\wwwroot\\ /port:49387'	
]));
