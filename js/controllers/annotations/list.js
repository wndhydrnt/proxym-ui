module.exports = function(proxymApi, $scope) {
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
};
