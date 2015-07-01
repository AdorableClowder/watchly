var incidentController = require('./incidentController.js');

module.exports = function (app) {
  // app === linkRouter injected from middleware.js
  console.log('incident routes module run')
  app.route('/')
    .get(incidentController.allIncidents)
    .post(incidentController.newIncident)
    .put(incidentController.upPopularity)
    .put(incidentController.downPopularity);

  app.route('/nearby')
    .post(incidentController.findIncident);

  app.route('/incidentType')
    .get(incidentController.getIncidentTypes);

};
