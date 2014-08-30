(function() {
  angular.module('fake-browser', []).config(function($provide) {
    return $provide.decorator('$browser', function($delegate, baseHref, initUrl) {
      $delegate.onUrlChange = function(fn) {
        return this.urlChange = fn;
      };
      $delegate.url = function() {
        return initUrl;
      };
      $delegate.defer = function(fn, delay) {
        return setTimeout((function() {
          return fn();
        }), delay || 0);
      };
      $delegate.baseHref = function() {
        return baseHref;
      };
      return $delegate;
    });
  });

}).call(this);
