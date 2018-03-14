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
              ctrl.glMarkers.push(
                {coordinates: p.pos,
                element: ctrl.createElement(p.name)}
              );
          });
          console.log(ctrl.glMarkers);
          /*ctrl.glMarkers = [
            {
              coordinates: [-99.20415, 19.42257],
              element: ctrl.createElement(2)
            }, {
              coordinates: [-99.10415, 19.44257],
              element: ctrl.createElement('2')
            }];
         console.log(ctrl.glMarkers);*/
         };

         this.createElement = function(name) {
          var element = document.createElement('div');
          //element.style.backgroundImage = 'url(https://placekitten.com/g/' + iconSize.width + '/' + iconSize.height + '/)';
          //element.style.width = iconSize.width + 'px';
          //element.style.height = iconSize.height + 'px';
          //element.style.borderRadius = '50%';
          element.className = 'icon';
          element.innerHTML = name;
          return element;
        };

      
         
 
         init();
 
   }]);