define([
  "application"
], function(
  proxymApp
) {
  'use strict';

  proxymApp.factory("proxymConfig", [
    "$window",
    function(
      $window
    ) {
      return {
        get: function(key) {
          return $window.proxymAppConfig[key];
        }
      };
    }
  ]);
});