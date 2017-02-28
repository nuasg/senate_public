(function(){
    angular.module("senate")
    .controller("TimelineController",["$scope", "$state", "$http", function($scope, $state, $http){
        // $http.get("/senate/api/whoami").success(function(user) {
        //     if (user.role === "Admin") {
        //         $state.go("admin");
        //     } else {
        //         $state.go("senate");
        //     }
        // });
        // $scope.submit = function(){
        //     if ($scope.role === "Senator") {
        //         $state.go("senate");
        //     } else {
        //         $state.go("admin");
        //     }
        // }
        // $scope.logout = function () {
        //     $http.post("/senate/logout").success(function(){
        //         window.location.reload(true);
        //     });
        // }
    }]);
}());
