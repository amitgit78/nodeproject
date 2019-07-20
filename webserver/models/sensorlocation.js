/**
 * Module dependencies.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/**
 * Schema for SensorLocation.
 */
var sensorLocation = new Schema({
    name:String,
    // location:{
    //     x:Number,
    //     y:Number,
    //     z:Number
    // },
    //description: String,
	//privacy: { type: String, default: "Private" },
	//lastUpdatedOn: { type: Date, default: Date.now },
	//isActive: { type: Boolean, default: true }
});

module.exports = mongoose.model('SensorLocation', sensorLocation);