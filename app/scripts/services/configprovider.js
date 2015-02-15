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
      this.viewsPath = 'views/sergio';
      this.primaryPaletteColor = 'teal';
      this.accentPaletteColor = 'grey';
    }

    // Method for instantiating
    this.$get = function () {
      return new Config();
    };
  });
