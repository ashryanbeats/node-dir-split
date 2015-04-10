var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
var path = require('path');
var write = require('./write');
var read = require('./read');

var readDirPath = process.argv[2];
var writeDirPath = process.argv[3];

var getFileNames = fs.readdirAsync(readDirPath)
.then(function(filenames) {
	return read.makeFilePaths(filenames, readDirPath);
})
.then(function(filePaths) {
	return read.makeFilenameAndDateObjects(filePaths);
})
.then(function (files) {
	console.log("Files ", files);
});

















// .then(function(filePaths) {
// 	console.log(filePaths);

// 	var fileNameDate = {};

	
// 	fs.statAsync(filePaths, function(err, stats) {
// 		for (var i = 0; i < filePaths.length; i++) {
// 			 console.log(stats);
// 			//fileNameDate[filePaths[i]] = stats.ctime.getFullYear();
// 		}
// 	});
// });




	//files.forEach(getFileInfo);


// fs.readdir(readDirPath, function(err, files){
// 	if (err) return done(err);

// 	pathToRead = readDirPath;

// 	console.log("READING PATH: ", pathToRead);

// 	files.forEach(getFileInfo);

// 	fs.readdir(writeDirPath, function(err, files) {
// 		if (err) return done(err);

// 		pathToRead = writeDirPath;

// 		console.log("READING PATH: ", pathToRead);

// 		files.forEach(getFileInfo);
// 	});
// });



// function done(err) {
// 	console.log(err);
// }

// function getFileInfo(filename) {
// 	fs.stat(pathToRead + '/' + filename, function(err, stats) {
// 		if (err) return done(err);
// 		console.log(filename);
// 		console.log(stats);
// 		console.log(stats.ctime.getFullYear());
// 		console.log(stats.ctime.getMonth() + 1);
// 	});
// }