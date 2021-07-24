require("dotenv").config();
const dataSource = require("./data.json");
const { EmitterService } = require("./src/services/EmitterService");

const port = 3009;
const http = require("http").createServer();
const io = require("socket.io")(http);
//Listen for a client connection
io.on("connection", (socket) => {
  console.log("New Client is Connected!");
  let emitterServiceObj = new EmitterService({ count: 10, source: dataSource });
  setInterval(() => {
    socket.emit("message", emitterServiceObj.generateMessageStream());
  }, 1000 * 5);
});

http.listen(port, () => {
  console.log("Server Is Running Port: " + port);
});
