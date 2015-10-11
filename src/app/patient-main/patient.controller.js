(function() {
  'use strict';

  angular
    .module('opencancerWeb')
    .controller('PatientController', PatientController);

  /** @ngInject */
  function PatientController($timeout, $scope, $location, webDevTec, toastr) {
    var vm = this;
    $scope.go = function ( path ) {
        console.log(path);
        $location.path( path );
    };
  }
})();
