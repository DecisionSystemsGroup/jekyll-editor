const pages = [
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

module.exports.all = pages;

module.exports.find = function (name){
	return pages[pages.map(function(e) { return e.name; }).indexOf(name)];
};

module.exports.exists = function (name){
	return (typeof module.exports.find(name) !== 'undefined');
};