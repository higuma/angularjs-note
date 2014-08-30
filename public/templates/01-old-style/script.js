(function() {
  window.myController = function($scope) {
    $scope.foo = 'bar';
    $scope.changeFoo = function() {
      return $scope.buttonText = "Changed to '" + $scope.foo + "'";
    };
    return $scope.changeFoo();
  };

}).call(this);
