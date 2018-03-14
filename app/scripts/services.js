'use strict';
angular.module('maptoolsApp')
.service('MarkerService', function MarkerService() {
    return {
      getPoints: function() {
        return [
            {pos:[40.11, -75.21],name:1}, 
            {pos:[40.22, -75.10],name:2},
            {pos:[40.33, -74.99],name:3}, 
            {pos:[40.44, -74.88],name:4}, 
            {pos:[40.55, -74.77],name:5}, 
            {pos:[40.66, -74.66],name:6}
        ];
      }
    }; 
  });