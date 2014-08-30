(function() {
  angular.module('myReverseModule', []).filter('reverse', function() {
    return function(input, uppercase) {
      var c, out, _i, _len;
      input || (input = '');
      out = '';
      for (_i = 0, _len = input.length; _i < _len; _i++) {
        c = input[_i];
        out = c + out;
      }
      if (uppercase) {
        out = out.toUpperCase();
      }
      return out;
    };
  }).controller('Controller', [
    '$scope', function($scope) {
      return $scope.greeting = 'hello';
    }
  ]);

}).call(this);
