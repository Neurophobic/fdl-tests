'use strict';

/**
 * @ngdoc function
 * @name fdlApp.controller:InformationCtrl
 * @description
 * # InformationCtrl
 * Controller of the fdlApp
 */
angular.module('fdlApp')
  .controller('InformationCtrl', function ($scope, $route) {
    $scope.$route = $route;
  });
