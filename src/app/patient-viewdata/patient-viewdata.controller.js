(function() {
  'use strict';

  angular
    .module('opencancerWeb')
    .controller('PatientViewDataController', PatientViewDataController);

  /** @ngInject */
  function PatientViewDataController($scope, patientService) {
    var vm = this;
    $scope.patient_data = patientService;
    //$scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
    //$scope.data = [300, 500, 100];
  }



})();
