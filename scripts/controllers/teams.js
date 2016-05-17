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
      {name:'adam greenberg', title:'planetary science', email:'adam@greenhodge.net', image:'greenbergProfile.png'},
      {name:'alessondra springmann', title:'planetary science', email:'asteroid@alum.mit.edu', image:'alessondraProfile.png'},
      {name:'sinha sravanthi', title:'data science', email:'sinha.sravanthi@gmail.com', image:'sinhaProfile.png'},
      {name:'olorato mosiane', title:'planetary science', email:'omosiane@ska.ac.az', image:'empty.png'},
    ];


    $scope.newApproaches = [
      {name:'erika nesvold', title:'planetary science', email:'enesvold@carnegiescience.du', image:'erikaProfile.png'},
      {name:'elmarie van heerden', title:'data science', email:'elmarie.vanheerden@lmh.ox.ac.uk', image:'elmarieProfile.png'},
      {name:'troy hernandez', title:'data science', email:'troy.hernandez.phd@gmail.com', image:'empty.png'},
      {name:'nicolas erasmus', title:'planetary science', email:'nerasmus@saao.ac.za', image:'nicolasProfile.png'},
    ];

    $scope.newDiscoveries = [
      {name:'christopher watkins', title:'data science', email:'christopher.watkins@me.com', image:'christopherProfile.png'},
      {name:'robert citron', title:'planetary science', email:'ricitron@gmail.com', image:'empty.png'},
      {name:'chedy raissi', title:'data science', email:'chedy.raissi@inria.fr', image:'chedyProfile.png'},
      {name:'amar shah', title:'data science', email:'as793@cam.ac.uk', image:'empty.png'},
    ];

  });
