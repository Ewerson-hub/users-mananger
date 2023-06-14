const mysql = require('mysql2');
require("dotenv").config()

function connectionFactory(){
    const conn = mysql.createConnection({
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: 'users'
    });

    return conn
}
module.exports = {connectionFactory}
