//路由模块
'use strict'
const { throws } = require('assert')
// 创建路由对象
const express = require('express')
const userRouter = express.Router()
const f1 = require('./../filter/filter01')
const f2 = require('./../filter/filter02')
// 挂载路由
userRouter.get('/user', [f1, f2], (req, res) => {
    console.log(`Request ${req.url} ${req.method}`)
    res.send(req.query)
})

userRouter.get('/user/permission', (req, res) => {
    throw new Error('System Error')
    res.send(req.query)
})


// 导出路由
module.exports = userRouter