class Message {
    constructor(name,origin,destination){
        if(name === undefined || origin ===  undefined || destination === undefined) throw new Error("INVALID_MESSAGE");
        this.name = name;
        this.origin=origin;
        this.destination = destination;
    }
}