const EventEmitter = require("events");
const {
  MessageEncodingDecodingUtil,
} = require("../utils/MessageEncodingDecodingUtil");
class ListenerService extends EventEmitter {
  constructor() {
    super();
    this.processedData=[];
  }
  processMessage(data){
    let encryptedMessages = data.split("|");
    encryptedMessages.forEach(message => {
      let _message = MessageEncodingDecodingUtil.decrypt(message);
      let originalMessage = JSON.parse(_message);
      delete originalMessage.secret_key;
      originalMessage.created_at = new Date();
      //pass wo mongodb
      this.emit("data",originalMessage)
      console.log(originalMessage);
    });
  }
}

module.exports = { ListenerService };
