app.controller("movieCtrl", function ($scope,$location,$anchorScroll,moviesServices) {

    $scope.searchResults = [];      
    $scope.searchChange = function () {
        moviesServices.searchMovie($scope.searchText).then(function (searchResults) {
            $scope.searchResults = searchResults;
        }, function (error) {
    
            $log.error(error)
        });
    }

    // $scope.searchChange = function () {
    //     var API_KEY = "6e7ce819ef2812ef180f47645888bf65";
    //     // Calling the API only if there is data in the search
    //     if ($scope.searchText) {

    //         //https://developers.themoviedb.org/3/search/search-movies

    //         var searchUrl = "https://api.themoviedb.org/3/search/movie?api_key=" +
    //             API_KEY + "&language=en-US&query=" + encodeURIComponent($scope.searchText) +
    //             "&page=1&include_adult=false";
    //         $http.get(searchUrl).then(function (response) {
    //             $scope.searchResults = response.data.results;
    //         }, function (error) {
    //             console.error(error);
    //         })
    //     } else {
    //         $scope.searchResults = [];
    //     }
    // }


    
    $scope.moviesArr = [];
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

        //alert("here " + movie.id);
        $location.path("/moviessection/" + movie.id);
    }
    

});