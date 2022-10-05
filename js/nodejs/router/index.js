//路由模块
'use strict'
// 创建路由对象
const express = require('express')
const router = express.Router()
const client = require('./../db')

// 挂载路由
router.get('/kawas', (req, res) => {
    console.log(`Request ${req.url} ${req.method}`)
    res.send(req.query)
})

router.get('/account', (req, res) => {
    console.log(`Request ${req.url} ${req.method}`)
    console.log(req.rid)
    res.send(req.query)
})

router.get('/user', (req, res) => {
    console.log(`Request ${req.url} ${req.method}`)


        res.send(req.auth)

    
})

router.post('/user', (req, res) => {
    console.log(`Request ${req.url} ${req.method}`)

    console.log(req.body)

    const insertSql = 'INSERT INTO react_jwt(id, key, value) VALUES($1, $2, $3) RETURNING *'
    const values = [0, req.body.key, req.body.value]
    client.query(insertSql, values, (err, resData) => {
        if (err) {
            console.log('DB error: ', err.message)
        } else {
            console.log('Query data: ', resData?.rows)
        }
        // client.end()
    })

    res.send(req.query)
})

// 导出路由
module.exports = router