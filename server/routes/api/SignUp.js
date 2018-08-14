const passport = require('passport')


module.exports = (app) => {
  
    app.post('/api/signup', passport.authenticate('local-signup', 
    {
        successRedirect: '/api/SignUpSuccess', // redirect to the secure profile section
        failureRedirect: '/api/SignUpFail', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));

    app.get('/api/SignUpSuccess', (req, res) =>{
        console.log('SignUp success');
        console.log(req.user);
        res.json({signedUp: true, user: req.user});
    });
      
    app.get('/api/SignUpFail', (req, res) =>{
        console.log('SignUp Fail');
        console.log(null);
        const message = req.flash().signUpMessage[0];
        console.log('signup message: ' + message);
        res.json({signedUp: false, message: message});
    });
    
};
