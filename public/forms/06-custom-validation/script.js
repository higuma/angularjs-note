(function() {
  var FLOAT_REGEXP, INTEGER_REGEXP;

  INTEGER_REGEXP = /^\-?\d+$/;

  FLOAT_REGEXP = /^\-?\d+((\.|\,)\d+)?$/;

  angular.module('form-example1', []).directive('integer', function() {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        return ctrl.$parsers.unshift(function(viewValue) {
          if (INTEGER_REGEXP.test(viewValue)) {
            ctrl.$setValidity('integer', true);
            return viewValue;
          } else {
            ctrl.$setValidity('integer', false);
          }
        });
      }
    };
  }).directive('smartFloat', function() {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        return ctrl.$parsers.unshift(function(viewValue) {
          if (FLOAT_REGEXP.test(viewValue)) {
            ctrl.$setValidity('float', true);
            return parseFloat(viewValue.replace(',', '.'));
          } else {
            ctrl.$setValidity('float', false);
          }
        });
      }
    };
  });

}).call(this);
