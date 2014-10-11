angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here

  $scope.link = {};

  $scope.result = {};

  $scope.addLink = function(bool){
    if (bool) {
      console.log(Links);
      console.log($scope);
      Links.postLink($scope.link).then(function(data){
        $scope.link = {}
        $scope.result = data;
      }).catch(function(err){console.log(err);});
    }
  }

});
