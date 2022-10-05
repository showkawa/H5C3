const express = require('express')
const router = require('./router')
const app = express()
const jwt = require('jsonwebtoken')
const { expressjwt } = require('express-jwt')
const errorFilter = require('./filter/errorFilter')



// 注册全局json请求体的解析中间件
app.use(express.json())

const secretKey = 'cassiel.with.brian'
// {用户的信息对象，加密的秘钥，配置对象（token的有效期）}
const token = jwt.sign({ username: 'kawa' }, secretKey, { expiresIn: '30s' })

// 注册中间件express-jwt 将jwt还原成json对象
app.use(expressjwt({ secret: secretKey, algorithms: ['HS256'] }).unless({ path: [/^\/api\//] }))

app.use('/admin', router)

console.log('token: ', token)

app.use(errorFilter)


app.listen(80, () => console.log('http:localhost'))




