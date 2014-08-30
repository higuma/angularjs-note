angular.module('myModule', [])
  .controller 'myController', [
    '$scope'
    ($scope) ->
      @foo = 'bar'
      @changeFoo = -> @buttonText = "Changed to '#{@foo}'"
      @changeFoo()
  ]
