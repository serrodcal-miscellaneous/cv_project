'use strict';

/**
 * @ngdoc function
 * @name cvProjectApp.controller:HomectrlCtrl
 * @description
 * # HomectrlCtrl
 * Controller of the cvProjectApp
 */
angular.module('cvProjectApp')
  .controller('HomeCtrl', function ($scope, HomeDataProvider) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.user = HomeDataProvider.user;
  });
