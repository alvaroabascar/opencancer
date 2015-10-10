(function() {
  'use strict';

  angular
    .module('opencancerWeb')
    .controller('DrController', DrController);

  /** @ngInject */
  function DrController($timeout, $scope, $location, webDevTec, toastr) {
    var vm = this;
    $scope.go = function ( path ) {
        console.log(path);
        $location.path( path );
    };
  }
})();
