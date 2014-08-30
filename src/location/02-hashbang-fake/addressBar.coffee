angular.module('address-bar', [])
  .directive 'ngAddressBar', ($browser, $timeout) ->
    template: 'Address: <input id="addressBar" type="text" style="width: 400px" >'
    link: (scope, element, attrs) ->
      input = element.children "input"
      delay = 0

      fireUrlChange = ->
        delay = null
        $browser.urlChange input.val()

      input.on 'keypress keyup keydown', (event) ->
        delay = if !delay then $timeout(fireUrlChange, 250) else null
        event.stopPropagation()

      input.val $browser.url()

      $browser.url = (url) -> if url then input.val(url) else input.val()

