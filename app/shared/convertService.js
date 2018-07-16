app.factory('convertUnits', function() {

    function convertMovieLength(lengthInMinutes)
    {
      // I get time in minutes and convert it to 2h 34m;
      var asNumber =  Number(lengthInMinutes); 
      var hourse =  Math.floor(asNumber/60);
      var minutes = asNumber -(hourse*60);
      return hourse+"h " + minutes+"m" ;
    }
    

    return {
       convertMovieDuration : convertMovieLength
    }
});