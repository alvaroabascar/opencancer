(function() {
  'use strict';

  angular
    .module('opencancerWeb')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
