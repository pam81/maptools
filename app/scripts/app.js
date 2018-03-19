'use strict';

/**
 * @ngdoc overview
 * @name maptoolsApp
 * @description
 * # maptoolsApp
 *
 * Main module of the application.
 */
angular
  .module('maptoolsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ngMap',
    'mapboxgl-directive',
    'leaflet-directive'
  ])
  .config(['$stateProvider','$urlRouterProvider','$locationProvider',
  function($stateProvider,$urlRouterProvider,$locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('#');
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('/',{
        url:'/',
        views :{'content':{templateUrl: 'views/main.html'},
            'header':{templateUrl: 'views/header.html'}}
      })
      .state('googlemap',{
        url:'/googlemap',
        views :{'content':{templateUrl: 'views/googlemap.html'},
        'header':{templateUrl: 'views/header.html'}}
      })
      .state('mapbox',{
        url:'/mapbox',
        views :{'content':{templateUrl: 'views/mapbox.html'},
        'header':{templateUrl: 'views/header.html'}}
      })
      .state('openmap',{
        url:'/openmap',
        views :{'content':{templateUrl: 'views/openmap.html'},
        'header':{templateUrl: 'views/header.html'}}
      })
      .state('esri',{
        url:'/esri',
        views :{'content':{templateUrl: 'views/esri.html'},
        'header':{templateUrl: 'views/header.html'}}
      });


   
  }
])
.run([function () {
  mapboxgl.accessToken = 'pk.eyJ1IjoicGFtODEiLCJhIjoiY2plcmw3YTc4MGh6cDMzcDl5cHFzZGdidyJ9.kx_3_3VpDKAJYs0yvXEsiw';
}]);
