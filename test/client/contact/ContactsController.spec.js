define(['angular', 'angular-mock'], function(){

	describe('Test suite fot ContactsController', function(){

		var ContactsController,
			scope,
			ContactFactory,
			$q,
			$httpBackend,
			url = '/api/contact/';

		function success() {

			var deferred = $q.defer();
			deferred.resolve({});
			return deferred.promise;
		}

		function fail() {

			var deferred = $q.defer();
			deferred.reject({});
			return deferred.promise;
		}

		beforeEach(function(){

			module('he');

			inject(function($rootScope, $controller, _ContactFactory_, _$q_, _$httpBackend_){

				scope = $rootScope.$new();
				ContactFactory = _ContactFactory_;
				$q = _$q_;
				$httpBackend = _$httpBackend_;

				scope.contacts = [];
				scope.contacts.push({
					_id: '1',
					email: 'test@gmail.com',
					username: 'test',
					phone: '9999999999'
				});

				var deferred = $q.defer();

				ContactsController = $controller('ContactsController', {
					$scope: scope
				});

				deferred.resolve([]);

				$httpBackend.whenGET('/api/contact/').respond(200, deferred.promise);
				$httpBackend.flush();
			});
		});

		it('should instantiate ContactsController', function(){

			expect(ContactsController).toBeDefined();
			expect(scope).toBeDefined();
			expect(scope.contacts.length).toBe(0);
		});

		describe('Call add method -', function(){

			it('success callback', function(){

				url = '/api/contact';

				ContactFactory.add = success;
				scope.add();
				scope.$digest();
				expect(scope.contacts.length).toBeGreaterThan(0);
			});

			it('failure callback', function(){

				url = '/api/contact';

				ContactFactory.add = fail;
				scope.add();
				scope.$digest();
				expect(scope).toBeDefined();
			});
		});

		describe('Call update method -', function(){

			it('success callback', function(){

				url = '/api/contact';
				scope.contacts.push({});
				scope.editIndex = 1;

				ContactFactory.update = success;
				scope.update();
				scope.$digest();
				expect(scope.editIndex).not.toBeDefined();
			});

			it('failure callback', function(){

				url = '/api/contact';

				ContactFactory.update = fail;
				scope.update();
				scope.$digest();
				expect(scope).toBeDefined();
			});
		});

		describe('Call edit method -', function(){

			it('should call edit method with index value', function(){

				scope.contacts.push({});
				scope.edit(0);
				expect(scope.contact).toBeDefined();
				expect(scope.editIndex).toBe(0);
			});
		});

		describe('Call delete method -', function(){

			it('success callback', function(){

				url = '/api/contact/1';

				ContactFactory.remove = success;
				scope.delete(1, 0);
				scope.$digest();
				expect(scope.contacts.length).toBe(0);
			});

			it('failure callback', function(){

				url = '/api/contact/1';

				ContactFactory.remove = fail;
				scope.delete();
				scope.$digest();
				expect(scope).toBeDefined();
			});
		});
	});
});