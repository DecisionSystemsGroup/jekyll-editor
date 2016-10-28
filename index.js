var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
	extended: true
}));

app.route('/article')
	.get(function (req, res) {
		res.sendFile('index.html', {root: './public'});
	})
	.post(function (req, res) {
		res.send(req.body.articleTitle+', '+req.body.articleBody);
	});	

var port = 3000;
app.listen(port, function () {
	console.log('App listening on port '+port+'!');
});