'use strict';

/**
 * @ngdoc function
 * @name fdlApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the fdlApp
 */
angular.module('fdlApp')
    .controller('UsersCtrl', function ($scope, $firebaseAuth, $firebase, $window, userService) {


   
       $scope.username = userService.getUser().email;

    });
