const path = require('path');


function readPath() {
    return path.join(__dirname);
}

module.exports = { readPath, path }
// exports = { readPath, path }
