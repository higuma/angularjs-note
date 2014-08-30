angular.module('myServiceModule', [])
  .controller('MyController', [
    '$scope', 'notify'
    ($scope, notify) ->
      $scope.callNotify = (msg) -> notify(msg)
  ])
  .factory 'notify', [
    '$window',
    ($window) ->
      msgs = []
      (msg) ->
        msgs.push msg
        if msgs.length == 3
          $window.alert msgs.join "\n"
          msgs = []
  ]
