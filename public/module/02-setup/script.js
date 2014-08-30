(function() {
  angular.module('xmpl.service', []).value('greeter', {
    salutation: 'Hello',
    localize: function(localization) {
      return this.salutation = localization.salutation;
    },
    greet: function(name) {
      return "" + this.salutation + " " + name + "!";
    }
  }).value('user', {
    load: function(name) {
      return this.name = name;
    }
  });

  angular.module('xmpl.directive', []);

  angular.module('xmpl.filter', []);

  angular.module('xmpl', ['xmpl.service', 'xmpl.directive', 'xmpl.filter']).run(function(greeter, user) {
    greeter.localize({
      salutation: 'Bonjour'
    });
    return user.load('World');
  }).controller('XmplController', function($scope, greeter, user) {
    return $scope.greeting = greeter.greet(user.name);
  });

}).call(this);
