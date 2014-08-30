(function() {
  angular.module('finance2', []).factory('currencyConverter', function() {
    var convert, currencies, usdToForeignRates;
    currencies = ['USD', 'EUR', 'CNY', 'JPY'];
    usdToForeignRates = {
      USD: 1,
      EUR: 0.74,
      CNY: 6.09,
      JPY: 102.6
    };
    convert = function(amount, inCurr, outCurr) {
      return amount * usdToForeignRates[outCurr] / usdToForeignRates[inCurr];
    };
    return {
      currencies: currencies,
      convert: convert
    };
  });

}).call(this);
