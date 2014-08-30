angular.module('oneTimeBidingExampleApp', [])
  .controller 'EventController', [
    '$scope'
    ($scope) ->
      counter = 0
      names = ['Igor', 'Misko', 'Chirayu', 'Lucas']
      $scope.clickMe = () ->
        $scope.name = names[counter++ % names.length]
  ]
