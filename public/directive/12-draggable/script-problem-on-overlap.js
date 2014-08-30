(function() {
  angular.module('dragModule', []).directive('myDraggable', function() {
    return function(scope, element) {
      var mousemove, mouseup, startX, startY, x, y;
      startX = startY = x = y = 0;
      element.css({
        position: 'relative',
        border: '1px solid red',
        backgroundColor: 'lightgrey',
        cursor: 'pointer'
      });
      mousemove = function(event) {
        y = event.pageY - startY;
        x = event.pageX - startX;
        return element.css({
          top: y + 'px',
          left: x + 'px'
        });
      };
      mouseup = function() {
        element.off('mousemove', mousemove);
        return element.off('mouseup', mouseup);
      };
      return element.on('mousedown', function(event) {
        event.preventDefault();
        startX = event.pageX - x;
        startY = event.pageY - y;
        element.on('mousemove', mousemove);
        return element.on('mouseup', mouseup);
      });
    };
  });

}).call(this);
