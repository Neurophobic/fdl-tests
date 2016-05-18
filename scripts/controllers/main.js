'use strict';

/**
 * @ngdoc function
 * @name fdlApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fdlApp
 */
angular.module('fdlApp')
  .controller('MainCtrl', function ($scope, $route) {
    $scope.$route = $route;
  });
