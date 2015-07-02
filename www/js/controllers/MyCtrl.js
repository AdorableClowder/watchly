angular.module('watchly.MyCtrl', ['ngFileUpload'])

.controller('MyCtrl', ['$scope', 'Upload', '$http', 'imageUpload', '$rootScope',

  function ($scope, Upload, $http, imageUpload, $rootScope) {
    $scope.$watch('files', function () {
      if ($scope.files) {
        console.log(imageUpload)
        console.log($scope.files)
        $rootScope.imageUrl = "https://petly2015.s3.amazonaws.com/" + $scope.files[0].name;
        console.log("MyCtrl rootscope imageUrl: ", $rootScope.imageUrl)
        imageUpload.getSignedRequest($scope.files);
      }
    })
  }

]);
