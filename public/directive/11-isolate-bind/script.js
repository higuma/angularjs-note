(function() {
  angular.module('docsIsoFnBindExample', []).controller('Controller', [
    '$scope', '$timeout', function($scope, $timeout) {
      $scope.name = 'Tobias';
      return $scope.hideDialog = function() {
        $scope.dialogIsHidden = true;
        return $timeout((function() {
          return $scope.dialogIsHidden = false;
        }), 2000);
      };
    }
  ]).directive('myDialog', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        'close': '&onClose'
      },
      templateUrl: 'my-dialog-close.html'
    };
  });

}).call(this);
