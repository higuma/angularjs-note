(function() {
  angular.module('svgAttrExample', []).controller('Controller', [
    '$scope', function($scope) {
      var i;
      return $scope.data = (function() {
        var _i, _results;
        _results = [];
        for (i = _i = 0; _i < 20; i = ++_i) {
          _results.push({
            x: i * 12,
            y: i * 10,
            r: i * 8
          });
        }
        return _results;
      })();
    }
  ]);

}).call(this);
