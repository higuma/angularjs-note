(function() {
  angular.module('eventExample', []).controller('EventController', [
    '$scope', function($scope) {
      $scope.count = 0;
      return $scope.$on('MyEvent', function() {
        return ++$scope.count;
      });
    }
  ]);

}).call(this);
