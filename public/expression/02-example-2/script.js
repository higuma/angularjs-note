(function() {
  angular.module('expressionExample', []).controller('ExampleController', [
    '$scope', function($scope) {
      var exprs;
      exprs = $scope.exprs = [];
      $scope.expr = '3*10|currency';
      $scope.addExp = function(expr) {
        return exprs.push(expr);
      };
      return $scope.removeExp = function(index) {
        return exprs.splice(index, 1);
      };
    }
  ]);

}).call(this);
