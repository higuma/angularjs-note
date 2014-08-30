(function() {
  angular.module('finance3', []).factory('currencyConverter', [
    '$http', function($http) {
      var YAHOO_FINANCE_URL_PATTERN, convert, currencies, refresh, usdToForeignRates;
      YAHOO_FINANCE_URL_PATTERN = 'https://query.yahooapis.com/v1/public/yql?q=select * from ' + 'yahoo.finance.xchange where pair in ("PAIRS")&format=json&' + 'env=store://datatables.org/alltableswithkeys&callback=JSON_CALLBACK';
      currencies = ['USD', 'EUR', 'CNY', 'JPY'];
      usdToForeignRates = {};
      convert = function(amount, inCurr, outCurr) {
        return amount * usdToForeignRates[outCurr] / usdToForeignRates[inCurr];
      };
      refresh = function() {
        var url;
        url = YAHOO_FINANCE_URL_PATTERN.replace('PAIRS', 'USD' + currencies.join('","USD'));
        return $http.jsonp(url).success(function(data) {
          var newUsdToForeignRates;
          newUsdToForeignRates = {};
          angular.forEach(data.query.results.rate, function(rate) {
            var currency;
            currency = rate.id.substring(3, 6);
            return newUsdToForeignRates[currency] = parseFloat(rate.Rate);
          });
          return usdToForeignRates = newUsdToForeignRates;
        });
      };
      refresh();
      return {
        currencies: currencies,
        convert: convert,
        refresh: refresh
      };
    }
  ]);

}).call(this);
