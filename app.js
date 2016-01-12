// module
var bestsellerApp = angular.module('bestsellerApp', ['ngRoute', 'ngResource']);

bestsellerApp.config(function ($routeProvider){

  $routeProvider

  .when('/', {
    templateUrl: 'pages/list.html',
    controller: 'listController'
  })
})
