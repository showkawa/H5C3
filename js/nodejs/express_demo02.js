const express = require('express')
const router = require('./router')
const userRouter = require('./router/userRouter')
const app = express()

const keyLog = require('./filter')
const f1 = require('./filter/filter01')
const f2 = require('./filter/filter02')
const errorF = require('./filter/errorFilter')

// 注册全局json请求体的解析中间件
app.use(express.json())
// 注册过滤器
app.use(keyLog)
app.use(f1)
// 注册路由模块
app.use('/admin', router)
app.use('/api', userRouter)

app.use(errorF)

app.listen(80, () => console.log('http:localhost'))

/**
 * 中间件的分类
 * 1.应用级别的中间件，通过app.use(), app.get() 或者app.post(),绑定到app实例上的中间件
 * 2.路由级别的中间件，绑定到express.Router()实例上的中间件 
 * 3.错误级别的中间件 （err,req,res,next）
 *     -错误级别的中间件 必须注册在所有的路由之后
 * 4.内置中间件
 *     - express.static() 快速托管静态资源的中间件
 *     - express.json() 解析json格式的请求数据  app.use(express.json()) > 配置解析 application/json 格式数据的内置中间件
 *     - express.urlencoded 解析URL-encoded格式的请求体数据 app.use(express.urlencoded({extended:false})) 
 *                                  > 配置解析 application/x-www-form-urlencoded 格式数据的内置中间件
 * 5.第三方中间件
 */

