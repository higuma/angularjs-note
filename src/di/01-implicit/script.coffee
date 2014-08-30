myModule = angular.module 'myModule', []
myController = ($window) ->
  @greet = (text) -> $window.alert text
  @

myModule.controller 'myController', myController
