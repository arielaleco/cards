app.directive("movieDirective", function() {
    return {
      //template: "<h2>My Directive</h2><p>This is my directive</p>",
      templateUrl: "movieDirective.html",
      restrict: "EAC"
    }
  });