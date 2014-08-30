angular.module('docsIsolationExample', [])
  .controller('Controller', [
    '$scope'
    ($scope) ->
      $scope.naomi =
        name: 'Naomi'
        address: '1600 Amphitheatre'
      $scope.vojta =
        name: 'Vojta'
        address: '3456 Somewhere Else'
  ])
  .directive 'myCustomer', ->
    restrict: 'E'
    scope:
      customerInfo: '=info'
    templateUrl: 'my-customer-plus-vojta.html'
