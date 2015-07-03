var IncidentType = require('../db/models/incidentType');
var IncidentTypes = require('../db/collections/incidentTypes');

var types = [
  {
    'type': 'Dog',
    'iconFilename': 'dog.png'
  },
  {
    'type': 'DogGreen',
    'iconFilename': 'doggreen.png'
  },
  {
    'type': 'DogRed',
    'iconFilename': 'dogred.png'
  },
  {
    'type': 'Cat',
    'iconFilename': 'cat.png'
  },
  {
    'type': 'CatGreen',
    'iconFilename': 'catgreen.png'
  },
  {
    'type': 'CatRed',
    'iconFilename': 'catred.png'
  },
  {
    'type': 'Fish',
    'iconFilename': 'fish.png'
  },
  {
    'type': 'FishGreen',
    'iconFilename': 'fishgreen.png'
  },
  {
    'type': 'FishRed',
    'iconFilename': 'fishred.png'
  },
  {
    'type': 'Lizard',
    'iconFilename': 'lizard.png'
  },
  {
    'type': 'LizardGreen',
    'iconFilename': 'lizardgreen.png'
  },
  {
    'type': 'LizardRed',
    'iconFilename': 'lizardred.png'
  },
  {
    'type': 'Rat',
    'iconFilename': 'rat.png'
  },
  {
    'type': 'RatGreen',
    'iconFilename': 'ratgreen.png'
  },
  {
    'type': 'RatRed',
    'iconFilename': 'ratred.png'
  },
  {
    'type': 'Unicorn',
    'iconFilename': 'unicorn.png'
  },
  {
    'type': 'UnicornGreen',
    'iconFilename': 'unicorngreen.png'
  },
  {
    'type': 'UnicornRed',
    'iconFilename': 'unicornred.png'
  }
];

var createIncidentType = function (type, iconFilename) {
  new IncidentType({'type': type}).fetch().then(function(found) {
    if(!found) {
      new IncidentType({
        'type': type,
        'iconFilename': iconFilename
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
  createIncidentType(type.type, type.iconFilename);
}
