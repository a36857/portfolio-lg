'use strict';

angular.module("mainApp", ['ngRoute'])
  .config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('{[{');
    $interpolateProvider.endSymbol('}]}');
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/views/projects-list.html',
        controller: 'ProjectsController'
      })
      .when('/projects/:id', {
        templateUrl: '/views/project-details.html',
        controller: 'ProjectDetailsController'
      })
      .when('/newproject', {
        templateUrl: '/views/project-new.html',
        controller: 'NewProjectController'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .directive('href', function() {
    return {
      compile: function(element) {
        element.attr('target','_blank');
      }
    };
  });
