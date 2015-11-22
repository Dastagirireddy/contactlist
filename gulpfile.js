var gulp = require('gulp'),
	exec = require('child_process').exec,
	Server = require('karma').Server,
	shell = require('gulp-shell');

////////////////////////////////////////////////////
//// build the application
////////////////////////////////////////////////////
gulp.task('build', shell.task([
    // This is the command
    './node_modules/requirejs/bin/r.js -o build/unit/build.js'
]));

////////////////////////////////////////////////////
//// Run application
////////////////////////////////////////////////////
gulp.task('run', function(){

	exec('nodemon server.js', function (err, stdout, stderr) {

	  console.log(stdout);
	  console.log(stderr);
	  cb(err);
	});
});

////////////////////////////////////////////////////
//// Run test, once and exit
////////////////////////////////////////////////////
gulp.task('test', function (done) {
	
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('default', function(){

	console.log("Initialized gulp with default,..");
});