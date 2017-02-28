(function(){
    angular.module("senate",["ui.router","angular.filter"])
        .config(function($stateProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise("/");
            $stateProvider
                .state("home", {
                    url: "/",
                    templateUrl: "senate_public/app/home/home.html"
                })
                .state("timeline", {
                    url: "/timeline",
                    templateUrl: "senate_public/app/timeline.html",
                    controller: "TimelineController"
                });
        })
}());
