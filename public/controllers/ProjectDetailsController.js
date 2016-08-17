angular.module("mainApp")
    .controller('ProjectDetailsController',function($scope,$routeParams,$http,$sce){
        var url = "/projects/" + $routeParams.id;

        $('#spinner').show();
        $http.get(url)
             .success( function(rsp) {
                  $scope.imageFirst = rsp.images.shift();;
                  $scope.images = rsp.images;

                  $scope.project = rsp;

                  $scope.video = $sce.trustAsResourceUrl(rsp.video);

                  $('#spinner').hide();
             })
             .error(function() {
                  BootstrapDialog.alert('Some error occurred. Try again later');
                  $('#spinner').hide();
             });
    });
