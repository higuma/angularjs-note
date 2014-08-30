(function() {
  angular.module('docsScopeProblemDirective', []).controller('NaomiController', [
    '$scope', function($scope) {
      return $scope.customer = {
        name: 'Naomi',
        address: '1600 Amphitheatre'
      };
    }
  ]).controller('IgorController', [
    '$scope', function($scope) {
      return $scope.customer = {
        name: 'Igor',
        address: '123 Somewhere'
      };
    }
  ]).directive('myCustomer', function() {
    return {
      restrict: 'E',
      templateUrl: 'my-customer.html'
    };
  });

}).call(this);
