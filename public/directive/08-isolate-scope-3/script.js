(function() {
  angular.module('docsIsolationExample', []).controller('Controller', [
    '$scope', function($scope) {
      $scope.naomi = {
        name: 'Naomi',
        address: '1600 Amphitheatre'
      };
      return $scope.vojta = {
        name: 'Vojta',
        address: '3456 Somewhere Else'
      };
    }
  ]).directive('myCustomer', function() {
    return {
      restrict: 'E',
      scope: {
        customerInfo: '=info'
      },
      templateUrl: 'my-customer-plus-vojta.html'
    };
  });

}).call(this);
