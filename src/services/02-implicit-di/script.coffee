angular.module('myServiceModule', [])
  .factory('notify', ($window) ->
    msgs = []
    (msg) ->
      msgs.push msg
      if msgs.length == 3
        $window.alert msgs.join "\n"
        msgs = []
  )
  .controller 'MyController', ($scope, notify) ->
    $scope.callNotify = (msg) -> notify(msg)
