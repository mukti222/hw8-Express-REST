const {Pool} = require('pg')

const pool = new Pool ({
    host : "localhost",
    user: "postgres",
    port: 5432,
    password: "mukti",
    database: "dvdrental"
})

module.exports = pool;