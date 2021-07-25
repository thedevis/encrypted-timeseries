
const MessageModel =require('./../models/MessageSample');
require('./../connections/mongo-con');
const message = new MessageModel({
  timestamp_minute:new Date(),
  total_message_count:10,
  message_data:[]
});

message.save()
    .then(data => {
        //res.send(data);
        console.log(data);
    }).catch(err => {
        console.error(err)
    });

class MessageQueueService {
    constructor(queueName) {
      const config = require("./../config/config");
      var amqp = require("amqplib");
      this.QUEUE_NAME = "message_queue";
      this.EXCHANGE_TYPE = "direct";
      this.EXCHANGE_NAME = "main";
      this.KEY = "myKey";
      this.number = "5";
      const connection = amqp.connect("amqp://localhost");
      this.channel;
      connection.then(async (conn) => {
        this.channel = await conn.createChannel();
        await this.channel.assertExchange(this.EXCHANGE_NAME, this.EXCHANGE_TYPE);
        await this.channel.assertQueue(this.QUEUE_NAME);
        this.channel.bindQueue(this.QUEUE_NAME, this.EXCHANGE_NAME, this.KEY);
      });
    }
    enqueue(message){
      this.channel.sendToQueue(this.QUEUE_NAME, Buffer.from(message), {
          persistent: true,
        });  
    }
    
}
  module.exports = MessageQueueService;
  

  