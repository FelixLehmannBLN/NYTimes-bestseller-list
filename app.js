// module
var bestsellerApp = angular.module('bestsellerApp', ['ngRoute', 'ngResource']);

// setting routes
bestsellerApp.config(function($routeProvider){

  $routeProvider
    .when('/', {
      templateUrl: 'pages/list.html',
      controller: 'listController'
    });

var bestsellerApp = angular.module('bestsellerApp', ['ngRoute', 'ngResource'])

// setting routes
  .config(function($routeProvider){
    $routeProvider
      .when('/', {
        controller: 'listController',
        templateUrl: 'pages/list.html'
      });
     $routeProvider.otherwise({
       redirectTo: '/'
     });
});

