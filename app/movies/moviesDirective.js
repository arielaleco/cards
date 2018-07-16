app.directive("movieDirective", function() {
    return {
      //template: "<h2>My Directive</h2><p>This is my directive</p>",
      templateUrl: "app/movies/movieDirective.html",
      restrict: "EAC"
    }
  });