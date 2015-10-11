(function() {
  'use strict';

  angular
    .module('opencancerWeb')
    .controller('DrViewDataController', DrViewDataController);


  /** @ngInject */
  function DrViewDataController($scope, drDataService) {
    var vm = this;
    $scope.patient_data = drDataService;
  }
})();
