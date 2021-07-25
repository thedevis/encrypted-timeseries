const mongoose = require ('mongoose');
const MessageSample = new mongoose.Schema({
    timestamp_minute:{
        type:Date,
        required:true,
    },
    total_message_count:{
        type:Number,
        required:true
    },
    message_data:{
        type:Array
    }
})
MessageSample.index({timestamp_minute:1},{ unique: true });
const model = mongoose.model('message', MessageSample)
module.exports=model;
