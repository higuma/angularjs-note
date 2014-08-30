angular.module('expressionExample', [])
  .controller 'ExampleController', [
    '$scope',
    ($scope) ->
      exprs = $scope.exprs = []
      $scope.expr = '3*10|currency'
      $scope.addExp = (expr) -> exprs.push expr
      $scope.removeExp = (index) -> exprs.splice index, 1
  ]

