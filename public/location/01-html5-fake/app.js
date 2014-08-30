(function() {
  angular.module('html5-mode', ['fake-browser', 'address-bar']).constant('initUrl', 'http://www.example.com/base/path?a=b#h').constant('baseHref', '/base/index.html').value('$sniffer', {
    history: true
  }).controller("LocationController", [
    '$scope', '$location', function($scope, $location) {
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
    }
  ]).config([
    '$locationProvider', function($locationProvider) {
      return $locationProvider.html5Mode(true).hashPrefix('!');
    }
  ]).run([
    '$rootElement', function($rootElement) {
      return $rootElement.on('click', function(e) {
        return e.stopPropagation();
      });
    }
  ]);

}).call(this);
