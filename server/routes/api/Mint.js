const passport = require('passport')
const User = require('../../models/User');
const ObjectId = require('mongodb').ObjectID;

module.exports = (app) => {
    
    app.post('/api/AddMint', (req, res) =>{
        
        let newMint = {

            _id          : ObjectId(),
            title        :  req.body.title,
            src         : req.body.href,
            link         : req.body.href,
            description  : req.body.description,
            categories   : [],
            owner        : req.user._id

        }

        var newUser = new User();

        User.findByIdAndUpdate(req.user._id, {$push: {Mints: newMint}},{safe: true}, (err, result) =>{
            if(err){
                console.log(er);
                res.json({message: err});
            }
      
            console.log('Mint added successfully');
            res.json({message: 'Mint added successfully'});
        });
      
    });

    app.post('/api/GetAllMints', (req, res) =>{
                
        User.aggregate([
            { 
                $unwind : "$Mints"
            }, 
            { 
                $group: 
                { 
                    _id: null, 
                    Mints: { $push: "$Mints"  } 
                }
            } 
        ], (err, result) =>{
                if(err){
                    console.log(err);
                    res.json({message: err});
                }
      
                console.log('Mints retrieved');
                console.log(result);
                res.json(result);
            });
     
    });

    app.post('/api/GetMint', (req, res) =>{
                
        User.aggregate([
            {$unwind : "$Mints"},
            {$match : {"Mints._id": ObjectId(req.body.mint)}},
            {$project : { "_id" : req.body.mint, "title" : "$Mints.title", "src" : "$Mints.src", "link" : "$Mints.link","description" : "$Mints.description","categories" : "$Mints.categories", "owner": "$Mints.owner",}}
        ], (err, result) =>{
                if(err){
                    console.log(err);
                    res.json({message: err});
                }
      
                console.log('searching mint ' + req.body.mint);
                console.log('Mint retrieved');
                console.log(result[0]);
                res.json(result[0]);
            });
     
    });

};
