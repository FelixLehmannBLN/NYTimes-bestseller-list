// module
var bestsellerApp = angular.module('bestsellerApp', ['ngRoute', 'ngResource'])

// setting routes
  .config(function($routeProvider){
    $routeProvider
      .when('/', {
        controller: 'listController as ctrl',
        templateUrl: 'pages/list.html'
      });
     $routeProvider.otherwise({
       redirectTo: '/'
     });
});

