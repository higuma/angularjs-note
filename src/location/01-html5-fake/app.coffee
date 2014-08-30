angular.module('html5-mode', ['fake-browser', 'address-bar'])
  .constant('initUrl', 'http://www.example.com/base/path?a=b#h')
  .constant('baseHref', '/base/index.html')
  .value('$sniffer', history: true)

  .controller("LocationController", [
    '$scope', '$location'
    ($scope, $location) ->
      $scope.$location = {}
      angular.forEach "protocol host port path search hash".split(" "), (method) ->
        $scope.$location[method] = ->
          result = $location[method].call($location)
          if angular.isObject result
            angular.toJson result
          else
            result
  ])
  .config([
    '$locationProvider'
    ($locationProvider) -> $locationProvider.html5Mode(true).hashPrefix('!')
  ])
  .run([
    '$rootElement',
    ($rootElement) -> $rootElement.on 'click', (e) -> e.stopPropagation()
  ])
