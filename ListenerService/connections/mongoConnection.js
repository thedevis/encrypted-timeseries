var mongoose = require('mongoose');
var config = require('./../config/config');
const CONNECTION_STRING= `mongodb://${config.mongo.host}:${config.mongo.port}/${config.mongo.database}?readPreference=secondaryPreferred`;
mongoose.connect(CONNECTION_STRING,{useNewUrlParser: true,useCreateIndex: true,useUnifiedTopology: true});
module.exports = mongoose;

