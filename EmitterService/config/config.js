const config={
    ENV:process.env.NODE_ENV,
    app:{
        EMITTER_SERVICE_PORT:process.env.EMITTER_SERVICE_PORT,
        MESSAGE_CHECKSUM_KEY:process.env.MESSAGE_CHECKSUM_KEY,
        SECRET_KEY:process.env.SECRET_KEY,
        IV:process.env.IV,
        MESSAGE_MIN_COUNT:process.env.MESSAGE_MIN_COUNT,
        MESSAGE_MAX_COUNT:process.env.MESSAGE_MAX_COUNT,
    }

}
module.exports = config;