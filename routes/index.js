// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	console.log(data);
	// filter the list of friends to only include people who are under 65
	res.render('index', { 'friends': data.friends });

};