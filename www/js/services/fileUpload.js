angular.module('fileUpload', [])

.service('fileUpload', function ($http) {
  this.uploadFileToUrl = function (file, uploadUrl) {
    var fd = new FormData();
    fd.append('file', file);
    $http.post(uploadUrl, fd, {
      transformRequest: angular.identity,
      headers: {
        'Content-Type': undefined
      }
    })
      .success(function () {
        console.log('success!')
      })
      .error(function () {
        console.log('error!')
      });
  }
});
