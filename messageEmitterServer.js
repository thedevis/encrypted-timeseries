const path = require('path')
require("dotenv").config({ path: path.resolve(__dirname, '.env') });
const dataSource = require("./data.json");
const config = require('./src/config/config');
const { EmitterService } = require("./src/services/EmitterService");

const http = require("http").createServer();
const io = require("socket.io")(http);
io.on("connection", (socket) => {
  setInterval(() => {
    let randomMessageCount = Math.floor(Math.random() * (parseInt(config.app.MESSAGE_MAX_COUNT) - parseInt(config.app.MESSAGE_MIN_COUNT) + 1) + parseInt(config.app.MESSAGE_MIN_COUNT));
    let emitterServiceObj = new EmitterService({ count: randomMessageCount, source: dataSource });
    let _messagePacket = emitterServiceObj.generateMessageStream();
    console.log(`message count: ${randomMessageCount}`);
    console.log(`Encrypted Message - ${_messagePacket}`);
    socket.emit("message", _messagePacket);

  }, 1000 * parseInt(config.app.EMITTER_SERVICE_INTERVAL));
});
io.on("disconnect",()=>{
  console.log("client disconnected");
})

http.listen(parseInt(config.app.EMITTER_SERVICE_PORT), () => {
  console.log("Server Is Running Port: " + config.app.EMITTER_SERVICE_PORT);
});

