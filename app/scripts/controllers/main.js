'use strict';

/**
 * @ngdoc function
 * @name cvProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cvProjectApp
 */
angular.module('cvProjectApp')
  .controller('MainCtrl', function ($scope, ConfigProvider) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.viewsPath = ConfigProvider.viewsPath;

  });
