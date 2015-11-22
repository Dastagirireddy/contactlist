define([
	'../module'
], function(configModule){

	configModule.controller('ContactsController', [
		'$scope',
		'ContactFactory',
		function($scope, ContactFactory){

			$scope.contacts = [];

			refreshData();

			$scope.add = function() {

				ContactFactory.add($scope.contact).then(function(data){

					$scope.contacts.push(data);
				}, errorCallback);
				$scope.contact = undefined;
			};

			$scope.edit = function(index) {

				$scope.contact = angular.copy($scope.contacts[index]);
				$scope.editIndex = index;
			};

			$scope.update = function(id){

				ContactFactory.update(id, $scope.contact).then(function(data){

					$scope.contacts[$scope.editIndex] = data;
					$scope.editIndex = undefined;
				}, errorCallback);
				$scope.contact = undefined;
			};

			$scope.delete = function(id, index) {

				ContactFactory.remove(id).then(function(data){

					$scope.contacts.splice(index, 1);
				}, errorCallback);
			};

			function refreshData() {

				ContactFactory.getAllContacts().then(function(data){

					$scope.contacts = data;
				}, errorCallback);
			}

			function errorCallback(err) {

				console.log(err);
			}
		}
	]);
});