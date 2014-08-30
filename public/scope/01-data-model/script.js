(function() {
  angular.module('scopeExample', []).controller('MyController', [
    '$scope', function($scope) {
      $scope.username = 'World';
      return $scope.sayHello = function() {
        return $scope.greeting = "Hello " + $scope.username + "!";
      };
    }
  ]);

}).call(this);
