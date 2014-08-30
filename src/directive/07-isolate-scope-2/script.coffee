angular.module('docsIsolateScopeDirective', [])
  .controller('Controller', [
    '$scope'
    ($scope) ->
      $scope.naomi =
        name: 'Naomi'
        address: '1600 Amphitheatre'
      $scope.igor =
        name: 'Igor'
        address: '123 Somewhere'
      return
  ])
  .directive 'myCustomer', ->
    restrict: 'E'
    scope:
      customer: '='
    templateUrl: 'my-customer-iso.html'
