var data = require("../data.json");

exports.addFriend = function(req, res) {    
	res.render('add', data);
	var newName = req.query.name;
	var newDes = req.query.description;
	var obj ={
		name: newName,
		description: newDes,
		imageURL: "http://lorempixel.com/400/400/people",
	}
	console.log("New friend!!!");
	data["friends"].push(obj);
 }


