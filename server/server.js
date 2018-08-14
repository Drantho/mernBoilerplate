require('dotenv').config();
const express = require('express');
const fs = require('fs');
const historyApiFallback = require('connect-history-api-fallback');
const mongoose = require('mongoose');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const config = require('../config/config');
const webpackConfig = require('../webpack.config');

const isDev = process.env.NODE_ENV !== 'production';
const port  = process.env.PORT || 8080;

const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const User = require('../server/models/User');

require('../config/passport')(passport);

// Configuration
// ================================================================================================

// Set up Mongoose
mongoose.connect(config.db);
mongoose.Promise = global.Promise;

const app = express();

//app.use(require('cookie-parser')());
//app.use(require('express-session')({ secret: 'keyboard cat' }));
//app.use(passport.initialize());
//app.use(passport.session());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use(flash());

//app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' ,cookie: { 
  secure: false
}})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// API routes
require('./routes')(app);

app.post('/api/signup', passport.authenticate('local-signup', 
    {
      successRedirect: '/api/SignUpSuccess', // redirect to the secure profile section
      failureRedirect: '/api/SignUpFail', // redirect back to the signup page if there is an error
      failureFlash: true // allow flash messages
    }
  )
);


app.post('/api/SignIn', passport.authenticate('local-login', {        
  successRedirect: '/api/signUpSuccess', // redirect to the secure profile section
  failureRedirect: '/api/SignUpFail', // redirect back to the signup page if there is an error
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

app.get('/api/getUser', (req, res) =>{
  if(req.user)
    res.json(req.user);

  res.json({isSignedUp: false});
})

app.post('/api/ChangeShowUserName', (req, res) =>{
  console.log('user: ' + req.user._id);
  User.findByIdAndUpdate(req.user._id, {$set: {'local.userName.public': req.body.showUserName}}, (err, result) =>{
    if(err){
      console.log(er);
      res.json({message: err});
    }

    console.log('showUserName set to ' + req.body.showUserName);
    res.json({message: 'update successful showUserName set to ' + req.body.showUserName});
  });
});

app.post('/api/ChangeShowLastName', (req, res) =>{
  console.log('user: ' + req.user._id);
  User.findByIdAndUpdate(req.user._id, {$set: {'local.lastName.public': req.body.showLastName}}, (err, result) =>{
    if(err){
      console.log(er);
      res.json({message: err});
    }

    console.log('update successful showLastName set to ' + req.body.showLastName);
    res.json({message: 'update successful showLastName set to ' + req.body.showLastName});
  });
});

app.post('/api/ChangeShowFirstName', (req, res) =>{
  console.log('user: ' + req.user._id);
  User.findByIdAndUpdate(req.user._id, {$set: {'local.firstName.public': req.body.showFirstName}}, (err, result) =>{
    if(err){
      console.log(er);
      res.json({message: err});
    }

    console.log('update successful showFirstName set to ' + req.body.showFirstName);
    res.json({message: 'update successful showFirstName set to ' + req.body.showFirstName});
  });
});

app.post('/api/ChangeShowEmail', (req, res) =>{
  console.log('user: ' + req.user._id);
  User.findByIdAndUpdate(req.user._id, {$set: {'local.email.public': req.body.showEmail}}, (err, result) =>{
    if(err){
      console.log(er);
      res.json({message: err});
    }

    console.log('update successful showEmail set to ' + req.body.showEmail);
    res.json({message: 'update successful showEmail set to ' + req.body.showEmail});
  });
});

app.post('/api/ChangeShowJoinDate', (req, res) =>{
  console.log('user: ' + req.user._id);
  User.findByIdAndUpdate(req.user._id, {$set: {'local.joinDate.public': req.body.showJoinDate}}, (err, result) =>{
    if(err){
      console.log(er);
      res.json({message: err});
    }

    console.log('update successful showJoinDate set to ' + req.body.showJoinDate);
    res.json({message: 'update successful showJoinDate set to ' + req.body.showJoinDate});
  });
});

app.post('/api/ChangeShowMints', (req, res) =>{
  console.log('user: ' + req.user._id);
  User.findByIdAndUpdate(req.user._id, {$set: {'showMints': req.body.showMints}}, (err, result) =>{
    if(err){
      console.log(er);
      res.json({message: err});
    }

    console.log('update successful showMints set to ' + req.body.showMints);
    res.json({message: 'update successful showMints set to ' + req.body.showMints});
  });
});


if (isDev) {
  const compiler = webpack(webpackConfig);

  app.use(historyApiFallback({
    verbose: false
  }));

  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    contentBase: path.resolve(__dirname, '../client/public'),
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  }));

  app.use(webpackHotMiddleware(compiler));
  app.use(express.static(path.resolve(__dirname, '../dist')));
} else {
  app.use(express.static(path.resolve(__dirname, '../dist')));
  app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'));
    res.end();
  });
}

app.listen(port, '0.0.0.0', (err) => {
  if (err) {
    console.log(err);
  }

  console.info('>>> 🌎 Open http://0.0.0.0:%s/ in your browser.', port);
});



module.exports = app;
