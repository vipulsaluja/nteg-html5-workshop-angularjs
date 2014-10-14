(function(){
	angular
    .module("demoApp", ['ngRoute', 'anotherModule'])
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        .when("/", {templateUrl: "partials/home.html"}) // Home
        
        .when("/screen1", {templateUrl: "partials/screen1.html"}) // Pages
        .when("/screen2", {templateUrl: "partials/screen2.html"}) // Pages
        
        .otherwise("/404", {templateUrl: "partials/404.html"}); // else 404
    }]);

})();