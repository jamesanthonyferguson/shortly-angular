angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.init = function(){
    $scope.getLinks()
  }

  $scope.search;

  $scope.data = [];

  $scope.getLinks = function() {
    Links.getLinks($scope.data).then(function(data){
      console.log(data);
      $scope.data = data;
    }).catch(function(err){console.log(err);});
  }

  $scope.init();

});
