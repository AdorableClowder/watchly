angular.module('watchly.Auth', [])

.factory('Auth', function ($http, $location) {
  var authenticatedUser;
  var signin = function (user) {
    return $http({
        method: 'POST',
        url: '/api/users/signin',
        data: user
      })
      .success(function (res) {
        // if (res.status === 200) {
        authenticatedUser = res;
        // } else {
        //   console.log(res.data.error);
        //   console.log(authenticatedUser);
        // }
        // return authenticatedUser;
        return authenticatedUser;
      })
      .error(function (err) {
        throw new Error(err);
      });
  };

  var signup = function (user) {
    return $http({
        method: 'POST',
        url: '/api/users/signup',
        data: user
      })
      .then(function (res) {
        if (res.status === 200) {
          authenticatedUser = res.data;
        } else {
          console.log(res.data.error);
        }
        return authenticatedUser;
      });
  };

  var signout = function () {
    return $http({
        method: 'GET',
        url: '/api/users/signout',
      })
      .then(function (res) {
        authenticatedUser = undefined;
        $location.path('#/');
      });
  };

  var isAuthenticated = function () {
    return authenticatedUser ? true : false;
  };

  var getUser = function () {
    return authenticatedUser;
  };

  var forgotpassword = function (email) {
    return $http({
        method: 'POST',
        url: '/api/users/forgotpassword',
        data: {
          email: email
        }
      })
      .then(function (res) {
        if (res.status === 200) {} else {
          console.log(res.data.error);
        }
        return res.data;
      });
  };

  return {
    signin: signin,
    signup: signup,
    signout: signout,
    isAuthenticated: isAuthenticated,
    getUser: getUser,
    forgotpassword: forgotpassword
  };
})
