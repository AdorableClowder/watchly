var photoController = require('./photoController.js');
var utils = require('../config/utility');


module.exports = function (app) {
  // app === userRouter injected from middlware.js
    app.get('/sign_s3', photoController.uploadPhoto);
};
