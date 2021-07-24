const EventEmitter = require("events");
const {
  MessageEncodingDecodingUtil,
} = require("../utils/MessageEncodingDecodingUtil");
const { MessageFactory } = require("./MessageFactory");
class EmitterService extends EventEmitter{
  constructor({ count: count, source: source }) {
    super();
    this.count = count;
    this.source = source;
  }
    generateMessageStream() {
    let messageQueue = [];
    let messageObj = new MessageFactory({ source: this.source });
    for (let i = 0; i < this.count; i++) {
      let message = messageObj._message;
      let checksum = MessageEncodingDecodingUtil.generateSignature(message);
      message.secret_key = checksum; //sign the message for data integrity
      let encryptMessage = MessageEncodingDecodingUtil.encrypt(message);
      //let decrypt = MessageEncodingDecodingUtil.decrypt(encrypt);
      messageQueue.push(encryptMessage.content);
    }
    return messageQueue.join('|');
  }
}



module.exports = { EmitterService };
