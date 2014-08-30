angular.module('expressionExample', [])
  .controller 'ExampleController', [
    '$window'
    '$scope'
    ($window, $scope) ->
      $scope.name = 'World'
      $scope.greet = -> $window.alert "Hello #{$scope.name}"
      return
  ]
