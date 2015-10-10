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
      .otherwise({
        redirectTo: '/'
      });
  }

})();
