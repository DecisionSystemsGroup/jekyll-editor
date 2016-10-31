const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const categories = [
	{name: 'post'},
	{name: 'project'},
	{name: 'member'}
];

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
	res.render('main', {categories: categories});
});

var port = 3000;
app.listen(port, function () {
	console.log('App listening on port '+port+'!');
});