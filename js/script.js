var app = angular.module("devBuddy", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "tt.html"
    })
    .when("/formatter", {
        templateUrl : "tt.html"
    });
});