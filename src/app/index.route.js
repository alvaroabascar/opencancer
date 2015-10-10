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
<<<<<<< HEAD
      .when('/john', {
        templateUrl: 'app/main/johnspage.html',
        controller: 'JohnController',
        controllerAs: 'john'
      })
=======
>>>>>>> 203ad47d5d3171e3efce086cb41ec60472c8e06e
      .otherwise({
        redirectTo: '/'
      });
  }

})();
