angular.module('scopeExample', [])
  .controller('GreetController', [
    '$scope', '$rootScope'
    ($scope, $rootScope) ->
      $scope.name = 'World'
      $rootScope.department = 'Angular'
  ])
  .controller('ListController', [
    '$scope'
    ($scope) ->
      $scope.names = ['Igor', 'Misko', 'Vojta']
  ])
