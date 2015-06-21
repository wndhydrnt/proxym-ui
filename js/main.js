requirejs.config({
  shim: {
    "angular": {
      exports: "angular"
    },
    "angular-cache": ["angular"],
    "angular-route": ["angular"]
  },
  paths: {
    "angular": "../bower_components/angular/angular",
    "angular-cache": "../bower_components/angular-cache/dist/angular-cache",
    "angular-route": "../bower_components/angular-route/angular-route"
  }
});

require([
  "angular",
  "application",
  "services/config",
  "services/proxym_api",
  "controllers/annotations/create",
  "controllers/annotations/edit",
  "controllers/annotations/list",
  "directives/annotation_form"
], function(angular) {
  'use strict';

  angular.bootstrap(document, ["proxymApp"]);
});
