
class MessageGenerator{
    constructor({messageCount:messageCount}){
        this.messageCount = messageCount;
    }
    async generate(){
        
    }
}

class RandomMessageCreator{
    constructor({source:source}){
        this.source = source
    }
    message(){
        let _name = this.source.name;
        let _city = this.source._city;
    }
    
}

const source = JSON.parse(require('./../../data.json'));
let RandomMessageCreator =  new RandomMessageCreator(source);
console.log(RandomMessageCreator.message());









