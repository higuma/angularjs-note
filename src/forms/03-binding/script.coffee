angular.module('formExample', [])
  .controller 'ExampleController', [
    '$scope'
    ($scope) ->
      $scope.master = {}
      $scope.update = (user) -> $scope.master = angular.copy user
      $scope.reset = -> $scope.user = angular.copy $scope.master
      $scope.isUnchanged = (user) -> angular.equals user, $scope.master
      $scope.reset()
  ]
