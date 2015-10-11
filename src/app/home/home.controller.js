(function() {
  'use strict';

  angular
    .module('opencancerWeb')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($timeout, $scope, $location, webDevTec, toastr) {
    var vm = this;
    $scope.go = function ( path ) {
        $location.path(path);
    }
  }
})();
