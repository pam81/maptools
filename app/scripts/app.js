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
    'mapboxgl-directive'
  ])
  .config(['$stateProvider','$urlRouterProvider','$locationProvider',
  function($stateProvider,$urlRouterProvider,$locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('#');
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('/',{
        url:'/',
        views :{'content':{templateUrl: 'views/main.html'}}
      })
      .state('googlemap',{
        url:'/googlemap',
        views :{'content':{templateUrl: 'views/googlemap.html'}}
      })
      .state('mapbox',{
        url:'/mapbox',
        views :{'content':{templateUrl: 'views/mapbox.html'}}
      });


   
  }
]).run([function () {
  mapboxgl.accessToken = 'pk.eyJ1IjoicGFtODEiLCJhIjoiY2plcmw3YTc4MGh6cDMzcDl5cHFzZGdidyJ9.kx_3_3VpDKAJYs0yvXEsiw';
}]);
