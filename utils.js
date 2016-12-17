const pages = require('./pages.js');

module.exports.resourceExists = function(req, res, next) {
	if( !pages.exists(req.params.resource) ){
		res.status(404).send('Not found');
	} else {
		next();
	}
}

module.exports.createMarkdownString = function(resource, data) {
	const hasText = pages.find(resource).hasText;
	var metaStr = '';
	for (var property in data) {
		if (data.hasOwnProperty(property)) {
			if(hasText && property=='text-body'){
				continue;
			} else {
				metaStr += property+': '+data[property]+'\n';
			}
		}
	}

	var str = '---\n'+metaStr+'---\n';
	if(hasText){
		str += data['text-body'];
	}

	return str;
}