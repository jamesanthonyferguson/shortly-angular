angular.module('shortly.nav', [])

.controller('NavController', function ($scope, Auth) {
  // $scope.headers = {signin: !Auth.isAuth(), signup: !Auth.isAuth(), links: Auth.isAuth(), shorten: Auth.isAuth(), signout: Auth.isAuth()}
  $scope.headers = {signin: true, signup: true, links: true, shorten: true, signout: true}
  // $scope.signout = function(){
  //   console.log('signing out')
  //   Auth.signout();
  //   $scope.headers = {signin: !Auth.isAuth(), signup: !Auth.isAuth(), links: Auth.isAuth(), shorten: Auth.isAuth(), signout: Auth.isAuth()}
  // };

})
.directive('navigator', function(){
  return {
    restrict: 'E',
    templateUrl: 'app/navigator.html'
  }
})
