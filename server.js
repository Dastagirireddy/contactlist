var express = require('express'),
	path = require('path'),
	fs = require('fs'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose');

/////////////////////////////////////////////////
// App level vairables and initializations
/////////////////////////////////////////////////
var app,
	port = process.env.PORT || 5000,
	environment = process.env.NODE_ENV || 'development',
	contact = require('./src/server/controllers/contact.js');

app = express();

/////////////////////////////////////////////////
// Connect to MongoDb 
/////////////////////////////////////////////////
var mognoDbUrl = "mongodb://localhost:27017/contactlist";
mongoose.connect(mognoDbUrl, function(err, result){

	if(err) {

		console.log("Connection failure to the url:", mognoDbUrl);
		return;
	}

	console.log("Connection successful to the url: ", mognoDbUrl);
});

/////////////////////////////////////////////////
// App level configurations
/////////////////////////////////////////////////
app.use(express.static(__dirname));

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

//////////////////////////////////////////////////
// REST API
//////////////////////////////////////////////////
app.post('/api/contact', contact.add);
app.get('/api/contact', contact.getAllContacts);
app.put('/api/contact/:id', contact.update);
app.delete('/api/contact/:id', contact.remove);

if(environment === 'development') {

	var ejs = require('ejs');
	app.set('view engine', 'ejs');  

	app.get('/', function(req, res){

		readDirectory(req, res, __dirname);
	});

	app.get('/*', function(req, res){

		var pathname = path.join(__dirname, req.url);

		fs.exists(pathname, function(exists){

			if(exists) {

				fs.stat(pathname, function(err, stats){

					var dir = stats.isDirectory();
					console.log(dir);

					if(dir) {

						readDirectory(req, res, pathname);
					}
				});
			} else {

				res.send("File not found");
			}
		});
	});

	function getUrl_(req, res) {

		var path = req.url;
		var pattern = /%20%/g
		return path.replace(pattern, ' ');
	}

	function readDirectory(req, res, dirName) {

		fs.readdir(dirName, function(err, files){

			res.render('index', {files: files, path: getUrl_(req, res)});
		});
	}
}

app.listen(port, function(){

	console.log("Development server running at http://localhost:", port);
});