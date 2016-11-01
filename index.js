const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const categories = [
	{
		name: 'post',
		hasText: true,
		elements: [
			{
				name: 'layout',
				default: 'post'
			},
			{
				name: 'title',
				default: ''
			},
			{
				name: 'author',
				default: ''
			},
			{
				name: 'tags',
				default: '[dsg, ]'
			},
			{
				name: 'language',
				default: 'english'
			},
			{
				name: 'thumb',
				default: ''
			}		
		]
	},
	{
		name: 'project',
		hasText: true,
		elements: [
			{
				name: 'layout',
				default: 'project'
			},
			{
				name: 'title',
				default: ''
			},
			{
				name: 'alias',
				default: ''
			},
			{
				name: 'members',
				default: '[]'
			},
			{
				name: 'thumb',
				default: ''
			}		
		]
	},
	{
		name: 'team',
		editorLabel: 'team member',
		elements: [
			{
				name: 'layout',
				default: 'member'
			},
			{
				name: 'type',
				default: 'student'
			},
			{
				name: 'status',
				default: 'active'
			},
			{
				name: 'title',
				default: ''
			},
			{
				name: 'nickname',
				default: ''
			},
			{
				name: 'bio',
				default: 'active'
			},
			{
				name: 'department',
				default: ''
			},
			{
				name: 'avatar',
				default: ''
			},
			{
				name: 'projects',
				default: '[]'
			},
			{
				name: 'website',
				default: ''
			},
			{
				name: 'email',
				default: ''
			},
			{
				name: 'skype',
				default: ''
			},	
			{
				name: 'facebook',
				default: ''
			},	
			{
				name: 'twitter',
				default: ''
			},	
			{
				name: 'linkedin',
				default: ''
			},	
			{
				name: 'github',
				default: ''
			},	
			{
				name: 'gitlab',
				default: ''
			},	
			{
				name: 'stackoverflow',
				default: ''
			},	
			{
				name: 'google_plus',
				default: ''
			},	
			{
				name: 'youtube',
				default: ''
			},	
			{
				name: 'behance',
				default: ''
			},	
			{
				name: 'instagram',
				default: ''
			},	
			{
				name: 'flickr',
				default: ''
			},	
		]
	}
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
	res.render('index', {categories: categories});
});

app.get('/:resource/new', function(req, res){
	var data = {
		action: 'new',
		resource: getResource(req.params.resource)
	};
	res.render('editor', data);
});

function getResource(name){
	return categories[categories.map(function(e) { return e.name; }).indexOf(name)];
}

var port = process.env.PORT || 80;
app.listen(port, function () {
	console.log('App listening on port '+port+'!');
});