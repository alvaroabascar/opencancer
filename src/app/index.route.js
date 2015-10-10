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
      .when('/john', {
        templateUrl: 'app/main/johnspage.html',
        controller: 'JohnController',
        controllerAs: 'john'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
