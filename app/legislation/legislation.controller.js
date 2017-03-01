(function(){
    angular.module("senate")
    .controller("LegislationController",["$scope", "$state", "$http", function($scope, $state, $http){
        $scope.state = true;
        $http.get("senate/api/user").success(function(data){
            $scope.senators = data.filter(function(person) {
                if (person.role == "Senator" && person.active && person.firstName) {
                    return person;
                }
            });
        });
        $scope.selectSenator = function (senator) {
            $http.get("senate/api/attendence/" + senator.firstName + "/" + senator.lastName).success(function(attendances){
                $http.get("senate/api/legislation/user/" + senator.netid).success(function(vote){
                    $scope.userInfo = {
                        senator,
                        attendances,
                        vote
                    };
                });
            });
        }
    }])
}());
