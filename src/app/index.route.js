(function() {
  'use strict';

  angular
    .module('opencancerWeb')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/home/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      })
      .when('/login/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/dr/', {
          templateUrl: 'app/dr-main/dr-main.html',
          controller: 'DrController',
          controllerAs: 'dr'
      })
      .when('/dr-upload/', {
          templateUrl: 'app/dr-upload/dr-upload.html',
          controller: 'DrUploadController',
          controllerAs: 'drupload'
      })
      .when('/dr-viewdata/', {
        templateUrl: 'app/dr-viewdata/dr-viewdata.html',
        controller: 'DrViewDataController',
        controllerAs: 'drviewdata'
      })
      .when('/dr-patients/', {
          templateUrl: 'app/dr-patients/dr-patients.html',
          controller: 'DrPatientsController',
          controllerAs: 'drpatients'
      })
      .when('/patient/', {
        templateUrl: 'app/patient-main/patient-main.html',
        controller: 'DrPatientsController',
        controllerAs: 'patient'
      })
      .when('/patient-upload/', {
        templateUrl: 'app/patient-upload/patient-upload.html',
        controller: 'PatientUploadController',
        controllerAs: 'patientupload'
      })
      .when('/patient-viewdata/', {
        templateUrl: 'app/patient-viewdata/patient-viewdata.html',
        controller: 'PatientViewDataController',
        controllerAs: 'patientviewdata'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
