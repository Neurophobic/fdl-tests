'use strict';

/**
 * @ngdoc overview
 * @name fdlApp
 * @description
 * # fdlApp
 *
 * Main module of the application.
 */
angular
  .module('fdlApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      
      .when('/faq', {
        templateUrl: 'views/faq.html',
        controller: 'FaqCtrl',
        controllerAs: 'faq'
      })
      .when('/challenges', {
        templateUrl: 'views/challenges.html',
        controller: 'ChallengesCtrl',
        controllerAs: 'challenges'
      })
      .when('/people', {
        templateUrl: 'views/people.html',
        controller: 'PeopleCtrl',
        controllerAs: 'people'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/teams', {
        templateUrl: 'views/teams.html',
        controller: 'TeamsCtrl',
        controllerAs: 'teams'
      })
      .when('/resources', {
        templateUrl: 'views/resources.html',
        controller: 'ResourcesCtrl',
        controllerAs: 'resources'
      })
      .when('/information', {
        templateUrl: 'views/information.html',
        controller: 'InformationCtrl',
        controllerAs: 'information'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
