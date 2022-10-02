const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer()

server.on('request', (req, res) => {
    let url = req.url;
    const method = req.method;

    console.log(`%cRequest ${url} ${method}`, 'color: #315efb')
    res.setHeader('Content-Type', 'text/html; charset=utf-8')

    if(url === '/') {
        url = '/index.html';
    }

    const fpath = path.join(__dirname, '../..' + url)

    fs.readFile(fpath, 'utf-8', (err,dataStr)=> {
        if(err){
            console.log(err.message)
            res.end(notFound(`${url} ${method}`))
        }
        res.end(dataStr)
    })

    // if (url === '/' || url === '/kawa') {
    //     res.end(`${url} ${method} OK`)
    // } else {
    //     res.end(notFound(`${url} ${method}`))
    // }

})

server.listen(80, () => {
    console.log('%cStart a web sever, http://localhost.', 'color: #771caa')
})


function notFound(path) {
    return `<h1>${path} 404 Not Found!</h1>`
}