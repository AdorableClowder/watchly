angular.module('watchly.Incidents', [])

.factory('Incidents', function ($http) {
  var getIncidentById = function (incidentId) {
    return $http({
        method: 'GET',
        url: '/api/incidents/' + incidentId,
      })
      .then(function (res) {
        if (res.status === 200) {} else {
          console.log(res.data.error);
        }
        return res.data;
      });
  };

  // send PUT request to upPopularity by 1 and up Votes by 1
  var upPopularityById = function (incidentId) {
    return $http({
      method: 'PUT',
      url: '/api/incidents/' + incidentId,
    })
    .then(function (res) {
      if (res.status === 200) {} else {
        console.log(res.data.error);
      }
    });
  }

  // send PUT request to downPopularity by 1 and  up Votes by 1
  var downPopularityById = function (incidentId) {
    return $http({
      method: 'PUT',
      url: '/api/incidents/' + incidentId,
    })
    .then(function (res) {
      if (res.status === 200) {} else {
        console.log(res.data.error);
      }
    });
  }

  var getIncidentsByLocation = function (location) {
    return $http({
        method: 'GET',
        url: '/api/incidents',
        data: location
      })
      .then(function (res) {
        if (res.status === 200) {} else {
          console.log(res.data.error);
        }
        return res.data;
      });
  };

  var getAllIncidents = function () {
    return $http({
        method: 'GET',
        url: '/api/incidents',
      })
      .then(function (res) {
        if (res.status === 200) {} else {
          console.log(res.data.error);
        }
        return res.data;
      });
  };

  var getIncidentTypes = function (location) {
    return $http({
        method: 'GET',
        url: '/api/incidents/incidentType',
      })
      .then(function (res) {
        if (res.status === 200) {} else {
          console.log(res.data.error);
        }
        return res.data;
      });
  };

  var createNewIncident = function (incident) {
    return $http({
        method: 'POST',
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

  return {
    getIncidentById: getIncidentById,
    upPopularityById: upPopularityById,
    downPopularityById: downPopularityById,
    getIncidentsByLocation: getIncidentsByLocation,
    getAllIncidents: getAllIncidents,
    getIncidentTypes: getIncidentTypes,
    createNewIncident: createNewIncident
  };
})
