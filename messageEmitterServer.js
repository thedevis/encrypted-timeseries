require("dotenv").config();
const dataSource = require("./data.json");
const { EmitterService } = require("./src/services/EmitterService");
let emitterServiceObj = new EmitterService({ count: 10, source: dataSource });
const http = require("http")
const PORT = 3009;
const server = http.createServer();
emitterServiceObj.generateMessageStream()
emitterServiceObj.on("generateMessageStream",data=>{
    console.log("data");
})
