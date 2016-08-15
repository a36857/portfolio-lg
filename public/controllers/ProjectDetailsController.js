angular.module("mainApp")
  .controller('ProjectDetailsController',function($scope,$routeParams,$http,$sce){
    var url = "/projects/" + $routeParams.id;

    $http.get(url).success( function(rsp) {
      $scope.imageFirst = rsp.images.shift();;
      $scope.images = rsp.images;

      $scope.project = rsp;

      $scope.video = $sce.trustAsResourceUrl(rsp.video);
    });
  })
