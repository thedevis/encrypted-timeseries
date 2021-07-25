const EventEmitter = require("events");
const {
  MessageEncodingDecodingUtil,
} = require("../utils/MessageEncodingDecodingUtil");
let  messageQueue = require('./MessageService');
messageQueue = new messageQueue()
//let database = require('./../connections/mongo-con');
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
      originalMessage.created_at = new Date();
      messageQueue.enqueue(JSON.stringify(originalMessage))
      this.emit("data",originalMessage);
    });
  }
}

module.exports = { ListenerService };
