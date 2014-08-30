angular.module('invoice1', [])
  .controller 'InvoiceController', ->
    @qty = 1
    @cost = 2
    @inCurr = 'EUR'
    @currencies = ['USD', 'EUR', 'CNY', 'JPY']
    @usdToForeignRates =
      USD: 1
      EUR: 0.74
      CNY: 6.09
      JPY: 102.6

    @total = (outCurr) -> @convertCurrency @qty * @cost, @inCurr, outCurr
    @convertCurrency = (amount, inCurr, outCurr) ->
      amount * @usdToForeignRates[outCurr] / @usdToForeignRates[inCurr]
    @pay = -> window.alert "Thanks!"
    @   # <= DO NOT REMOVE!!!
