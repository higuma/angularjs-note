angular.module('form-example2', [])
  .directive 'contenteditable', ->
    require: 'ngModel'
    link: (scope, elm, attrs, ctrl) ->
      elm.on 'blur', ->
        scope.$apply -> ctrl.$setViewValue elm.html()
      ctrl.$render = -> elm.html(ctrl.$viewValue)
      ctrl.$setViewValue elm.html()
