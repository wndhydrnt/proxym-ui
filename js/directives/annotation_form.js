'use strict';

module.exports = function(notify, proxymApi) {
  function link(scope, element, attrs) {
    scope.newDomain = "";

    scope.addDomain = function() {
      var domainsArray = angular.extend([], scope.annotation.domains);

      domainsArray.push(scope.newDomain);
      scope.annotation.domains = angular.extend({}, domainsArray);
      scope.newDomain = "";
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
          notify({
            classes: ['alert-success'],
            duration: 2000,
            messageTemplate: '<strong>Annotation saved!</strong>',
            templateUrl: 'templates/annotations/partials/success.html'
          });
        });
    }
  };

  return {
    link: link,
    restrict: "AEC",
    scope: {
      annotation: "=ngModel",
      headline: "=headline"
    },
    templateUrl: "/templates/annotations/partials/annotation_form.html"
  };
};
