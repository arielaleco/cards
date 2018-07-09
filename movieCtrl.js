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
            // $scope.$apply();
             $location.hash('end-of-movies');
             $anchorScroll();

        }, function (error) {
    
            $log.error(error)
        });

        $scope.searchText = "";
        $scope.searchResults = [];

    }


    // function Movie(obj) {
    //     this.name = obj.original_title;
    //     this.imageUrl = "https://image.tmdb.org/t/p/w600_and_h900_bestv2" + obj.backdrop_path;
    //     this.id = obj.id;
    // }
    // $scope.addMovie = function (result) {

    //     var movie = new Movie(result);

    //     var API_KEY = "6e7ce819ef2812ef180f47645888bf65";                

    //     var movieDetailsUrl = "https://api.themoviedb.org/3/movie/" + movie.id + "?api_key=" + API_KEY + "&language=en-US";
    //     var promiseDetails = $http.get(movieDetailsUrl);        
    //     var movieActorsUrl = "https://api.themoviedb.org/3/movie/" + movie.id + "/credits?api_key=" + API_KEY  ;        
    //     var promiseActors = $http.get(movieActorsUrl);
                
    //     Promise.all([promiseDetails, promiseActors]).then(values => { 
            
            
    //         movie.runtime = convertUnits.convertMovieDuration(values[0].data.runtime);
    //              //movie.runtime = values[0].data.runtime;
    //              movie.imdb_id = values[0].data.imdb_id;

    //              var str = values[1].data.cast[0].name;
    //              for(var i=1;i<values[1].data.cast.length;i++)
    //              {
    //                 str =   str + ','+ values[1].data.cast[i].name;
    //              }
    //              movie.actorList = str;             
    //              $scope.moviesArr.push(movie);               
    //              $scope.$apply();
    //              $location.hash('end-of-movies');
    //              $anchorScroll();
    //              //$anchorScroll();
    //             // window.scrollTo(0, 2000);

    //         console.log(values);


    //       }).catch(reason => { 
    //         console.log(reason)
    //       });
       
    //     $scope.searchText = "";
    //     $scope.searchResults = [];

    // }

});