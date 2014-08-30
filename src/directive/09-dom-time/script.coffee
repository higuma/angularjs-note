angular.module('docsTimeDirective', [])
  .controller('Controller', [
    '$scope'
    ($scope) -> $scope.format = 'M/d/yy h:mm:ss a'
  ])
  .directive 'myCurrentTime', [
    '$interval', 'dateFilter'
    ($interval, dateFilter) ->
      (scope, element, attrs) ->
        format = timeoutId = null
        updateTime = -> element.text(dateFilter new Date, format)
        scope.$watch attrs.myCurrentTime, (value) ->
          format = value
          updateTime()
        element.on '$destroy', -> $interval.cancel(timeoutId)
        timeoutId = $interval(updateTime, 1000)
  ]
