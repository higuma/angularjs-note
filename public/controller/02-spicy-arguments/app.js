(function() {
  angular.module('spicyApp2', []).controller('SpicyController', [
    '$scope', function($scope) {
      $scope.customSpice = 'wasabi';
      $scope.spice = 'very';
      return $scope.spicy = function(spice) {
        return $scope.spice = spice;
      };
    }
  ]);

}).call(this);
