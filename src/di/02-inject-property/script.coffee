myModule = angular.module 'myModule', []
myController = (w) ->
  @greet = (text) -> w.alert text
  @
myController.$inject = ['$window']

myModule.controller 'myController', myController
