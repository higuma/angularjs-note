(function() {
  angular.module('address-bar', []).directive('ngAddressBar', function($browser, $timeout) {
    return {
      template: 'Address: <input id="addressBar" type="text" style="width: 400px" >',
      link: function(scope, element, attrs) {
        var delay, fireUrlChange, input;
        input = element.children("input");
        delay = 0;
        fireUrlChange = function() {
          delay = null;
          return $browser.urlChange(input.val());
        };
        input.on('keypress keyup keydown', function(event) {
          delay = !delay ? $timeout(fireUrlChange, 250) : null;
          return event.stopPropagation();
        });
        input.val($browser.url());
        return $browser.url = function(url) {
          if (url) {
            return input.val(url);
          } else {
            return input.val();
          }
        };
      }
    };
  });

}).call(this);
