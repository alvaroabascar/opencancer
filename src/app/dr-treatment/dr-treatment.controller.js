(function() {
  'use strict';

  angular
    .module('opencancerWeb')
    .controller('DrTreatmentController', DrTreatmentController);

  /** @ngInject */
  function DrTreatmentController($timeout, $scope, $location, webDevTec, toastr) {
    var vm = this;
    $scope.box = false;
    $scope.go = function ( path ) {
        console.log(path);
        $location.path( path );
    };
    var showBox = function ( label ) {
        console.log(label);
        var box_id = (label == "Not surviving") ? "not-surviving-box" : "surviving-box";
        var box = document.getElementById(box_id);
        box.style.display = box.style.display == 'block' ? 'none' : 'block';
    }

    var data = [
    {
        value: 30,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Not surviving"
    },
    {
        value: 70,
        color: "#B4FD5C",
        highlight: "#C9FF71",
        label: "Surviving"
    }];
    var canvas = document.getElementById("myChart");
    var ctx = canvas.getContext("2d");
    var myPieChart = new Chart(ctx).Pie(data);
    canvas.onclick = function(evt){
        var activePoints = myPieChart.getSegmentsAtEvent(evt);
        showBox(activePoints[0].label);
    };


  }
})();
