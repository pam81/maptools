'use strict';

/**
 * @ngdoc function
 * @name maptoolsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the maptoolsApp
*/
 angular.module('maptoolsApp')
   .controller('OpenMapCtrl',['$scope','MarkerService', function ($scope, MarkerService) {
   
         var ctrl = this;
 
         var init = function(){
          
            angular.extend($scope, {
                  center: {
                      lat: 40.74, 
                      lng: -74.18,
                      zoom: 8
                  },
                  markers: {
                        oneMarker: {
                            lat: 40.11,
                            lng: -75.21,
                            message: "Point 1",
                            focus: true,
                            draggable: false
                        }/*,
                        twoMarker: {
                              lat: 40.22,
                              lng: -75.10,
                              message: "Point 2",
                              focus: true,
                              draggable: false
                          }*/
                    }
              });
         };

       
      
         
 
         init();
 
   }]);