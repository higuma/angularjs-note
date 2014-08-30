angular.module('drag', [])
  .directive 'draggable', ($document) ->
    (scope, element, attr) ->
      startX = 0
      startY = 0
      x = 0
      y = 0

      mousemove = (event) ->
        y = event.screenY - startY
        x = event.screenX - startX
        element.css
          top: y + 'px',
          left:  x + 'px'

      mouseup = ->
        $document.off 'mousemove', mousemove
        $document.off 'mouseup', mouseup

      element.css
        position: 'relative'
        border: '1px solid red'
        backgroundColor: 'lightgrey'
        cursor: 'pointer'

      element.on 'mousedown', (event) ->
        event.preventDefault()
        startX = event.screenX - x
        startY = event.screenY - y
        $document.on 'mousemove', mousemove
        $document.on 'mouseup', mouseup

      return
