(function() {
  angular.module('drag', []).directive('draggable', function($document) {
    return function(scope, element, attr) {
      var mousemove, mouseup, startX, startY, x, y;
      startX = 0;
      startY = 0;
      x = 0;
      y = 0;
      mousemove = function(event) {
        y = event.screenY - startY;
        x = event.screenX - startX;
        return element.css({
          top: y + 'px',
          left: x + 'px'
        });
      };
      mouseup = function() {
        $document.off('mousemove', mousemove);
        return $document.off('mouseup', mouseup);
      };
      element.css({
        position: 'relative',
        border: '1px solid red',
        backgroundColor: 'lightgrey',
        cursor: 'pointer'
      });
      element.on('mousedown', function(event) {
        event.preventDefault();
        startX = event.screenX - x;
        startY = event.screenY - y;
        $document.on('mousemove', mousemove);
        return $document.on('mouseup', mouseup);
      });
    };
  });

}).call(this);
