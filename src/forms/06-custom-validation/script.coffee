INTEGER_REGEXP = /^\-?\d+$/
FLOAT_REGEXP = /^\-?\d+((\.|\,)\d+)?$/

angular.module('form-example1', [])
  .directive('integer', ->
    require: 'ngModel'
    link: (scope, elm, attrs, ctrl) ->
      ctrl.$parsers.unshift (viewValue) ->
        if INTEGER_REGEXP.test viewValue
          ctrl.$setValidity 'integer', true
          viewValue
        else
          ctrl.$setValidity 'integer', false
          return
  )
  .directive 'smartFloat', ->
    require: 'ngModel'
    link: (scope, elm, attrs, ctrl) ->
      ctrl.$parsers.unshift (viewValue) ->
        if FLOAT_REGEXP.test viewValue
          ctrl.$setValidity 'float', true
          parseFloat(viewValue.replace ',', '.')
        else
          ctrl.$setValidity 'float', false
          return
