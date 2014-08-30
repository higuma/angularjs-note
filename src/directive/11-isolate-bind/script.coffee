angular.module('docsIsoFnBindExample', [])
  .controller('Controller', [
    '$scope', '$timeout'
    ($scope, $timeout) ->
      $scope.name = 'Tobias'
      $scope.hideDialog = ->
        $scope.dialogIsHidden = true
        $timeout((-> $scope.dialogIsHidden = false), 2000)
  ])
  .directive 'myDialog', ->
    restrict: 'E'
    transclude: true
    scope:
      'close': '&onClose'
    templateUrl: 'my-dialog-close.html'
