'use strict';

/**
 * @ngdoc service
 * @name fdlApp.userService
 * @description
 * # userService
 * Service in the fdlApp.
 */
angular.module('fdlApp')
    .service('userService', function () {
        var user = '';

        return {
            getUser: function () {
                return user;
            },
            setUser: function (value) {
                user = value;
            }
        };


    });
