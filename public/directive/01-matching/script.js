(function() {
  angular.module('docsBindExample', []).controller('Controller', [
    '$scope', function($scope) {
      return $scope.name = 'Richard Phillips Feynman (May 11, 1918 – Feburary 15, 1988)';
    }
  ]);

}).call(this);
