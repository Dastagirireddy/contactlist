define(['angular', 'angular-mock'], function(){

	describe('Test suite fot ContactFactory', function(){

		var ContactFactory,
			CommonFactory;

		beforeEach(function(){

			module('he');

			inject(function(_ContactFactory_, _CommonFactory_){

				ContactFactory = _ContactFactory_;
				CommonFactory = _CommonFactory_;
			});
		});

		it('should instantiate ContactFactory', function(){

			expect(ContactFactory).toBeDefined();
		});

		it('Call add method', function(){

			var result = ContactFactory.add({});
			expect(result).toBeDefined();
		});

		it('Call getAllContacts method', function(){

			var result = ContactFactory.getAllContacts({});
			expect(result).toBeDefined();
		});

		it('Call update method', function(){

			var result = ContactFactory.update({});
			expect(result).toBeDefined();
		});

		it('Call remove method', function(){

			var result = ContactFactory.remove({});
			expect(result).toBeDefined();
		});
	});
});