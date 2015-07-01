angular.module('watchly', [
  'ionic',
  'watchly.MapCtrl', 'watchly.ImageCtrl',
  'watchly.Auth', 'watchly.FileService', 'watchly.ImageService',
  'watchly.Incidents', 'watchly.Messages',
  'ngCordova'
])

.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
