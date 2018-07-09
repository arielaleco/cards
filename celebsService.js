app.factory('celebsServices', function ($log, $q,$http) {

    // example https://plnkr.co/edit/DNQxGJpft4RypcrQO7FW?p=info
    celebArr = [];
    function Celeb(oneObj) {
        this.firstName = oneObj.firstName;
        this.lastName = oneObj.lastName;
        this.celebImage = oneObj.celebImage;
        this.imdbUrl = oneObj.imdbUrl;
        this.isSelected = false;

        var d = new Date(oneObj.birthDate);
        this.birthDate = d;
    }

    function readFromFile() {
        // define asynchronous object
        var asyncAction = $q.defer();


        // read json file
        $http.get("actors.json").then(function Succsess(response) {
            response.data.forEach(function AddCar(anObj) {
                celebArr.push(new Celeb(anObj))

                // alert(anObj.firstName);  

            });
            asyncAction.resolve(celebArr);


        },

            function Error() {   
                asyncAction.reject("failed to load celebs.json");
                 $log.Error;
                
                });
        return asyncAction.promise;
    }

    return {
        readCelebs : readFromFile
        //   convertMovieDuration : convertMovieLength
    }
});