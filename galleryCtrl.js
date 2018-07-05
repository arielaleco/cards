app.controller("galleryCtrl", function ($scope, $http) {

    // function Celeb(firstName, lastName, birthDate, celebImage, imdbUrl) {
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     this.celebImage = celebImage;
    //     this.imdbUrl = imdbUrl;
    //     this.isSelected = false;

    //     var d = new Date(birthDate);
    //     this.birthDate = d;
    // }
    function Celeb(oneObj) {
        this.firstName = oneObj.firstName;
        this.lastName = oneObj.lastName;
        this.celebImage = oneObj.celebImage;
        this.imdbUrl = oneObj.imdbUrl;
        this.isSelected = false;

        var d = new Date(oneObj.birthDate);
        this.birthDate = d;
    }

    // $scope.orderByArr = ["firstName", "lastName", "birthDate"];
    $scope.orderByArr = [        
        {attName : "firstName", attValue : "First Name"},
        {attName : "lastName", attValue : "Last Name"},
        {attName : "birthDate", attValue : "Birth Date"}
    ];



    $scope.query = "";
    $scope.propToOrder = "firstName";
    $scope.filteredCounter = 0;
    // $scope.orderBySelect = function(prop){

    //     $scope.propToOrder = prop;
    // }

    $http.get("actors.json").then(function Succsess(response) {
        response.data.forEach(function AddCar(anObj){
            $scope.celebArr.push(new Celeb(anObj)) 
            
            // alert(anObj.firstName);  

        })

       
    },

        function Error() { });
    $scope.cardWasClicked = function (celeb) {

        for (var i = 0; i < $scope.celebArr.length; i++) {
            $scope.celebArr[i].isSelected = false;
        }
        celeb.isSelected = true;
    }

$scope.LookInTMDB= function(){
//    מפתח API (v3 auth)
//6e7ce819ef2812ef180f47645888bf65

//API אסימון גישת קריאת (v4 auth)
//eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTdjZTgxOWVmMjgxMmVmMTgwZjQ3NjQ1ODg4YmY2NSIsInN1YiI6IjViM2UwNTcwYzNhMzY4NTA2OTAwOTRhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.li9CHjnsCD5SbGFvek2B4Zhw6KcunocsOVQAWaRmEag

//API דוגמה של בקשת
//https://api.themoviedb.org/3/movie/550?api_key=6e7ce819ef2812ef180f47645888bf65


    $http.get("https://api.themoviedb.org/3/authentication/token/new?api_key=6e7ce819ef2812ef180f47645888bf65").then(function Succsess(response){
        //https://developers.themoviedb.org/3/authentication/create-request-token
        https://api.themoviedb.org/3/find/{external_id}?api_key=<<api_key>>&language=en-US&external_source=imdb_id
        alert('GOOD ' + JSON.stringify( response));
    },
    function error(){
          alert('error');
    }

);
    

  
}


    $scope.filterBy = function (oneCard, index) {

        if (index == 0) {
            $scope.filteredCounter = 0;
        }
        if ((oneCard.firstName).toLowerCase().includes(($scope.query).toLowerCase())) {
            $scope.filteredCounter++;
            return true;
        } else {
            return false;
        }
    }


    $scope.celebArr = [];
    // $scope.celebArr = [
    //     new Celeb("Gal", "Gadot", 'April 30, 1985', "https://m.media-amazon.com/images/M/MV5BMjUzZTJmZDItODRjYS00ZGRhLTg2NWQtOGE0YjJhNWVlMjNjXkEyXkFqcGdeQXVyMTg4NDI0NDM@._V1_UY317_CR51,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm2933757/"),
    //     // new Celeb("Gal", "Aadot", 'April 30, 1985', "https://m.media-amazon.com/images/M/MV5BMjUzZTJmZDItODRjYS00ZGRhLTg2NWQtOGE0YjJhNWVlMjNjXkEyXkFqcGdeQXVyMTg4NDI0NDM@._V1_UY317_CR51,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm2933757/"),
    //     // new Celeb("Gal", "Ladot", 'April 30, 1985', "https://m.media-amazon.com/images/M/MV5BMjUzZTJmZDItODRjYS00ZGRhLTg2NWQtOGE0YjJhNWVlMjNjXkEyXkFqcGdeQXVyMTg4NDI0NDM@._V1_UY317_CR51,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm2933757/"),                
    //     // new Celeb("Gal", "Zadot", 'April 30, 1985', "https://m.media-amazon.com/images/M/MV5BMjUzZTJmZDItODRjYS00ZGRhLTg2NWQtOGE0YjJhNWVlMjNjXkEyXkFqcGdeQXVyMTg4NDI0NDM@._V1_UY317_CR51,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm2933757/"),        
    //     new Celeb("Asia", "Argento", 'September 20, 1975', "https://m.media-amazon.com/images/M/MV5BMTk0MzkyNzY2NF5BMl5BanBnXkFtZTcwMjkwMDg2Ng@@._V1_UY317_CR31,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0000782/"),
    //     new Celeb("Morena", "Baccarin", 'March 2, 1981', "https://m.media-amazon.com/images/M/MV5BNmU5Yjk4OTItMjMzZS00MTYzLWI1ZDktYWM4YWM2NTM2YzMzXkEyXkFqcGdeQXVyMzY2OTA2MzM@._V1_UY317_CR12,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm1072555/"),
    //     new Celeb("Sarah", "Wright", 'March 2, 1981', "https://m.media-amazon.com/images/M/MV5BOTgzODAyODA1Ml5BMl5BanBnXkFtZTcwNTIxMDk5MQ@@._V1_UX214_CR0,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0942792/"),
    //     new Celeb("Daniella", "Pineda", 'November 28, 1987 ', "https://m.media-amazon.com/images/M/MV5BMTczMDkxMTc0MV5BMl5BanBnXkFtZTgwODgyMTkyNjE@._V1_UY317_CR50,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm4427331/"),
    //     new Celeb("Sofia", "Boutella", 'March 2, 1981', "https://m.media-amazon.com/images/M/MV5BMjU0OTQ5NjQ5NF5BMl5BanBnXkFtZTgwNTk2ODQzNDE@._V1_UY317_CR14,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0942792/"),
    //     new Celeb("Eunice", "Gayson", 'March 17, 1928', "https://m.media-amazon.com/images/M/MV5BMjE1MzIxMTA0Ml5BMl5BanBnXkFtZTcwOTY3MzkwOA@@._V1_UY317_CR23,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0311013/"),
    //     new Celeb("Zazie", "Beetz", 'March 2, 1981', "https://m.media-amazon.com/images/M/MV5BMTUyMzA5NjkwMV5BMl5BanBnXkFtZTgwMjk3OTUxNjE@._V1_UY317_CR130,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0942792/")
    // ];


    //$scope.


});


