const {Pool} = require('pg')
require('dotenv').config()


const {USER, PASSWORD, HOST, PORT, DATABASE} = process.env
const pool = new Pool({
    user: USER,
    password: PASSWORD,
    host: HOST,
    port: PORT,
    database: DATABASE
})

module.exports = pool