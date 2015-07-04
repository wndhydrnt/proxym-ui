'use strict';

module.exports = function($window) {
  return {
    get: function(key) {
      return $window.proxymAppConfig[key];
    }
  };
};
