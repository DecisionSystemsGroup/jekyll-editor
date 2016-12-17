const pages = require('./pages.js');

module.exports.resourceExists = function(req, res, next) {console.log(11);
	if( !pages.exists(req.params.resource) ){
		res.status(404).send('Not found');
	} else {
		next();
	}
}