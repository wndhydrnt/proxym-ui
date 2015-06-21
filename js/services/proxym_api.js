define([
  "application"
], function(
  proxymApp
) {
  'use strict';

  proxymApp.factory("proxymApi", [
    "CacheFactory",
    "proxymConfig",
    "$http",
    "$q",
    function(
      CacheFactory,
      proxymConfig,
      $http,
      $q
    ) {
      var annotationsCache;

      if (!CacheFactory.get("proxym_api_annotations")) {
        annotationsCache = CacheFactory(
          "proxym_api_annotations",
          {
            maxAge: 60 * 1000,
           deleteOnExpire: 'aggressive'
          }
        );
      }

      return {
        createAnnotation: function(annotation) {
          var deferred = $q.defer();

          $http({
            data: annotation,
            method: "POST",
            url: proxymConfig.get("server") + "/annotations/" + annotation.id
          }).
          then(function(response) {
            CacheFactory.clearAll();
            deferred.resolve();
          });

          return deferred.promise;
        },

        deleteAnnotation: function(annotation) {
          var deferred = $q.defer();

          $http({
            method: "DELETE",
            url: proxymConfig.get("server") + annotation.link
          }).
          then(function(response) {
            deferred.resolve();
          });

          return deferred.promise;
        },

        listAnnotations: function() {
          var deferred = $q.defer();

          var cached = annotationsCache.get("list");
          if (cached) {
            deferred.resolve(cached);
            return deferred.promise;
          }

          $http({
            method: "GET",
            url: proxymConfig.get("server") + "/annotations",
            responseType: "json"
          }).
          then(function(response) {
            annotationsCache.put("list", response.data);
            deferred.resolve(response.data);
          });

          return deferred.promise;
        }
      };
    }
  ]);
});