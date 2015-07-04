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
    // console.log('req.body :', req.body);
    // console.log('=========');
    // console.log('req.body.pet :', req.body.pet);
    // console.log('req.body.popularity :', req.body.popularity);
    var queryValue;
    if (req.body.popularity > 0) {
      queryValue = 1;
    } else if (req.body.popularity === 0) {
      queryValue = 0;
    } else if (req.body.popularity < 0) {
      queryValue = -1;
    }
    var queryId = "select id from incidentTypes where pet = '" + req.body.pet + "' and value = " + queryValue;
    console.log('queryId :', queryId);
    knex.raw(queryId)
      .then(function (rows) {
      // getting the incidentTypeId from pet and popularity
      var myId = rows[0][0]['id'];
      console.log('myId :', myId);
      // use that
      var changeQuery = 'update incidents set popularity = ' + req.body.popularity + ', votes = ' + req.body.votes + ', incidentTypeId = '+ myId + ' where id = ' + req.body.id;
      console.log(changeQuery);
      knex.raw(changeQuery)
        .then(function (rows) {
          res.send(rows);
        });
      });
  },

  allIncidents: function (req, res, next) {
    console.log('all incidents controller helper fired');
    var query = 'select users.username, incidents.*, incidentTypes.type, incidentTypes.pet, incidentTypes.iconFilename from incidents, users,incidentTypes where incidents.userid = users.id and incidents.incidentTypeId = incidentTypes.id';
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

