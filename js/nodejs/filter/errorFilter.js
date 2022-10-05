const moment = require("moment/moment")

const errorFilter = function(err,req, res, next){
    console.log(`errorFilter > ${err.message}`)
    res.send(err.message)
}

module.exports = errorFilter