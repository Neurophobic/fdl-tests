'use strict';

/**
 * @ngdoc function
 * @name fdlApp.controller:TeamsCtrl
 * @description
 * # TeamsCtrl
 * Controller of the fdlApp
 */
angular.module('fdlApp')
  .controller('TeamsCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.newTools = [
      {name:'adam greenberg', title:'planetary science', email:'adam@greenhodge.net'},
      {name:'alessondra springmann', title:'planetary science', email:'asteroid@alum.mit.edu'},
      {name:'sinha sravanthi', title:'data science', email:'sinha.sravanthi@gmail.com'},
      {name:'olorato mosiane', title:'planetary science', email:'omosiane@ska.ac.az'},
    ];


    $scope.newApproaches = [
      {name:'erika nesvold', title:'planetary science', email:'enesvold@carnegiescience.du'},
      {name:'elmarie van heerden', title:'data science', email:'elmarie.vanheerden@lmh.ox.ac.uk'},
      {name:'troy hernandez', title:'data science', email:'troy.hernandez.phd@gmail.com'},
      {name:'nicolas erasmus', title:'planetary science', email:'nerasmus@saao.ac.za'},
    ];

    $scope.newDiscoveries = [
      {name:'christopher watkins', title:'data science', email:'christopher.watkins@me.com'},
      {name:'robert citron', title:'planetary science', email:'ricitron@gmail.com'},
      {name:'chedy raissi', title:'data science', email:'chedy.raissi@inria.fr'},
      {name:'amar shah', title:'data science', email:'as793@cam.ac.uk'},
    ];

  });
