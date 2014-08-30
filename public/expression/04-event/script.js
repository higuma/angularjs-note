(function() {
  angular.module('expressionExample', []).controller('EventController', [
    '$scope', function($scope) {
      var simpleKeys;
      simpleKeys = function(original) {
        var key, obj, value;
        obj = {};
        for (key in original) {
          value = original[key];
          obj[key] = typeof original[key] === 'object' ? '{...}' : original[key];
        }
        return obj;
      };
      return $scope.clickMe = function(clickEvent) {
        $scope.clickEvent = simpleKeys(clickEvent);
        return console.log(clickEvent);
      };
    }
  ]);

}).call(this);
