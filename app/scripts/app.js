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
    'ngMaterial'
  ])
  .config(function ($routeProvider, $mdThemingProvider) {
    var views_path = 'views/default';

    $mdThemingProvider.theme('default')
      .primaryPalette('teal')
      .accentPalette('grey');

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
