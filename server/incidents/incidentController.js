var knex = require('../config/knex-config');
var Incident = require('../db/models/incident');
var Incidents = require('../db/collections/incidents');

module.exports = {
  findIncident: function (req, res) {
    var body = req.body;

    var xMin = body.xMin;
    var xMax = body.xMax;
    var yMin = body.yMin;
    var yMax = body.yMax;

    knex('incidents')
      .whereBetween('latitude', [xMin, xMax])
      .whereBetween('longitude', [yMin, yMax])
      .then(function (rows) {
        res.send(rows);
      });
  },

  // TODO: upPopularity and downPopularity knex db query functions to
  updatePopularity: function (req, res, next) {
    // change incidentTypeId based on the popularity
    // refresh page/ re-render view to reflect change

    // check if this incident is a dog
    var updateId;
    if (req.body.incidentTypeId === 1 || req.body.incidentTypeId === 2 || req.body.incidentTypeId === 3) {
      if (req.body.popularity > 0) {
        updateId = 2; // green dog
      } else if (req.body.popularity === 0) {
        updateId = 1; // black dog
      } else {
        updateId = 3; // red dog
      }
    // check if this incident is a cat
    } else if (req.body.incidentTypeId === 4 || req.body.incidentTypeId === 5 || req.body.incidentTypeId === 6) {
      if (req.body.popularity > 0) {
        updateId = 5; // green cat
      } else if (req.body.popularity === 0) {
        updateId = 4; // black cat
      } else {
        updateId = 6; // red cat
      }
    // check if this incident is a fish
    } else if (req.body.incidentTypeId === 7 || req.body.incidentTypeId === 8 || req.body.incidentTypeId === 9) {
      if (req.body.popularity > 0) {
        updateId = 8; // green fish
      } else if (req.body.popularity === 0) {
        updateId = 7; // black fish
      } else {
        updateId = 9; // red fish
      }
    // check if this incident is a lizard
    } else if (req.body.incidentTypeId === 10 || req.body.incidentTypeId === 11 || req.body.incidentTypeId === 12) {
      if (req.body.popularity > 0) {
        updateId = 11; // green lizard
      } else if (req.body.popularity === 0) {
        updateId = 10; // black lizard
      } else {
        updateId = 12; // red lizard
      }
    // check if this incident is a rat
    } else if (req.body.incidentTypeId === 13 || req.body.incidentTypeId === 14 || req.body.incidentTypeId === 15) {
      if (req.body.popularity > 0) {
        updateId = 14; // green rat
      } else if (req.body.popularity === 0) {
        updateId = 13; // black rat
      } else {
        updateId = 15; // red rat
      }
    // check if this incident is a unicorn
    } else if (req.body.incidentTypeId === 16 || req.body.incidentTypeId === 17 || req.body.incidentTypeId === 18) {
      if (req.body.popularity > 0) {
        updateId = 17; // green unicorn
      } else if (req.body.popularity === 0) {
        updateId = 16; // black unicorn
      } else {
        updateId = 18; // red unicorn
      }
    }

    var query = 'update incidents set popularity = ' + req.body.popularity + ', votes = ' + req.body.votes + ', incidentTypeId = '+ updateId + ' where id = ' + req.body.id;
    console.log(query);
    knex.raw(query)
      .then(function (rows) {
        res.send(rows);
      });
  },

  allIncidents: function (req, res, next) {
    console.log('all incidents controller helper fired');
    var query = 'select users.username, incidents.*, incidentTypes.type, incidentTypes.iconFilename from incidents, users,incidentTypes where incidents.userid = users.id and incidents.incidentTypeId = incidentTypes.id';
    knex.raw(query)
    // knex.select('*').from('incidents')
      .then(function (rows) {
        res.send(rows);
      });
  },

  newIncident: function (req, res, next) {
    var userId = req.session.userId;

    if (userId) {
      req.body.userId = userId;

      new Incident(req.body).save().then(function (newIncident) {
        Incidents.add(newIncident);
        res.send(newIncident);
      });
    }
    else {
      res.status(401).send("Unknown user");
    }
  },

  getIncidentTypes: function (req, res, next) {
    knex('incidentTypes')
      .then(function (rows) {
        res.send(rows);
      });
  }

};

