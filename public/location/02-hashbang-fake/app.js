(function() {
  angular.module('hashbang-mode', ['fake-browser', 'address-bar']).constant('initUrl', 'http://www.example.com/base/path?a=b#h').constant('baseHref', '/base/index.html').value('$sniffer', {
    history: false
  }).config(function($locationProvider) {
    return $locationProvider.html5Mode(true).hashPrefix('!');
  }).controller("LocationController", function($scope, $location) {
    $scope.$location = {};
    return angular.forEach("protocol host port path search hash".split(" "), function(method) {
      return $scope.$location[method] = function() {
        var result;
        result = $location[method].call($location);
        if (angular.isObject(result)) {
          return angular.toJson(result);
        } else {
          return result;
        }
      };
    });
  }).run(function($rootElement) {
    return $rootElement.on('click', function(e) {
      return e.stopPropagation();
    });
  });

}).call(this);
