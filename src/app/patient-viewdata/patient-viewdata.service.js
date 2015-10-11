(function() {
  'use strict';

  angular
    .module('opencancerWeb')
    .factory('patientService', function($http) {
        // function body
        var patientData = {
            name: "Amy Dale",
            female: true,
            ethnicity: "caucasian",
            weight: 50,
            height: 157,
            blood_type: "A+",
            drug_resistance: ["Amsidine", "Bendamustine", "Bleomycin"],
            survival_rate: "70",
            symptoms: ["Headache", "Gastritis"],
            possible_treatment: ["Cisplatin", "Capecitabine"],
            side_effects: ["Dizziness", "Loss of sensitivity"],
            mutation_data: {gene: "lpx1",
                            type_of_mutation: "missense",
                            position: 24}
        };
        return patientData;
    });
 }
)();
