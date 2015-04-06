var fs = require('fs');

console.log(process.argv[2]);

fs.readdir(process.argv[2], function(err, files){
	if (err) return done(err);
	fs.stat(process.argv[2] + '/' + files[0], function(err, stats) {
		if (err) return done(err);
		console.log(stats);
	});
});


function done(err) {
	console.log(err);
}