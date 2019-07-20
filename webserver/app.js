var express = require("express");
var bodyParser = require('body-parser');
var mongoose = require('mongoose'); 
var MongoClient = require('mongodb').MongoClient;
var app = express();
var port = 3001;

app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));

var dependencies = require('./dependencies')(app);

app.use(function (err, req, res, next) {
  res.status(500).send('Internal Server Error');
})

app.get('/',function(req,res,next){
    MongoClient.connect("mongodb://localhost:27017/sensordb", function(err, db) {
        if (err) throw err;
        var dbo = db.db("sensordb");
        dbo.createCollection("sensorlocation", function(err, res) {
          if (err) throw err;
          //db.close();
        });
      });
})
connectMongo();

function connectMongo() {
    var mongooseOptions = {
        server: { poolSize: 100 }
    }
    mongoose.connect("mongodb://127.0.0.1:27017/sensordb", mongooseOptions, function (err) {
        if (err) {
            console.log('connection error', err);
            connectMongo();
        } else {
            console.log('connection successful');
        }
    });
}

mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ' + "mongodb://localhost:27017/sensordb");
});

// If the connection throws an error
mongoose.connection.on('error', function (err) {
    console.log('Mongoose default connection error: ' + "mongodb://localhost:27017/sensordb");
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection 
process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});


process.on('uncaughtException', function (err) {
    writer.write([err]);
});

app.listen(port, () => {
 console.log("Server listening on port " + port);
});

module.exports = app;

