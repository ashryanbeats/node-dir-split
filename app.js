var fs = require('fs');

var readDirPath = process.argv[2];

fs.readdir(readDirPath, function(err, files){
	if (err) return done(err);
	
	files.forEach(getFileInfo);
});


function done(err) {
	console.log(err);
}

function getFileInfo(filename) {
	fs.stat(readDirPath + '/' + filename, function(err, stats) {
		if (err) return done(err);
		console.log(filename);
		console.log(stats);
		console.log(stats.ctime.getFullYear());
		console.log(stats.ctime.getMonth() + 1);
	});
}