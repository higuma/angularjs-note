angular.module('fake-browser', [])
  .config ($provide) ->
    $provide.decorator '$browser', ($delegate, baseHref, initUrl) ->
      $delegate.onUrlChange = (fn) -> @urlChange = fn
      $delegate.url = -> initUrl
      $delegate.defer = (fn, delay) -> setTimeout((-> fn()), delay || 0)
      $delegate.baseHref = -> baseHref
      $delegate
