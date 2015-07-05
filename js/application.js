'use strict';

var angular = require('angular');
require('angular-cache');
require('angular-notify');
require('angular-route');

var proxymApp = angular.module("proxymApp", ["angular-cache", "cgNotify", "ngRoute"]);

require('./services');
require('./directives');
require('./controllers');

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
