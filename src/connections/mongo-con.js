var mongoose = require('mongoose');
var config = require('./../config/config');
config.mongo.host='127.0.0.1';
config.mongo.port=27017;
config.mongo.database='syook';
const CONNECTION_STRING= `mongodb://${config.mongo.host}:${config.mongo.port}/${config.mongo.database}?readPreference=secondaryPreferred`;
mongoose.connect(CONNECTION_STRING,{useNewUrlParser: true,useCreateIndex: true,useUnifiedTopology: true});
module.exports = mongoose;

