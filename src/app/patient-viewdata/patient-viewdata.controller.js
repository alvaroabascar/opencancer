(function() {
  'use strict';

  angular
    .module('opencancerWeb')
    .controller('PatientViewDataController', PatientViewDataController);

  /** @ngInject */
  function PatientViewDataController($scope, patientService) {
    var vm = this;
    $scope.patient_data = patientService;
  }
})();
