angular.module('FilterInControllerModule', [])
  .controller 'FilterController', [
    'filterFilter'      # inject "filter" filter
    (filterFilter) ->
      @array = [
        {name: 'Tobias'}
        {name: 'Jeff'}
        {name: 'Brian'}
        {name: 'Igor'}
        {name: 'James'}
        {name: 'Brad'}
      ]
      @filteredArray = filterFilter @array, 'a'
      @
  ]
