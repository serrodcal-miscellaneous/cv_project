'use strict';

/**
 * @ngdoc function
 * @name cvProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cvProjectApp
 */
angular.module('cvProjectApp')
  .controller('MainCtrl', function ($scope, config) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.viewsPath = config.viewsPath;
    $scope.app = config.app;

  });
