const moment = require("moment/moment")

const filter02 = function(req, res, next){
    console.log(`filter02 ${req.rid}`)
    next && next()
}

module.exports = filter02