angular.module('docsTransclusionExample', [])
  .controller('Controller', [
    '$scope'
    ($scope) -> $scope.name = 'Tobias'
  ])
  .directive 'myDialog', ->
    restrict: 'E'
    transclude: true
    scope: {}
    templateUrl: 'my-dialog.html'
    link: (scope, element) -> scope.name = 'Jeff'
