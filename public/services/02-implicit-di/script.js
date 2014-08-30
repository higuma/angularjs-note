(function() {
  angular.module('myServiceModule', []).factory('notify', function($window) {
    var msgs;
    msgs = [];
    return function(msg) {
      msgs.push(msg);
      if (msgs.length === 3) {
        $window.alert(msgs.join("\n"));
        return msgs = [];
      }
    };
  }).controller('MyController', function($scope, notify) {
    return $scope.callNotify = function(msg) {
      return notify(msg);
    };
  });

}).call(this);
