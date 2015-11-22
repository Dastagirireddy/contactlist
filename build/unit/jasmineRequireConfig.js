require.config({
	baseUrl: '../../src/client/',
	paths: {
		'angular': '../../vendor/angular/angular.min',
		'angular-mock': '../../vendor/angular/angular-mocks'
	},
	shim: {
		'angular': {
			exports: 'angular'
		},
		'angular-mock': {
			exports: 'angular-mock',
			deps: ['angular']
		}
	},
	deps: ['bootstrap']
});