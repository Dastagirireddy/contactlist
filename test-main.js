var allTestFiles = ['bootstrap'];

for(var file in window.__karma__.files) {

  if(/spec\.js$/.test(file)) {
    allTestFiles.push(file);
  }
}

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '../base/src/client/',

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

  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});

