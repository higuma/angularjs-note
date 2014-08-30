angular.module('docsTabsExample', [])
  .directive 'myTabs', ->
    restrict: 'E'
    transclude: true
    scope: {}
    templateUrl: 'my-tabs.html'
    controller: ($scope) ->
      panes = $scope.panes = []
      $scope.select = (pane) ->
        angular.forEach panes, (pane) -> pane.selected = false; return
        pane.selected = true
      @addPane = (pane) ->
        $scope.select pane if panes.length == 0
        panes.push pane
      @

  .directive 'myPane', ->
    require: '^myTabs'
    restrict: 'E'
    transclude: true
    scope:
      title: '@'
    link: (scope, element, attrs, tabsCtrl) -> tabsCtrl.addPane scope
    templateUrl: 'my-pane.html'
