const express = require('express')
const path = require('path')
const app = express()

// express.static() 可以快速的向外提供静态资源
app.use(express.static(path.join(__dirname,'../../css')))
app.use('/img',express.static(path.join(__dirname,'../../images')))

app.get('/kawas', (req, res) => {
    console.log('Request params: ',req.query)
    res.send(req.query)
})
app.get('/kawa/:id', (req, res) => {
    console.log('Request params: ',req.params)
    res.send(req.params)
})

app.listen(80, () => {
    console.log('Start Express Server, http://localhost')
})