(function() {
  'use strict';

  angular
    .module('opencancerWeb')
    .controller('DrViewDataController', DrViewDataController);

  /** @ngInject */
  function DrViewDataController(patientDataService) {
    var vm = this;
    $scope.patient_dat = patientDataService;
  }
})();
