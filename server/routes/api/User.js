const passport = require('passport')
const User = require('../../models/User');

module.exports = (app) => {
    app.get('/api/getUser', (req, res) =>{
        if(req.user)
            res.json(req.user);
      
        res.json({isSignedUp: false});
    });

    app.post('/api/SearchUser', (req, res) =>{
        
        console.log(req.body);

        User.findOne({$or:[{ '_id' :  req.body.user },{'local.userName.userName': req.body.user}]}, (err, data) => {
            if(err){
                console.log(err);
                res.json(err);
            }            

            console.log(data);
            res.json(data);
        });
        
    });

}