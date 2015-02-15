'use strict';

/**
 * @ngdoc service
 * @name cvProjectApp.HomeDataProvider
 * @description
 * # HomeDataProvider
 * Provider in the cvProjectApp.
 */
angular.module('cvProjectApp')
  .provider('HomeDataProvider', function () {

    // Private constructor
    function Data() {
      this.user = {
        name: 'Nombre Apellidos',
        email: {
          text: 'email@email.com',
          url: 'mailto:email@email.com',
        },
        linkedin: {
          text: 'Nombre Apellidos',
          url: '',
        },
        github: {
          text: 'username_github',
          url: '',
        },
      }
    }

    // Method for instantiating
    this.$get = function () {
      return new Data();
    };
  });
