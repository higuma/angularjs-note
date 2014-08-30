(function() {
  angular.module('dragModule', []).directive('myDraggable', [
    '$document', function($document) {
      return function(scope, element, attr) {
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
          $document.off('mousemove', mousemove);
          return $document.off('mouseup', mouseup);
        };
        return element.on('mousedown', function(event) {
          event.preventDefault();
          startX = event.pageX - x;
          startY = event.pageY - y;
          $document.on('mousemove', mousemove);
          return $document.on('mouseup', mouseup);
        });
      };
    }
  ]);

}).call(this);
