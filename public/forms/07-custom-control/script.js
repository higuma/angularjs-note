(function() {
  angular.module('form-example2', []).directive('contenteditable', function() {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        elm.on('blur', function() {
          return scope.$apply(function() {
            return ctrl.$setViewValue(elm.html());
          });
        });
        ctrl.$render = function() {
          return elm.html(ctrl.$viewValue);
        };
        return ctrl.$setViewValue(elm.html());
      }
    };
  });

}).call(this);
