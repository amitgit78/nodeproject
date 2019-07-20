var mongoose = require('mongoose');
//var Promise = require('bluebird');
var SensorLocation = require('../models/sensorlocation.js');
var ObjectId = require('mongodb').ObjectID;

exports.getLocation = function (req, res, next) {
    var sensorId = mongoose.Types.ObjectId(req.params.sensorid);
    SensorLocation.find({},function (err, data) {
        res.json(data);
    })
}

exports.addLocation=function(req,res,next){
    
    var newLocation = {
        name:req.body.name,
        location:{
            x:req.body.xcoordinate,
            y:req.body.ycoordinate,
            z:req.body.zcoordinate
        }
    }
    //var loc=new SensorLocation(newLocation);
    var loc= new SensorLocation({"name":req.body.name,"description":"location to be updated"});
    SensorLocation.save(loc,function(err,result){
        if(err)
        throw err;
        res.json(result);
    })
}
