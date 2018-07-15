app.controller('movieFullDetailsCtrl', function($scope, $routeParams,moviesServices) {
    $scope.movieId = $routeParams.movieId ;
    $scope.youtubeUrl = "";
    //alert($routeParams.movieId );

    moviesServices.getMovieDetails($scope.movieId).then(function (movie) {
        $scope.youtubeUrl = movie.youtubeUrl;
       // alert(youtube);
    }, function (error) {

        $log.error(error)
    });







  })