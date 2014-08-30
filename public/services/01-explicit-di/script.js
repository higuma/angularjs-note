(function() {
  angular.module('myServiceModule', []).controller('MyController', [
    '$scope', 'notify', function($scope, notify) {
      return $scope.callNotify = function(msg) {
        return notify(msg);
      };
    }
  ]).factory('notify', [
    '$window', function($window) {
      var msgs;
      msgs = [];
      return function(msg) {
        msgs.push(msg);
        if (msgs.length === 3) {
          $window.alert(msgs.join("\n"));
          return msgs = [];
        }
      };
    }
  ]);

}).call(this);
