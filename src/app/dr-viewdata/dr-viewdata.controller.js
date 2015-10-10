(function() {
  'use strict';

  angular
    .module('opencancerWeb')
    .controller('DrViewDataController', DrViewDataController);

  /** @ngInject */
  function DrViewDataController($scope, patientDataService) {
    var vm = this;
    $scope.patient_data = patientDataService;
  }
})();
