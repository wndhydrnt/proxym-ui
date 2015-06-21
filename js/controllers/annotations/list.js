define([
  "angular",
  "application"
], function(
  angular,
  proxymApp
) {
  'use strict';

  proxymApp.controller("AnnotationListCtrl", [
    "proxymApi",
    "$scope",
    function(
      proxymApi,
      $scope
    ) {
      proxymApi.
        listAnnotations().
        then(function(annotations) {
          $scope.annotations = annotations;
        });

      $scope.delete = function(idx) {
        proxymApi.
          deleteAnnotation($scope.annotations[idx]).
          then(function() {
            $scope.annotations.splice(idx, 1);
          });
      }
    }
  ]);
});
