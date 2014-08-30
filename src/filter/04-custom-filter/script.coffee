angular.module('myReverseModule', [])
  .filter('reverse', ->
    (input, uppercase) ->
      input ||= ''
      out = ''
      out = c + out for c in input
      out = out.toUpperCase() if uppercase
      out)
  .controller 'Controller', ['$scope', ($scope) -> $scope.greeting = 'hello']
