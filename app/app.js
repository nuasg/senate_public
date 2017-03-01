(function(){
    angular.module("senate",["ui.router","angular.filter"])
        .config(function($stateProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise("/");
            $stateProvider
                .state("timeline", {
                    url: "/",
                    templateUrl: "senate_public/app/timeline/timeline.html",
                    controller: "TimelineController"
                })
                .state("senators", {
                    url: "/senators",
                    templateUrl: "senate_public/app/senators/senators.html",
                    controller: "SenatorsController"
                })
                .state("legislation", {
                    url: "/legislation",
                    templateUrl: "senate_public/app/legislation/legislation.html",
                    controller: "LegislationController"
                }); 
        })
}());
