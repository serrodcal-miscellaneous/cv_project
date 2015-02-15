'use strict';

/**
 * @ngdoc service
 * @name cvProjectApp.ProjectsDataProvider
 * @description
 * # ProjectsDataProvider
 * Provider in the cvProjectApp.
 */
angular.module('cvProjectApp')
  .provider('ProjectsDataProvider', function () {

    // Private constructor
    function Data() {
      this.projects = [
        {
          title: 'Project 1',
          date: '01-01-2015',
          url: 'http://example.com',
          image_url: 'http://www.disfrutasevilla.com/wp-content/uploads/2015/02/Se-busca-nombre-emblem%C3%A1tico-para-rebautizar-la-Torre-Pelli-500x500.jpg',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, enim. Soluta harum illum et quasi! Sed saepe voluptatum, nihil repellat soluta adipisci, tenetur accusantium ut culpa rem possimus molestias non!',
        },
        {
          title: 'Project 2',
          date: '01-01-2015',
          url: 'http://example.com',
          image_url: 'http://www.disfrutasevilla.com/wp-content/uploads/2015/02/Hallan-restos-del-palacio-más-antiguo-del-Alcázar-de-Sevilla-500x500.jpg',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, enim. Soluta harum illum et quasi! Sed saepe voluptatum, nihil repellat soluta adipisci, tenetur accusantium ut culpa rem possimus molestias non!',
        },
        {
          title: 'Project 3',
          date: '01-01-2015',
          url: 'http://example.com',
          image_url: 'http://www.disfrutasevilla.com/wp-content/uploads/2015/02/Sevilla-capital-del-ciclismo-para-The-Guardian-500x500.jpg',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, enim. Soluta harum illum et quasi! Sed saepe voluptatum, nihil repellat soluta adipisci, tenetur accusantium ut culpa rem possimus molestias non!',
        },
      ]
    }

    // Method for instantiating
    this.$get = function () {
      return new Data();
    };
  });
