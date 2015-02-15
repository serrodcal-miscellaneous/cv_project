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
  .config(function ($routeProvider, $mdThemingProvider) {
    var views_path = 'views/sergio';
    var primaryPalette_color = 'teal';
    var accentPalette_color = 'grey';


    $mdThemingProvider.theme('default').primaryPalette(primaryPalette_color).accentPalette(accentPalette_color);

    $routeProvider
      .when('/', {
        templateUrl: views_path + '/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: views_path + '/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
