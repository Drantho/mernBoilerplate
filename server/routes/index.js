const fs = require('fs');
const path = require('path');
const passport = require('../../config/passport');

module.exports = (app, passport) => {
  // API routes
  fs.readdirSync(__dirname + '/api/').forEach((file) => {
    require(`./api/${file.substr(0, file.indexOf('.'))}`)(app, passport);
  });
};
