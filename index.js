const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const pages = require('./pages.js');
const hbs = exphbs.create({
    defaultLayout: 'main',
    partialsDir: ['views/partials/']
});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({
	extended: true
}));

app.get('/', function(req, res){
	res.render('index', {pages: pages.all});
});

app.get('/:resource/new', function(req, res){
	var data = {
		action: 'new',
		page: pages.find(req.params.resource)
	};
	res.render('editor', data);
});

var port = process.env.PORT || 80;
app.listen(port, function () {
	console.log('App listening on port '+port+'!');
});