(function() {
  angular.module('docsRestrictDirective', []).controller('Controller', [
    '$scope', function($scope) {
      return $scope.customer = {
        name: 'Naomi',
        address: '1600 Amphitheatre'
      };
    }
  ]).directive('myCustomer', function() {
    return {
      restrict: 'E',
      templateUrl: 'my-customer.html'
    };
  });

}).call(this);
