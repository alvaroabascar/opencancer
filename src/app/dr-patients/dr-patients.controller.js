(function() {
  'use strict';

  angular
    .module('opencancerWeb')
    .controller('DrPatientsController', DrPatientsController);

  /** @ngInject */
  function DrPatientsController($timeout, $scope, $location, webDevTec, toastr, patientsService) {
    var vm = this;
    $scope.patients = patientsService;
    $scope.go = function ( path ) {
        $location.path(path);
    }
  }
})();
