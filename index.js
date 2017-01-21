var request = require('request');
var fs = require('fs')

request.get({
	url: 'https://desolate-garden-39734.herokuapp.com/',
	encoding: 'binary'
}, function(err, response, body) {
	fs.writeFile("./test.png", body, 'binary', function(err) {
		if (err)
			console.log(err);
		else
			console.log("The file was saved!");
	});
});
