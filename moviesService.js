app.factory('moviesServices', function ($log, $q, $http,convertUnits) {

    searchResults = [];
    var API_KEY = "6e7ce819ef2812ef180f47645888bf65";

    function searchForMovie(searchText) {

        var asyncAction = $q.defer();

                
        if (searchText) {            
            var searchUrl = "https://api.themoviedb.org/3/search/movie?api_key=" +
                API_KEY + "&language=en-US&query=" + encodeURIComponent(searchText) +
                "&page=1&include_adult=false";
            $http.get(searchUrl).then(function (response) {
                searchResults = response.data.results;
            }, function (error) {
                console.error(error);
            })
        } else {
            searchResults = [];
        }

        asyncAction.resolve(searchResults);
        return asyncAction.promise;

    }

    //======================== Movie ==============================//
    function Movie(obj) {
        this.name = obj.original_title;
        this.imageUrl = "https://image.tmdb.org/t/p/w600_and_h900_bestv2" + obj.backdrop_path;
        this.id = obj.id;
    }

    moviesArr = [];
    function getMoviesFromTMDB(addThis) { 
        
        var asyncAction = $q.defer();
        var movie = new Movie(addThis);
        
        var movieDetailsUrl = "https://api.themoviedb.org/3/movie/" + movie.id + "?api_key=" + API_KEY + "&language=en-US";
        var promiseDetails = $http.get(movieDetailsUrl);        
        var movieActorsUrl = "https://api.themoviedb.org/3/movie/" + movie.id + "/credits?api_key=" + API_KEY  ;        
        var promiseActors = $http.get(movieActorsUrl);
                
        Promise.all([promiseDetails, promiseActors]).then(values => { 
            
            
            movie.runtime = convertUnits.convertMovieDuration(values[0].data.runtime);
                 //movie.runtime = values[0].data.runtime;
                 movie.imdb_id = values[0].data.imdb_id;

                 var str = values[1].data.cast[0].name;
                 for(var i=1;i<values[1].data.cast.length;i++)
                 {
                    str =   str + ','+ values[1].data.cast[i].name;
                 }
                 movie.actorList = str;             
                 moviesArr.push(movie);   
                 asyncAction.resolve(moviesArr);            
                //  $scope.$apply();
                //  $location.hash('end-of-movies');
                //  $anchorScroll();
               

            console.log(values);


          }).catch(reason => { 
            console.log(reason)
          });
       
          return asyncAction.promise;
    }


    //==============================================================
    return {
        searchMovie : searchForMovie,
        getMovie: getMoviesFromTMDB

    }

});