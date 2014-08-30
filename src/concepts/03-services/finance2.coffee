angular.module('finance2', [])
  .factory 'currencyConverter', ->
    currencies = ['USD', 'EUR', 'CNY', 'JPY']
    usdToForeignRates =
      USD: 1
      EUR: 0.74
      CNY: 6.09
      JPY: 102.6

    convert = (amount, inCurr, outCurr) ->
      amount * usdToForeignRates[outCurr] / usdToForeignRates[inCurr]

    currencies: currencies,
    convert: convert
