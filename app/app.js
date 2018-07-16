var app = angular.module("galleryApp" , ["ngRoute"]); 

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'home.html'
      
    })
    .when('/celebs', {
      templateUrl: 'app/celebs/celebs.html',
      controller: 'galleryCtrl'
    })
    .when('/moviessection', {
        templateUrl: 'app/movies/moviessection.html',
        controller: 'movieCtrl'
      })
    .when('/moviessection/:movieId', {
        templateUrl: 'app/movies/movieFullDetails.html',
        controller: 'movieFullDetailsCtrl'
      })
    .otherwise({
      redirectTo: '/'
    })
  })
