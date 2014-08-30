angular.module('spicyApp1', [])
  .controller 'SpicyController', [
    '$scope'
    ($scope) ->
      $scope.spice = 'very'
      $scope.chiliSpicy = -> $scope.spice = 'chili'
      $scope.jalapenoSpicy = -> $scope.spice = 'jalapeño'
  ]
