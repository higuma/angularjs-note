(function() {
  angular.module('docsTransclusionExample', []).controller('Controller', [
    '$scope', function($scope) {
      return $scope.name = 'Tobias';
    }
  ]).directive('myDialog', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {},
      templateUrl: 'my-dialog.html',
      link: function(scope, element) {
        return scope.name = 'Jeff';
      }
    };
  });

}).call(this);
