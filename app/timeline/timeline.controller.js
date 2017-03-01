(function(){
    angular.module("senate")
    .controller("TimelineController",["$scope", "$state", "$http", function($scope, $state, $http){
        var initial = new Date();
        $http.get("senate/api/terms/" + initial).success(function(data){
            var selected = null;
            data.forEach(function(obj){
                obj.end_date = new Date(obj.end_date);
                obj.start_date = new Date(obj.start_date);
                if (obj.start_date <= initial && obj.end_date >= initial) {
                    selected = obj;
                }
            });
            $scope.dates = {
                data,
                selected
            }
            if (selected) {
                $scope.getDocs(selected.start_date,selected.end_date);  
            }
        });
        $scope.getDocs = function(start, end){
            var query = "senate/api/document/public/" + start + "/" + end;
            var map = {};
            $http.get(query).success(function(data){
                data.forEach(function(item){
                    if (item.weekOf in map) {
                        map[item.weekOf].push(item);
                    } else {
                        map[item.weekOf] = [item];
                    }
                });
                $scope.items = []
                for (var key in map) {
                    $scope.items.push([key, map[key]]);
                }
            });
        }
    }])
}());
