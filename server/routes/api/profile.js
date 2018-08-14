const passport = require('passport')
const User = require('../../models/User');

module.exports = (app) => {
    
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

};
