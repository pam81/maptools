'use strict';
angular.module('maptoolsApp')
.service('MarkerService', function MarkerService() {
    return {
      getPoints: function() {
        return [
            {lat:40.11, lng:-75.21,name:1}, 
            {lat: 40.22, lng: -75.10,name:2},
            {lat: 40.33, lng: -74.99,name:3}, 
            {lat: 40.44, lng: -74.88,name:4}, 
            {lat: 40.55, lng: -74.77,name:5}, 
            {lat: 40.66, lng: -74.66,name:6}
        ];
      }
    }; 
  });