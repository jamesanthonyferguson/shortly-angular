// do not tamper with this code in here, study it, but do not touch
// this Auth controller is responsible for our client side authentication
// in our signup/signin forms using the injected Auth service
angular.module('shortly.auth', ['shortly.nav'])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};

  $scope.signin = function (bool) {
    if (bool){
      Auth.signin($scope.user)
        .then(function (token) {
          $window.localStorage.setItem('com.shortly', token);
          $location.path('/links');
        })
        .catch(function (error) {
          console.error(error);
        });
      }
  };

  $scope.signup = function () {
    Auth.signup($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.shortly', token);
        $location.path('/links');
      })
      .catch(function (error) {
        console.error(error);
      });
  };
});
