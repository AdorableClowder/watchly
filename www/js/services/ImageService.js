angular.module('watchly.ImageService', [])

.factory('ImageService', function ($cordovaCamera, FileService, $q, $cordovaFile) {

  function sendFile() {

  }
  return {
    sendFile: sendFile
  }
});
