'use strict';

/**
 * @ngdoc function
 * @name cvProjectApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cvProjectApp
 */
angular.module('cvProjectApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
