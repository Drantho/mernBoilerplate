const passport = require('passport');

module.exports = (app) => {
  
  app.post('/api/SignIn', passport.authenticate('local-login', {        
    successRedirect: '/api/signUpSuccess', // redirect to the secure profile section
    failureRedirect: '/api/SignUpFail', // redirect back to the signup page if there is an error
  }));
  
};
