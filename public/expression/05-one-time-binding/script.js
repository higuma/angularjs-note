(function() {
  angular.module('oneTimeBidingExampleApp', []).controller('EventController', [
    '$scope', function($scope) {
      var counter, names;
      counter = 0;
      names = ['Igor', 'Misko', 'Chirayu', 'Lucas'];
      return $scope.clickMe = function() {
        return $scope.name = names[counter++ % names.length];
      };
    }
  ]);

}).call(this);
