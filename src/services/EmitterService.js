const EventEmitter = require("events");
const { MessageEncodingDecodingUtil } = require("../utils/MessageEncodingDecodingUtil");
const { MessageFactory } = require("./MessageFactory");
class EmitterService{
    constructor({count:count,source:source}){
        this.count =  count;
        this.source=source;

    }
    async generateMessageStream(){
        let messageQueue = [];
        let messageObj =  new MessageFactory({source:this.source});
        for(let i=0;i<this.count;i++){
            messageQueue.push(messageObj._message)
        }
        return messageQueue;
    } 
}
module.exports = {EmitterService}