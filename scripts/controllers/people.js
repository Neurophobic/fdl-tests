'use strict';

/**
 * @ngdoc function
 * @name fdlApp.controller:PeopleCtrl
 * @description
 * # PeopleCtrl
 * Controller of the fdlApp
 */
angular.module('fdlApp')
    .controller('PeopleCtrl', function ($scope, $route) {
    
        $scope.$route = $route;

        $scope.persons = [
            {
                name: 'James parr',
                title: 'fdl co-director',
                email: 'james@frontierdevelopmentlab.org',
                image: 'images/people/jamesProfile.png'
            },
            {
                name: 'jordan mcrae',
                title: 'fdl co-director',
                email: 'jordan@frontierdevelopmentlab.org',
                image: 'images/people/jordanProfile.png'
            },
            {
                name: 'bruce pittman',
                title: 'chief systems engineer nasa',
                email: 'robert.b.pittman@nasa.gov',
                image: 'images/people/bruceProfile.png'
            },

            {
                name: 'alison b. lowndes',
                title: 'deep learning solutions nvidia',
                email: 'alowndes@nvidia.com',
                image: 'images/people/alisonProfile.png'
            },
            {
                name: 'bill diamond',
                title: 'ceo seti',
                email: 'bdiamond@seti.org',
                image: 'images/people/billProfile.png'
            },
            {
                name: 'jonathan knowles',
                title: 'Explorer in residence autodesk',
                email: 'jonathan.knowles@autodesk.com',
                image: 'images/people/jonProfile.png'
            },
    ];
    });
