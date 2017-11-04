var app = angular.module("devBuddy", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "tt.html"
    })
    .when("/calculator", {
        templateUrl : "pages/calculator.html"
    })
    .when("/converter", {
        templateUrl : "pages/converter.html"
    })
    .when("/formatter", {
        templateUrl : "pages/formatter.html"
    })
    .when("/minifier", {
        templateUrl : "pages/minifier.html"
    })
    .when("/spliter", {
        templateUrl : "pages/spliter.html"
    })
    .when("/string_utils", {
        templateUrl : "pages/string_utils.html"
    })
    .when("/validator", {
        templateUrl : "pages/validator.html"
    })
    .when("/viewer", {
        templateUrl : "pages/viewer.html"
    });
});

function activate(obj) {

    $(obj).addClass("active");
}