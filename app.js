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
