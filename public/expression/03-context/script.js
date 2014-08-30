(function() {
  angular.module('expressionExample', []).controller('ExampleController', [
    '$window', '$scope', function($window, $scope) {
      $scope.name = 'World';
      $scope.greet = function() {
        return $window.alert("Hello " + $scope.name);
      };
    }
  ]);

}).call(this);
