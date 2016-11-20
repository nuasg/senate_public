(function(){
	angular.module("portal")
	.controller("IndexController",["$scope","$state","$http",function($scope,$state,$http){
		$scope.go = function(state) {
			$state.go(state);
		}
	}]);
}());