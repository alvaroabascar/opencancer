(function() {
  'use strict';

  angular
    .module('opencancerWeb')
    .controller('DrPatientsController', DrPatientsController);

  /** @ngInject */
  function DrPatientsController($timeout, $scope, $location, webDevTec, toastr, drService) {
    var vm = this;
    $scope.patients = drService;
    $scope.go = function ( path ) {
        $location.path(path);
    }
  }
})();
