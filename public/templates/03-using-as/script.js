(function() {
  angular.module('myModule', []).controller('myController', [
    '$scope', function($scope) {
      this.foo = 'bar';
      this.changeFoo = function() {
        return this.buttonText = "Changed to '" + this.foo + "'";
      };
      return this.changeFoo();
    }
  ]);

}).call(this);
