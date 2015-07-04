'use strict';

module.exports = function(proxymApi) {
  function link(scope, element, attrs) {
    scope.newDomain = "";
    scope.savedSuccess = false;

    scope.addDomain = function() {
      var domainsArray = angular.extend([], scope.annotation.domains);

      domainsArray.push(scope.newDomain);
      scope.annotation.domains = angular.extend({}, domainsArray);
      scope.newDomain = "";
    }

    scope.closeSuccess = function() {
      scope.savedSuccess = false;
    }

    scope.deleteDomain = function(idx) {
      var domainsArray = angular.extend([], scope.annotation.domains);

      domainsArray.splice(idx, 1);

      scope.annotation.domains = angular.extend({}, domainsArray);
    }

    scope.submit = function() {
      var data = angular.copy(scope.annotation);

      data.domains = angular.extend([], data.domains);

      proxymApi.
        createAnnotation(data).
        then(function() {
          scope.savedSuccess = true;
        });
    }
  };

  return {
    link: link,
    restrict: "AEC",
    scope: {
      annotation: "=ngModel"
    },
    templateUrl: "/templates/annotations/partials/annotation_form.html"
  };
};
