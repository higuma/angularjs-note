angular.module('html5-mode', [])
  .controller("LocationController", [
    '$scope', '$location'
    ($scope, $location) ->
      $scope.$location = {}
      for method in "absUrl url protocol host port path search hash".split(" ")
        do ->
          func = $location[method]
          $scope.$location[method] = -> func.call($location)
      return
  ])
  .config([
    '$locationProvider'
    ($locationProvider) ->
      $locationProvider
        .html5Mode(true)
        .hashPrefix('!')
  ])
  .run([
    '$rootElement',
    ($rootElement) -> $rootElement.on 'click', (e) -> e.stopPropagation()
  ])
