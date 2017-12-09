var app = angular.module("devBuddy", ["ui.router", 'ngclipboard']);
 
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("/main")
        
    $stateProvider

    .state('main', {
        url: "/main",
        templateUrl: "pages/main.html",
        data: {pageTitle: 'DevBuddy - Developer Supporing Tool'} 
    })
    .state('find-tool', {
        url: "/find-tool",
        templateUrl: "pages/find-tool.html",
        data: {pageTitle: 'DevBuddy - Developer Supporing Tool'} 
    })
    .state("calculator", {
        url: "/calculator",
        templateUrl : "pages/calculator.html",
        data: {pageTitle: 'Online Calculator for Developers - DevBuddy Developer Tools'}
    })
    .state("converter", {
        url: "/converter",
        templateUrl : "pages/converter.html",
        data: {pageTitle: 'Online Converter for Developers - DevBuddy Developer Tools'}
    })
    .state("formatter", {
        url: "/formatter",
        templateUrl : "pages/formatter.html",
        data: {pageTitle: 'Online Formatter for Developers - DevBuddy Developer Tools'}
    })
    .state("minifier", {
        url: "/minifier",
        templateUrl : "pages/minifier.html",
        data: {pageTitle: 'Online Minifier for Developers - DevBuddy Developer Tools'}
    })
    .state("string-utils", {
        url: "/string-utils",
        templateUrl : "pages/string-utils.html",
        data: {pageTitle: 'Online String Utils for Developers - DevBuddy Developer Tools'}
    })
    .state("validator", {
        url: "/validator",
        templateUrl : "pages/validator.html",
        data: {pageTitle: 'Online Validator for Developers - DevBuddy Developer Tools'}
    })
    .state("viewer", {
        url: "/viewer",
        templateUrl : "pages/viewer.html",
        data: {pageTitle: 'Online Viewer for Developers - DevBuddy Developer Tools'}
    })
    .state("tools", {
        url: "/tools",
        templateUrl : "pages/tools.html",
        data: {pageTitle: 'Online Tools for Developers - DevBuddy Developer Tools'}
    })
    .state("resources", {
        url: "/resources",
        templateUrl : "pages/resources.html",
        data: {pageTitle: 'Online Resources for Developers - DevBuddy Developer Tools'}
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
    .state("string-utils.password-generator", {

        url: "/password-generator",
        templateUrl: "pages/string-utils/password-generator.html"
    })
    .state("string-utils.random-word-generator", {

        url: "/random-word-generator",
        templateUrl: "pages/string-utils/random-word-generator.html"
    })
    .state("string-utils.remove-empty-line", {

        url: "/remove-empty-line",
        templateUrl: "pages/string-utils/remove-empty-line.html"
    })
    .state("string-utils.remove-extra-space", {

        url: "/remove-extra-space",
        templateUrl: "pages/string-utils/remove-extra-space.html"
    })
    .state("string-utils.sort-text", {

        url: "/sort-text",
        templateUrl: "pages/string-utils/sort-text.html"
    })
    .state("string-utils.string-builder", {

        url: "/string-builder",
        templateUrl: "pages/string-utils/string-builder.html"
    })
    .state("string-utils.split-string", {

        url: "/split-string",
        templateUrl: "pages/string-utils/split-string.html"
    })
    .state("string-utils.text-minifier", {
        
                url: "/text-minifier",
                templateUrl: "pages/string-utils/text-minifier.html"
            })
    .state("string-utils.text-reverse", {

        url: "/text-reverse",
        templateUrl: "pages/string-utils/text-reverse.html"
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
    .state("tools.image-color-picker", {

        url: "/image-color-picker",
        templateUrl: "pages/tools/image-color-picker.html"
    })
    .state("tools.image-comparison", {

        url: "/image-comparison",
        templateUrl: "pages/tools/image-comparison.html"
    })
    .state("tools.image-placeholder", {

        url: "/image-placeholer",
        templateUrl: "pages/tools/image-placeholder.html"
    })
    .state("tools.gif-generator", {

        url: "/gif-generator",
        templateUrl: "pages/tools/gif-generator.html"
    })
    .state("tools.random-icon-generator", {

        url: "/random-icon-generator",
        templateUrl: "pages/tools/random-icon-generator.html"
    })
    .state("tools.table-generator", {

        url: "/table-generator",
        templateUrl: "pages/tools/table-generator.html"
    })
    .state("tools.current-location", {

        url: "/current-location",
        templateUrl: "pages/tools/current-location.html"
    })
    .state("tools.number-series-generator", {

        url: "/number-series-generator",
        templateUrl: "pages/tools/number-series-generator.html"
    })
    .state("tools.url-parser", {

        url: "/qr-url-parser",
        templateUrl: "pages/tools/url-parser.html"
    })
    .state("tools.paragraph-generator", {

        url: "/paragraph-generator",
        templateUrl: "pages/tools/paragraph-generator.html"
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
    .state("formatter.c-formatter", {

        url: "/c-formatter",
        templateUrl: "pages/formatter/c-formatter.html"
    })
    .state("formatter.cpp-formatter", {

        url: "/cpp-formatter",
        templateUrl: "pages/formatter/cpp-formatter.html"
    })
    .state("formatter.java-formatter", {

        url: "/java-formatter",
        templateUrl: "pages/formatter/java-formatter.html"
    })
    .state("formatter.perl-formatter", {

        url: "/perl-formatter",
        templateUrl: "pages/formatter/perl-formatter.html"
    })
    .state("formatter.ruby-formatter", {

        url: "/ruby-formatter",
        templateUrl: "pages/formatter/ruby-formatter.html"
    })
    .state("formatter.avro-formatter", {

        url: "/avro-formatter",
        templateUrl: "pages/formatter/avro-formatter.html"
    })
    .state("formatter.python-formatter", {

        url: "/python-formatter",
        templateUrl: "pages/formatter/python-formatter.html"
    })

            
}]);

app.directive('title', ['$rootScope', '$timeout',
  function($rootScope, $timeout) {
    return {
      link: function() {

        var listener = function(event, toState) {

          $timeout(function() {
            $rootScope.title = (toState.data && toState.data.pageTitle) 
            ? toState.data.pageTitle 
            : 'DevBuddy - Developer Supporing Tool';
          });
        };

        $rootScope.$on('$stateChangeSuccess', listener);
      }
    };
  }
]);

// activate link when it gets click
$("a").click(function(){
    $("a.active").removeClass("active");
    $(this).addClass("active");
});

// toast message for copy to clipboard
function copyStatus(obj) {
    Materialize.toast('Text Copied :)', 2000);
}