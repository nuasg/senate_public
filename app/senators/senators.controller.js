(function(){
    angular.module("senate")
    .controller("SenatorsController",["$scope", "$state", "$http", function($scope, $state, $http){
        $http.get("senate/api/user").success(function(data){
            $scope.senators = data.filter(function(person) {
                if (person.role == "Senator" && person.active && person.firstName) {
                    return person;
                }
            });
        });
        $scope.selectSenator = function (senator) {
            return;
        }
    }])
}());
