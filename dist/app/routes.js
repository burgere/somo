"use strict";

angular.module("ngapp").config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("/login");

    $stateProvider.state("main", {
        url: "/main",
        templateUrl: "app/components/main/main.html",
        controller: "MainController",
        controllerAs: "main"
    })
    .state("login", {
        url: "/login",
        templateUrl: "app/components/login/login.html",
        controller: "LoginController",
        controllerAs: "login"
    });

    // $stateProvider
    //     .state('root', {
    //         url: '',
    //         abstract: true,
    //         views: {
    //             'content@': {
    //                 templateUrl: 'app/components/main.html',
    //                 controller: 'main'
    //             }
    //         }
    //     })

}]);
