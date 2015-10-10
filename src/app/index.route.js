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
      .when('/dr-patients/', {
          templateUrl: 'app/dr-patients/dr-patients.html',
          controller: 'DrPatientsController',
          controllerAs: 'drpatients'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
