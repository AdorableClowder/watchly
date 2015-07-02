angular.module('watchly.ImageCtrl', [])

.controller('ImageCtrl', function ($scope, $http) {

  $scope.uploadFile = function (files) {
    var fd = new FormData(files);
    //Take the first selected file
    fd.append("file", files[0]);

    $http.post("/api/sign_s3", fd, {
      withCredentials: true,
      headers: {
        'Content-Type': undefined
      },
      transformRequest: angular.identity
    })
      .success(function () {
        console.log('success!')
      })
      .error(function () {
        console.log('error!')
      });
  };

})
