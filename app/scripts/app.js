'use strict';

/**
 * @ngdoc overview
 * @name cvProjectApp
 * @description
 * # cvProjectApp
 *
 * Main module of the application.
 */
angular
  .module('cvProjectApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'duScroll'
  ])
  .config(function ($routeProvider, $mdThemingProvider, configProvider) {
    var config = configProvider.$get();

    $mdThemingProvider.theme('default').primaryPalette(config.primaryPaletteColor).accentPalette(config.accentPaletteColor);

    $routeProvider
      .when('/', {
        templateUrl: config.viewsPath + '/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: config.viewsPath + '/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
