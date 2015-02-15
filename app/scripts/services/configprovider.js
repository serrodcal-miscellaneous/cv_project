  'use strict';

/**
 * @ngdoc service
 * @name cvProjectApp.ConfigProvider
 * @description
 * # ConfigProvider
 * Provider in the cvProjectApp.
 */
angular.module('cvProjectApp').provider('ConfigProvider', function () {

    // Private constructor
    function Config() {
      this.viewsPath = 'views/default';
      this.primaryPaletteColor = 'teal';
      this.accentPaletteColor = 'grey';
      this.app ={
        title: 'App Title',
        subtitle: 'Subtitle'
      }
    }

    // Method for instantiating
    this.$get = function () {
      return new Config();
    };
  });
