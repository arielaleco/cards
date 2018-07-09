app.controller("galleryCtrl", function ($scope, $http,celebsServices) {
    
    $scope.celebArr = [];
    celebsServices.readCelebs().then(function (celebArr) {
        $scope.celebArr = celebArr;
    }, function (error) {

        $log.error(error)
    });


    $scope.orderByArr = [
        { attName: "firstName", attValue: "First Name" },
        { attName: "lastName", attValue: "Last Name" },
        { attName: "birthDate", attValue: "Birth Date" }
    ];
    $scope.query = "";
    $scope.propToOrder = "firstName";
    $scope.filteredCounter = 0;




    $scope.cardWasClicked = function (celeb) {

        for (var i = 0; i < $scope.celebArr.length; i++) {
            $scope.celebArr[i].isSelected = false;
        }
        celeb.isSelected = true;
    }

    $scope.LookInTMDB = function () {
        //    מפתח API (v3 auth)
        //6e7ce819ef2812ef180f47645888bf65
        $http.get("https://api.themoviedb.org/3/movie/popular?api_key=6e7ce819ef2812ef180f47645888bf65&language=en-US&page=1").then(
            function Succsess(response) {
                //https://developers.themoviedb.org/3/authentication/create-request-token
                //https://api.themoviedb.org/3/find/{external_id}?api_key=<<api_key>>&language=en-US&external_source=imdb_id
                alert('GOOD ' + JSON.stringify(response.data));
            },
            function error() {
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



  


});


