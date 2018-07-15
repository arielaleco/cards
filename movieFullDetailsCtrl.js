app.controller('movieFullDetailsCtrl', function($scope, $routeParams,moviesServices,$sce) {
    $scope.movieId = $routeParams.movieId ;
    $scope.youtubeUrl = "";
    //alert($routeParams.movieId );

    moviesServices.getMovieDetails($scope.movieId).then(function (movie) {
        

        var theLink = $sce.trustAsResourceUrl("https://www.youtube.com/embed/" +movie.youtubeUrl) ; 
        $scope.youtubeUrl = theLink;
        $scope.youtubeUrlname = movie.youtubeUrlname;
                       
    }, function (error) {

        $log.error(error)
    });







  })