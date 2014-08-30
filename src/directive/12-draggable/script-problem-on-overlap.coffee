angular.module('dragModule', [])
  .directive 'myDraggable', ->
    (scope, element) ->
      startX = startY = x = y = 0

      element.css
        position: 'relative'
        border: '1px solid red'
        backgroundColor: 'lightgrey'
        cursor: 'pointer'

      mousemove = (event) ->
        y = event.pageY - startY
        x = event.pageX - startX
        element.css
          top: y + 'px'
          left: x + 'px'

      mouseup = ->
        element.off 'mousemove', mousemove
        element.off 'mouseup', mouseup

      element.on 'mousedown', (event) ->
        event.preventDefault()
        startX = event.pageX - x
        startY = event.pageY - y
        element.on 'mousemove', mousemove
        element.on 'mouseup', mouseup
