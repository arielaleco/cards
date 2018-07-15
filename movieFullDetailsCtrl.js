app.controller('movieFullDetailsCtrl', function($scope, $routeParams,moviesServices,$sce) {
    $scope.movieId = $routeParams.movieId ;
    $scope.youtubeUrl = "";
    //alert($routeParams.movieId );

    moviesServices.getMovieDetails($scope.movieId).then(function (movie) {
        console.log('in here');

        var theLink = $sce.trustAsResourceUrl("https://www.youtube.com/embed/" +movie.youtubeUrl) ; 
        $scope.youtubeUrl = theLink;
        
        
       // alert(youtube);
    }, function (error) {

        $log.error(error)
    });







  })