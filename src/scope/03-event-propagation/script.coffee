angular.module('eventExample', [])
  .controller 'EventController', [
    '$scope'
    ($scope) ->
      $scope.count = 0
      $scope.$on 'MyEvent', -> ++$scope.count
  ]
