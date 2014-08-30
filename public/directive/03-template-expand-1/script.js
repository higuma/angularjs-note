(function() {
  angular.module('docsSimpleDirective', []).controller('Controller', [
    '$scope', function($scope) {
      return $scope.customer = {
        name: 'Naomi',
        address: '1600 Amphitheatre'
      };
    }
  ]).directive('myCustomer', function() {
    return {
      template: 'Name: {{customer.name}} Address: {{customer.address}}'
    };
  });

}).call(this);
