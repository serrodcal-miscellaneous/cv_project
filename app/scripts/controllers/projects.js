'use strict';

/**
 * @ngdoc function
 * @name cvProjectApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the cvProjectApp
 */
angular.module('cvProjectApp')
  .controller('ProjectsCtrl', function ($scope, ProjectsDataProvider) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.projects = ProjectsDataProvider.projects;

  });
