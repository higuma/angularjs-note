angular.module('docsSimpleDirective', [])
  .controller('Controller', [
    '$scope'
    ($scope) ->
      $scope.customer =
        name: 'Naomi'
        address: '1600 Amphitheatre'
  ])
  .directive 'myCustomer', ->
    template: 'Name: {{customer.name}} Address: {{customer.address}}'
