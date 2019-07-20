module.exports = function (app) {

    var express = require('express');
    var bodyParser = require('body-parser');

    app.use(express.static('www'));
    app.use(express.static('vendor'));
    app.use(express.static('www/app/components/navbar'));

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));


    /* sensorlocation call */
    var sensorlocation = require('./routes/sensorlocation');
    app.use('/api/sensorlocation',
		function (req, res, next) {
		    return next();
		}, sensorlocation);

    // var moments = require('./routes/moments');
    // app.use('/api/groups',
	// 	function (req, res, next) {
	// 	    return next();
	// 	}, moments);

    // var tasks = require('./routes/tasks');
    // app.use('/api/tasks',
	// 	function (req, res, next) {
	// 	    return next();
	// 	}, tasks);
   
}