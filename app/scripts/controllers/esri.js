'use strict';

/**
 * @ngdoc function
 * @name maptoolsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the maptoolsApp
*/
 angular.module('maptoolsApp')
   .controller('EsriCtrl',['$scope','MarkerService','esriLoader',
    function ($scope, MarkerService, esriLoader) {
   
        var self = this;
        esriLoader.require(['esri/geometry/Point',
            'esri/Graphic',
            'esri/layers/GraphicsLayer',
            'esri/Map',
            'esri/symbols/SimpleLineSymbol',
            'esri/symbols/SimpleMarkerSymbol'], 
            function( Point, Graphic, GraphicsLayer, Map,
             SimpleLineSymbol, SimpleMarkerSymbol) {
            self.map = new Map({
                basemap: 'streets'
            });
            // create layer to store graphics and add to map
            var layer = new GraphicsLayer();
            self.map.add(layer);

             // location of meteor crater centroid in Arizona desert
            var meteorPoint = new Point({
                longitude: -75.21,
                latitude: 40.11
            });
             // define semi-transparent red point symbol
            var pointSym = new SimpleMarkerSymbol({
                style: 'circle',
                color: [255, 0, 0, 0.5],
                size: 14,
                outline: new SimpleLineSymbol({
                    style: 'solid',
                    color: [255, 255, 255, 0.5]
                })
            });

            layer.add(new Graphic({
                geometry: meteorPoint,
                symbol: pointSym
            }));


        });

       
      
         
 
         
 
   }]);