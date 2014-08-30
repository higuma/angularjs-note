angular.module('expressionExample', [])
  .controller 'EventController', [
    '$scope'
    ($scope) ->
      simpleKeys = (original) ->
        obj = {}
        for key, value of original
          obj[key] = if typeof original[key] == 'object'
            '{...}'
          else
            original[key]
        obj

      $scope.clickMe = (clickEvent) ->
        $scope.clickEvent = simpleKeys clickEvent
        console.log clickEvent
  ]
