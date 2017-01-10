var app = angular.module('powerRank', ['ui.router', 'chart.js']);

app.config(function($stateProvider, $urlRouterProvider,$httpProvider) {

  const home = {
    name: 'home',
    url: '/',
    templateUrl: 'partials/landing-page.html',
    controller: 'genres'
  }

  const signup = {
    name: 'signup',
    url: '/signup',
    templateUrl: 'partials/signup.html',
    controller: 'users'
  }

  $stateProvider.state(home);
  $stateProvider.state(signup);


  $urlRouterProvider.otherwise('/')


})
