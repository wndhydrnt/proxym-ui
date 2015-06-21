define([
  "angular",
  "application"
], function(
  angular,
  proxymApp
) {
  'use strict';

  proxymApp.controller("AnnotationEditCtrl", [
    "$scope",
    "$routeParams",
    "proxymApi",
    function(
      $scope,
      $routeParams,
      proxymApi
    ) {
      $scope.headline = "Edit Annotation";

      proxymApi.
        listAnnotations().
        then(function(annotations) {
          angular.forEach(annotations, function(value) {
            if (value.annotation.id == $routeParams.serviceId) {
              $scope.annotation = value.annotation;
            }
          });
        });
    }
  ]);
});
