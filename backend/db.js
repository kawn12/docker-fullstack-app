const mysql = require('mysql')

const pool = mysql.createPool({
    connectionLimit : 10,
    host: 'mysql',
    user: 'root',
    password: 'c4080113',
    database: 'myapp'
})

exports.pool = pool;