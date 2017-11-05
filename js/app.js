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
    .state("tools", {
        url: "/tools",
        templateUrl : "pages/tools.html"
    })
    .state("web-resources", {
        url: "/web-resources",
        templateUrl : "pages/web-resources.html"
    })

    // string-utils routes
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
    .state("string-utils.lowercase", {

        url: "/convert-lowercase",
        templateUrl: "pages/string-utils/convert-lowercase.html"
    })
    .state("string-utils.uppercase", {

        url: "/convert-uppercase",
        templateUrl: "pages/string-utils/convert-uppercase.html"
    })
    .state("string-utils.propercase", {

        url: "/convert-propercase",
        templateUrl: "pages/string-utils/convert-propercase.html"
    })

    // web-resources routes
    .state("web-resources.browser-information", {

        url: "/browser-information",
        templateUrl: "pages/web-resources/browser-information.html"
    })

            
}]);

// activate link when it gets click
$("a").click(function(){
    $("a.active").removeClass("active");
    $(this).addClass("active");
});

// toast message for copy to clipboard
function copyStatus(obj) {
    Materialize.toast('Text Copied :)', 2000);
}

// string-utils filters
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

app.filter('propercase', function() {
        return function(str) {
            return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
        };
});

