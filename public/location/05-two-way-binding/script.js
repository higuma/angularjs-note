(function() {
  angular.module('locationExample', []).controller('LocationController', [
    '$scope', '$location', function($scope, $location) {
      return $scope.locationPath = function(newLocation) {
        return $location.path(newLocation);
      };
    }
  ]);

}).call(this);
