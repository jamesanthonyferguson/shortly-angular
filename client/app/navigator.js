angular.module('shortly.nav', [])

.controller('NavController', function ($scope) {
  $scope.headers = {signin: true, signup: true, links: true, shorten: true, logOut: true}

  $scope.logOut = function(){
    $scope.headers = {
      signin: true, signup: true, links: false, shorten: false, logOut: false
    }
  };

  $scope.logIn = function(){
    $scope.headers = {signin: false, signup: false, links: true, shorten: true, logOut: true}
  };
})
.directive('navigator', function(){
  return {
    restrict: 'E',
    templateUrl: 'app/navigator.html'
  }
})
