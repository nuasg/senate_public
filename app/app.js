(function(){
	angular.module("portal",["ui.router","ngCookies"])
		.config(function($stateProvider, $urlRouterProvider){
			$urlRouterProvider.otherwise("/");
			$stateProvider
				.state("home", {
					url: "/",
					templateUrl: "app/home/home.html",
					controller: "HomeController"
				})
				.state("timeline", {
					url: "/timeline",
					templateUrl: "app/views/timeline.html",
					controller: "TimelineController"
				})
		})
}());