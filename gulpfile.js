var gulp = require('gulp');
var fs = require('fs');

gulp.task('copy-react', function () {
	if(fs.existsSync(__dirname + '/node_modules/react')) {
		gulp.src(__dirname + '/node_modules/react/lib/*.js')
			.pipe(gulp.dest('react'));
	
	}
});




gulp.task('default',['copy-react'], function () {

});
