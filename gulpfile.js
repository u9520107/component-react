var gulp = require('gulp');
var fs = require('fs');
var request = require('request');
var path = require('path');

var version = '0.10.0';
var root = 'http://fb.me/';

gulp.task('copy-react', function (cb) {
	var url = root + 'react-' + version + '.js';
	if(!fs.existsSync('react')) {
		fs.mkdirSync('react');
	}
	var stream = request(url, function (err, resp) {
		if(err || resp.statusCode != 200) {
			throw new Error('Couldn\'t fetch %s: ' + (err ? err.message : 'HTTP ' + resp.statusCode));
		}
	});
	var writer = fs.createWriteStream(path.resolve('react','react.js'));
	stream.pipe(writer);
	stream.on('error', function(err) {
		throw err;
	});
	writer.on('error', function (err) {
		throw err;
	});
	writer.on('end', function () {
		cb();
	});
});




gulp.task('default',['copy-react'], function () {

});
