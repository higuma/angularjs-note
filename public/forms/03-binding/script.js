(function() {
  angular.module('formExample', []).controller('ExampleController', [
    '$scope', function($scope) {
      $scope.master = {};
      $scope.update = function(user) {
        return $scope.master = angular.copy(user);
      };
      $scope.reset = function() {
        return $scope.user = angular.copy($scope.master);
      };
      $scope.isUnchanged = function(user) {
        return angular.equals(user, $scope.master);
      };
      return $scope.reset();
    }
  ]);

}).call(this);
