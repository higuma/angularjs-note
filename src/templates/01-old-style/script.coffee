window.myController =  ($scope) ->
  $scope.foo = 'bar'
  $scope.changeFoo = -> $scope.buttonText = "Changed to '#{$scope.foo}'"
  $scope.changeFoo()
