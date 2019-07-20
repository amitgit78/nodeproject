var mongoose = require('mongoose');
//var Promise = require('bluebird');
var SensLoc = require('../models/sensorlocation.js');
var ObjectId = require('mongodb').ObjectID;

exports.getLocation = function (req, res, next) {
    var sensorId = mongoose.Types.ObjectId(req.params.sensorid);
    desc = desc.replace(/ /g, ".*");
    SensLoc.find({"_id":sensorid},function (err, data) {
        res.json(data);
    })
}

exports.addLocation=function(req,res,next){
    console.log("coming here");
    var newLocation = {
        name:req.body.name,
        location:{
            x:req.body.xcoordinate,
            y:req.body.ycoordinate,
            z:req.body.zcoordinate
        }
    }
    newLocation.save();
    // newLocation.save(function (err, result) {
    //     if (err) {
    //         res.json({ status: 'Failed' });
    //     } else {
    //         res.json({ status: 'Success' });
    //     }
    // })
        
}
