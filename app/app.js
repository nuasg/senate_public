(function(){
    angular.module("senate",["ui.router","angular.filter"])
        .config(function($stateProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise("/");
            $stateProvider
                .state("home", {
                    url: "/",
                    views: {
                        "": {
                            templateUrl: "senate_public/app/home/home.html",
                            controller: "HomeController"
                        },
                        "titlePage@home": {
                            templateUrl: "senate/app/senate/titlePage.html"
                        },
                        "timeline@home": {
                            templateUrl: "senate/app/senate/timeline.html"
                        }
                    }
                });
        })
}());
