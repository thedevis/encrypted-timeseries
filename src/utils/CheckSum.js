const crypto = require('crypto');
class CheckSum{
    constructor({message:message}){
        if(message === undefined) throw new Error("MESSAGE_REQUIRED_FOR_CHECKSUM");
        this.message = message;
        this._hashKey = key;
    }
    sha256(hashKey){
        if(hashKey)
            return crypto.createHmac('sha256', this._hashKey).update(this.message).digest('hex');
        else
            return crypto.createHash('sha256').update(this.message).digest('hex');
    }
}


