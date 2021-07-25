const config={
    ENV:process.env.NODE_ENV,
    app:{
        EMITTER_SERVICE:process.env.EMITTER_SERVICE_URL,
        MESSAGE_CHECKSUM_KEY:process.env.MESSAGE_CHECKSUM_KEY,
        SECRET_KEY:process.env.SECRET_KEY,
        IV:process.env.IV,
    },
    mongo:{
        host:process.env.MONGO_HOST,
        port:process.env.MONGO_PORT,
        database:process.env.MONGO_DATABASE,
        username:process.env.MONGO_USERNAME,
        password:process.env.MONGO_PASSWORD
    },
    rabbitMQ:{
        host:process.env.RABBIT_MQ_HOST,
        port:process.env.RABBIT_MQ_PORT,
    }
}
module.exports = config;