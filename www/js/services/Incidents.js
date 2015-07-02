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

  // send PUT request to with updated popularity + number of votes
  var updatePopularity = function (incidentId) {
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
  // What is this object gonna look like?
  var getAllIncidents = function () {
    return $http({
        method: 'GET',
        url: '/api/incidents',
      })
      .then(function (res) {
        if (res.status === 200) {} else {
          console.log(res.data.error);
        }
        console.log('data returned from getAllIncidents:', res.data);
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
    updatePopularity: updatePopularity,
    getIncidentsByLocation: getIncidentsByLocation,
    getAllIncidents: getAllIncidents,
    getIncidentTypes: getIncidentTypes,
    createNewIncident: createNewIncident
  };
})
