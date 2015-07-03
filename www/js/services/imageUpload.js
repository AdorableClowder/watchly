angular.module('watchly.imageUpload', ['ngFileUpload'])

.factory('imageUpload', function ($http, Upload) {

  var imageUpload = {};

  imageUpload.getSignedRequest = function (files) {
    var file = files[0];
    return $http.get("/api/photos/sign_s3?file_name=" + file.name + "&file_type=" + file.type)
      .then(function (res) {
        if (res.status === 200) {
          console.log("response: " + res);
          console.log("res.signed: " + res.data.signed_request);
          imageUpload.upload(file, res.data.signed_request);
        } else {
          console.error(res.data.error);
        }
      });
  };

  imageUpload.upload = function (file, signed_request) {
    console.log('filetype: '+ file.type);
    return $http({
        method: 'PUT',
        url: signed_request,
        data: file,
        headers: {
                    'x-amz-acl': 'public-read',
                    'Content-Type': file.type,
                    'Expires': 360000,
                    'Key': file.name,
                    'Bucket': 'petly2015'
                  }
      })
      .then(function (resp) {
        console.log(resp);
      });
    // Upload.upload({
    //   url: signed_request,
    //   file: file,
    //   method: 'PUT',
    //   headers: {'x-amz-acl': 'public-read', 'Content-Type': file.type}
    // }).progress(function (evt) {
    //   var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
    //   console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
    // }).success(function (data, status, headers, config) {
    //   console.log('file ' + config.file.name + 'uploaded. Response: ' + data);
    // });
  };

  return imageUpload;
});
