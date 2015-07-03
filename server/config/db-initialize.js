var IncidentType = require('../db/models/incidentType');
var IncidentTypes = require('../db/collections/incidentTypes');

var types = [
  {
    'type': 'Dog',
    'pet': 'dog',
    'iconFilename': 'dog.png'
  },
  {
    'type': 'DogGreen',
    'pet': 'dog',
    'iconFilename': 'doggreen.png'
  },
  {
    'type': 'DogRed',
    'pet': 'dog',
    'iconFilename': 'dogred.png'
  },
  {
    'type': 'Cat',
    'pet': 'cat',
    'iconFilename': 'cat.png'
  },
  {
    'type': 'CatGreen',
    'pet': 'cat',
    'iconFilename': 'catgreen.png'
  },
  {
    'type': 'CatRed',
    'pet': 'cat',
    'iconFilename': 'catred.png'
  },
  {
    'type': 'Fish',
    'pet': 'fish',
    'iconFilename': 'fish.png'
  },
  {
    'type': 'FishGreen',
    'pet': 'fish',
    'iconFilename': 'fishgreen.png'
  },
  {
    'type': 'FishRed',
    'pet': 'fish',
    'iconFilename': 'fishred.png'
  },
  {
    'type': 'Lizard',
    'pet': 'lizard',
    'iconFilename': 'lizard.png'
  },
  {
    'type': 'LizardGreen',
    'pet': 'lizard',
    'iconFilename': 'lizardgreen.png'
  },
  {
    'type': 'LizardRed',
    'pet': 'lizard',
    'iconFilename': 'lizardred.png'
  },
  {
    'type': 'Rat',
    'pet': 'rat',
    'iconFilename': 'rat.png'
  },
  {
    'type': 'RatGreen',
    'pet': 'rat',
    'iconFilename': 'ratgreen.png'
  },
  {
    'type': 'RatRed',
    'pet': 'rat',
    'iconFilename': 'ratred.png'
  },
  {
    'type': 'Unicorn',
    'pet': 'unicorn',
    'iconFilename': 'unicorn.png'
  },
  {
    'type': 'UnicornGreen',
    'pet': 'unicorn',
    'iconFilename': 'unicorngreen.png'
  },
  {
    'type': 'UnicornRed',
    'pet': 'unicorn',
    'iconFilename': 'unicornred.png'
  }
];

var createIncidentType = function (type, pet, iconFilename) {
  new IncidentType({'type': type}).fetch().then(function(found) {
    if(!found) {
      new IncidentType({
        'type': type,
        'pet': pet,
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
  createIncidentType(type.type, type.pet, type.iconFilename);
}
