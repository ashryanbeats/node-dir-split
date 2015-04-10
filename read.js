var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
var path = require('path');

module.exports = {
	makeFilenameAndDateObjects: function(filePaths) {
		console.log(filePaths);
		var promisesForStats = filePaths.map(this.getFileInfo);

		return Promise.all(promisesForStats).then(function (stats) {
			console.log(stats);
			return filePaths.map(function (filename, index) {
				return {
					name: filename,
					stat: stats[index]
				};
			});

		});
	},

	getFileInfo: function(filename) {
		// console.log(filename);
		return fs.statAsync(filename).then(function (stat) {
			return {
				year: stat.ctime.getFullYear(),
				month: stat.ctime.getMonth() + 1
			};
		});
	},

	makeFilePaths: function(filenames, readDirPath) {
		return filenames.map(function (filename) {
			return path.join(readDirPath, filename);
		});
	}
};