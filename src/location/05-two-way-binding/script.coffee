angular.module('locationExample', [])
  .controller 'LocationController', [
    '$scope', '$location',
    ($scope, $location) ->
      $scope.locationPath = (newLocation) -> $location.path(newLocation)
  ]
