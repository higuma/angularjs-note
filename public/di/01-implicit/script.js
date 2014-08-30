(function() {
  var myController, myModule;

  myModule = angular.module('myModule', []);

  myController = function($window) {
    this.greet = function(text) {
      return $window.alert(text);
    };
    return this;
  };

  myModule.controller('myController', myController);

}).call(this);
