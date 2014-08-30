myAppModule = angular.module 'myApp', []

myAppModule.filter 'greet', ->
 (name) -> "Hello, #{name}!"
