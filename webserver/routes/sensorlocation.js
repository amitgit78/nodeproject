var express = require('express');
var router = express.Router();
var controller = require('../controllers/sensorlocation');

router.get('/getLocation/:sensorid', controller.getLocation);

router.post('/addlocation/', controller.addLocation);

module.exports = router;