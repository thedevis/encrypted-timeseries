var mongoose = require('mongoose');
var config = require('./../config/config');
var db = mongoose.createConnection('mongodb://'+config.mongo.host+":"+config.mongo.port+'/'+config.mongo.database+'?readPreference=secondaryPreferred');

db.on('error', function (err) {
   console.log('Mongoose default connection error: ' + err);
});
db.once('open', function callback() {
    console.log('Mongoose default connection open to ' + config.mongo.host + ".");
});
db.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});

process.on('SIGINT', function() {
  db.close(function () {
    console.log('Mongoose default connection disconnected through app termination.');
    process.exit(0);
  });
});
module.exports = db;

