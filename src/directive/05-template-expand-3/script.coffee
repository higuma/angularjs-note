angular.module('docsRestrictDirective', [])
  .controller('Controller', [
    '$scope'
    ($scope) ->
      $scope.customer =
        name: 'Naomi'
        address: '1600 Amphitheatre'
  ])
  .directive 'myCustomer', ->
    restrict: 'E'
    templateUrl: 'my-customer.html'
