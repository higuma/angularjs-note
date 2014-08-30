(function() {
  var myController, myModule;

  myModule = angular.module('myModule', []);

  myController = function(w) {
    this.greet = function(text) {
      return w.alert(text);
    };
    return this;
  };

  myController.$inject = ['$window'];

  myModule.controller('myController', myController);

}).call(this);
