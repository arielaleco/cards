app.controller("movieCtrl", function ($scope,$location,$anchorScroll,moviesServices) {

    $scope.searchResults = [];      
    $scope.searchChange = function () {
        moviesServices.searchMovie($scope.searchText).then(function (searchResults) {
            $scope.searchResults = searchResults;
        }, function (error) {
    
            $log.error(error)
        });
    }

        
    //$scope.moviesArr = [];
    $scope.addMovie = function (result) {
        moviesServices.getMovie(result).then(function (moviesArr) {
            $scope.moviesArr = moviesArr;
             //$scope.$apply();
             //$location.hash('end-of-movies');
            // $anchorScroll();

        }, function (error) {
    
            $log.error(error)
        });

        $scope.searchText = "";
        $scope.searchResults = [];

    }

    $scope.getMovieDetails = function(movie){        
        $location.path("/moviessection/" + movie.id);
    }
    

});