const io = require("socket.io-client");
let socket = io("http://localhost:3009");
socket.on("message", (data) => {
   console.log("Message: ", data);
});