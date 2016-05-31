'use strict';

/**
 * @ngdoc function
 * @name fdlApp.controller:AuthCtrl
 * @description
 * # AuthCtrl
 * Controller of the fdlApp
 */
angular.module('fdlApp')
    .controller('AuthCtrl', function ($scope, $firebaseAuth, $firebase, $window, userService, $location, $rootScope) {

        var config = {
            apiKey: "AIzaSyADzV9ndV1AQ94-iaPkyTUSpAxoXeQN8ms",
            authDomain: "frontierdevelopmentlab.firebaseapp.com",
            databaseURL: "https://frontierdevelopmentlab.firebaseio.com",
            storageBucket: "",
        };
        $window.firebase.initializeApp(config);

        var rootRef = $window.firebase.database().ref();
        var auth = $window.firebase.auth();


        $scope.SignIn = function ($scope, user) {
//            login.loading = true;
            console.log("clicked");
            event.preventDefault();
            var username = user.email;
            var password = user.password;

            auth.signInWithEmailAndPassword(username, password)
                .then(function (user) {
//                login.loading = false;
                    console.log(user);
                    userService.setUser(user);
                    $rootScope.$apply(function () {
                        $location.path("/users");
                        console.log($location.path());
                    });
                }, function (error) {
//                login.loading = false;
                    console.log("noope");
                });
        };

    });
