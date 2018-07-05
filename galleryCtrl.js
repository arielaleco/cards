app.controller("galleryCtrl", function ($scope) {

    function Celeb(firstName, lastName, birthDate, celebImage, imdbUrl) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.celebImage = celebImage;
        this.imdbUrl = imdbUrl;
        this.isSelected =false;

        var d = new Date(birthDate);
        this.birthDate = d;
    }

    $scope.query = "";
     $scope.propToOrder="firstName";
    // $scope.orderBySelect = function(prop){

    //     $scope.propToOrder = prop;
    // }

    $scope.cardWasClicked = function(celeb){
   
        for(var i=0;i< $scope.celebArr.length;i++)
        {
            $scope.celebArr[i].isSelected =false ; 
        }
         celeb.isSelected = true ;                  
    }

    $scope.filterBy = function (oneCard) {
        
        if((oneCard.firstName).toLowerCase().includes(($scope.query).toLowerCase()))
        {
            return true;
        } else {
            return false;
        }
    }



    $scope.celebArr = [
        new Celeb("Gal", "Gadot", 'April 30, 1985', "https://m.media-amazon.com/images/M/MV5BMjUzZTJmZDItODRjYS00ZGRhLTg2NWQtOGE0YjJhNWVlMjNjXkEyXkFqcGdeQXVyMTg4NDI0NDM@._V1_UY317_CR51,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm2933757/"),
        // new Celeb("Gal", "Aadot", 'April 30, 1985', "https://m.media-amazon.com/images/M/MV5BMjUzZTJmZDItODRjYS00ZGRhLTg2NWQtOGE0YjJhNWVlMjNjXkEyXkFqcGdeQXVyMTg4NDI0NDM@._V1_UY317_CR51,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm2933757/"),
        // new Celeb("Gal", "Ladot", 'April 30, 1985', "https://m.media-amazon.com/images/M/MV5BMjUzZTJmZDItODRjYS00ZGRhLTg2NWQtOGE0YjJhNWVlMjNjXkEyXkFqcGdeQXVyMTg4NDI0NDM@._V1_UY317_CR51,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm2933757/"),                
        // new Celeb("Gal", "Zadot", 'April 30, 1985', "https://m.media-amazon.com/images/M/MV5BMjUzZTJmZDItODRjYS00ZGRhLTg2NWQtOGE0YjJhNWVlMjNjXkEyXkFqcGdeQXVyMTg4NDI0NDM@._V1_UY317_CR51,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm2933757/"),        
        new Celeb("Asia", "Argento", 'September 20, 1975', "https://m.media-amazon.com/images/M/MV5BMTk0MzkyNzY2NF5BMl5BanBnXkFtZTcwMjkwMDg2Ng@@._V1_UY317_CR31,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0000782/"),
        new Celeb("Morena", "Baccarin", 'March 2, 1981', "https://m.media-amazon.com/images/M/MV5BNmU5Yjk4OTItMjMzZS00MTYzLWI1ZDktYWM4YWM2NTM2YzMzXkEyXkFqcGdeQXVyMzY2OTA2MzM@._V1_UY317_CR12,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm1072555/"),
        new Celeb("Sarah", "Wright", 'March 2, 1981', "https://m.media-amazon.com/images/M/MV5BOTgzODAyODA1Ml5BMl5BanBnXkFtZTcwNTIxMDk5MQ@@._V1_UX214_CR0,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0942792/"),
        new Celeb("Daniella", "Pineda", 'November 28, 1987 ', "https://m.media-amazon.com/images/M/MV5BMTczMDkxMTc0MV5BMl5BanBnXkFtZTgwODgyMTkyNjE@._V1_UY317_CR50,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm4427331/"),
        new Celeb("Sofia", "Boutella", 'March 2, 1981', "https://m.media-amazon.com/images/M/MV5BMjU0OTQ5NjQ5NF5BMl5BanBnXkFtZTgwNTk2ODQzNDE@._V1_UY317_CR14,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0942792/"),
        new Celeb("Eunice", "Gayson", 'March 17, 1928', "https://m.media-amazon.com/images/M/MV5BMjE1MzIxMTA0Ml5BMl5BanBnXkFtZTcwOTY3MzkwOA@@._V1_UY317_CR23,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0311013/"),
        new Celeb("Zazie", "Beetz", 'March 2, 1981', "https://m.media-amazon.com/images/M/MV5BMTUyMzA5NjkwMV5BMl5BanBnXkFtZTgwMjk3OTUxNjE@._V1_UY317_CR130,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0942792/")



    ];


    //$scope.


});


