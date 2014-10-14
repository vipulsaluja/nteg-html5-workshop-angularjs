var express = require('express');
var app = express();
var fs = require('fs');
app.use(express.static(__dirname + '/public'));

function getJson(res, jsonName) {
	// var fileJSON = require('/data/transactions.json');
	// console.log(JSON.parse(fileJSON));
	try {
		fs.readFile(__dirname + '/data/' + jsonName + '.json', 'utf8', function(err, data) {
			if (err) {
				console.log('Error: ' + err);
				return;
			}
			if (data) {
				data = JSON.parse(data);
				res.json(data);
			}
		});
	} catch (err) {
		res.json("");
	}
}

app.get('/items', function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	getJson(res, "items");
});

app.listen(process.env.PORT || 3000);
console.log("Server listening on port 3000");