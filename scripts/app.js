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
    'ngTouch',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        activetab: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about',
        activetab: 'about'
      })
      
      .when('/faq', {
        templateUrl: 'views/faq.html',
        controller: 'FaqCtrl',
        controllerAs: 'faq',
        activetab: 'faq'
      })
      .when('/challenges', {
        templateUrl: 'views/challenges.html',
        controller: 'ChallengesCtrl',
        controllerAs: 'challenges',
        activetab: 'challenges'
      })
      .when('/people', {
        templateUrl: 'views/people.html',
        controller: 'PeopleCtrl',
        controllerAs: 'people',
        activetab: 'people'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact',
        activetab: 'contact'
      })
      .when('/teams', {
        templateUrl: 'views/teams.html',
        controller: 'TeamsCtrl',
        controllerAs: 'teams',
        activetab: 'teams'
      })
      .when('/resources', {
        templateUrl: 'views/resources.html',
        controller: 'ResourcesCtrl',
        controllerAs: 'resources',
        activetab: 'resources'
      })
      .when('/information', {
        templateUrl: 'views/information.html',
        controller: 'InformationCtrl',
        controllerAs: 'information',
        activetab: 'information'
      })
      .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl',
        controllerAs: 'users'
      })
      .when('/auth', {
        templateUrl: 'views/auth.html',
        controller: 'AuthCtrl',
        controllerAs: 'auth'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
