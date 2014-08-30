(function() {
  angular.module('myModule', []).controller('myController', [
    '$window', function(w) {
      this.greet = function(text) {
        return w.alert(text);
      };
      return this;
    }
  ]);

}).call(this);
