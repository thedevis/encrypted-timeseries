const config={
    ENV:process.env.NODE_ENV,
    app:{
        EMITTER_SERVICE_PORT:process.env.EMITTER_SERVICE_PORT,
        MESSAGE_CHECKSUM_KEY:process.env.MESSAGE_CHECKSUM_KEY,
        SECRET_KEY:process.env.SECRET_KEY,
        IV:process.env.IV,
        MESSAGE_MIN_COUNT:process.env.MESSAGE_MIN_COUNT,
        MESSAGE_MAX_COUNT:process.env.MESSAGE_MAX_COUNT,
        EMITTER_SERVICE_INTERVAL:process.env.EMITTER_SERVICE_INTERVAL
    },
    mongo:{
        host:process.env.MONGO_HOST,
        port:process.env.MONGO_PORT,
        database:process.env.MONGO_DATABASE,
        username:process.env.MONGO_USERNAME,
        password:process.env.MONGO_PASSWORD
    }
}
module.exports = config;