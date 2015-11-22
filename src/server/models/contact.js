var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var Contact = Schema({
	email: { type: String, required: true },
	username: { type: String, required: true },
	phone: { type: String, required: true }
});

var contactModel = mongoose.model('Contact', Contact);

module.exports = {
	contactModel: contactModel
};