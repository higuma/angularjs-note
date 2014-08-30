angular.module('invoice2', ['finance2'])
  .controller 'InvoiceController', [
    'currencyConverter'
    (currencyConverter) ->
      @qty = 1
      @cost = 2
      @inCurr = 'EUR'
      @currencies = currencyConverter.currencies

      @total = (outCurr) ->
        currencyConverter.convert @qty * @cost, @inCurr, outCurr
      @pay = -> window.alert "Thanks!"
      @   # <= DO NOT REMOVE!!!
  ]
