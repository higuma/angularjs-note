angular.module('scopeInheritance', [])
  .controller('MainController', [
    '$scope'
    ($scope) ->
      $scope.timeOfDay = 'morning'
      $scope.name = 'Nikki'
  ])
  .controller('ChildController', [
    '$scope'
    ($scope) -> $scope.name = 'Mattie'
  ])
  .controller('GrandChildController', [
    '$scope'
    ($scope) ->
      $scope.timeOfDay = 'evening'
      $scope.name = 'Gingerbread Baby'
  ])
