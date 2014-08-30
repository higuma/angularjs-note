(function() {
  angular.module('scopeInheritance', []).controller('MainController', [
    '$scope', function($scope) {
      $scope.timeOfDay = 'morning';
      return $scope.name = 'Nikki';
    }
  ]).controller('ChildController', [
    '$scope', function($scope) {
      return $scope.name = 'Mattie';
    }
  ]).controller('GrandChildController', [
    '$scope', function($scope) {
      $scope.timeOfDay = 'evening';
      return $scope.name = 'Gingerbread Baby';
    }
  ]);

}).call(this);
