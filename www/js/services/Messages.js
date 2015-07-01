angular.module('watchly.Messages', [])

.factory('Messages', function ($http) {
  var getMessageByIncident = function (incident) {
    return $http({
        method: 'GET',
        url: '/api/incidents',
        data: incident
      })
      .then(function (res) {
        if (res.status === 200) {} else {
          console.log(res.data.error);
        }
        return res.data;
      });
  };

  var createNewMessage = function (message) {
    return $http({
        method: 'POST',
        url: '/api/messages',
        data: message
      })
      .then(function (res) {
        if (res.status === 200) {} else {
          console.log(res.data.error);
        }
        return res.data;
      });
  };

  return {
    getMessageByIncident: getMessageByIncident,
    createNewMessage: createNewMessage
  };
})
