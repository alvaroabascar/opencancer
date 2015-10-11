(function() {
  'use strict';

  angular
    .module('opencancerWeb')
    .factory('drService', function($http) {
        // function body
        var patients = [{name: "Arushi", female: true, cancer: "Left eye cancer"},
                    {name: "Gabi", female: false, cancer: "Pancreas cancer"},
                    {name: "Álvaro", female: false, cancer: "Right ear cancer"},
                    {name: "Morten", female: false, cancer: "Nail cancer"},
                    {name: "John", female: false, cancer: "Happy cancer"},
                    {name: "Yenyin", female: true, cancer: "Sad cancer"},
                    {name: "Jui", female: true, cancer: "Toe cancer"}
                   ];
        return patients;
    });
 }
)();
