var app = angular.module("devBuddy", ["ui.router", 'ngclipboard']);
 
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("/main")
        
    $stateProvider

    .state('main', {
        url: "/main",
        templateUrl: "pages/main.html" 
    })
    .state("calculator", {
        url: "/calculator",
        templateUrl : "pages/calculator.html"
    })
    .state("converter", {
        url: "/converter",
        templateUrl : "pages/converter.html"
    })
    .state("formatter", {
        url: "/formatter",
        templateUrl : "pages/formatter.html"
    })
    .state("minifier", {
        url: "/minifier",
        templateUrl : "pages/minifier.html"
    })
    .state("spliter", {
        url: "/spliter",
        templateUrl : "pages/spliter.html"
    })
    .state("string-utils", {
        url: "/string-utils",
        templateUrl : "pages/string-utils.html"
    })
    .state("validator", {
        url: "/validator",
        templateUrl : "pages/validator.html"
    })
    .state("viewer", {
        url: "/viewer",
        templateUrl : "pages/viewer.html"
    })

    .state("string-utils.reverse", {

        url: "/reverse-string",
        templateUrl: "pages/string-utils/reverse-string.html"
    })
    .state("string-utils.length", {

        url: "/calculate-string-length",
        templateUrl: "pages/string-utils/calculate-string-length.html"
    })
    .state("string-utils.count", {

        url: "/calculate-string-length",
        templateUrl: "pages/string-utils/word-count.html"
    })
            
}]);


function copyStatus() {
    Materialize.toast('Text Copied !!!', 2000);
}

app.filter('reverse', function() {
        return function(str) {
            return str.split("").reverse().join("");
        };
});

app.filter('length', function() {
        return function(str) {
            if(str.length == 0) {
                return "Length : 0";
            }
            return "Length : "+str.length;
        };
});

app.filter('wordCount', function() {
        return function(str) {
            if(str.length == 0) {
                return "Count : 0";
            }
            return "Count : "+str.split(' ').length;
        };
});