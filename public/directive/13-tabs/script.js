(function() {
  angular.module('docsTabsExample', []).directive('myTabs', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {},
      templateUrl: 'my-tabs.html',
      controller: function($scope) {
        var panes;
        panes = $scope.panes = [];
        $scope.select = function(pane) {
          angular.forEach(panes, function(pane) {
            pane.selected = false;
          });
          return pane.selected = true;
        };
        this.addPane = function(pane) {
          if (panes.length === 0) {
            $scope.select(pane);
          }
          return panes.push(pane);
        };
        return this;
      }
    };
  }).directive('myPane', function() {
    return {
      require: '^myTabs',
      restrict: 'E',
      transclude: true,
      scope: {
        title: '@'
      },
      link: function(scope, element, attrs, tabsCtrl) {
        return tabsCtrl.addPane(scope);
      },
      templateUrl: 'my-pane.html'
    };
  });

}).call(this);
