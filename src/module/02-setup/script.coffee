angular.module('xmpl.service', [])
  .value('greeter',
    salutation: 'Hello',
    localize: (localization) -> @salutation = localization.salutation
    greet: (name) -> "#{@salutation} #{name}!"
  )
  .value('user', load: (name) -> @name = name)

angular.module 'xmpl.directive', []

angular.module 'xmpl.filter', []

angular.module('xmpl', ['xmpl.service', 'xmpl.directive', 'xmpl.filter'])
  .run((greeter, user) ->
    greeter.localize salutation: 'Bonjour'
    user.load 'World'
  )
  .controller 'XmplController', ($scope, greeter, user) ->
    $scope.greeting = greeter.greet user.name
