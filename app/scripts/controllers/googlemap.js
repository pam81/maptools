'use strict';

/**
 * @ngdoc function
 * @name maptoolsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the maptoolsApp
 */
angular.module('maptoolsApp')
  .controller('GoogleMapCtrl',['NgMap','MarkerService', function (NgMap, MarkerService) {
  
        var ctrl = this;

        var init = function(){
            ctrl.positions = MarkerService.getPoints();
            NgMap.getMap().then(function(map) {
                ctrl.map = map;
              });
            
        };

        init();

  }]);