require('dotenv').config();
const dataSource = require('./data.json');
const { EmitterService } = require('./src/services/EmitterService');
let emitterServiceObj = new EmitterService({count:10,source:dataSource});
emitterServiceObj.generateMessageStream().then(console.log).catch(console.error);
//console.log(result);







