angular.module('spicyApp2', [])
  .controller 'SpicyController', [
    '$scope'
    ($scope) ->
      $scope.customSpice = 'wasabi'
      $scope.spice = 'very'
      $scope.spicy = (spice) -> $scope.spice = spice
  ]
