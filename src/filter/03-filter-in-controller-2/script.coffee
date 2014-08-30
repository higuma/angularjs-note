angular.module('FilterInControllerModule', [])
  .controller 'FilterController', [
    '$filter'       # use $filter service
    ($filter) ->
      @array = [
        {name: 'Tobias'}
        {name: 'Jeff'}
        {name: 'Brian'}
        {name: 'Igor'}
        {name: 'James'}
        {name: 'Brad'}
      ]
      @filteredArray = $filter('filter')(@array, 'a')
      @
  ]
