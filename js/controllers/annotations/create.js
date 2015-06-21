define([
  "angular",
  "application"
], function(
  angular,
  proxymApp
) {
  'use strict';

  proxymApp.controller("AnnotationCreateCtrl", [
    "$scope",
    function(
      $scope
    ) {
      $scope.annotation = {applicationProtocol: "", config: "", domains: {}, id: ""};
      $scope.headline = "Create Annotation";
    }
  ]);
});
