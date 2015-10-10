(function() {
  'use strict';

  angular
    .module('opencancerWeb')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/dr/', {
          templateUrl: 'app/dr-main/dr-main.html',
          controller: 'DrController',
          controllerAs: 'dr'
      })
      .when('/dr-upload/', {
          templateUrl: 'app/dr-upload/dr-upload.html',
          controller: 'DrUploadController',
          controllerAs: 'drupload'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
