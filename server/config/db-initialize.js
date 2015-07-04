var IncidentType = require('../db/models/incidentType');
var IncidentTypes = require('../db/collections/incidentTypes');

var types = [
  {
    'type': 'dog',
    'pet': 'dog',
    'iconFilename': 'dog.png',
    'value': 0
  },
  {
    'type': 'doggreen',
    'pet': 'dog',
    'iconFilename': 'doggreen.png',
    'value': 1
  },
  {
    'type': 'dogred',
    'pet': 'dog',
    'iconFilename': 'dogred.png',
    'value': -1
  },
  {
    'type': 'cat',
    'pet': 'cat',
    'iconFilename': 'cat.png',
    'value': 0
  },
  {
    'type': 'catcreen',
    'pet': 'cat',
    'iconFilename': 'catgreen.png',
    'value': 1
  },
  {
    'type': 'catred',
    'pet': 'cat',
    'iconFilename': 'catred.png',
    'value': -1
  },
  {
    'type': 'fish',
    'pet': 'fish',
    'iconFilename': 'fish.png',
    'value': 0
  },
  {
    'type': 'fishgreen',
    'pet': 'fish',
    'iconFilename': 'fishgreen.png',
    'value': 1
  },
  {
    'type': 'fishred',
    'pet': 'fish',
    'iconFilename': 'fishred.png',
    'value': -1
  },
  {
    'type': 'lizard',
    'pet': 'lizard',
    'iconFilename': 'lizard.png',
    'value': 0
  },
  {
    'type': 'lizardgreen',
    'pet': 'lizard',
    'iconFilename': 'lizardgreen.png',
    'value': 1
  },
  {
    'type': 'lizardRed',
    'pet': 'lizard',
    'iconFilename': 'lizardred.png',
    'value': -1
  },
  {
    'type': 'rat',
    'pet': 'rat',
    'iconFilename': 'rat.png',
    'value': 0
  },
  {
    'type': 'ratgreen',
    'pet': 'rat',
    'iconFilename': 'ratgreen.png',
    'value': 1
  },
  {
    'type': 'rateed',
    'pet': 'rat',
    'iconFilename': 'ratred.png',
    'value': -1
  },
  {
    'type': 'unicorn',
    'pet': 'unicorn',
    'iconFilename': 'unicorn.png',
    'value': 0
  },
  {
    'type': 'unicorngreen',
    'pet': 'unicorn',
    'iconFilename': 'unicorngreen.png',
    'value': 1
  },
  {
    'type': 'unicornred',
    'pet': 'unicorn',
    'iconFilename': 'unicornred.png',
    'value': -1
  }
];

var createIncidentType = function (type, pet, iconFilename, value) {
  new IncidentType({'type': type}).fetch().then(function(found) {
    if(!found) {
      new IncidentType({
        'type': type,
        'pet': pet,
        'iconFilename': iconFilename,
        'value': value,
      }).save().then(function (newIncidentType) {
        IncidentTypes.add(newIncidentType);
        console.log('added incidentType: ' + type);
      });
    }
  });
}
var type;

for(var i = 0; i < types.length; i++) {
  type = types[i];
  console.log(type);
  createIncidentType(type.type, type.pet, type.iconFilename, type.value);
}
