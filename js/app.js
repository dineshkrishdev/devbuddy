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
    .state("resources", {
        url: "/resources",
        templateUrl : "pages/resources.html"
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

    // resources routes
    .state("resources.browser-information", {

        url: "/browser-information",
        templateUrl: "pages/resources/browser-information.html"
    })

    // tools route
    .state("tools.qr-code-generator", {

        url: "/qr-code-generator",
        templateUrl: "pages/tools/qr-code-generator.html"
    })
    .state("tools.qr-code-reader", {

        url: "/qr-code-reader",
        templateUrl: "pages/tools/qr-code-reader.html"
    })
    .state("tools.bar-code-generator", {

        url: "/bar-code-generator",
        templateUrl: "pages/tools/bar-code-generator.html"
    })
    .state("tools.bar-code-reader", {

        url: "/bar-code-reader",
        templateUrl: "pages/tools/bar-code-reader.html"
    })

    // formatter route
    .state("formatter.json-formatter", {

        url: "/json-formatter",
        templateUrl: "pages/formatter/json-formatter.html"
    })
    .state("formatter.css-formatter", {

        url: "/css-formatter",
        templateUrl: "pages/formatter/css-formatter.html"
    })
    .state("formatter.html-formatter", {

        url: "/html-formatter",
        templateUrl: "pages/formatter/html-formatter.html"
    })
    .state("formatter.xml-formatter", {

        url: "/xml-formatter",
        templateUrl: "pages/formatter/xml-formatter.html"
    })
    .state("formatter.js-formatter", {

        url: "/js-formatter",
        templateUrl: "pages/formatter/js-formatter.html"
    })
    .state("formatter.sql-formatter", {

        url: "/sql-formatter",
        templateUrl: "pages/formatter/sql-formatter.html"
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

