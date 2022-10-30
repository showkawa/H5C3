const sum = (...params) => {
    return params.reduce((pre, cur) => { return pre + cur }, 0)
}

module.exports = { sum }