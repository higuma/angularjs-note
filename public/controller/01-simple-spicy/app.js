(function() {
  angular.module('spicyApp1', []).controller('SpicyController', [
    '$scope', function($scope) {
      $scope.spice = 'very';
      $scope.chiliSpicy = function() {
        return $scope.spice = 'chili';
      };
      return $scope.jalapenoSpicy = function() {
        return $scope.spice = 'jalapeño';
      };
    }
  ]);

}).call(this);
