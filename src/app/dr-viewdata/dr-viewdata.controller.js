(function() {
  'use strict';

  angular
    .module('opencancerWeb')
    .controller('DrViewDataController', DrViewDataController);

  /** @ngInject */
  function DrViewDataController($scope, $location, drDataService) {
    var vm = this;
    $scope.patient_data = drDataService;
    $scope.go = function ( path ) {
        console.log(path);
        $location.path( path );
    };
  }
})();
