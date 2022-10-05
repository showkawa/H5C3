const moment = require("moment/moment")

const filter01 = function(req, res, next){
    console.log(`filter01 ${req.rid}`)
    next && next()
}

module.exports = filter01