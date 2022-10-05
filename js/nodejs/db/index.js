const {Pool, Client} = require('pg')
const pgConfig = require('./../config/pg.sit')


const client = new Client(pgConfig)
client.connect()

module.exports = client;

