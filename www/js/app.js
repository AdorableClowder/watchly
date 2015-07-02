angular.module('watchly', [
  'ionic', 'watchly.MapCtrl', 'watchly.ImageCtrl', 'watchly.Auth',
  'watchly.Incidents', 'watchly.Messages', 'ngCordova', 'fileUpload', 'ngFileUpload'
])

.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
