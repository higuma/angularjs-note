(function() {
  angular.module('docsTemplateUrlDirective', []).controller('Controller', [
    '$scope', function($scope) {
      return $scope.customer = {
        name: 'Naomi',
        address: '1600 Amphitheatre'
      };
    }
  ]).directive('myCustomer', function() {
    return {
      templateUrl: 'my-customer.html'
    };
  });

}).call(this);
