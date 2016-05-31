'use strict';

/**
 * @ngdoc function
 * @name fdlApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the fdlApp
 */
angular.module('fdlApp')
  .controller('HeaderCtrl', function ($scope, $location) {
    
    $scope.isActive = function(viewLocation){
//        console.log($location.path() + " -- " +viewLocation);
//        return viewLocation === $location.path();
        
    };
    
  });
