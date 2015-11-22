define([
	'../module'
], function(configModule){

	configModule.factory('ContactFactory', [
		'CommonFactory',
		function(CommonFactory){

			var _ = {};

			_.add = function(contact) {

				return CommonFactory.httpService({
					method: 'POST',
					url: '/api/contact',
					data: contact
				});
			};

			_.getAllContacts = function() {

				return CommonFactory.httpService({
					method: 'GET',
					url: '/api/contact/'
				});
			};

			_.update = function(id, contact) {

				return CommonFactory.httpService({
					method: 'PUT',
					url: '/api/contact/'+ id,
					data: contact
				});
			};

			_.remove = function(id) {

				return CommonFactory.httpService({
					method: 'DELETE',
					url: '/api/contact/' + id
				});
			};

			return _;
		}
	]);
});