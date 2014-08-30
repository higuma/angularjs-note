angular.module('svgAttrExample', [])
  .controller 'Controller', [
    '$scope'
    ($scope) ->
      $scope.data = for i in [0...20]
        x: i * 12
        y: i * 10
        r: i * 8
  ]
