(function() {
  angular.module('hashbang-mode', []).controller("LocationController", [
    '$scope', '$location', function($scope, $location) {
      var method, _fn, _i, _len, _ref;
      $scope.$location = {};
      _ref = "absUrl url protocol host port path search hash".split(" ");
      _fn = function() {
        var func;
        func = $location[method];
        return $scope.$location[method] = function() {
          return func.call($location);
        };
      };
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        method = _ref[_i];
        _fn();
      }
    }
  ]).config([
    '$locationProvider', function($locationProvider) {
      return $locationProvider.html5Mode(false).hashPrefix('!');
    }
  ]).run([
    '$rootElement', function($rootElement) {
      return $rootElement.on('click', function(e) {
        return e.stopPropagation();
      });
    }
  ]);

}).call(this);
