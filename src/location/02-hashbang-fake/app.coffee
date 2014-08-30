angular.module('hashbang-mode', ['fake-browser', 'address-bar'])
  .constant('initUrl', 'http://www.example.com/base/path?a=b#h')
  .constant('baseHref', '/base/index.html')
  .value('$sniffer', history: false)

  .config(($locationProvider) ->
    $locationProvider.html5Mode(true).hashPrefix('!')
  )
  .controller("LocationController", ($scope, $location) ->
    $scope.$location = {}
    angular.forEach "protocol host port path search hash".split(" "), (method) ->
      $scope.$location[method] = ->
        result = $location[method].call($location)
        if angular.isObject(result) then angular.toJson(result) else result
  )
  .run(($rootElement) ->
    $rootElement.on 'click', (e) -> e.stopPropagation()
  )
