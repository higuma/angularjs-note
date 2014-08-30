(function() {
  var myAppModule;

  myAppModule = angular.module('myApp', []);

  myAppModule.filter('greet', function() {
    return function(name) {
      return "Hello, " + name + "!";
    };
  });

}).call(this);
