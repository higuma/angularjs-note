angular.module('docsTemplateUrlDirective', [])
  .controller('Controller', [
    '$scope'
    ($scope) ->
      $scope.customer =
        name: 'Naomi'
        address: '1600 Amphitheatre'
  ])
  .directive 'myCustomer', ->
    templateUrl: 'my-customer.html'
