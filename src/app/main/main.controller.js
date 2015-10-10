(function() {
  'use strict';

  angular
    .module('opencancerWeb')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $scope, $location, webDevTec, toastr) {
    var vm = this;
    $scope.go = function ( path ) {
        $location.path(path);
    }
  }
})();
