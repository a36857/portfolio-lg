angular.module("mainApp")
  .controller('NewProjectController',function($scope,$http,$location){
      $scope.submit = function() {
          var url = "/projects";
          var headers = { headers: {'Content-Type': 'application/json'} };
          var newProject = angular.element('#textArea').val(); //$('#textArea').val();

          $http.post(url,newProject,headers).success(successCb).error(errorCb());

          function successCb(rsp) {
            $location.path('#/');
          }
          function errorCb() {
            $location.path('#/newproject');
          }
      };
  })
