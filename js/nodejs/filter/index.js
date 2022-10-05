const moment = require("moment/moment")

const keyLog = function(req, res, next){
    const requestId = moment.now()

    console.log(`Request rid:${requestId},req: ${req.path} ${JSON.stringify(req.query)} ${req.method}`)
    req.rid = requestId
    next && next()
}

module.exports = keyLog