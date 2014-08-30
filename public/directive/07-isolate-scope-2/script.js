(function() {
  angular.module('docsIsolateScopeDirective', []).controller('Controller', [
    '$scope', function($scope) {
      $scope.naomi = {
        name: 'Naomi',
        address: '1600 Amphitheatre'
      };
      $scope.igor = {
        name: 'Igor',
        address: '123 Somewhere'
      };
    }
  ]).directive('myCustomer', function() {
    return {
      restrict: 'E',
      scope: {
        customer: '='
      },
      templateUrl: 'my-customer-iso.html'
    };
  });

}).call(this);
