(function() {
  angular.module('FilterInControllerModule', []).controller('FilterController', [
    '$filter', function($filter) {
      this.array = [
        {
          name: 'Tobias'
        }, {
          name: 'Jeff'
        }, {
          name: 'Brian'
        }, {
          name: 'Igor'
        }, {
          name: 'James'
        }, {
          name: 'Brad'
        }
      ];
      this.filteredArray = $filter('filter')(this.array, 'a');
      return this;
    }
  ]);

}).call(this);
