(function() {
  'use strict';

  angular
    .module('opencancerWeb')
    .controller('DrPatientsControllers', DrPatientsControllers);

  /** @ngInject */
  function DrPatientsControllers($timeout, $scope, $location, webDevTec, toastr) {
    var vm = this;
    $scope.go = function ( path ) {
        $location.path(path);
    }
  }
})();
