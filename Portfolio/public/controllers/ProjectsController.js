angular.module("mainApp")
    .controller('ProjectsController',function($scope,$http) {
        var url = "/projects";

        $http.get(url).success( function(rsp) {
          $scope.projects = rsp;
        });
    });
