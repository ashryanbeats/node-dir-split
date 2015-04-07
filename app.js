var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));

var readDirPath = process.argv[2];
var writeDirPath = process.argv[3];
var pathToRead;

fs.readdir(readDirPath).forEach(getFileInfo).then(function(files) {
	console.log(files);
});


// fs.readdir(readDirPath, function(err, files){
// 	if (err) return done(err);

// 	pathToRead = readDirPath;

// 	console.log("READING PATH: ", pathToRead);

// 	files.forEach(getFileInfo);

// 	// fs.readdir(writeDirPath, function(err, files) {
// 	// 	if (err) return done(err);

// 	// 	pathToRead = writeDirPath;

// 	// 	console.log("READING PATH: ", pathToRead);

// 	// 	files.forEach(getFileInfo);
// 	// });
// });



function done(err) {
	console.log(err);
}

function getFileInfo(filename) {
	fs.stat(pathToRead + '/' + filename, function(err, stats) {
		if (err) return done(err);
		console.log(filename);
		console.log(stats);
		console.log(stats.ctime.getFullYear());
		console.log(stats.ctime.getMonth() + 1);
	});
}