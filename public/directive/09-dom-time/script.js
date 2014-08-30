(function() {
  angular.module('docsTimeDirective', []).controller('Controller', [
    '$scope', function($scope) {
      return $scope.format = 'M/d/yy h:mm:ss a';
    }
  ]).directive('myCurrentTime', [
    '$interval', 'dateFilter', function($interval, dateFilter) {
      return function(scope, element, attrs) {
        var format, timeoutId, updateTime;
        format = timeoutId = null;
        updateTime = function() {
          return element.text(dateFilter(new Date, format));
        };
        scope.$watch(attrs.myCurrentTime, function(value) {
          format = value;
          return updateTime();
        });
        element.on('$destroy', function() {
          return $interval.cancel(timeoutId);
        });
        return timeoutId = $interval(updateTime, 1000);
      };
    }
  ]);

}).call(this);
