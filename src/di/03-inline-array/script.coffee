angular.module('myModule', [])
  .controller 'myController', [
    '$window'
    (w) ->
      @greet = (text) -> w.alert text
      @
  ]
