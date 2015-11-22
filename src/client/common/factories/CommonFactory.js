define([
	'../module'
], function(configModule){

	configModule.factory('CommonFactory', [
		'$http',
		'$q',
		function($http, $q) {

			var _ = {};
			_.httpService = function(config) {

				var deferred = $q.defer();

				$http(config).then(function(response){

					deferred.resolve(response.data);
				}, function(error){

					deferred.reject(error);
				});

				return deferred.promise;
			};
			return _;
		}
	]);
});