module.exports = function (app) {
    
    /* sensorlocation call */
    var sensorlocation = require('./routes/sensorlocation');
    app.use('/api/sensorlocation',
		function (req, res, next) {
		    return next();
		}, sensorlocation);

    
}