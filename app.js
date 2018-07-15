var app = angular.module("galleryApp" , ["ngRoute"]); 

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'home.html'
      
    })
    .when('/celebs', {
      templateUrl: 'celebs.html',
      controller: 'galleryCtrl'
    })
    .when('/moviessection', {
        templateUrl: 'moviessection.html',
        controller: 'movieCtrl'
      })
    .when('/moviessection/:movieId', {
        templateUrl: 'movieFullDetails.html',
        controller: 'movieFullDetailsCtrl'
      })
    .otherwise({
      redirectTo: '/'
    })
  })
