var db = require('../models/contact.js');

var _ = {};

_.add = function(req, res){

	var contact = req.body;
	
	var Contact = new db.contactModel();
	Contact.email = req.body.email;
	Contact.username = req.body.username;
	Contact.phone = req.body.phone;

	Contact.save(function(err, result){

		if(err) {

			return;
		}

		res.json(result);
	});
};

_.update = function(req, res){

	var id = req.params.id;
	var contact = req.body;

	db.contactModel.findById({_id: id}, function(err, result){

		if(err) {

			return;
		}

		result.email = contact.email;
		result.username = contact.username;
		result.phone = contact.phone;

		result.save(function(err, result){

			if(err) {

				return;
			}

			res.json(result);
		});
	})
};

_.remove = function(req, res){

	var id = req.params.id;

	db.contactModel.findByIdAndRemove({_id: id}, function(err, result){

		if(err) {

			return;
		}

		res.json(result);
	})
};

_.getAllContacts = function(req, res) {

	db.contactModel.find(function(err, result){

		if(err) {

			return;
		}

		res.json(result);
	});
};

module.exports = _;