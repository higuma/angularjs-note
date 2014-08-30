(function() {
  angular.module('scopeExample', []).controller('GreetController', [
    '$scope', '$rootScope', function($scope, $rootScope) {
      $scope.name = 'World';
      return $rootScope.department = 'Angular';
    }
  ]).controller('ListController', [
    '$scope', function($scope) {
      return $scope.names = ['Igor', 'Misko', 'Vojta'];
    }
  ]);

}).call(this);
