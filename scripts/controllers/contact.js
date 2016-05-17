'use strict';

/**
 * @ngdoc function
 * @name fdlApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the fdlApp
 */
angular.module('fdlApp')
  .controller('ContactCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.contacts = [
      {title:'general information', url:'mailto:info@frontierdevelopmentlab.org', linkTitle:'info@frontierdevelopmentlab.org'},
      {title:'fdl co-director james', url:'mailto:james@frontierdevelopmentlab.org', linkTitle:'james@frontierdevelopmentlab.org'},
      {title:'fdl co-director jordan', url:'mailto:jordan@frontierdevelopmentlab.org', linkTitle:'jordan@frontierdevelopmentlab.org'},
      {title:'twitter', url:'mailto:james@frontierdevelopmentlab.org', linkTitle:'@nasa-fdl'},
      {title:'facebook', url:'mailto:james@frontierdevelopmentlab.org', linkTitle:'Frontier Development Lab'}
    ];
  });
