'use strict';

/**
 * @ngdoc function
 * @name maptoolsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the maptoolsApp
*/
 angular.module('maptoolsApp')
   .controller('MapBoxCtrl',['$scope','MarkerService', function ($scope, MarkerService) {
   
         var ctrl = this;
 
         var init = function(){
           ctrl.glMarkers = [];
          ctrl.positions = MarkerService.getPoints();
          angular.forEach(ctrl.positions, function(p,i){
            var pos = [p.lng,p.lat];
              ctrl.glMarkers.push(
                {coordinates: pos,
                element: ctrl.createElement(p.name)}
              );
          });
          console.log(ctrl.glMarkers);
         
         };

         this.createElement = function(name) {
          var element = document.createElement('div');
          
          element.className = 'icon';
          element.innerHTML = name;
          return element;
        };

      
         
 
         init();
 
   }]);