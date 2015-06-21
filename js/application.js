define([
  "angular",
  "angular-cache",
  "angular-route"
], function(
  angular
) {
  'use strict';

  var proxymApp = angular.module("proxymApp", ["angular-cache", "ngRoute"]);

  proxymApp.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
      $routeProvider.
        when("/annotations", {
          controller: "AnnotationListCtrl",
          templateUrl: "templates/annotations/list.html"
        }).
        when("/annotations/create", {
          controller: "AnnotationCreateCtrl",
          templateUrl: "templates/annotations/form.html"
        }).
        when("/annotations/edit/:serviceId", {
          controller: "AnnotationEditCtrl",
          templateUrl: "templates/annotations/form.html"
        }).
        otherwise({
          redirectTo: "/annotations"
        });
    }
  ]);

  return proxymApp;
});
